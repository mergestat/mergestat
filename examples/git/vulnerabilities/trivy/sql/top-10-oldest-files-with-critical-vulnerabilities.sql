SELECT
    MAX(committer_when) AS last_commit_to_file,
    repo,
    target,
    vulnerability_id,
    vulnerability_pkg_name,
    vulnerability_installed_version,
    vulnerability_severity
FROM trivy_repo_vulnerabilities
INNER JOIN git_commit_stats ON trivy_repo_vulnerabilities.repo_id = git_commit_stats.repo_id AND trivy_repo_vulnerabilities.target = git_commit_stats.file_path
INNER JOIN git_commits ON git_commit_stats.repo_id = git_commits.repo_id AND git_commit_stats.commit_hash = git_commits.hash
INNER JOIN repos ON trivy_repo_vulnerabilities.repo_id = repos.id
WHERE vulnerability_severity = 'CRITICAL'
GROUP BY 2, 3, 4, 5, 6, 7
ORDER BY 1 ASC
LIMIT 10
