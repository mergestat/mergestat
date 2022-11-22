package warehouse

import (
	"context"
	"errors"
	"fmt"
	"net/url"
	"os"

	"github.com/google/go-github/v47/github"
	"github.com/google/uuid"
	"github.com/jackc/pgtype"
	"github.com/jackc/pgx/v4"
	"github.com/mergestat/mergestat/internal/db"
	"github.com/mergestat/mergestat/internal/helper"
)

func (w *warehouse) GitHubActions(ctx context.Context, j *db.DequeueSyncJobRow) error {
	var (
		owner    string
		repoName string
		resp     *github.Response
		err      error
	)

	owner, repoName, err = helper.GetRepoOwnerAndRepoName(j.Repo)
	if err != nil {
		return err
	}

	// we check the rate limit before any call to the GitHub API
	if _, resp, err = w.githubClient.RateLimits(ctx); err != nil {
		return err
	}

	w.restRatelimitHandler(ctx, resp)

	w.logger.Info().Msgf("starting to retrieve all github actions from repo %s", repoName)

	if err = w.handleWorkflows(ctx, owner, repoName, j); err != nil {
		return err
	}

	w.logger.Info().Msgf("finished getting all github actions")
	return nil
}

func (w *warehouse) handleWorkflows(ctx context.Context, owner, repo string, job *db.DequeueSyncJobRow) error {
	var err error
	var resp *github.Response
	var workflowsPage *github.Workflows
	repoID := job.RepoID
	pagination, err := w.getPaginationOpt("GITHUB_WORKFLOW_PER_PAGE")
	if err != nil {
		return err
	}
	opt := &github.ListWorkflowRunsOptions{
		ListOptions: github.ListOptions{PerPage: pagination},
	}
	w.logger.Info().Msgf("getting workflows for repo %s", repo)
	// we get a page of 30 workflows until next page is 0
	for {
		if opt.Page == 0 {
			operation := fmt.Sprintf("to get all GitHub Actions workflows for repo %s", repo)
			if err := w.batchProcessLogMessages(ctx, SyncLogTypeInfo, job, startingProcess, operation); err != nil {
				return err
			}
		}

		if workflowsPage, resp, err = getWorkflows(ctx, w.githubClient, owner, repo, opt); err != nil {
			w.logger.Warn().AnErr("Error", err).Msg("error occurred")

			operation := fmt.Sprintf("during the fetching of workflow page with owner %s and repo %s", owner, repo)
			w.batchProcessLogMessages(ctx, SyncLogTypeWarning, job, unexpectedBehavior, operation)

			if resp == nil {
				break
			}

			if resp.NextPage == 0 {
				break
			}
			opt.Page = resp.NextPage
			continue
		}

		w.restRatelimitHandler(ctx, resp)

		if *workflowsPage.TotalCount > 0 && len(workflowsPage.Workflows) > 0 {
			if err := w.handleWorkflowsUpsert(ctx, workflowsPage.Workflows, repoID); err != nil {
				return err
			}

			if err = w.handleWorkflowRuns(ctx, owner, repo, job, workflowsPage.Workflows); err != nil {
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

func (w *warehouse) handleWorkflowRuns(ctx context.Context, owner, repo string, job *db.DequeueSyncJobRow, workflowsPage []*github.Workflow) error {
	var err error
	var resp *github.Response
	var workflowRunsPage *github.WorkflowRuns
	repoID := job.RepoID
	runsCount := 0
	jobsCount := 0
	pagination, err := w.getPaginationOpt("GITHUB_WORKFLOW_RUNS_PER_PAGE")
	if err != nil {
		return err
	}
	opt := &github.ListWorkflowRunsOptions{
		ListOptions: github.ListOptions{PerPage: pagination},
	}

	for _, workflow := range workflowsPage {
		if opt.Page == 0 {
			operation := fmt.Sprintf("to get all GitHub Actions runs for workflow %s", *workflow.Name)

			if err := w.batchProcessLogMessages(ctx, SyncLogTypeInfo, job, startingProcess, operation); err != nil {
				return err
			}

			operation = fmt.Sprintf("to get all GitHub Actions jobs for workflow %s", *workflow.Name)
			if err := w.batchProcessLogMessages(ctx, SyncLogTypeInfo, job, startingProcess, operation); err != nil {
				return err
			}
		}

		w.logger.Info().Msgf("getting workflow runs for workflow %s", *workflow.Name)
		// we get a page of 30 workflow runs until next page is 0
		for {

			w.logger.Debug().Str("workflow", *workflow.Name).Str("ID", fmt.Sprintf("%d", *workflow.ID)).Msg("getting runs of")
			if workflowRunsPage, resp, err = getWorkflowsRuns(ctx, w.githubClient, owner, repo, *workflow.ID, opt); err != nil {
				w.logger.Warn().Str("workflow", *workflow.Name).Str("ID", fmt.Sprintf("%d", *workflow.ID)).AnErr("Error", err).Msg("error occurred")

				operation := fmt.Sprintf("during the fetching of workflow run page with owner %s, repo %s and workflowID %d, Error: %v", owner, repo, *workflow.ID, err)
				w.batchProcessLogMessages(ctx, SyncLogTypeWarning, job, unexpectedBehavior, operation)

				if resp == nil {
					break
				}

				if resp.NextPage == 0 {
					break
				}

				opt.Page = resp.NextPage
				continue
			}

			if *workflowRunsPage.TotalCount > 0 && len(workflowRunsPage.WorkflowRuns) > 0 {

				if err := w.handleWorkflowRunsUpsert(ctx, workflowRunsPage.WorkflowRuns, repoID); err != nil {
					return err
				}
				runsCount += len(workflowRunsPage.WorkflowRuns)

				if err := w.handleWorkflowRunsJobs(ctx, owner, repo, job, workflowRunsPage.WorkflowRuns, &jobsCount); err != nil {
					return err
				}
			}

			w.restRatelimitHandler(ctx, resp)

			if resp.NextPage == 0 {
				break
			}

			opt.Page = resp.NextPage

		}

		operation := fmt.Sprintf("%d runs and %d jobs of workflow %s", runsCount, jobsCount, *workflow.Name)
		if err := w.batchProcessLogMessages(ctx, SyncLogTypeInfo, job, insertedProcess, operation); err != nil {
			return err
		}

		opt.Page = 0
		runsCount = 0
		jobsCount = 0
		w.logger.Info().Msgf("finished getting all github actions from workflow %s", *workflow.Name)
	}

	return nil
}

func (w *warehouse) handleWorkflowRunsJobs(ctx context.Context, owner, repo string, job *db.DequeueSyncJobRow, workflowRunsPage []*github.WorkflowRun, jobsCount *int) error {
	var err error
	var resp *github.Response
	var workflowRunJobsPage *github.Jobs
	repoID := job.RepoID
	pagination, err := w.getPaginationOpt("GITHUB_WORKFLOW_JOBS_PER_PAGE")
	if err != nil {
		return err
	}

	opt := &github.ListWorkflowJobsOptions{
		ListOptions: github.ListOptions{PerPage: pagination},
	}

	for _, workflowRun := range workflowRunsPage {
		// we get a page of 30 workflow run jobs until next page is 0
		for {
			w.logger.Debug().Str("workflow-run", *workflowRun.Name).Str("ID", fmt.Sprintf("%d", *workflowRun.ID)).Msg("getting jobs of")
			if workflowRunJobsPage, resp, err = getWorkflowJobs(ctx, w.githubClient, owner, repo, *workflowRun.ID, opt); err != nil {
				w.logger.Warn().Str("workflow-run", *workflowRun.Name).Str("ID", fmt.Sprintf("%d", *workflowRun.ID)).AnErr("Error", err).Msg("error occurred")

				operation := fmt.Sprintf("during the fetching of workflow jobs page with owner %s,repo %s and runID %d Error: %v", owner, repo, *workflowRun.ID, err)
				w.batchProcessLogMessages(ctx, SyncLogTypeWarning, job, unexpectedBehavior, operation)
				if resp == nil {
					break
				}

				if resp.NextPage == 0 {
					break
				}
				opt.Page = resp.NextPage
				continue
			}

			if *workflowRunJobsPage.TotalCount > 0 && len(workflowRunJobsPage.Jobs) > 0 {
				if err := w.handleWorkflowJobLogs(ctx, owner, repo, repoID, workflowRunJobsPage.Jobs, jobsCount); err != nil {
					return err
				}
			}

			w.restRatelimitHandler(ctx, resp)

			if resp.NextPage == 0 {
				break
			}

			opt.Page = resp.NextPage

		}

		// we reset the page for the next run
		opt.Page = 0
	}

	return nil
}

func (w *warehouse) handleWorkflowJobLogs(ctx context.Context, owner, repo string, repoID uuid.UUID, workflowRunJobsPage []*github.WorkflowJob, jobsCount *int) error {
	var err error
	var log string
	// we create a  tmp dir to store all downloaded files into it
	filepath, cleanup, err := helper.CreateTempDir(os.Getenv("GIT_WORKFLOW_LOGS_PATH"), "mergestat-logs-")
	if err != nil {
		return err
	}

	// we this fn we clean all in that tmp dir
	defer func() {
		if err = cleanup(); err != nil {
			w.logger.Err(err).Msgf("error cleaning up repo at: %s, %v", filepath, err)
		}
	}()

	// we iterate over the workflowrunJobs page to get each log
	for i, workflowJob := range workflowRunJobsPage {
		w.logger.Debug().Str("workflow-job", *workflowJob.Name).Str("ID", fmt.Sprintf("%d", *workflowJob.ID)).Msg("getting log of")
		workflowJobLog, resp, err := getWorkflowJobLog(ctx, w.githubClient, owner, repo, *workflowJob.ID)
		if err != nil {
			w.logger.Warn().Str("workflow-job", *workflowJob.Name).Str("ID", fmt.Sprintf("%d", *workflowJob.ID)).AnErr("Error", err).Msg("error occurred")
			// now that we know that the log is missing regularly , we need to also handle to upsert of the rest of the information
			// when we get an error from the call
			log = ""
			if err := w.handleWorkflowJobUpsert(ctx, workflowJob, log, repoID); err != nil {
				return err
			}

			*jobsCount++

			continue
		}

		if workflowJobLog == nil {
			log = ""
		} else if len(workflowJobLog.String()) > 0 {
			if log, err = w.parseJobLogs(workflowJobLog, filepath, i); err != nil {
				return err
			}
		}

		w.restRatelimitHandler(ctx, resp)

		if err := w.handleWorkflowJobUpsert(ctx, workflowJob, log, repoID); err != nil {
			return err
		}

		*jobsCount++
	}

	return err
}

func (w *warehouse) handleWorkflowsUpsert(ctx context.Context, workflows []*github.Workflow, repoID uuid.UUID) error {
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
			Workflownodeid: helper.StringToSqlNullString(workflow.NodeID),
			Name:           helper.StringToSqlNullString(workflow.Name),
			Path:           helper.StringToSqlNullString(workflow.Path),
			State:          helper.StringToSqlNullString(workflow.State),
			Createdat:      helper.DateToSqlNullTime(&workflow.CreatedAt.Time),
			Updatedat:      helper.DateToSqlNullTime(&workflow.UpdatedAt.Time),
			Url:            helper.StringToSqlNullString(workflow.URL),
			Htmlurl:        helper.StringToSqlNullString(workflow.HTMLURL),
			Badgeurl:       helper.StringToSqlNullString(workflow.BadgeURL),
		}); err != nil {
			return err
		}
	}

	return tx.Commit(ctx)
}

func (w *warehouse) handleWorkflowRunsUpsert(ctx context.Context, workflowRunPage []*github.WorkflowRun, repoID uuid.UUID) error {
	var tx pgx.Tx
	var err error
	//var jsonbPullRequest pgtype.JSONB
	//var jsonbHeadCommit pgtype.JSONB

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
		runNumber := helper.GetInt32FromInt(workflowRun.RunNumber)
		runAttemp := helper.GetInt32FromInt(workflowRun.RunAttempt)
		workflowRunRepositoryUrl := helper.GetRepositoryURL(workflowRun.Repository)
		workflowRunHeadRepoUrl := helper.GetRepositoryURL(workflowRun.HeadRepository)

		jsonbPullRequest, err := helper.InterfaceToSqlJSONB(workflowRun.PullRequests)
		if err != nil {
			return err
		}

		jsonbHeadCommit, err := helper.InterfaceToSqlJSONB(workflowRun.HeadCommit)
		if err != nil {
			return err
		}

		if err := w.db.WithTx(tx).UpsertWorkflowRuns(ctx, db.UpsertWorkflowRunsParams{RepoID: repoID,
			ID:                *workflowRun.ID,
			Workflowrunnodeid: helper.StringToSqlNullString(workflowRun.NodeID),
			Name:              helper.StringToSqlNullString(workflowRun.Name),
			Headbranch:        helper.StringToSqlNullString(workflowRun.HeadBranch),
			Runnumber:         helper.Int32ToSqlNullInt32(runNumber),
			Runattempt:        helper.Int32ToSqlNullInt32(runAttemp),
			Event:             helper.StringToSqlNullString(workflowRun.Event),
			Status:            helper.StringToSqlNullString(workflowRun.Status),
			Conclusion:        helper.StringToSqlNullString(workflowRun.Conclusion),
			Workflowid:        helper.Int64ToSqlNullInt64(workflowRun.WorkflowID),
			Checksuiteid:      helper.Int64ToSqlNullInt64(workflowRun.CheckSuiteID),
			Checksuitenodeid:  helper.StringToSqlNullString(workflowRun.CheckSuiteNodeID),
			Url:               helper.StringToSqlNullString(workflowRun.URL),
			Htmlurl:           helper.StringToSqlNullString(workflowRun.HTMLURL),
			Pullrequest:       jsonbPullRequest,
			Createdat:         helper.DateToSqlNullTime(&workflowRun.CreatedAt.Time),
			Updatedat:         helper.DateToSqlNullTime(&workflowRun.UpdatedAt.Time),
			Runstartedat:      helper.DateToSqlNullTime(&workflowRun.RunStartedAt.Time),
			Jobsurl:           helper.StringToSqlNullString(workflowRun.JobsURL),
			Logsurl:           helper.StringToSqlNullString(workflowRun.LogsURL),
			Checksuiteurl:     helper.StringToSqlNullString(workflowRun.CheckSuiteURL),
			Artifactsurl:      helper.StringToSqlNullString(workflowRun.ArtifactsURL),
			Cancelurl:         helper.StringToSqlNullString(workflowRun.CancelURL),
			Rerunurl:          helper.StringToSqlNullString(workflowRun.RerunURL),
			Headcommit:        jsonbHeadCommit,
			Workflowurl:       helper.StringToSqlNullString(workflowRun.WorkflowURL),
			Repositoryurl:     helper.StringToSqlNullString(workflowRunRepositoryUrl),
			Headrepositoryurl: helper.StringToSqlNullString(workflowRunHeadRepoUrl),
		}); err != nil {
			return err
		}

	}

	return tx.Commit(ctx)
}

