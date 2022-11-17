-- SQL statements for validating user management behaviors
-- Run the following statements in order to step through various test scenarios for now
-- TODO(patrickdevivo) in general/in the future we should have this automated in some way, but for now
-- hopefully this is sufficient to get baseline confidence in our user functions.

-- OK List all users and their roles
SELECT * FROM mergestat.user_mgmt_pg_users;

-- OK Create a new user with no role
SELECT mergestat.user_mgmt_add_user('username', 'pass', 'USER');

-- ERR Create a new user with existing username
SELECT mergestat.user_mgmt_add_user('username', 'pass', 'USER');

-- OK Update an existing user password
SELECT mergestat.user_mgmt_update_user_password('username', 'test');

-- ERR Update the password for a user that does not exist
SELECT mergestat.user_mgmt_update_user_password('username123', 'test');

-- OK set curent role to the new user
SET ROLE username;

-- OK add a single new repo
INSERT INTO "public"."repos"("repo") VALUES('https://github.com/mergestat/mergestat');

-- OK update a single repo
UPDATE "public"."repos" SET "tags" = '["test"]' WHERE "repo" = 'https://github.com/mergestat/mergestat';

-- OK list all repos
SELECT * FROM repos;

-- OK remove the repo
DELETE FROM "public"."repos" WHERE "repo"='https://github.com/mergestat/mergestat';

-- ERR try to create a new user, as a user
SELECT mergestat.user_mgmt_add_user('username10', 'pass', 'USER');

-- ERR try to set current user as an admin, as a user
SELECT mergestat.user_mgmt_set_user_role('username', 'ADMIN');

-- OK reset role
RESET ROLE;

-- OK set user role to READ_ONLY
SELECT mergestat.user_mgmt_set_user_role('username', 'READ_ONLY');

-- OK set role to back to the user
SET ROLE username;

-- ERR add a single new repo
INSERT INTO "public"."repos"("repo") VALUES('https://github.com/mergestat/mergestat');

-- OK select repos
SELECT * FROM repos;

-- ERR try to create a new user
SELECT mergestat.user_mgmt_add_user('username10', 'pass', 'USER');

-- ERR try to set current user as an admin
SELECT mergestat.user_mgmt_set_user_role('username', 'ADMIN');

-- OK reset role
RESET ROLE;

-- ERR try to set current user as an admin
SELECT mergestat.user_mgmt_set_user_role('username', 'ADMIN');

-- OK set role to back to the user
SET ROLE username;

-- OK Create a new user with no role
SELECT mergestat.user_mgmt_add_user('username20', 'pass', 'USER');

-- OK List all users and their roles
SELECT * FROM mergestat.user_mgmt_pg_users;

-- OK Remove a user
-- TODO(patrickdevivo) this is failing, even for admin users
-- See here: https://stackoverflow.com/questions/56310870/permission-denied-to-drop-objects
-- We might need a different approach when removing a user - maybe ADMINs won't be allowed, but super users can?
SELECT mergestat.user_mgmt_remove_user('username20');
