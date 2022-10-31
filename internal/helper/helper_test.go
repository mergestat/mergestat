package helper

import (
	"testing"

	"github.com/rs/zerolog"
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

func TestCreateTempDir(t *testing.T) {
	type args struct {
		l       *zerolog.Logger
		envPath string
		pattern string
	}
	tests := []struct {
		name    string
		args    args
		want    string
		want1   func()
		wantErr bool
	}{
		// TODO: Add test cases.
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			/*got, got1, err := CreateTempDir(tt.args.l, tt.args.envPath, tt.args.pattern)
			if (err != nil) != tt.wantErr {
				t.Errorf("CreateTempDir() error = %v, wantErr %v", err, tt.wantErr)
				return
			}
			if got != tt.want {
				t.Errorf("CreateTempDir() got = %v, want %v", got, tt.want)
			}
			if !reflect.DeepEqual(got1, tt.want1) {
				t.Errorf("CreateTempDir() got1 = %v, want %v", got1, tt.want1)
			}*/
		})
	}
}
