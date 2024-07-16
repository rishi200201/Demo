import React, { useState } from 'react';
import {
  Button,
  Form,
  Input,
  Select,
  
} from 'antd';

const App = () => {
  const [componentSize, setComponentSize] = useState('default');
  
  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };

  return (
    
    <div className="form-container">
      <Form
        labelCol={{ span: 6 }}
        wrapperCol={{ span: 14 }}
        layout="horizontal"
        initialValues={{ size: componentSize }}
        onValuesChange={onFormLayoutChange}
        size={componentSize}
      >
        
        
        <Form.Item label="Unique ID" name="uniqueId">
          <Input placeholder="Enter unique ID" />
        </Form.Item>
        
        <Form.Item label="Mail ID" name="mailId">
          <Input placeholder="Enter your email" />
        </Form.Item>
        
        <Form.Item label="Mobile No" name="mobileNo">
          <Input placeholder="Enter your mobile number" />
        </Form.Item>
        
        <Form.Item label="Role" name="role">
          <Select placeholder="Select a role">
            <Select.Option value="student">Student</Select.Option>
            <Select.Option value="dean">Dean</Select.Option>
            <Select.Option value="faculty">Faculty</Select.Option>
            <Select.Option value="reports">Reports</Select.Option>
          </Select>
        </Form.Item>
        
        
        <Form.Item wrapperCol={{ offset: 6, span: 14 }}>
          <Button type="primary">Submit</Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default App;
