import React, { useRef } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Header from './Layout/Header';

const FormValidationControlled = () => {
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);
  const errors = {};

  const formSubmit = (e) => {
    e.preventDefault();
    const formData = {
      username: usernameRef.current.value,
      password: passwordRef.current.value,
    };
    const validationErrors = validateFormData(formData);
    if (Object.keys(validationErrors).length === 0) {
      console.log('Form submitted successfully!');
    } else {
      console.log('Validation errors:', validationErrors);
    }
  };

  const validateFormData = (data) => {
    const errors = {};

    if (!data.username.trim()) {
      errors.username = 'Username is required';
    } else if (!/^[a-zA-Z0-9]+$/.test(data.username)) {
      errors.username = 'Username should contain only letters and numbers';
    } else if (/[^a-zA-Z0-9]/.test(data.username)) {
      errors.username = 'Username should not contain special characters';
    }

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
            ref={usernameRef}
          />
          {errors.username && <p className="error">{errors.username}</p>}
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            ref={passwordRef}
          />
          {errors.password && <p className="error">{errors.password}</p>}
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FormValidationControlled;
