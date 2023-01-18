BEGIN;

CREATE TABLE mergestat.query_history (
    id uuid DEFAULT public.gen_random_uuid() PRIMARY KEY,
    run_at timestamp with time zone DEFAULT now(),
    run_by text NOT NULL,
    query text NOT NULL
);

COMMIT;
