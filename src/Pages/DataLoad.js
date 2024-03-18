import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DataChildComponent from "./DataChildComponent"

const DataLoad = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
     
      <DataChildComponent data={data}/>
    </div>

  );
};

export default DataLoad;
