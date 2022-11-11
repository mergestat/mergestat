package warehouse

import (
	"context"
	"net/http"
	"os"
	"testing"

	"github.com/golang/mock/gomock"
	"github.com/google/go-github/v47/github"
	"github.com/jackc/pgx/v4/pgxpool"
	"github.com/mergestat/mergestat/internal/db"
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

	mockedHTTPClient := mock.NewMockedHTTPClient(
		mock.WithRequestMatchHandler(
			mock.GetReposActionsWorkflowsByOwnerByRepo,
			http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
				mock.WriteError(
					w,
					http.StatusGone,
					"github went belly up or something",
				)
			}),
		),
	)
	c := github.NewClient(mockedHTTPClient)

	ctx := context.Background()

	logger := zerolog.New(os.Stderr).With().Timestamp().Logger().Level(zerolog.InfoLevel)

	// creating a mock pool
	ctrl := gomock.NewController(t)
	defer ctrl.Finish()

	pool := mocks.NewMockFakePoolInterface(ctrl)

	var mockedPool *pgxpool.Pool

	//expecting initial connection
	pool.EXPECT().Connect(ctx, os.Getenv("POSTGRES_CONNECTION"))

	mockedPool, _ = pool.Connect(ctx, os.Getenv("POSTGRES_CONNECTION"))

	defer mockedPool.Close()

	tests := []testArgs{{
		description: "successful workflows",
		owner:       "mergestat",
		repo:        "mergestat",
		mockFuncs: func() {
			pool.EXPECT().CopyFrom(ctx, "mergestat", "repo_sync_logs", []string{"log_type", "message", "repo_sync_queue_id"})
		},
		wantErr: true,
	}}

	for _, test := range tests {
		t.Run(test.description, func(t *testing.T) {

			testJob := db.DequeueSyncJobRow{}

			//creating test warehouse
			testW := &warehouse{
				githubClient: c,
				logger:       &logger,
				pool:         mockedPool,
			}

			if err := testW.handleWorkflows(ctx, test.owner, test.repo, &testJob); (err != nil) != test.wantErr {
				t.Errorf("warehouse.handleWorkflows() error = %v, wantErr %v", err, test.wantErr)
			}
		})
	}
}
