CREATE TABLE ex_products (
	id INT PRIMARY KEY,
	name VARCHAR(64) NOT NULL,
	msrp DECIMAL (7, 2),
	description VARCHAR(MAX),
);