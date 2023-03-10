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
func (w *worker) sendBatchCommitStats(ctx context.Context, tx pgx.Tx, j *db.DequeueSyncJobRow, statsTmpPath string) (int, error) {
	var (
		f   *os.File
		err error
	)

	if f, err = os.Open(statsTmpPath); err != nil {
		return 0, err
	}

	defer os.Remove(f.Name())
	var (
		decoder       = json.NewDecoder(f)
		inputs        = make([][]interface{}, 0, 100)
		insertedStats = 0
		isEOF         = false
		repoID        uuid.UUID
	)

	if repoID, err = uuid.FromString(j.RepoID.String()); err != nil {
		return insertedStats, err
	}

	for {
		for {
			var stat commitStat

			err = decoder.Decode(&stat)

			// If we've reached the end of the file, break out of the loop
			// and set isEOF to true
			if err == io.EOF {
				isEOF = true
				break
			}

			if err != nil {
				return insertedStats, err
			}

			input := []interface{}{repoID, stat.CommitHash.String, stat.FilePath.String, stat.Additions.Int64, stat.Deletions.Int64, stat.NewFileMode.String, stat.OldFileMode.String}
			inputs = append(inputs, input)

			if len(inputs) == cap(inputs) {
				break
			}

		}

		if _, err := tx.CopyFrom(ctx, pgx.Identifier{"git_commit_stats"}, []string{"repo_id", "commit_hash", "file_path", "additions", "deletions", "old_file_mode", "new_file_mode"}, pgx.CopyFromRows(inputs)); err != nil {
			return insertedStats, err
		}
		insertedStats += len(inputs)

		//cleaning slice and keeping capacity
		inputs = inputs[:0]

		// if we reach EOF we exit
		if isEOF {
			break
		}

	}

	return insertedStats, nil
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
	var err error
	l := w.loggerForJob(j)

	// indicate that we're starting query execution
	if err := w.sendBatchLogMessages(ctx, []*syncLog{{Type: SyncLogTypeInfo, RepoSyncQueueID: j.ID,
		Message: fmt.Sprintf(LogFormatStartingSync, j.SyncType, j.Repo),
	}}); err != nil {
		return fmt.Errorf("send batch log messages: %w", err)
	}

	tmpPath, cleanup, err := helper.CreateTempDir(os.Getenv("GIT_CLONE_PATH"), "mergestat-repo-")
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

	var file *os.File
	if file, err = os.CreateTemp(tmpPath, "commit-stats-objects-*.json"); err != nil {
		return err
	}

	encoder := json.NewEncoder(file)

	var repo *libgit2.Repository
	if repo, err = libgit2.OpenRepository(tmpPath); err != nil {
		return err
	}

	defer repo.Free()

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

		stat := &commitStat{
			CommitHash: sql.NullString{String: c.Id().String(), Valid: true},
		}

		err = diff.ForEach(func(delta libgit2.DiffDelta, progress float64) (libgit2.DiffForEachHunkCallback, error) {
			// TODO(patrickdevivo) should we also include the old file path? (delta.OldFile.Path)
			// if so, we might want to change file_path column to new_file_path and add old_file_path
			//repo_id, file_path, commit_hash, new_file_mode
			if len(stat.FilePath.String) > 0 && string(delta.NewFile.Path) != stat.FilePath.String && fmt.Sprint(delta.NewFile.Mode) != stat.NewFileMode.String {
				if err = encoder.Encode(stat); err != nil {
					return nil, err
				}
			}

			stat.Additions = sql.NullInt64{Int64: 0, Valid: true}
			stat.Deletions = sql.NullInt64{Int64: 0, Valid: true}
			stat.FilePath = sql.NullString{String: delta.NewFile.Path, Valid: true}
			stat.OldFileMode = sql.NullString{String: string(gitFileModeObjectTypeFromUint16((delta.OldFile.Mode))), Valid: true}
			stat.NewFileMode = sql.NullString{String: string(gitFileModeObjectTypeFromUint16(delta.NewFile.Mode)), Valid: true}

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
		// encoding each commit stat object
		if err = encoder.Encode(stat); err != nil {
			w.logger.Err(err).Msgf("%w", err)
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

	r, err := tx.Exec(ctx, "DELETE FROM git_commit_stats WHERE repo_id = $1;", j.RepoID.String())
	if err != nil {
		return err
	}

	if err := w.sendBatchLogMessages(ctx, []*syncLog{{
		Type:            SyncLogTypeInfo,
		RepoSyncQueueID: j.ID,
		Message:         fmt.Sprintf("removed %d row(s) from git_commit_stats", r.RowsAffected()),
	}}); err != nil {
		return err
	}
	var insertedStats int
	if insertedStats, err = w.sendBatchCommitStats(ctx, tx, j, file.Name()); err != nil {
		return nil
	}

	l.Info().Msgf("imported %d commit stats", insertedStats)

	if err := w.sendBatchLogMessages(ctx, []*syncLog{{
		Type:            SyncLogTypeInfo,
		RepoSyncQueueID: j.ID,
		Message:         fmt.Sprintf("inserted %d row(s) into git_commit_stats", insertedStats),
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
