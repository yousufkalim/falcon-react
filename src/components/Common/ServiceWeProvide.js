import { Divider, Grid } from '@mui/material';
import React from 'react';
import ServiceWeProvideCard from '../Common/ServiceWeProvideCard';
import { motion } from 'framer-motion';
import SectionHeader from '../Common/SectionHeader';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function ServiceWeProvide() {
  const { t } = useTranslation();

  return (
    <>
      <div className='ServiceCardSection_SectionHeaderDiv'>
        <Divider className='ServiceCardSection_Divider' />
        <h1 className='ServiceCardSection_H'>{t('Services We Provide')}</h1>
        <p className='ServiceCardSection_P'>{t('Our aim provide better service')}</p>
      </div>
      <div className='ServiceCardSection_MainDiv'>
        <Grid container spacing={1} className='ServiceCardSection_ContainerGrid'>
          <Grid sm={12} md={5} lg={3.5}>
            <ServiceWeProvideCard
              to={`/services/app-development`}
              MobileDev
              heading='MOBILE DEVELOPMENT'
              desp='Mobile applications are now essential and allow you.'
            />
          </Grid>
          <Grid sm={12} md={5} lg={3.5}>
            <ServiceWeProvideCard
              to={`/services/web-development`}
              WebDev
              heading='WEB DEVELOPERS'
              desp='We are a multi-talented web development company.'
            />
          </Grid>
          <Grid sm={12} md={5} lg={3.5}>
            <ServiceWeProvideCard
              to={`/services/software-development`}
              SoftwareDev
              heading='SOFTWARE DEVELOPERS'
              desp='We are a multi-talented web development company.'
            />
          </Grid>
          <Grid sm={12} md={5} lg={3.5}>
            <ServiceWeProvideCard
              to={`/services/ui-development`}
              UiDev
              heading='UI/UX DEVELOPMENT'
              desp='Mobile applications are now essential and allow you.'
            />
          </Grid>
          <Grid sm={12} md={5} lg={3.5}>
            <ServiceWeProvideCard
              DataEng
              heading='Data Engineering'
              desp='We are a multi-talented web development company.'
            />
          </Grid>
          <Grid sm={12} md={5} lg={3.5}>
            <ServiceWeProvideCard
              to={`/services/ondemand-developers`}
              OnDemandDev
              heading='ON-DEMAND DEVELOPERS'
              desp='We are a multi-talented web development company.'
            />
          </Grid>
        </Grid>
      </div>
    </>
  );
}
