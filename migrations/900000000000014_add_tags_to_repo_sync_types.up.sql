CREATE TABLE IF NOT EXISTS mergestat.repo_sync_type_labels
(
    name        TEXT NOT NULL PRIMARY KEY,
    description TEXT,
    color       TEXT NOT NULL DEFAULT ('#dddddd') CHECK (color is null or color ~* '^#[a-f0-9]{2}[a-f0-9]{2}[a-f0-9]{2}$')
);

CREATE TABLE IF NOT EXISTS mergestat.repo_sync_type_tagged
(
    name     TEXT NOT NULL,
    typename TEXT NOT NULL,

    FOREIGN KEY (name) REFERENCES mergestat.repo_sync_type_labels (name) ON DELETE CASCADE,
    FOREIGN KEY (typename) REFERENCES mergestat.repo_sync_types (type) ON DELETE CASCADE,

    UNIQUE (name, typename)
);

COMMENT ON TABLE mergestat.repo_sync_type_labels IS E'@name labels';
COMMENT ON TABLE mergestat.repo_sync_type_tagged IS E'@name tags';

INSERT INTO mergestat.repo_sync_type_labels (name, color)
VALUES ('git', '#f34f29'),
       ('github', '#333333'),
       ('trivy', '#00ffe4'),
       ('syft', '#f67089')
ON CONFLICT (name) DO UPDATE SET color       = EXCLUDED.color,
                                 description = EXCLUDED.description;

INSERT INTO mergestat.repo_sync_type_tagged (name, typename)
VALUES ('git', 'GIT_COMMITS'),
       ('git', 'GIT_FILES'),
       ('git', 'GIT_COMMIT_STATS'),
       ('git', 'GIT_REFS'),
       ('git', 'GIT_BLAME')
ON CONFLICT DO NOTHING;

INSERT INTO mergestat.repo_sync_type_tagged (name, typename)
VALUES ('github', 'GITHUB_REPO_METADATA'),
       ('github', 'GITHUB_REPO_PRS'),
       ('github', 'GITHUB_REPO_ISSUES'),
       ('github', 'GITHUB_REPO_STARS'),
       ('github', 'GITHUB_PR_REVIEWS'),
       ('github', 'GITHUB_PR_COMMITS'),
       ('github', 'GITHUB_ACTIONS')
ON CONFLICT DO NOTHING;

INSERT INTO mergestat.repo_sync_type_tagged (name, typename)
VALUES ('trivy', 'TRIVY_REPO_SCAN'),
       ('syft', 'SYFT_REPO_SCAN')
ON CONFLICT DO NOTHING;
