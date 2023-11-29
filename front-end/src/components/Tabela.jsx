import React from "react";
import { Space, Table, Tag } from "antd";
const { Column, ColumnGroup } = Table;
const data = [
  {
    "id": 1,
    "nome": "Francisca Julia da Costa",
    "cpf": "457.696.936-65",
    "rg": "47.360.897-2",
    "data_nasc": "23/03/1944",
    "sexo": "Feminino"
  },
  {
    "id": 2,
    "nome": "Noah Felipe Silva",
    "cpf": "956.531.431-70",
    "rg": "40.974.782-8",
    "data_nasc": "11/07/1964",
    "sexo": "Masculino"
  },
  {
    "id": 3,
    "nome": "Alícia Rosângela Melo",
    "cpf": "066.291.353-18",
    "rg": "36.214.141-1",
    "data_nasc": "18/02/1978",
    "sexo": "Feminino"
  },
  {
    "id": 4,
    "nome": "Cristiane Renata Ana das Neves",
    "cpf": "946.074.401-08",
    "rg": "32.301.736-8",
    "data_nasc": "10/05/1966",
    "sexo": "Feminino"
  },
  {
    "id": 5,
    "nome": "Priscila Benedita Vanessa Ferreira",
    "cpf": "888.282.394-68",
    "rg": "44.524.670-4",
    "data_nasc": "15/11/1966",
    "sexo": "Feminino"
  },
  {
    "id": 6,
    "nome": "Bianca Carolina Nunes",
    "cpf": "484.323.140-13",
    "rg": "44.466.563-8",
    "data_nasc": "16/03/1948",
    "sexo": "Feminino"
  },
];
const Tabela = () => (
  <Table dataSource={data}>
    <ColumnGroup title="Dados cadastrados">
      <Column title="Nome" dataIndex="nome" key="nome" />
      <Column title="Nome" dataIndex="nome" key="nome" />
      <Column title="CPF" dataIndex="cpf" key="cpf" />
      <Column title="RG" dataIndex="rg" key="rg" />
      <Column
        title="Data de nascimento"
        dataIndex="dataNascimento"
        key="dataNascimento"
      />
      <Column title="Gênero" dataIndex="sexo" key="sexo" />
      <Column
        title="Ações"
        key="acoes"
        render={(_, record) => (
          <Space size="middle">
            <a>Editar </a>
            <a>Deletar</a>
          </Space>
        )}
      />
    </ColumnGroup>
  </Table>
);
export default Tabela;
