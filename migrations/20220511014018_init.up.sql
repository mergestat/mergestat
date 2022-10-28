SET check_function_bodies = false;
CREATE EXTENSION IF NOT EXISTS pgcrypto;
CREATE SCHEMA IF NOT EXISTS mergestat;
CREATE FUNCTION mergestat.set_current_timestamp_updated_at() RETURNS trigger
LANGUAGE plpgsql
AS $$
DECLARE
  _new record;
BEGIN
  _new := NEW;
  _new."updated_at" = NOW();
  RETURN _new;
END;
$$;
CREATE FUNCTION public.repo_sync_queue_status_update_trigger() RETURNS trigger
LANGUAGE plpgsql
AS $$
BEGIN
	IF NEW.status = 'RUNNING' AND OLD.status = 'QUEUED' THEN
		NEW.started_at = now();
	ELSEIF NEW.status = 'DONE' AND OLD.status = 'RUNNING' THEN
		NEW.done_at = now();
	END IF;
	RETURN NEW;
END;
$$;
CREATE TABLE mergestat.repo_sync_queue (
    id bigint NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT null,
    repo_sync_id uuid NOT NULL,
    status text NOT NULL,
    started_at timestamp with time zone,
    done_at timestamp with time zone
);
CREATE VIEW mergestat.latest_repo_syncs AS
SELECT DISTINCT ON (repo_sync_queue.repo_sync_id)
    repo_sync_queue.id,
    repo_sync_queue.created_at,
    repo_sync_queue.repo_sync_id,
    repo_sync_queue.status,
    repo_sync_queue.started_at,
    repo_sync_queue.done_at
FROM mergestat.repo_sync_queue
WHERE (repo_sync_queue.status = 'DONE'::text)
ORDER BY repo_sync_queue.repo_sync_id ASC, repo_sync_queue.created_at DESC;
CREATE TABLE mergestat.repo_import_types (
    type text NOT NULL,
    description text NOT NULL
);
COMMENT ON TABLE mergestat.repo_import_types IS 'Types of repo imports';
CREATE TABLE mergestat.repo_imports (
    id uuid DEFAULT public.gen_random_uuid() NOT null,
    created_at timestamp with time zone DEFAULT now() NOT null,
    updated_at timestamp with time zone DEFAULT now() NOT null,
    type text NOT NULL,
    settings jsonb DEFAULT jsonb_build_object() NOT null,
    last_import timestamp with time zone,
    import_interval interval DEFAULT '00:30:00'::interval,
    last_import_started_at timestamp with time zone,
    CONSTRAINT repo_imports_import_interval_check CHECK ((import_interval > '00:00:30'::interval))
);
COMMENT ON TABLE mergestat.repo_imports IS 'Table for "dynamic" repo imports - regularly loading from a GitHub org for example';
CREATE TABLE mergestat.repo_sync_log_types (
    type text NOT NULL,
    description text
);
CREATE TABLE mergestat.repo_sync_logs (
    id bigint NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT null,
    log_type text NOT NULL,
    message text NOT NULL,
    repo_sync_queue_id bigint NOT NULL
);
CREATE SEQUENCE mergestat.repo_sync_logs_id_seq
START WITH 1
INCREMENT BY 1
NO MINVALUE
NO MAXVALUE
CACHE 1;
ALTER SEQUENCE mergestat.repo_sync_logs_id_seq OWNED BY mergestat.repo_sync_logs.id;
CREATE SEQUENCE mergestat.repo_sync_queue_id_seq
START WITH 1
INCREMENT BY 1
NO MINVALUE
NO MAXVALUE
CACHE 1;
ALTER SEQUENCE mergestat.repo_sync_queue_id_seq OWNED BY mergestat.repo_sync_queue.id;
CREATE TABLE mergestat.repo_sync_queue_status_types (
    type text NOT NULL,
    description text
);
CREATE TABLE mergestat.repo_sync_types (
    type text NOT NULL,
    description text
);
CREATE TABLE mergestat.repo_syncs (
    repo_id uuid NOT NULL,
    sync_type text NOT NULL,
    settings jsonb DEFAULT jsonb_build_object() NOT null,
    id uuid DEFAULT public.gen_random_uuid() NOT null
);
CREATE TABLE public.git_refs (
    repo_id uuid NOT NULL,
    full_name text NOT NULL,
    hash text,
    name text,
    remote text,
    target text,
    type text,
    tag_commit_hash text
);
COMMENT ON TABLE public.git_refs IS 'Refs for a Git repo';
CREATE VIEW public.git_branches AS
SELECT
    git_refs.repo_id,
    git_refs.full_name,
    git_refs.hash,
    git_refs.name,
    git_refs.remote,
    git_refs.target,
    git_refs.type,
    git_refs.tag_commit_hash
