package helper

import (
	"fmt"
	"net/url"
	"os"
	"strings"

	"github.com/rs/zerolog"
)

// getRepoOwnerAndRepoName extracts the owner and repo name from the github repo url
// and return the owner and repo respectively
func GetRepoOwnerAndRepoName(repoUrl string) (string, string, error) {
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

// createTempDir creates a temporary directory for any needed case with a specific path and pattern .
// returning the new directory path as string, a cleaup fn and err .
// if not provided will default to /tmp/randomNumber
func CreateTempDir(l *zerolog.Logger, envPath, pattern string) (string, func(), error) {
	tmpPath, err := os.MkdirTemp(os.Getenv(envPath), pattern)
	if err != nil {
		return "", nil, fmt.Errorf("temp dir: %w", err)
	}

	return tmpPath, func() {
		if err := os.RemoveAll(tmpPath); err != nil {
			l.Err(err).Msgf("error cleaning up repo at: %s, %v", tmpPath, err)
		}
	}, nil
}
