package main

import (
	"context"
	"database/sql"
	"errors"
	"net/http"
	_ "net/http/pprof"
	"net/url"
	"os"
	"os/signal"
	"strconv"
	"syscall"
	"time"

	"github.com/mergestat/mergestat/internal/cron"
	"github.com/mergestat/mergestat/internal/db"
	"github.com/mergestat/mergestat/internal/jobs/repo"
	"github.com/mergestat/mergestat/internal/jobs/sync/podman"
	"github.com/mergestat/sqlq/runtime/embed"
	"github.com/mergestat/sqlq/schema"

	"github.com/golang-migrate/migrate/v4"
	_ "github.com/golang-migrate/migrate/v4/database/postgres"
	_ "github.com/golang-migrate/migrate/v4/source/file"
	"github.com/jackc/pgx/v4/pgxpool"
	_ "github.com/jackc/pgx/v4/stdlib"
	"github.com/mergestat/mergestat/internal/scheduler"
	"github.com/prometheus/client_golang/prometheus/promhttp"
	"github.com/rs/zerolog"
)

var (
	postgresConnection = os.Getenv("POSTGRES_CONNECTION")
	concurrencyEnv     = os.Getenv("CONCURRENCY")
)

// logLevelFromEnv retrieves the log level from the LOG_LEVEL environment variable
// and returns the corresponding zerolog level.
func logLevelFromEnv() zerolog.Level {
	switch os.Getenv("LOG_LEVEL") {
	case "debug":
		return zerolog.DebugLevel
	case "info":
		return zerolog.InfoLevel
	case "warn":
		return zerolog.WarnLevel
	case "error":
		return zerolog.ErrorLevel
	default:
		return zerolog.InfoLevel
	}
}

func main() {
	logger := zerolog.New(os.Stderr).With().Timestamp().Logger().Level(logLevelFromEnv())
	prettyLogs := os.Getenv("PRETTY_LOGS") == "1"

	// if stdout is a terminal or if the PRETTY_LOGS environment variable is set
	// to 1, use a human-friendly log formatter
	if fileInfo, _ := os.Stdout.Stat(); (fileInfo.Mode()&os.ModeCharDevice) != 0 || prettyLogs {
		logger = logger.Output(zerolog.ConsoleWriter{Out: os.Stderr, TimeFormat: time.Stamp})
	}
	zerolog.DefaultContextLogger = &logger

	ctx, stop := signal.NotifyContext(context.Background(), syscall.SIGINT, syscall.SIGTERM)
	defer stop()

	var err error
	concurrency := 1
	if concurrencyEnv != "" {
		if c, err := strconv.Atoi(concurrencyEnv); err != nil {
			logger.Err(err).Msgf("could not parse CONCURRENCY env into an int: %s", concurrencyEnv)
		} else {
			concurrency = c
		}
	}

	// https://www.alexedwards.net/blog/change-url-query-params-in-go
	var u *url.URL
	if u, err = url.Parse(postgresConnection); err != nil {
		logger.Err(err).Msgf("could not parse database connection string: %v", err)
		os.Exit(1)
	}
	v := u.Query()
	v.Add("pool_max_conns", strconv.Itoa(concurrency+5))
	u.RawQuery = v.Encode()

	var pool *pgxpool.Pool
	if pool, err = pgxpool.Connect(ctx, u.String()); err != nil {
		logger.Err(err).Msgf("could not connect to database: %v", err)
		os.Exit(1)
	}
	defer pool.Close()

	// create a new sqlq worker to process tasks in background
	var upstream *sql.DB
	if upstream, err = sql.Open("pgx", postgresConnection); err != nil {
		logger.Fatal().Err(err).Msg("failed to open connection to upstream")
	}

	// this sets the max number of db connections to the same number used by the pgxpool above
	upstream.SetMaxOpenConns(concurrency + 5)

	// apply sqlq migrations
	if err := schema.Apply(upstream); err != nil {
		logger.Fatal().Err(err).Msg("failed to apply sqlq migrations")
	}

	var m *migrate.Migrate
	if m, err = migrate.New("file://migrations", postgresConnection); err != nil {
		logger.Err(err).Msgf("could not initialize migrations")
		os.Exit(1)
	}

	if err := m.Up(); err != nil {
		if !errors.Is(err, migrate.ErrNoChange) {
			logger.Err(err).Msgf("could not run migrations: %v", err)
			os.Exit(1)
		}
	}

	srcErr, dbErr := m.Close()
	if srcErr != nil {
		logger.Err(srcErr).Msgf("could not close migrations with source error: %v", srcErr)
	}
	if dbErr != nil {
		logger.Err(dbErr).Msgf("could not close migrations with db error: %v", dbErr)
	}

	logger.Info().Msg("starting worker")

	var worker, _ = embed.NewWorker(upstream, embed.WorkerConfig{
		Concurrency: concurrency,
	})

	// resets the query params to avoid downstream issues
	u.RawQuery = ""

	// register job handlers for types implemented by this worker
	_ = worker.Register("repos/auto-import", repo.AutoImport(pool))
	_ = worker.Register("container/sync", podman.ContainerSync(u.String(), &logger, db.New(pool)))

	// TODO all of the following "params" should be configurable
	// either via the database/app or possibly with env vars
	go scheduler.New(&logger, pool).Start(ctx, 1*time.Minute)

	// run a basic cron every minute to schedule a repos/auto-import job
	// these jobs are idempotent, and so, multiple instances can run at same time without conflict
	go cron.AutoImport(ctx, 15*time.Second, upstream)

	// run container sync scheduler every minute
	go cron.ContainerSync(ctx, 1*time.Minute, upstream)

	if os.Getenv("DEBUG") != "" {
		go func() {
			http.Handle("/metrics", promhttp.Handler())
			if err := http.ListenAndServe(":8080", nil); err != nil {
				logger.Err(err).Msgf("could not start HTTP handler")
			}
		}()
	}

	// start the worker
	if err = worker.Start(); err != nil {
		logger.Fatal().Err(err).Msg("failed to start background worker")
	}

	<-ctx.Done() // wait for ctrl+c

	// stop the worker
	if err = worker.Shutdown(30 * time.Second); err != nil {
		logger.Err(err).Msg("failed to terminate worker gracefully")
	}
}
