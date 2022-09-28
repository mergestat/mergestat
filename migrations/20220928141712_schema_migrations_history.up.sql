BEGIN;

CREATE TABLE IF NOT EXISTS public.schema_migrations_history (
    id serial PRIMARY KEY NOT NULL,
    version bigint NOT NULL,
    applied_at timestamptz NOT NULL DEFAULT NOW()
);

CREATE OR REPLACE FUNCTION track_applied_migration()
RETURNS trigger AS $$
DECLARE _current_version BIGINT;
BEGIN
    SELECT COALESCE(MAX(version),0) FROM public.schema_migrations_history INTO _current_version;
    IF new.dirty = 'f' AND new.version > _current_version THEN
        INSERT INTO public.schema_migrations_history(version) VALUES (new.version);
    END IF;
    RETURN NEW;
END;
$$ language 'plpgsql';

-- TRIGGER
DROP TRIGGER IF EXISTS track_applied_migrations ON public.schema_migrations;
CREATE TRIGGER track_applied_migrations AFTER INSERT ON public.schema_migrations FOR EACH ROW EXECUTE PROCEDURE track_applied_migration();

COMMIT;
