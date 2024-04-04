import React, { useState } from 'react';
import axios from 'axios';

const NodePostAPI = () => {
  const [formData, setFormData] = useState({ id: '', name: '' });
  const apiUrl = process.env.REACT_APP_API_URL;
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await axios.post(`${apiUrl}add`, formData);
      console.log(response.data); 
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <h2>Add New User</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>ID:</label>
          <input type="text" name="id" value={formData.id} onChange={handleChange} />
        </div>
        <div>
          <label>Name:</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} />
        </div>
        <button type="submit">Add User</button>
      </form>
    </div>
  );
};

export default NodePostAPI;
