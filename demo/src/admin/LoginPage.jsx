import React from 'react';
import './index.css';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { Button, Input, Form, Typography } from 'antd';
import logo from './1.png';
import { useNavigate } from 'react-router-dom';

const { Title } = Typography;

const App = () => {
  const navigate=useNavigate();
  const onFinish = (values) => 
    {console.log('Received values:', values);
      navigate('/Admindb/Appp');
    };

  return (
    <div className="login-container" style={{
      backgroundColor: 'beige'
    }}>
      <div className="login-form">
        
        <div style={{ textAlign: 'center' }}>
          <img src={logo} alt="Logo" style={{ height: 'auto', maxWidth: '100%', marginBottom: 20 }} />
        </div>

        <Form name="login-form" onFinish={onFinish} style={{ maxWidth: 300, margin: 'auto' }}>
          <Title level={2} style={{ textAlign: 'center', marginBottom: 20 }}>
            ADMIN LOGIN
          </Title>
          <Form.Item name="username">
            <Input placeholder="Username" />
          </Form.Item>
          <Form.Item name="password">
            <Input.Password
              placeholder="Password"
              iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
            />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" style={{ width: '100%', color: 'black' }}>
              Log in
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default App;



