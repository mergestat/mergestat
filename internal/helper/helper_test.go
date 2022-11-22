package helper

import (
	"errors"
	"os"
	"reflect"
	"testing"

	"github.com/google/go-github/v47/github"
)

func TestGetRepoOwnerAndRepoName(t *testing.T) {
	type testArgs struct {
		value       string
		description string
		wantOwner   string
		wantRepo    string
		errCheck    func(*testing.T, error)
	}

	tests := []testArgs{
		{
			description: "successful operation with https",
			value:       "https://github.com/mergestat/mergestat-lite",
			wantOwner:   "mergestat",
			wantRepo:    "mergestat-lite",
			errCheck:    nil,
		},
		{
			description: "successful operation with http",
			value:       "http://github.com/mergestat/mergestat-lite",
			wantOwner:   "mergestat",
			wantRepo:    "mergestat-lite",
			errCheck:    nil,
		},
		{
			description: "error operation with invalid url",
			value:       "mergestat/mergestat-lite",
			wantOwner:   "mergestat",
			wantRepo:    "mergestat-lite",
			errCheck: func(t *testing.T, err error) {
				if err == nil {
					t.Fatalf("GetRepoOwnerAndRepoName() error = %v, wantErr %v", err, true)
				}
			},
		},
	}

	for _, test := range tests {
		t.Run(test.description, func(t *testing.T) {
			gotOwner, gotRepo, err := GetRepoOwnerAndRepoName(test.value)
			if err != nil {
				if test.errCheck != nil {
					test.errCheck(t, err)
				} else {
					t.Errorf("GetRepoOwnerAndRepoName unexpected error = %v", err)
				}
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
		errCheck    func(*testing.T, error)
	}

	tests := []testArgs{
		{
			description: "successful dir creation & deletion",
			basePath:    "",
			pattern:     "",
			errCheck:    nil,
		},
		{
			description: "successful dir creation & deletion with exiting params",
			basePath:    "",
			pattern:     "mergestat-test",
			errCheck:    nil,
		}}

	for _, test := range tests {
		t.Run(test.description, func(t *testing.T) {
			var err error
			tempPath, cleanup, err := CreateTempDir(test.basePath, test.pattern)
			if err != nil {
				if test.errCheck != nil {
					test.errCheck(t, err)
				} else {
					t.Errorf("CreateTempDir unexpected error = %v", err)
				}
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

func TestGetInt32FromInt(t *testing.T) {
	type testArgs struct {
		description string
		testValue   *int
	}

	var testValue *int

	tests := []testArgs{{
		description: "nil management",
		testValue:   testValue,
	}}

	for _, test := range tests {
		t.Run(test.description, func(t *testing.T) {
			got := GetInt32FromInt(test.testValue)

			if reflect.TypeOf(got) != reflect.TypeOf(new(int32)) {
				t.Fatal("value should be *int32")
			}

		})
	}
}

func TestGetRepositoryURL(t *testing.T) {
	type testArgs struct {
		description string
		testValue   *github.Repository
	}

	var testValue *github.Repository

	tests := []testArgs{{
		description: "nil management",
		testValue:   testValue,
	}}

	for _, test := range tests {
		t.Run(test.description, func(t *testing.T) {
			got := GetRepositoryURL(test.testValue)

			if reflect.TypeOf(got) != reflect.TypeOf(new(string)) {
				t.Fatal("value should be of type *string")
			}
		})
	}
}
