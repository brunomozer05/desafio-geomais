import React, { useEffect, useState } from "react";
import { Table } from "antd";

const { Column, ColumnGroup } = Table;

const Tabela = () => {
  const [data, setData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:8080/pessoas");
      const result = await response.json();
      setData(result);
    };

    fetchData();
  
  },[]);

  return (
    <Table dataSource={data}>
      <ColumnGroup title="Dados cadastrados">
        <Column title="Nome" dataIndex="nome" key="nome" />
        <Column title="CPF" dataIndex="cpf" key="cpf" />
        <Column title="RG" dataIndex="rg" key="rg" />
        <Column
          title="Data de nascimento"
          dataIndex="data_nasc"
          key="data_nasc"
        />
        <Column title="Gênero" dataIndex="sexo" key="sexo" />
      </ColumnGroup>
    </Table>
  );
};

export default Tabela;
