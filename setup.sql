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
	SSN VARCHAR(9) NOT NULL,
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

ALTER TABLE stores 
	ADD CONSTRAINT FK_Stores_Warehouse_Id
	FOREIGN KEY (Warehouse_Id) REFERENCES warehouse (Id);

ALTER TABLE stores 
	ADD CONSTRAINT FK_Stores_Product_Id
	FOREIGN KEY (Product_Id) REFERENCES product (Id);

ALTER TABLE employee 
	ADD CONSTRAINT FK_Employee_Employer
	FOREIGN KEY (Employer) REFERENCES store (Id);

--------------------------------------------------------------------------------
-- Other constraints
--------------------------------------------------------------------------------
ALTER TABLE employee 
	ADD CONSTRAINT FK_Employee_Salary_Min_Value
	CHECK (Salary >= 16000);

ALTER TABLE sells 
	ADD CONSTRAINT FK_Sells_NumInStock_Min_Value
	CHECK (NumInStock >= 0);

ALTER TABLE sells 
	ADD CONSTRAINT FK_Sells_Price_Min_Value
	CHECK (Price > 0);

ALTER TABLE stores 
	ADD CONSTRAINT FK_Stores_NumInStock_Min_Value
	CHECK (NumInStock >= 0);

--------------------------------------------------------------------------------
-- Test data
--------------------------------------------------------------------------------
INSERT INTO warehouse VALUES (0, '123 Red Road');
INSERT INTO warehouse VALUES (1, '234 Orange Road');
INSERT INTO warehouse VALUES (2, '345 Yellow Lane');
INSERT INTO warehouse VALUES (3, '456 Green Road');
INSERT INTO warehouse VALUES (4, '972 Blue Street');
INSERT INTO warehouse VALUES (5, '865 Purple Avenue');

INSERT INTO vendor VALUES (0, 'Apple');
INSERT INTO vendor VALUES (1, 'Microsoft');
INSERT INTO vendor VALUES (2, 'Amazon');
INSERT INTO vendor VALUES (3, 'Google');

INSERT INTO employee VALUES (0, '111222333', 'John', 'Doe', 45000, NULL);
INSERT INTO employee VALUES (1, '111222444', 'Jane', 'Doe', 70000, NULL);
INSERT INTO employee VALUES (2, '111222555', 'Bob', 'Builder', 120000, NULL);
INSERT INTO employee VALUES (3, '111222666', 'Fred', 'Durst', 32000, NULL);
INSERT INTO employee VALUES (4, '111222777', 'Barney', 'Dinosaur', 123456, NULL);
-- INSERT INTO employee VALUES (5, '111222888', 'Snoopy', 'Woodstock', 15000, NULL);

INSERT INTO product VALUES (0, 'iPod', 'iPod touch is the perfect way to carry your music collection in your pocket.', 199.95, 0);
INSERT INTO product VALUES (1, 'Mac', 'For professionals ready to push their creativity, these industry-leading apps offer maximum control over editing, processing, and output of music and film.', 1199.0, 0);
INSERT INTO product VALUES (2, 'iPhone', 'Explore iPhone, the worlds most powerful personal device.', 699.00, 0);
INSERT INTO product VALUES (3, 'Zune', 'Listen to your favorite FM radio stations and click to tag the songs you like for later purchase.', 949.82, 1);
INSERT INTO product VALUES (4, 'Office', 'Collaborate for free with online versions of Microsoft Word, PowerPoint, Excel, and OneNote.', 79.99, 1);
INSERT INTO product VALUES (5, 'Echo', 'Smart speaker with Alexa', 69.99, 2);
INSERT INTO product VALUES (6, 'Kindle', 'All-new design is thinner and lighter, and now available in your choice of black or white.', 79.99, 2);
INSERT INTO product VALUES (7, 'Pixel 3', 'A phone worthy of any wish list.', 799.00, 3);

INSERT INTO store VALUES (0, '789 Gumdrop Lane', 4, 3);
INSERT INTO store VALUES (1, '654 Candycane Drive', 2, 5);
INSERT INTO store VALUES (2, '321 Lollipop Boulvard', 3, 1);
INSERT INTO store VALUES (3, '867 Peppermint Road', 0, 2);
INSERT INTO store VALUES (4, '530 Taffy Street', 1, 5);

INSERT INTO sells VALUES (0, 0, 20, 201.99);
INSERT INTO sells VALUES (0, 2, 30, 699.00);
INSERT INTO sells VALUES (0, 3, 40, 1000.00);
INSERT INTO sells VALUES (0, 7, 10, 804.95);
INSERT INTO sells VALUES (1, 3, 7, 1009.85);
INSERT INTO sells VALUES (1, 4, 50, 90.00);
INSERT INTO sells VALUES (3, 6, 50, 80.00);
INSERT INTO sells VALUES (3, 7, 50, 800.00);
INSERT INTO sells VALUES (3, 5, 50, 70.00);
INSERT INTO sells VALUES (4, 0, 50, 200.00);
INSERT INTO sells VALUES (4, 3, 50, 1000.00);
-- INSERT INTO sells VALUES (4, 7, -1, 1000.00);
-- INSERT INTO sells VALUES (4, 7, 10, 0.00);

INSERT INTO stores VALUES (0, 0, 100);
INSERT INTO stores VALUES (0, 1, 800);
INSERT INTO stores VALUES (0, 2, 120);
INSERT INTO stores VALUES (0, 3, 140);
INSERT INTO stores VALUES (0, 4, 300);
INSERT INTO stores VALUES (0, 5, 100);
INSERT INTO stores VALUES (0, 6, 200);
INSERT INTO stores VALUES (1, 0, 500);
INSERT INTO stores VALUES (1, 1, 500);
INSERT INTO stores VALUES (1, 2, 520);
INSERT INTO stores VALUES (1, 3, 540);
INSERT INTO stores VALUES (1, 4, 500);
INSERT INTO stores VALUES (1, 5, 501);
INSERT INTO stores VALUES (1, 6, 502);
INSERT INTO stores VALUES (2, 0, 0);
INSERT INTO stores VALUES (2, 1, 0);
INSERT INTO stores VALUES (2, 2, 20);
INSERT INTO stores VALUES (2, 3, 40);
INSERT INTO stores VALUES (2, 4, 0);
INSERT INTO stores VALUES (2, 5, 1);
INSERT INTO stores VALUES (2, 6, 2);
INSERT INTO stores VALUES (3, 0, 42);
INSERT INTO stores VALUES (3, 1, 90);
INSERT INTO stores VALUES (3, 2, 170);
INSERT INTO stores VALUES (3, 6, 20);
INSERT INTO stores VALUES (4, 2, 710);
INSERT INTO stores VALUES (4, 3, 28);
INSERT INTO stores VALUES (4, 5, 79);
INSERT INTO stores VALUES (5, 0, 28);
INSERT INTO stores VALUES (5, 1, 92);
INSERT INTO stores VALUES (5, 2, 82);
INSERT INTO stores VALUES (5, 3, 24);
INSERT INTO stores VALUES (5, 4, 36);
INSERT INTO stores VALUES (5, 5, 42);
INSERT INTO stores VALUES (5, 6, 63);
-- INSERT INTO stores VALUES (4, 7, -1);
