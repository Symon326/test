import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import BookManagement from './pages/BookManagement';
import AuthorManagement from './pages/AuthorManagement';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/books" element={<BookManagement />} />
      <Route path="/authors" element={<AuthorManagement />} />
    </Routes>
  );
};

export default App;