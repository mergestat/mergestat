BEGIN;

--update GitHub Repos provider settings to include url
UPDATE mergestat.providers SET settings = '{"url": "https://github.com"}' WHERE name = 'GitHub Repos';

COMMIT;
