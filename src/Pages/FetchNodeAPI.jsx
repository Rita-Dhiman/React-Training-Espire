import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FetchNodeAPI = () => {
  const [userInfo, setUserInfo] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api');
        
        setUserInfo(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData(); 
  }, []); 

  return (
    <div>
      <h1>User Information</h1>
      <ul>
        
        {userInfo.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default FetchNodeAPI;
