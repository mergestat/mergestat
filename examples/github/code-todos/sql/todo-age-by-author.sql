SELECT
    git_blame.author_name,
    avg(now() - git_blame.author_when) AS age
FROM git_blame
INNER JOIN repos ON repos.id = git_blame.repo_id
WHERE git_blame.line LIKE '%TODO%'
GROUP BY git_blame.author_name
ORDER BY age ASC
