import React, { useEffect, useState } from 'react';

import { useTranslation } from 'react-i18next';
import LocalisationInterpol from "./Localisation";

function HomePage() {
  const [count, setCount] = useState(0);
  const { t } = useTranslation();
  const addressVar="Delhi NCR";
  

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  }, [count]); 

  return (
    <>
      <h1>{t('greeting', { name: 'John', address:'Delhi' })}</h1>
      
      <LocalisationInterpol name="Rita" address={addressVar}></LocalisationInterpol>
    </>
  );
}

export default HomePage;
