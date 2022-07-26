import React from 'react';
import { Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
export default function DeveloperSlider(props) {
  const { t } = useTranslation();
  return (
    <>
      <div className='DeveloperDiv'>
        <div className='DeveloperDiv_Img'>
          <img className='Developer_Img' src={props.src} alt='developer Image' />
        </div>
        <div className='DeveloperDiv_Typo'>
          <Typography className='DeveloperTypo_H'>{t(props.heading)}</Typography>
          <Typography className='DeveloperTypo_Desp'>{t(props.desp)}</Typography>
          <Button className='DeveloperTypo_Btn' variant='outlined'>
            <Link to={`/contactus`}>{t(props.btnText || 'Contact Us')}</Link>
          </Button>
        </div>
      </div>
    </>
  );
}
