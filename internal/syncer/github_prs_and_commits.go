package syncer

import (
	"context"
	"encoding/json"
	"errors"
	"fmt"
	"net/url"
	"os"
	"strconv"
	"strings"
	"time"

	"github.com/google/go-github/v50/github"
	"github.com/jackc/pgx/v4"
	"github.com/mergestat/mergestat/internal/db"
	"github.com/mergestat/mergestat/internal/helper"
	"github.com/mergestat/mergestat/queries"
	uuid "github.com/satori/go.uuid"
	"golang.org/x/oauth2"
)

func (w *worker) handleGitHubRepoPRsAndCommits(ctx context.Context, j *db.DequeueSyncJobRow) error {
	var err error
	l := w.loggerForJob(j)

	// indicate that we're starting query execution
	if err := w.sendBatchLogMessages(ctx, []*syncLog{{Type: SyncLogTypeInfo, RepoSyncQueueID: j.ID,
		Message: fmt.Sprintf(LogFormatStartingSync, j.SyncType, j.Repo),
	}}); err != nil {
		return fmt.Errorf("send batch log messages: %w", err)
	}

	var ghToken string
	if _, ghToken, err = w.fetchCredentials(ctx, j); err != nil {
		return err
	}

	if len(ghToken) <= 0 {
		return errGitHubTokenRequired
	}

	id, err := uuid.FromString(j.RepoID.String())
	if err != nil {
		return fmt.Errorf("parse uuid: %w", err)
	}
	u, err := url.Parse(j.Repo)
	if err != nil {
		return fmt.Errorf("url parse: %w", err)
	}
	components := strings.Split(u.Path, "/")
	repoOwner := components[1]
	repoName := components[2]

	prsToInsert := make([]*githubRepoPR, 0)

	ts := oauth2.StaticTokenSource(
		&oauth2.Token{AccessToken: ghToken},
	)

	tc := oauth2.NewClient(ctx, ts)
	if len(ghToken) <= 0 {
		tc = nil
	}

	client := github.NewClient(tc)

	var perPage = 50 // match the default used by mergestat-lite
	if perPageEnv := os.Getenv("GITHUB_PER_PAGE"); perPageEnv != "" {
		if perPage, err = strconv.Atoi(perPageEnv); err != nil {
			l.Error().Err(err).Msg("could not parse GITHUB_PER_PAGE")
		}
	}

	opt := &github.ListOptions{PerPage: perPage}
	allPRs := make([]*github.PullRequest, 0)

	for {
		page, resp, err := client.PullRequests.List(ctx, repoOwner, repoName, &github.PullRequestListOptions{
			State:       "all",
			ListOptions: *opt,
		})
		if err != nil {
			return err
		}

		allPRs = append(allPRs, page...)

		// TODO(patrickdevivo) add additional context to this log message
		// also send to database?
		w.logger.Info().Msgf("fetched page of GitHub pull requests")

		helper.RestRatelimitHandler(ctx, resp, w.logger, queries.NewQuerier(w.db), true)

		if resp.NextPage == 0 {
			break
		}
		opt.Page = resp.NextPage
	}

	for _, pr := range allPRs {
		fetchedPR, resp, err := client.PullRequests.Get(ctx, repoOwner, repoName, pr.GetNumber())
		if err != nil {
			return err
		}
		helper.RestRatelimitHandler(ctx, resp, w.logger, queries.NewQuerier(w.db), true)

		// TODO(patrickdevivo) also send to db
		w.logger.Info().Msgf("fetched GitHub pull request %d", fetchedPR.GetNumber())

		closed := fetchedPR.ClosedAt != nil
		dbID := int(fetchedPR.GetID())
		var closedAt *time.Time
		if fetchedPR.ClosedAt != nil {
			closedAt = &fetchedPR.ClosedAt.Time
		}
		var createdAt *time.Time
		if fetchedPR.CreatedAt != nil {
			closedAt = &fetchedPR.CreatedAt.Time
		}
		labelCount := len(fetchedPR.Labels)
		labels, err := json.Marshal(fetchedPR.Labels)
		if err != nil {
			return fmt.Errorf("marshal labels: %w", err)
		}
		var headRepositoryName *string
		if fetchedPR.Head.Repo != nil {
			headRepositoryName = fetchedPR.Head.Repo.FullName
		}
		var mergedAt *time.Time
		if fetchedPR.MergedAt != nil {
			closedAt = &fetchedPR.MergedAt.Time
		}
		var mergedByLogin *string
		if fetchedPR.MergedBy != nil {
			mergedByLogin = fetchedPR.MergedBy.Login
		}
		var updatedAt *time.Time
		if fetchedPR.UpdatedAt != nil {
			closedAt = &fetchedPR.UpdatedAt.Time
		}

		prsToInsert = append(prsToInsert, &githubRepoPR{
			Additions:           fetchedPR.Additions,
			AuthorLogin:         fetchedPR.User.Login,
			AuthorAssociation:   fetchedPR.AuthorAssociation,
			AuthorAvatarURL:     fetchedPR.User.AvatarURL,
			AuthorName:          fetchedPR.User.Name,
			BaseRefOID:          fetchedPR.Base.SHA,
			BaseRefName:         fetchedPR.Base.Ref,
			BaseRepositoryName:  fetchedPR.Base.Repo.FullName,
			Body:                fetchedPR.Body,
			ChangedFiles:        fetchedPR.ChangedFiles,
			Closed:              &closed,
			ClosedAt:            closedAt,
			CommentCount:        fetchedPR.Comments,
			CommitCount:         fetchedPR.Commits,
			CreatedAt:           createdAt,
			CreatedViaEmail:     nil,
			DatabaseID:          &dbID,
			Deletions:           fetchedPR.Deletions,
			EditorLogin:         nil,
			HeadRefName:         fetchedPR.Head.Ref,
			HeadRefOID:          fetchedPR.Head.SHA,
			HeadRepositoryName:  headRepositoryName,
			IsDraft:             fetchedPR.Draft,
			LabelCount:          &labelCount,
			LastEditedAt:        nil,
			Locked:              fetchedPR.Locked,
			MaintainerCanModify: fetchedPR.MaintainerCanModify,
			Mergeable:           nil,
			Merged:              fetchedPR.Merged,
			MergedAt:            mergedAt,
			MergedBy:            mergedByLogin,
			Number:              fetchedPR.Number,
			ParticipantCount:    nil,
			PublishedAt:         nil,
			ReviewDecision:      nil,
			State:               fetchedPR.State,
			Title:               fetchedPR.Title,
			UpdatedAt:           updatedAt,
			URL:                 fetchedPR.URL,
			Labels:              labels,
		})
	}

	allPRCommitsToInsert := make([]*githubPRCommit, 0)

	for _, pr := range allPRs {
		opt := &github.ListOptions{PerPage: perPage}
		for {
			page, resp, err := client.PullRequests.ListCommits(ctx, repoOwner, repoName, pr.GetNumber(), opt)
			if err != nil {
				return err
			}

			w.logger.Info().Msgf("fetched page of commits for PR %d", pr.GetNumber())

			helper.RestRatelimitHandler(ctx, resp, w.logger, queries.NewQuerier(w.db), true)

			for _, commit := range page {
				var additions, deletions *int
				if commit.Stats != nil {
					additions = commit.Stats.Additions
					deletions = commit.Stats.Deletions
				}
				allPRCommitsToInsert = append(allPRCommitsToInsert, &githubPRCommit{
					PRNumber:       pr.Number,
					Hash:           commit.SHA,
					Message:        commit.Commit.Message,
					AuthorName:     commit.Commit.Author.Name,
					AuthorEmail:    commit.Commit.Author.Email,
					AuthorWhen:     &commit.Commit.Author.Date.Time,
					CommitterName:  commit.Commit.Committer.Name,
					CommitterEmail: commit.Commit.Committer.Email,
					CommitterWhen:  &commit.Commit.Committer.Date.Time,
					Additions:      additions,
					Deletions:      deletions,
					ChangedFiles:   nil,
					URL:            commit.URL,
				})
			}

			if resp.NextPage == 0 {
				break
			}
			opt.Page = resp.NextPage
		}
	}

	var tx pgx.Tx
	if tx, err = w.pool.BeginTx(ctx, pgx.TxOptions{}); err != nil {
		return fmt.Errorf("begin tx: %w", err)
	}
	defer func() {
		if err := tx.Rollback(ctx); err != nil {
			if !errors.Is(err, pgx.ErrTxClosed) {
				w.logger.Err(err).Msgf("rollback transaction: %v", err)
			}
		}
	}()

	// Delete all rows from github_pull_requests and github_pull_request_commits
	r, err := tx.Exec(ctx, "DELETE FROM github_pull_requests WHERE repo_id = $1;", j.RepoID.String())
	if err != nil {
		return fmt.Errorf("delete rows: %w", err)
	}

	if err := w.sendBatchLogMessages(ctx, []*syncLog{{
		Type:            SyncLogTypeInfo,
		RepoSyncQueueID: j.ID,
		Message:         fmt.Sprintf("removed %d row(s) from github_pull_requests", r.RowsAffected()),
	}}); err != nil {
		return err
	}

	r, err = tx.Exec(ctx, "DELETE FROM github_pull_request_commits WHERE repo_id = $1;", j.RepoID.String())
	if err != nil {
		return fmt.Errorf("exec delete: %w", err)
	}

	if err := w.sendBatchLogMessages(ctx, []*syncLog{{
		Type:            SyncLogTypeInfo,
		RepoSyncQueueID: j.ID,
		Message:         fmt.Sprintf("removed %d row(s) from github_pull_request_commits", r.RowsAffected()),
	}}); err != nil {
		return err
	}

	// Insert all rows into github_pull_requests and github_pull_request_commits
	if err := w.sendBatchGitHubRepoPRs(ctx, tx, id, prsToInsert); err != nil {
		return fmt.Errorf("insert PRs: %w", err)
	}

	l.Info().Msgf("inserted repo PRs: %d", len(prsToInsert))

	if err := w.sendBatchLogMessages(ctx, []*syncLog{{
		Type:            SyncLogTypeInfo,
		RepoSyncQueueID: j.ID,
		Message:         fmt.Sprintf("inserted %d row(s) into github_pull_requests", len(prsToInsert)),
	}}); err != nil {
		return err
	}

	if err := w.sendBatchGitHubPRCommits(ctx, tx, id, allPRCommitsToInsert); err != nil {
		return fmt.Errorf("insert pr commits: %w", err)
	}

	if err := w.sendBatchLogMessages(ctx, []*syncLog{{
		Type:            SyncLogTypeInfo,
		RepoSyncQueueID: j.ID,
		Message:         fmt.Sprintf("inserted %d row(s) into github_pull_request_commits", len(allPRCommitsToInsert)),
	}}); err != nil {
		return err
	}

	if err := w.db.WithTx(tx).SetSyncJobStatus(ctx, db.SetSyncJobStatusParams{Status: "DONE", ID: j.ID}); err != nil {
		return fmt.Errorf("sync job done: %w", err)
	}

	// indicate that we're finishing query execution
	if err := w.sendBatchLogMessages(ctx, []*syncLog{{Type: SyncLogTypeInfo, RepoSyncQueueID: j.ID,
		Message: fmt.Sprintf(LogFormatFinishingSync, j.SyncType, j.Repo),
	}}); err != nil {
		return fmt.Errorf("send batch log messages: %w", err)
	}

	return tx.Commit(ctx)
}
