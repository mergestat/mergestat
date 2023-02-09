// Package syncer handles syncing of repositories
package syncer

import (
	"context"
	"errors"
	"fmt"
	"net/url"

	"os"
	"sync"
	"time"

	"github.com/jackc/pgx/v4"
	"github.com/jackc/pgx/v4/pgxpool"
	"github.com/jmoiron/sqlx"
	_ "github.com/mattn/go-sqlite3"
	"github.com/mergestat/gitutils/clone"
	_ "github.com/mergestat/mergestat-lite/pkg/sqlite"
	"github.com/mergestat/mergestat/internal/db"
	"github.com/rs/zerolog"
)

const (
	syncTypeGitCommits                = "GIT_COMMITS"
	syncTypeGitCommitStats            = "GIT_COMMIT_STATS"
	syncTypeGitRefs                   = "GIT_REFS"
	syncTypeGitFiles                  = "GIT_FILES"
	syncTypeGitBlame                  = "GIT_BLAME"
	syncTypeGitHubRepoMetadata        = "GITHUB_REPO_METADATA"
	syncTypeGitHubRepoPRs             = "GITHUB_REPO_PRS"
	syncTypeGitHubRepoIssues          = "GITHUB_REPO_ISSUES"
	syncTypeGitHubRepoStars           = "GITHUB_REPO_STARS"
	syncTypeGitHubPRReviews           = "GITHUB_PR_REVIEWS"
	syncTypeGitHubPRCommits           = "GITHUB_PR_COMMITS"
	syncTypeTrivyRepoScan             = "TRIVY_REPO_SCAN"
	syncTypeSyftRepoScan              = "SYFT_REPO_SCAN"
	syncTypeGitHubActions             = "GITHUB_ACTIONS"
	syncTypeGitleaksRepoScan          = "GITLEAKS_REPO_SCAN"
	syncTypeYelpDetectSecretsRepoScan = "YELP_DETECT_SECRETS_REPO_SCAN"
	syncTypeGosecRepoScan             = "GOSEC_REPO_SCAN"
	syncTypeOSSFScorecardRepoScan     = "OSSF_SCORECARD_REPO_SCAN"
)

var errGitHubTokenRequired = errors.New("in order to run this syncer, a GitHub authentication token must be present")

type worker struct {
	logger       *zerolog.Logger
	pool         *pgxpool.Pool
	mergestat    *sqlx.DB
	db           *db.Queries
	concurrency  int
	pollInterval time.Duration
}

func New(pool *pgxpool.Pool, mergestat *sqlx.DB, logger *zerolog.Logger, concurrency int, pollInterval time.Duration) *worker {
	return &worker{
		logger:       logger,
		pool:         pool,
		mergestat:    mergestat,
		db:           db.New(pool),
		concurrency:  concurrency,
		pollInterval: pollInterval,
	}
}

// dequeue blocks until a job is available or the context is canceled.
// It checks for new jobs on the syncer pollInterval
func (w *worker) dequeue(ctx context.Context) (*db.DequeueSyncJobRow, error) {
	for {
		select {
		case _, ok := <-ctx.Done():
			if !ok {
				return nil, ctx.Err()
			}
		case <-time.After(w.pollInterval):
			var job db.DequeueSyncJobRow
			var err error
			if job, err = w.db.DequeueSyncJob(ctx); err != nil {
				if errors.Is(err, pgx.ErrNoRows) {
					continue
				}
				return nil, err
			}

			return &job, nil
		}
	}
}

