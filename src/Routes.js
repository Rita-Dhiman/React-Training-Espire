import React from 'react';
import { Routes as Switch, Route, Navigate } from "react-router-dom";
import HomePage from "./Pages/Home"
import AboutPage from './Pages/About';
import ContactPage from './Pages/Contact';
import AboutRedux from "./Pages/AboutRedux"

function Routes() {
  return (
      <Switch>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/about" element={<AboutRedux/>}/>
        <Route path="/contact" element={<ContactPage/>}/>
      </Switch>
  );
}

export default Routes;
