-- Find the most commonly used artifacts across all repos
SELECT
    name,
    type,
    language,
    count(*) AS repo_count
FROM public.syft_repo_artifacts
INNER JOIN public.repos ON public.syft_repo_artifacts.repo_id = public.repos.id
GROUP BY name, type, language
ORDER BY repo_count DESC
