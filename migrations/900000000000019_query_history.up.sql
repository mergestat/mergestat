BEGIN;

CREATE TABLE mergestat.query_history (
    id uuid DEFAULT public.gen_random_uuid() PRIMARY KEY,
    run_at timestamp with time zone DEFAULT now(),
    run_by text NOT NULL,
    query text NOT NULL
);

ALTER TABLE mergestat.query_history ENABLE ROW LEVEL SECURITY;

-- creates an RLS policy that only allows users to see their own queries
CREATE POLICY query_history_access ON mergestat.query_history FOR ALL USING (run_by = current_user);

-- the mergestat_role_readonly needs to be permitted to INSERT into the query_history table
-- the policy above will still prevent the mergestat_role_readonly (any or user) from inserting a row
-- with a run_by value that is *not* the current_user
GRANT INSERT ON TABLE mergestat.query_history TO mergestat_role_readonly;

COMMIT;
