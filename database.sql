DROP SCHEMA IF EXISTS Xp_Database;

CREATE DATABASE IF NOT EXISTS Xp_Database;

USE Xp_Database;

CREATE TABLE Clientes
(
	id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
	cod_cliente INT NOT NULL UNIQUE
);

CREATE TABLE Ativos
(
	id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
	cod_ativo INT NOT NULL unique,
	qtd_ativo INT NOT NULL,
    valor decimal (10,2) NOT NULL
);

CREATE TABLE Compras (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    id_cliente INT NOT NULL,
    id_ativo INT NOT NULL,
    qtd_ativo INT NOT NULL,
    FOREIGN KEY (id_cliente)
        REFERENCES Clientes (id),
    FOREIGN KEY (id_ativo)
        REFERENCES Ativos (id)
);

CREATE TABLE Vendas (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    id_cliente INT NOT NULL,
    id_ativo INT NOT NULL,
    qtd_ativo INT NOT NULL,
    FOREIGN KEY (id_cliente)
        REFERENCES Clientes (id),
    FOREIGN KEY (id_ativo)
        REFERENCES Ativos (id)
);

CREATE TABLE Carteiras (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    cod_cliente INT NOT NULL,
    FOREIGN KEY (cod_cliente)
        REFERENCES Clientes (id),
    saldo DECIMAL (10,2) NOT NULL
);

CREATE TABLE Portfolio (
    portfolio_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    cod_cliente INT NOT NULL,
    FOREIGN KEY (cod_cliente)
        REFERENCES Clientes (cod_cliente)
);

CREATE TABLE portfolio_ativos (
    portfolio_id INT NOT NULL,
    ativo_id INT NOT NULL,
    CONSTRAINT PRIMARY KEY (portfolio_id , ativo_id),
    FOREIGN KEY (portfolio_id)
        REFERENCES Portfolio (portfolio_id),
    FOREIGN KEY (ativo_id)
        REFERENCES Ativos (id),
	qtd_ativo INT NOT NULL,
    valor_ativo decimal (10,2) NOT NULL
);

INSERT INTO Clientes (cod_cliente)
VALUES(1),(3),(5),(7);

INSERT INTO Ativos (cod_ativo,qtd_ativo,valor)
VALUES(1,500,50),(3,500,50),(10,500,50);

INSERT INTO Carteiras (cod_cliente,saldo)
VALUES(1,5000),(2,5000),(3,5000),(4,5000);

INSERT INTO Portfolio (cod_cliente)
VALUES(1),(3),(5),(7);