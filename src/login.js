import React, { useState } from 'react';
import './login.css';
import { Link, useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import axios from 'axios';
import { API_URL } from './link/port';

function Start() {
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      // Form validation
      for (const key in loginData) {
        if (!loginData[key] || (typeof loginData[key] === 'string' && !loginData[key].trim())) {
          setError(`Please enter your ${key}`);
          return;
        }
      }

      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(loginData.email)) {
        setError('Please enter a valid email address');
        return;
      }

      // Password validation
      if (loginData.password.length < 6) {
        setError('Password must be at least 6 characters');
        return;
      }

      setError('');

      // Fetch user details from the server using Axios
      const response = await axios.get(API_URL);

      // Check if the entered credentials match any user in db.json
      const userDetails = response.data.find(user => user.email === loginData.email && user.password === loginData.password);

      if (userDetails) {
        // Redirect to '/content' if credentials are valid
        navigate('/content');
        console.log('Login successful!', userDetails);
      } else {
        setError('Invalid email or password');
      }
    } catch (error) {
      // Handle error
      console.error('Error during login:', error);
      setError('Invalid email or password');
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className='div1'>
      <h2 className='kl'>Log In</h2>
      <label className='label1'></label>
      <input
        className='input1'
        type="text"
        placeholder="Enter your email"
        value={loginData.email}
        onChange={(e) => handleChange({ target: { name: 'email', value: e.target.value } })}
        required
      />
      <br /><br />
      <label className='label1'></label>
      <input
        className='input1'
        type="password"
        placeholder="Enter password"
        value={loginData.password}
        onChange={(e) => handleChange({ target: { name: 'password', value: e.target.value } })}
        required
      />
      <p className='lav'>Forgot password?</p>
      {error && <p className='error-message'>{error}</p>}
      <br /><br />
      <center>
        <Button variant="contained" onClick={handleLogin}>
          Log In
        </Button>
      </center>
      <p className='p1'>Doesn't have an account? </p>
      <p><Link to='/register'>Sign Up</Link></p>
    </div>
  );
}

export default Start;
