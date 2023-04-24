BEGIN;

----https://www.graphile.org/postgraphile/custom-queries/
--Example: select explore('{"file_pattern":"%Dockerfile"}')
CREATE OR REPLACE FUNCTION public.explore(params JSONB)
RETURNS JSONB
LANGUAGE PLPGSQL VOLATILE
AS $$
DECLARE
   response JSONB;
   file_pattern TEXT;
BEGIN
    SELECT params->>'file_pattern' INTO file_pattern;
    
    WITH base_query AS (
        SELECT 
            repos.repo,
            git_commit_stats.file_path,
            git_commits.author_when,
            git_commits.author_name,
            git_commits.hash
        FROM git_commits 
        INNER JOIN repos ON git_commits.repo_id = repos.id 
        INNER JOIN git_commit_stats ON git_commit_stats.repo_id = git_commits.repo_id AND git_commit_stats.commit_hash = git_commits.hash and parents < 2
        WHERE git_commit_stats.file_path LIKE file_pattern
    ),
    top_10_repos AS (
        SELECT
            repo,
            COUNT(DISTINCT file_path) AS file_count 
        FROM base_query
        GROUP BY 1
        ORDER BY 2 DESC
        LIMIT 10
    ),
    top_10_authors AS (
        SELECT 
            author_name,
            COUNT(DISTINCT hash) AS commits_count 
        FROM base_query
        GROUP BY 1
        ORDER BY 2 DESC
        LIMIT 10
    ),
    repo_last_modified AS (
        SELECT
            repos.repo,
            MAX(git_commits.author_when) AS last_modified
        FROM git_commits 
        INNER JOIN repos ON git_commits.repo_id = repos.id 
        INNER JOIN git_commit_stats ON git_commit_stats.repo_id = git_commits.repo_id AND git_commit_stats.commit_hash = git_commits.hash and parents < 2
        WHERE repos.repo IN (SELECT repo FROM base_query)
        GROUP BY 1
    ),
    file_last_modified AS (
        SELECT 
            repo || '/' || file_path AS file_path,
            MAX(author_when) AS last_modified
        FROM base_query
        GROUP BY 1
    ),
    repos AS (
        SELECT 
            COUNT(DISTINCT repo) AS count
        FROM base_query
    ),
    files AS (
        SELECT 
            COUNT(DISTINCT repo || file_path) AS count
        FROM base_query
    ),
    authors AS (
        SELECT 
            COUNT(DISTINCT author_when) AS count
        FROM base_query
    )
    SELECT 
        jsonb_build_object('top_10_repos', JSONB_OBJECT_AGG(top_10_repos.repo, TO_JSONB(top_10_repos) - 'repo')) ||
        jsonb_build_object('top_10_authors', JSONB_OBJECT_AGG(top_10_authors.author_name, TO_JSONB(top_10_authors) - 'author_name')) ||
        jsonb_build_object('repo_last_modified', JSONB_OBJECT_AGG(repo_last_modified.repo, TO_JSONB(repo_last_modified) - 'repo')) ||
        jsonb_build_object('file_last_modified', JSONB_OBJECT_AGG(file_last_modified.file_path, TO_JSONB(file_last_modified) - 'file_path')) ||
        jsonb_build_object('repos', MAX(repos.count)) ||
        jsonb_build_object('files', MAX(files.count)) ||
        jsonb_build_object('authors', MAX(authors.count))
    INTO response
    FROM top_10_repos, top_10_authors, repo_last_modified, file_last_modified, repos, files, authors;

    RETURN response;
END; $$;

COMMIT;
