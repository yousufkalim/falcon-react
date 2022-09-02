// Init
import React from 'react';
import { useTranslation } from 'react-i18next';

export default function MoreProjectCards(props) {
  const { t } = useTranslation();

  return (
    <>
      <div className='MoreProjectCards_MainDiv'>
        <div className='MoreProjectCards_HoverDiv'>
          <div className='MoreProjectCards_TextDiv'>
            <h2 className='MoreProjectCards_Title'>{props.title}</h2>
            <p className='MoreProjectCards_Description'>{t(props.desp)}</p>
          </div>
        </div>
        <img className='MoreProjectCards_Image' src={props.image} />
      </div>
    </>
  );
}
