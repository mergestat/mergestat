package syncer

import (
	"context"
	"database/sql"
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
	pullRequestsFullSyncDays = "90" // 90 days

	selectGitHubRepoPRs = `SELECT * FROM github_repo_prs(?) ORDER BY created_at DESC`
)

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
func (w *worker) sendBatchGitHubRepoPRs(ctx context.Context, tx pgx.Tx, repo uuid.UUID, batch []*githubRepoPR) error {
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
		input := []interface{}{
			repo,
			pr.Additions,
			pr.AuthorLogin,
			pr.AuthorAssociation,
			pr.AuthorAvatarURL,
			pr.AuthorName,
			pr.BaseRefOID,
			pr.BaseRefName,
			pr.BaseRepositoryName,
			pr.Body,
			pr.ChangedFiles,
			pr.Closed,
			pr.ClosedAt,
			pr.CommentCount,
			pr.CommitCount,
			pr.CreatedAt,
			pr.CreatedViaEmail,
			pr.DatabaseID,
			pr.Deletions,
			pr.EditorLogin,
			pr.HeadRefName,
			pr.HeadRefOID,
			pr.HeadRepositoryName,
			pr.IsDraft,
			pr.LabelCount,
			pr.LastEditedAt,
			pr.Locked,
			pr.MaintainerCanModify,
			pr.Mergeable,
			pr.Merged,
			pr.MergedAt,
			pr.MergedBy,
			pr.Number,
			pr.ParticipantCount,
			pr.PublishedAt,
			pr.ReviewDecision,
			pr.State,
			pr.Title,
			pr.UpdatedAt,
			pr.URL,
		}
		inputs = append(inputs, input)
	}

	if _, err := tx.CopyFrom(ctx, pgx.Identifier{"github_pull_requests"}, cols, pgx.CopyFromRows(inputs)); err != nil {
		return err
	}
	return nil
}

const selectLatestPRDatabaseId = "SELECT database_id FROM github_pull_requests WHERE repo_id = $1 ORDER BY created_at DESC LIMIT 1"

func (w *worker) queryLatestPRDatabaseId(ctx context.Context, repoID string) (int, error) {
	var databaseId sql.NullInt32
	row := w.pool.QueryRow(ctx, selectLatestPRDatabaseId, repoID)
	if err := row.Scan(&databaseId); err != nil {
		if errors.Is(err, pgx.ErrNoRows) {
			return 0, nil
		}
		return 0, err
	}
	return int(databaseId.Int32), nil
}

func (w *worker) handleGitHubRepoPRs(ctx context.Context, j *db.DequeueSyncJobRow) error {
	l := w.loggerForJob(j)

	if err := w.sendBatchLogMessages(ctx, []*syncLog{
		{
			Type:            SyncLogTypeInfo,
			RepoSyncQueueID: j.ID,
			Message:         "starting to execute GitHub repo PRs lookup query",
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

	// delete the recent rows within days for github_pull_requests in PG
	if _, err := tx.Exec(ctx, "DELETE FROM github_pull_requests WHERE repo_id = $1 and created_at > (now() - interval '"+pullRequestsFullSyncDays+" day');", j.RepoID.String()); err != nil {
		return fmt.Errorf("delete rows: %w", err)
	}

	databaseId, err := w.queryLatestPRDatabaseId(ctx, id.String())
	if err != nil {
		return fmt.Errorf("query latest pull request database id: %w", err)
	}

	var rows *sqlx.Rows
	if rows, err = w.mergestat.QueryxContext(ctx, selectGitHubRepoPRs, fmt.Sprintf("%s/%s", repoOwner, repoName)); err != nil {
		return fmt.Errorf("mergestat query: %w", err)
	}
	defer func() {
		if err := rows.Close(); err != nil {
			w.logger.Err(err).Msgf("close rows: %v", err)
		}
	}()

	batchSize := 500
	batch := make([]*githubRepoPR, 0, batchSize)
	totalCount := 0
	for rows.Next() {
		var r githubRepoPR
		if err := rows.StructScan(&r); err != nil {
			return fmt.Errorf("row scan: %w", err)
		}
		if len(batch) >= batchSize {
			if err := w.sendBatchGitHubRepoPRs(ctx, tx, id, batch); err != nil {
				return fmt.Errorf("batch insert prs: %w", err)
			}
			batch = make([]*githubRepoPR, 0, batchSize)
		} else {
			if *r.DatabaseID == databaseId {
				break
			}
			batch = append(batch, &r)
		}
		totalCount++
	}
	if len(batch) > 0 {
		if err := w.sendBatchGitHubRepoPRs(ctx, tx, id, batch); err != nil {
			return fmt.Errorf("batch insert prs: %w", err)
		}
	}

	l.Info().Msgf("retrieved repo prs: %d", totalCount)

	if err := w.db.WithTx(tx).SetSyncJobStatus(ctx, db.SetSyncJobStatusParams{Status: "DONE", ID: j.ID}); err != nil {
		return fmt.Errorf("sync job done: %w", err)
	}

	return tx.Commit(ctx)
}
