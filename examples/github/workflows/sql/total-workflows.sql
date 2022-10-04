SELECT COUNT(*) AS total_worfkflows
FROM public.git_files
INNER JOIN public.repos ON public.repos.id = public.git_files.repo_id
WHERE public.git_files.path LIKE '.github/workflows%.y%ml'
ORDER BY 1
