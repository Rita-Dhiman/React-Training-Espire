import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Header from './Layout/Header';

const FormValidationControlled = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });
  const [errors, setErrors] = useState({});

  const formValidate = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const formSubmit = (e) => {
    e.preventDefault();
    const errors = validateFormData(formData);
    if (Object.keys(errors).length === 0) {
      // Form submission logic here
      console.log('Form submitted successfully!');
    } else {
      setErrors(errors);
    }
  };

  const validateFormData = (data) => {
    const errors = {};

    // Username validation
    if (!data.username.trim()) {
      errors.username = 'Username is required';
    } else if (!/^[a-zA-Z0-9]+$/.test(data.username)) {
      errors.username = 'Username should contain only letters and numbers';
    } else if (/[^a-zA-Z0-9]/.test(data.username)) {
      errors.username = 'Username should not contain special characters';
    }

    // Password validation
    if (!data.password.trim()) {
      errors.password = 'Password is required';
    } else if (data.password.length < 6) {
      errors.password = 'Password must be at least 6 characters long';
    } else if (/[^a-zA-Z0-9]/.test(data.password)) {
      errors.password = 'Password should not contain special characters';
    }

    return errors;
  };

  return (
    <div>
      <Header/>
      <h2>Controlled Components</h2>
      <form onSubmit={formSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={formValidate}
          />
          {errors.username && <p className="error">{errors.username}</p>}
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={formValidate}
          />
          {errors.password && <p className="error">{errors.password}</p>}
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FormValidationControlled;
