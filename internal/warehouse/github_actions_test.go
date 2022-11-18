package warehouse

import (
	"context"
	"net/http"
	"net/url"
	"os"
	"testing"

	"github.com/golang/mock/gomock"
	"github.com/google/go-github/v47/github"
	"github.com/google/uuid"
	"github.com/jackc/pgx/v4"
	"github.com/mergestat/mergestat/internal/db"
	"github.com/mergestat/mergestat/internal/helper"
	"github.com/mergestat/mergestat/internal/mocks"
	"github.com/migueleliasweb/go-github-mock/src/mock"
	"github.com/rs/zerolog"
)

func Test_warehouse_handleWorkflows(t *testing.T) {
	type testArgs struct {
		description string
		owner       string
		repo        string
		mockFuncs   func()
		wantErr     bool
	}
	totalCount := 1
	testWorkflow := mocks.GetWorkflowEmptyData()
	mockedHTTPClient := mock.NewMockedHTTPClient(
		mock.WithRequestMatch(
			mock.GetReposActionsWorkflowsByOwnerByRepo,
			github.Workflows{TotalCount: &totalCount, Workflows: []*github.Workflow{testWorkflow}},
		),
		mock.WithRequestMatchHandler(
			mock.GetReposActionsWorkflowsRunsByOwnerByRepoByWorkflowId,
			http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
				mock.WriteError(
					w,
					http.StatusNotFound,
					"Not Found",
				)
			}),
		),
	)

	defer func(f func(batch []*syncLog) [][]interface{}) {
		getInputBatches = f
	}(getInputBatches)

	c := github.NewClient(mockedHTTPClient)

	ctx := context.Background()

	logger := zerolog.New(os.Stderr).With().Timestamp().Logger().Level(zerolog.ErrorLevel)

	// creating a mock pool
	ctrl := gomock.NewController(t)
	defer ctrl.Finish()

	mockedPool := mocks.NewMockPooler(ctrl)

	// creating a mock db
	ctr := gomock.NewController(t)
	defer ctr.Finish()

	mockedDb := mocks.NewMockQuerier(ctr)

	//creating a mock tx
	ct := gomock.NewController(t)
	defer ct.Finish()

	mockedTx := mocks.NewMockTx(ct)

	tests := []testArgs{{
		description: "test nil handling of workflows",
		owner:       "mergestat",
		repo:        "mergestat",
		mockFuncs: func() {
			// formatting test values to required types
			var inputs [][]interface{}
			var inputRuns [][]interface{}
			var inputJobs [][]interface{}
			var inputInsertedRows [][]interface{}
			testWorkflowBatchValue := []interface{}{&syncLog{Type: SyncLogTypeInfo, Message: "starting to get all GitHub Actions workflows for repo mergestat", RepoSyncQueueID: 0}}
			testRunBatchValues := []interface{}{&syncLog{Type: SyncLogTypeInfo, Message: "starting to get all GitHub Actions runs for workflow ", RepoSyncQueueID: 0}}
			testJobBatchValue := []interface{}{&syncLog{Type: SyncLogTypeInfo, Message: "starting to get all GitHub Actions jobs for workflow ", RepoSyncQueueID: 0}}
			testInsertedRowsBatchValue := []interface{}{&syncLog{Type: SyncLogTypeInfo, Message: "inserted 0 runs and 0 jobs of workflow ", RepoSyncQueueID: 0}}

			inputs = append(inputs, testWorkflowBatchValue)
			inputRuns = append(inputRuns, testRunBatchValues)
			inputJobs = append(inputJobs, testJobBatchValue)
			inputInsertedRows = append(inputInsertedRows, testInsertedRowsBatchValue)

			// mocking bach logs values for workflows
			getInputBatches = func(batch []*syncLog) [][]interface{} {
				return inputs
			}

			gomock.InOrder(
				mockedPool.EXPECT().CopyFrom(ctx, pgx.Identifier{"mergestat", "repo_sync_logs"}, []string{"log_type", "message", "repo_sync_queue_id"}, pgx.CopyFromRows(inputs)).Return(int64(0), nil).MaxTimes(4),
				mockedPool.EXPECT().BeginTx(ctx, pgx.TxOptions{}).Return(mockedTx, nil),
				mockedDb.EXPECT().WithTx(mockedTx).Return(mockedDb),
				mockedDb.EXPECT().UpsertWorkflowsInPublic(ctx, db.UpsertWorkflowsInPublicParams{ID: *testWorkflow.ID,
					Workflownodeid: helper.StringToSqlNullString(testWorkflow.NodeID),
					Name:           helper.StringToSqlNullString(testWorkflow.Name),
					Path:           helper.StringToSqlNullString(testWorkflow.Path),
					State:          helper.StringToSqlNullString(testWorkflow.State),
					Createdat:      helper.DateToSqlNullTime(&testWorkflow.CreatedAt.Time),
					Updatedat:      helper.DateToSqlNullTime(&testWorkflow.UpdatedAt.Time),
					Url:            helper.StringToSqlNullString(testWorkflow.URL),
					Htmlurl:        helper.StringToSqlNullString(testWorkflow.HTMLURL),
					Badgeurl:       helper.StringToSqlNullString(testWorkflow.BadgeURL)}).Return(nil),
				mockedTx.EXPECT().Commit(ctx).Return(nil),
				mockedTx.EXPECT().Rollback(ctx).Return(nil),
			)

			// mocking bach logs values for runs
			getInputBatches = func(batch []*syncLog) [][]interface{} {
				return inputRuns
			}
			gomock.InOrder(
				mockedPool.EXPECT().CopyFrom(ctx, pgx.Identifier{"mergestat", "repo_sync_logs"}, []string{"log_type", "message", "repo_sync_queue_id"}, pgx.CopyFromRows(inputRuns)).Return(int64(0), nil).MaxTimes(4))

			// mocking bach logs values for jobs
			getInputBatches = func(batch []*syncLog) [][]interface{} {
				return inputJobs
			}
			gomock.InOrder(
				mockedPool.EXPECT().CopyFrom(ctx, pgx.Identifier{"mergestat", "repo_sync_logs"}, []string{"log_type", "message", "repo_sync_queue_id"}, pgx.CopyFromRows(inputJobs)).Return(int64(0), nil).MaxTimes(4))

			// mocking bach logs values for inserted jobs&runs
			getInputBatches = func(batch []*syncLog) [][]interface{} {
				return inputInsertedRows
			}
			gomock.InOrder(
				mockedPool.EXPECT().CopyFrom(ctx, pgx.Identifier{"mergestat", "repo_sync_logs"}, []string{"log_type", "message", "repo_sync_queue_id"}, pgx.CopyFromRows(inputInsertedRows)).Return(int64(0), nil).MaxTimes(4))

		},
		wantErr: false,
	}}

	for _, test := range tests {
		t.Run(test.description, func(t *testing.T) {
			testJob := db.DequeueSyncJobRow{}

			//creating test warehouse
			testW := &warehouse{
				githubClient: c,
				logger:       &logger,
				pool:         mockedPool,
				db:           mockedDb,
			}

			test.mockFuncs()

			//we discard loggin messages from the bebug console
			testW.logger.Debug().Discard()
			testW.logger.Info().Discard()
			testW.logger.Warn().Discard()

			if err := testW.handleWorkflows(ctx, test.owner, test.repo, &testJob); (err != nil) != test.wantErr {
				t.Errorf("warehouse.handleWorkflows() error = %v, wantErr %v", err, test.wantErr)
			}
		})
	}
}

