package warehouse

import (
	"context"
	"net/http"
	"os"
	"testing"

	"github.com/google/go-github/v47/github"
	"github.com/mergestat/mergestat/internal/db"
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
	defer func(f func(ctx context.Context, githubClient *github.Client, owner, repo string, opt *github.ListWorkflowRunsOptions) (*github.Workflows, *github.Response, error)) {
		getWorkflows = f
	}(getWorkflows)

	w := &warehouse{
		githubClient: c,
		logger:       &logger,
	}

	tests := []testArgs{{
		description: "successful workflows",
		owner:       "mergestat",
		repo:        "mergestat",
		mockFuncs: func() {

		},
		wantErr: true,
	}}

	for _, test := range tests {
		t.Run(test.description, func(t *testing.T) {

			testJob := db.DequeueSyncJobRow{}

			if err := w.handleWorkflows(ctx, test.owner, test.repo, &testJob); (err != nil) != test.wantErr {
				t.Errorf("warehouse.handleWorkflows() error = %v, wantErr %v", err, test.wantErr)
			}
		})
	}
}
