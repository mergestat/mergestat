// Package syncer handles syncing of repositories
package syncer

import (
	"context"
	"fmt"
	"sync"
	"time"

	"github.com/go-git/go-billy/v5/osfs"
	"github.com/go-git/go-git/v5"
	"github.com/go-git/go-git/v5/plumbing/cache"
	"github.com/go-git/go-git/v5/plumbing/transport"
	"github.com/go-git/go-git/v5/plumbing/transport/http"
	"github.com/go-git/go-git/v5/plumbing/transport/ssh"
	"github.com/go-git/go-git/v5/storage/filesystem"
	"github.com/pkg/errors"

	"github.com/jackc/pgx/v4"
	"github.com/jackc/pgx/v4/pgxpool"
	"github.com/jmoiron/sqlx"
	_ "github.com/mattn/go-sqlite3"
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
	syncTypeGitRemotes                = "GIT_REMOTES"
	syncTypeGitHubRepoMetadata        = "GITHUB_REPO_METADATA"
	syncTypeGitHubRepoPRs             = "GITHUB_REPO_PRS"
	syncTypeGitHubRepoIssues          = "GITHUB_REPO_ISSUES"
	syncTypeGitHubRepoStars           = "GITHUB_REPO_STARS"
	syncTypeGitHubPRReviews           = "GITHUB_PR_REVIEWS"
	syncTypeGitHubPRCommits           = "GITHUB_PR_COMMITS"
	syncTypeGitHubPRsAndCommits       = "GITHUB_PRS_AND_COMMITS"
	syncTypeTrivyRepoScan             = "TRIVY_REPO_SCAN"
	syncTypeSyftRepoScan              = "SYFT_REPO_SCAN"
	syncTypeGitHubActions             = "GITHUB_ACTIONS"
	syncTypeGitleaksRepoScan          = "GITLEAKS_REPO_SCAN"
	syncTypeYelpDetectSecretsRepoScan = "YELP_DETECT_SECRETS_REPO_SCAN"
	syncTypeGosecRepoScan             = "GOSEC_REPO_SCAN"
	syncTypeOSSFScorecardRepoScan     = "OSSF_SCORECARD_REPO_SCAN"
	syncTypeGrypeScan                 = "GRYPE_REPO_SCAN"
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
	case syncTypeGitRemotes:
		return w.handleGitRemotes(ctx, j)
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
	case syncTypeGitHubPRsAndCommits:
		return w.handleGitHubRepoPRsAndCommits(ctx, j)
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
	case syncTypeGrypeScan:
		return w.handleGrypeRepoScan(ctx, j)
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

func (w *worker) fetchCredentials(ctx context.Context, job *db.DequeueSyncJobRow) (_, _ string, err error) {
	var repo db.Repo
	if repo, err = w.db.GetRepoById(ctx, job.RepoID); err != nil {
		return "", "", err
	}

	var username, token string
	if username, token, err = w.db.FetchCredential(ctx, repo.Provider); err != nil {
		return "", "", err
	}

	return username, token, nil
}

// clone clones the repository tied to this job into the given path.
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

	// TODO(@riyaz): we can improve this by first detecting the kind of url
	// 		and then fetching the appropriate type of credential for it.
	// 		This still involves couple of challenges (differentiating between different provider tokens etc.)

	// fetch the username and token for the provider
	var username, token string
	if username, token, err = w.db.FetchCredential(ctx, repo.Provider); err != nil {
		return err
	}

	var endpoint *transport.Endpoint
	if endpoint, err = transport.NewEndpoint(repo.Repo); err != nil {
		return errors.Wrapf(err, "failed to parse url")
	}

	var auth transport.AuthMethod
	if endpoint.Protocol == "ssh" {
		if username == "" {
			username = endpoint.User // in case the username is encoded into the url (very common)
		}

		if auth, err = ssh.NewPublicKeys(username, []byte(token), ""); err != nil {
			return errors.Wrapf(err, "failed to parse ssh key")
		}
	} else if endpoint.Protocol == "http" || endpoint.Protocol == "https" || endpoint.Protocol == "git" {
		if username == "" {
			username = "git"
		}

		if token != "" {
			auth = &http.BasicAuth{Username: username, Password: token}
		}
	}

	// fs and target are different! target is a subdirectory of fs. target stores git objects (like commits, etc.)
	// whereas fs contains the working directory (a local checkout) of the cloned repository.
	var fs = osfs.New(path)
	var dotgit, _ = fs.Chroot(".git")
	var target = filesystem.NewStorage(dotgit, cache.NewObjectLRUDefault())

	var opts = &git.CloneOptions{URL: endpoint.String(), Auth: auth}
	if _, err = git.CloneContext(ctx, target, fs, opts); err != nil {
		return errors.Wrapf(err, "failed to clone repository")
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
