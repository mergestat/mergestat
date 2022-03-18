SET check_function_bodies = false;
CREATE SCHEMA mergestat;
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
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    repo_sync_id uuid NOT NULL,
    status text NOT NULL,
    started_at timestamp with time zone,
    done_at timestamp with time zone
);
CREATE VIEW mergestat.latest_repo_syncs AS
 SELECT DISTINCT ON (repo_sync_queue.repo_sync_id) repo_sync_queue.id,
    repo_sync_queue.created_at,
    repo_sync_queue.repo_sync_id,
    repo_sync_queue.status,
    repo_sync_queue.started_at,
    repo_sync_queue.done_at
   FROM mergestat.repo_sync_queue
  WHERE (repo_sync_queue.status = 'DONE'::text)
  ORDER BY repo_sync_queue.repo_sync_id, repo_sync_queue.created_at DESC;
CREATE TABLE mergestat.repo_import_types (
    type text NOT NULL,
    description text NOT NULL
);
COMMENT ON TABLE mergestat.repo_import_types IS 'Types of repo imports';
CREATE TABLE mergestat.repo_imports (
    id uuid DEFAULT public.gen_random_uuid() NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_at timestamp with time zone DEFAULT now() NOT NULL,
    type text NOT NULL,
    settings jsonb DEFAULT jsonb_build_object() NOT NULL,
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
    created_at timestamp with time zone DEFAULT now() NOT NULL,
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
    settings jsonb DEFAULT jsonb_build_object() NOT NULL,
    id uuid DEFAULT public.gen_random_uuid() NOT NULL
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
 SELECT git_refs.repo_id,
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
 SELECT git_refs.repo_id,
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
    metadata jsonb NOT NULL
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
    id uuid DEFAULT public.gen_random_uuid() NOT NULL,
    repo text NOT NULL,
    ref text,
    is_github boolean,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    settings jsonb DEFAULT jsonb_build_object() NOT NULL,
    tags jsonb DEFAULT jsonb_build_array() NOT NULL,
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
CREATE INDEX commits_author_when_idx ON public.git_commits USING btree (repo_id, author_when);
CREATE UNIQUE INDEX repos_repo_ref_unique ON public.repos USING btree (repo, ((ref IS NULL))) WHERE (ref IS NULL);
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
    ADD CONSTRAINT commit_stats_repo_id_commit_hash_fkey FOREIGN KEY (repo_id, commit_hash) REFERENCES public.git_commits(repo_id, hash) ON UPDATE RESTRICT ON DELETE CASCADE;
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
