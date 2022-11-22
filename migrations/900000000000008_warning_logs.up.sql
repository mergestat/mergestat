BEGIN;

INSERT INTO mergestat.repo_sync_log_types(type,description) VALUES ('INFO', 'Information from a sync run') 
ON CONFLICT(type) DO UPDATE 
SET description=EXCLUDED.description;

INSERT INTO mergestat.repo_sync_log_types(type,description) VALUES ('WARNING', 'Unexpected behavior from a sync run') 
ON CONFLICT(type) DO UPDATE 
SET description=EXCLUDED.description;

INSERT INTO mergestat.repo_sync_log_types(type,description) VALUES ('ERROR', 'Error from a sync run') 
ON CONFLICT(type) DO UPDATE 
SET description=EXCLUDED.description;

COMMIT;