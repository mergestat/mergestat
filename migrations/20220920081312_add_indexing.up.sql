CREATE INDEX IF NOT EXISTS idx_repo_sync_queue_status ON mergestat.repo_sync_queue
(
    status desc
);

CREATE INDEX IF NOT EXISTS idx_repo_sync_queue_created_at ON mergestat.repo_sync_queue
(
    created_at desc
);

CREATE INDEX IF NOT EXISTS idx_repo_sync_logs_repo_sync_queue_id ON mergestat.repo_sync_logs
(
    repo_sync_queue_id desc
);

CREATE INDEX IF NOT EXISTS idx_repo_sync_logs_repo_sync_created_at ON mergestat.repo_sync_logs
(
    created_at desc
);

CREATE INDEX IF NOT EXISTS idx_github_issues_created_at_closed_at_database_id ON public.github_issues
(
    created_at desc,
    closed_at desc,
    database_id
);
