-- Count of repos by primary language (as determined by GitHub)
SELECT
    primary_language,
    count(*) AS repo_count
FROM github_repo_info
GROUP BY primary_language
ORDER BY repo_count DESC
