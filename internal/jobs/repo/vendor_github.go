package repo

import (
	"context"
	"encoding/json"
	"fmt"
	"net/http"

	"github.com/google/go-github/v50/github"
	"github.com/google/uuid"
	"github.com/jackc/pgtype"
	"github.com/mergestat/mergestat/internal/db"
	"github.com/pkg/errors"
	"golang.org/x/oauth2"
)

type fetchFunc func(ctx context.Context, page int) ([]*github.Repository, *github.Response, error)

func handleGithubImport(ctx context.Context, qry *db.Queries, imp db.FetchImportJobRow) (err error) {
	var token string
	if _, token, err = qry.FetchCredential(ctx, imp.Provider); err != nil {
		return err
	}

	var public = token == ""

	var client *github.Client
	if !public {
		var tokenSource = oauth2.StaticTokenSource(&oauth2.Token{AccessToken: token})
		client = github.NewClient(oauth2.NewClient(ctx, tokenSource))
	} else {
		client = github.NewClient(&http.Client{})
	}

	var settings struct {
		Type                   string      `json:"type"`
		Login                  string      `json:"userOrOrg"`
		RemoveDeletedRepos     bool        `json:"removeDeletedRepos"`
		IncludeArchivedRepos   bool        `json:"includeArchivedRepos"`
		DefaultSyncTypes       []string    `json:"defaultSyncTypes"`
		DefaultContainerImages []uuid.UUID `json:"defaultContainerImages"`
	}

	if err = json.Unmarshal(imp.Settings.Bytes, &settings); err != nil {
		return errors.Wrapf(err, "failed to parse import settings")
	}

	var fetchFunction fetchFunc
	switch settings.Type {
	case "GITHUB_ORG":
		var opts = &github.RepositoryListByOrgOptions{}
		if public {
			opts.Type = "public"
		}
		fetchFunction = fetchByOrg(client, settings.Login, opts)
	case "GITHUB_USER":
		var opts = &github.RepositoryListOptions{}
		if public {
			opts.Type = "public"
		}
		fetchFunction = fetchByUser(client, settings.Login, opts)
	default:
		return errors.Errorf("unknown import type: %s", settings.Type)
	}

	var repos []*github.Repository
	if repos, err = fetchRepositories(ctx, fetchFunction); err != nil {
		return errors.Wrapf(err, "failed to fetch repositories")
	}

	var repoUrls = make([]string, len(repos))
	for i, repo := range repos {
		repoUrls[i] = fmt.Sprintf("https://github.com/%s/%s", *repo.Owner.Login, *repo.Name)
	}

	// remove any deleted repositories
	if settings.RemoveDeletedRepos {
		var params = db.DeleteRemovedReposParams{Column1: imp.ID, Column2: repoUrls}
		if err = qry.DeleteRemovedRepos(ctx, params); err != nil {
			return errors.Wrapf(err, "failed to remove deleted repositories")
		}
	}

	// capture list of existing repositories before we do the upsert below
	var existing []string
	if len(settings.DefaultSyncTypes) > 0 || len(settings.DefaultContainerImages) > 0 { // only if default syncs are configured
		if existing, err = qry.GetRepoUrlFromImport(ctx, imp.ID); err != nil {
			return errors.Wrapf(err, "failed to enable default sync")
		}
	}

	// upsert all fetched repositories
	for _, repo := range repos {

		// if the import is configured to ignore archived repos, skip them here
		if !settings.IncludeArchivedRepos && repo.Archived != nil && *repo.Archived {
			continue
		}

		var topics, _ = json.Marshal(repo.Topics)
		var opts = db.UpsertRepoParams{
			Repo:         fmt.Sprintf("https://github.com/%s/%s", *repo.Owner.Login, *repo.Name),
			RepoImportID: uuid.NullUUID{Valid: true, UUID: imp.ID},
			Tags:         pgtype.JSONB{Status: pgtype.Present, Bytes: topics},
			Provider:     imp.Provider,
		}

		if err = qry.UpsertRepo(ctx, opts); err != nil {
			return errors.Wrapf(err, "failed to upsert repository")
		}
	}

	// (optional) configure default sync types
	if len(settings.DefaultSyncTypes) > 0 {
		// batch is a collection of newly added repositories
		var batch = difference(existing, repoUrls)

		// convert batch into a collection of repo ids
		var ids []uuid.UUID
		if ids, err = qry.GetRepoIDsFromRepoImport(ctx, db.GetRepoIDsFromRepoImportParams{Importid: imp.ID, Reposurls: batch}); err != nil {
			return errors.Wrapf(err, "failed to enable default sync")
		}

		// for each new repo, enable the provided syncs
		for _, id := range ids {
			for _, syncType := range settings.DefaultSyncTypes {
				var params = db.InsertNewDefaultSyncParams{Repoid: id, Synctype: syncType}
				if err = qry.InsertNewDefaultSync(ctx, params); err != nil {
					return errors.Wrapf(err, "failed to enable default sync")
				}
			}
		}

		// enqueue all newly added syncs
		if err = qry.EnqueueAllSyncs(ctx); err != nil {
			return errors.Wrapf(err, "failed to enable default sync")
		}
	}

	// (optional) configure default container images
	if len(settings.DefaultContainerImages) > 0 {
		// batch is a collection of newly added repositories
		var batch = difference(existing, repoUrls)

		// convert batch into a collection of repo ids
		var ids []uuid.UUID
		if ids, err = qry.GetRepoIDsFromRepoImport(ctx, db.GetRepoIDsFromRepoImportParams{Importid: imp.ID, Reposurls: batch}); err != nil {
			return errors.Wrapf(err, "failed to enable default container sync")
		}

		// for each new repo, enable the provided container syncs
		for _, id := range ids {
			for _, containerImageID := range settings.DefaultContainerImages {
				var params = db.EnableContainerSyncParams{Repoid: id, Containerimageid: containerImageID}
				if err = qry.EnableContainerSync(ctx, params); err != nil {
					return errors.Wrapf(err, "failed to enable default container sync")
				}
			}
		}
	}

	return qry.MarkRepoImportAsUpdated(ctx, imp.ID)
}

func fetchRepositories(ctx context.Context, fetch fetchFunc) (_ []*github.Repository, err error) {
	var result []*github.Repository
	var resp *github.Response

	var page = 1
	for {
		var repositories []*github.Repository
		if repositories, resp, err = fetch(ctx, page); err != nil {
			return repositories, err
		}
		result = append(result, repositories...)
		if resp.NextPage <= page {
			break
		}
		page = resp.NextPage
	}
	return result, err
}

func fetchByUser(client *github.Client, user string, opts *github.RepositoryListOptions) fetchFunc {
	return func(ctx context.Context, page int) ([]*github.Repository, *github.Response, error) {
		opts.Page = page
		return client.Repositories.List(ctx, user, opts)
	}
}

func fetchByOrg(client *github.Client, org string, opts *github.RepositoryListByOrgOptions) fetchFunc {
	return func(ctx context.Context, page int) ([]*github.Repository, *github.Response, error) {
		opts.Page = page
		return client.Repositories.ListByOrg(ctx, org, opts)
	}
}
