SELECT
    public.repos.repo AS repo,
    public.git_files.path,
    public.git_files.contents
FROM public.git_files
INNER JOIN public.repos ON public.repos.id = public.git_files.repo_id
WHERE public.git_files.path LIKE '.github/workflows%.y%ml' --Allows for both .yml and .yaml
ORDER BY 1
