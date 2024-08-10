import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem('token'));
  const [userId, setUserId] = useState(localStorage.getItem('userId'));
  const [sessionTimeout, setSessionTimeout] = useState(null);

  useEffect(() => {
    // Log local storage items to console
    console.log("Local Storage:", {
      token: localStorage.getItem('token'),
      userId: localStorage.getItem('userId'),
    });

    if (token) {
      // Set a session timeout for 15 minutes
      const timeout = setTimeout(() => {
        logout();
        console.log("Session expired, user logged out.");
      }, 15 * 60 * 1000); // 15 minutes

      setSessionTimeout(timeout);
    }

    return () => {
      clearTimeout(sessionTimeout);
    };
  }, [token]);

  const login = async (values) => {
    try {
      const response = await axios.post('http://localhost:4000/api/auth/login', values);
      const { token, userId } = response.data; // Ensure response includes userId

      console.log("Login Response:", response.data); // Log the response

      setToken(token);
      setUserId(userId); // Set userId from response
      localStorage.setItem('token', token);
      localStorage.setItem('userId', userId); // Store userId in local storage
    } catch (err) {
      throw new Error(err.response ? err.response.data.error : err.message);
    }
  };

  const logout = () => {

    setToken(null);
    setUserId(null); // Clear userId on logout
    localStorage.removeItem('token');
    localStorage.removeItem('userId'); // Remove userId from local storage
    clearTimeout(sessionTimeout);
    console.log("User logged out.");
    Navigate('/login');
  };

  return (
    <AuthContext.Provider value={{ token, userId, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
