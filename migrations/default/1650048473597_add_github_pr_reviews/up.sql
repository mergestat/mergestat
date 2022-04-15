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
