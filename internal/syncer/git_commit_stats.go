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

type GitFileModeObjectType string

const (
	GitFileModeObjectTypeUnknown     GitFileModeObjectType = "unknown"
	GitFileModeObjectTypeNone        GitFileModeObjectType = "none"
	GitFileModeObjectTypeRegularFile GitFileModeObjectType = "regular_file"
	GitFileModeOjectTypeSymbolicLink GitFileModeObjectType = "symbolic_link"
	GitFileModeOjectTypeGitLink      GitFileModeObjectType = "git_link"
)

// gitFileModeObjectTypeFromUint16 takes a git stats file mode and returns the GitFileModeObjectType.
// See here for more info on the modes: https://unix.stackexchange.com/questions/450480/file-permission-with-six-bytes-in-git-what-does-it-mean
func gitFileModeObjectTypeFromUint16(mode uint16) GitFileModeObjectType {
	switch mode >> 12 {
	case 0:
		return GitFileModeObjectTypeNone
	case 0b1110:
		return GitFileModeOjectTypeGitLink
	case 0b1010:
		return GitFileModeOjectTypeSymbolicLink
	case 0b1000:
		return GitFileModeObjectTypeRegularFile
	default:
		return GitFileModeObjectTypeUnknown
	}
}

// sendBatchCommitStats uses the pg COPY protocol to send a batch of commit stats
func (w *worker) sendBatchCommitStats(ctx context.Context, tx pgx.Tx, j *db.DequeueSyncJobRow, batch []*commitStat) error {
	inputs := make([][]interface{}, 0, len(batch))
	for _, c := range batch {
		var repoID uuid.UUID
		var err error
		if repoID, err = uuid.FromString(j.RepoID.String()); err != nil {
			return err
		}
		input := []interface{}{repoID, c.CommitHash.String, c.FilePath.String, c.Additions.Int64, c.Deletions.Int64, c.NewFileMode.String, c.OldFileMode.String}
		inputs = append(inputs, input)
	}

	if _, err := tx.CopyFrom(ctx, pgx.Identifier{"git_commit_stats"}, []string{"repo_id", "commit_hash", "file_path", "additions", "deletions", "old_file_mode", "new_file_mode"}, pgx.CopyFromRows(inputs)); err != nil {
		return err
	}
	return nil
}

type commitStat struct {
	CommitHash  sql.NullString `db:"commit_hash"`
	FilePath    sql.NullString `db:"file_path"`
	Additions   sql.NullInt64  `db:"additions"`
	Deletions   sql.NullInt64  `db:"deletions"`
	OldFileMode sql.NullString `db:"old_file_mode"`
	NewFileMode sql.NullString `db:"new_file_mode"`
}

func (w *worker) handleGitCommitStats(ctx context.Context, j *db.DequeueSyncJobRow) error {
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
			// TODO(patrickdevivo) should we also include the old file path? (delta.OldFile.Path)
			// if so, we might want to change file_path column to new_file_path and add old_file_path
			stat := &commitStat{
				CommitHash:  sql.NullString{String: c.Id().String(), Valid: true},
				FilePath:    sql.NullString{String: delta.NewFile.Path, Valid: true},
				Additions:   sql.NullInt64{Int64: 0, Valid: true},
				Deletions:   sql.NullInt64{Int64: 0, Valid: true},
				OldFileMode: sql.NullString{String: string(gitFileModeObjectTypeFromUint16((delta.OldFile.Mode))), Valid: true},
				NewFileMode: sql.NullString{String: string(gitFileModeObjectTypeFromUint16(delta.NewFile.Mode)), Valid: true},
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

	// indicate that we're finishing query execution
	if err := w.formatBatchLogMessages(ctx, SyncLogTypeInfo, j, jobStatusTypeFinish); err != nil {
		return fmt.Errorf("log messages: %w", err)
	}

	return tx.Commit(ctx)
}
