import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { ConfigProvider, Layout, theme } from 'antd';
import UserList from './UserList';

const { Content } = Layout;

const App = () => {
  return (
    <ConfigProvider theme={theme}>
      <Router>
        <Layout style={{ minHeight: '100vh' }}>
          <Content style={{ padding: '20px 50px' }}>
            <Routes>
              <Route path='/users' element={<UserList />} />
              <Route path='/' element={<Navigate to="/users" />} />
            </Routes>
          </Content>
        </Layout>
      </Router>
    </ConfigProvider>
  );
};

export default App;