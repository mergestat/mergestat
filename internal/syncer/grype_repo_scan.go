package syncer

import (
	"context"
	"fmt"
	"os"
	"os/exec"

	"github.com/mergestat/mergestat/internal/db"
	"github.com/mergestat/mergestat/internal/helper"
)

func (w *worker) handleGrypeRepoScan(ctx context.Context, j *db.DequeueSyncJobRow) error {
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

	cmd := exec.CommandContext(ctx, "gitleaks", "detect", "-s", tmpPath, "-f", "json", "-r", "_mergestat_grype_scan_results.json", "--exit-code", "0")

	if err = cmd.Run(); err != nil {
		if exitErr, ok := err.(*exec.ExitError); ok {
			w.logger.Warn().AnErr("error", exitErr).Str("stderr", string(exitErr.Stderr)).Msgf("error running gitleaks scan")
		}
		return fmt.Errorf("running gitleaks scan: %w", err)
	}

	var output []byte
	if output, err = os.ReadFile("_mergestat_gitleaks_scan_results.json"); err != nil {
		return fmt.Errorf("reading gitleaks scan results: %w", err)
	}

	fmt.Printf("values %v", output)
	return nil
}
