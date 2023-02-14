-- SQL migration to add support for vendor and provider constructs
BEGIN;

-- Table mergestat.vendor contains a list of all third-party vendors that mergestat supports.
-- It is almost always read-only for users, and data can only be inserted in this table using
-- a migration.
CREATE TABLE mergestat.vendors (
    name TEXT PRIMARY KEY,      -- the enumerated name of the vendor; try to keep it lower-case
    display_name TEXT NOT NULL, -- the name shown on the user interface
    description TEXT            -- a brief description of the vendor
);


-- Table mergestat.providers contains a list of all registered providers that we know about.
-- Entries in this table can be either seeded by the system or provided by the user.
-- Values are usually seeded for popular cloud services (such as GitHub). User can provide
-- custom providers for any vendor. This is useful in case the user is using self-hosted versions
-- of the vendors (eg. self-hosted version of GitHub Enterprise).
CREATE TABLE mergestat.providers (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),              -- auto-generated unique identifier for this provider
    name TEXT NOT NULL,                                         -- user- / system- provided display name for the provider
    vendor TEXT NOT NULL,                                       -- the backing vendor implementation for this provider
    settings JSONB NOT NULL,                                    -- provider specific settings and configurations
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW(), -- time when this provider was added

    -- put a foreign key reference point to an entry in the vendors table
    CONSTRAINT FK_vendors_providers_vendor FOREIGN KEY (vendor) REFERENCES mergestat.vendors (name),

    -- provider's name must be unique in a system
    CONSTRAINT UQ_providers_name UNIQUE (name));


COMMIT;
