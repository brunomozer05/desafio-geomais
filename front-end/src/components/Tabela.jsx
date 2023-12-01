import React, { useEffect, useState } from "react";
import { Table, Space, Modal } from "antd";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import FormInputs from "./FormInputs";

const { Column, ColumnGroup } = Table;

const Tabela = () => {
  const [data, setData] = useState([]);
  const [formattedData, setFormattedData] = useState([]);
  const [deletingUserId, setDeletingUserId] = useState(null);
  const [isEditModalOpen, setEditModalOpen] = useState(false);
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:8080");
        const result = await response.json();
        setData(result);
        const formattedResult = result.map((item) => {
          return {
            ...item,
            data_nasc: formatarData(item.data_nasc),
          };
        });
        setFormattedData(formattedResult);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [isEditModalOpen]);
  const formatarData = (data) => {
    const dataObj = new Date(data);
    const dia = String(dataObj.getDate()).padStart(2, "0");
    const mes = String(dataObj.getMonth() + 1).padStart(2, "0");
    const ano = dataObj.getFullYear();
    return `${dia}/${mes}/${ano}`;
  };

  const handleDelete = async (userId) => {
    try {
      const response = await fetch(`http://localhost:8080/${userId}`, {
        method: "DELETE",
      });

      if (response.ok) {
        const newData = data.filter((item) => item.id !== userId);
        setData(newData);
        const formattedNewData = newData.map((item) => {
          return {
            ...item,
            data_nasc: formatarData(item.data_nasc),
          };
        });
        setFormattedData(formattedNewData);
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

  const handleModalClose = () => {
    setEditModalOpen(false);
    setEditingId(null);
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
      <Modal
        title="Editar Dados"
        visible={isEditModalOpen}
        onCancel={handleModalClose}
        footer={null}
      >
        <FormInputs editingId={editingId} onClose={handleModalClose} />
      </Modal>
      <ToastContainer />
      <Table dataSource={formattedData}>
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
                <a
                  onClick={() => {
                    setEditModalOpen(true);
                    setEditingId(record.id);
                  }}
                >
                  Editar
                </a>
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
