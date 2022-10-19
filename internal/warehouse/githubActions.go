package warehouse

import (
	"context"
	"errors"
	"fmt"
	"net/url"

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
	if _, resp, err = w.githubClient.RateLimits(ctx); err != nil {
		return err
	}

	w.restRatelimitHandler(ctx, resp)

	w.logger.Info().Msgf("starting to retrieve all github actions from repo %s", repoName)

	if err = w.handleWorkflows(ctx, owner, repoName, j.RepoID); err != nil {
		return err
	}

	w.logger.Info().Msgf("finished getting all github actions")
	return nil
}

func (w *warehouse) handleWorkflows(ctx context.Context, owner, repo string, repoID uuid.UUID) error {
	var err error
	var resp *github.Response
	var workflowsPage *github.Workflows
	pagination, err := w.getPaginationOpt()

	if err != nil {
		return err
	}
	opt := &github.ListWorkflowRunsOptions{
		ListOptions: github.ListOptions{PerPage: pagination},
	}
	w.logger.Info().Msgf("getting workflows for repo %s", repo)
	// we get a page of 30 workflows until next page is 0
	for {

		if workflowsPage, resp, err = w.githubClient.Actions.ListWorkflows(ctx, owner, repo, &opt.ListOptions); err != nil {
			return err
		}

		w.restRatelimitHandler(ctx, resp)

		if *workflowsPage.TotalCount > 0 && len(workflowsPage.Workflows) > 0 {
			if err := w.handleWorkflowsUpsert(ctx, workflowsPage.Workflows, repoID); err != nil {
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
	var err error
	var resp *github.Response
	var workflowRunsPage *github.WorkflowRuns
	pagination, err := w.getPaginationOpt()

	if err != nil {
		return err
	}
	opt := &github.ListWorkflowRunsOptions{
		ListOptions: github.ListOptions{PerPage: pagination},
	}

	for _, workflow := range workflowsPage {
		w.logger.Info().Msgf("getting workflow runs for workflow %s", *workflow.Name)
		// we get a page of 30 workflow runs until next page is 0
		for {
			if workflowRunsPage, resp, err = w.githubClient.Actions.ListWorkflowRunsByID(ctx, owner, repo, *workflow.ID, opt); err != nil {
				return err
			}

			if *workflowRunsPage.TotalCount > 0 && len(workflowRunsPage.WorkflowRuns) > 0 {

				if err := w.handleWorkflowRunsUpsert(ctx, workflowRunsPage.WorkflowRuns, repoID); err != nil {
					return err
				}

				if err := w.handleWorkflowRunsJobs(ctx, owner, repo, repoID, workflowRunsPage.WorkflowRuns); err != nil {
					return err
				}
			}

			w.restRatelimitHandler(ctx, resp)

			if resp.NextPage == 0 {
				break
			}

			opt.Page = resp.NextPage

		}

		opt.Page = 0

		w.logger.Info().Msgf("finished getting all github actions from workflow %s", *workflow.Name)

	}

	return nil
}

func (w *warehouse) handleWorkflowRunsJobs(ctx context.Context, owner, repo string, repoID uuid.UUID, workflowRunsPage []*github.WorkflowRun) error {
	var err error
	var resp *github.Response
	var workflowRunJobsPage *github.Jobs
	pagination, err := w.getPaginationOpt()
	if err != nil {
		return err
	}

	opt := &github.ListWorkflowJobsOptions{
		ListOptions: github.ListOptions{PerPage: pagination},
	}

	for _, workflowRun := range workflowRunsPage {

		// we get a page of 30 workflow run jobs until next page is 0
		for {
			if workflowRunJobsPage, resp, err = w.githubClient.Actions.ListWorkflowJobs(ctx, owner, repo, *workflowRun.ID, opt); err != nil {
				return err
			}

			if *workflowRunJobsPage.TotalCount > 0 && len(workflowRunJobsPage.Jobs) > 0 {
				if err := w.handleWorkflowJobLogs(ctx, owner, repo, repoID, workflowRunJobsPage.Jobs); err != nil {
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

func (w *warehouse) handleWorkflowJobLogs(ctx context.Context, owner, repo string, repoID uuid.UUID, workflowRunJobsPage []*github.WorkflowJob) error {
	var err error
	var resp *github.Response
	var log string
	var workflowJobLog *url.URL
	// we create a  tmp dir to store all downloaded files into it
	filepath, cleanup, err := w.createTempDirForGitClone()

	if err != nil {
		return err
	}

	// we this fn we clean all in that tmp dir
	defer cleanup()

	// we iterate over the workflowrunJobs page to get each log
	for i, workflowJob := range workflowRunJobsPage {
		//TODO  (Ramiro Castillo) this resp error should be handled in a  retry logic pattern
		if workflowJobLog, resp, err = w.githubClient.Actions.GetWorkflowJobLogs(ctx, owner, repo, *workflowJob.ID, true); err != nil {
			return err
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

	}
	return nil
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
			Workflownodeid: w.stringToSqlnullString(workflow.NodeID),
			Name:           w.stringToSqlnullString(workflow.Name),
			Path:           w.stringToSqlnullString(workflow.Path),
			State:          w.stringToSqlnullString(workflow.State),
			Createdat:      w.dateToSqlNullTime(&workflow.CreatedAt.Time),
			Updatedat:      w.dateToSqlNullTime(&workflow.UpdatedAt.Time),
			Url:            w.stringToSqlnullString(workflow.URL),
			Htmlurl:        w.stringToSqlnullString(workflow.HTMLURL),
			Badgeurl:       w.stringToSqlnullString(workflow.BadgeURL),
		}); err != nil {
			return err
		}
	}

	return tx.Commit(ctx)
}

func (w *warehouse) handleWorkflowRunsUpsert(ctx context.Context, workflowRunPage []*github.WorkflowRun, repoID uuid.UUID) error {
	var tx pgx.Tx
	var err error
	var jsonbPullRequest pgtype.JSONB
	var jsonbHeadCommit pgtype.JSONB

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

		if workflowRun.Repository == nil {
			workflowRun.Repository = &github.Repository{URL: new(string)}
		}

		if workflowRun.HeadRepository == nil {
			workflowRun.HeadRepository = &github.Repository{URL: new(string)}
		}

		workflowRunRepositoryUrl := workflowRun.Repository.URL
		workflowRunHeadRepoUrl := workflowRun.HeadRepository.URL
		runNumber := int32(*workflowRun.RunNumber)
		runAttemp := int32(*workflowRun.RunAttempt)

		if jsonbPullRequest, err = w.interfaceToSqlJSONB(workflowRun.PullRequests); err != nil {
			return err
		}

		if jsonbHeadCommit, err = w.interfaceToSqlJSONB(workflowRun.HeadCommit); err != nil {
			return err
		}

		if err := w.db.WithTx(tx).UpserWorkflowRuns(ctx, db.UpserWorkflowRunsParams{
			RepoID:            repoID,
			ID:                *workflowRun.ID,
			Workflowrunnodeid: w.stringToSqlnullString(workflowRun.NodeID),
			Name:              w.stringToSqlnullString(workflowRun.Name),
			Headbranch:        w.stringToSqlnullString(workflowRun.HeadBranch),
			Runnumber:         w.int32ToSqlNullInt32(&runNumber),
			Runattemp:         w.int32ToSqlNullInt32(&runAttemp),
			Event:             w.stringToSqlnullString(workflowRun.Event),
			Status:            w.stringToSqlnullString(workflowRun.Status),
			Conclusion:        w.stringToSqlnullString(workflowRun.Conclusion),
			Workflowid:        *workflowRun.WorkflowID,
			Checksuiteid:      w.int64ToSqlNullInt64(workflowRun.CheckSuiteID),
			Checksuitenodeid:  w.stringToSqlnullString(workflowRun.CheckSuiteNodeID),
			Url:               w.stringToSqlnullString(workflowRun.URL),
			Htmlurl:           w.stringToSqlnullString(workflowRun.HTMLURL),
			Pullrequest:       jsonbPullRequest,
			Createdat:         w.dateToSqlNullTime(&workflowRun.CreatedAt.Time),
			Updatedat:         w.dateToSqlNullTime(&workflowRun.UpdatedAt.Time),
			Runstartedat:      w.dateToSqlNullTime(&workflowRun.RunStartedAt.Time),
			Jobsurl:           w.stringToSqlnullString(workflowRun.JobsURL),
			Logsurl:           w.stringToSqlnullString(workflowRun.LogsURL),
			Checksuiteurl:     w.stringToSqlnullString(workflowRun.CheckSuiteURL),
			Artifactsurl:      w.stringToSqlnullString(workflowRun.ArtifactsURL),
			Cancelurl:         w.stringToSqlnullString(workflowRun.CancelURL),
			Rerunurl:          w.stringToSqlnullString(workflowRun.RerunURL),
			Headcommit:        jsonbHeadCommit,
			Workflowurl:       w.stringToSqlnullString(workflowRun.WorkflowURL),
			Repositoryurl:     w.stringToSqlnullString(workflowRunRepositoryUrl),
			Headrepositoryurl: w.stringToSqlnullString(workflowRunHeadRepoUrl),
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

	if jsonbSteps, err = w.interfaceToSqlJSONB(&workflowJob.Steps); err != nil {
		return err
	}

	if jsonbLabels, err = w.interfaceToSqlJSONB(&workflowJob.Labels); err != nil {
		return err
	}

	if err := w.db.WithTx(tx).UpsertWorkflowRunJobs(ctx, db.UpsertWorkflowRunJobsParams{
		Repoid:          repoID,
		ID:              *workflowJob.ID,
		Runid:           *workflowJob.RunID,
		Log:             w.stringToSqlnullString(&log),
		Runurl:          w.stringToSqlnullString(workflowJob.RunURL),
		Jobnodeid:       w.stringToSqlnullString(workflowJob.NodeID),
		Headsha:         w.stringToSqlnullString(workflowJob.HeadSHA),
		Url:             w.stringToSqlnullString(workflowJob.URL),
		Htmlurl:         w.stringToSqlnullString(workflowJob.HTMLURL),
		Status:          w.stringToSqlnullString(workflowJob.Status),
		Conclusion:      w.stringToSqlnullString(workflowJob.Conclusion),
		Startedat:       w.dateToSqlNullTime(&workflowJob.StartedAt.Time),
		Completedat:     w.dateToSqlNullTime(&workflowJob.CompletedAt.Time),
		Workflowname:    w.stringToSqlnullString(workflowJob.Name),
		Steps:           jsonbSteps,
		Checkrunurl:     w.stringToSqlnullString(workflowJob.CheckRunURL),
		Labels:          jsonbLabels,
		Runnerid:        w.int64ToSqlNullInt64(workflowJob.RunnerID),
		Runnername:      w.stringToSqlnullString(workflowJob.RunnerName),
		Runnergroupid:   w.int64ToSqlNullInt64(workflowJob.RunnerGroupID),
		Runnergroupname: w.stringToSqlnullString(workflowJob.RunnerGroupName),
	}); err != nil {
		return err
	}

	return tx.Commit(ctx)
}
