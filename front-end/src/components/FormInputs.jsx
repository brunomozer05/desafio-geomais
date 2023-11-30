import React from "react";
import { Button, Form, Input, Select } from "antd";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const { Option } = Select;

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 },
  },
};

const tailFormItemLayout = {
  wrapperCol: {
    xs: { span: 24, offset: 0 },
    sm: { span: 16, offset: 8 },
  },
};

const FormInputs = () => {
  const [form] = Form.useForm();

  const onFinish = async (values) => {
    try {
      await axios.post("http://localhost:8080/", values, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      form.resetFields();

      toast.success("Dados enviados com sucesso!");
    } catch (error) {
      console.error("Erro ao enviar dados:", error);
      toast.error("Erro ao enviar dados. Por favor, tente novamente.");
    }
  };

  return (
    <div style={{ justifyContent: "center", width: "100%" }}>
      <Form
        {...formItemLayout}
        name="form"
        form={form}
        onFinish={onFinish}
        style={{ maxWidth: 600 }}
        scrollToFirstError
      >
        <Form.Item
          name="nome"
          label="Nome"
          rules={[
            {
              required: true,
              whitespace: true,
              message: "Porfavor coloque seu Nome!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="cpf"
          label="CPF"
          rules={[
            {
              required: true,
              whitespace: true,
              message: "Porfavor coloque seu CPF!",
            },
          ]}
        >
          <Input type="number" />
        </Form.Item>
        <Form.Item
          name="rg"
          label="RG"
          rules={[
            {
              required: true,
              whitespace: true,
              message: "Porfavor coloque seu RG!",
            },
          ]}
        >
          <Input type="number" />
        </Form.Item>
        <Form.Item
          name="data_nasc"
          label="Data de nascimento"
          rules={[
            {
              required: true,
              whitespace: true,
              message: "Porfavor coloque sua Data de nascimento",
            },
          ]}
        >
          <Input type="date" />
        </Form.Item>
        <Form.Item
          name="sexo"
          label="Gênero"
          rules={[{ required: true, message: "Porfavor escolha seu Gênero!" }]}
        >
          <Select placeholder="escolha seu gênero">
            <Option value="Masculino">Masculino</Option>
            <Option value="Feminino">Feminino</Option>
            <Option value="Outro">Outro</Option>
          </Select>
        </Form.Item>
        <Form.Item {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit">
            Enviar
          </Button>
        </Form.Item>
      </Form>
      <ToastContainer />
    </div>
  );
};

export default FormInputs;
