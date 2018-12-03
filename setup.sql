--------------------------------------------------------------------------------
-- Create tables
--------------------------------------------------------------------------------
CREATE TABLE store (
	Id INT PRIMARY KEY,
	Address VARCHAR(255) NOT NULL,
	Managed_By INT NOT NULL,
	Supplier INT NOT NULL
);

CREATE TABLE warehouse (
	Id INT PRIMARY KEY,
	Address VARCHAR(255) NOT NULL
);

CREATE TABLE vendor (
	Id INT PRIMARY KEY,
	BrandName VARCHAR(32)
);

CREATE TABLE employee (
	Id INT PRIMARY KEY,
	SSN VARCHAR(9),
	FirstName VARCHAR(32) NOT NULL,
	LastName VARCHAR(32) NOT NULL,
	Salary INT NOT NULL,
	Employer INT
);

CREATE TABLE stores (
	Warehouse_Id INT NOT NULL,
	Product_Id INT NOT NULL,
	NumInStock INT NOT NULL,
	PRIMARY KEY (Warehouse_Id, Product_Id)
);

CREATE TABLE sells (
	Store_Id INT NOT NULL,
	Product_Id INT NOT NULL,
	NumInStock INT NOT NULL,
	Price DECIMAL(9,2) NOT NULL,
	PRIMARY KEY (Store_Id, Product_Id)
);

CREATE TABLE product (
	Id INT PRIMARY KEY,
	Name VARCHAR(255) NOT NULL,
	Description VARCHAR(MAX),
	MSRP DECIMAL(9,2),
	Vendor_Id INT NOT NULL
);


--------------------------------------------------------------------------------
-- Setup foreign keys
--------------------------------------------------------------------------------
ALTER TABLE store 
	ADD CONSTRAINT FK_Store_Managed_By
	FOREIGN KEY (Managed_By) REFERENCES employee (Id);

ALTER TABLE store 
	ADD CONSTRAINT FK_Store_Supplier
	FOREIGN KEY (Supplier) REFERENCES warehouse (Id);

ALTER TABLE sells 
	ADD CONSTRAINT FK_Sells_Store_Id
	FOREIGN KEY (Store_Id) REFERENCES store (Id);

ALTER TABLE sells 
	ADD CONSTRAINT FK_Sells_Product_Id
	FOREIGN KEY (Product_Id) REFERENCES product (Id);

ALTER TABLE product 
	ADD CONSTRAINT FK_Product_Vendor_Id
	FOREIGN KEY (Vendor_Id) REFERENCES vendor (Id);

ALTER TABLE Stores 
	ADD CONSTRAINT FK_Stores_Warehouse_Id
	FOREIGN KEY (Warehouse_Id) REFERENCES warehouse (Id);

ALTER TABLE Stores 
	ADD CONSTRAINT FK_Stores_Product_Id
	FOREIGN KEY (Product_Id) REFERENCES product (Id);

ALTER TABLE Employee 
	ADD CONSTRAINT FK_Employee_Employer
	FOREIGN KEY (Employer) REFERENCES store (Id);

--------------------------------------------------------------------------------
-- Other constraints
--------------------------------------------------------------------------------


--------------------------------------------------------------------------------
-- Test data
--------------------------------------------------------------------------------
INSERT INTO warehouse VALUES (0, '123 Red Road');
INSERT INTO warehouse VALUES (1, '234 Orange Road');
INSERT INTO warehouse VALUES (2, '345 Yellow Lane');
INSERT INTO warehouse VALUES (3, '456 Green Road');
INSERT INTO warehouse VALUES (4, '972 Blue Street');
INSERT INTO warehouse VALUES (5, '865 Purple Avenue');

INSERT INTO employee VALUES (0, '111222333', 'John', 'Doe', 45000, NULL);
INSERT INTO employee VALUES (1, '111222444', 'John', 'Doe', 45000, NULL);
INSERT INTO employee VALUES (2, '111222555', 'John', 'Doe', 45000, NULL);
INSERT INTO employee VALUES (3, '111222666', 'John', 'Doe', 45000, NULL);
INSERT INTO employee VALUES (4, '111222777', 'John', 'Doe', 45000, NULL);