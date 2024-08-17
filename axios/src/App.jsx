import React, { useState, useEffect } from 'react';
import { Layout, Menu, Form, Input, Button, Table, Space, Popconfirm, message } from 'antd';
import axios from 'axios';
import './styles.css';

const { Header, Content, Footer } = Layout;

const App = () => {
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);
  const [form] = Form.useForm();

  // Fetch users from the API
  const fetchUsers = async () => {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/users');
      setUsers(response.data);
    } catch (error) {
      console.error('Error fetching users', error);
      message.error('Failed to fetch users');
    }
  };

  // Create a new user
  const createUser = async (values) => {
    try {
      const response = await axios.post('https://jsonplaceholder.typicode.com/users', values);
      message.success('User created successfully');
      fetchUsers(); // Refresh the user list
    } catch (error) {
      console.error('Error creating user', error);
      message.error('Failed to create user');
    }
  };

  // Update an existing user
  const updateUser = async (id, values) => {
    try {
      await axios.put(`https://jsonplaceholder.typicode.com/users/${id}`, values);
      message.success('User updated successfully');
      fetchUsers(); // Refresh the user list
    } catch (error) {
      console.error('Error updating user', error);
      message.error('Failed to update user');
    }
  };

  // Delete a user
  const deleteUser = async (id) => {
    try {
      await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
      message.success('User deleted successfully');
      fetchUsers(); // Refresh the user list
    } catch (error) {
      console.error('Error deleting user', error);
      message.error('Failed to delete user');
    }
  };

  // Handle form submission
  const handleSubmit = async (values) => {
    if (currentUser) {
      await updateUser(currentUser.id, values);
    } else {
      await createUser(values);
    }
    setCurrentUser(null); // Reset form after submission
    form.resetFields(); // Clear the form fields
  };

  // Handle edit action
  const handleEdit = (user) => {
    setCurrentUser(user);
    form.setFieldsValue(user); // Populate form with user data
  };

  // Handle cancel action
  const handleCancel = () => {
    setCurrentUser(null);
    form.resetFields(); // Clear the form fields
  };

  // Effect to fetch users when the component mounts
  useEffect(() => {
    fetchUsers();
  }, []);

  // User table columns
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Action',
      key: 'action',
      render: (text, record) => (
        <Space size="middle">
          <Button type="primary" onClick={() => handleEdit(record)}>
            Edit
          </Button>
          <Popconfirm
            title="Are you sure to delete this user?"
            onConfirm={() => deleteUser(record.id)}
            okText="Yes"
            cancelText="No"
          >
            <Button type="danger">Delete</Button>
          </Popconfirm>
        </Space>
      ),
    },
  ];

  return (
    <Layout className="layout">
      <Header>
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
          <Menu.Item key="1">Home</Menu.Item>
        </Menu>
      </Header>
      <Content style={{ padding: '0 50px' }}>
        <div className="site-layout-content" style={{ padding: '24px', minHeight: '280px' }}>
          <h1>React CRUD App</h1>
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
                {currentUser ? 'Update User' : 'Add User'}
              </Button>
              <Button type="default" onClick={handleCancel} style={{ marginLeft: '10px' }}>
                Cancel
              </Button>
            </Form.Item>
          </Form>
          <Table dataSource={users} columns={columns} rowKey="id" style={{ marginTop: '16px' }} />
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>React CRUD App ©2023</Footer>
    </Layout>
  );
};

export default App;