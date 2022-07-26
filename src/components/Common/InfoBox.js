import React from 'react';
import Info1 from '../../assets/images/Info1.svg';
import { useTranslation } from 'react-i18next';
export default function InfoBox(props) {
  const { t } = useTranslation();
  return (
    <>
      <div className='InfoDiv'>
        <div className='InfoImg'>
          <img src={props.src || Info1} alt='infoBox' />
        </div>
        <h2>{props.number}</h2>
        <p>{t(props.title)}</p>
      </div>
    </>
  );
}
