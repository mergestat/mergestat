package syncer

import (
	"context"
	"database/sql"
	"errors"
	"fmt"
	"io/ioutil"
	"os"
	"strings"
	"unicode/utf8"

	"github.com/jackc/pgx/v4"
	"github.com/jmoiron/sqlx"
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

	tmpPath, err := ioutil.TempDir(os.Getenv("GIT_CLONE_PATH"), "mergestat-repo-")
	if err != nil {
		return fmt.Errorf("temp dir: %w", err)
	}
	defer func() {
		if err := os.RemoveAll(tmpPath); err != nil {
			w.logger.Err(err).Msgf("error cleaning up repo at: %s, %v", tmpPath, err)
		}
	}()

	// TODO(alonlong) figure out this token thing
	var creds *libgit2.Credential
	if creds, err = libgit2.NewCredentialUserpassPlaintext(os.Getenv("GITHUB_TOKEN"), ""); err != nil {
		return fmt.Errorf("new credentail: %w", err)
	}
	defer creds.Free()

	var repo *libgit2.Repository
	if repo, err = libgit2.Clone(j.Repo, tmpPath, &libgit2.CloneOptions{
		Bare: true,
		FetchOptions: libgit2.FetchOptions{
			RemoteCallbacks: libgit2.RemoteCallbacks{
				CredentialsCallback: func(url string, username_from_url string, allowed_types libgit2.CredentialType) (*libgit2.Credential, error) {
					return creds, nil
				},
			},
		},
	}); err != nil {
		return fmt.Errorf("git clone: %w", err)
	}
	defer repo.Free()

	if err := w.sendBatchLogMessages(ctx, []*syncLog{
		{
			Type:            SyncLogTypeInfo,
			RepoSyncQueueID: j.ID,
			Message:         "starting to execute files query",
		},
	}); err != nil {
		return fmt.Errorf("log messages: %w", err)
	}

	var rows *sqlx.Rows
	if rows, err = w.mergestat.QueryxContext(ctx, selectFiles, tmpPath, tmpPath); err != nil {
		return fmt.Errorf("mergestat query files: %w", err)
	}
	defer func() {
		if err := rows.Close(); err != nil {
			w.logger.Err(err).Msgf("could not close rows: %v", err)
		}
	}()

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

	// TODO(alonlong) make batch size configurable?
	batchSize := 500
	batch := make([]*file, 0, batchSize)
	totalCount := 0
	for rows.Next() {
		totalCount++
		var r file
		if err := rows.StructScan(&r); err != nil {
			return fmt.Errorf("scan row: %w", err)
		}

		if len(batch) >= batchSize {
			if err := w.sendBatchFiles(ctx, tx, j, batch); err != nil {
				return fmt.Errorf("send batch files: %w", err)
			}
			batch = make([]*file, 0, batchSize)
		} else {
			batch = append(batch, &r)
		}
	}

	if len(batch) > 0 {
		if err := w.sendBatchFiles(ctx, tx, j, batch); err != nil {
			return fmt.Errorf("send batch files: %w", err)
		}
	}

	l.Info().Msgf("sent batch of %d files", totalCount)

	if err := w.db.WithTx(tx).SetSyncJobStatus(ctx, db.SetSyncJobStatusParams{Status: "DONE", ID: j.ID}); err != nil {
		return fmt.Errorf("update status done: %w", err)
	}
	if err := w.sendBatchLogMessages(ctx, []*syncLog{
		{
			Type:            SyncLogTypeInfo,
			RepoSyncQueueID: j.ID,
			Message:         "finished",
		},
	}); err != nil {
		return fmt.Errorf("log messages: %w", err)
	}

	return tx.Commit(ctx)
}
