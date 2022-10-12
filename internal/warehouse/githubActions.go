package warehouse

import (
	"context"
	"encoding/json"
	"errors"
	"fmt"
	"os"
	"strconv"

	"github.com/google/go-github/v47/github"
	"github.com/google/uuid"
	"github.com/jackc/pgtype"
	"github.com/jackc/pgx/v4"
	"github.com/mergestat/fuse/internal/db"
)

func (w *warehouse) GithubActions(ctx context.Context, j *db.DequeueSyncJobRow) error {
	var (
		owner    string
		repoName string
		resp     *github.Response
		err      error
	)

	owner, repoName, err = w.getRepoOwnerAndRepoName(j.Repo)
	if err != nil {
		return err
	}

	// we check the rate limit before any call to the GitHub API
	_, resp, err = w.githubClient.RateLimits(ctx)

	if err != nil {
		return err
	}

	w.restRatelimitHandler(ctx, resp)

	w.logger.Info().Msgf("getting all github actions from repo %s", repoName)

	err = w.handleWorkflows(ctx, owner, repoName, j.RepoID)

	if err != nil {
		return err
	}

	w.logger.Info().Msgf("finished getting all github actions")
	return nil
}

func (w *warehouse) handleWorkflows(ctx context.Context, owner, repo string, repoID uuid.UUID) error {
	opt := &github.ListWorkflowRunsOptions{
		ListOptions: github.ListOptions{PerPage: 30},
	}

	// we get a page of 30 workflows until next page is 0
	for {
		workflowsPage, resp, err := w.githubClient.Actions.ListWorkflows(ctx, owner, repo, &opt.ListOptions)
		if err != nil {
			return err
		}

		w.restRatelimitHandler(ctx, resp)

		if *workflowsPage.TotalCount > 0 && len(workflowsPage.Workflows) > 0 {
			if err := w.handleWorflowUpsert(ctx, workflowsPage.Workflows, repoID); err != nil {
				return err
			}

			if err = w.handleWorkflowRuns(ctx, owner, repo, repoID, workflowsPage.Workflows); err != nil {
				return err
			}
		}

		if resp.NextPage == 0 {
			break
		}

		opt.Page = resp.NextPage

	}
	return nil
}

func (w *warehouse) handleWorkflowRuns(ctx context.Context, owner, repo string, repoID uuid.UUID, workflowsPage []*github.Workflow) error {
	var resp *github.Response
	opt := &github.ListWorkflowRunsOptions{
		ListOptions: github.ListOptions{PerPage: 30},
	}

	for _, workflow := range workflowsPage {
		w.logger.Info().Msgf("getting workflow runs and workflow jobs for workflow %s", *workflow.Name)
		// we get a page of 30 workflow runs until next page is 0
		for {

			workflowRunsPage, response, err := w.githubClient.Actions.ListWorkflowRunsByID(ctx, owner, repo, *workflow.ID, opt)
			if err != nil {
				return err
			}

			resp = response

			if *workflowRunsPage.TotalCount > 0 && len(workflowRunsPage.WorkflowRuns) > 0 {

				if err := w.handleUpsertWorkflowRuns(ctx, workflowRunsPage.WorkflowRuns, repoID); err != nil {
					return err
				}

				if err := w.handleWorkflowRunsJobs(ctx, owner, repo, repoID, workflowRunsPage.WorkflowRuns); err != nil {
					return err
				}
			}

			w.restRatelimitHandler(ctx, resp)

			if response.NextPage == 0 {
				break
			}

			opt.Page = resp.NextPage

		}
		opt.Page = 0

	}

	return nil
}

