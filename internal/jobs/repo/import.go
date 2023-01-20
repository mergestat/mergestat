package repo

import (
	"context"
	"database/sql"
	"encoding/json"
	"fmt"
	"github.com/google/uuid"
	"github.com/jackc/pgtype"
	"github.com/jackc/pgx/v4"
	"github.com/jackc/pgx/v4/pgxpool"
	"github.com/jmoiron/sqlx"
	"github.com/mergestat/mergestat/internal/db"
	"github.com/mergestat/sqlq"
	"github.com/pkg/errors"
	"time"
)

type githubRepository struct {
	Owner  string `db:"login" json:"login"`
	Name   string `db:"name" json:"name"`
	Topics string `db:"topics" json:"topics"`
}

func (repo *githubRepository) URL() string {
	return fmt.Sprintf("https://github.com/%s/%s", repo.Owner, repo.Name)
}

// AutoImport implements the githubRepository auto-import job to automatically
// sync githubRepository from user- or org- accounts.
func AutoImport(pool *pgxpool.Pool, mergestat *sqlx.DB) sqlq.HandlerFunc {
	var queries = db.New(pool)

	return func(ctx context.Context, job *sqlq.Job) (err error) {
		var logger = job.Logger()

		// start sending periodic keep-alive pings!
		go job.SendKeepAlive(ctx, job.KeepAlive-(5*time.Second)) //nolint:errcheck

		// fetch a list of all configured imports that are due now
		var imports []db.ListRepoImportsDueForImportRow
		if imports, err = queries.ListRepoImportsDueForImport(ctx); err != nil {
			logger.Errorf("failed to list repo import job: %v", err)
			return errors.Wrapf(sqlq.ErrSkipRetry, "failed to list repo import job: %v", err)
		}

		logger.Infof("handling %d import(s)", len(imports))
		for _, imp := range imports {
			logger.Infof("executing import %s", imp.ID)

			var tx pgx.Tx // each import is executed within its own transaction
			if tx, err = pool.Begin(ctx); err != nil {
				return errors.Wrapf(err, "failed to start new database transaction")
			}

			// execute the import
			// if the execution fails for some reason, only that import is marked as failed
			// the job still continues executing.
			var importError error
			if importError = handleImport(ctx, queries.WithTx(tx), mergestat, imp); importError != nil {
				logger.Warnf("import(%s) failed: %v", imp.ID, importError.Error())
				_ = tx.Rollback(ctx)
			} else {
				// if the import was successful, commit the changes
				if err = tx.Commit(ctx); err != nil {
					return errors.Wrapf(err, "failed to commit database transaction")
				}
				logger.Infof("import(%s) was successful", imp.ID)
			}

			var importStatus = db.UpdateImportStatusParams{Status: "SUCCESS", ID: imp.ID}
			if importError != nil {
				importStatus.Status, importStatus.Error = "FAILURE", importError.Error()
			}

			// import status updates happen outside the transaction in which the import was processed.
			// this is so that even if the transaction is marked as errored, we could still go ahead and update
			// the job status.
			if err = queries.UpdateImportStatus(ctx, importStatus); err != nil {
				return errors.Wrapf(sqlq.ErrSkipRetry, "failed to update import status: %v", err)
			}
		}

		return nil
	}
}

