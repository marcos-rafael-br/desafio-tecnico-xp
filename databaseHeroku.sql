DROP SCHEMA IF EXISTS `heroku_fd745d2f4a19b15`;

CREATE DATABASE IF NOT EXISTS `heroku_fd745d2f4a19b15`;

USE `heroku_fd745d2f4a19b15`;

CREATE TABLE Clientes
(
	cod_cliente INT NOT NULL PRIMARY KEY,
    nome VARCHAR(100) NULL,
    senha VARCHAR(50) NULL
);

CREATE TABLE Ativos
(
	cod_ativo INT NOT NULL PRIMARY KEY,
    nome_ativo VARCHAR(100) NULL,
	qtd_ativo INT NOT NULL,
    valor decimal (10,2) NOT NULL,
    qtd_inicial INT NULL
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

INSERT INTO Clientes (cod_cliente, nome,senha)
VALUES(1, "Luiz Barsi Filho", 123 ),(2,"Lírio Parisotto", 123),(3,"Luiz Alves Paes de Barros", 123),(4,"Victor Adler", 123),(5,"Guilherme Affonso Ferreira", 123);

INSERT INTO Ativos (cod_ativo,nome_ativo,qtd_ativo,valor,qtd_inicial)
VALUES(111,"VALE3",100,10.32,100),(222,"ITUB4",100,10,100),(333,"ABEV3",100,10,100),(444,"PETR4",100,10,100);

INSERT INTO Carteiras (cod_cliente,saldo)
VALUES(1,1000),(2,1000),(3,1000),(4,1000),(5,1000);

INSERT INTO Portfolio (cod_cliente)
VALUES(1),(2),(3),(4),(5);