CREATE TABLE usuarios (
    id SERIAL PRIMARY KEY,
    nome TEXT,
    cpf TEXT,
    rg TEXT,
    data_nasc DATE,
    sexo TEXT,
    UNIQUE (cpf),
    UNIQUE (rg)
);

INSERT INTO usuarios (nome,cpf,rg,data_nasc,sexo) VALUES ('Francisca Julia da Costa','457.696.936-65','47.160.897-2','1998-12-07','Feminino');
INSERT INTO usuarios (nome,cpf,rg,data_nasc,sexo) VALUES ('Noah Felipe Silva','956.531.431-70','40.974.782-8','1973-11-07','Masculino');
INSERT INTO usuarios (nome,cpf,rg,data_nasc,sexo) VALUES ('Alícia Rosângela Melo','066.291.353-18','36.214.141-1','1961-01-07','Feminino');
INSERT INTO usuarios (nome,cpf,rg,data_nasc,sexo) VALUES ('Cristiane Renata Ana das Neves','946.074.401-08','32.301.736-8','1961-01-07','Feminino');
INSERT INTO usuarios (nome,cpf,rg,data_nasc,sexo) VALUES ('Francisca Julia da Costa','417.696.936-65','47.460.897-2','1998-12-07','Feminino');
INSERT INTO usuarios (nome,cpf,rg,data_nasc,sexo) VALUES ('Noah Felipe Silva','926.531.431-70','40.972.782-8','1973-11-07','Masculino');
INSERT INTO usuarios (nome,cpf,rg,data_nasc,sexo) VALUES ('Alícia Rosângela Melo','036.291.353-18','38.214.141-1','1961-01-07','Feminino');
INSERT INTO usuarios (nome,cpf,rg,data_nasc,sexo) VALUES ('Cristiane Renata Ana das Neves','966.074.401-08','02.301.736-8','1961-01-07','Feminino');