package scheduler

import (
	"context"
	"time"

	"github.com/jackc/pgx/v4/pgxpool"
	"github.com/mergestat/fuse/internal/db"
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
		if err := s.db.EnqueueAllCompletedSyncs(ctx); err != nil {
			s.logger.Err(err).Msg("encountered error during scheduler execution")
		} else {
			s.logger.Info().Msg("re-scheduling all completed syncs to run again")
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
