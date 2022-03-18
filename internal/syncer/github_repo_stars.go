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

const selectGitHubRepoStars = `SELECT * FROM github_stargazers(?)`

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
func (w *worker) sendBatchGitHubRepoStars(ctx context.Context, tx pgx.Tx, j *db.DequeueSyncJobRow, batch []*githubRepoStar) error {
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
		var repoID uuid.UUID
		var err error
		if repoID, err = uuid.FromString(j.RepoID.String()); err != nil {
			return err
		}
		input := []interface{}{repoID, s.Login, s.Email, s.Name, s.Bio, s.Company, s.AvatarUrl,
			s.CreatedAt, s.UpdatedAt, s.Twitter, s.Website, s.Location, s.StarredAt,
		}
		inputs = append(inputs, input)
	}

	if _, err := tx.CopyFrom(ctx, pgx.Identifier{"github_stargazers"}, cols, pgx.CopyFromRows(inputs)); err != nil {
		return err
	}
	return nil
}

func (w *worker) handleGitHubRepoStars(ctx context.Context, j *db.DequeueSyncJobRow) error {
	l := w.loggerForJob(j)

	// indicate that we're starting query execution
	if err := w.sendBatchLogMessages(ctx, []*syncLog{
		{Type: SyncLogTypeInfo, RepoSyncQueueID: j.ID, Message: "starting to execute GitHub repo stargazers lookup query"},
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

	stars := make([]*githubRepoStar, 0)
	if err := w.mergestat.SelectContext(ctx, &stars, selectGitHubRepoStars, fmt.Sprintf("%s/%s", repoOwner, repoName)); err != nil {
		return err
	}

	l.Info().Msgf("retrieved repo stargazers: %d", len(stars))

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

	if _, err := tx.Exec(ctx, "DELETE FROM github_stargazers WHERE repo_id = $1;", j.RepoID.String()); err != nil {
		return err
	}

	if err := w.sendBatchGitHubRepoStars(ctx, tx, j, stars); err != nil {
		return err
	}

	if err := w.db.SetSyncJobStatus(ctx, db.SetSyncJobStatusParams{Status: "DONE", ID: j.ID}); err != nil {
		return err
	}

	return tx.Commit(ctx)
}
