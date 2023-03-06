package helper

import (
	"context"
	"fmt"
	"net/url"
	"os"
	"strconv"
	"strings"
	"time"

	"github.com/google/go-github/v50/github"
	"github.com/mergestat/mergestat/queries"
	"github.com/rs/zerolog"
)

// GetRepoOwnerAndRepoName extracts the owner and repo name from a GitHub-like repo url
// and returns the owner and repo respectively
func GetRepoOwnerAndRepoName(repoUrl string) (string, string, error) {
	parsedURL, err := url.Parse(repoUrl)

	if err != nil {
		return "", "", err
	}

	t := strings.TrimPrefix(parsedURL.EscapedPath(), "/")
	s := strings.Split(t, "/")

	return s[0], s[1], nil
}

// CreateTempDir creates a temporary directory for any needed case with a specific path and pattern .
// returning the new directory path as string, a cleaup fn and err .
// if not provided will default to /tmp/randomNumber
func CreateTempDir(basePath, pattern string) (string, func() error, error) {
	tmpPath, err := os.MkdirTemp(basePath, pattern)
	if err != nil {
		return "", nil, fmt.Errorf("temp dir: %w", err)
	}

	return tmpPath, func() error {
		if err := os.RemoveAll(tmpPath); err != nil {
			return err
		}
		return nil
	}, nil
}

// GetInt32FromInt is a helper function created to handle mutations of a *int value
// to *int32 value, every nil value should be ignored to return a new *int32 value
func GetInt32FromInt(i *int) *int32 {
	var i32 int32
	if i == nil {
		return new(int32)
	}

	i32 = int32(*i)

	return &i32
}

// GetRepositoryURL is a helper function to get the url value of the
// repository type ,if a repo is nil we return a new *string value instead
func GetRepositoryURL(r *github.Repository) *string {
	if r == nil {
		return new(string)
	}

	return r.URL
}

func RestRatelimitHandler(ctx context.Context, resp *github.Response, l *zerolog.Logger, qry queries.Querier, impRunning bool) {
	var remaining = resp.Rate.Remaining
	var delay = 800 * time.Millisecond
	var untilResetDur = time.Until(resp.Rate.Reset.Time)
	secondsRemaining := untilResetDur.Seconds()

	// we check whether an import process is the  one calling this handler
	// or not,if it is we omit this clause.
	if !impRunning {
		if err := WaitForImports(ctx, l, qry); err != nil {
			l.Err(err).Msgf("error waiting for imports:%v", err)
		}
	}

	if remaining <= 400 {
		delay = time.Duration(untilResetDur)
		l.Info().
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

// WaitForImports waits 2 seconds each time we find a running import.
// this behavior will continue until no import is running.
func WaitForImports(ctx context.Context, l *zerolog.Logger, qry queries.Querier) error {
	var imp int64
	var err error
	if imp, err = qry.CheckRunningImps(ctx); err != nil {
		return err
	}

	if imp == 0 {
		return nil
	}

	for {
		select {
		case <-ctx.Done():
		case <-time.After(2 * time.Second):

			//TODO:(ramiro) should we log the imp ids ?
			l.Info().Msg("waiting for import to finish")

			if imp, err = qry.CheckRunningImps(ctx); err != nil {
				return err
			}

			if imp == 0 {
				return nil
			}
		}
	}

}
