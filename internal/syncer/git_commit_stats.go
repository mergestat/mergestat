package syncer

import (
	"context"
	"database/sql"
	"errors"
	"io/ioutil"
	"os"

	"github.com/jackc/pgx/v4"
	libgit2 "github.com/libgit2/git2go/v33"
	"github.com/mergestat/fuse/internal/db"
	uuid "github.com/satori/go.uuid"
)

// sendBatchCommitStats uses the pg COPY protocol to send a batch of commit stats
func (w *worker) sendBatchCommitStats(ctx context.Context, tx pgx.Tx, j *db.DequeueSyncJobRow, batch []*commitStat) error {
	inputs := make([][]interface{}, 0, len(batch))
	for _, c := range batch {
		var repoID uuid.UUID
		var err error
		if repoID, err = uuid.FromString(j.RepoID.String()); err != nil {
			return err
		}
		input := []interface{}{repoID, c.CommitHash.String, c.FilePath.String, c.Additions.Int64, c.Deletions.Int64}
		inputs = append(inputs, input)
	}

	if _, err := tx.CopyFrom(ctx, pgx.Identifier{"git_commit_stats"}, []string{"repo_id", "commit_hash", "file_path", "additions", "deletions"}, pgx.CopyFromRows(inputs)); err != nil {
		return err
	}
	return nil
}

type commitStat struct {
	CommitHash sql.NullString `db:"commit_hash"`
	FilePath   sql.NullString `db:"file_path"`
	Additions  sql.NullInt64  `db:"additions"`
	Deletions  sql.NullInt64  `db:"deletions"`
}

func (w *worker) handleGitCommitStats(ctx context.Context, j *db.DequeueSyncJobRow) error {
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

	var ghToken string
	if ghToken, err = w.fetchGitHubTokenFromDB(ctx); err != nil {
		return err
	}

	var creds *libgit2.Credential
	if creds, err = libgit2.NewCredentialUserpassPlaintext(ghToken, ""); err != nil {
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
		{Type: SyncLogTypeInfo, RepoSyncQueueID: j.ID, Message: "starting to execute commit stats query"},
	}); err != nil {
		return err
	}

	stats := make([]*commitStat, 0)

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

		toTree, err := c.Tree()
		if err != nil {
			return false
		}

		fromC := c.Parent(0)
		var fromTree *libgit2.Tree
		if fromC == nil {
			fromTree = &libgit2.Tree{}
		} else {
			defer fromC.Free()
			fromTree, err = fromC.Tree()
			if err != nil {
				return false
			}
		}

		diffOpts, err := libgit2.DefaultDiffOptions()
		if err != nil {
			return false
		}

		diff, err := repo.DiffTreeToTree(fromTree, toTree, &diffOpts)
		if err != nil {
			return false
		}
		defer func() {
			if err := diff.Free(); err != nil {
				w.logger.Err(err).Msgf("error freeing diff")
			}
		}()

		diffFindOpts, err := libgit2.DefaultDiffFindOptions()
		if err != nil {
			return false
		}

		if err = diff.FindSimilar(&diffFindOpts); err != nil {
			return false
		}

		err = diff.ForEach(func(delta libgit2.DiffDelta, progress float64) (libgit2.DiffForEachHunkCallback, error) {
			stat := &commitStat{
				CommitHash: sql.NullString{String: c.Id().String(), Valid: true},
				FilePath:   sql.NullString{String: delta.NewFile.Path, Valid: true},
				Additions:  sql.NullInt64{Int64: 0, Valid: true},
				Deletions:  sql.NullInt64{Int64: 0, Valid: true},
			}

			stats = append(stats, stat)

			return func(hunk libgit2.DiffHunk) (libgit2.DiffForEachLineCallback, error) {
				return func(line libgit2.DiffLine) error {
					switch line.Origin {
					case libgit2.DiffLineAddition:
						stat.Additions.Int64++
					case libgit2.DiffLineDeletion:
						stat.Deletions.Int64++
					}
					return nil
				}, nil
			}, nil
		}, libgit2.DiffDetailLines)
		if err != nil {
			w.logger.Err(err).Msgf("error iterating over diff")
			return false
		}

		return true
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

	if _, err := tx.Exec(ctx, "DELETE FROM git_commit_stats WHERE repo_id = $1;", j.RepoID.String()); err != nil {
		return err
	}

	if err := w.sendBatchCommitStats(ctx, tx, j, stats); err != nil {
		return nil
	}

	l.Info().Msgf("imported %d commit stats", len(stats))

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
