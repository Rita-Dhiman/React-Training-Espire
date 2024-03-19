// ChildComponent.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';


const ContactPage = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.about.data);
  const filteredData = useSelector((state) => state.about.filteredData);

  return (
    
    <div>
      <h1>Contact Us</h1>
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
