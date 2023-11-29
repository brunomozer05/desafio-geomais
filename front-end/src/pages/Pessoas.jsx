import React from "react";
import { Breadcrumb } from "antd";
import Tabela from "../components/Tabela";

const Pessoas = () => {
  return (
    <>
      <Breadcrumb
        style={{
          display: "flex",
          margin: "4px 0",
          textAlign: "center",
        }}
      >
        <h1>Tabela de pessoas</h1>
      </Breadcrumb>
        <Tabela />
    </>
  );
};
export default Pessoas;
