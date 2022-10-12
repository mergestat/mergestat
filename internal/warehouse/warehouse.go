package warehouse

import (
	"context"
	"io/ioutil"
	"log"
	"net/url"
	"strconv"
	"strings"
	"time"

	"github.com/cavaliergopher/grab/v3"
	"github.com/google/go-github/v47/github"
	"github.com/jackc/pgx/v4/pgxpool"
	"github.com/mergestat/fuse/internal/db"
	"github.com/rs/zerolog"
	"golang.org/x/oauth2"
)

type warehouse struct {
	githubClient *github.Client
	logger       *zerolog.Logger
	pool         *pgxpool.Pool
	db           *db.Queries
}

func New(ctx context.Context, db *db.Queries, pool *pgxpool.Pool, logger *zerolog.Logger, ghToken string) *warehouse {
	ts := oauth2.StaticTokenSource(
		&oauth2.Token{AccessToken: ghToken},
	)

	tc := oauth2.NewClient(ctx, ts)

	client := github.NewClient(tc)

	return &warehouse{
		githubClient: client,
		logger:       logger,
		pool:         pool,
		db:           db,
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
func (w *warehouse) getRepoOwnerAndRepoName(repoUrl string) (string, string, error) {
	var sr string
	var s []string
	parsedURL, err := url.Parse(repoUrl)

	if err != nil {
		return "", "", err
	}

	if strings.Compare(parsedURL.Scheme, "http") == 0 {
		sr = strings.Replace(repoUrl, "http://github.com/", "", -1)
		s := strings.Split(sr, "/")

		return s[0], s[1], nil

	}

	sr = strings.Replace(repoUrl, "https://github.com/", "", -1)
	s = strings.Split(sr, "/")

	return s[0], s[1], nil
}

func (w *warehouse) parseJobLogs(logsUrl *url.URL, filepath string) (string, error) {
	var bytes []byte
	_, err := grab.Get(filepath, logsUrl.String())
	if err != nil {
		log.Fatal(err)
		return "", err
	}

	if bytes, err = ioutil.ReadFile(filepath); err != nil {
		log.Fatal("Failed to read file: " + filepath)
	}

	return string(bytes), nil
}
