SELECT
    dependencies_go_version,
    SUM(count) AS count
FROM (SELECT
    1 AS count,
    SUBSTRING(public.git_files.contents FROM 'go ([0-9]+.[0-9]+)') AS dependencies_go_version
    FROM public.git_files
    INNER JOIN public.repos ON public.repos.id = public.git_files.repo_id
    WHERE public.git_files.path LIKE '%go.mod'
) AS t
GROUP BY dependencies_go_version
