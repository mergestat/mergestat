SELECT
    git_blame.line, -- strip the hostname from repo
    git_blame.author_name,
    git_blame.author_email, -- link to the line in the repo
    git_blame.author_when,
    REPLACE(repos.repo, 'https://github.com/', '') AS repo,
    repos.repo || '/blob/main/' || git_blame.path || '#L' || git_blame.line_no AS url
FROM git_blame
INNER JOIN repos ON repos.id = git_blame.repo_id
WHERE git_blame.line LIKE '%TODO%'
ORDER BY git_blame.author_when ASC
