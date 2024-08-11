import React, { useEffect } from 'react';
import { Form, Input, Button, message } from 'antd';
import { createUser, updateUser } from '../../api';

const UserForm = ({ currentUser, onSave, onCancel }) => {
  const [form] = Form.useForm();

  useEffect(() => {
    if (currentUser) {
      form.setFieldsValue(currentUser);
    } else {
      form.resetFields();
    }
  }, [currentUser, form]);

  const handleSubmit = async (values) => {
    try {
      if (currentUser && currentUser.id) {
        await updateUser(currentUser.id, values);
        message.success('User updated successfully');
      } else {
        await createUser(values);
        message.success('User created successfully');
      }
      onSave(); // Trigger refresh
      form.resetFields();
    } catch (error) {
      console.error('Error saving user', error);
      message.error('Failed to save user');
    }
  };

  return (
    <div>
      <h2>{currentUser ? 'Edit User' : 'Add User'}</h2>
      <Form form={form} layout="vertical" onFinish={handleSubmit}>
        <Form.Item
          name="name"
          label="Name"
          rules={[{ required: true, message: 'Please input the name!' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="email"
          label="Email"
          rules={[{ required: true, message: 'Please input the email!' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Save
          </Button>
          <Button type="default" onClick={onCancel} style={{ marginLeft: '10px' }}>
            Cancel
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default UserForm;