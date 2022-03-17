// Package syncer handles syncing of repositories
package syncer

import (
	"context"
	"errors"
	"fmt"
	"sync"
	"time"

	"github.com/jackc/pgx/v4"
	"github.com/jackc/pgx/v4/pgxpool"
	"github.com/jmoiron/sqlx"
	_ "github.com/mattn/go-sqlite3"
	"github.com/mergestat/fuse/internal/db"
	_ "github.com/mergestat/mergestat/pkg/sqlite"
	"github.com/rs/zerolog"
)

const (
	syncTypeGitCommits         = "GIT_COMMITS"
	syncTypeGitCommitStats     = "GIT_COMMIT_STATS"
	syncTypeGitBranches        = "GIT_BRANCHES"
	syncTypeGitTags            = "GIT_TAGS"
	syncTypeGitHubRepoMetadata = "GITHUB_REPO_METADATA"
	syncTypeGitHubRepoPRs      = "GITHUB_REPO_PRS"
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

	switch j.SyncType {
	case syncTypeGitCommits:
		return w.handleCommits(ctx, j)
	case syncTypeGitCommitStats:
		return w.handleCommitStats(ctx, j)
	case syncTypeGitBranches:
		return w.handleGitBranches(ctx, j)
	case syncTypeGitHubRepoMetadata:
		return w.handleGitHubRepoMetadata(ctx, j)
	case syncTypeGitHubRepoPRs:
		return w.handleGitHubRepoPRs(ctx, j)
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
