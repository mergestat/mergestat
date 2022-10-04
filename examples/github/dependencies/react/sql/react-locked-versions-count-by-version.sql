SELECT
    dependencies_react_version,
    SUM(count) AS count
FROM (SELECT
    public.repos.repo,
    1 AS count,
    COALESCE(
        JSON_EXTRACT_PATH_TEXT(public.git_files.contents::json, variadic '{packages,"",dependencies,react}'), --additional paths can be added to this coalesce statement
        JSON_EXTRACT_PATH_TEXT(public.git_files.contents::json, variadic '{dependencies,react,version}'),
        ''
    ) AS dependencies_react_version
    FROM public.git_files
    INNER JOIN public.repos ON public.repos.id = public.git_files.repo_id
    WHERE public.git_files.path LIKE '%package-lock.json' AND public.git_files.contents LIKE '%"react"%'
) AS t
GROUP BY dependencies_react_version
