BEGIN;

ALTER TABLE mergestat.saved_queries
ALTER COLUMN name SET NOT NULL;

ALTER TABLE mergestat.saved_queries
ALTER COLUMN sql SET NOT NULL;

COMMIT;
