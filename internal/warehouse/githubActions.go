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
		owner              string
		repoName           string
		workflows          *github.Workflows
		workflowRunsArr    []*github.WorkflowRun
		workflowRunJobsArr []*github.WorkflowJob
		resp               *github.Response
		err                error
	)

	owner, repoName, err = w.getRepoOwnerAndRepoName(j.Repo)

	if err != nil {
		return err
	}

	var tx pgx.Tx

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

	//initialRate limit checker
	_, resp, err = w.githubClient.RateLimits(ctx)

	if err != nil {
		return err
	}

	w.restRatelimitHandler(ctx, resp)
	// we get all available workflows
	workflows, resp, err = w.handleWorkflows(ctx, owner, repoName, j.RepoID, tx)

	w.logger.Info().Msgf("remaining quota %s", resp.Rate.Remaining)
	if err != nil {
		return err
	}
	// we handle all runs for each workflow
	if *workflows.TotalCount > 0 {
		workflowRunsArr, resp, err = w.handleWorkflowRuns(ctx, owner, repoName, workflows)

		w.logger.Info().Msgf("remaining quota %s", resp.Rate.Remaining)

		if err != nil {
			return err
		}
		// we handle all jobs for all workflow runs
		if len(workflowRunsArr) > 0 {
			w.logger.Info().Msg("getting workflow runs array")
			workflowRunJobsArr, resp, err = w.handleWorkflowRunsJobs(ctx, owner, repoName, workflowRunsArr, j.RepoID, tx)
			w.logger.Info().Msgf("remaining quota %s", resp.Rate.Remaining)

			if err != nil {
				return err
			}
			// we handle all job logs for each run
			if len(workflowRunJobsArr) > 0 {
				err = w.handleWorkflowRunsJobLogs(ctx, tx, owner, repoName, workflowRunJobsArr, j.RepoID)
				if err != nil {
					return err
				}
			}

		}

	}

	w.logger.Info().Msgf("finished getting github Actions")
	return tx.Commit(ctx)
}