FROM public.git_refs
WHERE (git_refs.type = 'branch'::text);
CREATE TABLE public.git_commit_stats (
    repo_id uuid NOT NULL,
    commit_hash text NOT NULL,
    file_path text NOT NULL,
    additions integer NOT NULL,
    deletions integer NOT NULL
);
COMMENT ON TABLE public.git_commit_stats IS 'Commit stats';
CREATE TABLE public.git_commits (
    repo_id uuid NOT NULL,
    hash text NOT NULL,
    message text NOT NULL,
    author_name text NOT NULL,
    author_email text NOT NULL,
    author_when timestamp with time zone NOT NULL,
    committer_name text NOT NULL,
    committer_email text NOT NULL,
    committer_when timestamp with time zone NOT NULL,
    parents integer NOT NULL
);
COMMENT ON TABLE public.git_commits IS 'Git repository commits';
CREATE VIEW public.git_tags AS
SELECT
    git_refs.repo_id,
    git_refs.full_name,
    git_refs.hash,
    git_refs.name,
    git_refs.remote,
    git_refs.target,
    git_refs.type,
    git_refs.tag_commit_hash
FROM public.git_refs
WHERE (git_refs.type = 'tag'::text);
CREATE TABLE public.github_issues (
    repo_id uuid NOT NULL,
    author_login text,
    body text,
    closed boolean,
    closed_at timestamp with time zone,
    comment_count integer,
    created_at timestamp with time zone,
    created_via_email boolean,
    database_id integer NOT NULL,
    editor_login text,
    includes_created_edit boolean,
    label_count integer,
    last_edited_at timestamp with time zone,
    locked boolean,
    milestone_count integer,
    number integer NOT NULL,
    participant_count integer,
    published_at timestamp with time zone,
    reaction_count integer,
    state text,
    title text,
    updated_at timestamp with time zone,
    url text
);
COMMENT ON TABLE public.github_issues IS 'GitHub issues';
CREATE TABLE public.github_pull_requests (
    repo_id uuid NOT NULL,
    additions integer,
    author_login text,
    author_association text,
    author_avatar_url text,
    author_name text,
    base_ref_oid text,
    base_ref_name text,
    base_repository_name text,
    body text,
    changed_files integer,
    closed boolean,
    closed_at timestamp with time zone,
    comment_count integer,
    commit_count integer,
    created_at timestamp with time zone,
    created_via_email boolean,
    database_id integer NOT NULL,
    deletions integer,
    editor_login text,
    head_ref_name text,
    head_ref_oid text,
    head_repository_name text,
    is_draft boolean,
    label_count integer,
    last_edited_at timestamp with time zone,
    locked boolean,
    maintainer_can_modify boolean,
    mantainer_can_modify boolean,
    mergeable text,
    merged boolean,
    merged_at timestamp with time zone,
    merged_by text,
    number integer,
    participant_count integer,
    published_at timestamp with time zone,
    review_decision text,
    state text,
    title text,
    updated_at timestamp with time zone,
    url text
);
COMMENT ON TABLE public.github_pull_requests IS 'GitHub pull requests';
CREATE TABLE public.github_repo_info (
    repo_id uuid NOT NULL,
    owner text NOT NULL,
    name text NOT NULL,
    created_at timestamp with time zone,
    default_branch_name text,
    description text,
    disk_usage integer,
    fork_count integer,
    homepage_url text,
    is_archived boolean,
    is_disabled boolean,
    is_mirror boolean,
    is_private boolean,
    total_issues_count integer,
    latest_release_author text,
    latest_release_created_at timestamp with time zone,
    latest_release_name text,
    latest_release_published_at timestamp with time zone,
    license_key text,
    license_name text,
    license_nickname text,
    open_graph_image_url text,
    primary_language text,
    pushed_at timestamp with time zone,
    releases_count integer,
    stargazers_count integer,
    updated_at timestamp with time zone,
    watchers_count integer
);
COMMENT ON TABLE public.github_repo_info IS 'GitHub metadata about a repo';
CREATE TABLE public.github_stargazers (
    repo_id uuid NOT NULL,
    login text NOT NULL,
    email text,
    name text,
    bio text,
    company text,
    avatar_url text,
    created_at timestamp with time zone,
    updated_at timestamp with time zone,
    twitter text,
    website text,
    location text,
    starred_at timestamp with time zone
);
COMMENT ON TABLE public.github_stargazers IS 'GitHub stargazers for a repo';
CREATE TABLE public.repos (
    id uuid DEFAULT public.gen_random_uuid() NOT null,
    repo text NOT NULL,
    ref text,
    is_github boolean,
    created_at timestamp with time zone DEFAULT now() NOT null,
    settings jsonb DEFAULT jsonb_build_object() NOT null,
    tags jsonb DEFAULT jsonb_build_array() NOT null,
    repo_import_id uuid
);
COMMENT ON TABLE public.repos IS 'Git repositories to track';
ALTER TABLE ONLY mergestat.repo_sync_logs ALTER COLUMN id SET DEFAULT nextval('mergestat.repo_sync_logs_id_seq'::regclass);
ALTER TABLE ONLY mergestat.repo_sync_queue ALTER COLUMN id SET DEFAULT nextval('mergestat.repo_sync_queue_id_seq'::regclass);
ALTER TABLE ONLY mergestat.repo_import_types
ADD CONSTRAINT repo_import_types_pkey PRIMARY KEY (type);
ALTER TABLE ONLY mergestat.repo_imports
ADD CONSTRAINT repo_imports_pkey PRIMARY KEY (id);
ALTER TABLE ONLY mergestat.repo_sync_log_types
ADD CONSTRAINT repo_sync_log_types_pkey PRIMARY KEY (type);
ALTER TABLE ONLY mergestat.repo_sync_logs
ADD CONSTRAINT repo_sync_logs_pkey PRIMARY KEY (id);
ALTER TABLE ONLY mergestat.repo_sync_queue
ADD CONSTRAINT repo_sync_queue_pkey PRIMARY KEY (id);
ALTER TABLE ONLY mergestat.repo_sync_queue_status_types
ADD CONSTRAINT repo_sync_queue_status_types_pkey PRIMARY KEY (type);
ALTER TABLE ONLY mergestat.repo_syncs
ADD CONSTRAINT repo_sync_settings_pkey PRIMARY KEY (id);
ALTER TABLE ONLY mergestat.repo_sync_types
ADD CONSTRAINT repo_sync_types_pkey PRIMARY KEY (type);
ALTER TABLE ONLY mergestat.repo_syncs
ADD CONSTRAINT repo_syncs_repo_id_sync_type_key UNIQUE (repo_id, sync_type);
ALTER TABLE ONLY public.git_commits
ADD CONSTRAINT commits_pkey PRIMARY KEY (repo_id, hash);
ALTER TABLE ONLY public.git_refs
ADD CONSTRAINT git_refs_pkey PRIMARY KEY (repo_id, full_name);
ALTER TABLE ONLY public.github_issues
ADD CONSTRAINT github_issues_pkey PRIMARY KEY (repo_id, database_id);
ALTER TABLE ONLY public.github_pull_requests
ADD CONSTRAINT github_pull_requests_pkey PRIMARY KEY (repo_id, database_id);
ALTER TABLE ONLY public.github_repo_info
ADD CONSTRAINT github_repo_info_owner_name_key UNIQUE (owner, name);
ALTER TABLE ONLY public.github_repo_info
ADD CONSTRAINT github_repo_info_pkey PRIMARY KEY (repo_id);
ALTER TABLE ONLY public.github_stargazers
ADD CONSTRAINT github_stargazers_pkey PRIMARY KEY (repo_id, login);
ALTER TABLE ONLY public.repos
ADD CONSTRAINT repos_pkey PRIMARY KEY (id);
CREATE INDEX commits_author_when_idx ON public.git_commits USING btree(repo_id, author_when);
CREATE UNIQUE INDEX repos_repo_ref_unique ON public.repos USING btree(repo, ((ref IS NULL))) WHERE (ref IS NULL);
CREATE TRIGGER repo_sync_queue_status_update_trigger BEFORE UPDATE ON mergestat.repo_sync_queue FOR EACH ROW EXECUTE FUNCTION public.repo_sync_queue_status_update_trigger();
CREATE TRIGGER set_mergestat_repo_imports_updated_at BEFORE UPDATE ON mergestat.repo_imports FOR EACH ROW EXECUTE FUNCTION mergestat.set_current_timestamp_updated_at();
COMMENT ON TRIGGER set_mergestat_repo_imports_updated_at ON mergestat.repo_imports IS 'trigger to set value of column "updated_at" to current timestamp on row update';
ALTER TABLE ONLY mergestat.repo_imports
ADD CONSTRAINT repo_imports_type_fkey FOREIGN KEY (type) REFERENCES mergestat.repo_import_types(type) ON UPDATE RESTRICT ON DELETE RESTRICT;
ALTER TABLE ONLY mergestat.repo_sync_logs
ADD CONSTRAINT repo_sync_logs_log_type_fkey FOREIGN KEY (log_type) REFERENCES mergestat.repo_sync_log_types(type) ON UPDATE RESTRICT ON DELETE RESTRICT;
ALTER TABLE ONLY mergestat.repo_sync_logs
ADD CONSTRAINT repo_sync_logs_repo_sync_queue_id_fkey FOREIGN KEY (repo_sync_queue_id) REFERENCES mergestat.repo_sync_queue(id) ON UPDATE RESTRICT ON DELETE RESTRICT;
ALTER TABLE ONLY mergestat.repo_sync_queue
ADD CONSTRAINT repo_sync_queue_repo_sync_id_fkey FOREIGN KEY (repo_sync_id) REFERENCES mergestat.repo_syncs(id) ON UPDATE RESTRICT ON DELETE RESTRICT;
ALTER TABLE ONLY mergestat.repo_sync_queue
ADD CONSTRAINT repo_sync_queue_status_fkey FOREIGN KEY (status) REFERENCES mergestat.repo_sync_queue_status_types(type) ON UPDATE RESTRICT ON DELETE RESTRICT;
ALTER TABLE ONLY mergestat.repo_syncs
ADD CONSTRAINT repo_sync_settings_repo_id_fkey FOREIGN KEY (repo_id) REFERENCES public.repos(id) ON UPDATE RESTRICT ON DELETE RESTRICT;
ALTER TABLE ONLY mergestat.repo_syncs
ADD CONSTRAINT repo_syncs_sync_type_fkey FOREIGN KEY (sync_type) REFERENCES mergestat.repo_sync_types(type) ON UPDATE RESTRICT ON DELETE RESTRICT;
ALTER TABLE ONLY public.git_commit_stats
ADD CONSTRAINT commit_stats_repo_id_fkey FOREIGN KEY (repo_id) REFERENCES public.repos(id) ON UPDATE RESTRICT ON DELETE CASCADE;
ALTER TABLE ONLY public.git_commits
ADD CONSTRAINT commits_repo_id_fkey FOREIGN KEY (repo_id) REFERENCES public.repos(id) ON UPDATE CASCADE ON DELETE CASCADE;
ALTER TABLE ONLY public.github_issues
ADD CONSTRAINT github_issues_repo_id_fkey FOREIGN KEY (repo_id) REFERENCES public.repos(id) ON UPDATE RESTRICT ON DELETE RESTRICT;
ALTER TABLE ONLY public.github_pull_requests
ADD CONSTRAINT github_pull_requests_repo_id_fkey FOREIGN KEY (repo_id) REFERENCES public.repos(id) ON UPDATE RESTRICT ON DELETE RESTRICT;
ALTER TABLE ONLY public.github_repo_info
ADD CONSTRAINT github_repo_info_repo_id_fkey FOREIGN KEY (repo_id) REFERENCES public.repos(id) ON UPDATE RESTRICT ON DELETE RESTRICT;
ALTER TABLE ONLY public.github_stargazers
ADD CONSTRAINT github_stargazers_repo_id_fkey FOREIGN KEY (repo_id) REFERENCES public.repos(id) ON UPDATE RESTRICT ON DELETE RESTRICT;
ALTER TABLE ONLY public.repos
ADD CONSTRAINT repos_repo_import_id_fkey FOREIGN KEY (repo_import_id) REFERENCES mergestat.repo_imports(id) ON UPDATE RESTRICT ON DELETE RESTRICT;
ALTER TABLE "mergestat"."repo_sync_queue" ADD column "last_keep_alive" timestamptz NULL;
CREATE TABLE public.github_pull_request_reviews (
    repo_id uuid NOT NULL,
    pr_number integer NOT NULL,
    id text NOT NULL,
    author_login text,
    author_url text,
    author_association text,
    author_can_push_to_repository boolean,
    body text,
    comment_count integer,
    created_at timestamp with time zone,
    created_via_email boolean,
    editor_login text,
    last_edited_at timestamp with time zone,
    published_at timestamp with time zone,
    state text,
    submitted_at timestamp with time zone,
    updated_at timestamp with time zone
);
COMMENT ON TABLE public.github_pull_request_reviews IS 'GitHub pull request reviews';

