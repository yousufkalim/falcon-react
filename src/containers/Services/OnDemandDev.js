// Init
import React, { useEffect } from 'react';

// Importing Components
import NavBar from '../../components/Common/NavBar';
import Header from '../../components/Common/Header';
import Footer from '../../components/Common/Footer';
import ServiceFrame from '../../components/Common/ServiceFrame';
import LatestProjects from '../../components/Common/LatestProjects';
import OurDevelopers from '../../components/Common/OurDevelopers';
import DeveloperWorkProcess from '../../components/Common/DeveloperWorkProcess';
import { Helmet } from 'react-helmet';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
// Home Component
export default function OnDemandDev() {
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
    <div className="Services_DemandContainer">
      <Helmet>
        <title>{t('On-demand services - Falcon IT Consulting')}</title>
        <link rel="canonical" href="https://falconitconsultant.com/services/ondemand-developers" />

        <meta
          name="description"
          content="Falcon IT Consulting hires an on-demand developers team, SQA team, software engineers and provides on-demand web development, app development, and software development services."
        />
        <meta
          name="keywords"
          content="on-demand developers, hire on-demand developers, on-demand development services, software developers, app developers, web developers, SQA team, SQ engineers"
        />
      </Helmet>
      <NavBar default />
      <Header
        ScrollTop
        Titlecolor="#003B7E"
        DespColor="#003B7E"
        Title="Skilled Developers for your Projects"
        Description="Are you in need of developers for short of long term tasks ? Our all-inclusive approach will allow you to get the best match !"
        btn
        ImgWidth="80%"
        btnText="More information"
        ImgSrc={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/demanddevImg.svg`}
      />
      <OurDevelopers />
      <DeveloperWorkProcess />
      <ServiceFrame src={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/demanddevframe.svg`} />
      <LatestProjects />
      <Footer />
    </div>
  );
}
