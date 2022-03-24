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

const selectGitHubRepoPRs = `SELECT * FROM github_repo_prs(?)`

type githubRepoPR struct {
	Additions           *int       `db:"additions"`
	AuthorLogin         *string    `db:"author_login"`
	AuthorAssociation   *string    `db:"author_association"`
	AuthorAvatarURL     *string    `db:"author_avatar_url"`
	AuthorName          *string    `db:"author_name"`
	BaseRefOID          *string    `db:"base_ref_oid"`
	BaseRefName         *string    `db:"base_ref_name"`
	BaseRepositoryName  *string    `db:"base_repository_name"`
	Body                *string    `db:"body"`
	ChangedFiles        *int       `db:"changed_files"`
	Closed              *bool      `db:"closed"`
	ClosedAt            *time.Time `db:"closed_at"`
	CommentCount        *int       `db:"comment_count"`
	CommitCount         *int       `db:"commit_count"`
	CreatedAt           *time.Time `db:"created_at"`
	CreatedViaEmail     *bool      `db:"created_via_email"`
	DatabaseID          *int       `db:"database_id"`
	Deletions           *int       `db:"deletions"`
	EditorLogin         *string    `db:"editor_login"`
	HeadRefName         *string    `db:"head_ref_name"`
	HeadRefOID          *string    `db:"head_ref_oid"`
	HeadRepositoryName  *string    `db:"head_repository_name"`
	IsDraft             *bool      `db:"is_draft"`
	LabelCount          *int       `db:"label_count"`
	LastEditedAt        *time.Time `db:"last_edited_at"`
	Locked              *bool      `db:"locked"`
	MaintainerCanModify *bool      `db:"maintainer_can_modify"`
	Mergeable           *string    `db:"mergeable"`
	Merged              *bool      `db:"merged"`
	MergedAt            *time.Time `db:"merged_at"`
	MergedBy            *string    `db:"merged_by"`
	Number              *int       `db:"number"`
	ParticipantCount    *int       `db:"participant_count"`
	PublishedAt         *time.Time `db:"published_at"`
	ReviewDecision      *string    `db:"review_decision"`
	State               *string    `db:"state"`
	Title               *string    `db:"title"`
	UpdatedAt           *time.Time `db:"updated_at"`
	URL                 *string    `db:"url"`
}

// sendBatchGitHubRepoPRs uses the pg COPY protocol to send a batch of GitHub repo PRs
func (w *worker) sendBatchGitHubRepoPRs(ctx context.Context, tx pgx.Tx, j *db.DequeueSyncJobRow, batch []*githubRepoPR) error {
	cols := []string{
		"repo_id",
		"additions",
		"author_login",
		"author_association",
		"author_avatar_url",
		"author_name",
		"base_ref_oid",
		"base_ref_name",
		"base_repository_name",
		"body",
		"changed_files",
		"closed",
		"closed_at",
		"comment_count",
		"commit_count",
		"created_at",
		"created_via_email",
		"database_id",
		"deletions",
		"editor_login",
		"head_ref_name",
		"head_ref_oid",
		"head_repository_name",
		"is_draft",
		"label_count",
		"last_edited_at",
		"locked",
		"maintainer_can_modify",
		"mergeable",
		"merged",
		"merged_at",
		"merged_by",
		"number",
		"participant_count",
		"published_at",
		"review_decision",
		"state",
		"title",
		"updated_at",
		"url",
	}

	inputs := make([][]interface{}, 0, len(batch))
	for _, pr := range batch {
		var repoID uuid.UUID
		var err error
		if repoID, err = uuid.FromString(j.RepoID.String()); err != nil {
			return err
		}
		input := []interface{}{repoID, pr.Additions, pr.AuthorLogin, pr.AuthorAssociation, pr.AuthorAvatarURL, pr.AuthorName, pr.BaseRefOID,
			pr.BaseRefName, pr.BaseRepositoryName, pr.Body, pr.ChangedFiles, pr.Closed, pr.ClosedAt, pr.CommentCount,
			pr.CommitCount, pr.CreatedAt, pr.CreatedViaEmail, pr.DatabaseID, pr.Deletions, pr.EditorLogin,
			pr.HeadRefName, pr.HeadRefOID, pr.HeadRepositoryName, pr.IsDraft, pr.LabelCount, pr.LastEditedAt, pr.Locked,
			pr.MaintainerCanModify, pr.Mergeable, pr.Merged, pr.MergedAt, pr.MergedBy, pr.Number, pr.ParticipantCount, pr.PublishedAt,
			pr.ReviewDecision, pr.State, pr.Title, pr.UpdatedAt, pr.URL,
		}

		inputs = append(inputs, input)
	}

	if _, err := tx.CopyFrom(ctx, pgx.Identifier{"github_pull_requests"}, cols, pgx.CopyFromRows(inputs)); err != nil {
		return err
	}
	return nil
}

func (w *worker) handleGitHubRepoPRs(ctx context.Context, j *db.DequeueSyncJobRow) error {
	l := w.loggerForJob(j)

	// indicate that we're starting query execution
	if err := w.sendBatchLogMessages(ctx, []*syncLog{
		{Type: SyncLogTypeInfo, RepoSyncQueueID: j.ID, Message: "starting to execute GitHub repo PRs lookup query"},
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

	prs := make([]*githubRepoPR, 0)
	if err := w.mergestat.SelectContext(ctx, &prs, selectGitHubRepoPRs, fmt.Sprintf("%s/%s", repoOwner, repoName)); err != nil {
		return err
	}

	l.Info().Msgf("retrieved repo PRs: %d", len(prs))

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

	if _, err := tx.Exec(ctx, "DELETE FROM github_pull_requests WHERE repo_id = $1;", j.RepoID.String()); err != nil {
		return err
	}

	if err := w.sendBatchGitHubRepoPRs(ctx, tx, j, prs); err != nil {
		return err
	}

	if err := w.db.WithTx(tx).SetSyncJobStatus(ctx, db.SetSyncJobStatusParams{Status: "DONE", ID: j.ID}); err != nil {
		return err
	}

	return tx.Commit(ctx)
}
