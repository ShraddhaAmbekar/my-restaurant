import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../css/Signin.css';

const Signin = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
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

    try {
      const response = await axios.get('https://675bdd409ce247eb1937a917.mockapi.io/restaurant/signup');
      const users = response.data;

      const user = users.find(user => user.email === formData.email && user.password === formData.password);

      if (user) {
        setSuccess('Signin successful!');
        setError('');
      } else {
        setError('Invalid email or password');
        setSuccess('');
      }
    } catch (err) {
      setError('Error occurred during signin');
      setSuccess('');
    }
  };

  return (
    <div className="signin-page">
      <div className="signin-card">
        <h2 className="signin-title">Sign In</h2>
        {error && <div className="alert alert-danger">{error}</div>}
        {success && <div className="alert alert-success">{success}</div>}
        <form className="signin-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="btn-primary">Sign In</button>
        </form>
        <div className="signup-link">
          <Link to="/signup">Don't have an account? Sign Up</Link>
        </div>
      </div>
    </div>
  );
};

export default Signin;
