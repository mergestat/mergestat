SELECT *
FROM public.git_commits
WHERE public.git_commits.parents < 2 -- exclude merge commits
