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

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("notebook", "stationary", 3.49, 10);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("picture frame", "home goods", 4.80, 9);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("desk lamp", "home goods", 19.89, 7);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("pencil box", "stationary", 3.50, 8);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("set of 4 coasters", "home goods", 9.99, 7);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("external hard drive", "technology", 70.00, 5);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("HDMI cord", "technology", 17.70, 5);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("toy truck", "toys", 13.50, 7);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("rubber duck", "toys", 4.50, 7);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("set of 2 pillow cases", "home goods", 18.00, 8);

SELECT * FROM products;
