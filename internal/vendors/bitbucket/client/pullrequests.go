package client

import (
	"context"
	"encoding/json"
	"net/http"
	"time"
)

// PullRequest represents a single pull request entry in Bitbucket
type PullRequest struct {
	CommentCount      int    `json:"comment_count"`
	TaskCount         int    `json:"task_count"`
	Type              string `json:"type"`
	ID                int    `json:"id"`
	Title             string `json:"title"`
	Description       string `json:"description"`
	State             string `json:"state"`
	MergeCommit       any    `json:"merge_commit"`
	CloseSourceBranch bool   `json:"close_source_branch"`
	ClosedBy          any    `json:"closed_by"`
	Author            struct {
		DisplayName string `json:"display_name"`
		Links       struct {
			Self   Link `json:"self"`
			Avatar Link `json:"avatar"`
			HTML   Link `json:"html"`
		} `json:"links"`
		Type      string `json:"type"`
		UUID      string `json:"uuid"`
		AccountID string `json:"account_id"`
		Nickname  string `json:"nickname"`
	} `json:"author"`
	Reason      string    `json:"reason"`
	CreatedOn   time.Time `json:"created_on"`
	UpdatedOn   time.Time `json:"updated_on"`
	Destination struct {
		Branch struct {
			Name string `json:"name"`
		} `json:"branch"`
		Commit struct {
			Type  string `json:"type"`
			Hash  string `json:"hash"`
			Links struct {
				Self Link `json:"self"`
				HTML Link `json:"html"`
			} `json:"links"`
		} `json:"commit"`
		Repository struct {
			Type     string `json:"type"`
			FullName string `json:"full_name"`
			Links    struct {
				Self   Link `json:"self"`
				HTML   Link `json:"html"`
				Avatar Link `json:"avatar"`
			} `json:"links"`
			Name string `json:"name"`
			UUID string `json:"uuid"`
		} `json:"repository"`
	} `json:"destination"`
	Source struct {
		Branch struct {
			Name string `json:"name"`
		} `json:"branch"`
		Commit struct {
			Type  string `json:"type"`
			Hash  string `json:"hash"`
			Links struct {
				Self Link `json:"self"`
				HTML Link `json:"html"`
			} `json:"links"`
		} `json:"commit"`
		Repository struct {
			Type     string `json:"type"`
			FullName string `json:"full_name"`
			Links    struct {
				Self   Link `json:"self"`
				HTML   Link `json:"html"`
				Avatar Link `json:"avatar"`
			} `json:"links"`
			Name string `json:"name"`
			UUID string `json:"uuid"`
		} `json:"repository"`
	} `json:"source"`
	Links struct {
		Self           Link `json:"self"`
		HTML           Link `json:"html"`
		Commits        Link `json:"commits"`
		Approve        Link `json:"approve"`
		RequestChanges Link `json:"request-changes"`
		Diff           Link `json:"diff"`
		Diffstat       Link `json:"diffstat"`
		Comments       Link `json:"comments"`
		Activity       Link `json:"activity"`
		Merge          Link `json:"merge"`
		Decline        Link `json:"decline"`
		Statuses       Link `json:"statuses"`
	} `json:"links"`
	Summary struct {
		Type   string `json:"type"`
		Raw    string `json:"raw"`
		Markup string `json:"markup"`
		HTML   string `json:"html"`
	} `json:"summary"`
}

// PullRequests return a service that interacts with /2.0/repositories/{}/{}/pullrequests endpoint.
func (client *Client) PullRequests() *PullRequestService { return &PullRequestService{c: client} }

// PullRequestService represents a service that interacts with /2.0/repositories/{}/{}/pullrequests endpoint.
type PullRequestService struct{ c *Client }

type PullRequestListOptions struct {
	Owner    string
	RepoName string
	NextPage string
}

// List returns a paginated list of Bitbucket pull request items
func (rs *PullRequestService) List(ctx context.Context, opts PullRequestListOptions) (_ *Paginated[*PullRequest], err error) {
	var target = rs.c.base.JoinPath("/2.0/repositories", opts.Owner, opts.RepoName, "pullrequests").String()
	if opts.NextPage != "" {
		target = opts.NextPage
	}
	var request, _ = http.NewRequest(http.MethodGet, target, http.NoBody)
	request = request.WithContext(ctx)

	var response *http.Response
	if response, err = rs.c.client.Do(request); err != nil {
		return nil, err
	}
	defer response.Body.Close()

	var result *Paginated[*PullRequest]
	if err = json.NewDecoder(response.Body).Decode(&result); err != nil {
		return nil, err
	}

	return result, nil
}
