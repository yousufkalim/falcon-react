import React from 'react';
import { Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
export default function WorkProcessSteps(props) {
  const { i18n, t } = useTranslation();
  return (
    <>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          marginBottom: '10%',
        }}
      >
        <img style={{ width: '20%', margin: '3% 0%' }} src={props.src} alt='process' />
        <Typography sx={{ color: 'white', fontWeight: '700', margin: '5% 0%', fontSize: '1rem' }}>
          {t(props.title)}
        </Typography>
        <Typography
          sx={{
            color: 'white',
            fontWeight: '400',
            fontSize: '.8rem',
            width: '80%',
            opacity: '80%',
          }}
        >
          {t(props.desp)}
        </Typography>
      </div>
    </>
  );
}
