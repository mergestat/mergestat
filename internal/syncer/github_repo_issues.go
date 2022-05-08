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
	issuesFullSyncDays = 90 // 90 days

	selectGitHubRepoIssues = `SELECT * FROM github_repo_issues(?) ORDER BY created_at DESC`
)

type githubRepoIssue struct {
	AuthorLogin         *string    `db:"author_login"`
	Body                *string    `db:"body"`
	Closed              *bool      `db:"closed"`
	ClosedAt            *time.Time `db:"closed_at"`
	CommentCount        *int       `db:"comment_count"`
	CreatedAt           *time.Time `db:"created_at"`
	CreatedViaEmail     *bool      `db:"created_via_email"`
	DatabaseID          *int       `db:"database_id"`
	EditorLogin         *string    `db:"editor_login"`
	IncludesCreatedEdit *bool      `db:"includes_created_edit"`
	LabelCount          *int       `db:"label_count"`
	LastEditedAt        *time.Time `db:"last_edited_at"`
	Locked              *bool      `db:"locked"`
	MilestoneCount      *int       `db:"milestone_count"`
	Number              *int       `db:"number"`
	ParticipantCount    *int       `db:"participant_count"`
	PublishedAt         *time.Time `db:"published_at"`
	ReactionCount       *int       `db:"reaction_count"`
	State               *string    `db:"state"`
	Title               *string    `db:"title"`
	UpdatedAt           *time.Time `db:"updated_at"`
	URL                 *string    `db:"url"`
}

// sendBatchGitHubRepoIssues uses the pg COPY protocol to send a batch of GitHub repo issues
func (w *worker) sendBatchGitHubRepoIssues(ctx context.Context, tx pgx.Tx, repo uuid.UUID, batch []*githubRepoIssue) error {
	cols := []string{
		"repo_id",
		"author_login",
		"body",
		"closed",
		"closed_at",
		"comment_count",
		"created_at",
		"created_via_email",
		"database_id",
		"editor_login",
		"includes_created_edit",
		"label_count",
		"last_edited_at",
		"locked",
		"milestone_count",
		"number",
		"participant_count",
		"published_at",
		"reaction_count",
		"state",
		"title",
		"updated_at",
		"url",
	}

	inputs := make([][]interface{}, 0, len(batch))
	for _, issue := range batch {
		input := []interface{}{
			repo,
			issue.AuthorLogin,
			issue.Body,
			issue.Closed,
			issue.ClosedAt,
			issue.CommentCount,
			issue.CreatedAt,
			issue.CreatedViaEmail,
			issue.DatabaseID,
			issue.EditorLogin,
			issue.IncludesCreatedEdit,
			issue.LabelCount,
			issue.LastEditedAt,
			issue.Locked,
			issue.MilestoneCount,
			issue.Number,
			issue.ParticipantCount,
			issue.PublishedAt,
			issue.ReactionCount,
			issue.State,
			issue.Title,
			issue.UpdatedAt,
			issue.URL,
		}
		inputs = append(inputs, input)
	}

	if _, err := tx.CopyFrom(ctx, pgx.Identifier{"github_issues"}, cols, pgx.CopyFromRows(inputs)); err != nil {
		return err
	}
	return nil
}

func (w *worker) handleGitHubRepoIssues(ctx context.Context, j *db.DequeueSyncJobRow) error {
	l := w.loggerForJob(j)

	if err := w.sendBatchLogMessages(ctx, []*syncLog{
		{
			Type:            SyncLogTypeInfo,
			RepoSyncQueueID: j.ID,
			Message:         "starting to execute GitHub repo issues lookup query",
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
		return fmt.Errorf("url parse: %w", err)
	}
	components := strings.Split(u.Path, "/")
	repoOwner := components[1]
	repoName := components[2]

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

	// delete the recent rows within days for github_issues in PG
	sql := fmt.Sprintf("DELETE FROM github_issues WHERE repo_id = $1 and created_at > (now() - interval '%d day');", issuesFullSyncDays)
	if res, err := tx.Exec(ctx, sql, j.RepoID.String()); err != nil {
		return fmt.Errorf("delete rows: %w", err)
	} else {
		l.Info().Msgf("deleted rows: %d", res.RowsAffected())
	}

	sql = "SELECT database_id FROM github_issues WHERE repo_id = $1 ORDER BY created_at DESC LIMIT 1"
	var databaseId int
	if err := tx.QueryRow(ctx, sql, id.String()).Scan(&databaseId); err != nil {
		if !errors.Is(err, pgx.ErrNoRows) {
			return fmt.Errorf("query row: %w", err)
		}
	}

	var rows *sqlx.Rows
	if rows, err = w.mergestat.QueryxContext(ctx, selectGitHubRepoIssues, fmt.Sprintf("%s/%s", repoOwner, repoName)); err != nil {
		return fmt.Errorf("mergestat query: %w", err)
	}
	defer func() {
		if err := rows.Close(); err != nil {
			w.logger.Err(err).Msgf("close rows: %v", err)
		}
	}()

	batchSize := 500
	batch := make([]*githubRepoIssue, 0, batchSize)
	totalCount := 0
	for rows.Next() {
		var r githubRepoIssue
		if err := rows.StructScan(&r); err != nil {
			return fmt.Errorf("row scan: %w", err)
		}
		if len(batch) >= batchSize {
			if err := w.sendBatchGitHubRepoIssues(ctx, tx, id, batch); err != nil {
				return fmt.Errorf("batch insert issues: %w", err)
			}
			batch = make([]*githubRepoIssue, 0, batchSize)
		} else {
			if *r.DatabaseID == databaseId {
				break
			}
			batch = append(batch, &r)
		}
		totalCount++
	}
	if len(batch) > 0 {
		if err := w.sendBatchGitHubRepoIssues(ctx, tx, id, batch); err != nil {
			return fmt.Errorf("batch insert issues: %w", err)
		}
	}

	l.Info().Msgf("retrieved repo issues: %d", totalCount)

	if err := w.db.WithTx(tx).SetSyncJobStatus(ctx, db.SetSyncJobStatusParams{Status: "DONE", ID: j.ID}); err != nil {
		return fmt.Errorf("sync job done: %w", err)
	}

	return tx.Commit(ctx)
}
