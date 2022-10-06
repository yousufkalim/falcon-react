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
              description={t(
                'Our technical teams specialized in mobile development can develop hybrid or native applications to adapt your projects to customer needs.'
              )}
            />
          </Grid>
          <Grid sm={12} md={5} lg={3.5}>
            <ServiceWeProvideCard
              to={`/services/web-development`}
              WebDev
              heading='WEB DEVELOPERS'
              description={t(
                'Our web teams are always at the forefront of technology for both the front end and the back end.'
              )}
            />
          </Grid>
          <Grid sm={12} md={5} lg={3.5}>
            <ServiceWeProvideCard
              to={`/services/software-development`}
              SoftwareDev
              heading='SOFTWARE DEVELOPERS'
              description={t(
                'Our teams of software engineers have the expertise to develop successful software adapted to the various trades.'
              )}
            />
          </Grid>
          <Grid sm={12} md={5} lg={3.5}>
            <ServiceWeProvideCard
              to={`/services/ui-development`}
              UiDev
              heading='UI/UX DEVELOPMENT'
              description={t(
                'Our teams of designers are at your disposal to make your ideas shine and illustrate your projects with high-quality models.'
              )}
            />
          </Grid>
          <Grid sm={12} md={5} lg={3.5}>
            <ServiceWeProvideCard
              DataEng
              heading='Data Engineering'
              description={t(
                'Our Data teams will make your data an asset and a strength for your company.'
              )}
            />
          </Grid>
          <Grid sm={12} md={5} lg={3.5}>
            <ServiceWeProvideCard
              to={`/services/ondemand-developers`}
              OnDemandDev
              heading='ON-DEMAND DEVELOPERS'
              description={t(
                'We can extend your technical teams with our technical resources according to your needs.'
              )}
            />
          </Grid>
        </Grid>
      </div>
    </>
  );
}
