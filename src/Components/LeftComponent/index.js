
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

function LeftComponent() {
    return (
        <div className="left-component">
        <div className="links">
          <Link to="/page1">Page 1</Link>
          <Link to="/page2">Page 2</Link>
          <Link to="/page3">Page 3</Link>
        </div>
      </div>
    );
  }
  