import React, { useState } from 'react';
import { Button, Form, Input, Select, DatePicker, Row, Col } from 'antd';


const StudentInput = () => {
  const [componentSize, setComponentSize] = useState('default');

  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };

  return (
    <div className="form-container">
      <h2 className="form-title">Student Details</h2>
      <Form
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 18 }}
        layout="horizontal"
        initialValues={{ size: componentSize }}
        onValuesChange={onFormLayoutChange}
        size={componentSize}
        className="form-border" // Add class for border
      >
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item label="Unique ID" name="uniqueId">
              <Input placeholder="Enter unique ID" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label="Name" name="name">
              <Input placeholder="Enter your name" />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={16}>
          <Col span={12}>
            <Form.Item label="Initial" name="initial">
              <Input placeholder="Enter your initial" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label="Last Name" name="lastName">
              <Input placeholder="Enter your last name" />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={16}>
          <Col span={12}>
            <Form.Item label="Age" name="age">
              <Input placeholder="Enter your age" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label="Date of Birth" name="dob">
              <DatePicker placeholder="Select date" style={{ width: '100%' }} />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={16}>
          <Col span={12}>
            <Form.Item label="Gender" name="gender">
              <Select placeholder="Select your gender">
                <Select.Option value="male">Male</Select.Option>
                <Select.Option value="female">Female</Select.Option>
                <Select.Option value="other">Other</Select.Option>
              </Select>
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label="Aadhar No" name="aadharNo">
              <Input placeholder="Enter your Aadhar number" />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={16}>
          <Col span={12}>
            <Form.Item label="PAN No" name="panNo">
              <Input placeholder="Enter your PAN number" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label="Driving License" name="drivingLicense">
              <Input placeholder="Enter your driving license number" />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={16}>
          <Col span={12}>
            <Form.Item label="Mail ID" name="mailId">
              <Input placeholder="Enter your email" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label="Mobile No" name="mobileNo">
              <Input placeholder="Enter your mobile number" />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={16}>
          <Col span={12}>
            <Form.Item label="Register No" name="registerNo">
              <Input placeholder="Enter your register number" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label="Dept Name" name="deptName">
              <Input placeholder="Enter your department name" />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={16}>
          <Col span={12}>
            <Form.Item label="Nationality" name="nationality">
              <Input placeholder="Enter your nationality" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label="Blood Group" name="bloodGroup">
              <Input placeholder="Enter your blood group" />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={16}>
          <Col span={12}>
            <Form.Item label="Father Name" name="fatherName">
              <Input placeholder="Enter your father's name" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label="Mother Name" name="motherName">
              <Input placeholder="Enter your mother's name" />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={16}>
          <Col span={12}>
            <Form.Item label="Parent Contact" name="parentContact">
              <Input placeholder="Enter your parent's contact number" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label="Address" name="address">
              <Input placeholder="Enter your address" />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={16}>
          <Col span={12}>
            <Form.Item label="Pin Code" name="pinCode">
              <Input placeholder="Enter your pin code" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label="District" name="district">
              <Input placeholder="Enter your district" />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={16}>
          <Col span={12}>
            <Form.Item label="State" name="state">
              <Input placeholder="Enter your state" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label="Email ID" name="emailId">
              <Input placeholder="Enter your email ID" />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={16}>
          <Col span={12}>
            <Form.Item label="Social Data" name="socialData">
              <Input placeholder="Enter your social data" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label="Challenged" name="physicallyChallenged">
              <Select placeholder="Select an option">
                <Select.Option value="yes">Yes</Select.Option>
                <Select.Option value="no">No</Select.Option>
              </Select>
            </Form.Item>
          </Col>
        </Row>

        <Form.Item wrapperCol={{ offset: 10, span: 5 }}>
          <Button type="primary">Submit</Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default StudentInput;
