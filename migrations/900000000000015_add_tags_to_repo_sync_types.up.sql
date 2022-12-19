BEGIN;

CREATE TABLE IF NOT EXISTS mergestat.repo_sync_type_labels (
    label TEXT NOT NULL PRIMARY KEY,
    description TEXT,
    color TEXT NOT NULL DEFAULT ('#dddddd') CHECK (color IS NULL OR color ~* '^#[a-f0-9]{2}[a-f0-9]{2}[a-f0-9]{2}$'));

CREATE TABLE IF NOT EXISTS mergestat.repo_sync_type_label_associations (
    label TEXT NOT NULL,
    repo_sync_type TEXT NOT NULL,
    FOREIGN KEY (label) REFERENCES mergestat.repo_sync_type_labels (label) ON DELETE CASCADE,
    FOREIGN KEY (repo_sync_type) REFERENCES mergestat.repo_sync_types (type) ON DELETE CASCADE,
    UNIQUE (label, repo_sync_type));

COMMENT ON TABLE mergestat.repo_sync_type_labels IS E'@name labels';
COMMENT ON TABLE mergestat.repo_sync_type_label_associations IS E'@name labelAssociations';

INSERT INTO mergestat.repo_sync_type_labels (label, color)
VALUES ('git', '#525252'), ('github', '#1e293b'), ('scanner', '#ea580c'), ('beta', '#8b5cf6')
ON CONFLICT (label) DO UPDATE SET color = EXCLUDED.color, description = EXCLUDED.description;

INSERT INTO mergestat.repo_sync_type_label_associations (label, repo_sync_type)
VALUES ('git', 'GIT_COMMITS'), ('git', 'GIT_FILES'), ('git', 'GIT_COMMIT_STATS'), ('git', 'GIT_REFS'), ('git', 'GIT_BLAME')
ON CONFLICT DO NOTHING;

INSERT INTO mergestat.repo_sync_type_label_associations (label, repo_sync_type)
VALUES ('github', 'GITHUB_REPO_METADATA'), ('github', 'GITHUB_REPO_PRS'), ('github', 'GITHUB_REPO_ISSUES'),
('github', 'GITHUB_REPO_STARS'), ('github', 'GITHUB_PR_REVIEWS'), ('github', 'GITHUB_PR_COMMITS'), ('github', 'GITHUB_ACTIONS'), ('beta', 'GITHUB_ACTIONS')
ON CONFLICT DO NOTHING;

INSERT INTO mergestat.repo_sync_type_label_associations (label, repo_sync_type)
VALUES ('scanner', 'TRIVY_REPO_SCAN'), ('scanner', 'SYFT_REPO_SCAN'), ('scanner', 'YELP_DETECT_SECRETS_REPO_SCAN'), ('scanner', 'GITLEAKS_REPO_SCAN')
ON CONFLICT DO NOTHING;

COMMIT;
