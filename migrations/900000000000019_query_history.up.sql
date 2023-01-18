BEGIN;

CREATE TABLE mergestat.query_history (
    id uuid DEFAULT public.gen_random_uuid() PRIMARY KEY,
    run_at timestamp with time zone DEFAULT now(),
    run_by text NOT NULL,
    query text NOT NULL
);

ALTER TABLE mergestat.query_history ENABLE ROW LEVEL SECURITY;

-- creates an RLS policy that only allows users to see their own queries
CREATE POLICY query_history_access ON mergestat.query_history USING (run_by = current_user);

COMMIT;
