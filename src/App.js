import React from 'react';
import Routes from './Routes';
import { Link, useLocation } from "react-router-dom";
import './App.css'; // Import your CSS file for styling

function App() {
  return (
    <>
      <nav>
        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
      <Routes />
    </>
  );
}

export default App;
