// Package podman provides a sqlq.Handler that uses podman
// to execute user-defined pipelines.
package podman

import (
	"bufio"
	"bytes"
	"context"
	"encoding/json"
	"fmt"
	"io"
	"net/url"
	"os"
	"os/exec"
	"sync"
	"time"

	"github.com/go-git/go-billy/v5/osfs"
	"github.com/go-git/go-git/v5"
	"github.com/go-git/go-git/v5/plumbing/cache"
	"github.com/go-git/go-git/v5/plumbing/transport"
	"github.com/go-git/go-git/v5/plumbing/transport/http"
	"github.com/go-git/go-git/v5/plumbing/transport/ssh"
	"github.com/go-git/go-git/v5/storage/filesystem"
	"github.com/google/uuid"
	"github.com/mergestat/mergestat/internal/db"
	"github.com/mergestat/mergestat/internal/helper"
	"github.com/mergestat/sqlq"
	"github.com/pkg/errors"
	"github.com/rs/zerolog"
)

// ContainerSync implements a sqlq.Handler that utilizes a Container-based execution environment
// to run user-provided, custom sync jobs.
func ContainerSync(pgUrl string, workerLogger *zerolog.Logger, querier *db.Queries) sqlq.Handler {
	type ImageMetadata = struct{ Labels map[string]string } // used to un-marshal output from podman-image-inspect

	postgresUrl, _ := url.Parse(pgUrl)
	postgresUrl.Scheme = "postgresql"

	return sqlq.HandlerFunc(func(ctx context.Context, job *sqlq.Job) (err error) {
		var logger = job.Logger()
		go job.SendKeepAlive(ctx, job.KeepAlive-2*time.Second) //nolint:errcheck

		l := workerLogger.With().
			Str("job-id", job.ID.String()).
			Str("queue", string(job.Queue)).
			Logger()

		var params struct{ ID uuid.UUID }
		if err = json.Unmarshal(job.Parameters, &params); err != nil {
			logger.Errorf("failed to unmarshal params: %s", err.Error())
			return errors.Wrapf(err, "failed to unmarshal params")
		}

		var containerSync db.FetchContainerSyncRow
		if containerSync, err = querier.FetchContainerSync(ctx, params.ID); err != nil {
			logger.Errorf("failed to fetch container sync: %s", err.Error())
			return errors.Wrapf(err, "failed to fetch container sync")
		}

		// one goes to the worker log, the other to the DB
		l.Debug().Msgf("running sync %s", containerSync.ID)
		logger.Debugf("running sync %s", containerSync.ID)

		var repo db.Repo
		if repo, err = querier.GetRepoById(ctx, containerSync.RepoID); err != nil {
			return errors.Wrapf(err, "failed to fetch repository")
		}

		// used below to send stdout and stderr to job logs
		infof, debugf := func(str string) { logger.Info(str) }, func(str string) { logger.Debug(str) }
		// used below to send stdout and stderr to worker logs
		wInfof, wDebugf := func(str string) { l.Info().Msg(str) }, func(str string) { l.Debug().Msg(str) }

		var image = fmt.Sprintf("%s:%s", containerSync.ImageUrl, containerSync.ImageVersion)
		var url = fmt.Sprintf("docker://%s", image)
		{ // pull the container image locally
			logger.Infof("pulling image %s", url)
			var pull = podman(ctx, "pull", url)
			stdout, _ := pull.StdoutPipe()
			stderr, _ := pull.StderrPipe()
			if err = pull.Start(); err != nil {
				logger.Errorf("failed to pull image: %s", err.Error())
				return errors.Wrapf(err, "failed to pull image")
			}

			var wg sync.WaitGroup
			wg.Add(2)
			go func() { defer wg.Done(); log(wInfof, stdout) }()
			go func() { defer wg.Done(); log(wDebugf, stderr) }()

			wg.Wait()
			if err = pull.Wait(); err != nil {
				logger.Errorf("failed to pull image: %s", err.Error())
				return errors.Wrapf(err, "failed to pull image")
			}
		}

		// output is in form of an array
		var metadata []ImageMetadata
		{ // read image metadata
			var inspect = podman(ctx, "image", "inspect", image)
			stdout, _ := inspect.StdoutPipe()
			if err = inspect.Start(); err != nil {
				logger.Errorf("failed to inspect image: %s", err.Error())
				return errors.Wrapf(err, "failed to inspect image")
			}

			if err = json.NewDecoder(stdout).Decode(&metadata); err != nil {
				logger.Errorf("failed to inspect image: %s", err.Error())
				return errors.Wrapf(err, "failed to inspect image")
			}

			if err = inspect.Wait(); err != nil {
				logger.Errorf("failed to inspect image: %s", err.Error())
				return errors.Wrapf(err, "failed to inspect image")
			}
		}

		{ // run the image locally
			l.Info().Msgf("running image %s", url)
			logger.Infof("running image %s", url)

			var username, token string
			if username, token, err = querier.FetchCredential(ctx, repo.Provider); err != nil {
				return err
			}

			var environment = make(map[string]string)
			environment["MERGESTAT_REPO_ID"] = repo.ID.String()
			environment["MERGESTAT_REPO_URL"] = repo.Repo
			environment["MERGESTAT_POSTGRES_URL"] = postgresUrl.String()
			environment["MERGESTAT_PROVIDER_ID"] = repo.Provider.String()
			environment["MERGESTAT_AUTH_USERNAME"] = username
			environment["MERGESTAT_AUTH_TOKEN"] = token
			environment["MERGESTAT_PARAMS"] = string(containerSync.Params.Bytes)

			// add user-configured environment variables
			var userEnv map[string]string
			if userEnv, err = querier.FetchSyncVars(ctx, containerSync.ID); err != nil {
				l.Err(err).Msg("failed to read user provided environment variables")
				return err
			}

			for key, value := range userEnv {
				environment[key] = value
			}

			var env bytes.Buffer
			for key, value := range environment {
				_, _ = fmt.Fprintf(&env, "%s=%s\n", key, value)
			}

			var envFile string
			if envFile, err = writeToTempFile(env.Bytes()); err != nil {
				return errors.Wrapf(err, "failed to create file with environment variables")
			}
			defer func() {
				if err := os.Remove(envFile); err != nil {
					workerLogger.Err(err).Msg("failed to remove temporary file")
				}
			}()

			var args []string
			args = append(args, "run", "--quiet", "--rm")
			args = append(args, "--restart", "on-failure") // run never pulls an image!
			args = append(args, "--pull", "never")         // run never pulls an image!
			args = append(args, "--env-file", envFile)     // set environment variables from envFile
			args = append(args, "--network", "host")       // use host networking

			// if opted-in by setting com.mergestat.sync.clone to true, we perform a full clone
			// of the repository to a temporary directory and mount that directory into the container
			if opt, exists := metadata[0].Labels["com.mergestat.sync.clone"]; exists && opt == "true" {
				var tmpPath string
				var cleanup func() error
				// create a new temporary location to clone the repository
				tmpPath, cleanup, err = helper.CreateTempDir(os.Getenv("GIT_CLONE_PATH"), fmt.Sprintf("mergestat-repo-%s-*", repo.ID.String()))
				if err != nil {
					logger.Errorf("failed to create directory for cloning: %s", err.Error())
					return errors.Wrapf(err, "failed to create directory")
				}
				defer cleanup() //nolint:errcheck

				if err = clone(ctx, logger, querier, tmpPath, repo); err != nil { // execute the clone operation
					logger.Errorf("failed to clone: %s", err.Error())
					return errors.Wrapf(err, "failed to clone")
				}

				// TODO(patrickdevivo) we could use `com.mergestat.sync.clonePath` to specify a path to mount the repo into once cloned.
				logger.Infof("cloned repository to %s and mounting it at /mergestat/repo", tmpPath)
				args = append(args, "-v", fmt.Sprintf("%s:/mergestat/repo", tmpPath)) // mount the cloned repository under /mergestat/repo
			}

			args = append(args, url) // the url of the image to run

			var run = podman(ctx, args...)
			stdout, _ := run.StdoutPipe()
			stderr, _ := run.StderrPipe()
			if err = run.Start(); err != nil {
				logger.Errorf("failed to run image: %s", err.Error())
				return errors.Wrapf(err, "failed to run image")
			}

			var wg sync.WaitGroup
			wg.Add(2)
			go func() { defer wg.Done(); log(infof, stdout) }()
			go func() { defer wg.Done(); log(debugf, stderr) }()

			wg.Wait()
			if err = run.Wait(); err != nil {
				logger.Errorf("failed to run image: %s", err.Error())
				return errors.Wrapf(err, "failed to run image")
			}

			logger.Infof("finished running image %s", url)
		}

		return nil
	})
}

