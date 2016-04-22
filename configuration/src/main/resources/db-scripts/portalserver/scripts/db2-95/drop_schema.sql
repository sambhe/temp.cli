DROP TRIGGER ACL_CLASS_ID;
DROP TRIGGER ACL_ENTRY_ID;
DROP TRIGGER ACL_OBJECT_IDENTITY_ID;
DROP TRIGGER ACL_SID_ID;

DROP SEQUENCE ACL_CLASS_SEQ RESTRICT;
DROP SEQUENCE ACL_ENTRY_SEQ RESTRICT;
DROP SEQUENCE ACL_OBJECT_IDENTITY_SEQ RESTRICT;
DROP SEQUENCE ACL_SID_SEQ RESTRICT;

DROP TABLE ACL_ENTRY;
DROP TABLE ACL_OBJECT_IDENTITY;
DROP TABLE ACL_SID;
DROP TABLE ACL_CLASS;

DROP TABLE user_property_definition;
DROP TABLE property_definition;
DROP TABLE item_tags;
DROP TABLE tags;
DROP TABLE items;
DROP TABLE users_groups;
DROP TABLE users;
DROP TABLE groups;
DROP TABLE deleted_page_item;

DROP SEQUENCE hibernate_sequence;
