package mocks

import (
	"time"

	"github.com/google/go-github/v50/github"
)

func GetWorkflowRunEmptyData() *github.WorkflowRun {
	var headBranch *string
	var headSHA *string
	var event *string
	var URL *string
	var nodeID *string
	var status *string
	var conclusion *string
	var checkSuiteNodeID *string
	var HTMLURL *string
	var jobsURL *string
	var logsURL *string
	var checkSuiteURL *string
	var artifactsURL *string
	var cancelURL *string
	var rerunURL *string
	var previousAttemptURL *string
	var workflowURL *string
	var runNumber *int
	var runAttempt *int
	var workflowID *int64
	var checkSuiteID *int64
	var headCommit *github.HeadCommit
	var pullRequest []*github.PullRequest
	id := new(int64)

	return &github.WorkflowRun{
		ID: id, Name: new(string),
		NodeID:             nodeID,
		CreatedAt:          &github.Timestamp{Time: time.Time{}},
		UpdatedAt:          &github.Timestamp{Time: time.Time{}},
		URL:                URL,
		HeadBranch:         headBranch,
		RunNumber:          runNumber,
		HeadSHA:            headSHA,
		RunAttempt:         runAttempt,
		Event:              event,
		Status:             status,
		Conclusion:         conclusion,
		WorkflowID:         workflowID,
		CheckSuiteID:       checkSuiteID,
		CheckSuiteNodeID:   checkSuiteNodeID,
		HTMLURL:            HTMLURL,
		PullRequests:       pullRequest,
		RunStartedAt:       &github.Timestamp{Time: time.Time{}},
		JobsURL:            jobsURL,
		LogsURL:            logsURL,
		CheckSuiteURL:      checkSuiteURL,
		ArtifactsURL:       artifactsURL,
		CancelURL:          cancelURL,
		RerunURL:           rerunURL,
		PreviousAttemptURL: previousAttemptURL,
		HeadCommit:         headCommit,
		WorkflowURL:        workflowURL,
		Repository:         &github.Repository{},
		HeadRepository:     &github.Repository{},
		Actor:              &github.User{},
	}
}

func GetWorkflowEmptyData() *github.Workflow {
	var path *string
	var State *string
	var URL *string
	var HTMLURL *string
	var BadgeURL *string
	id := new(int64)

	return &github.Workflow{ID: id, Name: new(string),
		Path:      path,
		State:     State,
		CreatedAt: &github.Timestamp{},
		UpdatedAt: &github.Timestamp{},
		URL:       URL,
		HTMLURL:   HTMLURL,
		BadgeURL:  BadgeURL,
	}
}

func GetWorkflowEmptyJob() *github.WorkflowJob {
	var name = new(string)
	var headSHA *string
	var URL *string
	var nodeID *string
	var status *string
	var conclusion *string
	var HTMLURL *string
	var runURL *string
	var checkRunURL *string
	var labels []string
	var runID *int64
	var runnedID *int64
	var runnerGroupID *int64
	var runnerName *string
	var runnerGroupName *string
	var steps []*github.TaskStep
	id := new(int64)

	return &github.WorkflowJob{ID: id,
		RunID:           runID,
		RunURL:          runURL,
		NodeID:          nodeID,
		HeadSHA:         headSHA,
		URL:             URL,
		HTMLURL:         HTMLURL,
		Status:          status,
		Conclusion:      conclusion,
		StartedAt:       &github.Timestamp{Time: time.Time{}},
		CompletedAt:     &github.Timestamp{Time: time.Time{}},
		Name:            name,
		Steps:           steps,
		CheckRunURL:     checkRunURL,
		Labels:          labels,
		RunnerID:        runnedID,
		RunnerName:      runnerName,
		RunnerGroupID:   runnerGroupID,
		RunnerGroupName: runnerGroupName,
	}

}
