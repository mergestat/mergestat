BEGIN;

--Seeding container images
INSERT INTO mergestat.container_images(name, description, type, url, version, queue)
VALUES
('GitHub Issue Events', 'Retrieves all the events of all issues (includes pull requests) in a GitHub repo', 'docker', 'ghcr.io/mergestat/sync-github-issue-events', 'latest', 'github'),
('GitHub Issue Comments', 'Retrieves all the comments of all issues (includes pull requests) in a GitHub repo', 'docker', 'ghcr.io/mergestat/sync-github-issue-comments', 'latest', 'github'),
('GitHub PR Review Comments', 'Retrieves all the review comments for all pull requests of a GitHub repo', 'docker', 'ghcr.io/mergestat/sync-github-pull-request-review-comments', 'latest', 'github')
ON CONFLICT DO NOTHING;

COMMIT;
