SELECT
    github_pull_requests.*,
    repos.repo,
    github_pull_request_reviews.author_login as reviewer_login,
    github_pull_request_reviews.state as review_state
FROM github_pull_requests
INNER JOIN repos ON repos.id = github_pull_requests.repo_id
LEFT JOIN github_pull_request_reviews ON github_pull_requests.repo_id = github_pull_request_reviews.repo_id AND github_pull_requests.number = github_pull_request_reviews.pr_number
WHERE
    github_pull_requests.state = 'MERGED' -- only return PRs that were merged
    AND github_pull_request_reviews.state is null -- only return PRs where there was no review
