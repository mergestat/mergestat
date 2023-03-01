package syncer

import (
	"context"
	"database/sql"
	"errors"
	"fmt"
	"net/http"
	"net/url"
	"strings"

	"github.com/google/go-github/v50/github"
	"github.com/jackc/pgx/v4"
	"github.com/mergestat/mergestat/internal/db"
	"github.com/mergestat/mergestat/internal/helper"
	"github.com/mergestat/mergestat/queries"
	"golang.org/x/oauth2"
)

func (w *worker) handleGitHubRepoMetadata(ctx context.Context, j *db.DequeueSyncJobRow) error {
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

	var u *url.URL
	if u, err = url.Parse(j.Repo); err != nil {
		return fmt.Errorf("could not parse repo: %v", err)
	}

	components := strings.Split(u.Path, "/")
	repoOwner := components[1]
	repoName := components[2]

	// execute mergestat query
	var (
		repo          *github.Repository
		latestRelease *github.RepositoryRelease
		releaseCount  int
	)
	if repo, latestRelease, releaseCount, err = w.getRepositoryInfo(ctx, ghToken, j.Repo); err != nil {
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
	if err = w.db.WithTx(tx).DeleteGitHubRepoInfo(ctx, j.RepoID); err != nil {
		return err
	}

	insertParams := db.InsertGitHubRepoInfoParams{
		RepoID: j.RepoID,
		Owner:  repoOwner,
		Name:   repoName,
	}

	// TODO(patrickdevivo) the following is a nightmare...there's gotta be a way to avoid
	// typing this all out?
	if repo.CreatedAt != nil {
		insertParams.CreatedAt = helper.DateToSqlNullTime(&repo.CreatedAt.Time)
	}

	if repo.DefaultBranch != nil {
		insertParams.DefaultBranchName = helper.StringToSqlNullString(repo.DefaultBranch)
	}

	if repo.Description != nil {
		insertParams.Description = helper.StringToSqlNullString(repo.Description)
	}

	if repo.Size != nil {
		size := int32(*repo.Size)
		insertParams.Size = helper.Int32ToSqlNullInt32(&size)
	}

	if repo.ForksCount != nil {
		forksCount := int32(*repo.ForksCount)
		insertParams.ForkCount = helper.Int32ToSqlNullInt32(&forksCount)
	}

	if repo.Homepage != nil {
		insertParams.HomepageUrl = helper.StringToSqlNullString(repo.Homepage)
	}

	if repo.Archived != nil {
		insertParams.IsArchived = sql.NullBool{Bool: *repo.Archived, Valid: true}
	}

	if repo.Disabled != nil {
		insertParams.IsDisabled = sql.NullBool{Bool: *repo.Disabled, Valid: true}
	}

	if repo.MirrorURL != nil {
		insertParams.MirrorUrl = sql.NullString{String: *repo.MirrorURL, Valid: true}

	}

	if repo.Private != nil {
		insertParams.IsPrivate = sql.NullBool{Bool: *repo.Private, Valid: true}
	}

	if repo.OpenIssuesCount != nil {
		issuesCount := int32(*repo.OpenIssuesCount)
		insertParams.TotalIssuesCount = helper.Int32ToSqlNullInt32(&issuesCount)
	}

	if latestRelease != nil {
		if latestRelease.Author.Login != nil {
			insertParams.LatestReleaseAuthor = helper.StringToSqlNullString(latestRelease.Author.Login)
		}
		if latestRelease.CreatedAt != nil {
			insertParams.LatestReleaseCreatedAt = helper.DateToSqlNullTime(&latestRelease.CreatedAt.Time)
		}
		if latestRelease.Name != nil {
			insertParams.LatestReleaseName = helper.StringToSqlNullString(latestRelease.Name)
		}
		if latestRelease.PublishedAt != nil {
			insertParams.LatestReleasePublishedAt = helper.DateToSqlNullTime(&latestRelease.PublishedAt.Time)
		}
	}

	if repo.License != nil {
		if repo.License.Key != nil {
			insertParams.LicenseKey = helper.StringToSqlNullString(repo.License.Key)
		}
		if repo.License.Name != nil {
			insertParams.LicenseName = helper.StringToSqlNullString(repo.License.Name)
		}
	}

	if repo.Language != nil {
		insertParams.PrimaryLanguage = helper.StringToSqlNullString(repo.Language)
	}

	if repo.PushedAt != nil {
		insertParams.PushedAt = helper.DateToSqlNullTime(&repo.PushedAt.Time)
	}

	if releaseCount > 0 {
		releaseCountInt32 := int32(releaseCount)
		insertParams.ReleasesCount = helper.Int32ToSqlNullInt32(&releaseCountInt32)
	}

	if repo.StargazersCount != nil {
		stargaers := int32(*repo.StargazersCount)
		insertParams.StargazersCount = helper.Int32ToSqlNullInt32(&stargaers)
	}

	if repo.UpdatedAt != nil {
		insertParams.UpdatedAt = helper.DateToSqlNullTime(&repo.UpdatedAt.Time)
	}

	if repo.WatchersCount != nil {
		watchersCount := int32(*repo.WatchersCount)
		insertParams.WatchersCount = helper.Int32ToSqlNullInt32(&watchersCount)
	}
	if repo.SecurityAndAnalysis != nil {
		if repo.SecurityAndAnalysis.AdvancedSecurity != nil {
			advancedSecurity := *repo.SecurityAndAnalysis.AdvancedSecurity.Status
			insertParams.AdvancedSecurity = helper.StringToSqlNullString(&advancedSecurity)
		}

		if repo.SecurityAndAnalysis.SecretScanning != nil {
			secretScanning := *repo.SecurityAndAnalysis.SecretScanning.Status
			insertParams.SecretScanning = helper.StringToSqlNullString(&secretScanning)
		}

		if repo.SecurityAndAnalysis.SecretScanningPushProtection != nil {
			secretScanningPushProtection := *repo.SecurityAndAnalysis.SecretScanningPushProtection.Status
			insertParams.SecretScanningPushProtection = helper.StringToSqlNullString(&secretScanningPushProtection)
		}
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

func (w *worker) getRepositoryInfo(ctx context.Context, ghToken string, currentRepo string) (*github.Repository, *github.RepositoryRelease, int, error) {
	var (
		err           error
		repo          *github.Repository
		latestRelease *github.RepositoryRelease
		totalReleases int
		resp          *github.Response
	)

	ts := oauth2.StaticTokenSource(
		&oauth2.Token{AccessToken: ghToken},
	)

	tc := oauth2.NewClient(ctx, ts)
	if len(ghToken) <= 0 {
		tc = nil
	}

	client := github.NewClient(tc)

	if len(ghToken) > 0 {
		// we check the rate limit before any call to the GitHub API
		if _, resp, err = client.RateLimits(ctx); err != nil {
			return nil, nil, 0, err
		}

		helper.RestRatelimitHandler(ctx, resp, w.logger, queries.NewQuerier(w.db), true)
	}

	var repoOwner, repoName string

	if repoOwner, repoName, err = helper.GetRepoOwnerAndRepoName(currentRepo); err != nil {
		return nil, nil, 0, err
	}

	if repo, _, err = client.Repositories.Get(ctx, repoOwner, repoName); err != nil {
		return nil, nil, 0, err
	}

	helper.RestRatelimitHandler(ctx, resp, w.logger, queries.NewQuerier(w.db), true)

	if latestRelease, resp, err = client.Repositories.GetLatestRelease(ctx, repoOwner, repoName); err != nil && resp.StatusCode != http.StatusNotFound {
		return nil, nil, 0, err
	}

	helper.RestRatelimitHandler(ctx, resp, w.logger, queries.NewQuerier(w.db), true)

	opt := &github.ListOptions{}

	if _, resp, err = client.Repositories.ListReleases(ctx, repoOwner, repoName, opt); err != nil && resp.StatusCode != http.StatusNotFound {
		return nil, nil, 0, err
	}

	totalReleases = resp.LastPage

	return repo, latestRelease, totalReleases, nil
}
