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
export default function WebDev() {
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
    <div className='Services_WebContainer'>
      <Helmet>
        <title>{t('Web Development Services - Falcon IT Consulting')}</title>
        <meta
          name='description'
          content='The best software development company with a team of front-end and back-end developers - Falcon IT Consulting provides website development services at the cheapest rates.'
        />
        <meta
          name='keywords'
          content='software development company, web development, website development, web programming, front end developers, back end developers'
        />
      </Helmet>
      <NavBar />
      <Header
        Title='WEB DEVELOPMENT'
        Titlecolor='#003B7E'
        Description='We are ready to handle your ambitious projects!'
        DespColor='#003B7E'
        btn
        btnText='More information'
        ImgSrc={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/webdevImg.svg`}
      />
      <KeyFeatureSection />
      <WorkProcessSection />
      <ServiceFrame src={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/webframe.svg`} />
      <LatestProjects />

      <Footer />
    </div>
  );
}
