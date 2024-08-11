import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import ResetPassword from './components/Auth/ResetPassword';
import UrlShortener from './components/UrlShortener';
import UrlTable from './components/UrlTable';
import PrivateRoute from './context/PrivateRoute';

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/reset-password/:token" element={<ResetPassword />} />
      <Route path="/shorten" element={<PrivateRoute><UrlShortener /></PrivateRoute>} />
      <Route path="/urls" element={<PrivateRoute><UrlTable /></PrivateRoute>} />
    </Routes>
  );
}

export default App;