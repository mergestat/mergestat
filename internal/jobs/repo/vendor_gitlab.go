package repo

import (
	"context"
	"encoding/json"
	"net/http"
	"strings"

	"github.com/google/uuid"
	"github.com/jackc/pgtype"
	"github.com/mergestat/mergestat/internal/db"
	"github.com/pkg/errors"
	"github.com/xanzy/go-gitlab"
)

func handleGitlabImport(ctx context.Context, qry *db.Queries, imp db.FetchImportJobRow) (err error) {
	var token string
	if _, token, err = qry.FetchCredential(ctx, imp.Provider); err != nil {
		return err
	}
	var client = gitlab.NewClient(http.DefaultClient, token)

	var settings struct {
		Type               string   `json:"type"`
		Login              string   `json:"userOrGroup"`
		RemoveDeletedRepos bool     `json:"removeDeletedRepos"`
		DefaultSyncTypes   []string `json:"defaultSyncTypes"`
	}

	if err = json.Unmarshal(imp.Settings.Bytes, &settings); err != nil {
		return errors.Wrapf(err, "failed to parse import settings")
	}

	var fetchFunction func(int) ([]*gitlab.Project, *gitlab.Response, error)
	switch settings.Type {
	case "GITLAB_USER":
		var opts = &gitlab.ListProjectsOptions{}
		if token == "" {
			opts.Visibility = gitlab.Visibility(gitlab.PublicVisibility)
		}
		fetchFunction = fetchByGitlabUser(client, settings.Login, opts)
	case "GITLAB_GROUP":
		var opts = &gitlab.ListGroupProjectsOptions{}
		if token == "" {
			opts.Visibility = gitlab.Visibility(gitlab.PublicVisibility)
		}
		fetchFunction = fetchByGitlabGroup(client, settings.Login, opts)
	default:
		return errors.Errorf("unknown import type: %s", settings.Type)
	}

	var repos []*gitlab.Project
	if repos, err = fetchGitlabRepositories(ctx, fetchFunction); err != nil {
		return errors.Wrapf(err, "failed to fetch repositories")
	}

	var repoUrls = make([]string, len(repos))
	for i, repo := range repos {
		repoUrls[i] = strings.TrimSuffix(repo.HTTPURLToRepo, ".git")
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
	if len(settings.DefaultSyncTypes) > 0 { // only if defaultSyncTypes is configured
		if existing, err = qry.GetRepoUrlFromImport(ctx, imp.ID); err != nil {
			return errors.Wrapf(err, "failed to enable default sync")
		}
	}

	// upsert all fetched repositories
	for _, repo := range repos {
		var topics, _ = json.Marshal(repo.TagList)
		var opts = db.UpsertRepoParams{
			Repo:         strings.TrimSuffix(repo.HTTPURLToRepo, ".git"),
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

	return qry.MarkRepoImportAsUpdated(ctx, imp.ID)
}

func fetchGitlabRepositories(ctx context.Context, fetch func(int) ([]*gitlab.Project, *gitlab.Response, error)) (_ []*gitlab.Project, err error) {
	var result []*gitlab.Project
	var resp *gitlab.Response

	var page = 0
	for {
		select {
		case <-ctx.Done():
			return result, ctx.Err()
		default:
		}

		var repositories []*gitlab.Project
		if repositories, resp, err = fetch(page); err != nil {
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

func fetchByGitlabUser(client *gitlab.Client, user string, opts *gitlab.ListProjectsOptions) func(int) ([]*gitlab.Project, *gitlab.Response, error) {
	return func(page int) ([]*gitlab.Project, *gitlab.Response, error) {
		opts.Page = page
		return client.Projects.ListUserProjects(user, opts)
	}
}

func fetchByGitlabGroup(client *gitlab.Client, group string, opts *gitlab.ListGroupProjectsOptions) func(int) ([]*gitlab.Project, *gitlab.Response, error) {
	return func(page int) ([]*gitlab.Project, *gitlab.Response, error) {
		opts.Page = page
		return client.Groups.ListGroupProjects(group, opts)
	}
}
