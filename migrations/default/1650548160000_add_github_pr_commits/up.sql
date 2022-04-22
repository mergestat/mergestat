CREATE TABLE public.github_pull_request_commits (
    repo_id uuid NOT NULL,
    hash text,	
    messaage text,	
    author_name text,	
    author_email text,	
    author_when timestamp with time zone,
    committer_name text,	
    committer_email text,	
    committer_when timestamp with time zone,
    additions integer,
    deletions integer,
    changed_files integer,
    url	TEXT,
);
COMMENT ON TABLE public.github_pull_request_commits IS 'GitHub pull request commits';

ALTER TABLE ONLY public.github_pull_request_commits ADD CONSTRAINT github_pull_request_commits_pkey PRIMARY KEY (repo_id, hash);
