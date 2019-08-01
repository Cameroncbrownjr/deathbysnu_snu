DROP DATABASE IF EXISTS basic_products_DB;

CREATE DATABASE basic_products_DB;

USE basic_products_DB;

CREATE TABLE products
(
    id INTEGER(7) NOT NULL
    AUTO_INCREMENT,
    name VARCHAR
    (60) NOT NULL,
    price DECIMAL
    (10,2) UNSIGNED NOT NULL,
    quantity INTEGER
    (7) NOT NULL,
    PRIMARY KEY
    (id)
);

    INSERT INTO products
        (name, price, quantity)
    VALUES
        ("Empty liquor bottle", 0.05, 100),
        ("Slightly used underwear", 5.00, 7),
        ("Cat poop nuggz", 0.05, 10000),
        ("Wu-tang Sword", 2000000, 1),
        ("Bubbles Deeecent Shopping carts", 50, 30),
        ("Alfredo's Pizza", 4.21, 15),
        ("Pizza by Alfredo", 10, 5),
        ("Charlie's Rat Smasher", 1000, 1),
        ("Fat Cats", 100000000, 2),
        ("Motivation for this project", 420, 0);