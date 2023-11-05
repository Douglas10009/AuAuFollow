CREATE DATABASE if not EXISTS auaufollow;

USE auaufollow 

CREATE TABLE
    IF NOT EXISTS clientes(
        id INT PRIMARY KEY AUTO_INCREMENT,
        nome VARCHAR(200) ,
        email VARCHAR(100),
        senha VARCHAR(45) NOT NULL
    );