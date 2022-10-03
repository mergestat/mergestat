WITH unionCTE AS (
    SELECT
        (public.github_repo_info.owner || '/' || public.github_repo_info.name) AS base_repository_name,
        public.git_refs.name AS tag_name,
        public.git_commits.committer_when
    FROM public.git_refs
    INNER JOIN public.git_commits ON public.git_refs.tag_commit_hash = public.git_commits.hash AND public.git_refs.repo_id = public.git_commits.repo_id
    INNER JOIN public.repos ON public.git_commits.repo_id = public.repos.id
    INNER JOIN public.github_repo_info ON public.git_commits.repo_id = public.github_repo_info.repo_id
    WHERE
        public.git_refs.type = 'tag'
    --generate a record for now so we can calculate the time difference since the last tag was created from now
    UNION
    SELECT DISTINCT
        public.github_repo_info.owner || '/' || public.github_repo_info.name AS base_repository_name,
        'Generated Entry For Now' AS tag_name,
        CAST(NOW() AS TIMESTAMP(6) WITH TIME ZONE) AS committer_when
    FROM public.git_refs
    INNER JOIN public.git_commits ON public.git_refs.tag_commit_hash = public.git_commits.hash AND public.git_refs.repo_id = public.git_commits.repo_id
    INNER JOIN public.repos ON public.git_commits.repo_id = public.repos.id
    INNER JOIN public.github_repo_info ON public.git_commits.repo_id = public.github_repo_info.repo_id
    WHERE
        public.git_refs.type = 'tag'
)

SELECT
    base_repository_name,
    tag_name,
    committer_when,
    --compute the difference in days from the current tag commit to the previous tag commit. Default/Coalesce to 0 for the first tag since it won't have a previous value
    COALESCE(EXTRACT(EPOCH FROM (committer_when - LAG(committer_when) OVER (PARTITION BY base_repository_name ORDER BY committer_when)))::INTEGER/60/60/24, 0) AS days_since_previous_tag
FROM unionCTE
ORDER BY 1, 3
