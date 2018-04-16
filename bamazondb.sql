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
VALUES ("notebook", "stationary", 3.49, 100);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("picture frame", "home goods", 4.80, 90);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("desk lamp", "home goods", 19.89, 70);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("pencil box", "stationary", 3.50, 80);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("set of 4 coasters", "home goods", 9.99, 70);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("external hard drive", "technology", 70.00, 50);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("HDMI cord", "technology", 17.70, 50);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("toy truck", "toys", 13.50, 70);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("rubber duck", "toys", 4.50, 70);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("set of 2 pillow cases", "home goods", 18.00, 80);

SELECT * FROM products;