ALTER TABLE ONLY public.github_pull_request_reviews ADD CONSTRAINT github_pull_request_reviews_pkey PRIMARY KEY (id);

CREATE TABLE public.github_pull_request_commits (
    repo_id uuid NOT NULL,
    pr_number integer NOT NULL,
    hash text,
    message text,
    author_name text,
    author_email text,
    author_when timestamp with time zone,
    committer_name text,
    committer_email text,
    committer_when timestamp with time zone,
    additions integer,
    deletions integer,
    changed_files integer,
    url text
);
COMMENT ON TABLE public.github_pull_request_commits IS 'GitHub pull request commits';

ALTER TABLE ONLY public.github_pull_request_commits ADD CONSTRAINT github_pull_request_commits_pkey PRIMARY KEY (repo_id, pr_number, hash);

CREATE TABLE public.git_files (
    repo_id uuid NOT NULL,
    path text NOT NULL,
    executable boolean NOT NULL,
    contents text
);
COMMENT ON TABLE public.git_files IS 'Git repository files';
ALTER TABLE ONLY public.git_files
ADD CONSTRAINT files_pkey PRIMARY KEY (repo_id, path);
ALTER TABLE ONLY public.git_files
ADD CONSTRAINT files_repo_id_fkey FOREIGN KEY (repo_id) REFERENCES public.repos(id) ON UPDATE CASCADE ON DELETE CASCADE;

