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

// sendBatchGitBranches uses the pg COPY protocol to send a batch of git branches
func (w *worker) sendBatchGitBranches(ctx context.Context, tx pgx.Tx, j *db.DequeueSyncJobRow, batch []*branch) error {
	inputs := make([][]interface{}, 0, len(batch))
	for _, b := range batch {
		var repoID uuid.UUID
		var err error
		if repoID, err = uuid.FromString(j.RepoID.String()); err != nil {
			return err
		}
		input := []interface{}{repoID, b.FullName.String, b.Name.String}

		if b.Hash.Valid {
			input = append(input, b.Hash.String)
		} else {
			input = append(input, nil)
		}

		if b.Remote.Valid {
			input = append(input, b.Remote.String)
		} else {
			input = append(input, nil)
		}

		if b.Target.Valid {
			input = append(input, b.Target.String)
		} else {
			input = append(input, nil)
		}

		inputs = append(inputs, input)
	}

	if _, err := tx.CopyFrom(ctx, pgx.Identifier{"git_branches"}, []string{"repo_id", "full_name", "name", "hash", "remote", "target"}, pgx.CopyFromRows(inputs)); err != nil {
		return err
	}
	return nil
}

type branch struct {
	FullName sql.NullString `db:"full_name"`
	Hash     sql.NullString `db:"hash"`
	Name     sql.NullString `db:"name"`
	Remote   sql.NullString `db:"remote"`
	Target   sql.NullString `db:"target"`
	Type     sql.NullString `db:"type"`
}

const selectBranches = `
SELECT * FROM refs(?) WHERE type = 'branch';
`

func (w *worker) handleGitBranches(ctx context.Context, j *db.DequeueSyncJobRow) error {
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
		{Type: SyncLogTypeInfo, RepoSyncQueueID: j.ID, Message: "starting to execute branches query"},
	}); err != nil {
		return err
	}

	branches := make([]*branch, 0)
	if err = w.mergestat.SelectContext(ctx, &branches, selectBranches, tmpPath); err != nil {
		return err
	}

	l.Info().Msgf("retrieved branches: %d", len(branches))

	var tx pgx.Tx
	if tx, err = w.pool.BeginTx(ctx, pgx.TxOptions{IsoLevel: pgx.ReadCommitted}); err != nil {
		return err
	}
	defer func() {
		if err := tx.Rollback(ctx); err != nil {
			if !errors.Is(err, pgx.ErrTxClosed) {
				w.logger.Err(err).Msgf("could not rollback transaction")
			}
		}
	}()

	if _, err := tx.Exec(ctx, "DELETE FROM git_branches WHERE repo_id = $1;", j.RepoID.String()); err != nil {
		return err
	}

	if err := w.sendBatchGitBranches(ctx, tx, j, branches); err != nil {
		return err
	}

	l.Info().Msgf("sent batch of %d branches", len(branches))

	if err := w.db.SetSyncJobStatus(ctx, db.SetSyncJobStatusParams{Status: "DONE", ID: j.ID}); err != nil {
		return err
	}

	if err := w.sendBatchLogMessages(ctx, []*syncLog{
		{Type: SyncLogTypeInfo, RepoSyncQueueID: j.ID, Message: "finished!"},
	}); err != nil {
		return err
	}

	return tx.Commit(ctx)
}
