SET check_function_bodies = false;
INSERT INTO mergestat.repo_sync_types (type, description) VALUES ('GITHUB_PR_REVIEWS', 'Pull request reviews') ON CONFLICT DO NOTHING;
