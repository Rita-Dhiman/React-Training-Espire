import React, { useEffect, useState } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './style.css'; 

import { Link, useLocation } from "react-router-dom";

const Header = () => {
  return (
    <div className='headerBg'>
         <nav>
        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/formValidationControlled">Form Validation Controlled</Link>
          </li>
          <li>
            <Link to="/formValidationUnControlled">Form Validation Uncontrolled</Link>
          </li>
          
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    
    </div>
  );
};

export default Header;
