// NavigationMenu.js
import React from 'react';
import './App.css'
import { Link, Routes, Route } from 'react-router-dom';
import AllCourses from './AllCourses';
import FullStackDevelopment from './FullStackDevelopment';
import DataScience from './DataScience';
import CyberSecurity from './CyberSecurity';

function NavigationMenu() {
  return (
    <div className="navigation-menu">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/full-stack-development">Full Stack Development</Link>
        </li>
        <li>
          <Link to="/data-science">Data Science</Link>
        </li>
        <li>
          <Link to="/cyber-security">Cyber Security</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<AllCourses />} />
        <Route path="/full-stack-development" element={<FullStackDevelopment />} />
        <Route path="/data-science" element={<DataScience />} />
        <Route path="/cyber-security" element={<CyberSecurity />} />
      </Routes>
    </div>
  );
}

export default NavigationMenu;
