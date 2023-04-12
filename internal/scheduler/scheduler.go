package scheduler

import (
	"context"
	"os"
	"strconv"
	"time"

	"github.com/jackc/pgx/v4/pgxpool"
	"github.com/mergestat/mergestat/internal/db"
	"github.com/rs/zerolog"
)

type scheduler struct {
	logger *zerolog.Logger
	pool   *pgxpool.Pool
	db     *db.Queries
}

func New(logger *zerolog.Logger, pool *pgxpool.Pool) *scheduler {
	return &scheduler{
		logger: logger,
		pool:   pool,
		db:     db.New(pool),
	}
}

func (s *scheduler) Start(ctx context.Context, interval time.Duration) {
	s.logger.Info().Msg("starting scheduler")
	exec := func() {
		if err := s.db.EnqueueAllSyncs(ctx); err != nil {
			s.logger.Err(err).Msg("encountered error during scheduler execution")
		} else {
			s.logger.Info().Msg("re-scheduling all completed syncs to run again")
		}

		// TODO(patrickdevivo) this should probably be lifted up into a config/param
		// of the scheduler, which is passed into New and defined by the caller
		retentionPeriodDays := 30
		if days := os.Getenv("REPO_SYNC_QUEUE_RETENTION_DAYS"); days != "" {
			var err error
			if retentionPeriodDays, err = strconv.Atoi(days); err != nil {
				s.logger.Err(err).Msgf("could not parse REPO_SYNC_QUEUE_RETENTION_DAYS env: %v", err)
			}
		}

		// allows for REPO_SYNC_QUEUE_RETENTION_DAYS=-1 to skip the cleanup
		if retentionPeriodDays > 0 {
			if err := s.db.CleanOldRepoSyncQueue(ctx, int32(retentionPeriodDays)); err != nil {
				s.logger.Err(err).Msg("encountered error cleaning queue logs")
			} else {
				s.logger.Info().Msgf("successfully removed repo sync jobs older than %d days", retentionPeriodDays)
			}

			if err := s.db.CleanOldJobs(ctx, int32(retentionPeriodDays)); err != nil {
				s.logger.Err(err).Msg("encountered error cleaning sqlq logs")
			} else {
				s.logger.Info().Msgf("successfully removed sqlq jobs older than %d days", retentionPeriodDays)
			}
		}
	}
	exec()

	for {
		select {
		case <-ctx.Done():
			s.logger.Info().Msg("stopping scheduler")
			return
		case <-time.After(interval):
			exec()
		}
	}
}
