// ChildComponent.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Header from './Layout/Header';
import ListGroup from 'react-bootstrap/ListGroup';


const ContactPage = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.about.data);
  const filteredData = useSelector((state) => state.about.filteredData);

  return (
    
    <div>
      
      <Header></Header>
      <h1>Contact Us</h1>

      {/* <ListGroup>
      {filteredData.map((item, index) => (
        <ListGroup.Item key={index}><strong>Title:</strong> {item.title}</ListGroup.Item>
          
        ))}
    </ListGroup> */}


      <ul>
        {filteredData.map((item, index) => (
          <li key={index}>
            <strong>Title:</strong> {item.title} 
          </li>
        ))}
      </ul> 
    </div>
  );
};

export default ContactPage;
