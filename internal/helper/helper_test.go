package helper

import (
	"testing"
)

func TestGetRepoOwnerAndRepoName(t *testing.T) {
	type testArgs struct {
		value       string
		description string
		wantOwner   string
		wantRepo    string
		wantErr     bool
	}

	tests := []testArgs{
		{
			description: "successful operation with https",
			value:       "https://github.com/mergestat/mergestat-lite",
			wantOwner:   "mergestat",
			wantRepo:    "mergestat-lite",
			wantErr:     false,
		},
		{
			description: "successful operation with http",
			value:       "http://github.com/mergestat/mergestat-lite",
			wantOwner:   "mergestat",
			wantRepo:    "mergestat-lite",
			wantErr:     false,
		}}

	for _, test := range tests {
		t.Run(test.description, func(t *testing.T) {
			gotOwner, gotRepo, err := GetRepoOwnerAndRepoName(test.value)
			if (err != nil) != test.wantErr {
				t.Errorf("GetRepoOwnerAndRepoName() error = %v, wantErr %v", err, test.wantErr)
				return
			}
			if gotOwner != test.wantOwner {
				t.Errorf("GetRepoOwnerAndRepoName gotOwner = %v, want %v", gotOwner, test.wantOwner)
			}

			if gotRepo != test.wantRepo {
				t.Errorf("GetRepoOwnerAndRepoName gotRepo = %v, want %v", gotRepo, test.wantRepo)
			}
		})
	}
}
