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
// Home Component
export default function WebDev() {
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
        <title>{t('Falcon IT : Expert Software Engineers')}</title>
        <meta name='description' content='We are ready to handle your ambitious projects!' />
        <meta
          name='keywords'
          content='falcon, falconit, falcon consulting,blogs, projects, software, websites, application, developers, app developments, ios, android, blogs, articles, blog articles,collaborating,expertize,Trustful, about us, about,skilled, , ambitious, UI/UX, designers, project managers, quality testers,partnerships, contact, contact us, contact info, facebook, twitter, linkedin, calendly, social media,whatsapp,legal mentions, privacy policy,policies '
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
