DROP DATABASE IF EXISTS basic_products_DB;

CREATE DATABASE basic_products_DB;

USE basic_products_DB;

CREATE TABLE products(
    id INTEGER(7) NOT NULL AUTO_INCREMENT,
    name VARCHAR(60) NOT NULL,
    price DECIMAL(10,2) UNSIGNED NOT NULL,
    quantity INTEGER(7) NOT NULL,
    PRIMARY KEY (id)
);

INSERT INTO products (name, price, quantity)
VALUES ("empty beer bottle", 0.05, 1),
    ("used guitar", 50.00, 1),
    ("rotten orange", 0.01, 1);