-- Find all git repos that use a particular "go-module" artifact
SELECT
    name,
    type,
    version,
    repos.repo AS repo
FROM public.syft_repo_artifacts
INNER JOIN public.repos ON public.syft_repo_artifacts.repo_id = public.repos.id
WHERE type = 'go-module' AND name = 'github.com/mattn/go-sqlite3'
