import React from 'react';
import { useTranslation } from 'react-i18next';
export default function InfoBox(props) {
  const { t } = useTranslation();
  return (
    <>
      <div className='InfoDiv'>
        <div className='InfoImg'>
          <img src={props.src} alt='infoBox' />
        </div>
        <h2>{props.number}</h2>
        <p>{t(props.title)}</p>
      </div>
    </>
  );
}
