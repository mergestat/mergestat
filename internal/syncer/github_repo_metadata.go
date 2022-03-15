package syncer

import (
	"context"
	"fmt"
	"net/url"
	"strings"

	"github.com/jackc/pgtype"
	"github.com/jackc/pgx/v4"
	"github.com/mergestat/fuse/internal/db"
)

const selectSingleGitHubRepo = `SELECT github_repo(?) AS repo`

func (w *worker) handleGitHubRepoMetadata(ctx context.Context, j *db.DequeueSyncJobRow) error {
	w.logger.Info().Msgf("received GITHUB_REPO_METADATA job for repo=%s", j.Repo)

	// indicate that we're starting query execution
	if err := w.sendBatchLogMessages(ctx, []*syncLog{
		{Type: SyncLogTypeInfo, RepoSyncQueueID: j.ID, Message: "starting to execute GitHub repo metadata lookup query"},
	}); err != nil {
		return err
	}

	var u *url.URL
	var err error
	if u, err = url.Parse(j.Repo); err != nil {
		return fmt.Errorf("could not parse repo: %v", err)
	}

	components := strings.Split(u.Path, "/")
	repoOwner := components[1]
	repoName := components[2]

	// execute mergestat query
	var repoInfo []byte
	if err := w.mergestat.QueryRowxContext(ctx, selectSingleGitHubRepo, fmt.Sprintf("%s/%s", repoOwner, repoName)).Scan(&repoInfo); err != nil {
		return err
	}

	w.logger.Info().Msgf("repo info: %s", string(repoInfo))

	var tx pgx.Tx
	if tx, err = w.pool.BeginTx(ctx, pgx.TxOptions{IsoLevel: pgx.ReadCommitted}); err != nil {
		return err
	}
	defer func() {
		if err := tx.Rollback(ctx); err != nil {
			w.logger.Err(err).Msgf("could not rollback transaction")
		}
	}()

	if err := w.db.WithTx(tx).UpsertGitHubRepoInfo(ctx, db.UpsertGitHubRepoInfoParams{
		RepoID: j.RepoID,
		Owner:  repoOwner,
		Name:   repoName,
		Metadata: pgtype.JSONB{
			Status: pgtype.Present,
			Bytes:  repoInfo,
		},
	}); err != nil {
		return err
	}

	if err := w.db.SetSyncJobStatus(ctx, db.SetSyncJobStatusParams{Status: "DONE", ID: j.ID}); err != nil {
		return err
	}

	return tx.Commit(ctx)
}
