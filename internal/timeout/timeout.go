package timeout

import (
	"context"
	"time"

	"github.com/jackc/pgx/v4/pgxpool"
	"github.com/mergestat/fuse/internal/db"
	"github.com/rs/zerolog"
)

type timeout struct {
	logger *zerolog.Logger
	pool   *pgxpool.Pool
	db     *db.Queries
}

func New(logger *zerolog.Logger, pool *pgxpool.Pool) *timeout {
	return &timeout{
		logger: logger,
		pool:   pool,
		db:     db.New(pool),
	}
}

func (s *timeout) Start(ctx context.Context, interval time.Duration) {
	s.logger.Info().Msg("starting timeout routine")
	exec := func() {
		if timedOutSyncJobIDs, err := s.db.MarkSyncsAsTimedOut(ctx); err != nil {
			s.logger.Err(err).Msg("encountered error during job timeout execution")
		} else if len(timedOutSyncJobIDs) > 0 {
			s.logger.Info().Msgf("timed out %d sync job(s)", len(timedOutSyncJobIDs))
		}
	}
	exec()

	for {
		select {
		case <-ctx.Done():
			s.logger.Info().Msg("stopping timeout routine")
			return
		case <-time.After(interval):
			exec()
		}
	}
}
