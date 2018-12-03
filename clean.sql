-- Disable constraints
EXEC sp_msforeachtable "ALTER TABLE ? NOCHECK CONSTRAINT ALL"
GO

-- The above doesnt work for some FKs so we have to do this manually.
ALTER TABLE store DROP CONSTRAINT FK_Store_Managed_By;
ALTER TABLE store DROP CONSTRAINT FK_Store_Supplier;
ALTER TABLE sells DROP CONSTRAINT FK_Sells_Store_Id;
ALTER TABLE sells DROP CONSTRAINT FK_Sells_Product_Id;
ALTER TABLE product DROP CONSTRAINT FK_Product_Vendor_Id;
ALTER TABLE Stores DROP CONSTRAINT FK_Stores_Warehouse_Id;
ALTER TABLE Stores DROP CONSTRAINT FK_Stores_Product_Id;
ALTER TABLE Employee DROP CONSTRAINT FK_Employee_Employer;
GO

DROP TABLE store;
DROP TABLE warehouse;
DROP TABLE vendor;
DROP TABLE employee;
DROP TABLE stores;
DROP TABLE sells;
DROP TABLE product;
GO

-- Enable constraints
EXEC sp_msforeachtable "ALTER TABLE ? WITH CHECK CHECK CONSTRAINT ALL"
GO