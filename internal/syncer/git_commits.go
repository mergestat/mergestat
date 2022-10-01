package syncer

import (
	"context"
	"database/sql"
	"errors"
	"fmt"

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

// collectCommits retrieves all the commits for a given repository and returns them as a slice
func collectCommits(ctx context.Context, repo *libgit2.Repository) ([]*commit, error) {
	commits := make([]*commit, 0)

	walk, err := repo.Walk()
	if err != nil {
		return nil, err
	}
	defer walk.Free()

	if err := walk.PushHead(); err != nil {
		return nil, err
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

		commits = append(commits, &r)

		return true
	}); err != nil {
		return nil, err
	}

	return commits, nil
}

func (w *worker) handleGitCommits(ctx context.Context, j *db.DequeueSyncJobRow) error {
	l := w.loggerForJob(j)

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

	// indicate that we're starting query execution
	if err := w.formatBatchLogMessages(ctx, SyncLogTypeInfo, j, jobStatusTypeInit); err != nil {
		return fmt.Errorf("log messages: %w", err)
	}

	commits, err := collectCommits(ctx, repo)
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

	if _, err := tx.Exec(ctx, "DELETE FROM git_commits WHERE repo_id = $1;", j.RepoID.String()); err != nil {
		return err
	}

	if err := w.sendBatchCommits(ctx, tx, j, commits); err != nil {
		return err
	}

	l.Info().Msgf("sent batch of %d commits", len(commits))

	if err := w.db.WithTx(tx).SetSyncJobStatus(ctx, db.SetSyncJobStatusParams{Status: "DONE", ID: j.ID}); err != nil {
		return err
	}

	// indicate that we're finishing query execution
	if err := w.formatBatchLogMessages(ctx, SyncLogTypeInfo, j, jobStatusTypeFinish); err != nil {
		return fmt.Errorf("log messages: %w", err)
	}

	return tx.Commit(ctx)
}
