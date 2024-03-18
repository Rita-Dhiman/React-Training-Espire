// MiddleComponent.js
import React from 'react';
import ChildComponent from './Pages/ChildComponent';


const MiddleComponent = ({ data }) => {
  return (
    <div>
      <h2>Middle Component</h2>
      <ChildComponent data={data} />
    </div>
  );
};

export default MiddleComponent;
