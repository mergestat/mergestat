// Package client provides a minimal client for Bitbucket Cloud REST API v2.0
package client

import (
	"net/http"
	"net/url"
)

// HttpClient is a shim over the default http.Client object
type HttpClient interface {
	Do(req *http.Request) (*http.Response, error)
}

type Client struct {
	base   *url.URL
	client HttpClient
}

// New creates a new instance of the Bitbucket REST client.
func New(base *url.URL, client HttpClient) *Client {
	return &Client{base: base, client: client}
}

// NewDefaultClient creates a new instance of the Bitbucket REST client for the hosted cloud service.
func NewDefaultClient(client HttpClient) *Client {
	var base, _ = url.Parse("https://api.bitbucket.org")
	return New(base, client)
}

// Paginated represents any paginated response from Bitbucket API
type Paginated[T any] struct {
	Size    int    `json:"size"`
	Page    int    `json:"page"`
	PageLen int    `json:"pagelen"`
	Next    string `json:"next,omitempty"`
	Prev    string `json:"prev,omitempty"`
	Values  []T    `json:"values"`
}
