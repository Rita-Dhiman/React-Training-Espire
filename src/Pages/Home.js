import React, { useEffect, useState } from 'react';
function HomePage() {
  const [count, setCount] = useState(0);

  
  useEffect(() => {
    document.title = `You clicked ${count} times`;
  }, [count]); 


  return (
    <div>
    <h1>Home</h1>
      <p>You clicked {count} times</p>

      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}

export default HomePage;
