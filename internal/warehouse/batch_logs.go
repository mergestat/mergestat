package warehouse

import (
	"context"
	"fmt"

	"github.com/jackc/pgx/v4"
	"github.com/mergestat/mergestat/internal/db"
)

type syncLogType string
type jobStatus string

const (
	SyncLogTypeInfo syncLogType = "INFO"
)

const (
	startingProcess jobStatus = "starting"
	insertedProcess jobStatus = "inserted"
)

type syncLog struct {
	Type            syncLogType
	Message         string
	RepoSyncQueueID int64
}

// batchProcessLogMessages generates a standardize message for sync logs
func (w *warehouse) batchProcessLogMessages(ctx context.Context, syncLogTypeOption syncLogType, j *db.DequeueSyncJobRow, status jobStatus, operation string) error {
	return w.sendBatchLogMessages(ctx, []*syncLog{{
		Type:            syncLogTypeOption,
		RepoSyncQueueID: j.ID,
		Message:         fmt.Sprintf("%s %s", status, operation),
	}})
}

// sendBatchLogMessages uses the pg COPY protocol to send a batch of sync logs
func (w *warehouse) sendBatchLogMessages(ctx context.Context, batch []*syncLog) error {
	inputs := make([][]interface{}, 0, len(batch))
	for _, l := range batch {
		input := []interface{}{l.Type, l.Message, l.RepoSyncQueueID}
		inputs = append(inputs, input)
	}

	if _, err := w.pool.CopyFrom(ctx, pgx.Identifier{"mergestat", "repo_sync_logs"}, []string{"log_type", "message", "repo_sync_queue_id"}, pgx.CopyFromRows(inputs)); err != nil {
		return err
	}
	return nil
}
