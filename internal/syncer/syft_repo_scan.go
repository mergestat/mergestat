package syncer

import (
	"context"
	"errors"
	"fmt"
	"os/exec"

	"github.com/jackc/pgx/v4"
	libgit2 "github.com/libgit2/git2go/v33"
	"github.com/mergestat/fuse/internal/db"
)

// handleSyftRepoScan executes `syft {git-repo} -f json` for a repo
// and inserts the output JSON into the DB
func (w *worker) handleSyftRepoScan(ctx context.Context, j *db.DequeueSyncJobRow) error {
	l := w.loggerForJob(j)

	// indicate that we're starting query execution
	if err := w.formatBatchLogMessages(ctx, SyncLogTypeInfo, j, jobStatusTypeInit); err != nil {
		return fmt.Errorf("log messages: %w", err)
	}

	tmpPath, cleanup, err := w.createTempDirForGitClone(j)
	if err != nil {
		return fmt.Errorf("temp dir: %w", err)
	}
	defer cleanup()

	var ghToken string
	if ghToken, err = w.fetchGitHubTokenFromDB(ctx); err != nil {
		return err
	}

	var repo *libgit2.Repository
	if repo, err = w.cloneRepo(ctx, ghToken, j.Repo, tmpPath, false, j); err != nil {
		return fmt.Errorf("git clone: %w", err)
	}
	defer repo.Free()

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

	if _, err := tx.Exec(ctx, "DELETE FROM syft_repo_scans WHERE repo_id = $1;", j.RepoID.String()); err != nil {
		return fmt.Errorf("exec delete: %w", err)
	}

	if _, err := tx.Exec(ctx, "INSERT INTO syft_repo_scans (repo_id, results) VALUES ($1, $2)", j.RepoID, output); err != nil {
		return fmt.Errorf("inserting syft results: %w", err)
	}

	l.Info().Msg("inserted syft scan results")

	if err := w.db.WithTx(tx).SetSyncJobStatus(ctx, db.SetSyncJobStatusParams{Status: "DONE", ID: j.ID}); err != nil {
		return fmt.Errorf("update status done: %w", err)
	}

	// indicate that we're finishing query execution
	if err := w.formatBatchLogMessages(ctx, SyncLogTypeInfo, j, jobStatusTypeFinish); err != nil {
		return fmt.Errorf("log messages: %w", err)
	}

	return tx.Commit(ctx)
}
