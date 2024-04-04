import React from 'react';
import { useTranslation } from 'react-i18next';

const LocalisationInterpol = ({ name,address }) => {
  const { t } = useTranslation();

  return (
    <div>
      <p>{t('greeting', { name,address })}</p>
    </div>
  );
};

export default LocalisationInterpol;
