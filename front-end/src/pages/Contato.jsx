import React from "react";
import { Card, Typography } from 'antd';
import {
  WhatsAppOutlined, MailOutlined , GithubOutlined
} from "@ant-design/icons";

const { Title } = Typography;

const App: React.FC = () => (
  <div style={{marginTop: 120}}>
  <Card   style={{ width: 400, fontSize: 20}}>
    <Card>
    <Title>Contato</Title>
    </Card>
    <br/>
    <p ><WhatsAppOutlined/> (48)988612552</p>

    <p><MailOutlined /> brunomozer05@gmail.com</p>

    <a href="https://github.com/brunomozer05"><GithubOutlined /> brunomozer05</a>
  </Card>
  </div>
);

export default App;
