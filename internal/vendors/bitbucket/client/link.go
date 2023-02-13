package client

// Link represents a URI in Bitbucket.
// See: https://developer.atlassian.com/cloud/bitbucket/rest/intro/#uri-uuid
type Link struct {
	Name string `json:"name,omitempty"`
	Href string `json:"href"`
}
