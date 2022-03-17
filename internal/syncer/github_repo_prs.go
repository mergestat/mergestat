package syncer

import (
	"context"
	"database/sql"
	"errors"
	"fmt"
	"net/url"
	"strings"

	"github.com/jackc/pgx/v4"
	"github.com/mergestat/fuse/internal/db"
	uuid "github.com/satori/go.uuid"
)

const selectGitHubRepoPRs = `SELECT * FROM github_repo_prs(?)`

type githubRepoPR struct {
	Additions           sql.NullInt64  `db:"additions"`
	AuthorLogin         sql.NullString `db:"author_login"`
	AuthorAssociation   sql.NullString `db:"author_association"`
	AuthorAvatarURL     sql.NullString `db:"author_avatar_url"`
	AuthorName          sql.NullString `db:"author_name"`
	BaseRefOID          sql.NullString `db:"base_ref_oid"`
	BaseRefName         sql.NullString `db:"base_ref_name"`
	BaseRepositoryName  sql.NullString `db:"base_repository_name"`
	Body                sql.NullString `db:"body"`
	ChangedFiles        sql.NullInt64  `db:"changed_files"`
	Closed              sql.NullBool   `db:"closed"`
	ClosedAt            sql.NullTime   `db:"closed_at"`
	CommentCount        sql.NullInt64  `db:"comment_count"`
	CommitCount         sql.NullInt64  `db:"commit_count"`
	CreatedAt           sql.NullTime   `db:"created_at"`
	CreatedViaEmail     sql.NullBool   `db:"created_via_email"`
	DatabaseID          sql.NullInt64  `db:"database_id"`
	Deletions           sql.NullInt64  `db:"deletions"`
	EditorLogin         sql.NullString `db:"editor_login"`
	HeadRefName         sql.NullString `db:"head_ref_name"`
	HeadRefOID          sql.NullString `db:"head_ref_oid"`
	HeadRepositoryName  sql.NullString `db:"head_repository_name"`
	IsDraft             sql.NullBool   `db:"is_draft"`
	LabelCount          sql.NullInt64  `db:"label_count"`
	LastEditedAt        sql.NullTime   `db:"last_edited_at"`
	Locked              sql.NullBool   `db:"locked"`
	MaintainerCanModify sql.NullBool   `db:"maintainer_can_modify"`
	Mergeable           sql.NullString `db:"mergeable"`
	Merged              sql.NullBool   `db:"merged"`
	MergedAt            sql.NullTime   `db:"merged_at"`
	MergedBy            sql.NullString `db:"merged_by"`
	Number              sql.NullInt64  `db:"number"`
	ParticipantCount    sql.NullInt64  `db:"participant_count"`
	PublishedAt         sql.NullTime   `db:"published_at"`
	ReviewDecision      sql.NullString `db:"review_decision"`
	State               sql.NullString `db:"state"`
	Title               sql.NullString `db:"title"`
	UpdatedAt           sql.NullTime   `db:"updated_at"`
	URL                 sql.NullString `db:"url"`
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
		input := []interface{}{repoID, pr.Additions.Int64, pr.AuthorLogin, pr.AuthorAssociation.String, pr.AuthorAvatarURL.String, pr.AuthorName.String, pr.BaseRefOID.String,
			pr.BaseRefName.String, pr.BaseRepositoryName.String, pr.Body.String, pr.ChangedFiles.Int64, pr.Closed.Bool, pr.ClosedAt.Time, pr.CommentCount.Int64,
			pr.CommitCount.Int64, pr.CreatedAt.Time, pr.CreatedViaEmail.Bool, pr.DatabaseID.Int64, pr.Deletions.Int64, pr.EditorLogin.String,
			pr.HeadRefName.String, pr.HeadRefOID.String, pr.HeadRepositoryName.String, pr.IsDraft.Bool, pr.LabelCount.Int64, pr.LastEditedAt.Time, pr.Locked.Bool,
			pr.MaintainerCanModify.Bool, pr.Mergeable.String, pr.Merged.Bool, pr.MergedAt.Time, pr.MergedBy.String, pr.Number.Int64, pr.ParticipantCount.Int64, pr.PublishedAt.Time,
			pr.ReviewDecision.String, pr.State.String, pr.Title.String, pr.UpdatedAt.Time, pr.URL,
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

	if _, err := tx.Exec(ctx, "DELETE FROM github_pull_requests WHERE repo_id = $1;", j.RepoID.String()); err != nil {
		return err
	}

	if err := w.sendBatchGitHubRepoPRs(ctx, tx, j, prs); err != nil {
		return err
	}

	if err := w.db.SetSyncJobStatus(ctx, db.SetSyncJobStatusParams{Status: "DONE", ID: j.ID}); err != nil {
		return err
	}

	return tx.Commit(ctx)
}
