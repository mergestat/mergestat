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
CREATE TABLE public.commit_stats (
    repo_id uuid NOT NULL,
    commit_hash text NOT NULL,
    file_path text NOT NULL,
    additions integer NOT NULL,
    deletions integer NOT NULL
);
COMMENT ON TABLE public.commit_stats IS 'Commit stats';
CREATE TABLE public.commits (
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
COMMENT ON TABLE public.commits IS 'Git repository commits';
CREATE TABLE public.github_repo_info (
    repo_id uuid NOT NULL,
    owner text NOT NULL,
    name text NOT NULL,
    metadata jsonb NOT NULL
);
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
ALTER TABLE ONLY public.commits
    ADD CONSTRAINT commits_pkey PRIMARY KEY (repo_id, hash);
ALTER TABLE ONLY public.github_repo_info
    ADD CONSTRAINT github_repo_info_owner_name_key UNIQUE (owner, name);
ALTER TABLE ONLY public.github_repo_info
    ADD CONSTRAINT github_repo_info_pkey PRIMARY KEY (repo_id);
ALTER TABLE ONLY public.repos
    ADD CONSTRAINT repos_pkey PRIMARY KEY (id);
CREATE INDEX commits_author_when_idx ON public.commits USING btree (repo_id, author_when);
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
ALTER TABLE ONLY public.commit_stats
    ADD CONSTRAINT commit_stats_repo_id_commit_hash_fkey FOREIGN KEY (repo_id, commit_hash) REFERENCES public.commits(repo_id, hash) ON UPDATE RESTRICT ON DELETE CASCADE;
ALTER TABLE ONLY public.commit_stats
    ADD CONSTRAINT commit_stats_repo_id_fkey FOREIGN KEY (repo_id) REFERENCES public.repos(id) ON UPDATE RESTRICT ON DELETE CASCADE;
ALTER TABLE ONLY public.commits
    ADD CONSTRAINT commits_repo_id_fkey FOREIGN KEY (repo_id) REFERENCES public.repos(id) ON UPDATE CASCADE ON DELETE CASCADE;
ALTER TABLE ONLY public.github_repo_info
    ADD CONSTRAINT github_repo_info_repo_id_fkey FOREIGN KEY (repo_id) REFERENCES public.repos(id) ON UPDATE RESTRICT ON DELETE RESTRICT;
ALTER TABLE ONLY public.repos
    ADD CONSTRAINT repos_repo_import_id_fkey FOREIGN KEY (repo_import_id) REFERENCES mergestat.repo_imports(id) ON UPDATE RESTRICT ON DELETE RESTRICT;
