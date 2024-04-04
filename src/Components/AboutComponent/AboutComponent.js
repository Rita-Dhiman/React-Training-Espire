// ChildComponent.js
import React,{useEffect,useState} from 'react';
const AboutComponent = ({filteredData}) => {
    
    return (
     <>
      <ul>
        {filteredData.map((item, index) => (
          <li key={index}>
            <strong>Id:</strong> {item.id} | <strong>Name:</strong> {item.name}
          </li>
        ))}
      </ul>
     </>
  );
};

export default AboutComponent;
