-- SQL statements for validating saved_queries policies
-- Run the following statements in order to step through various test scenarios for now.

            ------- Test mergestat_role_user -------

-- AS a mergestat_role_admin level or above
-- create user with mergestat_role_user level.
SELECT mergestat.user_mgmt_add_user('test', '1234', 'USER');

-- Insert values in the table public.saved_queries.
INSERT INTO public.saved_queries (created_by) VALUES('test2');

INSERT INTO public.saved_queries (created_by) VALUES('test3');

    -- Log into your newly created user --

-- Insert row with created_by equal to your current_user name.
INSERT INTO public.saved_queries (created_by) VALUES('test')

-- You should be able to only select records that are not matching your 
-- current_user name.
SELECT * FROM public.saved_queries;

-- You wont be able to INSERT, UPDATE or DELETE records that are not
-- matching your current_user name neither change the column created_by of a
-- matching record to a different one.
INSERT INTO public.saved_queries (created_by) VALUES('test4');

UPDATE public.saved_queries SET sql = 'SELECT * FROM public.saved_queries' WHERE created_by = 'test2';

DELETE FROM public.saved_queries WHERE created_by = 'test3';

UPDATE public.saved_queries SET created_by = 'ramiro' WHERE created_by = 'test';

-- You should be able to have full ACCESS to records matching your current_user.
INSERT INTO public.saved_queries (created_by) VALUES('test');

UPDATE public.saved_queries SET sql = 'SELECT * FROM public.saved_queries' WHERE created_by = 'test';

DELETE FROM public.saved_queries WHERE created_by = 'test';


            ------- Test mergestat_role_admin -------

    -- Log into a mergestat_role_admin level user  --

-- You should be able to have full access over the table
-- public.saved_queries.
INSERT INTO public.saved_queries (created_by) VALUES('adminTest1');

INSERT INTO public.saved_queries (created_by) VALUES('adminTest2');

SELECT * FROM public.saved_queries;

UPDATE public.saved_queries SET sql = 'SELECT * FROM public.saved_queries' WHERE created_by = 'adminTest1';

DELETE FROM public.saved_queries WHERE created_by = 'adminTest1';

UPDATE public.saved_queries SET created_by = 'ramiro' WHERE created_by = 'adminTest2';
