-- SQL migration to add a type field to mergestat.vendors
BEGIN;

CREATE TABLE mergestat.vendor_types (
    name TEXT PRIMARY KEY, -- vendor type name / enumeration
    display_name TEXT NOT NULL, -- user friendly display name
    description TEXT -- a user friendly description
);

-- seed with the default git vendor type
INSERT INTO mergestat.vendor_types (name, display_name, description)
VALUES ('git', 'Git SCM Vendor', 'A vendor that provides Git-based source control management services');

-- default to git to migrate and remove later
ALTER TABLE mergestat.vendors ADD COLUMN type TEXT NOT NULL DEFAULT 'git';
ALTER TABLE mergestat.vendors ALTER COLUMN type DROP DEFAULT;

ALTER TABLE mergestat.vendors
ADD CONSTRAINT FK_vendors_type FOREIGN KEY (type) REFERENCES mergestat.vendor_types (name);

COMMIT;
