package syncer

import (
	"context"
	"errors"
	"fmt"
	"io"
	"log"
	"os"
	"os/exec"
	"strings"
	"time"
	"unicode/utf8"

	"github.com/jackc/pgx/v4"
	libgit2 "github.com/libgit2/git2go/v33"
	"github.com/mergestat/fuse/internal/db"
	"github.com/mergestat/gitutils/blame"
	"github.com/mergestat/gitutils/lstree"
	uuid "github.com/satori/go.uuid"
)

func (w *worker) sendBatchBlameLines(ctx context.Context, tx pgx.Tx, j *db.DequeueSyncJobRow, batch []*blameLine) error {
	inputs := make([][]interface{}, 0, len(batch))
	for _, l := range batch {
		var repoID uuid.UUID
		var err error
		if repoID, err = uuid.FromString(j.RepoID.String()); err != nil {
			return fmt.Errorf("uuid: %w", err)
		}

		// sanitize the line of null chars, similar to what's done in GIT_FILES syncer
		var line interface{}
		if l.Line != nil && utf8.ValidString(*l.Line) {
			line = strings.ReplaceAll(*l.Line, "\u0000", "")
		} else {
			line = nil
		}

		input := []interface{}{repoID, l.AuthorEmail, l.AuthorName, l.AuthorWhen, l.CommitHash, l.LineNo, line, l.Path}
		inputs = append(inputs, input)
	}

	if _, err := tx.CopyFrom(ctx, pgx.Identifier{"git_blame"}, []string{"repo_id", "author_email", "author_name", "author_when", "commit_hash", "line_no", "line", "path"}, pgx.CopyFromRows(inputs)); err != nil {
		return fmt.Errorf("tx copy from: %w", err)
	}
	return nil
}

type blameLine struct {
	AuthorEmail *string
	AuthorName  *string
	AuthorWhen  *time.Time
	CommitHash  *string
	LineNo      *int
	Line        *string
	Path        *string
}

func (w *worker) handleGitBlame(ctx context.Context, j *db.DequeueSyncJobRow) error {
	l := w.loggerForJob(j)

	tmpPath, err := os.MkdirTemp(os.Getenv("GIT_CLONE_PATH"), "mergestat-repo-")
	if err != nil {
		return fmt.Errorf("temp dir: %w", err)
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

	var repo *libgit2.Repository
	if repo, err = w.cloneRepo(ghToken, j.Repo, tmpPath, false); err != nil {
		return fmt.Errorf("git clone: %w", err)
	}
	defer repo.Free()

	if err := w.sendBatchLogMessages(ctx, []*syncLog{
		{
			Type:            SyncLogTypeInfo,
			RepoSyncQueueID: j.ID,
			Message:         "starting to execute git blame query",
		},
	}); err != nil {
		return fmt.Errorf("log messages: %w", err)
	}

	blamedLines := make([]*blameLine, 0)

	iter, err := lstree.Exec(ctx, tmpPath, "HEAD", lstree.WithRecurse(true))
	if err != nil {
		return fmt.Errorf("git ls-tree error: %w", err)
	}

	var objects []*lstree.Object
	for {
		if o, err := iter.Next(); err != nil {
			if errors.Is(err, io.EOF) {
				break
			} else {
				log.Fatal(err)
			}
		} else {
			objects = append(objects, o)
		}
	}

	for _, o := range objects {
		if o.Type != "blob" {
			continue
		}
		res, err := blame.Exec(ctx, tmpPath, o.Path)
		if err != nil {
			if exitErr, ok := err.(*exec.ExitError); ok {
				w.logger.Err(err).Str("repoPath", tmpPath).Str("filePath", o.Path).Msgf("error blaming file in repo: %s, %v: %s", tmpPath, err, exitErr.Stderr)
			} else {
				w.logger.Err(err).Msgf("error blaming file in repo: %s, %v", tmpPath, err)
			}
			continue
		}

		for lineIdx, blame := range res {
			lineNo := lineIdx + 1

			if blame == nil {
				w.logger.Warn().Str("repo", j.Repo).Str("file", o.Path).Int("lineIdx", lineIdx).Msgf("nil blame line encountered")
				continue
			}

			var authorEmail, authorName *string
			var authorWhen *time.Time
			// TODO(patrickdevivo) we shouldn't be seeing a nil Author here, but we are
			// until we can audit what's going on in the `gitutils` package let's add a check here
			if blame.Author != nil {
				authorEmail = &blame.Author.Email
				authorName = &blame.Author.Name
				authorWhen = &blame.Author.When
			}

			blamedLines = append(blamedLines, &blameLine{
				AuthorEmail: authorEmail,
				AuthorName:  authorName,
				AuthorWhen:  authorWhen,
				CommitHash:  &blame.SHA,
				LineNo:      &lineNo,
				Line:        &blame.Line,
				Path:        &o.Path,
			})
		}
	}

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

	if _, err := tx.Exec(ctx, "DELETE FROM git_blame WHERE repo_id = $1;", j.RepoID.String()); err != nil {
		return fmt.Errorf("exec delete: %w", err)
	}

	if err := w.sendBatchBlameLines(ctx, tx, j, blamedLines); err != nil {
		return fmt.Errorf("send batch blamed lines: %w", err)
	}

	l.Info().Msgf("sent batch of %d blamed lines", len(blamedLines))

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
