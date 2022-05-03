package syncer

import (
	"context"
	"database/sql"
	"errors"
	"fmt"
	"io/ioutil"
	"os"

	"github.com/jackc/pgx/v4"
	libgit2 "github.com/libgit2/git2go/v33"
	"github.com/mergestat/fuse/internal/db"
	uuid "github.com/satori/go.uuid"
)

// sendBatchCommits uses the pg COPY protocol to send a batch of commits
func (w *worker) sendBatchCommits(ctx context.Context, tx pgx.Tx, j *db.DequeueSyncJobRow, batch []*commit) error {
	inputs := make([][]interface{}, 0, len(batch))
	for _, c := range batch {
		var repoID uuid.UUID
		var err error
		if repoID, err = uuid.FromString(j.RepoID.String()); err != nil {
			return err
		}
		input := []interface{}{repoID, c.Hash.String, c.Message.String,
			c.AuthorName.String, c.AuthorEmail.String, c.AuthorWhen.Time,
			c.CommitterName.String, c.CommitterEmail.String, c.CommitterWhen.Time,
			c.Parents.Int32,
		}
		inputs = append(inputs, input)
	}

	if _, err := tx.CopyFrom(ctx, pgx.Identifier{"git_commits"}, []string{"repo_id", "hash", "message", "author_name", "author_email", "author_when", "committer_name", "committer_email", "committer_when", "parents"}, pgx.CopyFromRows(inputs)); err != nil {
		return err
	}
	return nil
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

const selectCommits = `
SELECT
	hash, message,
	author_name, author_email, author_when,
	committer_name, committer_email, committer_when,
	parents
FROM commits(?);
`

func (w *worker) handleGitCommits(ctx context.Context, j *db.DequeueSyncJobRow) error {
	l := w.loggerForJob(j)

	// TODO(patrickdevivo) uplift the following os.Getenv call to one place, pass value down as a param
	tmpPath, err := ioutil.TempDir(os.Getenv("GIT_CLONE_PATH"), "mergestat-repo-")
	if err != nil {
		return err
	}
	defer func() {
		if err := os.RemoveAll(tmpPath); err != nil {
			w.logger.Err(err).Msgf("error cleaning up repo at: %s, %v", tmpPath, err)
		}
	}()

	// TODO figure out this token thing
	var creds *libgit2.Credential
	if creds, err = libgit2.NewCredentialUserpassPlaintext(os.Getenv("GITHUB_TOKEN"), ""); err != nil {
		return err
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
		return err
	}
	defer repo.Free()

	// indicate that we're starting query execution
	if err := w.sendBatchLogMessages(ctx, []*syncLog{
		{Type: SyncLogTypeInfo, RepoSyncQueueID: j.ID, Message: "starting to execute commits query"},
	}); err != nil {
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

	if _, err := tx.Exec(ctx, "DELETE FROM git_commits WHERE repo_id = $1;", j.RepoID.String()); err != nil {
		return err
	}

	// TODO(patrickdevivo) make batch size configurable?
	batchSize := 500
	batch := make([]*commit, 0, batchSize)
	totalCount := 0

	walk, err := repo.Walk()
	if err != nil {
		return err
	}
	defer walk.Free()

	if err := walk.PushHead(); err != nil {
		return err
	}

	if err := walk.Iterate(func(c *libgit2.Commit) bool {
		defer c.Free()
		totalCount++

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

		if len(batch) >= batchSize {
			if err := w.sendBatchCommits(ctx, tx, j, batch); err != nil {
				return false
			}
			batch = make([]*commit, 0, batchSize)
		} else {
			batch = append(batch, &r)
		}

		return true
	}); err != nil {
		return err
	}

	if len(batch) > 0 {
		if err := w.sendBatchCommits(ctx, tx, j, batch); err != nil {
			return fmt.Errorf("send batch commits: %w", err)
		}
	}

	l.Info().Msgf("sent batch of %d commits", totalCount)

	if err := w.db.WithTx(tx).SetSyncJobStatus(ctx, db.SetSyncJobStatusParams{Status: "DONE", ID: j.ID}); err != nil {
		return err
	}

	if err := w.sendBatchLogMessages(ctx, []*syncLog{
		{Type: SyncLogTypeInfo, RepoSyncQueueID: j.ID, Message: "finished!"},
	}); err != nil {
		return err
	}

	return tx.Commit(ctx)
}
