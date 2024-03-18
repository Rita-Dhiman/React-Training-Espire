import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AboutComponent from '../Components/AboutComponent/AboutComponent';
import AboutSearch from '../Components/AboutComponent/AboutSearch';

const About = () => {
  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        setData(response.data);
        setFilteredData(response.data); 
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const searchFunction = (event) => {
    const query = event.target.value;
    setSearchQuery(query);
   
    const filtered = data?.filter(item =>
      item.title.toLowerCase().includes(query.toLowerCase()) ||
      item.body.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredData(filtered); 
  };

  return (
    <div>
    
    <AboutSearch searchQuery={searchQuery} searchFunction={searchFunction}/>
    <AboutComponent filteredData={filteredData}/>
    
    </div>
  );
};

export default About;
