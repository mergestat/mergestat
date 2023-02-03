package syncer

import (
	"context"
	"database/sql"
	"errors"
	"fmt"
	"os"

	"github.com/jackc/pgx/v4"
	"github.com/mergestat/mergestat/internal/db"
	"github.com/mergestat/mergestat/internal/helper"
	uuid "github.com/satori/go.uuid"
)

// sendBatchGitRefs uses the pg COPY protocol to send a batch of git refs
func (w *worker) sendBatchGitRefs(ctx context.Context, tx pgx.Tx, j *db.DequeueSyncJobRow, batch []*ref) error {
	inputs := make([][]interface{}, 0, len(batch))
	for _, r := range batch {
		var repoID uuid.UUID
		var err error
		if repoID, err = uuid.FromString(j.RepoID.String()); err != nil {
			return err
		}
		input := []interface{}{repoID, r.FullName.String, r.Name.String}

		if r.Hash.Valid {
			input = append(input, r.Hash.String)
		} else {
			input = append(input, nil)
		}

		if r.Remote.Valid {
			input = append(input, r.Remote.String)
		} else {
			input = append(input, nil)
		}

		if r.Target.Valid {
			input = append(input, r.Target.String)
		} else {
			input = append(input, nil)
		}

		if r.Type.Valid {
			input = append(input, r.Type.String)
		} else {
			input = append(input, nil)
		}

		if r.TagCommitHash.Valid {
			input = append(input, r.TagCommitHash.String)
		} else {
			input = append(input, nil)
		}

		inputs = append(inputs, input)
	}

	if _, err := tx.CopyFrom(ctx, pgx.Identifier{"git_refs"}, []string{"repo_id", "full_name", "name", "hash", "remote", "target", "type", "tag_commit_hash"}, pgx.CopyFromRows(inputs)); err != nil {
		return err
	}
	return nil
}

type ref struct {
	FullName      sql.NullString `db:"full_name"`
	Hash          sql.NullString `db:"hash"`
	Name          sql.NullString `db:"name"`
	Remote        sql.NullString `db:"remote"`
	Target        sql.NullString `db:"target"`
	Type          sql.NullString `db:"type"`
	TagCommitHash sql.NullString `db:"tag_commit_hash"`
}

const selectRefs = `SELECT *, (CASE type WHEN 'tag' THEN COALESCE(COMMIT_FROM_TAG(tag), hash) END) AS tag_commit_hash FROM refs(?);`

func (w *worker) handleGitRefs(ctx context.Context, j *db.DequeueSyncJobRow) error {
	var err error
	l := w.loggerForJob(j)

	// indicate that we're starting query execution
	if err := w.sendBatchLogMessages(ctx, []*syncLog{{Type: SyncLogTypeInfo, RepoSyncQueueID: j.ID,
		Message: fmt.Sprintf(LogFormatStartingSync, j.SyncType, j.Repo),
	}}); err != nil {
		return fmt.Errorf("send batch log messages: %w", err)
	}

	tmpPath, cleanup, err := helper.CreateTempDir(os.Getenv("GIT_CLONE_PATH"), "mergestat-repo-")
	if err != nil {
		return fmt.Errorf("temp dir: %w", err)
	}
	defer func() {
		if err = cleanup(); err != nil {
			l.Err(err).Msgf("error cleaning up repo at: %s, %v", tmpPath, err)
		}
	}()

	if err = w.clone(ctx, tmpPath, j); err != nil {
		return fmt.Errorf("git clone: %w", err)
	}

	refs := make([]*ref, 0)
	if err = w.mergestat.SelectContext(ctx, &refs, selectRefs, tmpPath); err != nil {
		return err
	}

	l.Info().Msgf("retrieved refs: %d", len(refs))

	var tx pgx.Tx
	if tx, err = w.pool.BeginTx(ctx, pgx.TxOptions{}); err != nil {
		return err
	}
	defer func() {
		if err := tx.Rollback(ctx); err != nil {
			if !errors.Is(err, pgx.ErrTxClosed) {
				w.logger.Err(err).Msgf("could not rollback transaction")
			}
		}
	}()

	r, err := tx.Exec(ctx, "DELETE FROM git_refs WHERE repo_id = $1;", j.RepoID.String())
	if err != nil {
		return err
	}

	if err := w.sendBatchLogMessages(ctx, []*syncLog{{
		Type:            SyncLogTypeInfo,
		RepoSyncQueueID: j.ID,
		Message:         fmt.Sprintf("removed %d row(s) from git_refs", r.RowsAffected()),
	}}); err != nil {
		return err
	}

	if err := w.sendBatchGitRefs(ctx, tx, j, refs); err != nil {
		return err
	}

	l.Info().Msgf("sent batch of %d refs", len(refs))

	if err := w.sendBatchLogMessages(ctx, []*syncLog{{
		Type:            SyncLogTypeInfo,
		RepoSyncQueueID: j.ID,
		Message:         fmt.Sprintf("inserted %d row(s) into git_refs", len(refs)),
	}}); err != nil {
		return err
	}

	if err := w.db.WithTx(tx).SetSyncJobStatus(ctx, db.SetSyncJobStatusParams{Status: "DONE", ID: j.ID}); err != nil {
		return err
	}

	// indicate that we're finishing query execution
	if err := w.sendBatchLogMessages(ctx, []*syncLog{{Type: SyncLogTypeInfo, RepoSyncQueueID: j.ID,
		Message: fmt.Sprintf(LogFormatFinishingSync, j.SyncType, j.Repo),
	}}); err != nil {
		return fmt.Errorf("send batch log messages: %w", err)
	}

	err = tx.Commit(ctx)

	return err
}
