package syncer

import (
	"context"
	"errors"
	"fmt"

	"github.com/jackc/pgx/v4"
	"github.com/mergestat/mergestat/internal/db"
	"github.com/mergestat/mergestat/internal/warehouse"
)

func (w *worker) handleGithubActions(ctx context.Context, j *db.DequeueSyncJobRow) error {

	l := w.loggerForJob(j)

	// indicate that we're starting query execution
	if err := w.formatBatchLogMessages(ctx, SyncLogTypeInfo, j, jobStatusTypeInit); err != nil {
		return fmt.Errorf("log messages: %w", err)
	}

	var ghToken string
	ghToken, err := w.fetchGitHubTokenFromDB(ctx)
	if err != nil {
		return err
	}

	if err := warehouse.New(ctx, w.db, w.pool, l, ghToken).GitHubActions(ctx, j); err != nil {
		return err
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

	if err := w.db.WithTx(tx).SetSyncJobStatus(ctx, db.SetSyncJobStatusParams{Status: "DONE", ID: j.ID}); err != nil {
		return fmt.Errorf("update status done: %w", err)
	}
	// indicate that we're finishing query execution
	if err := w.formatBatchLogMessages(ctx, SyncLogTypeInfo, j, jobStatusTypeFinish); err != nil {
		return fmt.Errorf("log messages: %w", err)
	}

	return tx.Commit(ctx)
}
