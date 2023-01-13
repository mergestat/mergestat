package syncer

import (
	"bytes"
	"context"
	"encoding/json"
	"errors"
	"fmt"
	"os"
	"os/exec"
	"strings"

	"github.com/jackc/pgx/v4"
	"github.com/mergestat/mergestat/internal/db"
	"github.com/mergestat/mergestat/internal/helper"
)

// gosecIssue represents an issue identified by gosec.
// The struct is documented here: https://pkg.go.dev/github.com/securego/gosec/v2#Issue
type gosecIssue struct {
	Severity   string `json:"severity"`   // issue severity (how problematic it is)
	Confidence string `json:"confidence"` // issue confidence (how sure we are we found it)
	Cwe        struct {
		ID string `json:"id"`
	} `json:"cwe"` // Cwe associated with RuleID
	RuleID string `json:"rule_id"` // Human-readable explanation
	What   string `json:"details"` // Human-readable explanation
	File   string `json:"file"`    // File name we found it in
	Code   string `json:"code"`    // Impacted code line
	Line   string `json:"line"`    // Line number in file
	Col    string `json:"column"`  // Column number in line
	NoSec  bool   `json:"nosec"`   // true if the issue is nosec
}

// handleGosecRepoScan executes `gosec -q -fmt json {git-repo}` for a repo
// and inserts the output JSON into the DB
func (w *worker) handleGosecRepoScan(ctx context.Context, j *db.DequeueSyncJobRow) error {
	l := w.loggerForJob(j)

	tmpPath, cleanup, err := helper.CreateTempDir(os.Getenv("GIT_CLONE_PATH"), "mergestat-repo-")
	if err != nil {
		return fmt.Errorf("temp dir: %w", err)
	}
	defer func() {
		if err := cleanup(); err != nil {
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

	// indicate that we're starting a gitleaks scan
	if err := w.sendBatchLogMessages(ctx, []*syncLog{{Type: SyncLogTypeInfo, RepoSyncQueueID: j.ID,
		Message: fmt.Sprintf(LogFormatStartingSync, j.SyncType, j.Repo),
	}}); err != nil {
		return fmt.Errorf("send batch log messages: %w", err)
	}

	var stdout, stderr bytes.Buffer
	cmd := exec.CommandContext(ctx, "gosec", "-no-fail", "-fmt", "json", "./...")
	cmd.Dir = tmpPath
	cmd.Stdout = &stdout
	cmd.Stderr = &stderr

	if err = cmd.Run(); err != nil {
		if exitErr, ok := err.(*exec.ExitError); ok {
			w.logger.Warn().AnErr("error", exitErr).Str("stderr", stderr.String()).Msgf("error running gosec scan")
		}
		return fmt.Errorf("running gosec scan: %w", err)
	}

	var resp struct{ Issues []*gosecIssue }
	if err = json.NewDecoder(&stdout).Decode(&resp); err != nil {
		return fmt.Errorf("failed to parse gosec output: %w", err)
	}

	// trim filepath in gosec response and drop the tmpPath prefix
	for _, issue := range resp.Issues {
		issue.File = strings.TrimPrefix(issue.File, tmpPath)
	}

	stdout.Reset() // reuse buffer
	if err = json.NewEncoder(&stdout).Encode(resp.Issues); err != nil {
		return fmt.Errorf("failed to encode gosec issues: %w", err)
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

	r, err := tx.Exec(ctx, "DELETE FROM public.gosec_repo_scans WHERE repo_id = $1;", j.RepoID.String())
	if err != nil {
		return fmt.Errorf("exec delete: %w", err)
	}

	if err := w.sendBatchLogMessages(ctx, []*syncLog{{
		Type:            SyncLogTypeInfo,
		RepoSyncQueueID: j.ID,
		Message:         fmt.Sprintf("removed %d row(s) from gosec_repo_scans", r.RowsAffected()),
	}}); err != nil {
		return err
	}

	if _, err := tx.Exec(ctx, "INSERT INTO public.gosec_repo_scans (repo_id, issues) VALUES ($1, $2)", j.RepoID, stdout.Bytes()); err != nil {
		return fmt.Errorf("inserting gosec results: %w", err)
	}

	l.Info().Msg("inserted gosec scan results")

	if err := w.sendBatchLogMessages(ctx, []*syncLog{{
		Type:            SyncLogTypeInfo,
		RepoSyncQueueID: j.ID,
		Message:         "inserted gosec scan results into gosec_repo_scans",
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

	return tx.Commit(ctx)
}
