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
export default function SoftwareDev() {
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
    <div className='Services_SoftwareContainer'>
      <Helmet>
        {/* <title>{t('FalconIT : Expert Software Engineers')}</title> */}
        <title>{t('Software development services - Falcon IT Consulting')}</title>
        <link rel='canonical' href='https://falconitconsultant.com/services/software-development' />

        <meta
          name='description'
          content='Our agile software development engineers provide custom software development services with software quality assurance.'
        />
        <meta
          name='keywords'
          content='software quality assurance, software development services, agile software, software development engineers'
        />
      </Helmet>
      <NavBar />
      <Header
        Title='SOFTWARE DEVELOPMENT'
        Titlecolor='#003B7E'
        DespColor='#003B7E'
        Description='We are ready to handle your ambitious projects!'
        btn
        btnText='Get This Service'
        ImgSrc={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/softwaredevImg.svg`}
      />
      <KeyFeatureSection />
      <WorkProcessSection />
      <ServiceFrame src={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/softdevframe.svg`} />
      <LatestProjects />
      <Footer />
    </div>
  );
}
