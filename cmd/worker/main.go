package main

import (
	"context"
	"database/sql"
	"errors"
	"fmt"
	"net/http"
	_ "net/http/pprof"
	"net/url"
	"os"
	"os/signal"
	"strconv"
	"sync"
	"syscall"
	"time"

	"github.com/mergestat/mergestat/internal/cron"
	"github.com/mergestat/mergestat/internal/db"
	"github.com/mergestat/mergestat/internal/helper"
	"github.com/mergestat/mergestat/internal/jobs/repo"
	"github.com/mergestat/mergestat/internal/jobs/sync/podman"
	"github.com/mergestat/mergestat/internal/syncer"
	"github.com/mergestat/mergestat/internal/timeout"
	"github.com/mergestat/mergestat/queries"
	"github.com/mergestat/sqlq/runtime/embed"
	"github.com/mergestat/sqlq/schema"

	"github.com/go-git/go-git/v5"
	"github.com/golang-migrate/migrate/v4"
	_ "github.com/golang-migrate/migrate/v4/database/postgres"
	_ "github.com/golang-migrate/migrate/v4/source/file"
	"github.com/jackc/pgx/v4"
	"github.com/jackc/pgx/v4/pgxpool"
	_ "github.com/jackc/pgx/v4/stdlib"
	"github.com/jmoiron/sqlx"
	_ "github.com/mattn/go-sqlite3"
	"github.com/mergestat/mergestat-lite/extensions"
	"github.com/mergestat/mergestat-lite/extensions/options"
	"github.com/mergestat/mergestat-lite/extensions/services"
	"github.com/mergestat/mergestat-lite/pkg/locator"
	_ "github.com/mergestat/mergestat-lite/pkg/sqlite"
	"github.com/mergestat/mergestat/internal/scheduler"
	"github.com/prometheus/client_golang/prometheus/promhttp"
	"github.com/rs/zerolog"
	"github.com/shurcooL/githubv4"
	"go.riyazali.net/sqlite"
	"golang.org/x/oauth2"
)

var (
	postgresConnection = os.Getenv("POSTGRES_CONNECTION")
	// baseCloneDir       = os.Getenv("BASE_CLONE_DIR")
	concurrencyEnv = os.Getenv("CONCURRENCY")
	dockerNetwork  = os.Getenv("DOCKER_NETWORK_NAME")
)

func repoLocator() services.RepoLocator {
	return options.RepoLocatorFn(func(ctx context.Context, path string) (*git.Repository, error) {
		if path == "" {
			return nil, fmt.Errorf("no repo supplied")
		}

		return git.PlainOpen(path)
	})
}

// type mutexRoundTripper struct {
// 	mut sync.Mutex
// }

