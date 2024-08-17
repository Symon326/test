import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Button, Card, Col, Row, message, Modal } from 'antd';
import UserItem from './UserItem';
import UserForm from './UserForm';

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get("https://jsonplaceholder.typicode.com/users");
      setUsers(response.data);
    } catch (error) {
      console.error('Error fetching users:', error);
      message.error('Error fetching users');
    }
  };

  const addUser = async (user) => {
    try {
      const response = await axios.post("https://jsonplaceholder.typicode.com/users", user);
      setUsers([...users, response.data]);
      setEditingUser(null);
      setIsModalVisible(false);
      message.success('User added successfully');
    } catch (error) {
      console.error('Error adding user:', error);
      message.error('Error adding user');
    }
  };

  const updateUser = async (user) => {
    try {
      await axios.put(`https://jsonplaceholder.typicode.com/users/${user.id}`, user);
      const updatedUsers = users.map(u => u.id === user.id ? user : u);
      setUsers(updatedUsers);
      setEditingUser(null);
      setIsModalVisible(false);
      message.success('User updated successfully');
    } catch (error) {
      console.error('Error updating user:', error);
      message.error('Error updating user');
    }
  };

  const deleteUser = async (id) => {
    try {
      await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
      const remainingUsers = users.filter(user => user.id !== id);
      setUsers(remainingUsers);
      message.success('User deleted successfully');
    } catch (error) {
      console.error('Error deleting user:', error);
      message.error('Error deleting user');
    }
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    setEditingUser(null);
  };

  return (
    <div>
      <Button type="primary" onClick={() => setIsModalVisible(true)} style={{ marginBottom: '20px' }}>
        Add User
      </Button>
      <Row gutter={[16, 16]}>
        {users.map((user) => (
          <Col key={user.id} xs={24} sm={12} md={8}>
            <UserItem
              user={user}
              onEdit={(user) => {
                setEditingUser(user);
                setIsModalVisible(true);
              }}
              onDelete={deleteUser}
            />
          </Col>
        ))}
      </Row>
      {isModalVisible && (
        <Modal
          title={editingUser ? 'Edit User' : 'Add User'}
          visible={isModalVisible}
          onCancel={handleCancel}
          footer={null}
        >
          <UserForm
            user={editingUser}
            onSave={editingUser ? updateUser : addUser}
            onCancel={handleCancel}
          />
        </Modal>
      )}
    </div>
  );
};

export default UserList;