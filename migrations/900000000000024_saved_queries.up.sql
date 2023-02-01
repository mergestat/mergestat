BEGIN;

CREATE TABLE IF NOT EXISTS saved_queries(
    id uuid PRIMARY KEY DEFAULT public.gen_random_uuid() NOT NULL,
    created_by text,
    created_at timestamp(6) with time zone,
    name text,
    sqlq text,
    visualizations jsonb
);

COMMIT;
