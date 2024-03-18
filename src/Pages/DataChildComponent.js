import React from 'react';

const DataChildComponent = ({ data }) => {
  return (
    <div>
      <h2>Data Child Component</h2>
      <ul>
        {data.map((item, index) => (
          <li key={index}>
            <strong>Title:</strong> {item.title} | <strong>Body:</strong> {item.body}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DataChildComponent;
