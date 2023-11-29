import React, { useState } from "react";
import { Button, Form, Input, Select, DatePicker } from "antd";

const { Option } = Select;

const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};
const FormInputs = () => {
  const [form] = Form.useForm();
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };
  return (
    <div
      style={{
        justifyContent: "center",
        width: "100%",
      }}
    >
      <Form
        {...formItemLayout}
        form={form}
        name="form"
        onFinish={onFinish}
        style={{
          maxWidth: 600,
        }}
        scrollToFirstError
      >
        <Form.Item
          name="nome"
          label="Nome"
          rules={[
            {
              required: true,
              whitespace: true,
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
            },
          ]}
        >
          <Input type="number" />
        </Form.Item>
        <Form.Item
          name="data-nascimento"
          label="Data de nascimento"
          rules={[
            {
              required: true,
              whitespace: true,
            },
          ]}
        >
          <DatePicker />
        </Form.Item>

        <Form.Item
          name="genero"
          label="Gênero"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Select placeholder="escolha seu gênero">
            <Option value="M">Masculino</Option>
            <Option value="F">Feminino</Option>
            <Option value="O">Outro</Option>
          </Select>
        </Form.Item>
        <Form.Item {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit">
            Enviar
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
export default FormInputs;
