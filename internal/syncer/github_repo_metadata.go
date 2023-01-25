package syncer

import (
	"context"
	"database/sql"
	"encoding/json"
	"errors"
	"fmt"
	"net/url"
	"strings"
	"time"

	"github.com/jackc/pgx/v4"
	"github.com/mergestat/mergestat/internal/db"
)

const selectSingleGitHubRepo = `SELECT github_repo(?) AS repo`

type githubRepoInfo struct {
	CreatedAt         *time.Time `json:"createdAt"`
	DefaultBranchName *string    `json:"defaultBranchName"`
	Description       *string    `json:"description"`
	DiskUsage         *int       `json:"diskUsage"`
	ForkCount         *int       `json:"forkCount"`
	HomepageUrl       *string    `json:"homepageURL"`
	IsArchived        *bool      `json:"isArchived"`
	IsDisabled        *bool      `json:"isDisabled"`
	IsMirror          *bool      `json:"isMirror"`
	IsPrivate         *bool      `json:"isPrivate"`
	TotalIssuesCount  *int       `json:"totalIssuesCount"`
	LatestRelease     *struct {
		AuthorLogin *string    `json:"authorLogin"`
		CreatedAt   *time.Time `json:"createdAt"`
		Name        *string    `json:"name"`
		PublishedAt *time.Time `json:"publishedAt"`
	} `json:"latestRelease"`
	License *struct {
		Key      *string `json:"key"`
		Name     *string `json:"name"`
		Nickname *string `json:"nickname"`
	} `json:"license"`
	Name              *string    `json:"name"`
	OpenGraphImageUrl *string    `json:"openGraphImageURL"`
	PrimaryLanguage   *string    `json:"primaryLanguage"`
	PushedAt          *time.Time `json:"pushedAt"`
	ReleasesCount     *int       `json:"releasesCount"`
	StargazersCount   *int       `json:"stargazersCount"`
	UpdatedAt         *time.Time `json:"updatedAt"`
	WatchersCount     *int       `json:"watchersCount"`
}

