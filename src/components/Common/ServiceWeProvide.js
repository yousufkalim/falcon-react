import { Divider, Grid } from '@mui/material';
import React from 'react';
import ServiceWeProvideCard from '../Common/ServiceWeProvideCard';
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
          <Grid className='ServiceCardSection_Grid' sm={12} md={5} lg={3.5}>
            <ServiceWeProvideCard
              to={`/services/app-development`}
              MobileDev
              btnIconColor='#003B7E'
              btnColor='linear-gradient(310.84deg, rgba(255, 255, 255, 0.2) 20.21%, rgba(0, 0, 0, 0) 97.83%), #003B7E'
              heading='MOBILE DEVELOPMENT'
              description={t(
                'Our technical teams specialized in mobile development can develop hybrid or native applications to adapt your projects to customer needs.'
              )}
            />
          </Grid>
          <Grid className='ServiceCardSection_Grid' sm={12} md={5} lg={3.5}>
            <ServiceWeProvideCard
              to={`/services/web-development`}
              WebDev
              btnColor='#21925B'
              heading='WEB DEVELOPERS'
              description={t(
                'Our web teams are always at the forefront of technology for both the front end and the back end.'
              )}
            />
          </Grid>
          <Grid className='ServiceCardSection_Grid' sm={12} md={5} lg={3.5}>
            <ServiceWeProvideCard
              to={`/services/software-development`}
              btnColor='#218B92'
              SoftwareDev
              heading='SOFTWARE DEVELOPERS'
              description={t(
                'Our teams of software engineers have the expertise to develop successful software adapted to the various trades.'
              )}
            />
          </Grid>
          <Grid className='ServiceCardSection_Grid' sm={12} md={5} lg={3.5}>
            <ServiceWeProvideCard
              to={`/services/ui-development`}
              UiDev
              btnColor='#8232A8'
              heading='UI/UX DEVELOPMENT'
              description={t(
                'Our teams of designers are at your disposal to make your ideas shine and illustrate your projects with high-quality models.'
              )}
            />
          </Grid>
          <Grid className='ServiceCardSection_Grid' sm={12} md={5} lg={3.5}>
            <ServiceWeProvideCard
              DataEng
              heading='Data Engineering'
              btnColor='#0084C3'
              description={t(
                'Our Data teams will make your data an asset and a strength for your company.'
              )}
            />
          </Grid>
          <Grid className='ServiceCardSection_Grid' sm={12} md={5} lg={3.5}>
            <ServiceWeProvideCard
              to={`/services/ondemand-developers`}
              OnDemandDev
              btnColor='#003B7E'
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
