BEGIN;

ALTER TABLE public.repos
DROP CONSTRAINT repos_repo_import_id_fkey;

ALTER TABLE public.repos
ADD CONSTRAINT repos_repo_import_id_fkey
FOREIGN KEY (repo_import_id) REFERENCES mergestat.repo_imports(id) ON UPDATE RESTRICT ON DELETE CASCADE;

COMMIT;