// func (t *mutexRoundTripper) RoundTrip(r *http.Request) (*http.Response, error) {
// 	t.mut.Lock()
// 	defer t.mut.Unlock()
// 	return http.DefaultTransport.RoundTrip(r)
// }

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

	logger.Info().Msg("starting syncer")

	l := logger.Level(zerolog.InfoLevel).With().Bool("mergestat-query-exec", true).Logger()

	ratelimitHandler := func(rlr *options.GitHubRateLimitResponse) {
		untilResetDur := time.Until(rlr.ResetAt.Time)
		secondsRemaining := untilResetDur.Seconds()
		delayDur := 800 * time.Millisecond // Default delay is 800ms to prevent hitting the secondary rate limit

		// if remaining points are 400 or less then we will delay until the quota is reset
		if rlr.Remaining <= 400 {
			delayDur = untilResetDur
		}

		if err := helper.WaitForImports(ctx, &l, queries.NewQuerier(db.New(pool))); err != nil {
			l.Err(err).Msgf("error waiting for imports: %v", err)
		}

		logger.Info().
			Int("remaining", rlr.Remaining).
			Time("resets", rlr.ResetAt.Time).
			Str("until-reset", untilResetDur.String()).
			Float64("delay-seconds", delayDur.Seconds()).
			Msgf("received rate limit info from GitHub API: %d remaining in next %ds. Delaying %ss", rlr.Remaining, int(secondsRemaining), strconv.FormatFloat(delayDur.Seconds(), 'f', 2, 64))

		// Allow for shutdown during the delay
		select {
		case <-ctx.Done():
		case <-time.After(delayDur):
		}
	}

	// See here: https://docs.github.com/en/rest/guides/best-practices-for-integrators#dealing-with-secondary-rate-limits
	// The GitHub API does not want users making concurrent API calls, on top of their point-based rate limiting
	var githubRequestMutex sync.Mutex
	githubPreRequestHook := func() {
		githubRequestMutex.Lock()
	}

	githubPostRequestHook := func() {
		githubRequestMutex.Unlock()
	}

	githubClientGetter := func() *githubv4.Client {
		encryptionSecret := os.Getenv("ENCRYPTION_SECRET")

		const fetchToken = `
			SELECT credentials.token
				FROM (SELECT * FROM mergestat.providers WHERE vendor = 'github') AS provider,
					  mergestat.fetch_service_auth_credential(provider.id, 'GITHUB_PAT', $1) AS credentials`

		var credentials []byte
		if err = pool.QueryRow(context.TODO(), fetchToken, encryptionSecret).Scan(&credentials); err != nil && !errors.Is(err, pgx.ErrNoRows) {
			logger.Err(err).Msgf("error retrieving GitHub PAT from database")
		}

		// default to GITHUB_TOKEN env var if nothing is in db
		if credentials == nil {
			logger.Info().Msg("no GitHub PAT found in DB, using GITHUB_TOKEN env")
			credentials = []byte(os.Getenv("GITHUB_TOKEN"))
		}

		httpClient := oauth2.NewClient(context.Background(), oauth2.StaticTokenSource(
			&oauth2.Token{AccessToken: string(credentials)},
		))
		// httpClient.Transport = &mutexRoundTripper{}

		return githubv4.NewClient(httpClient)
	}

	sqlite.Register(
		extensions.RegisterFn(
			options.WithExtraFunctions(),
			options.WithRepoLocator(locator.CachedLocator(repoLocator())),
			options.WithGitHub(),
			// options.WithContextValue("githubToken", os.Getenv("GITHUB_TOKEN")),
			options.WithContextValue("githubPerPage", os.Getenv("GITHUB_PER_PAGE")),
			options.WithContextValue("githubRateLimit", os.Getenv("GITHUB_RATE_LIMIT")),
			options.WithGitHubRateLimitHandler(ratelimitHandler),
			options.WithGitHubPreRequestHook(githubPreRequestHook),
			options.WithGitHubPostRequestHook(githubPostRequestHook),
			options.WithGitHubClientGetter(githubClientGetter),
			options.WithNPM(),
			options.WithLogger(&l),
		),
	)

	var embedded *sqlx.DB
	if embedded, err = sqlx.Open("sqlite3", ":memory:"); err != nil {
		logger.Err(err).Msgf("could not open mergestat db: %v", err)
		os.Exit(1)
	}

	var worker, _ = embed.NewWorker(upstream, embed.WorkerConfig{
		Concurrency: concurrency,
	})

	// resets the query params to avoid downstream issues
	u.RawQuery = ""

	// register job handlers for types implemented by this worker
	_ = worker.Register("repos/auto-import", repo.AutoImport(pool))
	_ = worker.Register("container/sync", podman.ContainerSync(u.String(), &logger, db.New(pool), dockerNetwork))

	// TODO all of the following "params" should be configurable
	// either via the database/app or possibly with env vars
	schedulerInterval := 1
	syncerInterval := 3

	if schedulerIntervalStr := os.Getenv("SCHEDULER_INTERVAL_MINUTES"); len(schedulerIntervalStr) != 0 {
		if schedulerInterval, err = strconv.Atoi(schedulerIntervalStr); err != nil {
			logger.Err(err).Msgf("Incorrect value for SCHEDULER_INTERVAL_MINUTES")
		}
	}
	if syncerIntervalStr := os.Getenv("SYNCER_INTERVAL_SECONDS"); len(syncerIntervalStr) != 0 {
		if syncerInterval, err = strconv.Atoi(syncerIntervalStr); err != nil {
			logger.Err(err).Msgf("Incorrect value for SYNCER_INTERVAL_SECONDS")
		}
	}
	go scheduler.New(&logger, pool).Start(ctx, time.Duration(schedulerInterval)*time.Minute)
	go timeout.New(&logger, pool).Start(ctx, time.Minute)
	go syncer.New(pool, embedded, &logger, concurrency, time.Duration(syncerInterval)*time.Second).Start(ctx)

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