func (w *warehouse) handleWorkflowJobUpsert(ctx context.Context, workflowJob *github.WorkflowJob, log string, repoID uuid.UUID) error {
	var tx pgx.Tx
	var err error
	var jsonbSteps pgtype.JSONB
	var jsonbLabels pgtype.JSONB

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

	if jsonbSteps, err = helper.InterfaceToSqlJSONB(&workflowJob.Steps); err != nil {
		return err
	}

	if jsonbLabels, err = helper.InterfaceToSqlJSONB(&workflowJob.Labels); err != nil {
		return err
	}

	if err := w.db.WithTx(tx).UpsertWorkflowRunJobs(ctx, db.UpsertWorkflowRunJobsParams{
		Repoid:          repoID,
		ID:              *workflowJob.ID,
		Runid:           helper.Int64ToSqlNullInt64(workflowJob.RunID),
		Log:             helper.StringToSqlNullString(&log),
		Runurl:          helper.StringToSqlNullString(workflowJob.RunURL),
		Jobnodeid:       helper.StringToSqlNullString(workflowJob.NodeID),
		Headsha:         helper.StringToSqlNullString(workflowJob.HeadSHA),
		Url:             helper.StringToSqlNullString(workflowJob.URL),
		Htmlurl:         helper.StringToSqlNullString(workflowJob.HTMLURL),
		Status:          helper.StringToSqlNullString(workflowJob.Status),
		Conclusion:      helper.StringToSqlNullString(workflowJob.Conclusion),
		Startedat:       helper.DateToSqlNullTime(&workflowJob.StartedAt.Time),
		Completedat:     helper.DateToSqlNullTime(&workflowJob.CompletedAt.Time),
		Workflowname:    helper.StringToSqlNullString(workflowJob.Name),
		Steps:           jsonbSteps,
		Checkrunurl:     helper.StringToSqlNullString(workflowJob.CheckRunURL),
		Labels:          jsonbLabels,
		Runnerid:        helper.Int64ToSqlNullInt64(workflowJob.RunnerID),
		Runnername:      helper.StringToSqlNullString(workflowJob.RunnerName),
		Runnergroupid:   helper.Int64ToSqlNullInt64(workflowJob.RunnerGroupID),
		Runnergroupname: helper.StringToSqlNullString(workflowJob.RunnerGroupName),
	}); err != nil {
		return err
	}

	return tx.Commit(ctx)
}

func getWorkflows(ctx context.Context, githubClient *github.Client, owner, repo string, opt *github.ListWorkflowRunsOptions) (*github.Workflows, *github.Response, error) {
	return githubClient.Actions.ListWorkflows(ctx, owner, repo, &opt.ListOptions)
}

func getWorkflowsRuns(ctx context.Context, githubClient *github.Client, owner, repo string, workflowID int64, opt *github.ListWorkflowRunsOptions) (*github.WorkflowRuns, *github.Response, error) {
	return githubClient.Actions.ListWorkflowRunsByID(ctx, owner, repo, workflowID, opt)
}

func getWorkflowJobs(ctx context.Context, githubClient *github.Client, owner, repo string, workflowRunID int64, opt *github.ListWorkflowJobsOptions) (*github.Jobs, *github.Response, error) {
	return githubClient.Actions.ListWorkflowJobs(ctx, owner, repo, workflowRunID, opt)
}

func getWorkflowJobLog(ctx context.Context, githubClient *github.Client, owner, repo string, workflowJobID int64) (*url.URL, *github.Response, error) {
	return githubClient.Actions.GetWorkflowJobLogs(ctx, owner, repo, workflowJobID, true)
}
