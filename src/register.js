import React, { useState } from 'react';
import './register.css';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import axios from 'axios';
import { API_URL } from './link/port';

function End() {
  const [user, setUser] = useState({
    name: '',
    dob: '',
    email: '',
    password: '',
    contactNumber: '',
  });
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const isValidContactNumber = () => {
    const validAreaCodes = ['9', '8', '7'];
    const sanitizedContactNumber = user.contactNumber.replace(/\D/g, '');
    return (
      sanitizedContactNumber.length === 10 &&
      validAreaCodes.includes(sanitizedContactNumber.charAt(0))
    );
  };

  const handleSignUp = async () => {
    try {
      for (const key in user) {
        if (!user[key] || (typeof user[key] === 'string' && !user[key].trim())) {
          setError(`Please enter your ${key}`);
          return;
        }
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(user.email)) {
        setError('Please enter a valid email address');
        return;
      }

      if (user.password.length < 6) {
        setError('Password must be at least 6 characters');
        return;
      }

      if (!isValidContactNumber()) {
        setError('Please enter a valid 10-digit contact number');
        return;
      }

      setError('');

      const response = await axios.post(API_URL, user);

      console.log('Registration successful!', response.data);
      setSuccessMessage('Registration successful!');

      // You can redirect the user or perform other actions here if needed
    } catch (error) {
      console.error('Error during registration:', error);
      setSuccessMessage('');
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  return (
    <div className='log1'>
      <p className='kl'>Sign Up</p>
      {Object.entries(user).map(([key, value]) => (
        <React.Fragment key={key}>
          <label className='label2' htmlFor={key}></label>
          <input
            className='input2'
            type={key === 'dob' ? 'date' : key === 'password' ? 'password' : 'text'}
            id={key}
            name={key}
            placeholder={`Enter ${key.charAt(0).toUpperCase() + key.slice(1)}`}
            value={value}
            onChange={handleChange}
            required
            autoComplete={key === 'password' ? 'new-password' : 'nope'}
          />
          <br />
        </React.Fragment>
      ))}
      {error && <p className='error-message'>{error}</p>}
      {successMessage && <p className='success-message'>{successMessage}</p>}
      <center>
        <Button variant="contained" onClick={handleSignUp}>
          Sign Up
        </Button>
      </center>
      <p className='p2'>
        Already have an account?<Link to='/login'>Log In</Link>
      </p>
    </div>
  );
}

export default End;
