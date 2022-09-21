BEGIN;

ALTER TABLE public.github_issues
ADD COLUMN _mergestat_synced_at timestamp with time zone DEFAULT now() NOT NULL;


ALTER TABLE public.git_commit_stats
ADD COLUMN _mergestat_synced_at timestamp with time zone DEFAULT now() NOT NULL;


ALTER TABLE public.git_refs
ADD COLUMN _mergestat_synced_at timestamp with time zone DEFAULT now() NOT NULL;


ALTER TABLE public.git_files
ADD COLUMN _mergestat_synced_at timestamp with time zone DEFAULT now() NOT NULL;


ALTER TABLE public.repos
ADD COLUMN _mergestat_synced_at timestamp with time zone DEFAULT now() NOT NULL;


ALTER TABLE public.github_stargazers
ADD COLUMN _mergestat_synced_at timestamp with time zone DEFAULT now() NOT NULL;


ALTER TABLE public.github_pull_request_commits
ADD COLUMN _mergestat_synced_at timestamp with time zone DEFAULT now() NOT NULL;


ALTER TABLE public.git_commits
ADD COLUMN _mergestat_synced_at timestamp with time zone DEFAULT now() NOT NULL;


ALTER TABLE public.github_pull_request_reviews
ADD COLUMN _mergestat_synced_at timestamp with time zone DEFAULT now() NOT NULL;


ALTER TABLE public.github_repo_info
ADD COLUMN _mergestat_synced_at timestamp with time zone DEFAULT now() NOT NULL;


ALTER TABLE public.github_pull_requests
ADD COLUMN _mergestat_synced_at timestamp with time zone DEFAULT now() NOT NULL;

ALTER TABLE public.trivy_repo_scans
ADD COLUMN _mergestat_synced_at timestamp with time zone DEFAULT now() NOT NULL;

CREATE OR REPLACE VIEW public.git_branches AS
SELECT
    git_refs.repo_id,
    git_refs.full_name,
    git_refs.hash,
    git_refs.name,
    git_refs.remote,
    git_refs.target,
    git_refs.type,
    git_refs.tag_commit_hash,
    git_refs._mergestat_synced_at
FROM public.git_refs
WHERE (git_refs.type = 'branch'::text);


CREATE OR REPLACE VIEW public.git_tags AS
SELECT
    git_refs.repo_id,
    git_refs.full_name,
    git_refs.hash,
    git_refs.name,
    git_refs.remote,
    git_refs.target,
    git_refs.type,
    git_refs.tag_commit_hash,
    git_refs._mergestat_synced_at
FROM public.git_refs
WHERE (git_refs.type = 'tag'::text);

CREATE OR REPLACE VIEW trivy_repo_vulnerabilities AS
SELECT -- noqa: L034
    trivy_repo_scans.repo_id,
    v::jsonb as vulnerability,
    r.value->> 'Target' as target,
    r.value->> 'Class' as class,
    r.value->> 'Type' as type,
    v->> 'VulnerabilityID' as vulnerability_id,
    v->> 'PkgName' as vulnerability_pkg_name,
    v->> 'InstalledVersion' as vulnerability_installed_version,
    v->> 'Severity' as vulnerability_severity,
    v->> 'Title' as vulnerability_title,
    v->> 'Description' as vulnerability_description,
    trivy_repo_scans._mergestat_synced_at
FROM trivy_repo_scans, jsonb_array_elements(results-> 'Results') AS r, jsonb_array_elements(r-> 'Vulnerabilities') AS v;


COMMIT;