func (w *worker) handleGitHubRepoMetadata(ctx context.Context, j *db.DequeueSyncJobRow) error {
	l := w.loggerForJob(j)

	// indicate that we're starting query execution
	if err := w.sendBatchLogMessages(ctx, []*syncLog{{Type: SyncLogTypeInfo, RepoSyncQueueID: j.ID,
		Message: fmt.Sprintf(LogFormatStartingSync, j.SyncType, j.Repo),
	}}); err != nil {
		return fmt.Errorf("send batch log messages: %w", err)
	}

	var u *url.URL
	var err error
	if u, err = url.Parse(j.Repo); err != nil {
		return fmt.Errorf("could not parse repo: %v", err)
	}

	components := strings.Split(u.Path, "/")
	repoOwner := components[1]
	repoName := components[2]

	// execute mergestat query
	var repoInfoJSON []byte
	if err := w.mergestat.QueryRowxContext(ctx, selectSingleGitHubRepo, fmt.Sprintf("%s/%s", repoOwner, repoName)).Scan(&repoInfoJSON); err != nil {
		return err
	}

	var repoInfo githubRepoInfo
	if err := json.Unmarshal(repoInfoJSON, &repoInfo); err != nil {
		return err
	}

	l.Info().Msgf("retrieved repo info as JSON")

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

	// first, delete the prior repo info
	if err := w.db.WithTx(tx).DeleteGitHubRepoInfo(ctx, j.RepoID); err != nil {
		return err
	}

	insertParams := db.InsertGitHubRepoInfoParams{
		RepoID: j.RepoID,
		Owner:  repoOwner,
		Name:   repoName,
	}

	// TODO(patrickdevivo) the following is a nightmare...there's gotta be a way to avoid
	// typing this all out?
	if repoInfo.CreatedAt != nil {
		insertParams.CreatedAt = sql.NullTime{Time: *repoInfo.CreatedAt, Valid: true}
	}

	if repoInfo.DefaultBranchName != nil {
		insertParams.DefaultBranchName = sql.NullString{String: *repoInfo.DefaultBranchName, Valid: true}
	}

	if repoInfo.Description != nil {
		insertParams.Description = sql.NullString{String: *repoInfo.Description, Valid: true}
	}

	if repoInfo.DiskUsage != nil {
		insertParams.DiskUsage = sql.NullInt32{Int32: int32(*repoInfo.DiskUsage), Valid: true}
	}

	if repoInfo.ForkCount != nil {
		insertParams.ForkCount = sql.NullInt32{Int32: int32(*repoInfo.ForkCount), Valid: true}
	}

	if repoInfo.HomepageUrl != nil {
		insertParams.HomepageUrl = sql.NullString{String: *repoInfo.HomepageUrl, Valid: true}
	}

	if repoInfo.IsArchived != nil {
		insertParams.IsArchived = sql.NullBool{Bool: *repoInfo.IsArchived, Valid: true}
	}

	if repoInfo.IsDisabled != nil {
		insertParams.IsDisabled = sql.NullBool{Bool: *repoInfo.IsDisabled, Valid: true}
	}

	if repoInfo.IsMirror != nil {
		insertParams.IsMirror = sql.NullBool{Bool: *repoInfo.IsMirror, Valid: true}
	}

	if repoInfo.IsPrivate != nil {
		insertParams.IsPrivate = sql.NullBool{Bool: *repoInfo.IsPrivate, Valid: true}
	}

	if repoInfo.TotalIssuesCount != nil {
		insertParams.TotalIssuesCount = sql.NullInt32{Int32: int32(*repoInfo.TotalIssuesCount), Valid: true}
	}

	if repoInfo.LatestRelease != nil {
		if repoInfo.LatestRelease.AuthorLogin != nil {
			insertParams.LatestReleaseAuthor = sql.NullString{String: *repoInfo.LatestRelease.AuthorLogin, Valid: true}
		}
		if repoInfo.LatestRelease.CreatedAt != nil {
			insertParams.LatestReleaseCreatedAt = sql.NullTime{Time: *repoInfo.LatestRelease.CreatedAt, Valid: true}
		}
		if repoInfo.LatestRelease.Name != nil {
			insertParams.LatestReleaseName = sql.NullString{String: *repoInfo.LatestRelease.Name, Valid: true}
		}
		if repoInfo.LatestRelease.PublishedAt != nil {
			insertParams.LatestReleasePublishedAt = sql.NullTime{Time: *repoInfo.LatestRelease.PublishedAt, Valid: true}
		}
	}

	if repoInfo.License != nil {
		if repoInfo.License.Key != nil {
			insertParams.LicenseKey = sql.NullString{String: *repoInfo.License.Key, Valid: true}
		}
		if repoInfo.License.Name != nil {
			insertParams.LicenseName = sql.NullString{String: *repoInfo.License.Name, Valid: true}
		}
		if repoInfo.License.Nickname != nil {
			insertParams.LicenseNickname = sql.NullString{String: *repoInfo.License.Nickname, Valid: true}
		}
	}

	if repoInfo.OpenGraphImageUrl != nil {
		insertParams.OpenGraphImageUrl = sql.NullString{String: *repoInfo.OpenGraphImageUrl, Valid: true}
	}

	if repoInfo.PrimaryLanguage != nil {
		insertParams.PrimaryLanguage = sql.NullString{String: *repoInfo.PrimaryLanguage, Valid: true}
	}

	if repoInfo.PushedAt != nil {
		insertParams.PushedAt = sql.NullTime{Time: *repoInfo.PushedAt, Valid: true}
	}

	if repoInfo.ReleasesCount != nil {
		insertParams.ReleasesCount = sql.NullInt32{Int32: int32(*repoInfo.ReleasesCount), Valid: true}
	}

	if repoInfo.StargazersCount != nil {
		insertParams.StargazersCount = sql.NullInt32{Int32: int32(*repoInfo.StargazersCount), Valid: true}
	}

	if repoInfo.UpdatedAt != nil {
		insertParams.UpdatedAt = sql.NullTime{Time: *repoInfo.UpdatedAt, Valid: true}
	}

	if repoInfo.WatchersCount != nil {
		insertParams.WatchersCount = sql.NullInt32{Int32: int32(*repoInfo.WatchersCount), Valid: true}
	}
	// nightmare over..gotta be a better way than hand typing this

	if err := w.db.WithTx(tx).InsertGitHubRepoInfo(ctx, insertParams); err != nil {
		return err
	}

	if err := w.db.WithTx(tx).SetSyncJobStatus(ctx, db.SetSyncJobStatusParams{Status: "DONE", ID: j.ID}); err != nil {
		return err
	}

	// indicate that we're finishing query execution
	if err := w.sendBatchLogMessages(ctx, []*syncLog{{Type: SyncLogTypeInfo, RepoSyncQueueID: j.ID,
		Message: fmt.Sprintf(LogFormatFinishingSync, j.SyncType, j.Repo),
	}}); err != nil {
		return fmt.Errorf("send batch log messages: %w", err)
	}

	return tx.Commit(ctx)
}
