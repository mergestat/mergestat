package main

import (
	"context"
	"fmt"
	"os"
	"os/signal"
	"sync"
	"syscall"
	"time"

	"github.com/go-git/go-git/v5"
	"github.com/jackc/pgx/v4/pgxpool"
	"github.com/jmoiron/sqlx"
	_ "github.com/mattn/go-sqlite3"
	repos "github.com/mergestat/fuse/internal/repos"
	"github.com/mergestat/fuse/internal/scheduler"
	"github.com/mergestat/fuse/internal/syncer"
	"github.com/mergestat/mergestat/extensions"
	"github.com/mergestat/mergestat/extensions/options"
	"github.com/mergestat/mergestat/extensions/services"
	"github.com/mergestat/mergestat/pkg/locator"
	_ "github.com/mergestat/mergestat/pkg/sqlite"
	"github.com/rs/zerolog"
	"go.riyazali.net/sqlite"
)

var (
	postgresConnection = os.Getenv("POSTGRES_CONNECTION")
	// baseCloneDir       = os.Getenv("BASE_CLONE_DIR")
)

func repoLocator(cloneToken string) services.RepoLocator {
	return options.RepoLocatorFn(func(ctx context.Context, path string) (*git.Repository, error) {
		if path == "" {
			return nil, fmt.Errorf("no repo supplied")
		}

		return git.PlainOpen(path)
	})
}

func main() {
	logger := zerolog.New(os.Stderr).With().Timestamp().Logger()

	if fileInfo, _ := os.Stdout.Stat(); (fileInfo.Mode() & os.ModeCharDevice) != 0 {
		l := logger.Output(zerolog.ConsoleWriter{Out: os.Stderr, TimeFormat: time.Stamp})
		logger = l
	}

	ctx, stop := signal.NotifyContext(context.Background(), syscall.SIGINT, syscall.SIGTERM)
	defer stop()

	var pool *pgxpool.Pool
	var err error
	if pool, err = pgxpool.Connect(ctx, postgresConnection); err != nil {
		logger.Err(err).Msgf("could not connect to database: %v", err)
		os.Exit(1)
	}
	defer pool.Close()

	logger.Info().Msg("starting syncer")

	l := logger.Level(zerolog.InfoLevel).With().Bool("mergestat-query-exec", true).Logger()

	sqlite.Register(
		extensions.RegisterFn(
			options.WithExtraFunctions(),
			options.WithRepoLocator(locator.CachedLocator(repoLocator(os.Getenv("GITHUB_TOKEN")))), // TODO figure out token situation
			options.WithGitHub(),
			options.WithContextValue("githubToken", os.Getenv("GITHUB_TOKEN")),
			options.WithContextValue("githubPerPage", "10"),
			options.WithContextValue("githubRateLimit", "1/5"),
			options.WithNPM(),
			options.WithLogger(&l),
		),
	)

	var db *sqlx.DB
	if db, err = sqlx.Open("sqlite3", ":memory:"); err != nil {
		logger.Err(err).Msgf("could not open mergestat db: %v", err)
		os.Exit(1)
	}

	go func() {
		<-ctx.Done()
		logger.Info().Msg("received shutdown signal, waiting for workers to finish...")
		stop()
	}()

	var wg sync.WaitGroup
	wg.Add(3)

	// TODO all of the following "params" should be configurable
	// either via the database/app or possibly with env vars
	go func() {
		defer wg.Done()
		// TODO this should be made idempotent and generally improved
		// so it's not just a dumb "sync everything"
		scheduler.New(&logger, pool).Start(ctx, time.Hour)
	}()

	go func() {
		defer wg.Done()
		repos.NewImporter(&logger, pool, db).Start(ctx, time.Minute)
	}()

	go func() {
		defer wg.Done()
		syncer.New(pool, db, &logger, 2, 3*time.Second).Start(ctx)
	}()

	wg.Wait()
}
