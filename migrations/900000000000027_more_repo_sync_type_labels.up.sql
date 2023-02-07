BEGIN;

-- add some additional label associations we missed during implementation
INSERT INTO mergestat.repo_sync_type_label_associations (label, repo_sync_type)
VALUES ('git', 'GIT_REMOTES'), ('scanner', 'GOSEC_REPO_SCAN'), ('scanner', 'GRYPE_REPO_SCAN'), ('scanner', 'OSSF_SCORECARD_REPO_SCAN'), ('github', 'OSSF_SCORECARD_REPO_SCAN')
ON CONFLICT DO NOTHING;

-- set some default priorities we missed during implementation
UPDATE mergestat.repo_sync_types SET priority = 2 WHERE mergestat.repo_sync_types.type = 'GIT_REMOTES';
UPDATE mergestat.repo_sync_types SET priority = 3 WHERE mergestat.repo_sync_types.type = 'GRYPE_REPO_SCAN';

COMMIT;
