BEGIN;

-- Creating the table and altering the column types is necessary
-- as sqlc generates will generate an int32 instead of int64 if 
-- we use a conditional alter
CREATE TABLE IF NOT EXISTS public.github_issues (database_id INTEGER);
CREATE TABLE IF NOT EXISTS public.github_pull_requests (database_id INTEGER);

ALTER TABLE public.github_pull_requests
ALTER COLUMN database_id TYPE BIGINT USING database_id::BIGINT;

ALTER TABLE public.github_issues
ALTER COLUMN database_id TYPE BIGINT USING database_id::BIGINT;

-- Drop the tables if they don't contain any data so that the UI stays clean
DO $$ 
BEGIN 
   IF NOT EXISTS (SELECT 1 FROM public.github_issues) THEN 
      DROP TABLE public.github_issues; 
   END IF; 
END $$;

DO $$
BEGIN 
   IF NOT EXISTS (SELECT 1 FROM public.github_pull_requests) THEN 
      DROP TABLE public.github_pull_requests; 
   END IF; 
END $$;

COMMIT;