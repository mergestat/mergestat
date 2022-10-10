BEGIN;

ALTER TABLE public.github_pull_request_reviews
DROP CONSTRAINT IF EXISTS github_pull_request_reviews_pkey;

ALTER TABLE public.github_pull_request_reviews
ADD CONSTRAINT github_pull_request_reviews_pkey PRIMARY KEY(repo_id, id);

COMMIT;
