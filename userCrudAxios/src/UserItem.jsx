import React from 'react';
import { Card, Button } from 'antd';

const UserItem = ({ user, onEdit, onDelete }) => {
  return (
    <Card title={user.name} bordered={false} style={{ backgroundColor: 'lightgrey' }}>
      <p>{user.email}</p>
      <Button type="primary" onClick={() => onEdit(user)} style={{ marginRight: '10px' }}>
        Edit
      </Button>
      <Button type="danger" onClick={() => onDelete(user.id)}>
        Delete
      </Button>
    </Card>
  );
};

export default UserItem;