func Test_warehouse_WorkflowRuns(t *testing.T) {
	type testArgs struct {
		description string
		owner       string
		repo        string
		mockFuncs   func()
		wantErr     bool
	}
	totalCount := 1
	repoID := uuid.New()
	testRuns := mocks.GetWorkflowRunEmptyData()
	mockedHTTPClient := mock.NewMockedHTTPClient(
		mock.WithRequestMatch(
			mock.GetReposActionsWorkflowsRunsByOwnerByRepoByWorkflowId,
			github.WorkflowRuns{TotalCount: &totalCount, WorkflowRuns: []*github.WorkflowRun{testRuns}},
		),
		mock.WithRequestMatchHandler(
			mock.GetReposActionsJobsByOwnerByRepoByJobId,
			http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
				mock.WriteError(
					w,
					http.StatusNotFound,
					"Not Found",
				)
			}),
		),
	)

	defer func(f func(batch []*syncLog) [][]interface{}) {
		getInputBatches = f
	}(getInputBatches)

	c := github.NewClient(mockedHTTPClient)

	ctx := context.Background()

	logger := zerolog.New(os.Stderr).With().Timestamp().Logger().Level(zerolog.ErrorLevel)

	// creating a mock pool
	ctrl := gomock.NewController(t)
	defer ctrl.Finish()

	mockedPool := mocks.NewMockPooler(ctrl)

	// creating a mock db
	ctr := gomock.NewController(t)
	defer ctr.Finish()

	mockedDb := mocks.NewMockQuerier(ctr)

	//creating a mock tx
	ct := gomock.NewController(t)
	defer ct.Finish()

	mockedTx := mocks.NewMockTx(ct)

	tests := []testArgs{{
		description: "test nil handling of workflow runs",
		owner:       "mergestat",
		repo:        "mergestat",
		mockFuncs: func() {
			// formatting test values to required types
			var inputRuns [][]interface{}
			var inputJobs [][]interface{}
			jsonbPullRequest, _ := helper.InterfaceToSqlJSONB(testRuns.PullRequests)
			jsonbHeadCommit, _ := helper.InterfaceToSqlJSONB(testRuns.HeadCommit)
			runNumber := helper.GetInt32FromInt(testRuns.RunNumber)
			runAttempt := helper.GetInt32FromInt(testRuns.RunAttempt)
			workflowRunRepositoryUrl := helper.GetRepositoryURL(testRuns.Repository)
			workflowRunHeadRepoUrl := helper.GetRepositoryURL(testRuns.HeadRepository)
			testRunBatchValues := []interface{}{&syncLog{Type: SyncLogTypeInfo, Message: "starting to get all GitHub Actions runs for workflow ", RepoSyncQueueID: 0}}
			testJobBatchValue := []interface{}{&syncLog{Type: SyncLogTypeInfo, Message: "starting to get all GitHub Actions jobs for workflow ", RepoSyncQueueID: 0}}

			inputRuns = append(inputRuns, testRunBatchValues)
			inputJobs = append(inputJobs, testJobBatchValue)

			// mocking bach logs values for runs
			getInputBatches = func(batch []*syncLog) [][]interface{} {
				return inputRuns
			}
			gomock.InOrder(
				mockedPool.EXPECT().CopyFrom(ctx, pgx.Identifier{"mergestat", "repo_sync_logs"}, []string{"log_type", "message", "repo_sync_queue_id"}, pgx.CopyFromRows(inputRuns)).Return(int64(0), nil).MaxTimes(4))

			// mocking bach logs values for jobs
			getInputBatches = func(batch []*syncLog) [][]interface{} {
				return inputJobs
			}
			gomock.InOrder(
				mockedPool.EXPECT().CopyFrom(ctx, pgx.Identifier{"mergestat", "repo_sync_logs"}, []string{"log_type", "message", "repo_sync_queue_id"}, pgx.CopyFromRows(inputJobs)).Return(int64(0), nil).MaxTimes(4))

			gomock.InOrder(
				mockedPool.EXPECT().BeginTx(ctx, pgx.TxOptions{}).Return(mockedTx, nil),
				mockedDb.EXPECT().WithTx(mockedTx).Return(mockedDb),
				mockedDb.EXPECT().UpsertWorkflowRuns(ctx, db.UpsertWorkflowRunsParams{
					RepoID:            repoID,
					ID:                *testRuns.ID,
					Workflowrunnodeid: helper.StringToSqlNullString(testRuns.NodeID),
					Name:              helper.StringToSqlNullString(testRuns.Name),
					Headbranch:        helper.StringToSqlNullString(testRuns.HeadBranch),
					Runnumber:         helper.Int32ToSqlNullInt32(runNumber),
					Runattempt:        helper.Int32ToSqlNullInt32(runAttempt),
					Event:             helper.StringToSqlNullString(testRuns.Event),
					Status:            helper.StringToSqlNullString(testRuns.Status),
					Conclusion:        helper.StringToSqlNullString(testRuns.Conclusion),
					Workflowid:        *testRuns.WorkflowID,
					Checksuiteid:      helper.Int64ToSqlNullInt64(testRuns.CheckSuiteID),
					Checksuitenodeid:  helper.StringToSqlNullString(testRuns.CheckSuiteNodeID),
					Url:               helper.StringToSqlNullString(testRuns.URL),
					Htmlurl:           helper.StringToSqlNullString(testRuns.HTMLURL),
					Pullrequest:       jsonbPullRequest,
					Createdat:         helper.DateToSqlNullTime(&testRuns.CreatedAt.Time),
					Updatedat:         helper.DateToSqlNullTime(&testRuns.UpdatedAt.Time),
					Runstartedat:      helper.DateToSqlNullTime(&testRuns.RunStartedAt.Time),
					Jobsurl:           helper.StringToSqlNullString(testRuns.JobsURL),
					Logsurl:           helper.StringToSqlNullString(testRuns.LogsURL),
					Checksuiteurl:     helper.StringToSqlNullString(testRuns.CheckSuiteURL),
					Artifactsurl:      helper.StringToSqlNullString(testRuns.ArtifactsURL),
					Cancelurl:         helper.StringToSqlNullString(testRuns.CancelURL),
					Rerunurl:          helper.StringToSqlNullString(testRuns.RerunURL),
					Headcommit:        jsonbHeadCommit,
					Workflowurl:       helper.StringToSqlNullString(testRuns.WorkflowURL),
					Repositoryurl:     helper.StringToSqlNullString(workflowRunRepositoryUrl),
					Headrepositoryurl: helper.StringToSqlNullString(workflowRunHeadRepoUrl),
				}).Return(nil).MaxTimes(1),
				mockedTx.EXPECT().Commit(ctx).Return(nil),
				mockedTx.EXPECT().Rollback(ctx).Return(nil))

		},
	}}

	for _, test := range tests {
		t.Run(test.description, func(t *testing.T) {
			testJob := db.DequeueSyncJobRow{RepoID: repoID}
			testWorkflows := []*github.Workflow{{ID: new(int64), Name: new(string)}}

			//creating test warehouse
			testW := &warehouse{
				githubClient: c,
				logger:       &logger,
				pool:         mockedPool,
				db:           mockedDb,
			}

			test.mockFuncs()

			//we discard loggin messages from the bebug console
			testW.logger.Debug().Discard()
			testW.logger.Info().Discard()
			testW.logger.Warn().Discard()

			if err := testW.handleWorkflowRuns(ctx, test.owner, test.repo, &testJob, testWorkflows); (err != nil) != test.wantErr {
				t.Errorf("warehouse.handleWorkflows() error = %v, wantErr %v", err, test.wantErr)
			}
		})
	}
}

