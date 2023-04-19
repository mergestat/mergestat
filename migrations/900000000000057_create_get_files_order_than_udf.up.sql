BEGIN;

CREATE OR REPLACE FUNCTION public.getFilesOlderThan(file_pattern TEXT, older_than_days INTEGER)
RETURNS TABLE (repo TEXT, file_path TEXT, author_when TIMESTAMP(6) WITH TIME ZONE)
LANGUAGE plpgsql
AS $$
BEGIN
    RETURN QUERY
    WITH top_author_when AS (
        SELECT repos.repo AS repo, git_commit_stats.file_path, MAX(git_commits.author_when) as author_when
        FROM git_commits 
        INNER JOIN repos ON git_commits.repo_id = repos.id 
        INNER JOIN git_commit_stats ON git_commit_stats.repo_id = git_commits.repo_id AND git_commit_stats.commit_hash = git_commits.hash and parents < 2
        WHERE git_commit_stats.file_path LIKE file_pattern
        GROUP BY 1, 2
    )
    SELECT * FROM top_author_when
    WHERE top_author_when.author_when < NOW() - (older_than_days || ' day')::INTERVAL
    ORDER BY top_author_when.author_when DESC;
END
$$;
COMMIT;
