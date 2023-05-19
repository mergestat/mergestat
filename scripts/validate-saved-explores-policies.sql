-- SQL statements for validating saved_explores policies
-- Run the following statements in order to step through various test scenarios for now.

-- AS a mergestat_role_admin level or above
-- create users with mergestat_role_user and mergestat_role_admin level.
SELECT mergestat.user_mgmt_add_user('test', '1234', 'USER');
SELECT mergestat.user_mgmt_add_user('adminTest1', '1234', 'ADMIN');

-- Insert values in the table mergestat.saved_explores.
INSERT INTO mergestat.saved_explores (created_by) VALUES('test2');

INSERT INTO mergestat.saved_explores (created_by) VALUES('test3');

            ------- Test mergestat_role_user -------

    -- Log into your newly created 'test' user --

-- Insert row with created_by equal to your current_user name.
INSERT INTO mergestat.saved_explores (created_by) VALUES('test')

-- You should be able to see all records from all users.
SELECT * FROM mergestat.saved_explores;

-- You wont be able to INSERT, UPDATE or DELETE records that are not
-- matching your current_user name neither change the column created_by of a
-- matching record to a different one.
INSERT INTO mergestat.saved_explores (created_by) VALUES('test4');

UPDATE mergestat.saved_explores SET metadata = '{}' WHERE created_by = 'test2';

DELETE FROM mergestat.saved_explores WHERE created_by = 'test3';

UPDATE mergestat.saved_explores SET created_by = 'test2' WHERE created_by = 'test';

-- You should be able to have full ACCESS to records matching your current_user.
UPDATE mergestat.saved_explores SET metadata = '{}' WHERE created_by = 'test';

DELETE FROM mergestat.saved_explores WHERE created_by = 'test';


            ------- Test mergestat_role_admin -------

    -- Log into your newly created 'adminTest1' user  --

-- You should be able to have full access over the table
-- mergestat.saved_explores.
--Insert record for self
INSERT INTO mergestat.saved_explores (created_by) VALUES('adminTest1');

--Insert record for other use even if they don't exist
INSERT INTO mergestat.saved_explores (created_by) VALUES('adminTest2');

--view all records
SELECT * FROM mergestat.saved_explores;

--update self
UPDATE mergestat.saved_explores SET metadata = '{}' WHERE created_by = 'adminTest1';

--delete self
DELETE FROM mergestat.saved_explores WHERE created_by = 'adminTest1';

--update other user
UPDATE mergestat.saved_explores SET created_by = 'adminTest2' WHERE created_by = 'adminTest2';

--delete other user
DELETE FROM mergestat.saved_explores WHERE created_by = 'adminTest2';