func Test_warehouse_WorkflowJobs(t *testing.T) {
	type testArgs struct {
		description string
		owner       string
		repo        string
		mockFuncs   func()
		wantErr     bool
	}

	var mockLog = new(url.URL)
	totalCount := 1
	repoID := uuid.New()
	testJobs := mocks.GetWorkflowEmptyJob()
	mockedHTTPClient := mock.NewMockedHTTPClient(
		mock.WithRequestMatch(
			mock.GetReposActionsRunsJobsByOwnerByRepoByRunId,
			github.Jobs{TotalCount: &totalCount, Jobs: []*github.WorkflowJob{testJobs}},
		),
		mock.WithRequestMatch(
			mock.GetReposActionsJobsLogsByOwnerByRepoByJobId,
			mockLog,
		),
	)

	c := github.NewClient(mockedHTTPClient)

	ctx := context.Background()

	logger := zerolog.New(os.Stderr).With().Timestamp().Logger().Level(zerolog.ErrorLevel)

	// creating a mock pool
	ctrl := gomock.NewController(t)
	defer ctrl.Finish()

	mockedPool := mocks.NewMockPooler(ctrl)

	// creating a mock db
	ctr := gomock.NewController(t)
	defer ctr.Finish()

	mockedDb := mocks.NewMockQuerier(ctr)

	//creating a mock tx
	ct := gomock.NewController(t)
	defer ct.Finish()

	mockedTx := mocks.NewMockTx(ct)

	tests := []testArgs{{
		description: "test nil handling of workflow run jobs",
		owner:       "mergestat",
		repo:        "mergestat",
		mockFuncs: func() {
			// formatting test values to required types
			jsonbSteps, _ := helper.InterfaceToSqlJSONB(testJobs.Steps)
			jsonbLabels, _ := helper.InterfaceToSqlJSONB(testJobs.Labels)
			log := mockLog.String()

			gomock.InOrder(
				mockedPool.EXPECT().BeginTx(ctx, pgx.TxOptions{}).Return(mockedTx, nil),
				mockedDb.EXPECT().WithTx(mockedTx).Return(mockedDb),
				mockedDb.EXPECT().UpsertWorkflowRunJobs(ctx, db.UpsertWorkflowRunJobsParams{
					Repoid:          repoID,
					ID:              *testJobs.ID,
					Runid:           *testJobs.RunID,
					Log:             helper.StringToSqlNullString(&log),
					Runurl:          helper.StringToSqlNullString(testJobs.RunURL),
					Jobnodeid:       helper.StringToSqlNullString(testJobs.NodeID),
					Headsha:         helper.StringToSqlNullString(testJobs.HeadSHA),
					Url:             helper.StringToSqlNullString(testJobs.URL),
					Htmlurl:         helper.StringToSqlNullString(testJobs.HTMLURL),
					Status:          helper.StringToSqlNullString(testJobs.Status),
					Conclusion:      helper.StringToSqlNullString(testJobs.Conclusion),
					Startedat:       helper.DateToSqlNullTime(&testJobs.StartedAt.Time),
					Completedat:     helper.DateToSqlNullTime(&testJobs.CompletedAt.Time),
					Workflowname:    helper.StringToSqlNullString(testJobs.Name),
					Steps:           jsonbSteps,
					Checkrunurl:     helper.StringToSqlNullString(testJobs.CheckRunURL),
					Labels:          jsonbLabels,
					Runnerid:        helper.Int64ToSqlNullInt64(testJobs.RunnerID),
					Runnername:      helper.StringToSqlNullString(testJobs.RunnerName),
					Runnergroupid:   helper.Int64ToSqlNullInt64(testJobs.RunnerGroupID),
					Runnergroupname: helper.StringToSqlNullString(testJobs.RunnerGroupName),
				}).Return(nil).MaxTimes(1),
				mockedTx.EXPECT().Commit(ctx).Return(nil),
				mockedTx.EXPECT().Rollback(ctx).Return(nil))
		},
		wantErr: false},
	}

	for _, test := range tests {
		t.Run(test.description, func(t *testing.T) {
			testJob := db.DequeueSyncJobRow{RepoID: repoID}
			testWorkflowRuns := []*github.WorkflowRun{{ID: new(int64), Name: new(string)}}
			testJobsCount := new(int)

			//creating test warehouse
			testW := &warehouse{
				githubClient: c,
				logger:       &logger,
				pool:         mockedPool,
				db:           mockedDb,
			}

			test.mockFuncs()

			//we discard loggin messages from the bebug console
			testW.logger.Debug().Discard()
			testW.logger.Info().Discard()
			testW.logger.Warn().Discard()

			if err := testW.handleWorkflowRunsJobs(ctx, test.owner, test.repo, testJob.RepoID, testWorkflowRuns, testJobsCount); (err != nil) != test.wantErr {
				t.Errorf("warehouse.handleWorkflows() error = %v, wantErr %v", err, test.wantErr)
			}
		})
	}
}
