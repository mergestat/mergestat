SELECT
    public.github_issues.url,
    public.github_issues.state,
    public.github_issues.comment_count
FROM public.github_issues
WHERE
    public.github_issues.comment_count > 10
    AND public.github_issues.state != 'CLOSED'
