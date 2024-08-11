import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from '../../services/api';

const ResetPassword = () => {
  const { token } = useParams();
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post(`/auth/reset-password/${token}`, { password });
  };

  return (
    <div>
      <h2>Reset Password</h2>
      <form onSubmit={handleSubmit}>
        <input type="password" required value={password} onChange={e => setPassword(e.target.value)} placeholder="New Password" />
        <button type="submit">Reset Password</button>
      </form>
    </div>
  );
};

export default ResetPassword;