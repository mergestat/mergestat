package syncer

import (
	"context"
	"database/sql"
	"errors"
	"fmt"
	"strings"
	"unicode/utf8"

	"github.com/jackc/pgx/v4"
	libgit2 "github.com/libgit2/git2go/v33"
	"github.com/mergestat/fuse/internal/db"
	uuid "github.com/satori/go.uuid"
)

func (w *worker) sendBatchFiles(ctx context.Context, tx pgx.Tx, j *db.DequeueSyncJobRow, batch []*file) error {
	inputs := make([][]interface{}, 0, len(batch))
	for _, c := range batch {
		var repoID uuid.UUID
		var err error
		if repoID, err = uuid.FromString(j.RepoID.String()); err != nil {
			return fmt.Errorf("uuid: %w", err)
		}

		var contents interface{}
		if utf8.ValidString(c.Contents.String) {
			contents = strings.ReplaceAll(c.Contents.String, "\u0000", "")
		} else {
			contents = nil
		}
		input := []interface{}{repoID, c.Path.String, c.Executable.Bool, contents}
		inputs = append(inputs, input)
	}

	if _, err := tx.CopyFrom(ctx, pgx.Identifier{"git_files"}, []string{"repo_id", "path", "executable", "contents"}, pgx.CopyFromRows(inputs)); err != nil {
		return fmt.Errorf("tx copy from: %w", err)
	}
	return nil
}

type file struct {
	Path       sql.NullString `json:"path"`
	Executable sql.NullBool   `json:"executable"`
	Contents   sql.NullString `json:"contents"`
}

const selectFiles = `
SELECT
	path, executable, contents
FROM files(?);
`

func (w *worker) handleGitFiles(ctx context.Context, j *db.DequeueSyncJobRow) error {
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
	if repo, err = w.cloneRepo(ctx, ghToken, j.Repo, tmpPath, true, j); err != nil {
		return fmt.Errorf("git clone: %w", err)
	}
	defer repo.Free()

	files := make([]*file, 0)
	if err = w.mergestat.SelectContext(ctx, &files, selectFiles, tmpPath, tmpPath); err != nil {
		return fmt.Errorf("mergestat query files: %w", err)
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

	if _, err := tx.Exec(ctx, "DELETE FROM git_files WHERE repo_id = $1;", j.RepoID.String()); err != nil {
		return fmt.Errorf("exec delete: %w", err)
	}

	if err := w.sendBatchFiles(ctx, tx, j, files); err != nil {
		return fmt.Errorf("send batch files: %w", err)
	}

	l.Info().Msgf("sent batch of %d files", len(files))

	if err := w.db.WithTx(tx).SetSyncJobStatus(ctx, db.SetSyncJobStatusParams{Status: "DONE", ID: j.ID}); err != nil {
		return fmt.Errorf("update status done: %w", err)
	}

	// indicate that we're finishing query execution
	if err := w.formatBatchLogMessages(ctx, SyncLogTypeInfo, j, jobStatusTypeFinish); err != nil {
		return fmt.Errorf("log messages: %w", err)
	}

	return tx.Commit(ctx)
}
