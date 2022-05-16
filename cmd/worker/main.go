package main

import (
	"context"
	"fmt"
	"net/http"
	_ "net/http/pprof"
	"os"
	"os/signal"
	"strconv"
	"sync"
	"syscall"
	"time"

	"github.com/go-git/go-git/v5"
	"github.com/golang-migrate/migrate/v4"
	_ "github.com/golang-migrate/migrate/v4/database/postgres"
	_ "github.com/golang-migrate/migrate/v4/source/file"
	"github.com/jackc/pgx/v4/pgxpool"
	"github.com/jmoiron/sqlx"
	_ "github.com/mattn/go-sqlite3"
	repos "github.com/mergestat/fuse/internal/repos"
	"github.com/mergestat/fuse/internal/scheduler"
	"github.com/mergestat/fuse/internal/syncer"
	"github.com/mergestat/fuse/internal/timeout"
	"github.com/mergestat/mergestat/extensions"
	"github.com/mergestat/mergestat/extensions/options"
	"github.com/mergestat/mergestat/extensions/services"
	"github.com/mergestat/mergestat/pkg/locator"
	_ "github.com/mergestat/mergestat/pkg/sqlite"
	"github.com/prometheus/client_golang/prometheus/promhttp"
	"github.com/rs/zerolog"
	"go.riyazali.net/sqlite"
)

var (
	postgresConnection = os.Getenv("POSTGRES_CONNECTION")
	// baseCloneDir       = os.Getenv("BASE_CLONE_DIR")
	concurrencyEnv = os.Getenv("CONCURRENCY")
)

func repoLocator(cloneToken string) services.RepoLocator {
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

	var m *migrate.Migrate
	if m, err = migrate.New("file://migrations", postgresConnection); err != nil {
		logger.Err(err).Msgf("could not initialize migrations")
		os.Exit(1)
	}

	if err := m.Up(); err != nil {
		logger.Err(err).Msgf("could not run migrations")
		os.Exit(1)
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
		cost := float64(rlr.Cost)
		remaining := rlr.Remaining - 400 // include a 400 pt buffer
		untilResetDur := time.Until(rlr.ResetAt.Time)
		secondsRemaining := untilResetDur.Seconds()
		maxCallsPerSecond := (float64(remaining) / cost) / float64(secondsRemaining)
		delayDur := time.Duration(int(cost/maxCallsPerSecond)) * time.Second

		if delayDur < 800*time.Millisecond {
			delayDur = 800 * time.Millisecond
		}

		logger.Info().
			Int("cost", rlr.Cost).
			Int("remaining", rlr.Remaining).
			Time("resets", rlr.ResetAt.Time).
			Str("until-reset", untilResetDur.String()).
			Float64("delay-seconds", delayDur.Seconds()).
			Msgf("received rate limit info from GitHub API: %d remaining in next %ds", rlr.Remaining, int(secondsRemaining))

		time.Sleep(delayDur)
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

	// githubClientGetter := func() *githubv4.Client {
	// 	httpClient := oauth2.NewClient(context.Background(), oauth2.StaticTokenSource(
	// 		&oauth2.Token{AccessToken: os.Getenv("GITHUB_TOKEN")},
	// 	))
	// 	httpClient.Transport = &mutexRoundTripper{}
	// 	return githubv4.NewClient(httpClient)
	// }

	sqlite.Register(
		extensions.RegisterFn(
			options.WithExtraFunctions(),
			options.WithRepoLocator(locator.CachedLocator(repoLocator(os.Getenv("GITHUB_TOKEN")))), // TODO figure out token situation
			options.WithGitHub(),
			options.WithContextValue("githubToken", os.Getenv("GITHUB_TOKEN")),
			options.WithContextValue("githubPerPage", os.Getenv("GITHUB_PER_PAGE")),
			options.WithContextValue("githubRateLimit", os.Getenv("GITHUB_RATE_LIMIT")),
			options.WithGitHubRateLimitHandler(ratelimitHandler),
			options.WithGitHubPreRequestHook(githubPreRequestHook),
			options.WithGitHubPostRequestHook(githubPostRequestHook),
			// options.WithGitHubClientGetter(githubClientGetter),
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
	wg.Add(4)

	// TODO all of the following "params" should be configurable
	// either via the database/app or possibly with env vars
	go func() {
		defer wg.Done()
		scheduler.New(&logger, pool).Start(ctx, 10*time.Minute)
	}()

	go func() {
		defer wg.Done()
		repos.NewImporter(&logger, pool, db).Start(ctx, time.Minute)
	}()

	go func() {
		defer wg.Done()
		timeout.New(&logger, pool).Start(ctx, time.Minute)
	}()

	concurrency := 2
	if concurrencyEnv != "" {
		if concurrency, err = strconv.Atoi(concurrencyEnv); err != nil {
			logger.Err(err).Msgf("could not parse CONCURRENCY env into an int: %s", concurrencyEnv)
		}
	}

	go func() {
		defer wg.Done()
		syncer.New(pool, db, &logger, concurrency, 3*time.Second).Start(ctx)
	}()

	if os.Getenv("DEBUG") != "" {
		go func() {
			http.Handle("/metrics", promhttp.Handler())
			if err := http.ListenAndServe(":8080", nil); err != nil {
				logger.Err(err).Msgf("could not start HTTP handler")
			}
		}()
	}

	wg.Wait()
}
