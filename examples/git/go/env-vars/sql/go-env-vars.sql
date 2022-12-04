-- Find places in Go code where os.Getenv(...) is called to list where ENV vars are accessed
SELECT
    repos.repo,
    path,
    array_to_string(regexp_matches(contents, 'os.Getenv\(\"(.*?)\"\)', 'g'), ',') AS matches
FROM git_files
INNER JOIN repos ON git_files.repo_id = repos.id
WHERE path LIKE '%.go'
