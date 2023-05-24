-- SQL statements for validating saved_queries policies
-- Run the following statements in order to step through various test scenarios for now.

-- AS a mergestat_role_admin level or above
-- create users with mergestat_role_user and mergestat_role_admin level.
SELECT mergestat.user_mgmt_add_user('test', '1234', 'USER');
SELECT mergestat.user_mgmt_add_user('adminTest1', '1234', 'ADMIN');

-- Insert values in the table mergestat.saved_queries.
INSERT INTO mergestat.saved_queries (created_by) VALUES('test2');

INSERT INTO mergestat.saved_queries (created_by) VALUES('test3');

            ------- Test mergestat_role_user -------

    -- Log into your newly created 'test' user --

-- Insert row with created_by equal to your current_user name.
INSERT INTO mergestat.saved_queries (created_by) VALUES('test')

-- You should be able to see all records from all users.
SELECT * FROM mergestat.saved_queries;

-- You wont be able to INSERT, UPDATE or DELETE records that are not
-- matching your current_user name neither change the column created_by of a
-- matching record to a different one.
INSERT INTO mergestat.saved_queries (created_by) VALUES('test4');

UPDATE mergestat.saved_queries SET sql = 'SELECT * FROM mergestat.saved_queries' WHERE created_by = 'test2';

DELETE FROM mergestat.saved_queries WHERE created_by = 'test3';

UPDATE mergestat.saved_queries SET created_by = 'ramiro' WHERE created_by = 'test';

-- You should be able to have full ACCESS to records matching your current_user.
INSERT INTO mergestat.saved_queries (created_by) VALUES('test');

UPDATE mergestat.saved_queries SET sql = 'SELECT * FROM mergestat.saved_queries' WHERE created_by = 'test';

DELETE FROM mergestat.saved_queries WHERE created_by = 'test';


            ------- Test mergestat_role_admin -------

    -- Log into your newly created 'adminTest1' user  --

-- You should be able to have full access over the table
-- mergestat.saved_queries.
INSERT INTO mergestat.saved_queries (created_by) VALUES('adminTest1');

INSERT INTO mergestat.saved_queries (created_by) VALUES('adminTest2');

SELECT * FROM mergestat.saved_queries;

UPDATE mergestat.saved_queries SET sql = 'SELECT * FROM mergestat.saved_queries' WHERE created_by = 'adminTest1';

DELETE FROM mergestat.saved_queries WHERE created_by = 'adminTest1';

UPDATE mergestat.saved_queries SET created_by = 'ramiro' WHERE created_by = 'adminTest2';
