SELECT
    public.repos.repo,
    public.git_files.path,
    substring(public.git_files.contents FROM 'go ([0-9]+.[0-9]+)') AS dependencies_go_version
FROM public.git_files
INNER JOIN public.repos ON public.repos.id = public.git_files.repo_id
WHERE public.git_files.path LIKE '%go.mod'