// exec loops until the context is canceled, executing a sync.
func (w *worker) exec(ctx context.Context, id string) {
	w.logger.Info().Msgf("starting exec loop: %s", id)
	for {
		select {
		case _, ok := <-ctx.Done():
			if !ok {
				w.logger.Info().Msgf("exiting exec loop: %s", id)
				return
			}
		default:
			j, err := w.dequeue(ctx)
			if err != nil {
				// if error is a context cancellation, go to next tick of loop where
				// done case will be selected
				if errors.Is(err, context.Canceled) {
					continue
				}

				w.logger.Err(err).Msgf("error dequeuing job: %v", err)
				continue
			}

			w.loggerForJob(j).Info().Msg("dequeued job")

			if err := w.handle(ctx, j); err != nil {
				if !errors.Is(err, context.Canceled) {
					w.logger.Warn().AnErr("error", err).Msgf("error handling job: %v", j)

					if err := w.db.InsertSyncJobLog(context.TODO(), db.InsertSyncJobLogParams{
						LogType:         string(SyncLogTypeError),
						Message:         err.Error(),
						RepoSyncQueueID: j.ID,
					}); err != nil {
						w.logger.Err(err).Msgf("error sending log error message: %v", err)
					}

					if err := w.db.SetSyncJobStatus(context.TODO(), db.SetSyncJobStatusParams{
						Status: "DONE",
						ID:     j.ID,
					}); err != nil {
						w.logger.Err(err).Msgf("error marking sync job as done: %v", err)
					}
					continue
				} else {
					// if the error was a context cancellation, reset the status to QUEUED
					if err := w.db.SetSyncJobStatus(context.TODO(), db.SetSyncJobStatusParams{
						Status: "QUEUED",
						ID:     j.ID,
					}); err != nil {
						w.logger.Err(err).Msgf("error marking sync job as queued: %v", err)
					}
				}
			}
		}
	}
}

// handle maps jobs to the right handler (see handlers.go)
func (w *worker) handle(ctx context.Context, j *db.DequeueSyncJobRow) error {
	w.loggerForJob(j).Info().Msg("handling job")

	done := w.startKeepAlives(j, 30*time.Second)
	defer done()

	switch j.SyncType {
	case syncTypeGitCommits:
		return w.handleGitCommits(ctx, j)
	case syncTypeGitFiles:
		return w.handleGitFiles(ctx, j)
	case syncTypeGitCommitStats:
		return w.handleGitCommitStats(ctx, j)
	case syncTypeGitRefs:
		return w.handleGitRefs(ctx, j)
	case syncTypeGitBlame:
		return w.handleGitBlame(ctx, j)
	case syncTypeGitHubRepoMetadata:
		return w.handleGitHubRepoMetadata(ctx, j)
	case syncTypeGitHubRepoPRs:
		return w.handleGitHubRepoPRs(ctx, j)
	case syncTypeGitHubRepoIssues:
		return w.handleGitHubRepoIssues(ctx, j)
	case syncTypeGitHubRepoStars:
		return w.handleGitHubRepoStars(ctx, j)
	case syncTypeGitHubPRReviews:
		return w.handleGitHubPRReviews(ctx, j)
	case syncTypeGitHubPRCommits:
		return w.handleGitHubPRCommits(ctx, j)
	case syncTypeTrivyRepoScan:
		return w.handleTrivyRepoScan(ctx, j)
	case syncTypeSyftRepoScan:
		return w.handleSyftRepoScan(ctx, j)
	case syncTypeGitHubActions:
		return w.handleGithubActions(ctx, j)
	case syncTypeGitleaksRepoScan:
		return w.handleGitleaksRepoScan(ctx, j)
	case syncTypeYelpDetectSecretsRepoScan:
		return w.handleYelpDetectSecretsRepoScan(ctx, j)
	case syncTypeGosecRepoScan:
		return w.handleGosecRepoScan(ctx, j)
	case syncTypeOSSFScorecardRepoScan:
		return w.handleOSSFScorecardScan(ctx, j)
	default:
		return fmt.Errorf("unknown sync type: %s for job ID: %d", j.SyncType, j.ID)
	}
}

// Start starts running the workers until the ctx is canceled.
func (w *worker) Start(ctx context.Context) {
	g := &sync.WaitGroup{}
	g.Add(w.concurrency)
	for i := 0; i < w.concurrency; i++ {
		go func(i int) {
			w.exec(ctx, fmt.Sprintf("%d", i))
			g.Done()
		}(i)
	}
	g.Wait()
}

