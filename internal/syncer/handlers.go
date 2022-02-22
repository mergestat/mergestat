package syncer

import (
	"context"

	"github.com/jackc/pgx/v4"
	"github.com/mergestat/fuse/internal/db"
)

type Handler interface {
	Handle(context.Context, *db.DequeueSyncJobRow)
}

type syncLogType string

const (
	SyncLogTypeInfo  syncLogType = "INFO"
	SyncLogTypeError syncLogType = "ERROR"
)

type syncLog struct {
	Type            syncLogType
	Message         string
	RepoSyncQueueID int64
}

// sendBatchLogMessages uses the pg COPY protocol to send a batch of sync logs
func (w *worker) sendBatchLogMessages(ctx context.Context, batch []*syncLog) error {
	inputs := make([][]interface{}, 0, len(batch))
	for _, l := range batch {
		input := []interface{}{l.Type, l.Message, l.RepoSyncQueueID}
		w.logger.Info().Msgf("input: %v", input)
		inputs = append(inputs, input)
	}

	if _, err := w.pool.CopyFrom(ctx, pgx.Identifier{"mergestat", "repo_sync_logs"}, []string{"log_type", "message", "repo_sync_queue_id"}, pgx.CopyFromRows(inputs)); err != nil {
		return err
	}
	return nil
}
