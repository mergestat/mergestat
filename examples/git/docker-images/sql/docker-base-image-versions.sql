-- Find all base Docker images references and pull out their versions
WITH docker_base_images AS (
    SELECT
        repos.repo AS repo,
        path,
        (regexp_matches(contents, 'FROM (.*):(.*) AS', 'gm')) AS docker_image
    FROM git_files
    INNER JOIN repos ON git_files.repo_id = repos.id
    WHERE path LIKE '%Dockerfile%'
)
SELECT
    *,
    docker_image[1] AS image,
    docker_image[2] AS version
FROM docker_base_images