// handleWorkflows
func (w *warehouse) handleWorkflows(ctx context.Context, owner, repo string, repoID uuid.UUID, tx pgx.Tx) (*github.Workflows, *github.Response, error) {
	w.logger.Info().Msgf("getting all github workflows from repo %s", repo)
	workflows, resp, err := w.githubClient.Actions.ListWorkflows(ctx, owner, repo, nil)

	w.restRatelimitHandler(ctx, resp)

	if *workflows.TotalCount > 0 {
		for _, workflow := range workflows.Workflows {
			if err := w.db.WithTx(tx).UpsertWorkflowsInPublic(ctx, db.UpsertWorkflowsInPublicParams{
				Repoid:         repoID,
				ID:             int32(*workflow.ID),
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
				return workflows, resp, err
			}
		}
	}
	w.logger.Info().Msg("finished getting workflows")
	return workflows, resp, err
}

func (w *warehouse) handleWorkflowRuns(ctx context.Context, owner, repo string, workflows *github.Workflows) ([]*github.WorkflowRun, *github.Response, error) {
	var workflowRunsArr []*github.WorkflowRun
	var resp *github.Response
	opt := &github.ListWorkflowRunsOptions{
		ListOptions: github.ListOptions{PerPage: 30},
	}

	w.logger.Info().Msgf("getting all workflow runs for repo %s", repo)

	for _, workflow := range workflows.Workflows {
		// Github REST API  have a default pagination of 30 items per call
		// so we need to loop over with pagination until the response next page is == 0
		for {

			workflowRuns, response, err := w.githubClient.Actions.ListWorkflowRunsByID(ctx, owner, repo, *workflow.ID, opt)

			resp = response

			if err != nil {
				return workflowRunsArr, resp, err
			}

			if *workflowRuns.TotalCount > 0 && len(workflowRuns.WorkflowRuns) > 0 {
				workflowRunsArr = append(workflowRunsArr, workflowRuns.WorkflowRuns...)
			}

			w.restRatelimitHandler(ctx, resp)

			if response.NextPage == 0 {
				break
			}

			opt.Page = resp.NextPage

		}
		opt.Page = 0

	}
	w.logger.Info().Msg("finished getting all workflow runs")
	return workflowRunsArr, resp, nil
}

func (w *warehouse) handleWorkflowRunsJobs(ctx context.Context, owner, repo string, workflowRunsArrr []*github.WorkflowRun, repoID uuid.UUID, tx pgx.Tx) ([]*github.WorkflowJob, *github.Response, error) {

	var workflowRunJobsArr []*github.WorkflowJob
	var resp *github.Response
	opt := &github.ListWorkflowJobsOptions{
		ListOptions: github.ListOptions{PerPage: 30},
	}
	w.logger.Info().Msgf("getting all workflow run jobs for repo %s", repo)

	for _, workflowRun := range workflowRunsArrr {
		// we do a interation until the next page is  equal to 0
		for {
			workflowRunJobs, response, err := w.githubClient.Actions.ListWorkflowJobs(ctx, owner, repo, *workflowRun.ID, opt)

			resp = response

			if err != nil {
				return workflowRunJobsArr, resp, err
			}

			if *workflowRunJobs.TotalCount > 0 && len(workflowRunJobs.Jobs) > 0 {
				workflowRunJobsArr = append(workflowRunJobsArr, workflowRunJobs.Jobs...)
			}

			w.restRatelimitHandler(ctx, resp)

			if response.NextPage == 0 {
				break
			}

			opt.Page = resp.NextPage

		}

		// we reset the page for the next run
		opt.Page = 0

		// we upsert the current run into a trasaction chain
		if err := w.handleUpsertWorkflowRuns(ctx, tx, workflowRun, repoID); err != nil {
			return workflowRunJobsArr, resp, err
		}
	}

	w.logger.Info().Msgf("getting all workflow run jobs for repo %s", repo)
	return workflowRunJobsArr, resp, nil
}

func (w *warehouse) handleWorkflowRunsJobLogs(ctx context.Context, tx pgx.Tx, owner, repo string, workflowRunJobsArr []*github.WorkflowJob, repoID uuid.UUID) error {
	var resp *github.Response
	var log string
	w.logger.Info().Msgf("getting all workflow run job logs for repo %s", repo)
	for i, workflowJob := range workflowRunJobsArr {

		workflowJobLog, response, err := w.githubClient.Actions.GetWorkflowJobLogs(ctx, owner, repo, *workflowJob.ID, true)

		resp = response
		if err != nil {
			return err
		}
		if len(workflowJobLog.String()) > 0 {
			log, err = w.parseJobLogs(workflowJobLog, strconv.Itoa(int(*workflowJob.ID)))
		}

		if err != nil {
			return err
		}

		w.restRatelimitHandler(ctx, resp)

		if err := w.handleUpsertWorkflowJobs(ctx, tx, workflowJob, log, repoID); err != nil {
			return err
		}

		if err := os.RemoveAll(strconv.Itoa(i)); err != nil {
			w.logger.Err(err)
			return err
		}

	}
	w.logger.Info().Msg("finished getting all workflow run job logs")
	return nil
}

func (w *warehouse) handleUpsertWorkflowRuns(ctx context.Context, tx pgx.Tx, workflowRun *github.WorkflowRun, repoID uuid.UUID) error {
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
		ID:                int32(*workflowRun.ID),
		Workflowrunnodeid: *workflowRun.NodeID,
		Name:              *workflowRun.Name,
		Headbranch:        *workflowRun.HeadBranch,
		Runnumber:         int32(*workflowRun.RunNumber),
		Runattemp:         int32(*workflowRun.RunAttempt),
		Event:             *workflowRun.Event,
		Status:            *workflowRun.Status,
		Conclusion:        *workflowRun.Conclusion,
		Workflowid:        int32(*workflowRun.WorkflowID),
		Checksuiteid:      int32(*workflowRun.CheckSuiteID),
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

	return nil
}

func (w *warehouse) handleUpsertWorkflowJobs(ctx context.Context, tx pgx.Tx, workflowJob *github.WorkflowJob, log string, repoID uuid.UUID) error {

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
		ID:           int32(*workflowJob.ID),
		Runid:        int32(*workflowJob.RunID),
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
		Runnergroupid:   int32(*workflowJob.RunnerGroupID),
		Runnergroupname: *workflowJob.RunnerGroupName,
	}); err != nil {
		return err
	}
	return nil
}
