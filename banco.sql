CREATE DATABASE cacaushow;
USE cacaushow;
CREATE TABLE IF NOT EXISTS chocolates(
	id BIGINT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(50),
    descricao VARCHAR(50),
    preco DECIMAL(10,2),
    imagem VARCHAR(300)
);
INSERT INTO chocolates VALUES (1,'LaCreme Barra','Queridinho da Casa',20.00,'SEM IMAGEM');
INSERT INTO chocolates VALUES (2,'MonteBello Bombom','Mais Vendido',16.00,'SEM IMAGEM');
INSERT INTO chocolates VALUES (3,'Fondue','Cremoso e Bom',22.00,'SEM IMAGEM');

USE cacaushow;
CREATE TABLE IF NOT EXISTS cliente(
    clienteId BIGINT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(50),
    cpf VARCHAR(50)
);
INSERT INTO cliente VALUES (11,'Ana Clara','123.456.789-10');
INSERT INTO cliente VALUES (22,'Gabriela','235.487.662-11');
INSERT INTO cliente VALUES (33,'Ryan','328.779.654-20');

USE cacaushow;
CREATE TABLE IF NOT EXISTS pagamento(
    idpagamento BIGINT PRIMARY KEY AUTO_INCREMENT,
    formapag VARCHAR(50),
    descricao VARCHAR(50),
    valor DECIMAL(10,2)
);
INSERT INTO pagamento VALUES (111,'Cartão Débito','LaCreme Barra',20.00);
INSERT INTO pagamento VALUES (222,'Dinheiro','MonteBello Bombom',16.00);
INSERT INTO pagamento VALUES (333,'Cartão de Crédito','Fondue',22.00);

USE cacaushow;
CREATE TABLE IF NOT EXISTS estoque(
    itemId BIGINT PRIMARY KEY AUTO_INCREMENT,
    nomeProduto VARCHAR(50),
    quantidade VARCHAR(50),
    localizacao VARCHAR(50)
);
INSERT INTO estoque VALUES (1111,'LaCreme Barra','100','armazem 2');
INSERT INTO estoque VALUES (2222,'MonteBello Bombom','150','armazem 5');
INSERT INTO estoque VALUES (3333,'Fondue','200','armazem 3');

USE cacaushow;
CREATE TABLE IF NOT EXISTS promocoes(
    idpromocao BIGINT PRIMARY KEY AUTO_INCREMENT,
    titulo VARCHAR(50),
    descricao VARCHAR(50),
    validade DATE,
    cupom VARCHAR(10)
);
INSERT INTO promocoes VALUES (11111,'Dia dos namorados na cacau','Venha comprar o presente do seu benzinho na cacau','2025-06-12','CACAULOVE');
INSERT INTO promocoes VALUES (22222,'A cacau no seu natal','Um natal ainda mais doce na cacau','2025-12-26','CHOCOSHOW');
INSERT INTO promocoes VALUES (33333,'Pascoa show','O presente perfeito para sua pascoa','2025-04-20','COELINHO');


