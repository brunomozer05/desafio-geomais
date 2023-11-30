import React, { useEffect, useState } from "react";
import { Table, Space, Modal, Input, Select } from "antd";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const { Column, ColumnGroup } = Table;
const { Option } = Select;

const Tabela = () => {
  const [data, setData] = useState([]);
  const [deletingUserId, setDeletingUserId] = useState(null);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:8080");
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleDelete = async (userId) => {
    try {
      const response = await fetch(`http://localhost:8080/${userId}`, {
        method: "DELETE",
      });

      if (response.ok) {
        const newData = data.filter((item) => item.id !== userId);
        setData(newData);
        toast.success("Usuário excluído com sucesso!");
      } else {
        console.error("Erro ao excluir usuário");
        toast.error("Erro ao excluir usuário");
      }
    } catch (error) {
      console.error("Erro ao excluir usuário:", error);
      toast.error("Erro ao excluir usuário");
    } finally {
      setDeletingUserId(null);
    }
  };

  const showDeleteConfirm = (userId) => {
    Modal.confirm({
      title: "Confirmação",
      content: "Tem certeza de que deseja excluir este usuário?",
      okText: "Sim",
      cancelText: "Cancelar",
      onOk: () => handleDelete(userId),
      onCancel: () => setDeletingUserId(null),
    });
  };

  return (
    <div>
      <ToastContainer />
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
          <Column
            title="Ação"
            key="action"
            render={(_, record) => (
              <Space size="middle">
                <a>Editar</a>
                <a onClick={() => showDeleteConfirm(record.id)}>Excluir</a>
              </Space>
            )}
          />
        </ColumnGroup>
      </Table>
    </div>
  );
};

export default Tabela;
