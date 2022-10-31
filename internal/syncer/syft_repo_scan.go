package syncer

import (
	"context"
	"errors"
	"fmt"
	"os/exec"

	"github.com/jackc/pgx/v4"
	"github.com/mergestat/mergestat/internal/db"
	"github.com/mergestat/mergestat/internal/helper"
)

// handleSyftRepoScan executes `syft {git-repo} -f json` for a repo
// and inserts the output JSON into the DB
func (w *worker) handleSyftRepoScan(ctx context.Context, j *db.DequeueSyncJobRow) error {
	l := w.loggerForJob(j)

	// indicate that we're starting query execution
	if err := w.formatBatchLogMessages(ctx, SyncLogTypeInfo, j, jobStatusTypeInit); err != nil {
		return fmt.Errorf("log messages: %w", err)
	}

	tmpPath, cleanup, err := helper.CreateTempDir(l, "GIT_CLONE_PATH", "mergestat-repo-")
	if err != nil {
		return fmt.Errorf("temp dir: %w", err)
	}
	defer cleanup()

	var ghToken string
	if ghToken, err = w.fetchGitHubTokenFromDB(ctx); err != nil {
		return err
	}

	if err = w.cloneRepo(ctx, ghToken, j.Repo, tmpPath, false, j); err != nil {
		return fmt.Errorf("git clone: %w", err)
	}

	cmd := exec.CommandContext(ctx, "syft", ".", "-o", "json")
	cmd.Dir = tmpPath

	var output []byte
	if output, err = cmd.Output(); err != nil {
		if exitErr, ok := err.(*exec.ExitError); ok {
			w.logger.Err(exitErr).Str("stderr", string(exitErr.Stderr)).Msgf("error running syft repo scan")
		}
		return fmt.Errorf("running syft scan: %w", err)
	}

	var tx pgx.Tx
	if tx, err = w.pool.BeginTx(ctx, pgx.TxOptions{}); err != nil {
		return fmt.Errorf("begin tx: %w", err)
	}
	defer func() {
		if err := tx.Rollback(ctx); err != nil {
			if !errors.Is(err, pgx.ErrTxClosed) {
				w.logger.Err(err).Msgf("could not rollback transaction")
			}
		}
	}()

	r, err := tx.Exec(ctx, "DELETE FROM syft_repo_scans WHERE repo_id = $1;", j.RepoID.String())
	if err != nil {
		return fmt.Errorf("exec delete: %w", err)
	}

	if err := w.sendBatchLogMessages(ctx, []*syncLog{{
		Type:            SyncLogTypeInfo,
		RepoSyncQueueID: j.ID,
		Message:         fmt.Sprintf("removed %d row(s) from syft_repo_scans", r.RowsAffected()),
	}}); err != nil {
		return err
	}

	if _, err := tx.Exec(ctx, "INSERT INTO syft_repo_scans (repo_id, results) VALUES ($1, $2)", j.RepoID, output); err != nil {
		return fmt.Errorf("inserting syft results: %w", err)
	}

	l.Info().Msg("inserted syft scan results")

	if err := w.sendBatchLogMessages(ctx, []*syncLog{{
		Type:            SyncLogTypeInfo,
		RepoSyncQueueID: j.ID,
		Message:         "inserted 1 row into syft_repo_scans",
	}}); err != nil {
		return err
	}

	if err := w.db.WithTx(tx).SetSyncJobStatus(ctx, db.SetSyncJobStatusParams{Status: "DONE", ID: j.ID}); err != nil {
		return fmt.Errorf("update status done: %w", err)
	}

	// indicate that we're finishing query execution
	if err := w.formatBatchLogMessages(ctx, SyncLogTypeInfo, j, jobStatusTypeFinish); err != nil {
		return fmt.Errorf("log messages: %w", err)
	}

	return tx.Commit(ctx)
}
