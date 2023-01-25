package syncer

import (
	"bytes"
	"context"
	"errors"
	"fmt"
	"os/exec"

	"github.com/jackc/pgx/v4"
	"github.com/mergestat/mergestat/internal/db"
)

// handleOSSFScorecardScan executes `scorecard --repo {repo} --format json` for a repo
// and inserts the output JSON into the DB
func (w *worker) handleOSSFScorecardScan(ctx context.Context, j *db.DequeueSyncJobRow) error {
	l := w.loggerForJob(j)

	var ghToken string
	var err error
	if ghToken, err = w.fetchGitHubTokenFromDB(ctx); err != nil {
		return err
	}

	// indicate that we're starting a scorecard scan
	if err := w.sendBatchLogMessages(ctx, []*syncLog{{Type: SyncLogTypeInfo, RepoSyncQueueID: j.ID,
		Message: fmt.Sprintf(LogFormatStartingSync, j.SyncType, j.Repo),
	}}); err != nil {
		return fmt.Errorf("send batch log messages: %w", err)
	}

	var stdout, stderr bytes.Buffer
	cmd := exec.CommandContext(ctx, "scorecard", "--repo", j.Repo, "--format", "json")
	cmd.Env = append(cmd.Env, fmt.Sprintf("GITHUB_AUTH_TOKEN=%s", ghToken))
	cmd.Stdout = &stdout
	cmd.Stderr = &stderr

	if err = cmd.Run(); err != nil {
		if exitErr, ok := err.(*exec.ExitError); ok {
			w.logger.Warn().AnErr("error", exitErr).Str("stderr", stderr.String()).Msgf("error running scorecard scan")
		}
		return fmt.Errorf("running scorecard scan: %w", err)
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

	r, err := tx.Exec(ctx, "DELETE FROM public.ossf_scorecard_repo_scans WHERE repo_id = $1;", j.RepoID.String())
	if err != nil {
		return fmt.Errorf("exec delete: %w", err)
	}

	if err := w.sendBatchLogMessages(ctx, []*syncLog{{
		Type:            SyncLogTypeInfo,
		RepoSyncQueueID: j.ID,
		Message:         fmt.Sprintf("removed %d row(s) from ossf_scorecard_repo_scans", r.RowsAffected()),
	}}); err != nil {
		return err
	}

	if _, err := tx.Exec(ctx, "INSERT INTO public.ossf_scorecard_repo_scans (repo_id, results) VALUES ($1, $2)", j.RepoID, stdout.Bytes()); err != nil {
		return fmt.Errorf("inserting scorecard results: %w", err)
	}

	l.Info().Msg("inserted scorecard scan results")

	if err := w.sendBatchLogMessages(ctx, []*syncLog{{
		Type:            SyncLogTypeInfo,
		RepoSyncQueueID: j.ID,
		Message:         "inserted scorecard scan results into ossf_scorecard_repo_scans",
	}}); err != nil {
		return err
	}

	if err := w.db.WithTx(tx).SetSyncJobStatus(ctx, db.SetSyncJobStatusParams{Status: "DONE", ID: j.ID}); err != nil {
		return fmt.Errorf("update status done: %w", err)
	}

	// indicate that we're finishing query execution
	if err := w.sendBatchLogMessages(ctx, []*syncLog{{Type: SyncLogTypeInfo, RepoSyncQueueID: j.ID,
		Message: fmt.Sprintf(LogFormatFinishingSync, j.SyncType, j.Repo),
	}}); err != nil {
		return fmt.Errorf("send batch log messages: %w", err)
	}

	return tx.Commit(ctx)
}
