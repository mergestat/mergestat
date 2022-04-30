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