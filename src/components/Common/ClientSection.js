import { Grid } from '@mui/material';
import React from 'react';
import SectionHeader from './SectionHeader';
import Client3 from '../../assets/images/4.svg';
import Client4 from '../../assets/images/5.svg';
import Client1 from '../../assets/images/6.svg';
import Client2 from '../../assets/images/7.svg';
export default function ClientSection() {
  return (
    <>
      <div className='ClientSectionMain'>
        <SectionHeader
          width='15%'
          colorH2='#0F52BA'
          h1='SINCERELY YOURS'
          h2='Some Amazing Partners We Work With'
          // decription="This sounds simple, but it is beneficial to your business success."
        />
        <div className='ClientsDiv'>
          <Grid container spacing={1} className='ClientsGrid'>
            <Grid className='ClientLogoGrid' xs={6} sm={3}>
              <img
                className='ClientLogo'
                alt='client'
                src={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/6.svg`}
              />
            </Grid>
            <Grid className='ClientLogoGrid' xs={6} sm={3}>
              <img
                className='ClientLogo'
                alt='client'
                src={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/7.svg`}
              />
            </Grid>
            <Grid className='ClientLogoGrid' xs={6} sm={3}>
              <img
                className='ClientLogo'
                alt='client'
                src={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/4.svg`}
              />
            </Grid>
            <Grid className='ClientLogoGrid' xs={6} sm={3}>
              <img
                className='ClientLogo'
                alt='client'
                src={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/5.svg`}
              />
            </Grid>
          </Grid>
        </div>
      </div>
    </>
  );
}
