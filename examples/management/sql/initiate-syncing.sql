--add one or more repos
INSERT INTO public.repos (repo, is_github)
VALUES
('https://github.com/mergestat/mergestat-lite', TRUE)
--,('https://github.com/mergestat/mergestat', TRUE)
--,('https://github.com/angular/angular', TRUE)
ON CONFLICT DO NOTHING;

--add all available syncs to all repos
INSERT INTO mergestat.repo_syncs (repo_id, sync_type, priority, schedule_enabled)
SELECT
    public.repos.id,
    mergestat.repo_sync_types.type,
    mergestat.repo_sync_types.priority,
    TRUE AS schedule_enabled
FROM public.repos CROSS JOIN mergestat.repo_sync_types
ON CONFLICT DO NOTHING;

--add all syncs to the queue
INSERT INTO mergestat.repo_sync_queue (repo_sync_id, status, priority, type_group)
SELECT
    id,
    'QUEUED' AS status,
    mergestat.repo_syncs.priority,
    mergestat.repo_sync_types.type_group
FROM mergestat.repo_syncs
INNER JOIN mergestat.repo_sync_types ON mergestat.repo_syncs.sync_type = mergestat.repo_sync_types.type
ON CONFLICT DO NOTHING;

--check sync queue
SELECT
    mergestat.repo_sync_queue.*,
    mergestat.repo_syncs.sync_type,
    public.repos.repo
FROM mergestat.repo_sync_queue
INNER JOIN mergestat.repo_syncs ON mergestat.repo_sync_queue.repo_sync_id = mergestat.repo_syncs.id
INNER JOIN public.repos ON mergestat.repo_syncs.repo_id = public.repos.id
ORDER BY mergestat.repo_sync_queue.created_at DESC;
