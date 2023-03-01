BEGIN;
ALTER TABLE public.github_repo_info
ADD COLUMN advanced_security text;

ALTER TABLE public.github_repo_info
ADD COLUMN secret_scanning text;

ALTER TABLE public.github_repo_info
ADD COLUMN secret_scanning_push_protection text;

COMMENT ON COLUMN public.github_repo_info.advanced_security IS 'advance security availability';
COMMENT ON COLUMN public.github_repo_info.secret_scanning IS 'secret scanning availability';
COMMENT ON COLUMN public.github_repo_info.secret_scanning_push_protection IS 'secret scanning push protection availability';

COMMIT;
