BEGIN;

INSERT INTO mergestat.repo_sync_types (type, description, short_name, priority, type_group)
VALUES ('OSSF_SCORECARD_REPO_SCAN', 'Executes an OSSF scorecard scan on a git repository', 'OSSF Scorecard Repo Scan', 3, 'GITHUB') ON CONFLICT DO NOTHING;

CREATE TABLE IF NOT EXISTS ossf_scorecard_repo_scans (
    repo_id uuid PRIMARY KEY REFERENCES repos(id) ON DELETE CASCADE ON UPDATE RESTRICT,
    results jsonb NOT NULL,
    _mergestat_synced_at timestamp with time zone NOT NULL DEFAULT now()
);

COMMENT ON TABLE public.ossf_scorecard_repo_scans IS 'Output of OSSF scorecard scans on a git repository';
COMMENT ON COLUMN ossf_scorecard_repo_scores.repo_id IS 'foreign key for public.repos.id';
COMMENT ON COLUMN ossf_scorecard_repo_scores.results IS 'JSON results of the scan';
COMMENT ON COLUMN ossf_scorecard_repo_scores._mergestat_synced_at IS 'timestamp when record was synced into the MergeStat database';

CREATE OR REPLACE VIEW ossf_scorecard_repo_scores AS
SELECT
    ossf_scorecard_repo_scans.repo_id,
    ossf_scorecard_repo_scans.results -> 'repo' ->> 'name' AS repo,
    ossf_scorecard_repo_scans.results -> 'repo' ->> 'commit' AS commit,
    ossf_scorecard_repo_scans.results ->> 'date' AS date,
    ossf_scorecard_repo_scans.results ->> 'score' AS score,
    ossf_scorecard_repo_scans.results -> 'scorecard' -> 'version' AS scorecard_version
FROM ossf_scorecard_repo_scans;

COMMENT ON VIEW ossf_scorecard_repo_scores IS 'view of OSSF scorecard scan result scores';
COMMENT ON COLUMN ossf_scorecard_repo_scores.repo_id IS 'foreign key for public.repos.id';
COMMENT ON COLUMN ossf_scorecard_repo_scores.repo IS 'URL to repo scan was run on';
COMMENT ON COLUMN ossf_scorecard_repo_scores.commit IS 'commit of repo that the scan was run on';
COMMENT ON COLUMN ossf_scorecard_repo_scores.date IS 'date of the scan';
COMMENT ON COLUMN ossf_scorecard_repo_scores.score IS 'resulting total score of the scan';
COMMENT ON COLUMN ossf_scorecard_repo_scores.scorecard_version IS 'scorecard version used to run the scan';

CREATE OR REPLACE VIEW ossf_scorecard_repo_check_results AS
SELECT
    ossf_scorecard_repo_scans.repo_id,
    c.value ->> 'name' AS name,
    c.value ->> 'score' AS score,
    c.value ->> 'reason' AS reason,
    c.value ->> 'details' AS details,
    c.value -> 'documentation' ->> 'url' AS documentation_url,
    c.value -> 'documentation' ->> 'short' AS documentation_short,
    c.value AS value
FROM ossf_scorecard_repo_scans, jsonb_array_elements(results -> 'checks') c; -- noqa: L011

COMMENT ON VIEW ossf_scorecard_repo_check_results IS 'view of OSSF scorecard scan check results';
COMMENT ON COLUMN ossf_scorecard_repo_check_results.repo_id IS 'foreign key for public.repos.id';
COMMENT ON COLUMN ossf_scorecard_repo_check_results.name IS 'name of the check in the scan run';
COMMENT ON COLUMN ossf_scorecard_repo_check_results.score IS 'score of the check in the scan run';
COMMENT ON COLUMN ossf_scorecard_repo_check_results.reason IS 'reason for the score of the check in the scan run';
COMMENT ON COLUMN ossf_scorecard_repo_check_results.details IS 'details of the check in the scan run';
COMMENT ON COLUMN ossf_scorecard_repo_check_results.documentation_url IS 'URL to the documentation of the check in the scan run';
COMMENT ON COLUMN ossf_scorecard_repo_check_results.documentation_short IS 'description of the check in the scan run';
COMMENT ON COLUMN ossf_scorecard_repo_check_results.value IS 'JSON of the check results in the scan run';

COMMIT;