INSERT INTO mergestat.repo_import_types (type, description) VALUES ('GITHUB_ORG', 'Import all repos in a GitHub org') ON CONFLICT DO NOTHING;
INSERT INTO mergestat.repo_import_types (type, description) VALUES ('GITHUB_USER', 'Import all repos belonging to a GitHub user') ON CONFLICT DO NOTHING;
INSERT INTO mergestat.repo_sync_log_types (type, description) VALUES ('INFO', 'Log line from a sync run') ON CONFLICT DO NOTHING;
INSERT INTO mergestat.repo_sync_log_types (type, description) VALUES ('ERROR', 'Error from a sync run') ON CONFLICT DO NOTHING;
INSERT INTO mergestat.repo_sync_queue_status_types (type, description) VALUES ('QUEUED', 'Sync job is queued') ON CONFLICT DO NOTHING;
INSERT INTO mergestat.repo_sync_queue_status_types (type, description) VALUES ('RUNNING', 'Syng job is running') ON CONFLICT DO NOTHING;
INSERT INTO mergestat.repo_sync_queue_status_types (type, description) VALUES ('DONE', 'Sync job is done') ON CONFLICT DO NOTHING;
INSERT INTO mergestat.repo_sync_types (type, description) VALUES ('GITHUB_REPO_METADATA', 'Get metadata from GitHub about a repo') ON CONFLICT DO NOTHING;
INSERT INTO mergestat.repo_sync_types (type, description) VALUES ('GIT_COMMITS', 'Get commit history of a repo') ON CONFLICT DO NOTHING;
INSERT INTO mergestat.repo_sync_types (type, description) VALUES ('GIT_FILES', 'Files for a git repo') ON CONFLICT DO NOTHING;
INSERT INTO mergestat.repo_sync_types (type, description) VALUES ('GIT_COMMIT_STATS', 'Get commit stats for a repo') ON CONFLICT DO NOTHING;
INSERT INTO mergestat.repo_sync_types (type, description) VALUES ('GITHUB_REPO_PRS', 'Get pull requests from a GitHub repo') ON CONFLICT DO NOTHING;
INSERT INTO mergestat.repo_sync_types (type, description) VALUES ('GITHUB_REPO_ISSUES', 'Get issues from a GitHub repo') ON CONFLICT DO NOTHING;
INSERT INTO mergestat.repo_sync_types (type, description) VALUES ('GITHUB_REPO_STARS', 'Get stargazers from a GitHub repo') ON CONFLICT DO NOTHING;
INSERT INTO mergestat.repo_sync_types (type, description) VALUES ('GIT_REFS', 'Refs for a git repo') ON CONFLICT DO NOTHING;
INSERT INTO mergestat.repo_sync_types (type, description) VALUES ('GITHUB_PR_REVIEWS', 'Pull request reviews') ON CONFLICT DO NOTHING;
INSERT INTO mergestat.repo_sync_types (type, description) VALUES ('GITHUB_PR_COMMITS', 'Pull request commits') ON CONFLICT DO NOTHING;
INSERT INTO mergestat.repo_sync_types (type, description) VALUES ('GIT_FILES', 'Get files of git repo') ON CONFLICT DO NOTHING;

-- Schema Migrations History...adding to initial migration so we have history for new deployments
CREATE TABLE IF NOT EXISTS public.schema_migrations_history (
    id serial PRIMARY KEY NOT NULL,
    version bigint NOT NULL,
    applied_at timestamptz NOT NULL DEFAULT NOW()
);

CREATE OR REPLACE FUNCTION track_applied_migration()
RETURNS trigger AS $$
DECLARE _current_version BIGINT;
BEGIN
    SELECT COALESCE(MAX(version),0) FROM public.schema_migrations_history INTO _current_version;
    IF new.dirty = 'f' AND new.version > _current_version THEN
        INSERT INTO public.schema_migrations_history(version) VALUES (new.version);
    END IF;
    RETURN NEW;
END;
$$ language 'plpgsql';

-- TRIGGER
DROP TRIGGER IF EXISTS track_applied_migrations ON public.schema_migrations;
CREATE TRIGGER track_applied_migrations AFTER INSERT ON public.schema_migrations FOR EACH ROW EXECUTE PROCEDURE track_applied_migration();

-- SCHEMA MIGRATIONS
CREATE TABLE schema_migrations (
    version bigint NOT NULL PRIMARY KEY,
    dirty boolean NOT NULL
)