func (w *warehouse) handleWorkflowRunsJobs(ctx context.Context, owner, repo string, repoID uuid.UUID, workflowRunsPage []*github.WorkflowRun) error {

	var resp *github.Response
	opt := &github.ListWorkflowJobsOptions{
		ListOptions: github.ListOptions{PerPage: 30},
	}

	for _, workflowRun := range workflowRunsPage {

		// we get a page of 30 workflow run jobs until next page is 0
		for {
			workflowRunJobsPage, response, err := w.githubClient.Actions.ListWorkflowJobs(ctx, owner, repo, *workflowRun.ID, opt)

			resp = response

			if err != nil {
				return err
			}

			if *workflowRunJobsPage.TotalCount > 0 && len(workflowRunJobsPage.Jobs) > 0 {
				if err := w.handleWorkflowRunsJobLogs(ctx, owner, repo, repoID, workflowRunJobsPage.Jobs); err != nil {
					return err
				}
			}

			w.restRatelimitHandler(ctx, resp)

			if response.NextPage == 0 {
				break
			}

			opt.Page = resp.NextPage

		}

		// we reset the page for the next run
		opt.Page = 0
	}

	return nil
}

func (w *warehouse) handleWorkflowRunsJobLogs(ctx context.Context, owner, repo string, repoID uuid.UUID, workflowRunJobsPage []*github.WorkflowJob) error {
	var resp *github.Response
	var log string

	// we iterate over the workflowrunJobs page to get each log
	for i, workflowJob := range workflowRunJobsPage {

		workflowJobLog, response, err := w.githubClient.Actions.GetWorkflowJobLogs(ctx, owner, repo, *workflowJob.ID, true)

		resp = response
		if err != nil {
			return err
		}

		if len(workflowJobLog.String()) > 0 {
			log, err = w.parseJobLogs(workflowJobLog, strconv.Itoa(int(*workflowJob.ID)))
			if err != nil {
				return err
			}
		}

		if err := os.RemoveAll(strconv.Itoa(i)); err != nil {
			w.logger.Err(err)
			return err
		}

		w.restRatelimitHandler(ctx, resp)

		if err := w.handleUpsertWorkflowJobs(ctx, workflowJob, log, repoID); err != nil {
			return err
		}

	}
	return nil
}

func (w *warehouse) handleWorflowUpsert(ctx context.Context, workflows []*github.Workflow, repoID uuid.UUID) error {

	var tx pgx.Tx
	var err error

	if tx, err = w.pool.BeginTx(ctx, pgx.TxOptions{}); err != nil {
		return fmt.Errorf("begin tx: %w", err)
	}

	defer func() {
		if err := tx.Rollback(ctx); err != nil {
			if !errors.Is(err, pgx.ErrTxClosed) {
				w.logger.Err(err).Msgf("could not rollback transaction")
			}
		}
	}()

	for _, workflow := range workflows {
		if err := w.db.WithTx(tx).UpsertWorkflowsInPublic(ctx, db.UpsertWorkflowsInPublicParams{
			Repoid:         repoID,
			ID:             *workflow.ID,
			Workflownodeid: *workflow.NodeID,
			Name:           *workflow.Name,
			Path:           *workflow.Path,
			State:          *workflow.State,
			Createdat:      workflow.CreatedAt.Time,
			Updatedat:      workflow.UpdatedAt.Time,
			Url:            *workflow.URL,
			Htmlurl:        *workflow.HTMLURL,
			Badgeurl:       *workflow.BadgeURL,
		}); err != nil {
			return err
		}
	}

	return tx.Commit(ctx)
}

