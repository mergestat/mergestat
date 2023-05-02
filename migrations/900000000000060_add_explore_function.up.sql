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
        INNER JOIN git_files ON git_commit_stats.repo_id = git_files.repo_id AND git_commit_stats.file_path = git_files.path
        WHERE git_commit_stats.file_path LIKE file_pattern
    ),
    top_10_repos AS (
        SELECT
            base_query.repo,
            providers.vendor,
            providers.settings->>'url' AS vendor_url,
            COUNT(DISTINCT file_path) AS file_count 
        FROM base_query
        INNER JOIN repos ON base_query.repo = repos.repo
        INNER JOIN mergestat.providers ON repos.provider = providers.id
        GROUP BY 1, 2, 3
        ORDER BY 4 DESC
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
        ORDER BY 2 ASC
    ),
    file_last_modified AS (
        SELECT 
            repo || '/' || file_path AS file_path,
            MAX(author_when) AS last_modified
        FROM base_query
        GROUP BY 1
        ORDER BY 2 ASC
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
            COUNT(DISTINCT author_name) AS count
        FROM base_query
    ),
    repo_last_modified_by_year_month AS (
        SELECT
            TO_CHAR(last_modified, 'YYYY-MM') AS year_month,
            COUNT(1) as count
        FROM repo_last_modified
        GROUP BY 1
        ORDER BY 1
    ),
    repo_last_modified_by_year AS (
        SELECT
            TO_CHAR(last_modified, 'YYYY') AS year,
            COUNT(1) as count
        FROM repo_last_modified
        GROUP BY 1
        ORDER BY 1
    ),
    file_last_modified_by_year_month AS (
        SELECT
            TO_CHAR(last_modified, 'YYYY-MM') AS year_month,
            COUNT(1) as count
        FROM file_last_modified
        GROUP BY 1
        ORDER BY 1
    ),
    file_last_modified_by_year AS (
        SELECT
            TO_CHAR(last_modified, 'YYYY') AS year,
            COUNT(1) as count
        FROM file_last_modified
        GROUP BY 1
        ORDER BY 1
    )
    SELECT 
        jsonb_build_object('top_10_repos', (SELECT JSON_AGG(TO_JSONB(top_10_repos)) FROM top_10_repos)) ||
        jsonb_build_object('top_10_authors', (SELECT JSON_AGG(TO_JSONB(top_10_authors)) FROM top_10_authors)) ||
        jsonb_build_object('repo_last_modified', 
            jsonb_build_object('month', (SELECT JSON_AGG(TO_JSONB(repo_last_modified_by_year_month)) FROM repo_last_modified_by_year_month)) || 
            jsonb_build_object('year', (SELECT JSON_AGG(TO_JSONB(repo_last_modified_by_year)) FROM repo_last_modified_by_year))) ||
        jsonb_build_object('file_last_modified', 
            jsonb_build_object('month', (SELECT JSON_AGG(TO_JSONB(file_last_modified_by_year_month)) FROM file_last_modified_by_year_month)) || 
            jsonb_build_object('year', (SELECT JSON_AGG(TO_JSONB(file_last_modified_by_year)) FROM file_last_modified_by_year))) ||
        jsonb_build_object('repos', (SELECT count FROM repos)) ||
        jsonb_build_object('files', (SELECT count FROM files)) ||
        jsonb_build_object('authors', (SELECT count FROM authors))
    INTO response;

    RETURN response;
END; $$;

COMMIT;
