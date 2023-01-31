package repo

import (
	"context"
	"database/sql"
	"encoding/json"
	"fmt"
	"net/http"
	"time"

	"github.com/google/go-github/v41/github"
	"github.com/google/uuid"
	"github.com/jackc/pgtype"
	"github.com/jackc/pgx/v4"
	"github.com/jackc/pgx/v4/pgxpool"
	"github.com/mergestat/mergestat/internal/db"
	"github.com/mergestat/sqlq"
	"github.com/pkg/errors"
	"github.com/rs/zerolog"
	"golang.org/x/oauth2"
)

type githubRepository struct {
	Owner  string `db:"login" json:"login"`
	Name   string `db:"name" json:"name"`
	Topics string `db:"topics" json:"topics"`
}

func (repo *githubRepository) URL() string {
	return fmt.Sprintf("https://github.com/%s/%s", repo.Owner, repo.Name)
}

type fetchFunc func(ctx context.Context, page int) ([]*github.Repository, *github.Response, error)

// AutoImport implements the githubRepository auto-import job to automatically
// sync githubRepository from user- or org- accounts.
func AutoImport(l *zerolog.Logger, pool *pgxpool.Pool) sqlq.HandlerFunc {
	var queries = db.New(pool)

	return func(ctx context.Context, job *sqlq.Job) (err error) {
		var logger = job.Logger()

		// start sending periodic keep-alive pings!
		go job.SendKeepAlive(ctx, job.KeepAlive-(5*time.Second)) //nolint:errcheck

		// fetch a list of all configured imports that are due now
		var imports []db.ListRepoImportsDueForImportRow
		if imports, err = queries.ListRepoImportsDueForImport(ctx); err != nil {
			logger.Errorf("failed to list repo import job: %v", err)
			l.Error().Msgf("failed to list repo import job: %v", err)
			return errors.Wrapf(sqlq.ErrSkipRetry, "failed to list repo import job: %v", err)
		}

		logger.Infof("handling %d import(s)", len(imports))
		l.Info().Msgf("handling %d import(s)", len(imports))
		for _, imp := range imports {
			logger.Infof("executing import %s", imp.ID)
			l.Info().Msgf("executing import %s", imp.ID)

			var tx pgx.Tx // each import is executed within its own transaction
			if tx, err = pool.Begin(ctx); err != nil {
				return errors.Wrapf(err, "failed to start new database transaction")
			}

			// execute the import
			// if the execution fails for some reason, only that import is marked as failed
			// the job still continues executing.
			var importError error
			if importError = handleImport(ctx, queries.WithTx(tx), imp); importError != nil {
				logger.Warnf("import(%s) failed: %v", imp.ID, importError.Error())
				l.Warn().Msgf("import(%s) failed: %v", imp.ID, importError.Error())
				_ = tx.Rollback(ctx)
			} else {
				// if the import was successful, commit the changes
				if err = tx.Commit(ctx); err != nil {
					return errors.Wrapf(err, "failed to commit database transaction")
				}
				logger.Infof("import(%s) was successful", imp.ID)
				l.Info().Msgf("import(%s) was successful", imp.ID)
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
func handleImport(ctx context.Context, qry *db.Queries, imp db.ListRepoImportsDueForImportRow) (err error) {
	var token string
	if token, err = qry.FetchCredential(ctx, imp.Provider); err != nil {
		return err
	}

	var public = token == ""

	var client *github.Client
	if !public {
		var tokenSource = oauth2.StaticTokenSource(&oauth2.Token{AccessToken: token})
		client = github.NewClient(oauth2.NewClient(ctx, tokenSource))
	} else {
		client = github.NewClient(&http.Client{})
	}

	var settings struct {
		Type               string   `json:"type"`
		Login              string   `json:"userOrOrg"`
		RemoveDeletedRepos bool     `json:"removeDeletedRepos"`
		DefaultSyncTypes   []string `json:"defaultSyncTypes"`
	}

	if err = json.Unmarshal(imp.Settings.Bytes, &settings); err != nil {
		return errors.Wrapf(err, "failed to parse import settings")
	}

	var fetchFunction fetchFunc
	switch settings.Type {
	case "GITHUB_ORG":
		var opts = &github.RepositoryListByOrgOptions{}
		if public {
			opts.Type = "public"
		}
		fetchFunction = fetchByOrg(client, settings.Login, opts)
	case "GITHUB_USER":
		var opts = &github.RepositoryListOptions{}
		if public {
			opts.Type = "public"
		}
		fetchFunction = fetchByUser(client, settings.Login, opts)
	default:
		return errors.Errorf("unknown import type: %s", settings.Type)
	}

	var repos []*githubRepository
	if repos, err = fetchRepositories(ctx, fetchFunction); err != nil {
		return errors.Wrapf(err, "failed to fetch repositories")
	}

	// remove any deleted repositories
	if settings.RemoveDeletedRepos {
		var params = db.DeleteRemovedReposParams{Column1: imp.ID, Column2: repoUrls(repos, settings.Login)}
		if err = qry.DeleteRemovedRepos(ctx, params); err != nil {
			return errors.Wrapf(err, "failed to remove deleted repositories")
		}
	}

	// capture list of existing repositories before we do the upsert below
	var existing []string
	if len(settings.DefaultSyncTypes) > 0 { // only if defaultSyncTypes is configured
		if existing, err = qry.GetRepoUrlFromImport(ctx, imp.ID); err != nil {
			return errors.Wrapf(err, "failed to enable default sync")
		}
	}

	// upsert all fetched repositories
	for _, repo := range repos {
		var opts = db.UpsertRepoParams{
			Repo:         fmt.Sprintf("https://github.com/%s/%s", settings.Login, repo.Name),
			IsGithub:     sql.NullBool{Bool: true, Valid: true},
			RepoImportID: uuid.NullUUID{Valid: true, UUID: imp.ID},
			Tags:         pgtype.JSONB{Status: pgtype.Present, Bytes: []byte(repo.Topics)},
		}

		if err = qry.UpsertRepo(ctx, opts); err != nil {
			return errors.Wrapf(err, "failed to upsert repository")
		}
	}

	// (optional) configure default sync types
	if len(settings.DefaultSyncTypes) > 0 {
		// batch is a collection of newly added repositories
		var batch = difference(existing, repoUrls(repos, settings.Login))

		// convert batch into a collection of repo ids
		var ids []uuid.UUID
		if ids, err = qry.GetRepoIDsFromRepoImport(ctx, db.GetRepoIDsFromRepoImportParams{Importid: imp.ID, Reposurls: batch}); err != nil {
			return errors.Wrapf(err, "failed to enable default sync")
		}

		// for each new repo, enable the provided syncs
		for _, id := range ids {
			for _, syncType := range settings.DefaultSyncTypes {
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

func repoUrls(repos []*githubRepository, repoOwner string) []string {
	var ret = make([]string, len(repos))
	for i, repo := range repos {
		ret[i] = fmt.Sprintf("https://github.com/%s/%s", repoOwner, repo.Name)
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

func fetchRepositories(ctx context.Context, fetch fetchFunc) (_ []*githubRepository, err error) {
	var repositories []*githubRepository
	var repos []*github.Repository
	var resp *github.Response

	var page = 1
	for {
		if repos, resp, err = fetch(ctx, page); err != nil {
			return repositories, err
		}

		for _, repo := range repos {
			var jsonStr []byte
			if jsonStr, err = json.Marshal(&repo.Topics); err != nil {
				return repositories, err
			}

			repositories = append(repositories, &githubRepository{Name: *repo.Name, Owner: *repo.Owner.OrganizationsURL,
				Topics: string(jsonStr)})
		}

		if resp.NextPage <= page {
			break
		}
		page = resp.NextPage
	}
	return repositories, err
}

func fetchByUser(client *github.Client, user string, opts *github.RepositoryListOptions) fetchFunc {
	return func(ctx context.Context, page int) ([]*github.Repository, *github.Response, error) {
		opts.Page = page
		return client.Repositories.List(ctx, user, opts)
	}
}

func fetchByOrg(client *github.Client, org string, opts *github.RepositoryListByOrgOptions) fetchFunc {
	return func(ctx context.Context, page int) ([]*github.Repository, *github.Response, error) {
		opts.Page = page
		return client.Repositories.ListByOrg(ctx, org, opts)
	}
}
