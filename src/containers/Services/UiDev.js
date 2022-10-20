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
export default function UiDev() {
  const { t } = useTranslation();
  let { pathname } = useLocation();
  useEffect(() => {
    // Scroll to top logic
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: 'auto'
      });
    }, 300);
  }, [pathname]);
  return (
    <div className="Services_UiContainer">
      <Helmet>
        {/* <title>{t('FalconIT : Expert Software Engineers')}</title> */}
        <title>{t('UI/UX developers services - Falcon IT Consulting')}</title>
        <link rel="canonical" href="https://falconitconsultant.com/services/ui-development" />

        <meta
          name="description"
          content="Falcon Consulting has a devoted team of UI/UX developers working on the front-end UI/UX of the web and apps. The team is specialized in user experience development."
        />
        <meta
          name="keywords"
          content="web UI developer, user interface development, front-end UI UX, web ui / UX developer"
        />
      </Helmet>
      <NavBar default />
      <Header
        ScrollTop
        Title="UI/UX DEVELOPMENT"
        Titlecolor="#003B7E"
        DespColor="#003B7E"
        Description="We are ready to handle your ambitious projects!"
        btn
        ImgWidth="80%"
        btnText="Get This Service"
        ImgSrc={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/uidevImg.svg`}
      />
      <KeyFeatureSection UxKey />
      <WorkProcessSection UxWorkProcess />
      <ServiceFrame src={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/uidevframe.svg`} />
      <LatestProjects />
      <Footer />
    </div>
  );
}
