import React, { useState } from 'react';
import axios from 'axios';
import '../css/Signup.css';
import { Link } from 'react-router';

const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    
    try {
      const response = await axios.post(
        'https://675bdd409ce247eb1937a917.mockapi.io/restaurant/signup', 
        formData
      );
      setSuccess('Signup successful!');
      setError('');
    } catch (err) {
      setError('Error occurred during signup');
      setSuccess('');
    }
    
  };

  return (
    <div className="signup-page">
      <div className="card">
        <h2>Signup</h2>
        {error && <div className="alert alert-danger">{error}</div>}
        {success && <div className="alert alert-success">{success}</div>}
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
          <button type="submit" className="btn-primary">
            Signup
          </button>
          <Link to="/signin" className="btn-secondary" >
           Already have an account? Sign In
        </Link>
        </form>
      </div>
    </div>
  );
};

export default Signup;