// fetchGitHubTokenFromDB is a temporary helper function for retrieving the most recently added GITHUB_PAT service credential from the DB.
// It's "temporary" because the way credentials are managed and retrieved will likely need to be much more robust in the future.
func (w *worker) fetchGitHubTokenFromDB(ctx context.Context) (string, error) {
	encryptionSecret := os.Getenv("ENCRYPTION_SECRET")

	const fetchToken = `
		SELECT credentials.token
			FROM (SELECT * FROM mergestat.providers WHERE name = 'GitHub' AND vendor = 'github') AS provider,
    			  mergestat.fetch_service_auth_credential(provider.id, 'GITHUB_PAT', $1) AS credentials`

	var credentials []byte
	if err := w.pool.QueryRow(context.TODO(), fetchToken, encryptionSecret).Scan(&credentials); err != nil && !errors.Is(err, pgx.ErrNoRows) {
		return "", fmt.Errorf("could not retrieve GitHub PAT from database: %v", err)
	}

	if credentials == nil {
		// default to the `GITHUB_TOKEN` env var if nothing in the DB
		credentials = []byte(os.Getenv("GITHUB_TOKEN"))
	}

	return string(credentials), nil
}

// cloneRepo is a helper function for cloning a repository to a path on disk
func (w *worker) cloneRepo(ctx context.Context, ghToken, url, path string, bare bool, job *db.DequeueSyncJobRow) error {
	logger := w.logger.With().Bool("bare", bare).Str("url", url).Bool("githubTokenSet", ghToken != "").Logger()
	var err error

	logger.Info().Msgf("starting git repository clone: %s", url)

	if err = w.sendBatchLogMessages(ctx, []*syncLog{{
		Type:            SyncLogTypeInfo,
		RepoSyncQueueID: job.ID,
		Message:         "starting git clone: " + url,
	}}); err != nil {
		return err
	}

	// we add ghtoken to current repo url for private repos access
	parsedUrl, err := w.addGithubTokenToUrl(url, ghToken)
	if err != nil {
		return err
	}

	if err = clone.Exec(context.Background(), parsedUrl, path, clone.WithBare(bare)); err != nil {
		return err
	}

	logger.Info().Msgf("finished git repository clone: %s", url)

	if err = w.sendBatchLogMessages(ctx, []*syncLog{{
		Type:            SyncLogTypeInfo,
		RepoSyncQueueID: job.ID,
		Message:         "finished git clone successfully: " + url,
	}}); err != nil {
		return err
	}

	return nil
}

// addGithubTokenUrl is a helper fn to insert current ghtoken into a repo url
// to been able to access private repositories
func (w *worker) addGithubTokenToUrl(urlString, ghToken string) (string, error) {
	parsedUrl, err := url.Parse(urlString)
	if err != nil {
		return "", err
	}

	// for URLs with file:// or no scheme, do not append GitHub token.
	if parsedUrl.Scheme == "" || parsedUrl.Scheme == "file" {
		return urlString, nil
	}

	parsedUrl.User = url.UserPassword(parsedUrl.Path, ghToken)
	return parsedUrl.String(), nil
}

func (w *worker) clone(ctx context.Context, path string, job *db.DequeueSyncJobRow) (err error) {
	var logger = w.logger.With().Str("repo", job.RepoID.String()).Logger()
	logger.Info().Msgf("starting git repository clone")

	var repo db.Repo
	if repo, err = w.db.GetRepoById(ctx, job.RepoID); err != nil {
		return err
	}

	if err = w.sendBatchLogMessages(ctx, []*syncLog{{
		Type:            SyncLogTypeInfo,
		RepoSyncQueueID: job.ID,
		Message:         "starting git clone: " + repo.Repo,
	}}); err != nil {
		return err
	}

	var token string
	if token, err = w.db.FetchCredential(ctx, repo.Provider); err != nil {
		return err
	}

	var repoUrl *url.URL
	if repoUrl, err = url.Parse(repo.Repo); err != nil {
		return err
	}

	if token != "" {
		repoUrl.User = url.UserPassword("x-github", token)
	}

	// execute git clone
	if err = clone.Exec(context.Background(), repoUrl.String(), path, clone.WithBare(true)); err != nil {
		return err
	}

	logger.Info().Msgf("finished git repository clone: %s", repo.Repo)

	if err = w.sendBatchLogMessages(ctx, []*syncLog{{
		Type:            SyncLogTypeInfo,
		RepoSyncQueueID: job.ID,
		Message:         "finished git clone successfully: " + repo.Repo,
	}}); err != nil {
		return err
	}

	return nil
}
