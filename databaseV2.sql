DROP SCHEMA IF EXISTS Xp_Database;

CREATE DATABASE IF NOT EXISTS Xp_Database;

USE Xp_Database;

CREATE TABLE Clientes
(
	cod_cliente INT NOT NULL PRIMARY KEY,
    senha VARCHAR(50) NULL
);

CREATE TABLE Ativos
(
	cod_ativo INT NOT NULL PRIMARY KEY,
	qtd_ativo INT NOT NULL,
    valor decimal (10,2) NOT NULL,
    qtd_investida INT NULL
);

CREATE TABLE Compras (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    cod_cliente INT NOT NULL,
    cod_ativo INT NOT NULL,
    qtd_ativo INT NOT NULL,
    FOREIGN KEY (cod_cliente)
        REFERENCES Clientes (cod_cliente),
    FOREIGN KEY (cod_ativo)
        REFERENCES Ativos (cod_ativo)
);

CREATE TABLE Vendas (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    cod_cliente INT NOT NULL,
    cod_ativo INT NOT NULL,
    qtd_ativo INT NOT NULL,
    FOREIGN KEY (cod_cliente)
        REFERENCES Clientes (cod_cliente),
    FOREIGN KEY (cod_ativo)
        REFERENCES Ativos (cod_ativo)
);

CREATE TABLE Carteiras (
    cod_cliente INT NOT NULL PRIMARY KEY,
    FOREIGN KEY (cod_cliente)
        REFERENCES Clientes (cod_cliente),
    saldo DECIMAL (10,2) NOT NULL DEFAULT 0.00
);

CREATE TABLE Portfolio (
    cod_cliente INT NOT NULL PRIMARY KEY,
    FOREIGN KEY (cod_cliente)
        REFERENCES Clientes (cod_cliente)
);

CREATE TABLE portfolio_ativos (
    portfolio_id INT NOT NULL,
    cod_ativo INT NOT NULL,
    CONSTRAINT PRIMARY KEY (portfolio_id , cod_ativo),
    FOREIGN KEY (portfolio_id)
        REFERENCES Portfolio (cod_cliente),
    FOREIGN KEY (cod_ativo)
        REFERENCES Ativos (cod_ativo),
	qtd_ativo INT NOT NULL,
    valor_ativo decimal (10,2) NOT NULL
);

/*INSERT INTO Clientes (cod_cliente)
VALUES(1),(3),(5),(7);*/

INSERT INTO Ativos (cod_ativo,qtd_ativo,valor)
VALUES(11,100,10),(22,100,10),(33,100,10);

/*INSERT INTO Carteiras (cod_cliente,saldo)
VALUES(1,5000),(2,5000),(3,5000),(4,5000);*/

/*INSERT INTO Portfolio (cod_cliente)
VALUES(1),(3),(5),(7);*/

