import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Dashboard = () => (
  <div className="d-flex justify-content-center align-items-center vh-100">
    <div className="text-center">
      <h1>Library Management Dashboard</h1>
      <Link to="/books" className="btn btn-primary m-2">Manage Books</Link>
      <Link to="/authors" className="btn btn-primary m-2">Manage Authors</Link>
    </div>
  </div>
);

export default Dashboard;
