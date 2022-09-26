BEGIN;

-- Create a function that returns the current user, which can be called via the GraphQL API
-- The `merge_stat` is included to avoid a name collision with the `current_user` function
-- and the `_` is so when Graphile camelCases it, it becomes `currentMergeStatUser` (not `currentMergestatUser`)
CREATE OR REPLACE FUNCTION current_merge_stat_user() RETURNS name AS $$ SELECT user $$ LANGUAGE sql STABLE;

COMMIT;
