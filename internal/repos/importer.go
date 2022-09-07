package repos

import (
	"context"
	"database/sql"
	"encoding/json"
	"errors"
	"fmt"
	"time"

	"github.com/google/uuid"
	"github.com/jackc/pgtype"
	"github.com/jackc/pgx/v4"
	"github.com/jackc/pgx/v4/pgxpool"
	"github.com/jmoiron/sqlx"
	"github.com/mergestat/fuse/internal/db"
	"github.com/rs/zerolog"
)

type importer struct {
	logger    *zerolog.Logger
	pool      *pgxpool.Pool
	db        *db.Queries
	mergestat *sqlx.DB
}

func NewImporter(logger *zerolog.Logger, pool *pgxpool.Pool, mergestat *sqlx.DB) *importer {
	return &importer{
		logger:    logger,
		pool:      pool,
		db:        db.New(pool),
		mergestat: mergestat,
	}
}

// Start runs a repo importer until the supplied context is cancelled.
// Every tick of the loop, on the interval supplied, the importer checks the database
// for "repo_imports" that are due for a run and executes an import.
func (i *importer) Start(ctx context.Context, interval time.Duration) {
	i.logger.Info().Msg("beginning repo import cycle")
	exec := func() {
		if err := i.exec(ctx); err != nil {
			i.logger.Err(err).Msg("encountered error during repo import")
		}
	}
	exec()

	for {
		select {
		case <-ctx.Done():
			i.logger.Info().Msg("stopping importer")
			return
		case <-time.After(interval):
			exec()
		}
	}
}

// exec pulls a list of the repo syncs to run, and then executes them
func (i *importer) exec(ctx context.Context) error {
	var imports []db.ListRepoImportsDueForImportRow
	var err error
	if imports, err = i.db.ListRepoImportsDueForImport(ctx); err != nil {
		return err
	}

	if numberOfImports := len(imports); numberOfImports != 0 {
		i.logger.Info().Int("imports", len(imports)).Msgf("handling repo imports")
	}

	for _, imp := range imports {
		if err := i.handleGitHubImport(ctx, imp); err != nil {
			return err
		}
	}

	return nil
}

var listGitHubOrgReposSQL = `SELECT name, topics FROM github_org_repos(?)`
var listGitHubUserReposSQL = `SELECT name, topics FROM github_user_repos(?)`

type githubOrgRepoImportSettings struct {
	Org string `json:"org"`
}

type githubUserRepoImportSettings struct {
	User string `json:"user"`
}

type githubRepo struct {
	Name   string `db:"name" json:"name"`
	Topics string `db:"topics" json:"topics"`
}

// handleGitHubImport handles the import of a GitHub repo sync :)
func (i *importer) handleGitHubImport(ctx context.Context, imp db.ListRepoImportsDueForImportRow) error {
	repos := make([]*githubRepo, 0)
	var mergestatSQL string
	var repoOwner string

	// first, determine what kind of GitHub import this is (ORG or USER) and set the mergestat SQL to use
	switch imp.Type {
	case "GITHUB_ORG":
		var settings githubOrgRepoImportSettings
		if err := json.Unmarshal(imp.Settings.Bytes, &settings); err != nil {
			return err
		}

		repoOwner = settings.Org
		mergestatSQL = listGitHubOrgReposSQL
	case "GITHUB_USER":
		var settings githubUserRepoImportSettings
		if err := json.Unmarshal(imp.Settings.Bytes, &settings); err != nil {
			return err
		}

		repoOwner = settings.User
		mergestatSQL = listGitHubUserReposSQL
	default:
		return fmt.Errorf("unknown import type: %s", imp.Type)
	}

	// execute the mergestat query - this will scan a list of repos to be imported
	if err := i.mergestat.SelectContext(ctx, &repos, mergestatSQL, repoOwner); err != nil {
		return err
	}

	// start a new pg transaction to handle the repo upsert
	var tx pgx.Tx
	var err error
	if tx, err = i.pool.BeginTx(ctx, pgx.TxOptions{}); err != nil {
		return err
	}
	defer func() {
		if err := tx.Rollback(ctx); err != nil {
			if !errors.Is(err, pgx.ErrTxClosed) {
				i.logger.Err(err).Msg("could not rollback transaction")
			}
		}
	}()

	repoNames := make([]string, len(repos))

	for r, repo := range repos {
		if err := i.db.WithTx(tx).UpsertRepo(ctx, db.UpsertRepoParams{
			Repo:     fmt.Sprintf("https://github.com/%s/%s", repoOwner, repo.Name),
			IsGithub: sql.NullBool{Bool: true, Valid: true},
			RepoImportID: uuid.NullUUID{
				Valid: true,
				UUID:  imp.ID,
			},
			Tags: pgtype.JSONB{
				Status: pgtype.Present,
				Bytes:  []byte(repo.Topics),
			},
		}); err != nil {
			return err
		}
		repoNames[r] = repo.Name
	}

	if err := i.db.MarkRepoImportAsUpdated(ctx, imp.ID); err != nil {
		return err
	}

	i.logger.Info().Strs("repos", repoNames).Msgf("importing repos from GitHub: %s", repoOwner)

	return tx.Commit(ctx)
}
