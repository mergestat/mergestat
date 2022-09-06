BEGIN;

ALTER TABLE public.github_issues
ADD COLUMN _mergestat_synced_at  timestamp with time zone  DEFAULT now() NOT NULL;


ALTER TABLE public.git_commit_stats
ADD COLUMN _mergestat_synced_at  timestamp with time zone  DEFAULT now() NOT NULL;



ALTER TABLE public.git_refs
ADD COLUMN _mergestat_synced_at  timestamp with time zone  DEFAULT now() NOT NULL;



ALTER TABLE public.git_files
ADD COLUMN _mergestat_synced_at  timestamp with time zone  DEFAULT now() NOT NULL;



ALTER TABLE public.repos 
ADD COLUMN _mergestat_synced_at  timestamp with time zone  DEFAULT now() NOT NULL;



ALTER TABLE public.github_stargazers
ADD COLUMN _mergestat_synced_at  timestamp with time zone  DEFAULT now() NOT NULL;



ALTER TABLE public.github_pull_request_commits
ADD COLUMN _mergestat_synced_at  timestamp with time zone  DEFAULT now() NOT NULL;



ALTER TABLE public.git_commits
ADD COLUMN _mergestat_synced_at  timestamp with time zone  DEFAULT now() NOT NULL;



ALTER TABLE public.github_pull_request_reviews
ADD COLUMN _mergestat_synced_at  timestamp with time zone  DEFAULT now() NOT NULL;



ALTER TABLE public.github_repo_info
ADD COLUMN _mergestat_synced_at  timestamp with time zone  DEFAULT now() NOT NULL;



ALTER TABLE public.github_pull_requests
ADD COLUMN _mergestat_synced_at  timestamp with time zone  DEFAULT now() NOT NULL;

ALTER TABLE public.trivy_repo_scans
ADD COLUMN _mergestat_synced_at  timestamp with time zone  DEFAULT now() NOT NULL;

COMMIT;






