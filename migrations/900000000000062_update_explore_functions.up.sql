BEGIN;

--Dropping function to rename it for the UI
DROP FUNCTION IF EXISTS public.explore;

----https://www.graphile.org/postgraphile/custom-queries/
--Example: select explore_ui('{"file_path_pattern":"%Dockerfile", "file_contents_pattern":"%apiVersion%", "author_name_pattern":"John", "repo_older_than_days":30, "file_older_than_days":30, "repo_pattern":"%mergestat/%"}')
CREATE OR REPLACE FUNCTION public.explore_ui(params JSONB)
RETURNS JSONB
LANGUAGE PLPGSQL VOLATILE
AS $$
DECLARE
   RESPONSE JSONB;
   FILE_PATH_PATTERN_PARAM TEXT;
   FILE_CONTENTS_PATTERN_PARAM TEXT;
   AUTHOR_NAME_PATTERN_PARAM TEXT;
   REPO_OLDER_THAN_DAYS_PARAM INTEGER;
   FILE_OLDER_THAN_DAYS_PARAM INTEGER;
   REPO_PATTERN_PARAM TEXT;
BEGIN
    SELECT params->>'file_path_pattern' INTO FILE_PATH_PATTERN_PARAM;
    SELECT params->>'file_contents_pattern' INTO FILE_CONTENTS_PATTERN_PARAM;
    SELECT params->>'author_name_pattern' INTO AUTHOR_NAME_PATTERN_PARAM;
    SELECT params->>'repo_older_than_days' INTO REPO_OLDER_THAN_DAYS_PARAM;
    SELECT params->>'file_older_than_days' INTO FILE_OLDER_THAN_DAYS_PARAM;
    SELECT params->>'repo_pattern' INTO REPO_PATTERN_PARAM;
    
    WITH base_query AS (
        SELECT 
            repos.repo,
            git_commit_stats.file_path,
            git_commits.author_when,
            git_commits.author_name,
            git_commits.hash,
            repo_last_modified.last_modified AS repo_last_modified,
            file_last_modified.last_modified AS file_last_modified
        FROM git_commits 
        INNER JOIN repos ON git_commits.repo_id = repos.id 
        INNER JOIN git_commit_stats ON git_commit_stats.repo_id = git_commits.repo_id AND git_commit_stats.commit_hash = git_commits.hash and parents < 2
        INNER JOIN git_files ON git_commit_stats.repo_id = git_files.repo_id AND git_commit_stats.file_path = git_files.path
        INNER JOIN (    
            SELECT DISTINCT ON (repos.id)
                repos.id AS repo_id,
                git_commits.author_when AS last_modified
            FROM git_commits 
            INNER JOIN repos ON git_commits.repo_id = repos.id 
            ORDER BY 1, 2 DESC
        ) repo_last_modified ON repo_last_modified.repo_id = repos.id
        INNER JOIN (
            SELECT DISTINCT ON (repos.id, git_commit_stats.file_path)
                repos.id AS repo_id,
                git_commit_stats.file_path,
                git_commits.author_when AS last_modified
            FROM git_commits 
            INNER JOIN repos ON git_commits.repo_id = repos.id 
            INNER JOIN git_commit_stats ON git_commit_stats.repo_id = git_commits.repo_id AND git_commit_stats.commit_hash = git_commits.hash and parents < 2
            ORDER BY 1, 2, 3 DESC        
        )file_last_modified ON file_last_modified.repo_id = repos.id AND file_last_modified.file_path = git_commit_stats.file_path
        WHERE
            (FILE_PATH_PATTERN_PARAM IS NULL OR git_files.path LIKE FILE_PATH_PATTERN_PARAM)
            AND
            (FILE_CONTENTS_PATTERN_PARAM IS NULL OR git_files.contents LIKE FILE_CONTENTS_PATTERN_PARAM)
            AND
            (AUTHOR_NAME_PATTERN_PARAM IS NULL OR git_commits.author_name = AUTHOR_NAME_PATTERN_PARAM)
            AND
            (REPO_OLDER_THAN_DAYS_PARAM IS NULL OR repo_last_modified.last_modified < NOW() - (REPO_OLDER_THAN_DAYS_PARAM || ' day')::INTERVAL)
            AND
            (FILE_OLDER_THAN_DAYS_PARAM IS NULL OR file_last_modified.last_modified < NOW() - (FILE_OLDER_THAN_DAYS_PARAM || ' day')::INTERVAL)
            AND
            (REPO_PATTERN_PARAM IS NULL OR repos.repo LIKE REPO_PATTERN_PARAM)
    )
    SELECT 
        jsonb_build_object('top_10_repos', (SELECT JSON_AGG(TO_JSONB(top_10_repos)) FROM (
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
        )top_10_repos)) ||
        jsonb_build_object('top_10_authors', (SELECT JSON_AGG(TO_JSONB(top_10_authors)) FROM (
            SELECT 
                author_name,
                COUNT(DISTINCT hash) AS commits_count 
            FROM base_query
            GROUP BY 1
            ORDER BY 2 DESC
            LIMIT 10
        )top_10_authors)) ||
        jsonb_build_object('repo_last_modified', 
            jsonb_build_object('month', (SELECT JSON_AGG(TO_JSONB(repo_last_modified_by_year_month)) FROM (
                SELECT
                    TO_CHAR(repo_last_modified, 'YYYY-MM') AS year_month,
                    COUNT(DISTINCT repo) as count
                FROM base_query
                GROUP BY 1
                ORDER BY 1
            )repo_last_modified_by_year_month)) || 
            jsonb_build_object('year', (SELECT JSON_AGG(TO_JSONB(repo_last_modified_by_year)) FROM (
                SELECT
                    TO_CHAR(repo_last_modified, 'YYYY') AS year,
                    COUNT(DISTINCT repo) as count
                FROM base_query
                GROUP BY 1
                ORDER BY 1
            )repo_last_modified_by_year))) ||
        jsonb_build_object('file_last_modified', 
            jsonb_build_object('month', (SELECT JSON_AGG(TO_JSONB(file_last_modified_by_year_month)) FROM (
                SELECT
                    TO_CHAR(file_last_modified, 'YYYY-MM') AS year_month,
                    COUNT(DISTINCT repo || file_path) as count
                FROM base_query
                GROUP BY 1
                ORDER BY 1
            )file_last_modified_by_year_month)) || 
            jsonb_build_object('year', (SELECT JSON_AGG(TO_JSONB(file_last_modified_by_year)) FROM (
                SELECT
                    TO_CHAR(file_last_modified, 'YYYY') AS year,
                    COUNT(DISTINCT repo || file_path) as count
                FROM base_query
                GROUP BY 1
                ORDER BY 1
            )file_last_modified_by_year))) ||
        jsonb_build_object('repos', (SELECT COUNT(DISTINCT repo) AS count FROM base_query)) ||
        jsonb_build_object('files', (SELECT COUNT(DISTINCT repo || file_path) AS count FROM base_query)) ||
        jsonb_build_object('authors', (SELECT COUNT(DISTINCT author_name) AS count FROM base_query))
    INTO RESPONSE;

    RETURN RESPONSE;
END; $$;

COMMIT;
