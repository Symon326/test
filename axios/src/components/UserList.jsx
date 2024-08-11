import React, { useState, useEffect } from 'react';
import { getUsers, deleteUser } from '../../api';
import { Table, Button, Space, Popconfirm, message } from 'antd';

const UserList = ({ onEdit, refresh }) => {
  const [users, setUsers] = useState([]);

  // Fetch users whenever the component mounts or refresh prop changes
  useEffect(() => {
    fetchUsers();
  }, [refresh]);

  const fetchUsers = async () => {
    try {
      const response = await getUsers();
      setUsers(response.data);
    } catch (error) {
      console.error('Error fetching users', error);
      message.error('Failed to fetch users');
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteUser(id);
      fetchUsers(); // Re-fetch users after deletion
      message.success('User deleted successfully');
    } catch (error) {
      console.error('Error deleting user', error);
      message.error('Failed to delete user');
    }
  };

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
          <Button type="primary" onClick={() => onEdit(record)}>
            Edit
          </Button>
          <Popconfirm
            title="Are you sure to delete this user?"
            onConfirm={() => handleDelete(record.id)}
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
    <div>
      <h2>User List</h2>
      <Table dataSource={users} columns={columns} rowKey="id" />
    </div>
  );
};

export default UserList;