import { Grid, Typography } from '@mui/material';
import React from 'react';
import { Divider } from '@mui/material';
import { useTranslation } from 'react-i18next';
export default function AboutCompany() {
  const { t } = useTranslation();

  return (
    <>
      <div className='AboutCompanySection'>
        <Grid container spacing={1}>
          <Grid sm={12} md={6}>
            <div className='AboutCompanyImgDiv'>
              <img
                src={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/aboutCompanyImg.svg`}
                className='AboutCompanyImg'
                alt='about Us'
              />
            </div>
          </Grid>
          <Grid sm={12} md={6}>
            <div className='AboutCompanyTypo'>
              <Typography className='AboutCompanyTypo_H1'>{t('BEST company')}</Typography>
              <Divider
                sx={{
                  width: '10%',
                  height: '5px',
                  backgroundColor: '#42C2FF',
                  borderRadius: '5px',
                  marginTop: '1% ',
                }}
              />
              <Typography className='AboutCompanyTypo_H2'>
                {t('About Falcon Consulting')}
              </Typography>
              <Typography className='AboutCompanyTypo_Desp'>
                {t(
                  'Falcon Consulting is a development agency that specializes in web application development and consultancy in the field of new technologies. We combine rigor, quality of work and optimized production costs. Founded in 2015, Falcon Consulting started out as a consulting company which worked with large companies such as Microsoft, Canon and Accor. In 2017, Falcon Consulting took off and became a development agency, bringing together over 10 years of experience in application development and project management in its team. Established in France, United States and Pakistan, the company is providing development services worldwide.'
                )}
              </Typography>
            </div>
          </Grid>
        </Grid>
      </div>
    </>
  );
}
