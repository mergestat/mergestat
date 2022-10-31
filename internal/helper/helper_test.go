package helper

import (
	"errors"
	"os"
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
				t.Errorf("GetRepoOwnerAndRepoName error = %v, wantErr %v", err, test.wantErr)
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

func TestCreateTempDir(t *testing.T) {
	type testArgs struct {
		basePath    string
		pattern     string
		description string
		wantErr     bool
	}

	tests := []testArgs{
		{
			description: "successful dir creation & deletion",
			basePath:    "",
			pattern:     "",
			wantErr:     false,
		},
		{
			description: "successful dir creation & deletion with exiting params",
			basePath:    "",
			pattern:     "mergestat-test",
			wantErr:     false,
		}}

	for _, test := range tests {
		t.Run(test.description, func(t *testing.T) {
			var err error
			tempPath, cleanup, err := CreateTempDir(test.basePath, test.pattern)
			if (err != nil) != test.wantErr {
				t.Errorf("CreateTempDir error = %v, wantErr %v", err, test.wantErr)
				return
			}

			if _, err = os.OpenFile(tempPath, os.O_RDWR, 0644); errors.Is(err, os.ErrNotExist) {
				t.Errorf("CreateTempDir directory does not exits, error =%v", err)
			}

			defer func() {
				if err = cleanup(); err != nil {
					t.Errorf("cleanup error cleaning tmp dir, error =%v", err)
				}
			}()

		})
	}
}
