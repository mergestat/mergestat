--add one or more repos
INSERT INTO public.repos (repo, is_github)
VALUES
('https://github.com/mergestat/mergestat-lite', TRUE)
--,('https://github.com/mergestat/mergestat', TRUE)
--,('https://github.com/angular/angular', TRUE)
ON CONFLICT DO NOTHING;

--add all available syncs to all repos
INSERT INTO mergestat.repo_syncs (repo_id, sync_type)
SELECT
    public.repos.id,
    mergestat.repo_sync_types.type
FROM public.repos CROSS JOIN mergestat.repo_sync_types
ON CONFLICT DO NOTHING;

--add all syncs to the queue
INSERT INTO mergestat.repo_sync_queue (repo_sync_id, status)
SELECT
    id,
    'QUEUED' AS status
FROM mergestat.repo_syncs
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
