BEGIN;

----https://www.graphile.org/postgraphile/custom-queries/
--Example for charts: select explore_ui('{"file_path_pattern":"%Dockerfile", "file_contents_pattern":"%apiVersion%", "author_name_pattern":"John", "days_since_repo_modified_last":30, "days_since_file_modified_last":30, "repo_pattern":"%mergestat/%", "days_since_authored_last":30, "days_since_not_authored_last":30, "days_since_committed_last":30, "days_since_not_committed_last":30}')
--Example for FILES table: SELECT * FROM jsonb_to_recordset((SELECT explore_ui('{"file_path_pattern":"%Dockerfile", "RESPONSE_TYPE":"FILES"}'))) AS specs(repo TEXT, file_path TEXT, file_last_modified TIMESTAMP WITH TIME ZONE)
--Example for REPOS table: SELECT * FROM jsonb_to_recordset((SELECT explore_ui('{"file_path_pattern":"%Dockerfile", "RESPONSE_TYPE":"REPOS"}'))) AS specs(repo TEXT, repo_last_modified TIMESTAMP WITH TIME ZONE, file_count BIGINT)
--Example fpr AUTHORS table: SELECT * FROM jsonb_to_recordset((SELECT explore_ui('{"file_path_pattern":"%Dockerfile", "RESPONSE_TYPE":"AUTHORS"}'))) AS specs(author_name TEXT, commits_count BIGINT)
CREATE OR REPLACE FUNCTION public.explore_ui(params JSONB)
RETURNS JSONB
LANGUAGE PLPGSQL STABLE
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
   DAYS_SINCE_AUTHORED_LAST_PARAM INTEGER;
   DAYS_SINCE_NOT_AUTHORED_LAST_PARAM INTEGER;
   DAYS_SINCE_COMMITTED_LAST_PARAM INTEGER;
   DAYS_SINCE_NOT_COMMITTED_LAST_PARAM INTEGER;
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
    SELECT params->>'days_since_authored_last' INTO DAYS_SINCE_AUTHORED_LAST_PARAM;
    SELECT params->>'days_since_not_authored_last' INTO DAYS_SINCE_NOT_AUTHORED_LAST_PARAM;
    SELECT params->>'days_since_committed_last' INTO DAYS_SINCE_COMMITTED_LAST_PARAM;
    SELECT params->>'days_since_not_committed_last' INTO DAYS_SINCE_NOT_COMMITTED_LAST_PARAM;
    SELECT params->>'repo_pattern' INTO REPO_PATTERN_PARAM;

    WITH base_query AS (
        SELECT 
            repos.repo,
            git_files.path AS file_path,
            git_commits.author_when,
            git_commits.author_name,
            git_commits.committer_when,
            git_commits.committer_name,
            git_commits.hash,
            _mergestat_explore_repo_metadata.last_commit_committer_when AS repo_last_modified,
            _mergestat_explore_file_metadata.last_commit_committer_when AS file_last_modified
        FROM git_commits 
        INNER JOIN repos ON git_commits.repo_id = repos.id 
        INNER JOIN git_commit_stats ON git_commit_stats.repo_id = git_commits.repo_id AND git_commit_stats.commit_hash = git_commits.hash and parents < 2
        INNER JOIN git_files ON git_commit_stats.repo_id = git_files.repo_id AND git_commit_stats.file_path = git_files.path
        INNER JOIN _mergestat_explore_repo_metadata ON git_commits.repo_id = _mergestat_explore_repo_metadata.repo_id
        INNER JOIN _mergestat_explore_file_metadata ON git_commits.repo_id = _mergestat_explore_file_metadata.repo_id AND _mergestat_explore_file_metadata.path = git_files.path
        WHERE
            (FILE_PATH_PATTERN_PARAM IS NULL OR git_files.path LIKE FILE_PATH_PATTERN_PARAM)
            AND
            (FILE_CONTENTS_PATTERN_PARAM IS NULL OR git_files.contents LIKE FILE_CONTENTS_PATTERN_PARAM)
            AND
            (AUTHOR_NAME_PATTERN_PARAM IS NULL OR git_commits.author_name LIKE AUTHOR_NAME_PATTERN_PARAM)
            AND
            (REPO_PATTERN_PARAM IS NULL OR repos.repo LIKE REPO_PATTERN_PARAM)
            AND
            (DAYS_SINCE_REPO_NOT_MODIFIED_LAST_PARAM IS NULL OR _mergestat_explore_repo_metadata.last_commit_committer_when < NOW() - (DAYS_SINCE_REPO_NOT_MODIFIED_LAST_PARAM || ' day')::INTERVAL)
            AND
            (DAYS_SINCE_FILE_NOT_MODIFIED_LAST_PARAM IS NULL OR _mergestat_explore_file_metadata.last_commit_committer_when < NOW() - (DAYS_SINCE_FILE_NOT_MODIFIED_LAST_PARAM || ' day')::INTERVAL)
            AND
            (DAYS_SINCE_NOT_AUTHORED_LAST_PARAM IS NULL OR git_commits.author_when < NOW() - (DAYS_SINCE_NOT_AUTHORED_LAST_PARAM || ' day')::INTERVAL)
            AND
            (DAYS_SINCE_NOT_COMMITTED_LAST_PARAM IS NULL OR git_commits.committer_when < NOW() - (DAYS_SINCE_NOT_COMMITTED_LAST_PARAM || ' day')::INTERVAL)
            AND
            (DAYS_SINCE_REPO_MODIFIED_LAST_PARAM IS NULL OR _mergestat_explore_repo_metadata.last_commit_committer_when >= NOW() - (DAYS_SINCE_REPO_MODIFIED_LAST_PARAM || ' day')::INTERVAL)
            AND
            (DAYS_SINCE_FILE_MODIFIED_LAST_PARAM IS NULL OR _mergestat_explore_file_metadata.last_commit_committer_when >= NOW() - (DAYS_SINCE_FILE_MODIFIED_LAST_PARAM || ' day')::INTERVAL)
            AND
            (DAYS_SINCE_AUTHORED_LAST_PARAM IS NULL OR git_commits.author_when >= NOW() - (DAYS_SINCE_AUTHORED_LAST_PARAM || ' day')::INTERVAL)
            AND
            (DAYS_SINCE_COMMITTED_LAST_PARAM IS NULL OR git_commits.committer_when >= NOW() - (DAYS_SINCE_COMMITTED_LAST_PARAM || ' day')::INTERVAL)
    )
    SELECT
        CASE
        WHEN RESPONSE_TYPE = 'FILES'
            THEN (
                SELECT jsonb_agg(b) AS agg
                FROM (
                    SELECT DISTINCT
                        repo,
                        file_path,
                        file_last_modified
                    FROM base_query
                    ORDER BY 3 DESC
                    LIMIT 1001
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
                    LIMIT 1001
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
                    LIMIT 1001
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

--Add saved explores table
CREATE TABLE IF NOT EXISTS mergestat.saved_explores (
    id UUID PRIMARY KEY DEFAULT public.gen_random_uuid() NOT NULL,
    created_by TEXT,
    created_at TIMESTAMP WITH TIME ZONE,
    name TEXT,
    description TEXT,
    metadata JSONB
);

COMMENT ON TABLE mergestat.saved_explores IS 'Table to save explores';
COMMENT ON COLUMN mergestat.saved_explores.created_by IS 'explore creator';
COMMENT ON COLUMN mergestat.saved_explores.created_at IS 'timestamp when explore was created';
COMMENT ON COLUMN mergestat.saved_explores.name IS 'explore name';
COMMENT ON COLUMN mergestat.saved_explores.description IS 'explore description';
COMMENT ON COLUMN mergestat.saved_explores.metadata IS 'explore metadata';

-- enable RLS 
ALTER TABLE mergestat.saved_explores ENABLE ROW LEVEL SECURITY;

-- creates an RLS policy that give ALL permissions to saved_explores rows that current_user matches created_by column.
CREATE POLICY saved_explores_all_access ON mergestat.saved_explores FOR ALL USING(created_by = current_user);

-- creates an RLS policy that gives admin level users ALL permission to saved_explores table.
CREATE POLICY saved_explores_all_access_admin ON mergestat.saved_explores FOR ALL TO mergestat_role_admin USING(TRUE);

-- creates an RLS policy that gives every role the SELECT permission to saved_explores table.
CREATE POLICY saved_explores_all_view ON mergestat.saved_explores FOR SELECT USING (TRUE);

-- GRANT the ability to mergestat_role_user role to INSERT, UPDATE AND DELETE on table saved_explores.
GRANT INSERT, UPDATE, DELETE ON TABLE mergestat.saved_explores TO mergestat_role_user;


-- Seeding mergestat explore sync and removing overlapping syncs
-- Not checking for duplicates before adding the constraint as handling this will require intervention
ALTER TABLE mergestat.container_images DROP CONSTRAINT IF EXISTS unique_container_images_url;
ALTER TABLE mergestat.container_images ADD CONSTRAINT unique_container_images_url UNIQUE (url);
INSERT INTO mergestat.container_images(name, description, type, url, version, queue)
VALUES
('MergeStat Explore', 'Retrieves the git commit history, stats, and files (content and paths) for a repo used for MergeStat Explore', 'docker', 'ghcr.io/mergestat/sync-mergestat-explore', 'latest', 'default')
ON CONFLICT (url) DO NOTHING;

DELETE FROM mergestat.container_images
WHERE
    url in ('ghcr.io/mergestat/sync-git-commit-stats', 'ghcr.io/mergestat/sync-git-commits', 'ghcr.io/mergestat/sync-git-files')
    AND id NOT IN (SELECT image_id FROM mergestat.container_syncs); -- Do not delete syncs in use


-- Adding migration to setup schema for mergestat-explore sync since we now have a dependency on this for explore experience
-- git_commits
CREATE TABLE IF NOT EXISTS git_commits (
    repo_id UUID REFERENCES repos(id) ON DELETE CASCADE ON UPDATE RESTRICT,
    hash TEXT,
    message TEXT NOT NULL,
    author_name TEXT NOT NULL,
    author_email TEXT NOT NULL,
    author_when TIMESTAMP WITH TIME ZONE NOT NULL,
    committer_name TEXT NOT NULL,
    committer_email TEXT NOT NULL,
    committer_when TIMESTAMP WITH TIME ZONE NOT NULL,
    parents INTEGER NOT NULL,
    _mergestat_synced_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW(),
    CONSTRAINT commits_pkey PRIMARY KEY (repo_id, hash)
);
COMMENT ON TABLE git_commits IS 'git commit history of a repo';
COMMENT ON COLUMN git_commits.repo_id IS 'foreign key for public.repos.id';
COMMENT ON COLUMN git_commits.hash IS 'hash of the commit';
COMMENT ON COLUMN git_commits.message IS 'message of the commit';
COMMENT ON COLUMN git_commits.author_name IS 'name of the author of the the modification';
COMMENT ON COLUMN git_commits.author_email IS 'email of the author of the modification';
COMMENT ON COLUMN git_commits.author_when IS 'timestamp of when the modification was authored';
COMMENT ON COLUMN git_commits.committer_name IS 'name of the author who committed the modification';
COMMENT ON COLUMN git_commits.committer_email IS 'email of the author who committed the modification';
COMMENT ON COLUMN git_commits.committer_when IS 'timestamp of when the commit was made';
COMMENT ON COLUMN git_commits.parents IS 'the number of parents of the commit';
COMMENT ON COLUMN git_commits._mergestat_synced_at IS 'timestamp when record was synced into the MergeStat database';


CREATE UNIQUE INDEX IF NOT EXISTS commits_pkey ON git_commits(repo_id uuid_ops,hash text_ops);
CREATE INDEX IF NOT EXISTS commits_author_when_idx ON git_commits(repo_id uuid_ops,author_when timestamptz_ops);
CREATE INDEX IF NOT EXISTS idx_commits_repo_id_fkey ON git_commits(repo_id uuid_ops);


-- git_commit_stats
CREATE TABLE IF NOT EXISTS git_commit_stats (
    repo_id UUID REFERENCES repos(id) ON DELETE CASCADE ON UPDATE RESTRICT,
    commit_hash TEXT,
    file_path TEXT,
    additions INTEGER NOT NULL,
    deletions INTEGER NOT NULL,
    _mergestat_synced_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW(),
    old_file_mode TEXT NOT NULL DEFAULT 'unknown'::TEXT,
    new_file_mode TEXT DEFAULT 'unknown'::TEXT,
    CONSTRAINT commit_stats_pkey PRIMARY KEY (repo_id, file_path, commit_hash, new_file_mode)
);
COMMENT ON TABLE git_commit_stats IS 'git commit stats of a repo';
COMMENT ON COLUMN git_commit_stats.repo_id IS 'foreign key for public.repos.id';
COMMENT ON COLUMN git_commit_stats.commit_hash IS 'hash of the commit';
COMMENT ON COLUMN git_commit_stats.file_path IS 'path of the file the modification was made in';
COMMENT ON COLUMN git_commit_stats.additions IS 'the number of additions in this path of the commit';
COMMENT ON COLUMN git_commit_stats.deletions IS 'the number of deletions in this path of the commit';
COMMENT ON COLUMN git_commit_stats._mergestat_synced_at IS 'timestamp when record was synced into the MergeStat database';
COMMENT ON COLUMN git_commit_stats.old_file_mode IS 'old file mode derived from git mode. possible values (unknown, none, regular_file, symbolic_link, git_link)';
COMMENT ON COLUMN git_commit_stats.new_file_mode IS 'new file mode derived from git mode. possible values (unknown, none, regular_file, symbolic_link, git_link)';

CREATE UNIQUE INDEX IF NOT EXISTS commit_stats_pkey ON git_commit_stats(repo_id uuid_ops,file_path text_ops,commit_hash text_ops,new_file_mode text_ops);
CREATE INDEX IF NOT EXISTS idx_commit_stats_repo_id_fkey ON git_commit_stats(repo_id uuid_ops);

-- git_files
CREATE TABLE IF NOT EXISTS git_files (
    repo_id UUID REFERENCES repos(id) ON DELETE CASCADE ON UPDATE RESTRICT,
    path TEXT,
    executable BOOLEAN NOT NULL,
    contents TEXT,
    _mergestat_synced_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW(),
    CONSTRAINT files_pkey PRIMARY KEY (repo_id, path)
);
COMMENT ON TABLE git_files IS 'git files (content and paths) of a repo';
COMMENT ON COLUMN git_files.repo_id IS 'foreign key for public.repos.id';
COMMENT ON COLUMN git_files.path IS 'path of the file';
COMMENT ON COLUMN git_files.executable IS 'boolean to determine if the file is an executable';
COMMENT ON COLUMN git_files.contents IS 'contents of the file';
COMMENT ON COLUMN git_files._mergestat_synced_at IS 'timestamp when record was synced into the MergeStat database';

CREATE UNIQUE INDEX IF NOT EXISTS files_pkey ON git_files(repo_id uuid_ops,path text_ops);
CREATE INDEX IF NOT EXISTS idx_files_repo_id_fkey ON git_files(repo_id uuid_ops);

-- _mergestat_explore_repo_metadata
CREATE TABLE IF NOT EXISTS _mergestat_explore_repo_metadata (
    repo_id UUID REFERENCES repos(id) ON DELETE CASCADE ON UPDATE RESTRICT,
    last_commit_hash TEXT,
    CONSTRAINT _mergestat_explore_repo_metadata_pkey PRIMARY KEY (repo_id)
);

COMMENT ON TABLE _mergestat_explore_repo_metadata IS 'repo metadata for explore experience';
COMMENT ON COLUMN _mergestat_explore_repo_metadata.repo_id IS 'foreign key for public.repos.id';
COMMENT ON COLUMN _mergestat_explore_repo_metadata.last_commit_hash IS 'hash based reference to last commit';

-- _mergestat_explore_file_metadata
CREATE TABLE IF NOT EXISTS _mergestat_explore_file_metadata (
    repo_id UUID REFERENCES repos(id) ON DELETE CASCADE ON UPDATE RESTRICT,
    path TEXT,
    last_commit_hash TEXT,
    CONSTRAINT _mergestat_explore_file_metadata_pkey PRIMARY KEY (repo_id, path)
);

COMMENT ON TABLE _mergestat_explore_file_metadata IS 'file metadata for explore experience';
COMMENT ON COLUMN _mergestat_explore_file_metadata.repo_id IS 'foreign key for public.repos.id';
COMMENT ON COLUMN _mergestat_explore_file_metadata.path IS 'path to the file';
COMMENT ON COLUMN _mergestat_explore_file_metadata.last_commit_hash IS 'hash based reference to last commit';

--Add more commit columns to prevent the need to fetch it
ALTER TABLE IF EXISTS _mergestat_explore_repo_metadata ADD IF NOT EXISTS last_commit_message TEXT;
ALTER TABLE IF EXISTS _mergestat_explore_repo_metadata ADD IF NOT EXISTS last_commit_author_name TEXT;
ALTER TABLE IF EXISTS _mergestat_explore_repo_metadata ADD IF NOT EXISTS last_commit_author_email TEXT;
ALTER TABLE IF EXISTS _mergestat_explore_repo_metadata ADD IF NOT EXISTS last_commit_author_when TIMESTAMP WITH TIME ZONE;
ALTER TABLE IF EXISTS _mergestat_explore_repo_metadata ADD IF NOT EXISTS last_commit_committer_name TEXT;
ALTER TABLE IF EXISTS _mergestat_explore_repo_metadata ADD IF NOT EXISTS last_commit_committer_email TEXT;
ALTER TABLE IF EXISTS _mergestat_explore_repo_metadata ADD IF NOT EXISTS last_commit_committer_when TIMESTAMP WITH TIME ZONE;
ALTER TABLE IF EXISTS _mergestat_explore_repo_metadata ADD IF NOT EXISTS last_commit_parents INTEGER;
ALTER TABLE IF EXISTS _mergestat_explore_repo_metadata ADD IF NOT EXISTS _mergestat_synced_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW();

COMMENT ON COLUMN _mergestat_explore_repo_metadata.last_commit_message IS 'message of the commit';
COMMENT ON COLUMN _mergestat_explore_repo_metadata.last_commit_author_name IS 'name of the author of the the modification';
COMMENT ON COLUMN _mergestat_explore_repo_metadata.last_commit_author_email IS 'email of the author of the modification';
COMMENT ON COLUMN _mergestat_explore_repo_metadata.last_commit_author_when IS 'timestamp of when the modification was authored';
COMMENT ON COLUMN _mergestat_explore_repo_metadata.last_commit_committer_name IS 'name of the author who committed the modification';
COMMENT ON COLUMN _mergestat_explore_repo_metadata.last_commit_committer_email IS 'email of the author who committed the modification';
COMMENT ON COLUMN _mergestat_explore_repo_metadata.last_commit_committer_when IS 'timestamp of when the commit was made';
COMMENT ON COLUMN _mergestat_explore_repo_metadata.last_commit_parents IS 'the number of parents of the commit';
COMMENT ON COLUMN _mergestat_explore_repo_metadata._mergestat_synced_at IS 'timestamp when record was synced into the MergeStat database';

ALTER TABLE IF EXISTS _mergestat_explore_file_metadata ADD IF NOT EXISTS last_commit_message TEXT;
ALTER TABLE IF EXISTS _mergestat_explore_file_metadata ADD IF NOT EXISTS last_commit_author_name TEXT;
ALTER TABLE IF EXISTS _mergestat_explore_file_metadata ADD IF NOT EXISTS last_commit_author_email TEXT;
ALTER TABLE IF EXISTS _mergestat_explore_file_metadata ADD IF NOT EXISTS last_commit_author_when TIMESTAMP WITH TIME ZONE;
ALTER TABLE IF EXISTS _mergestat_explore_file_metadata ADD IF NOT EXISTS last_commit_committer_name TEXT;
ALTER TABLE IF EXISTS _mergestat_explore_file_metadata ADD IF NOT EXISTS last_commit_committer_email TEXT;
ALTER TABLE IF EXISTS _mergestat_explore_file_metadata ADD IF NOT EXISTS last_commit_committer_when TIMESTAMP WITH TIME ZONE;
ALTER TABLE IF EXISTS _mergestat_explore_file_metadata ADD IF NOT EXISTS last_commit_parents INTEGER;
ALTER TABLE IF EXISTS _mergestat_explore_file_metadata ADD IF NOT EXISTS _mergestat_synced_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW();

COMMENT ON COLUMN _mergestat_explore_file_metadata.last_commit_message IS 'message of the commit';
COMMENT ON COLUMN _mergestat_explore_file_metadata.last_commit_author_name IS 'name of the author of the the modification';
COMMENT ON COLUMN _mergestat_explore_file_metadata.last_commit_author_email IS 'email of the author of the modification';
COMMENT ON COLUMN _mergestat_explore_file_metadata.last_commit_author_when IS 'timestamp of when the modification was authored';
COMMENT ON COLUMN _mergestat_explore_file_metadata.last_commit_committer_name IS 'name of the author who committed the modification';
COMMENT ON COLUMN _mergestat_explore_file_metadata.last_commit_committer_email IS 'email of the author who committed the modification';
COMMENT ON COLUMN _mergestat_explore_file_metadata.last_commit_committer_when IS 'timestamp of when the commit was made';
COMMENT ON COLUMN _mergestat_explore_file_metadata.last_commit_parents IS 'the number of parents of the commit';
COMMENT ON COLUMN _mergestat_explore_file_metadata._mergestat_synced_at IS 'timestamp when record was synced into the MergeStat database';

--add indexing for performance
CREATE EXTENSION IF NOT EXISTS pg_trgm;
CREATE INDEX IF NOT EXISTS idx_gist_git_files_path ON git_files USING gist(path GIST_TRGM_OPS);
CREATE INDEX IF NOT EXISTS idx_git_commit_stats_repo_id_hash_file_path ON git_commit_stats (repo_id, commit_hash, file_path);
CREATE INDEX IF NOT EXISTS idx_git_commits_repo_id_hash_parents ON git_commits(repo_id, hash, parents);

--Allow columns to be null
ALTER TABLE IF EXISTS git_commits ALTER COLUMN author_name DROP NOT NULL;
ALTER TABLE IF EXISTS git_commits ALTER COLUMN author_email DROP NOT NULL;
ALTER TABLE IF EXISTS git_commits ALTER COLUMN committer_name DROP NOT NULL;
ALTER TABLE IF EXISTS git_commits ALTER COLUMN committer_email DROP NOT NULL;
ALTER TABLE IF EXISTS git_commits ALTER COLUMN message DROP NOT NULL;

COMMIT;
