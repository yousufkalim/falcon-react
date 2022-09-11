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
              desp='Nos équipes techniques spécialisées dans le développement mobile peuvent développer applications hybrides ou natives pour adapter vos projets aux besoins clients.'
            />
          </Grid>
          <Grid sm={12} md={5} lg={3.5}>
            <ServiceWeProvideCard
              to={`/services/web-development`}
              WebDev
              heading='WEB DEVELOPERS'
              desp='Nos équipes web sont toujours à la pointe de la technologie aussi bien pour le front end que pour le back end.'
            />
          </Grid>
          <Grid sm={12} md={5} lg={3.5}>
            <ServiceWeProvideCard
              to={`/services/software-development`}
              SoftwareDev
              heading='SOFTWARE DEVELOPERS'
              desp="Nos équipes d'ingénieurs logiciel ont l'expertise pour développer des logiciels aboutis et adaptés aux différents métiers."
            />
          </Grid>
          <Grid sm={12} md={5} lg={3.5}>
            <ServiceWeProvideCard
              to={`/services/ui-development`}
              UiDev
              heading='UI/UX DEVELOPMENT'
              desp='Nos équipes de designers sont à votre écoute pour faire briller vos idées et illustrer vos projets par des maquettes de haute qualité.'
            />
          </Grid>
          <Grid sm={12} md={5} lg={3.5}>
            <ServiceWeProvideCard
              DataEng
              heading='Data Engineering'
              desp='Nos équipes Data feront de vos données un atout et une force pour votre entreprise.'
            />
          </Grid>
          <Grid sm={12} md={5} lg={3.5}>
            <ServiceWeProvideCard
              to={`/services/ondemand-developers`}
              OnDemandDev
              heading='ON-DEMAND DEVELOPERS'
              desp='Nous pouvons étendre vos équipes techniques avec nos ressources techniques selon vos besoins.'
            />
          </Grid>
        </Grid>
      </div>
    </>
  );
}
