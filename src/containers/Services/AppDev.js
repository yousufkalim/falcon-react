// Init
import React, { useEffect } from 'react';

// Importing Components
import NavBar from '../../components/Common/NavBar';
import Header from '../../components/Common/Header';
import Footer from '../../components/Common/Footer';
import ServiceFrame from '../../components/Common/ServiceFrame';
import LatestProjects from '../../components/Common/LatestProjects';
import WorkProcessSection from '../../components/Common/WorkProcessSection';
import KeyFeatureSection from '../../components/Common/KeyFeatureSection';
import { Helmet } from 'react-helmet';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

// Home Component
export default function AppDev() {
  const { t } = useTranslation();
  let { pathname } = useLocation();
  useEffect(() => {
    // Scroll to top logic
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: 'auto',
      });
    }, 300);
  }, [pathname]);
  return (
    <div className='Services_AppContainer'>
      <Helmet>
        <title>{t('App Development Services - Falcon IT Consulting')}</title>
        <link rel='canonical' href='https://falconitconsultant.com/services/app-development' />

        <meta
          name='description'
          content="Falcon's apps developer team develops android, IOS, and cross-platform/hybrid applications."
        />
        <meta
          name='keywords'
          content='App development, application development, IOS development, android development, app developers, app development software, cross-platform applications, hybrid applications'
        />
      </Helmet>
      <NavBar />
      <Header
        Title='APP DEVELOPMENT'
        Titlecolor='#003B7E'
        DespColor='#003B7E'
        Description='We are ready to handle your ambitious projects!'
        btn
        btnText='More information'
        ImgSrc={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/appdevImg.svg`}
        ImgWidth='75%'
      />
      <KeyFeatureSection />
      <WorkProcessSection />
      <ServiceFrame src={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/appdevframe.svg`} />
      <LatestProjects />
      <Footer />
    </div>
  );
}
