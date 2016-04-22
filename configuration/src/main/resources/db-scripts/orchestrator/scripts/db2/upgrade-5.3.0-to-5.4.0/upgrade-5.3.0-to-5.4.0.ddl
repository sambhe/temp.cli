alter table TB_PUBLISHING_JOBS
    add TARGET_PORTAL_SERVER_ID bigint;

alter table TB_ITEM_REFERENCES
    add DTYPE nvarchar(31);

alter table TB_ITEM_REFERENCES
    add RESOLVING_STRATEGY nvarchar(255);

REORG table TB_PUBLISHING_JOBS;
REORG table TB_ITEM_REFERENCES;

update TB_ITEM_REFERENCES
    set DTYPE = 'S'
    where PUBLISH_REQUEST_ID is null;

update TB_ITEM_REFERENCES
    set DTYPE = 'I'
    where PUBLISH_REQUEST_ID is not null;

update TB_ITEM_REFERENCES
    set RESOLVING_STRATEGY = 'WITH_LINKED_ITEMS'
    where PUBLISH_REQUEST_ID is null;

alter table TB_ITEM_REFERENCES
    alter column DTYPE set not null;

REORG table TB_ITEM_REFERENCES;
