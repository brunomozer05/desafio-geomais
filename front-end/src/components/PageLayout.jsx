import React, { useState } from "react";
import {
  NotificationOutlined,
  IdcardOutlined,
  TeamOutlined,
} from "@ant-design/icons";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import Tabela from "./Tabela";
import { Link, useNavigate } from "react-router-dom";

const items = [
  {
    icon:<TeamOutlined/>,
    label: 'Pessoas',
    key: "1",
    target: "/pessoas",
  },
  {
    icon: <IdcardOutlined/>,
    label: "Cadastro",
    key: "2",
    target: "/cadastro",
  },
  {
    icon: <NotificationOutlined/>,
    label: "Contato",
    key: "3",
    target: "/contato",
  },
];

const { Header, Content, Footer, Sider } = Layout;

const PageLayout = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const navigate = useNavigate();

  const handleMenuClick = ({ key }) => {
    const { target } = items.find((item) => item.key === key) || {};
    if (target) {
      navigate(target);
    }
  };

  return (
    <Layout
      style={{
        minHeight: "100vh",
      }}
    >
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <div className="demo-logo-vertical" />
        <img
          width={70}
          style={{ marginLeft: "3px" }}
          src="https://avatars.githubusercontent.com/u/70327748?s=280&v=4"
        />
        <Menu
          theme="dark"
          defaultSelectedKeys={['1']}
          mode="inline"
          onClick={handleMenuClick}
          items={items}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        />
        <Content
          style={{
            margin: "0 16px",
          }}
        >
          {children}
        </Content>
        <Footer
          style={{
            textAlign: "center",
          }}
        >
          Geomais ©2023 Created by Bruno Mozer
        </Footer>
      </Layout>
    </Layout>
  );
};
export default PageLayout;