// podman creates a new exec.Cmd to execute podman. It's primarily used to improve readability of code above :)
func podman(ctx context.Context, args ...string) *exec.Cmd {
	return exec.CommandContext(ctx, "podman", args...)
}

// log sends lines from src to the given sqlq.Logger
func log(fn func(string), src io.Reader) {
	var scanner = bufio.NewScanner(src)
	// TODO(patrickdevivo,riyaz-ali) we think there could be a bug here where the scanner.Scan() call blocks forever/for a long time
	// when the output of the container doesn't include a newline character. We should investigate this further.
	// See here: https://github.com/golang/go/issues/35474. part of this might be we need to handle scanner.Err() as well.
	for scanner.Scan() {
		fn(scanner.Text())
	}
}

// clone clones the repository into the given path.
func clone(ctx context.Context, logger *sqlq.Logger, q *db.Queries, path string, repo db.Repo) (err error) {
	logger.Infof("pulling git repository: %s", repo.Repo)

	// fetch the username and token for the provider
	var username, token string
	if username, token, err = q.FetchCredential(ctx, repo.Provider); err != nil {
		return err
	}

	var endpoint *transport.Endpoint
	if endpoint, err = transport.NewEndpoint(repo.Repo); err != nil {
		return errors.Wrapf(err, "failed to parse url")
	}

	var auth transport.AuthMethod
	if endpoint.Protocol == "ssh" {
		if username == "" {
			username = endpoint.User // in case the username is encoded into the url (very common)
		}

		if auth, err = ssh.NewPublicKeys(username, []byte(token), ""); err != nil {
			return errors.Wrapf(err, "failed to parse ssh key")
		}
	} else if endpoint.Protocol == "http" || endpoint.Protocol == "https" || endpoint.Protocol == "git" {
		auth = &http.BasicAuth{Username: username, Password: token}
	}

	// fs and target are different! target is a subdirectory of fs. target stores git objects (like commits, etc.)
	// whereas fs contains the working directory (a local checkout) of the cloned repository.
	var fs = osfs.New(path)
	var dotgit, _ = fs.Chroot(".git")
	var target = filesystem.NewStorage(dotgit, cache.NewObjectLRUDefault())

	var repository *git.Repository
	if repository, err = git.Open(target, fs); err != nil && !errors.Is(err, git.ErrRepositoryNotExists) {
		// failed to open existing repository!
		logger.Errorf("failed to open repository: %s", err.Error())
		return errors.Wrapf(err, "failed to open repository")
	} else if errors.Is(err, git.ErrRepositoryNotExists) {
		// repository doesn't exist locally! perform a fresh clone
		var opts = &git.CloneOptions{URL: endpoint.String(), Auth: auth}
		if _, err = git.CloneContext(ctx, target, fs, opts); err != nil {
			logger.Errorf("failed to clone repository: %s", err.Error())
			return errors.Wrapf(err, "failed to clone repository")
		}
		logger.Infof("finished git clone successfully: %s", repo.Repo)
	} else {
		// repository exists! fetch from remote to update it
		var opts = &git.FetchOptions{RemoteName: "origin", Auth: auth}
		if err = repository.FetchContext(ctx, opts); err != nil {
			logger.Errorf("failed to fetch newer changes from origin: %s", err.Error())
			return errors.Wrapf(err, "failed to fetch newer changes from origin")
		}
		logger.Infof("finished git fetch successfully: %s", repo.Repo)
	}
	return nil
}

func writeToTempFile(data []byte) (_ string, err error) {
	var tempFile *os.File
	if tempFile, err = os.CreateTemp(os.TempDir(), "mergestat-*"); err != nil {
		return "", err
	}
	defer tempFile.Close()

	if _, err = io.Copy(tempFile, bytes.NewReader(data)); err != nil {
		return "", err
	}

	return tempFile.Name(), tempFile.Close()

}

// NewContainerSync creates a new sqlq.JobDescription for the given sync id.
func NewContainerSync(id uuid.UUID) *sqlq.JobDescription {
	var params = struct{ ID uuid.UUID }{ID: id}
	var pb, _ = json.Marshal(params)

	return sqlq.NewJobDesc("container/sync", sqlq.WithParameters(pb))
}
