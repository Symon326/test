import React, { useState } from 'react';
    import axios from '../../services/api';

    const Register = () => {
      const [formData, setFormData] = useState({ firstName: '', lastName: '', email: '', password: '' });

      const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

      const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const response = await axios.post('/auth/register', formData); // Ensure the endpoint is correct
          console.log(response.data); // Check if the response is valid
        } catch (error) {
          console.error('Registration error:', error.response.data); // Log the error response
        }
      };

      return (
        <div>
          <h2>Register</h2>
          <form onSubmit={handleSubmit}>
            <input type="text" name="firstName" required onChange={handleChange} placeholder="First Name" />
            <input type="text" name="lastName" required onChange={handleChange} placeholder="Last Name" />
            <input type="email" name="email" required onChange={handleChange} placeholder="Email" />
            <input type="password" name="password" required onChange={handleChange} placeholder="Password" />
            <button type="submit">Register</button>
          </form>
        </div>
      );
    };

    export default Register;