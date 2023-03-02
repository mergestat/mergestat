// Package podman provides a sqlq.Handler that uses podman
// to execute user-defined pipelines.
package podman

import (
	"bufio"
	"context"
	"encoding/json"
	"fmt"
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
	"io"
	"os"
	"os/exec"
	"sync"
)

// ContainerSync implements a sqlq.Handler that utilizes a Container-based execution environment
// to run user-provided, custom sync jobs.
func ContainerSync(querier *db.Queries) sqlq.Handler {
	return sqlq.HandlerFunc(func(ctx context.Context, job *sqlq.Job) (err error) {
		var logger = job.Logger()
		go job.SendKeepAlive(ctx, job.KeepAlive)

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
		logger.Infof("running sync %s", containerSync.ID)

		var repo db.Repo
		if repo, err = querier.GetRepoById(ctx, containerSync.RepoID); err != nil {
			return errors.Wrapf(err, "failed to fetch repository")
		}

		// create a new temporary location to clone the repository
		tmpPath, cleanup, err := helper.CreateTempDir(os.Getenv("GIT_CLONE_PATH"), "mergestat-repo-")
		if err != nil {
			logger.Errorf("failed to create directory for cloning: %s", err.Error())
			return errors.Wrapf(err, "failed to create directory")
		}
		defer cleanup()

		// execute the clone operation
		if err = clone(ctx, logger, querier, tmpPath, repo); err != nil {
			logger.Errorf("failed to clone: %s", err.Error())
			return errors.Wrapf(err, "failed to clone")
		}

		// used below to send stdout and stderr to job logs
		infof, warnf := func(str string) { logger.Info(str) }, func(str string) { logger.Warn(str) }

		var url = fmt.Sprintf("docker://%s", containerSync.ImageUrl)
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
			go func() { defer wg.Done(); log(infof, stdout) }()
			go func() { defer wg.Done(); log(warnf, stderr) }()

			wg.Wait()
			if err = pull.Wait(); err != nil {
				logger.Errorf("failed to execute image: %s", err.Error())
			}
		}

		{ // run the image locally
			logger.Infof("running image %s", url)
			var run = podman(ctx, "run", "--rm", "--quiet", "--pull", "never", "-v", fmt.Sprintf("%s:/src", tmpPath), "-w", "/src", url)
			stdout, _ := run.StdoutPipe()
			stderr, _ := run.StderrPipe()
			if err = run.Start(); err != nil {
				logger.Errorf("failed to run image: %s", err.Error())
				return errors.Wrapf(err, "failed to run image")
			}

			var wg sync.WaitGroup
			wg.Add(2)
			go func() { defer wg.Done(); log(infof, stdout) }()
			go func() { defer wg.Done(); log(warnf, stderr) }()

			wg.Wait()
			if err = run.Wait(); err != nil {
				logger.Errorf("failed to run image: %s", err.Error())
			}
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
		if repository, err = git.CloneContext(ctx, target, fs, opts); err != nil {
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

// NewContainerSync creates a new sqlq.JobDescription for the given sync id.
func NewContainerSync(id uuid.UUID) *sqlq.JobDescription {
	var params = struct{ ID uuid.UUID }{ID: id}
	var pb, _ = json.Marshal(params)

	return sqlq.NewJobDesc("container/sync", sqlq.WithParameters(pb))
}