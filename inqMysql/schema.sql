DROP DATABASE IF EXISTS basic_products_DB;

CREATE DATABASE basic_products_DB;

USE basic_products_DB;

CREATE TABLE products
(
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR (60) NOT NULL,
    price DECIMAL (10,2) NOT NULL,
    quantity INTEGER (7) NOT NULL,
    PRIMARY KEY (id)
);

    INSERT INTO products
        (name, price, quantity)
    VALUES
        ("Empty liquor bottle", 0.05, 100),
        ("Slightly used underwear", 5.00, 7),
        ("Cat poop nuggz", 0.05, 10000),
        ("Wu-tang Sword", 2000000.00, 1),
        ("Bubbles Deeecent Shopping carts", 50.00, 30),
        ("Alfredo's Pizza", 4.21, 15),
        ("Pizza by Alfredo", 15.00, 5),
        ("Charlie's Rat Smasher", 1000.00, 1),
        ("Fat Cats", 1000000.00, 2),
        ("Motivation for this project", 420.00, 0);