func (w *warehouse) handleUpsertWorkflowRuns(ctx context.Context, workflowRunPage []*github.WorkflowRun, repoID uuid.UUID) error {
	var tx pgx.Tx
	var err error

	if tx, err = w.pool.BeginTx(ctx, pgx.TxOptions{}); err != nil {
		return fmt.Errorf("begin tx: %w", err)
	}

	defer func() {
		if err := tx.Rollback(ctx); err != nil {
			if !errors.Is(err, pgx.ErrTxClosed) {
				w.logger.Err(err).Msgf("could not rollback transaction")
			}
		}
	}()

	for _, workflowRun := range workflowRunPage {

		pullRequestsBytes, err := json.Marshal(&workflowRun.PullRequests)

		if err != nil {
			return err
		}

		headCommitBytes, err := json.Marshal(&workflowRun.HeadCommit)

		if err != nil {
			return err
		}

		if err := w.db.WithTx(tx).UpserWorkflowRuns(ctx, db.UpserWorkflowRunsParams{
			RepoID:            repoID,
			ID:                *workflowRun.ID,
			Workflowrunnodeid: *workflowRun.NodeID,
			Name:              *workflowRun.Name,
			Headbranch:        *workflowRun.HeadBranch,
			Runnumber:         int32(*workflowRun.RunNumber),
			Runattemp:         int32(*workflowRun.RunAttempt),
			Event:             *workflowRun.Event,
			Status:            *workflowRun.Status,
			Conclusion:        *workflowRun.Conclusion,
			Workflowid:        *workflowRun.WorkflowID,
			Checksuiteid:      *workflowRun.CheckSuiteID,
			Checksuitenodeid:  *workflowRun.CheckSuiteNodeID,
			Url:               *workflowRun.URL,
			Htmlurl:           *workflowRun.HTMLURL,
			Pullrequest: pgtype.JSONB{
				Status: pgtype.Present,
				Bytes:  pullRequestsBytes,
			},
			Createdat:     workflowRun.CreatedAt.Time,
			Updatedat:     workflowRun.UpdatedAt.Time,
			Runstartedat:  workflowRun.RunStartedAt.Time,
			Jobsurl:       *workflowRun.JobsURL,
			Logsurl:       *workflowRun.LogsURL,
			Checksuiteurl: *workflowRun.CheckSuiteURL,
			Artifactsurl:  *workflowRun.ArtifactsURL,
			Cancelurl:     *workflowRun.CancelURL,
			Rerunurl:      *workflowRun.RerunURL,
			Headcommit: pgtype.JSONB{
				Status: pgtype.Present,
				Bytes:  headCommitBytes,
			},
			Workflowurl:       *workflowRun.WorkflowURL,
			Repositoryurl:     *workflowRun.Repository.URL,
			Headrepositoryurl: *workflowRun.HeadRepository.URL,
		}); err != nil {
			return err
		}

	}

	return tx.Commit(ctx)
}

func (w *warehouse) handleUpsertWorkflowJobs(ctx context.Context, workflowJob *github.WorkflowJob, log string, repoID uuid.UUID) error {

	var tx pgx.Tx
	var err error

	if tx, err = w.pool.BeginTx(ctx, pgx.TxOptions{}); err != nil {
		return fmt.Errorf("begin tx: %w", err)
	}

	defer func() {
		if err := tx.Rollback(ctx); err != nil {
			if !errors.Is(err, pgx.ErrTxClosed) {
				w.logger.Err(err).Msgf("could not rollback transaction")
			}
		}
	}()

	stepsBytes, err := json.Marshal(&workflowJob.Steps)

	if err != nil {
		return err
	}

	labelsBytes, err := json.Marshal(&workflowJob.Labels)

	if err != nil {
		return err
	}

	if err := w.db.WithTx(tx).UpsertWorkflowRunJobs(ctx, db.UpsertWorkflowRunJobsParams{
		Repoid:       repoID,
		ID:           *workflowJob.ID,
		Runid:        *workflowJob.RunID,
		Log:          log,
		Runurl:       *workflowJob.RunURL,
		Jobnodeid:    *workflowJob.NodeID,
		Headsha:      *workflowJob.HeadSHA,
		Url:          *workflowJob.URL,
		Htmlurl:      *workflowJob.HTMLURL,
		Status:       *workflowJob.Status,
		Conclusion:   *workflowJob.Conclusion,
		Startedat:    workflowJob.StartedAt.Time,
		Completedat:  workflowJob.CompletedAt.Time,
		Workflowname: *workflowJob.Name,
		Steps: pgtype.JSONB{
			Status: pgtype.Present,
			Bytes:  stepsBytes,
		},
		Checkrunurl: *workflowJob.CheckRunURL,
		Labels: pgtype.JSONB{
			Status: pgtype.Present,
			Bytes:  labelsBytes,
		},
		Runnerid:        int32(*workflowJob.RunnerID),
		Runnergroupid:   *workflowJob.RunnerGroupID,
		Runnergroupname: *workflowJob.RunnerGroupName,
	}); err != nil {
		return err
	}

	return tx.Commit(ctx)
}
