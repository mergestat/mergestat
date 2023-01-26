package syncer

import (
	"context"
	"errors"
	"fmt"
	"net/url"
	"strings"
	"time"

	"github.com/jackc/pgx/v4"
	"github.com/mergestat/mergestat/internal/db"
	uuid "github.com/satori/go.uuid"
)

const (
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
	Labels              []byte     `db:"labels"`
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
		"labels",
	}

	inputs := make([][]interface{}, 0, len(batch))

	for _, issue := range batch {

		if issue.Labels == nil {
			issue.Labels = []byte("[]")
		}

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
			issue.Labels,
		}
		inputs = append(inputs, input)
	}

	if _, err := tx.CopyFrom(ctx, pgx.Identifier{"github_issues"}, cols, pgx.CopyFromRows(inputs)); err != nil {
		return err
	}
	return nil
}

func (w *worker) handleGitHubRepoIssues(ctx context.Context, j *db.DequeueSyncJobRow) error {
	var ghToken string
	var err error
	l := w.loggerForJob(j)

	// indicate that we're starting query execution
	if err := w.sendBatchLogMessages(ctx, []*syncLog{{Type: SyncLogTypeInfo, RepoSyncQueueID: j.ID,
		Message: fmt.Sprintf(LogFormatStartingSync, j.SyncType, j.Repo),
	}}); err != nil {
		return fmt.Errorf("send batch log messages: %w", err)
	}

	if ghToken, err = w.fetchGitHubTokenFromDB(ctx); err != nil {
		return err
	}

	if len(ghToken) <= 0 {
		return errGitHubTokenRequired
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

	issues := make([]*githubRepoIssue, 0)
	if err = w.mergestat.SelectContext(ctx, &issues, selectGitHubRepoIssues, fmt.Sprintf("%s/%s", repoOwner, repoName)); err != nil {
		return fmt.Errorf("mergestat query: %w", err)
	}

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

	r, err := tx.Exec(ctx, "DELETE FROM github_issues WHERE repo_id = $1;", j.RepoID.String())
	if err != nil {
		return fmt.Errorf("delete rows: %w", err)
	}

	if err := w.sendBatchLogMessages(ctx, []*syncLog{{
		Type:            SyncLogTypeInfo,
		RepoSyncQueueID: j.ID,
		Message:         fmt.Sprintf("removed %d row(s) from github_issues", r.RowsAffected()),
	}}); err != nil {
		return err
	}

	if err := w.sendBatchGitHubRepoIssues(ctx, tx, id, issues); err != nil {
		return fmt.Errorf("insert issues: %w", err)
	}

	l.Info().Msgf("inserted repo issues: %d", len(issues))

	if err := w.sendBatchLogMessages(ctx, []*syncLog{{
		Type:            SyncLogTypeInfo,
		RepoSyncQueueID: j.ID,
		Message:         fmt.Sprintf("inserted %d row(s) into github_issues", len(issues)),
	}}); err != nil {
		return err
	}

	if err := w.db.WithTx(tx).SetSyncJobStatus(ctx, db.SetSyncJobStatusParams{Status: "DONE", ID: j.ID}); err != nil {
		return fmt.Errorf("sync job done: %w", err)
	}

	// indicate that we're finishing query execution
	if err := w.sendBatchLogMessages(ctx, []*syncLog{{Type: SyncLogTypeInfo, RepoSyncQueueID: j.ID,
		Message: fmt.Sprintf(LogFormatFinishingSync, j.SyncType, j.Repo),
	}}); err != nil {
		return fmt.Errorf("send batch log messages: %w", err)
	}

	return tx.Commit(ctx)
}
