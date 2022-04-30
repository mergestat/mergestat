SET check_function_bodies = false;
INSERT INTO mergestat.repo_sync_types (type, description) VALUES ('GIT_FILES', 'Get files of git repo') ON CONFLICT DO NOTHING;
