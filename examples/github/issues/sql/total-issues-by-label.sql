WITH labels AS (SELECT
        public.github_issues.database_id,
        public.github_issues.repo_id,
        JSONB_ARRAY_ELEMENTS_TEXT(public.github_issues.labels) AS label
    FROM public.github_issues
)

SELECT
    labels.label,
    COUNT(*) AS total_issues
FROM
    public.github_issues
INNER JOIN labels ON public.github_issues.database_id = labels.database_id AND public.github_issues.repo_id = labels.repo_id
WHERE public.github_issues.labels != '[]'
GROUP BY 1
ORDER BY 2 DESC
