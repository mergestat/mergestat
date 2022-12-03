SELECT
    public.repos.repo,
    public.git_files.path,
    COALESCE(
        JSON_EXTRACT_PATH_TEXT(public.git_files.contents::json, variadic '{packages,"",dependencies,react}'), --additional paths can be added to this coalesce statement
        JSON_EXTRACT_PATH_TEXT(public.git_files.contents::json, variadic '{dependencies,react,version}')
    ) AS dependencies_react_version,
    JSON_EXTRACT_PATH_TEXT(public.git_files.contents::json, variadic '{packages,"",devDependencies,react}') AS devdependencies_react_version
FROM public.git_files
INNER JOIN public.repos ON public.repos.id = public.git_files.repo_id
WHERE public.git_files.path LIKE '%package-lock.json' AND public.git_files.contents LIKE '%"react"%'
