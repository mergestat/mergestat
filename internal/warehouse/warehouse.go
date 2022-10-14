package warehouse

import (
	"context"
	"fmt"
	"io/ioutil"
	"net/url"
	"os"
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

// getRepoOwnerAndRepoName extracts the owner and repo name from the github repo url
// and return the owner and repo respectively
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

func (w *warehouse) parseJobLogs(logsUrl *url.URL, filepathDir string, n int) (string, error) {

	var bytes []byte
	var filepath = filepathDir + "mergestat-workflow-log-" + fmt.Sprintf("%d", n)
	_, err := grab.Get(filepath, logsUrl.String())
	if err != nil {
		return "", err
	}

	if bytes, err = ioutil.ReadFile(filepathDir); err != nil {
		return "", fmt.Errorf("failed to read file: %s", filepath)
	}

	return string(bytes), nil
}

func (w *warehouse) createTempDirForGitClone() (string, func(), error) {
	tmpPath, err := os.MkdirTemp(os.Getenv("GIT_WORKFLOW_LOGS_PATH"), "")

	if err != nil {
		return "", nil, fmt.Errorf("temp dir: %w", err)
	}

	return tmpPath, func() {
		if err := os.RemoveAll(tmpPath); err != nil {
			w.logger.Err(err).Msgf("error cleaning up repo at: %s, %v", tmpPath, err)
		}
	}, nil
}

func (w *warehouse) getPaginationOpt() (int, error) {
	var paginationEnv string

	if paginationEnv := os.Getenv("GIT_WORKFLOW_PAGINATION"); paginationEnv == "" {
		return 30, nil
	}

	paginationOpt, err := strconv.Atoi(paginationEnv)

	if err != nil {
		return 0, err
	}

	return paginationOpt, nil
}
