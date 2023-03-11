package repo

import (
	"context"
	"encoding/json"
	"github.com/google/uuid"
	"github.com/jackc/pgtype"
	"github.com/mergestat/mergestat/internal/db"
	bitbucket "github.com/mergestat/mergestat/internal/vendors/bitbucket/client"
	"github.com/pkg/errors"
	"golang.org/x/oauth2"
	"net/http"
)

func handleBitbucketImport(ctx context.Context, qry *db.Queries, imp db.ListRepoImportsDueForImportRow) (err error) {
	var emptyTags = []byte("[]") // bitbucket doesn't support tags

	var username, password string
	if username, password, err = qry.FetchCredential(ctx, imp.Provider); err != nil {
		return err
	}

	var client *bitbucket.Client
	if password != "" {
		var tokenSource = &bitbucket.AppPassword{Username: username, Password: password}
		client = bitbucket.NewDefaultClient(oauth2.NewClient(ctx, tokenSource))
	} else {
		client = bitbucket.NewDefaultClient(http.DefaultClient)
	}

	var settings struct {
		Owner              string   `json:"owner"`
		RemoveDeletedRepos bool     `json:"removeDeletedRepos"`
		DefaultSyncTypes   []string `json:"defaultSyncTypes"`
	}

	if err = json.Unmarshal(imp.Settings.Bytes, &settings); err != nil {
		return errors.Wrapf(err, "failed to parse import settings")
	}

	var repos []*bitbucket.Repository
	if repos, err = fetchBitbucketRepositories(ctx, client, settings.Owner); err != nil {
		return errors.Wrapf(err, "failed to fetch repositories")
	}

	var repoUrls = make([]string, len(repos))
	for i, repo := range repos {
		repoUrls[i] = repo.Links.HTML.Href
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
		var params = db.UpsertRepoParams{
			Repo:         repo.Links.HTML.Href,
			RepoImportID: uuid.NullUUID{Valid: true, UUID: imp.ID},
			Tags:         pgtype.JSONB{Status: pgtype.Present, Bytes: emptyTags},
			Provider:     imp.Provider,
		}
		if err = qry.UpsertRepo(ctx, params); err != nil {
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

func fetchBitbucketRepositories(ctx context.Context, client *bitbucket.Client, owner string) (_ []*bitbucket.Repository, err error) {
	var result []*bitbucket.Repository

	var next string
	for {
		var response *bitbucket.Paginated[*bitbucket.Repository]
		var params = bitbucket.RepositoryListOptions{Owner: owner, NextPage: next}
		if response, err = client.Repositories().List(ctx, params); err != nil {
			return nil, err
		}

		result = append(result, response.Values...)
		if next = response.Next; next == "" {
			break
		}
	}
	return result, err
}
