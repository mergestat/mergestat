package client

import (
	"context"
	"encoding/json"
	"github.com/google/uuid"
	"net/http"
	"time"
)

// Repository represents a single repository entry in Bitbucket
type Repository struct {
	UUID        uuid.UUID `json:"uuid"`
	FullName    string    `json:"full_name"`
	Name        string    `json:"name"`
	Slug        string    `json:"slug"`
	Description string    `json:"description"`
	Scm         string    `json:"scm"`
	Website     string    `json:"website"`
	IsPrivate   bool      `json:"is_private"`
	ForkPolicy  string    `json:"fork_policy"`
	CreatedOn   time.Time `json:"created_on"`
	UpdatedOn   time.Time `json:"updated_on"`
	Size        int       `json:"size"`
	Language    string    `json:"language"`
	HasIssues   bool      `json:"has_issues"`
	HasWiki     bool      `json:"has_wiki"`
	Links       struct {
		Self         Link   `json:"self"`
		HTML         Link   `json:"html"`
		Avatar       Link   `json:"avatar"`
		PullRequests Link   `json:"pullrequests"`
		Commits      Link   `json:"commits"`
		Forks        Link   `json:"forks"`
		Watchers     Link   `json:"watchers"`
		Branches     Link   `json:"branches"`
		Tags         Link   `json:"tags"`
		Downloads    Link   `json:"downloads"`
		Source       Link   `json:"source"`
		Clone        []Link `json:"clone"`
		Hooks        Link   `json:"hooks"`
	} `json:"links"`

	Owner struct {
		DisplayName string    `json:"display_name"`
		UUID        uuid.UUID `json:"uuid"`
		AccountID   string    `json:"account_id"`
		Nickname    string    `json:"nickname"`
		Links       struct {
			Self   Link `json:"self"`
			Avatar Link `json:"avatar"`
			HTML   Link `json:"html"`
		} `json:"links"`
	} `json:"owner"`
	Workspace struct {
		UUID  uuid.UUID `json:"uuid"`
		Name  string    `json:"name"`
		Slug  string    `json:"slug"`
		Links struct {
			Avatar Link `json:"avatar"`
			HTML   Link `json:"html"`
			Self   Link `json:"self"`
		} `json:"links"`
	} `json:"workspace"`
	Project struct {
		UUID  uuid.UUID `json:"uuid"`
		Key   string    `json:"key"`
		Name  string    `json:"name"`
		Links struct {
			Self   Link `json:"self"`
			HTML   Link `json:"html"`
			Avatar Link `json:"avatar"`
		} `json:"links"`
	} `json:"project"`
}

// Repositories return a service that interacts with /2.0/repositories endpoint.
func (client *Client) Repositories() *RepositoryService { return &RepositoryService{c: client} }

// RepositoryService represents a service that interacts with /2.0/repositories endpoint.
type RepositoryService struct{ c *Client }

type RepositoryListOptions struct {
	Owner    string
	NextPage string
}

// List returns a paginated list of Bitbucket repository items
func (rs *RepositoryService) List(ctx context.Context, opts RepositoryListOptions) (_ *Paginated[*Repository], err error) {
	var target = rs.c.base.JoinPath("/2.0/repositories", opts.Owner).String()
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

	var result *Paginated[*Repository]
	if err = json.NewDecoder(response.Body).Decode(&result); err != nil {
		return nil, err
	}

	return result, nil
}
