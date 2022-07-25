import React from 'react';
import { Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
export default function KeyFeatures(props) {
  const { i18n, t } = useTranslation();
  return (
    <>
      <div className='KeyFeatureDiv'>
        <img className='KeyFeature_Img' src={props.src} alt='keyFeatures' />
        <Typography className='KeyFeature_Title'>{t(props.title)}</Typography>
        <Typography className='KeyFeature_Desp'>{t(props.desp)}</Typography>
      </div>
    </>
  );
}
