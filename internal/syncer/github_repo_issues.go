package syncer

import (
	"context"
	"errors"
	"fmt"
	"net/url"
	"strings"
	"time"

	"github.com/jackc/pgx/v4"
	"github.com/mergestat/fuse/internal/db"
	uuid "github.com/satori/go.uuid"
)

const selectGitHubRepoIssues = `SELECT * FROM github_repo_issues(?)`

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
func (w *worker) sendBatchGitHubRepoIssues(ctx context.Context, tx pgx.Tx, j *db.DequeueSyncJobRow, batch []*githubRepoIssue) error {
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
	for _, is := range batch {
		var repoID uuid.UUID
		var err error
		if repoID, err = uuid.FromString(j.RepoID.String()); err != nil {
			return err
		}

		input := []interface{}{repoID, is.AuthorLogin, is.Body, is.Closed, is.ClosedAt, is.CommentCount, is.CreatedAt, is.CreatedViaEmail, is.DatabaseID,
			is.EditorLogin, is.IncludesCreatedEdit, is.LabelCount, is.LastEditedAt, is.Locked, is.MilestoneCount, is.Number, is.ParticipantCount,
			is.PublishedAt, is.ReactionCount, is.State, is.Title, is.UpdatedAt, is.URL,
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

	// indicate that we're starting query execution
	if err := w.sendBatchLogMessages(ctx, []*syncLog{
		{Type: SyncLogTypeInfo, RepoSyncQueueID: j.ID, Message: "starting to execute GitHub repo issues lookup query"},
	}); err != nil {
		return err
	}

	var u *url.URL
	var err error
	if u, err = url.Parse(j.Repo); err != nil {
		return fmt.Errorf("could not parse repo: %v", err)
	}

	components := strings.Split(u.Path, "/")
	repoOwner := components[1]
	repoName := components[2]

	issues := make([]*githubRepoIssue, 0)
	if err := w.mergestat.SelectContext(ctx, &issues, selectGitHubRepoIssues, fmt.Sprintf("%s/%s", repoOwner, repoName)); err != nil {
		return err
	}

	l.Info().Msgf("retrieved repo issues: %d", len(issues))

	var tx pgx.Tx
	if tx, err = w.pool.BeginTx(ctx, pgx.TxOptions{IsoLevel: pgx.ReadCommitted}); err != nil {
		return err
	}
	defer func() {
		if err := tx.Rollback(ctx); err != nil {
			if !errors.Is(err, pgx.ErrTxClosed) {
				w.logger.Err(err).Msgf("could not rollback transaction")
			}
		}
	}()

	if _, err := tx.Exec(ctx, "DELETE FROM github_issues WHERE repo_id = $1;", j.RepoID.String()); err != nil {
		return err
	}

	if err := w.sendBatchGitHubRepoIssues(ctx, tx, j, issues); err != nil {
		return err
	}

	if err := w.db.WithTx(tx).SetSyncJobStatus(ctx, db.SetSyncJobStatusParams{Status: "DONE", ID: j.ID}); err != nil {
		return err
	}

	return tx.Commit(ctx)
}
