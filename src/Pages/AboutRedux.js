import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { setData, setFilteredData } from "./../state/slices/aboutSlice"; 
import AboutComponent from '../Components/AboutComponent/AboutComponent';
import AboutSearch from '../Components/AboutComponent/AboutSearch';
import Header from './Layout/Header';
const AboutRedux = () => {
    const dispatch = useDispatch();
    const data = useSelector((state) => state.about.data);
    const filteredData = useSelector((state) => state.about.filteredData);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
          dispatch(setData(response.data));
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
  
      fetchData();
    }, []);
  
    const searchFunction = (event) => {
      const query = event.target.value;
      dispatch(setFilteredData(data.filter(item =>
        item.title.toLowerCase().includes(query.toLowerCase()) ||
        item.body.toLowerCase().includes(query.toLowerCase())
      )));
    };
  
    return (
      <div>

        <Header></Header>
          <h2>This is with Redux</h2>

        <AboutSearch searchFunction={searchFunction} />
        <AboutComponent filteredData={filteredData} />
      </div>
    );
  };
  
  export default AboutRedux;