DROP DATABASE IF EXISTS bamazon_db;

CREATE DATABASE bamazon_db;

USE bamazon_db;

CREATE TABLE products (
	item_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
	product_name VARCHAR(50) NOT NULL,
    department_name VARCHAR(50) NOT NULL,
    price DECIMAL (8,2) NOT NULL,
    stock_quantity INTEGER(10)
);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ("toy", "toys", 12.33, 5);

SELECT product_name, price FROM bamazon_db.products;