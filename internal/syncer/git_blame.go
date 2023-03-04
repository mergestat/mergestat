package syncer

import (
	"bufio"
	"bytes"
	"context"
	"encoding/json"
	"errors"
	"fmt"
	"io"
	"io/ioutil"
	"log"
	"os"
	"os/exec"
	"path/filepath"
	"strings"
	"time"
	"unicode/utf8"

	"github.com/go-enry/go-enry/v2"
	"github.com/jackc/pgx/v4"
	"github.com/mergestat/gitutils/blame"
	"github.com/mergestat/gitutils/lstree"
	"github.com/mergestat/mergestat/internal/db"
	"github.com/mergestat/mergestat/internal/helper"
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
	var err error
	l := w.loggerForJob(j)

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

	var ghToken string
	if ghToken, err = w.fetchGitHubTokenFromDB(ctx); err != nil {
		return err
	}

	if err = w.cloneRepo(ctx, ghToken, j.Repo, tmpPath, false, j); err != nil {
		return fmt.Errorf("git clone: %w", err)
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

	var fileObjects []string
	if fileObjects, err = w.writeBlameObjectsToFile(objects, tmpPath); err != nil {
		return err
	}

	// clearing objects of memory
	objects = nil

	for _, fo := range fileObjects {

		fo += "}"
		fo = strings.Trim(fo, ",")
		fo = strings.Trim(fo, "]")
		fo = strings.Trim(fo, "[")
		if fo == "}" {
			continue
		}

		var o lstree.Object
		if err := json.Unmarshal([]byte(fo), &o); err != nil {
			return err
		}

		if o.Type != "blob" {
			continue
		}

		// skip running git blame on binary files
		// first detect if a file is binary or not
		fullPath := filepath.Join(tmpPath, o.Path)
		if f, err := os.Open(fullPath); err != nil {
			w.logger.Warn().AnErr("error", err).Str("repo", j.Repo).Msgf("error opening file in repo: %s, %v", fullPath, err)

			// indicate that we're detecting unexpected behavior
			if err := w.sendBatchLogMessages(ctx, []*syncLog{{Type: SyncLogTypeWarn, RepoSyncQueueID: j.ID,
				Message: fmt.Sprintf(LogFormatErrorWarningMessage, "error opening file in repo", err),
			}}); err != nil {
				return fmt.Errorf("send batch log messages: %w", err)
			}

			continue
		} else {
			defer f.Close()

			// only read the first 8kb of the file to detect if it's binary or not
			buffer := make([]byte, 8000)
			var bytesRead int
			if bytesRead, err = f.Read(buffer); err != nil && !errors.Is(err, io.EOF) {
				w.logger.Warn().AnErr("error", err).Str("repo", j.Repo).Msgf("error reading file in repo: %s, %v", fullPath, err)

				// indicate that we're detecting unexpected behavior
				if err := w.sendBatchLogMessages(ctx, []*syncLog{{Type: SyncLogTypeWarn, RepoSyncQueueID: j.ID,
					Message: fmt.Sprintf(LogFormatErrorWarningMessage, "error reading file in repo", err),
				}}); err != nil {
					return fmt.Errorf("send batch log messages: %w", err)
				}
			}

			// See here: https://github.com/go-enry/go-enry/blob/v2.8.2/utils.go#L80 for the implementation of IsBinary
			// basically just looking for a byte(0) in the first portion of the file
			if enry.IsBinary(buffer[:bytesRead]) {
				w.logger.Info().Msgf("skipping binary file: %s", fullPath)
				// TODO(patrickdevivo) maybe we should also log to the DB so the user can see this?
				continue
			}
		}

		// adjustedBufferSize is larger than the default to support longer lines without error
		// TODO(patrickdevivo) maybe eventually we can make this configurable? Either via an ENV var or a DB setting
		adjustedBufferSize := bufio.MaxScanTokenSize * 30
		res, err := blame.Exec(ctx, tmpPath, o.Path, blame.WithScannerBuffer(make([]byte, adjustedBufferSize), adjustedBufferSize))
		if err != nil {
			l := w.logger.Warn().AnErr("error", err).Str("repo", j.Repo).Str("filePath", o.Path)
			if exitErr, ok := err.(*exec.ExitError); ok {
				l.Msgf("error blaming file: %s in repo: %s, %v: %s", o.Path, tmpPath, err, exitErr.Stderr)
			} else {
				l.Msgf("error blaming file: %s in repo: %s, %v", o.Path, tmpPath, err)
			}

			// indicate that we're detecting unexpected behavior
			if err := w.sendBatchLogMessages(ctx, []*syncLog{{Type: SyncLogTypeWarn, RepoSyncQueueID: j.ID,
				Message: fmt.Sprintf(LogFormatErrorWarningMessage, "error blaming file in repo", err),
			}}); err != nil {
				return fmt.Errorf("send batch log messages: %w", err)
			}

			continue
		}

		for lineIdx, blame := range res {
			lineNo := lineIdx + 1

			blamedLines = append(blamedLines, &blameLine{
				AuthorEmail: &blame.Author.Email,
				AuthorName:  &blame.Author.Name,
				AuthorWhen:  &blame.Author.When,
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

	r, err := tx.Exec(ctx, "DELETE FROM git_blame WHERE repo_id = $1;", j.RepoID.String())
	if err != nil {
		return fmt.Errorf("exec delete: %w", err)
	}

	if err := w.sendBatchLogMessages(ctx, []*syncLog{{
		Type:            SyncLogTypeInfo,
		RepoSyncQueueID: j.ID,
		Message:         fmt.Sprintf("removed %d row(s) from git_blame", r.RowsAffected()),
	}}); err != nil {
		return err
	}

	if err := w.sendBatchBlameLines(ctx, tx, j, blamedLines); err != nil {
		return fmt.Errorf("send batch blamed lines: %w", err)
	}

	l.Info().Msgf("sent batch of %d blamed lines", len(blamedLines))

	if err := w.sendBatchLogMessages(ctx, []*syncLog{{
		Type:            SyncLogTypeInfo,
		RepoSyncQueueID: j.ID,
		Message:         fmt.Sprintf("inserted %d row(s) into git_blame", len(blamedLines)),
	}}); err != nil {
		return err
	}

	if err := w.db.WithTx(tx).SetSyncJobStatus(ctx, db.SetSyncJobStatusParams{Status: "DONE", ID: j.ID}); err != nil {
		return fmt.Errorf("update status done: %w", err)
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

func (w *worker) writeBlameObjectsToFile(objects []*lstree.Object, tmpPath string) ([]string, error) {
	var (
		// object file
		of *os.File
		// newly created file
		f           *os.File
		fileObjects []string
		err         error
	)

	buffer := new(bytes.Buffer)
	if err = json.NewEncoder(buffer).Encode(objects); err != nil {
		return fileObjects, err
	}

	if f, err = ioutil.TempFile(tmpPath, "blame-objects-*.text"); err != nil {
		return fileObjects, err
	}

	defer f.Close()

	// writing objects into newly created file
	if _, err = f.Write(buffer.Bytes()); err != nil {
		return fileObjects, err
	}
	// opening the newly created file
	if of, err = os.Open(f.Name()); err != nil {
		return fileObjects, err
	}

	defer of.Close()

	scanner := bufio.NewScanner(of)

	for scanner.Scan() {

		// scanning file to extract information
		fileText := strings.TrimSpace(scanner.Text())
		fileObjects = strings.Split(fileText, "}")
	}

	if err = scanner.Err(); err != nil {
		return fileObjects, err
	}

	return fileObjects, nil
}
