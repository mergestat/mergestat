package syncer

import (
	"context"
	"errors"
	"fmt"

	"github.com/jackc/pgx/v4"
	libgit2 "github.com/libgit2/git2go/v33"
	"github.com/mergestat/mergestat/internal/db"
)

func (w *worker) handleGitRemotes(ctx context.Context, j *db.DequeueSyncJobRow) error {
	var err error
	l := w.loggerForJob(j)

	// indicate that we're starting query execution
	if err := w.sendBatchLogMessages(ctx, []*syncLog{{Type: SyncLogTypeInfo, RepoSyncQueueID: j.ID,
		Message: fmt.Sprintf(LogFormatStartingSync, j.SyncType, j.Repo),
	}}); err != nil {
		return fmt.Errorf("send batch log messages: %w", err)
	}

	// open the repo, assumes that it's on disk
	// TODO(patrickdevivo) we should probably check here to see if the repo is a remote URL or not
	// and error accordingly if so
	var repo *libgit2.Repository
	if repo, err = libgit2.OpenRepository(j.Repo); err != nil {
		return fmt.Errorf("could not open repository: %w", err)
	}
	defer repo.Free()

	// list all the remotes, just the names
	var remotes []string
	if remotes, err = repo.Remotes.List(); err != nil {
		return fmt.Errorf("could not list remotes of repo: %w", err)
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

	r, err := tx.Exec(ctx, "DELETE FROM git_remotes WHERE repo_id = $1;", j.RepoID.String())
	if err != nil {
		return err
	}

	if err := w.sendBatchLogMessages(ctx, []*syncLog{{
		Type:            SyncLogTypeInfo,
		RepoSyncQueueID: j.ID,
		Message:         fmt.Sprintf("removed %d row(s) from git_remotes", r.RowsAffected()),
	}}); err != nil {
		return err
	}

	// iterate over the remotes and insert them into the database
	for _, rem := range remotes {
		if err := func() error {
			var r *libgit2.Remote
			if r, err = repo.Remotes.Lookup(rem); err != nil {
				return fmt.Errorf("could not lookup remote in repo: %w", err)
			}
			defer r.Free()

			if _, err = tx.Exec(ctx, "INSERT INTO git_remotes (repo_id, name, url) VALUES ($1, $2, $3);", j.RepoID, r.Name(), r.Url()); err != nil {
				return fmt.Errorf("could not insert remote into database: %w", err)
			}

			return nil
		}(); err != nil {
			return err
		}
	}

	l.Info().Msgf("sent batch of %d remotes", len(remotes))

	if err := w.sendBatchLogMessages(ctx, []*syncLog{{
		Type:            SyncLogTypeInfo,
		RepoSyncQueueID: j.ID,
		Message:         fmt.Sprintf("inserted %d row(s) into git_remotes", len(remotes)),
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
