package syncer

import (
	"context"
	"fmt"
	"strings"
	"time"

	"github.com/jackc/pgx/v4"
	"github.com/mergestat/fuse/internal/db"
	"github.com/rs/zerolog"
)

type syncLogType string

type jobStatus string

const (
	SyncLogTypeInfo  syncLogType = "INFO"
	SyncLogTypeError syncLogType = "ERROR"
)

const (
	jobStatusTypeInit   jobStatus = "starting"
	jobStatusTypeFinish jobStatus = "finishing"
)

type syncLog struct {
	Type            syncLogType
	Message         string
	RepoSyncQueueID int64
}

// formartBatchLogMessages generates a standardize message for sync logs
func (w *worker) formatBatchLogMessages(ctx context.Context, syncLogTypeOption syncLogType, j *db.DequeueSyncJobRow, status jobStatus) error {

	formattedMessage := fmt.Sprintf("%s %s sync for %s", status, j.SyncType, j.Repo)

	err := w.sendBatchLogMessages(ctx, []*syncLog{
		{
			Type:            syncLogTypeOption,
			RepoSyncQueueID: j.ID,
			Message:         strings.ReplaceAll(formattedMessage, "_", " "),
		}})

	return err
}

// sendBatchLogMessages uses the pg COPY protocol to send a batch of sync logs
func (w *worker) sendBatchLogMessages(ctx context.Context, batch []*syncLog) error {
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

func (w *worker) loggerForJob(j *db.DequeueSyncJobRow) *zerolog.Logger {
	l := w.logger.With().Str("job-type", j.SyncType).Str("repo", j.Repo).Logger()
	return &l
}

// startKeepAlives sets the latest_keep_alive timestamp on a job every interval
func (w *worker) startKeepAlives(j *db.DequeueSyncJobRow, interval time.Duration) func() {
	ctx, cancel := context.WithCancel(context.Background())

	setKeepAlive := func() {
		if err := w.db.SetLatestKeepAliveForJob(ctx, j.ID); err != nil {
			w.logger.Err(err).Msgf("could not set latest keep alive for job: %d", j.ID)
		} else {
			w.logger.Info().Msgf("sent keep alive for job: %d", j.ID)
		}
	}

	setKeepAlive()

	go func() {
		for {
			select {
			case <-ctx.Done():
				return
			case <-time.After(interval):
				setKeepAlive()
			}
		}
	}()
	return func() {
		cancel()
	}
}
