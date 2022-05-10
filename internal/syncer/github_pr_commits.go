package syncer

import (
	"context"
	"errors"
	"fmt"
	"net/url"
	"strings"
	"time"

	"github.com/jackc/pgx/v4"
	"github.com/jmoiron/sqlx"
	"github.com/mergestat/fuse/internal/db"
	uuid "github.com/satori/go.uuid"
)

const (
	prCommitsFullSyncDays = 90 // 90 days

	selectGitHubPRCommits = `SELECT github_prs.number AS pr_number, github_pr_commits.* FROM github_prs(?), github_pr_commits(?, github_prs.number) ORDER BY github_pr_commits.committer_when DESC`
)

type githubPRCommit struct {
	PRNumber       *int       `db:"pr_number"`
	Hash           *string    `db:"hash"`
	Message        *string    `db:"message"`
	AuthorName     *string    `db:"author_name"`
	AuthorEmail    *string    `db:"author_email"`
	AuthorWhen     *time.Time `db:"author_when"`
	CommitterName  *string    `db:"committer_name"`
	CommitterEmail *string    `db:"committer_email"`
	CommitterWhen  *time.Time `db:"committer_when"`
	Additions      *int       `db:"additions"`
	Deletions      *int       `db:"deletions"`
	ChangedFiles   *int       `db:"changed_files"`
	URL            *string    `db:"url"`
}

// sendBatchGitHubPRCommits uses the pg COPY protocol to send a batch of GitHub pr commits
func (w *worker) sendBatchGitHubPRCommits(ctx context.Context, tx pgx.Tx, repo uuid.UUID, batch []*githubPRCommit) error {
	cols := []string{
		"repo_id",
		"pr_number",
		"hash",
		"message",
		"author_name",
		"author_email",
		"author_when",
		"committer_name",
		"committer_email",
		"committer_when",
		"additions",
		"deletions",
		"changed_files",
		"url",
	}

	inputs := make([][]interface{}, 0, len(batch))
	for _, commit := range batch {
		input := []interface{}{
			repo,
			commit.PRNumber,
			commit.Hash,
			commit.Message,
			commit.AuthorName,
			commit.AuthorEmail,
			commit.AuthorWhen,
			commit.CommitterName,
			commit.CommitterEmail,
			commit.CommitterWhen,
			commit.Additions,
			commit.Deletions,
			commit.ChangedFiles,
			commit.URL,
		}
		inputs = append(inputs, input)
	}

	if _, err := tx.CopyFrom(ctx, pgx.Identifier{"github_pull_request_commits"}, cols, pgx.CopyFromRows(inputs)); err != nil {
		return fmt.Errorf("tx copy from: %w", err)
	}
	return nil
}

func (w *worker) handleGitHubPRCommits(ctx context.Context, j *db.DequeueSyncJobRow) error {
	l := w.loggerForJob(j)

	if err := w.sendBatchLogMessages(ctx, []*syncLog{
		{
			Type:            SyncLogTypeInfo,
			RepoSyncQueueID: j.ID,
			Message:         "starting to execute GitHub PR commits lookup query",
		},
	}); err != nil {
		return fmt.Errorf("log messages: %w", err)
	}

	id, err := uuid.FromString(j.RepoID.String())
	if err != nil {
		return fmt.Errorf("parse uuid: %w", err)
	}
	u, err := url.Parse(j.Repo)
	if err != nil {
		return fmt.Errorf("url parse: %v", err)
	}
	components := strings.Split(u.Path, "/")
	repoOwner := components[1]
	repoName := components[2]
	repoFullName := fmt.Sprintf("%s/%s", repoOwner, repoName)

	var tx pgx.Tx
	if tx, err = w.pool.BeginTx(ctx, pgx.TxOptions{}); err != nil {
		return fmt.Errorf("begin tx: %w", err)
	}
	defer func() {
		if err := tx.Rollback(ctx); err != nil {
			if !errors.Is(err, pgx.ErrTxClosed) {
				w.logger.Err(err).Msgf("rollback transaction: %v", err)
			}
		}
	}()

	// delete the recent rows within days for github_pull_request_commits in PG
	sql := fmt.Sprintf("DELETE FROM github_pull_request_commits WHERE repo_id = $1 and committer_when > (now() - interval '%d day');", prCommitsFullSyncDays)
	if res, err := tx.Exec(ctx, sql, j.RepoID.String()); err != nil {
		return fmt.Errorf("delete rows: %w", err)
	} else {
		l.Info().Msgf("deleted rows: %d", res.RowsAffected())
	}

	var prNumber int
	var hash string
	sql = "SELECT pr_number, hash FROM github_pull_request_commits WHERE repo_id = $1 ORDER BY committer_when DESC LIMIT 1"
	if err := tx.QueryRow(ctx, sql, id.String()).Scan(&prNumber, &hash); err != nil {
		if !errors.Is(err, pgx.ErrNoRows) {
			return fmt.Errorf("query row: %w", err)
		}
	}

	var rows *sqlx.Rows
	if rows, err = w.mergestat.QueryxContext(ctx, selectGitHubPRCommits, repoFullName, repoFullName); err != nil {
		return fmt.Errorf("mergestat query: %w", err)
	}
	defer func() {
		if err := rows.Close(); err != nil {
			w.logger.Err(err).Msgf("close rows: %v", err)
		}
	}()

	batchSize := 500
	batch := make([]*githubPRCommit, 0, batchSize)
	totalCount := 0
	for rows.Next() {
		var r githubPRCommit
		if err := rows.StructScan(&r); err != nil {
			return fmt.Errorf("row scan: %w", err)
		}
		if len(batch) >= batchSize {
			if err := w.sendBatchGitHubPRCommits(ctx, tx, id, batch); err != nil {
				return fmt.Errorf("batch insert pr commits: %w", err)
			}
			batch = make([]*githubPRCommit, 0, batchSize)
		} else {
			if *r.PRNumber == prNumber && *r.Hash == hash {
				break
			}
			batch = append(batch, &r)
		}
		totalCount++
	}
	if len(batch) > 0 {
		if err := w.sendBatchGitHubPRCommits(ctx, tx, id, batch); err != nil {
			return fmt.Errorf("batch insert pr commits: %w", err)
		}
	}

	l.Info().Msgf("retrieved PR commits: %d", totalCount)

	if err := w.db.WithTx(tx).SetSyncJobStatus(ctx, db.SetSyncJobStatusParams{Status: "DONE", ID: j.ID}); err != nil {
		return fmt.Errorf("sync job done: %w", err)
	}

	return tx.Commit(ctx)
}
