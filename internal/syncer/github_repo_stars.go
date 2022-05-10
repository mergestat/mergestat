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

const selectGitHubRepoStars = `SELECT * FROM github_stargazers(?) ORDER BY starred_at DESC`

type githubRepoStar struct {
	Login     *string    `db:"login"`
	Email     *string    `db:"email"`
	Name      *string    `db:"name"`
	Bio       *string    `db:"bio"`
	Company   *string    `db:"company"`
	AvatarUrl *string    `db:"avatar_url"`
	CreatedAt *time.Time `db:"created_at"`
	UpdatedAt *time.Time `db:"updated_at"`
	Twitter   *string    `db:"twitter"`
	Website   *string    `db:"website"`
	Location  *string    `db:"location"`
	StarredAt *time.Time `db:"starred_at"`
}

// sendBatchGitHubRepoStars uses the pg COPY protocol to send a batch of GitHub repo stars
func (w *worker) sendBatchGitHubRepoStars(ctx context.Context, tx pgx.Tx, repo uuid.UUID, batch []*githubRepoStar) error {
	cols := []string{
		"repo_id",
		"login",
		"email",
		"name",
		"bio",
		"company",
		"avatar_url",
		"created_at",
		"updated_at",
		"twitter",
		"website",
		"location",
		"starred_at",
	}

	inputs := make([][]interface{}, 0, len(batch))
	for _, s := range batch {
		input := []interface{}{
			repo,
			s.Login,
			s.Email,
			s.Name,
			s.Bio,
			s.Company,
			s.AvatarUrl,
			s.CreatedAt,
			s.UpdatedAt,
			s.Twitter,
			s.Website,
			s.Location,
			s.StarredAt,
		}
		inputs = append(inputs, input)
	}

	if _, err := tx.CopyFrom(ctx, pgx.Identifier{"github_stargazers"}, cols, pgx.CopyFromRows(inputs)); err != nil {
		return fmt.Errorf("tx copy from: %w", err)
	}
	return nil
}

const selectLatestStarLogin = "SELECT login FROM github_stargazers WHERE repo_id = $1 ORDER BY starred_at DESC LIMIT 1"

// queryLatestStarLogin retrieves the login of the latest stargazer for a repo
func (w *worker) queryLatestStarLogin(ctx context.Context, repoID string) (string, error) {
	var login sql.NullString
	row := w.pool.QueryRow(ctx, selectLatestStarLogin, repoID)
	if err := row.Scan(&login); err != nil {
		if errors.Is(err, pgx.ErrNoRows) {
			return "", nil
		}
		return "", err
	}
	return login.String, nil
}

func (w *worker) handleGitHubRepoStars(ctx context.Context, j *db.DequeueSyncJobRow) error {
	l := w.loggerForJob(j)

	if err := w.sendBatchLogMessages(ctx, []*syncLog{
		{
			Type:            SyncLogTypeInfo,
			RepoSyncQueueID: j.ID,
			Message:         "starting to execute GitHub repo stargazers lookup query",
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

	latestStarLogin, err := w.queryLatestStarLogin(ctx, id.String())
	if err != nil {
		return fmt.Errorf("query latest star login: %w", err)
	}

	var rows *sqlx.Rows
	if rows, err = w.mergestat.QueryxContext(ctx, selectGitHubRepoStars, fmt.Sprintf("%s/%s", repoOwner, repoName)); err != nil {
		return fmt.Errorf("mergestat query: %w", err)
	}
	defer func() {
		if err := rows.Close(); err != nil {
			w.logger.Err(err).Msgf("close rows: %v", err)
		}
	}()

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

	batchSize := 500
	batch := make([]*githubRepoStar, 0, batchSize)
	totalCount := 0
	for rows.Next() {
		var r githubRepoStar
		if err := rows.StructScan(&r); err != nil {
			return fmt.Errorf("row scan: %w", err)
		}
		if len(batch) >= batchSize {
			if err := w.sendBatchGitHubRepoStars(ctx, tx, id, batch); err != nil {
				return fmt.Errorf("batch insert stars: %w", err)
			}
			batch = make([]*githubRepoStar, 0, batchSize)
		} else {
			if *r.Login == latestStarLogin {
				break
			}
			batch = append(batch, &r)
		}
		totalCount++
	}
	if len(batch) > 0 {
		if err := w.sendBatchGitHubRepoStars(ctx, tx, id, batch); err != nil {
			return fmt.Errorf("batch insert stars: %w", err)
		}
	}

	l.Info().Msgf("retrieved new repo stargazers: %d", totalCount)

	if err := w.db.WithTx(tx).SetSyncJobStatus(ctx, db.SetSyncJobStatusParams{Status: "DONE", ID: j.ID}); err != nil {
		return fmt.Errorf("sync job done: %w", err)
	}

	return tx.Commit(ctx)
}
