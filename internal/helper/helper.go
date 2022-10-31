package helper

import (
	"fmt"
	"net/url"
	"os"
	"strings"
)

// GetRepoOwnerAndRepoName extracts the owner and repo name from a GitHub repo url
// and returns the owner and repo respectively
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
