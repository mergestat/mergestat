package syncer

import (
	"context"
	"database/sql"
	"encoding/json"
	"errors"
	"fmt"
	"io"
	"os"

	"github.com/jackc/pgx/v4"
	libgit2 "github.com/libgit2/git2go/v33"
	"github.com/mergestat/mergestat/internal/db"
	"github.com/mergestat/mergestat/internal/helper"
	uuid "github.com/satori/go.uuid"
)

// sendBatchCommits uses the pg COPY protocol to send a batch of commits
func (w *worker) sendBatchCommits(ctx context.Context, tx pgx.Tx, j *db.DequeueSyncJobRow, jsonTmpPath string) (int, error) {
	var (
		f   *os.File
		err error
	)

	if f, err = os.Open(jsonTmpPath); err != nil {
		return 0, err
	}

	// making sure we remove file after operation
	defer os.Remove(f.Name())

	var (
		inputs          = make([][]interface{}, 0, 100)
		insertedCommits = 0
		isEOF           = false
		repoID          uuid.UUID
		decoder         = json.NewDecoder(f)
	)

	if repoID, err = uuid.FromString(j.RepoID.String()); err != nil {
		return 0, err
	}
	for {
		for {

			var c commit
			err = decoder.Decode(&c)

			// If we've reached the end of the file, break out of the loop
			// and set isEOF to true
			if err == io.EOF {
				isEOF = true
				break
			}

			if err != nil {
				return insertedCommits, err
			}

			input := []interface{}{repoID, c.Hash.String, c.Message.String,
				c.AuthorName.String, c.AuthorEmail.String, c.AuthorWhen.Time,
				c.CommitterName.String, c.CommitterEmail.String, c.CommitterWhen.Time,
				c.Parents.Int32,
			}
			inputs = append(inputs, input)

			if len(inputs) == cap(inputs) {
				break
			}
		}
		if _, err := tx.CopyFrom(ctx, pgx.Identifier{"git_commits"}, []string{"repo_id", "hash", "message", "author_name", "author_email", "author_when", "committer_name", "committer_email", "committer_when", "parents"}, pgx.CopyFromRows(inputs)); err != nil {
			return 0, err
		}
		insertedCommits += len(inputs)

		//cleaning slice and keeping capacity
		inputs = inputs[:0]

		// if we reach EOF we exit
		if isEOF {
			break
		}
	}

	return insertedCommits, nil
}

type commit struct {
	Hash           sql.NullString `db:"hash"`
	Message        sql.NullString `db:"message"`
	AuthorName     sql.NullString `db:"author_name"`
	AuthorEmail    sql.NullString `db:"author_email"`
	AuthorWhen     sql.NullTime   `db:"author_when"`
	CommitterName  sql.NullString `db:"committer_name"`
	CommitterEmail sql.NullString `db:"committer_email"`
	CommitterWhen  sql.NullTime   `db:"committer_when"`
	Parents        sql.NullInt32  `db:"parents"`
}

// collectCommits retrieves all the commits for a given repository and returns them as a slice
func (w *worker) collectCommits(ctx context.Context, tmpPath string) (string, error) {
	var err error
	var repo *libgit2.Repository

	var f *os.File
	if f, err = os.CreateTemp(tmpPath, "commits-objects-*.json"); err != nil {
		return "", err
	}

	defer f.Close()

	encoder := json.NewEncoder(f)

	if repo, err = libgit2.OpenRepository(tmpPath); err != nil {
		return "", err
	}

	defer repo.Free()

	walk, err := repo.Walk()
	if err != nil {
		return "", err
	}
	defer walk.Free()

	if err := walk.PushHead(); err != nil {
		return "", err
	}

	if err := walk.Iterate(func(c *libgit2.Commit) bool {
		defer c.Free()

		// TODO(patrickdevivo) inspect this behavior
		select {
		case <-ctx.Done():
			return false
		default:
		}

		var r commit
		r.Hash = sql.NullString{String: c.Id().String(), Valid: true}
		r.Message = sql.NullString{String: c.Message(), Valid: true}
		r.AuthorName = sql.NullString{String: c.Author().Name, Valid: true}
		r.AuthorEmail = sql.NullString{String: c.Author().Email, Valid: true}
		r.AuthorWhen = sql.NullTime{Time: c.Author().When, Valid: true}
		r.CommitterName = sql.NullString{String: c.Committer().Name, Valid: true}
		r.CommitterEmail = sql.NullString{String: c.Committer().Email, Valid: true}
		r.CommitterWhen = sql.NullTime{Time: c.Committer().When, Valid: true}
		r.Parents = sql.NullInt32{Int32: int32(c.ParentCount()), Valid: true}

		// encode commit object to json file
		if err = encoder.Encode(r); err != nil {
			w.logger.Err(err).Msgf("%v", err)
			return false
		}

		return true
	}); err != nil {
		return "", err
	}

	return f.Name(), nil
}

func (w *worker) handleGitCommits(ctx context.Context, j *db.DequeueSyncJobRow) error {
	var err error
	l := w.loggerForJob(j)

	// indicate that we're starting query execution
	if err := w.sendBatchLogMessages(ctx, []*syncLog{{Type: SyncLogTypeInfo, RepoSyncQueueID: j.ID,
		Message: fmt.Sprintf(LogFormatStartingSync, j.SyncType, j.Repo),
	}}); err != nil {
		return fmt.Errorf("send batch log messages: %w", err)
	}

	tmpPath, cleanup, err := helper.CreateTempDir(os.Getenv("GIT_CLONE_PATH"), "mergestat-repo-*")
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

	jsonTmpPath, err := w.collectCommits(ctx, tmpPath)
	if err != nil {
		return err
	}

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

	r, err := tx.Exec(ctx, "DELETE FROM git_commits WHERE repo_id = $1;", j.RepoID.String())
	if err != nil {
		return err
	}

	if err := w.sendBatchLogMessages(ctx, []*syncLog{{
		Type:            SyncLogTypeInfo,
		RepoSyncQueueID: j.ID,
		Message:         fmt.Sprintf("removed %d row(s) from git_commits", r.RowsAffected()),
	}}); err != nil {
		return err
	}
	var insertedCommits int
	if insertedCommits, err = w.sendBatchCommits(ctx, tx, j, jsonTmpPath); err != nil {
		return err
	}

	l.Info().Msgf("sent batch of %d commits", insertedCommits)

	if err := w.sendBatchLogMessages(ctx, []*syncLog{{
		Type:            SyncLogTypeInfo,
		RepoSyncQueueID: j.ID,
		Message:         fmt.Sprintf("inserted %d row(s) into git_commits", insertedCommits),
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
