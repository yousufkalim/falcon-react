// Init
import React from 'react';

// Importing Components
import Header from '../components/Common/Header';
import NavBar from '../components/Common/NavBar';
import Footer from '../components/Common/Footer';
import AboutCompany from '../components/About/AboutCompany';
import VisionSection from '../components/About/VisionSection';
import ModernAgencySection from '../components/About/ModernAgencySection';
import HeaderImage from '../assets/images/AboutUs_Header_Img.svg';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';

// Home Component
export default function About() {
  const { t } = useTranslation();

  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  };
  return (
    <div className='AboutContainer'>
      <Helmet>
        <title>{t('About Us - Falcon IT Consulting')}</title>
        <link rel='canonical' href='https://falconitconsultant.com/about' />

        <meta
          name='description'
          content='Trustful, skilled and ambitious team of developers, UI/UX designers, project managers and quality testers. Our aim is to build healthy partnerships with our clients, in which respect is the central value. Our main difference with other software houses is that we are committed to delivering the last mile, without any compromise.'
        />
        <meta
          name='keywords'
          content='falcon, falconit, falcon consulting, Trustful, partnerships , best company, Modern IT Agency, Healthy Relationships '
        />
      </Helmet>
      <NavBar />
      <Header
        Title='Our Goal Is To Exceed Your Expectations '
        // Description='Healthy, skilled and ambitious team'
        Description='Trustful, skilled and ambitious team of developers, UI/UX designers, project managers and quality testers. Our aim is to build healthy partnerships with our clients, in which respect is the central value. Our main difference with other software houses is that we are committed to delivering the last mile, without any compromise.'
        // ImgSrc={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/AboutUs_Header_Img.png`}
        ImgSrc={HeaderImage}
        social
      />
      <AboutCompany />
      <ModernAgencySection />
      <VisionSection />
      <Footer />
    </div>
  );
}
