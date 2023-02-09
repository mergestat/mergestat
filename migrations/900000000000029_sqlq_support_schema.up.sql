BEGIN;

CREATE TABLE IF NOT EXISTS mergestat.jobs_types (
    id uuid PRIMARY KEY DEFAULT public.gen_random_uuid() NOT NULL,
    name text NOT NULL,
    queue text NOT NULL,
    description text,
    parameters jsonb,
    priority int,
    schedule timestamp with time zone,
    created_at timestamp with time zone,
    modified_at timestamp with time zone,
    deleted_at timestamp with time zone,
    FOREIGN KEY (queue) REFERENCES sqlq.queues (name) ON DELETE CASCADE,
    CONSTRAINT unique_type UNIQUE(name)
);

CREATE TABLE IF NOT EXISTS mergestat.jobs (
    id uuid PRIMARY KEY DEFAULT public.gen_random_uuid() NOT NULL,
    queue text NOT NULL,
    type text NOT NULL,
    description text,
    parameters jsonb,
    results jsonb,
    priority int,
    created_at timestamp with time zone,
    modified_at timestamp with time zone,
    deleted_at timestamp with time zone,
    FOREIGN KEY (queue) REFERENCES sqlq.queues (name) ON DELETE CASCADE,
    FOREIGN KEY (type) REFERENCES mergestat.jobs_types (name) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS mergestat.job_schedules (
    job_id uuid NOT NULL,
    schedule bigint,
    created_at timestamp with time zone,
    modified_at timestamp with time zone,
    deleted_at timestamp with time zone,
    FOREIGN KEY (job_id) REFERENCES mergestat.jobs (id) ON DELETE CASCADE
);

COMMIT;
