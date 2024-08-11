import React, { useState } from 'react';
import UserList from './components/UserList';
import UserForm from './components/UserForm';
import { Layout, Menu } from 'antd';
import './styles.css';

const { Header, Content, Footer } = Layout;

const App = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const [refresh, setRefresh] = useState(false); // State to trigger refresh

  const handleEdit = (user) => {
    setCurrentUser(user);
  };

  const handleSave = () => {
    setCurrentUser(null);
    setRefresh(prevRefresh => !prevRefresh); // Toggle refresh state
  };

  const handleCancel = () => {
    setCurrentUser(null);
  };

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
          <UserForm currentUser={currentUser} onSave={handleSave} onCancel={handleCancel} />
          <UserList onEdit={handleEdit} refresh={refresh} />
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>React CRUD App ©2023</Footer>
    </Layout>
  );
};

export default App;