import React from 'react';
import { Routes as Switch, Route, Navigate } from "react-router-dom";
import HomePage from "./Pages/Home"
import AboutPage from './Pages/About';
import ContactPage from './Pages/Contact';

function Routes() {
  return (
      <Switch>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/about" element={<AboutPage/>}/>
        <Route path="/contact" element={<ContactPage/>}/>
      </Switch>
  );
}

export default Routes;
