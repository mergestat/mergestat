-- Count of repos by license (as determined by GitHub)
SELECT
    license_name,
    count(*)
FROM github_repo_info
GROUP BY license_name
ORDER BY count(*) DESC
