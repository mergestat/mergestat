// Package syncer handles syncing of repositories
package syncer

import (
	"context"
	"errors"
	"fmt"
	"os"
	"sync"
	"time"

	"github.com/jackc/pgx/v4"
	"github.com/jackc/pgx/v4/pgxpool"
	"github.com/jmoiron/sqlx"
	libgit2 "github.com/libgit2/git2go/v33"
	_ "github.com/mattn/go-sqlite3"
	"github.com/mergestat/fuse/internal/db"
	_ "github.com/mergestat/mergestat/pkg/sqlite"
	"github.com/rs/zerolog"
)

const (
	syncTypeGitCommits     = "GIT_COMMITS"
	syncTypeGitCommitStats = "GIT_COMMIT_STATS"
	syncTypeGitRefs        = "GIT_REFS"
	syncTypeGitFiles       = "GIT_FILES"
	syncTypeGitBlame       = "GIT_BLAME"

	syncTypeGitHubRepoMetadata = "GITHUB_REPO_METADATA"
	syncTypeGitHubRepoPRs      = "GITHUB_REPO_PRS"
	syncTypeGitHubRepoIssues   = "GITHUB_REPO_ISSUES"
	syncTypeGitHubRepoStars    = "GITHUB_REPO_STARS"
	syncTypeGitHubPRReviews    = "GITHUB_PR_REVIEWS"
	syncTypeGitHubPRCommits    = "GITHUB_PR_COMMITS"

	syncTypeTrivyRepoScan = "TRIVY_REPO_SCAN"
)

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
					w.logger.Err(err).Msgf("error handling job: %v", j)

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
	fuseSecret := os.Getenv("FUSE_SECRET")
	row := w.pool.QueryRow(context.TODO(), "SELECT pgp_sym_decrypt(credentials, $1) FROM mergestat.service_auth_credentials WHERE type = 'GITHUB_PAT' ORDER BY created_at DESC LIMIT 1", fuseSecret)
	var credentials []byte
	if err := row.Scan(&credentials); err != nil && !errors.Is(err, pgx.ErrNoRows) {
		return "", fmt.Errorf("could not retrieve GitHub PAT from database: %v", err)
	}

	if credentials == nil {
		// default to the `GITHUB_TOKEN` env var if nothing in the DB
		credentials = []byte(os.Getenv("GITHUB_TOKEN"))
	}

	return string(credentials), nil
}

// cloneRepo is a helper function for cloning a repository to a path on disk
func (w *worker) cloneRepo(ghToken, url, path string, bare bool) (*libgit2.Repository, error) {
	var creds *libgit2.Credential
	var err error
	if creds, err = libgit2.NewCredentialUserpassPlaintext(ghToken, ""); err != nil {
		return nil, err
	}
	defer creds.Free()

	var credentialsCallback libgit2.CredentialsCallback
	// only create a credentials callback if a token is provided
	// an empty string in the credentials seems to trigger a panic in libgit2
	// https://github.com/libgit2/git2go/issues/928
	if ghToken != "" {
		credentialsCallback = func(url string, username_from_url string, allowed_types libgit2.CredentialType) (*libgit2.Credential, error) {
			return creds, nil
		}
	}

	var repo *libgit2.Repository
	if repo, err = libgit2.Clone(url, path, &libgit2.CloneOptions{
		Bare: bare,
		FetchOptions: libgit2.FetchOptions{
			RemoteCallbacks: libgit2.RemoteCallbacks{
				CredentialsCallback: credentialsCallback,
			},
		},
		CheckoutOptions: libgit2.CheckoutOptions{
			Strategy: libgit2.CheckoutForce,
		},
	}); err != nil {
		return nil, err
	}

	return repo, nil
}
