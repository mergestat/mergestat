BEGIN;

ALTER TABLE mergestat.repo_sync_types
ADD COLUMN short_name text NOT NULL DEFAULT '';

UPDATE
mergestat.repo_sync_types
SET
    description =(
        CASE
            WHEN TYPE = 'GIT_COMMITS'
                THEN 'Retrieves the commit history of a repo'
            WHEN TYPE = 'GIT_COMMIT_STATS'
                THEN 'Retrieves commit stats for a repo'
            WHEN TYPE = 'GIT_FILES'
                THEN 'Retrieves files (content and paths) of a git repo'
            WHEN TYPE = 'GITHUB_PR_COMMITS'
                THEN 'Retrieves commits for all pull requests in a GitHub repo'
            WHEN TYPE = 'GITHUB_PR_REVIEWS'
                THEN 'Retrieves the reviews of all pull requests in a GitHub repo'
            WHEN TYPE = 'GITHUB_REPO_ISSUES'
                THEN 'Retrieves all the issues of a GitHub repo'
            WHEN TYPE = 'GITHUB_REPO_METADATA'
                THEN 'Retrieves metadata about a GitHub repo'
            WHEN TYPE = 'GITHUB_REPO_PRS'
                THEN 'Retrieves all the pull requests of a GitHub repo'
            WHEN TYPE = 'GITHUB_REPO_STARS'
                THEN 'Retrieves all stargazers of a GitHub repo'
            WHEN TYPE = 'GIT_REFS'
                THEN 'Retrieves all the refs of a git repo'
        END ),
    short_name =(
        CASE
            WHEN TYPE = 'GIT_COMMITS'
                THEN 'Git Commits'
            WHEN TYPE = 'GIT_COMMIT_STATS'
                THEN 'Git Commit Stats'
            WHEN TYPE = 'GIT_FILES'
                THEN 'Git Files'
            WHEN TYPE = 'GITHUB_PR_COMMITS'
                THEN 'GitHub PR Commits'
            WHEN TYPE = 'GITHUB_PR_REVIEWS'
                THEN 'GitHub PR Reviews'
            WHEN TYPE = 'GITHUB_REPO_ISSUES'
                THEN 'GitHub Repo Issues'
            WHEN TYPE = 'GITHUB_REPO_METADATA'
                THEN 'GitHub Repo Metadata'
            WHEN TYPE = 'GITHUB_REPO_PRS'
                THEN 'GitHub Repo Pull Requests'
            WHEN TYPE = 'GITHUB_REPO_STARS'
                THEN 'GitHub Repo Stars'
            WHEN TYPE = 'GIT_REFS'
                THEN 'Git Refs'
        END );

COMMIT;
