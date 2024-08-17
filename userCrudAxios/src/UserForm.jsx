import React, { useEffect, useState } from 'react';
import { Form, Input, Button } from 'antd';

const UserForm = ({ user, onSave, onCancel }) => {
  const [form] = Form.useForm();
  const [formData, setFormData] = useState({ name: '', email: '' });

  useEffect(() => {
    if (user) {
      setFormData(user);
      form.setFieldsValue(user);
    }
  }, [user, form]);

  const handleFinish = (values) => {
    onSave({ ...formData, ...values });
  };

  return (
    <Form form={form} layout="vertical" onFinish={handleFinish}>
      <Form.Item name="name" label="Name" rules={[{ required: true, message: 'Please enter the name' }]}>
        <Input />
      </Form.Item>
      <Form.Item name="email" label="Email" rules={[{ required: true, message: 'Please enter the email' }]}>
        <Input type="email" />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" style={{ marginRight: '10px' }}>
          Save
        </Button>
        <Button onClick={onCancel}>Cancel</Button>
      </Form.Item>
    </Form>
  );
};

export default UserForm;