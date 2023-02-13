package warehouse

import (
	"context"
	"fmt"
	"net/url"
	"os"
	"strconv"
	"time"

	"github.com/cavaliergopher/grab/v3"
	"github.com/google/go-github/v47/github"
	"github.com/jackc/pgx/v4/pgxpool"
	"github.com/mergestat/mergestat/internal/db"
	"github.com/mergestat/mergestat/internal/pool"
	"github.com/mergestat/mergestat/queries"
	"github.com/rs/zerolog"
	"golang.org/x/oauth2"
)

type warehouse struct {
	githubClient *github.Client
	logger       *zerolog.Logger
	pool         pool.Pooler
	db           queries.Querier
}

func New(ctx context.Context, db *db.Queries, pgpool *pgxpool.Pool, logger *zerolog.Logger, ghToken string) *warehouse {
	ts := oauth2.StaticTokenSource(
		&oauth2.Token{AccessToken: ghToken},
	)

	tc := oauth2.NewClient(ctx, ts)
	if len(ghToken) <= 0 {
		tc = nil
	}

	client := github.NewClient(tc)
	pool := pool.Init(pgpool)
	queries := queries.NewQuerier(db)

	return &warehouse{
		githubClient: client,
		logger:       logger,
		pool:         pool,
		db:           queries,
	}
}

func (w *warehouse) restRatelimitHandler(ctx context.Context, resp *github.Response) {
	var remaining = resp.Rate.Remaining
	var delay = 800 * time.Millisecond
	var untilResetDur = time.Until(resp.Rate.Reset.Time)
	secondsRemaining := untilResetDur.Seconds()

	if remaining <= 400 {
		delay = time.Duration(untilResetDur)
		w.logger.Info().
			Int("remaining", remaining).
			Time("resets", resp.Rate.Reset.Time).
			Str("until-reset", untilResetDur.String()).
			Float64("delay-seconds", float64(delay)).
			Msgf("received rate limit info from GitHub API: %d remaining in next %ds. Delaying %ss", remaining, int(secondsRemaining), strconv.FormatFloat(delay.Seconds(), 'f', 2, 64))

	}

	// Allow for shutdown during the delay
	select {
	case <-ctx.Done():
	case <-time.After(delay):
	}

}

func (w *warehouse) parseJobLogs(logsUrl *url.URL, filepathDir string, n int) (string, error) {

	var bytes []byte
	var filepath = filepathDir + "-mergestat-workflow-log-" + fmt.Sprintf("%d", n)

	_, err := grab.Get(filepath, logsUrl.String())
	if err != nil {
		return "", err
	}

	if bytes, err = os.ReadFile(filepath); err != nil {
		return "", fmt.Errorf("failed to read file: %s", filepath)
	}

	return string(bytes), nil
}

// getPaginationOpt get the pagination env values for each workflow,runs and jobs
// if these are not provided  will default to 30
func (w *warehouse) getPaginationOpt(pagination string) (int, error) {
	var paginationEnv string

	if paginationEnv = os.Getenv(pagination); len(paginationEnv) <= 0 {
		return 30, nil
	}

	paginationOpt, err := strconv.Atoi(paginationEnv)

	if err != nil {
		return 0, err
	}

	return paginationOpt, nil
}
