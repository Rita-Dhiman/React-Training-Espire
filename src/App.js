import React from 'react';
import Routes from './Routes';
import { Link, useLocation } from "react-router-dom";
import './App.css'; 
import { useTranslation, initReactI18next } from 'react-i18next';
import i18n from 'i18next';

import enTranslation from './locale/en.json';
import frTranslation from './locale/fr.json';

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: enTranslation },
    fr: { translation: frTranslation }
  },
  lng: 'en', 
  interpolation: {
    escapeValue: false
  }
});

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