// handleImport handles execution of a given import configuration
func handleImport(ctx context.Context, qry *db.Queries, mergestat *sqlx.DB, imp db.ListRepoImportsDueForImportRow) (err error) {
	var query, repoOwner string
	var removeDeletedRepos, defaultSyncTypes = true, make([]string, 0) //nolint:ineffassign

	// determine the kind of import (Org vs. User) and parse the settings
	switch imp.Type {
	case "GITHUB_ORG":
		var settings struct {
			Org                string   `json:"org"`
			RemoveDeletedRepos bool     `json:"removeDeletedRepos"`
			DefaultSyncTypes   []string `json:"defaultSyncTypes"`
		}
		if err = json.Unmarshal(imp.Settings.Bytes, &settings); err != nil {
			return errors.Wrapf(err, "failed to parse import settings")
		}

		repoOwner = settings.Org
		removeDeletedRepos = settings.RemoveDeletedRepos
		defaultSyncTypes = settings.DefaultSyncTypes
		query = `SELECT login, name, topics FROM github_org_repos(?)`
	case "GITHUB_USER":
		var settings struct {
			User               string   `json:"user"`
			RemoveDeletedRepos bool     `json:"removeDeletedRepos"`
			DefaultSyncTypes   []string `json:"defaultSyncTypes"`
		}
		if err = json.Unmarshal(imp.Settings.Bytes, &settings); err != nil {
			return errors.Wrapf(err, "failed to parse import settings")
		}

		repoOwner = settings.User
		removeDeletedRepos = settings.RemoveDeletedRepos
		defaultSyncTypes = settings.DefaultSyncTypes
		query = `SELECT login, name, topics FROM github_user_repos(?)`
	default:
		return errors.Errorf("unknown import type: %s", imp.Type)
	}

	// execute the mergestat query - this will scan a list of repos to be imported
	var repos []*githubRepository
	if err = mergestat.SelectContext(ctx, &repos, query, repoOwner); err != nil {
		return errors.Wrapf(err, "failed to fetch repositories")
	}

	// remove any deleted repositories
	if removeDeletedRepos {
		var params = db.DeleteRemovedReposParams{Column1: imp.ID, Column2: repoUrls(repos)}
		if err = qry.DeleteRemovedRepos(ctx, params); err != nil {
			return errors.Wrapf(err, "failed to remove deleted repositories")
		}
	}

	// capture list of existing repositories before we do the upsert below
	var existing []string
	if len(defaultSyncTypes) > 0 { // only if defaultSyncTypes is configured
		if existing, err = qry.GetRepoUrlFromImport(ctx, imp.ID); err != nil {
			return errors.Wrapf(err, "failed to enable default sync")
		}
	}

	// upsert all fetched repositories
	for _, repo := range repos {
		var opts = db.UpsertRepoParams{
			Repo:         fmt.Sprintf("https://github.com/%s/%s", repoOwner, repo.Name),
			IsGithub:     sql.NullBool{Bool: true, Valid: true},
			RepoImportID: uuid.NullUUID{Valid: true, UUID: imp.ID},
			Tags:         pgtype.JSONB{Status: pgtype.Present, Bytes: []byte(repo.Topics)},
		}

		if err = qry.UpsertRepo(ctx, opts); err != nil {
			return errors.Wrapf(err, "failed to upsert repository")
		}
	}

	// (optional) configure default sync types
	if len(defaultSyncTypes) > 0 {
		// batch is a collection of newly added repositories
		var batch = difference(existing, repoUrls(repos))

		// convert batch into a collection of repo ids
		var ids []uuid.UUID
		if ids, err = qry.GetRepoIDsFromRepoImport(ctx, db.GetRepoIDsFromRepoImportParams{Importid: imp.ID, Reposurls: batch}); err != nil {
			return errors.Wrapf(err, "failed to enable default sync")
		}

		// for each new repo, enable the provided syncs
		for _, id := range ids {
			for _, syncType := range defaultSyncTypes {
				var params = db.InsertNewDefaultSyncParams{Repoid: id, Synctype: syncType}
				if err = qry.InsertNewDefaultSync(ctx, params); err != nil {
					return errors.Wrapf(err, "failed to enable default sync")
				}
			}
		}

		// enqueue all newly added syncs
		if err = qry.EnqueueAllSyncs(ctx); err != nil {
			return errors.Wrapf(err, "failed to enable default sync")
		}
	}

	return qry.MarkRepoImportAsUpdated(ctx, imp.ID)
}

func repoUrls(repos []*githubRepository) []string {
	var ret = make([]string, len(repos))
	for i, repo := range repos {
		ret[i] = repo.URL()
	}
	return ret
}

// adapted from https://stackoverflow.com/a/45428032/6611700
func difference(existing, new []string) []string {
	if len(existing) == 0 {
		return new // early exit path
	}

	var ex = make(map[string]struct{}, len(existing)) // set of all existing items
	for _, x := range existing {
		ex[x] = struct{}{}
	}

	var diff []string
	for _, x := range new {
		if _, found := ex[x]; !found {
			diff = append(diff, x)
		}
	}

	return diff
}
