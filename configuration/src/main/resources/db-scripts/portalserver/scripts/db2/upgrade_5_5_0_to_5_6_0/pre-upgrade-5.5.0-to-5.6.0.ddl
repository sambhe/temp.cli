ALTER TABLE items DROP COLUMN itemHandlerBeanName;
ALTER TABLE property_definition ALTER COLUMN internalValue SET DATA TYPE NVARCHAR (2000);
ALTER TABLE user_property_definition ALTER COLUMN internalValue SET DATA TYPE NVARCHAR (2000);

REORG TABLE items;

DROP VIEW NAME_VALUE_PAIRS;