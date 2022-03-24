package syncer

import (
	"context"
	"database/sql"
	"errors"
	"io/ioutil"
	"os"

	"github.com/go-git/go-git/v5"
	"github.com/go-git/go-git/v5/plumbing/transport/http"
	"github.com/jackc/pgx/v4"
	"github.com/mergestat/fuse/internal/db"
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
	l := w.loggerForJob(j)

	tmpPath, err := ioutil.TempDir("", "mergestat-repo-")
	if err != nil {
		return err
	}
	defer func() {
		if err := os.RemoveAll(tmpPath); err != nil {
			w.logger.Err(err).Msgf("error cleaning up repo at: %s, %v", tmpPath, err)
		}
	}()

	// TODO figure out this token thing
	if _, err := git.PlainCloneContext(ctx, tmpPath, true, &git.CloneOptions{URL: j.Repo, Auth: &http.BasicAuth{Username: os.Getenv("GITHUB_TOKEN")}}); err != nil {
		return err
	}

	// indicate that we're starting query execution
	if err := w.sendBatchLogMessages(ctx, []*syncLog{
		{Type: SyncLogTypeInfo, RepoSyncQueueID: j.ID, Message: "starting to execute refs query"},
	}); err != nil {
		return err
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

	if _, err := tx.Exec(ctx, "DELETE FROM git_refs WHERE repo_id = $1;", j.RepoID.String()); err != nil {
		return err
	}

	if err := w.sendBatchGitRefs(ctx, tx, j, refs); err != nil {
		return err
	}

	l.Info().Msgf("sent batch of %d refs", len(refs))

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
