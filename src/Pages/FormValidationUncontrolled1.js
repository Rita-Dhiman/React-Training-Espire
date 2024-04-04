import React ,{useState} from 'react';

function UncontrolledComponent() {
    const [errors, setErrors] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const username = formData.get('username');
    const password = formData.get('password');

    // Perform validation
    const errors = {};

    if (!username.trim()) {
      errors.username = 'Username is required';
    }

    if (!password.trim()) {
      errors.password = 'Password is required';
    }

    if (Object.keys(errors).length === 0) {
      // No errors, submit the form
      console.log('Form submitted successfully!');
    } else {
      // Display validation errors
      console.log('Validation errors:', errors);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="username">Username:</label>
      <input type="text" id="username" name="username" />
      {errors.username && <p className="error">{errors.username}</p>}

      <label htmlFor="password">Password:</label>
      <input type="password" id="password" name="password" />
      {errors.password && <p className="error">{errors.password}</p>}

      <button type="submit">Submit</button>
    </form>
  );
}

export default UncontrolledComponent;
