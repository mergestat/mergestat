BEGIN;

--Dropping function to rename it for the UI
DROP FUNCTION IF EXISTS public.explore;

----https://www.graphile.org/postgraphile/custom-queries/
--Example for charts: select explore_ui_tables('{"file_path_pattern":"%Dockerfile", "file_contents_pattern":"%apiVersion%", "author_name_pattern":"John", "days_since_repo_modified_last":30, "days_since_file_modified_last":30, "repo_pattern":"%mergestat/%"}')
--Example for FILES table: SELECT * FROM jsonb_to_recordset((SELECT explore_ui('{"file_pattern":"%Dockerfile", "RESPONSE_TYPE":"FILES"}'))) AS specs(repo TEXT, file_path TEXT, author_when TIMESTAMP WITH TIME ZONE, author_name TEXT, commit_hash TEXT, file_last_modified TIMESTAMP WITH TIME ZONE, repo_last_modified TIMESTAMP WITH TIME ZONE)
--Example for REPOS table: SELECT * FROM jsonb_to_recordset((SELECT explore_ui('{"file_pattern":"%Dockerfile", "RESPONSE_TYPE":"REPOS"}'))) AS specs(repo TEXT, repo_last_modified TIMESTAMP WITH TIME ZONE, file_count BIGINT)
--Example fpr AUTHORS table: SELECT * FROM jsonb_to_recordset((SELECT explore_ui('{"file_pattern":"%Dockerfile", "RESPONSE_TYPE":"AUTHORS"}'))) AS specs(author_name TEXT, commits_count BIGINT)
CREATE OR REPLACE FUNCTION public.explore_ui(params JSONB)
RETURNS JSONB
LANGUAGE PLPGSQL VOLATILE
AS $$
DECLARE
   RESPONSE JSONB;
   RESPONSE_TYPE TEXT;
   FILE_PATH_PATTERN_PARAM TEXT;
   FILE_CONTENTS_PATTERN_PARAM TEXT;
   AUTHOR_NAME_PATTERN_PARAM TEXT;
   DAYS_SINCE_REPO_MODIFIED_LAST_PARAM INTEGER;
   DAYS_SINCE_REPO_NOT_MODIFIED_LAST_PARAM INTEGER;
   DAYS_SINCE_FILE_MODIFIED_LAST_PARAM INTEGER;
   DAYS_SINCE_FILE_NOT_MODIFIED_LAST_PARAM INTEGER;
   REPO_PATTERN_PARAM TEXT;
BEGIN
    SELECT COALESCE(params->>'RESPONSE_TYPE', 'DEFAULT') INTO RESPONSE_TYPE;
    SELECT params->>'file_path_pattern' INTO FILE_PATH_PATTERN_PARAM;
    SELECT params->>'file_contents_pattern' INTO FILE_CONTENTS_PATTERN_PARAM;
    SELECT params->>'author_name_pattern' INTO AUTHOR_NAME_PATTERN_PARAM;
    SELECT params->>'days_since_repo_modified_last' INTO DAYS_SINCE_REPO_MODIFIED_LAST_PARAM;
    SELECT params->>'days_since_repo_not_modified_last' INTO DAYS_SINCE_REPO_NOT_MODIFIED_LAST_PARAM;
    SELECT params->>'days_since_file_modified_last' INTO DAYS_SINCE_FILE_MODIFIED_LAST_PARAM;
    SELECT params->>'days_since_file_not_modified_last' INTO DAYS_SINCE_FILE_NOT_MODIFIED_LAST_PARAM;
    SELECT params->>'repo_pattern' INTO REPO_PATTERN_PARAM;
    
    WITH base_query AS (
        SELECT 
            repos.repo,
            git_files.path AS file_path,
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
            SELECT
                _mergestat_explore_repo_metadata.repo_id AS repo_id,
                git_commits.author_when AS last_modified
            FROM git_commits 
            INNER JOIN _mergestat_explore_repo_metadata ON git_commits.repo_id = _mergestat_explore_repo_metadata.repo_id AND git_commits.hash = _mergestat_explore_repo_metadata.last_commit_hash and parents < 2
        ) repo_last_modified ON repo_last_modified.repo_id = git_commits.repo_id
        INNER JOIN (
            SELECT
                _mergestat_explore_file_metadata.repo_id AS repo_id,
                _mergestat_explore_file_metadata.path,
                git_commits.author_when AS last_modified
            FROM git_commits
            INNER JOIN _mergestat_explore_file_metadata ON git_commits.repo_id = _mergestat_explore_file_metadata.repo_id AND git_commits.hash = _mergestat_explore_file_metadata.last_commit_hash and parents < 2
        )file_last_modified ON file_last_modified.repo_id = git_commits.repo_id AND file_last_modified.path = git_files.path
    )
    SELECT
        CASE
        WHEN RESPONSE_TYPE = 'FILES'
            THEN (
                SELECT jsonb_agg(b) AS agg
                FROM (
                    SELECT
                        repo,
                        file_path,
                        author_name,
                        author_when,
                        hash as commit_hash,
                        file_last_modified,
                        repo_last_modified
                    FROM base_query
                    ORDER BY 6 DESC
                    LIMIT 1000
                )b
            )
        WHEN RESPONSE_TYPE = 'REPOS'
            THEN (
                SELECT jsonb_agg(b) AS agg
                FROM (
                    SELECT
                        repo,
                        repo_last_modified,
                        COUNT(DISTINCT file_path) AS file_count 
                    FROM base_query
                    GROUP BY 1, 2
                    ORDER BY 3 DESC
                    LIMIT 1000
                )b
            )
        WHEN RESPONSE_TYPE = 'AUTHORS'
            THEN (
                SELECT jsonb_agg(b) AS agg
                FROM (
                    SELECT 
                        author_name,
                        COUNT(DISTINCT hash) AS commits_count 
                    FROM base_query
                    GROUP BY 1
                    ORDER BY 2 DESC
                    LIMIT 1000
                )b
            )
        ELSE (
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
        )
        END
    INTO RESPONSE;
    
    RETURN RESPONSE;
END; $$;

COMMIT;
