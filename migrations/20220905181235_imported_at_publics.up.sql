BEGIN;

ALTER TABLE public.github_issues
ADD COLUMN imported_at  timestamp with time zone  DEFAULT now() NOT NULL;


ALTER TABLE public.git_commit_stats
ADD COLUMN imported_at  timestamp with time zone  DEFAULT now() NOT NULL;



ALTER TABLE public.git_refs
ADD COLUMN imported_at  timestamp with time zone  DEFAULT now() NOT NULL;



ALTER TABLE public.git_files
ADD COLUMN imported_at  timestamp with time zone  DEFAULT now() NOT NULL;



ALTER TABLE public.repos 
ADD COLUMN imported_at  timestamp with time zone  DEFAULT now() NOT NULL;



ALTER TABLE public.github_stargazers
ADD COLUMN imported_at  timestamp with time zone  DEFAULT now() NOT NULL;



ALTER TABLE public.github_pull_request_commits
ADD COLUMN imported_at  timestamp with time zone  DEFAULT now() NOT NULL;



ALTER TABLE public.git_commits
ADD COLUMN imported_at  timestamp with time zone  DEFAULT now() NOT NULL;



ALTER TABLE public.github_pull_request_reviews
ADD COLUMN imported_at  timestamp with time zone  DEFAULT now() NOT NULL;



ALTER TABLE public.github_repo_info
ADD COLUMN imported_at  timestamp with time zone  DEFAULT now() NOT NULL;



ALTER TABLE public.github_pull_requests
ADD COLUMN imported_at  timestamp with time zone  DEFAULT now() NOT NULL;

COMMIT;






