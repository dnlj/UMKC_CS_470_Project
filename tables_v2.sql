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
	BrandName VARCHAR(255)
);

CREATE TABLE employee (
	Id INT PRIMARY KEY,
	SSN VARCHAR(9),
	FirstName VARCHAR(32),
	LastName VARCHAR(32),
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


ALTER TABLE store 
	ADD FOREIGN KEY (Managed_By) REFERENCES employee (Id);

ALTER TABLE store 
	ADD FOREIGN KEY (Supplier) REFERENCES warehouse (Id);

ALTER TABLE sells 
	ADD FOREIGN KEY (Store_Id) REFERENCES store (Id);

ALTER TABLE sells 
	ADD FOREIGN KEY (Product_Id) REFERENCES product (Id);

ALTER TABLE product 
	ADD FOREIGN KEY (Vendor_Id) REFERENCES vendor (Id);

ALTER TABLE Stores 
	ADD FOREIGN KEY (Warehouse_Id) REFERENCES warehouse (Id);

ALTER TABLE Stores 
	ADD FOREIGN KEY (Product_Id) REFERENCES product (Id);

ALTER TABLE Employee 
	ADD FOREIGN KEY (Employer) REFERENCES store (Id);
