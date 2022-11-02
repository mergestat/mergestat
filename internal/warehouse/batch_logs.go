package warehouse

type syncLogType string
type jobStatus string

const (
	SyncLogTypeInfo  syncLogType = "INFO"
	SyncLogTypeError syncLogType = "ERROR"
)

const (
	JobStatus jobStatus = "processing"
)

type syncLog struct {
	Type            syncLogType
	Message         string
	RepoSyncQueueID int64
}

/*
// formartBatchLogMessages generates a standardize message for sync logs
func (w *warehouse) formatBatchInfoLogMessages(ctx context.Context, syncLogTypeOption syncLogType, j *db.DequeueSyncJobRow, status jobStatus) error {
	return w.sendBatchLogMessages(ctx, []*syncLog{{
		Type:            syncLogTypeOption,
		RepoSyncQueueID: j.ID,
		Message:         fmt.Sprintf("%s %s sync for %s", status, j.SyncType, j.Repo),
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
}*/
