import React from 'react';
import { Routes as Switch, Route, Navigate } from "react-router-dom";
import HomePage from "./Pages/Home"
import AboutPage from './Pages/About';
import ContactPage from './Pages/Contact';
import AboutRedux from "./Pages/AboutRedux";
import FormValidationControlled from './Pages/FormValidationControlled';
import FormValidationUnControlled from "./Pages/FormValidationUncontrolled";
function Routes() {
  return (
      <Switch>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/about" element={<AboutRedux/>}/>
        <Route path="/contact" element={<ContactPage/>}/>
        <Route path="/formValidationControlled" element={<FormValidationControlled/>}/>
        <Route path="/formValidationUnControlled" element={<FormValidationUnControlled/>}/>
      </Switch>
  );
}

export default Routes;
