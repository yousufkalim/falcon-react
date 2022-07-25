// Init
import React from 'react';

// Importing Components
import NavBar from '../../components/Common/NavBar';
import Header from '../../components/Common/Header';
import Footer from '../../components/Common/Footer';
import AppDevImg from '../../assets/images/appdevImg.svg';
import AppDevFrame from '../../assets/images/appdevframe.svg';
import ServiceFrame from '../../components/Common/ServiceFrame';
import LatestProjects from '../../components/Common/LatestProjects';
import WorkProcessSection from '../../components/Common/WorkProcessSection';
import KeyFeatureSection from '../../components/Common/KeyFeatureSection';
import { Helmet } from 'react-helmet';

// Home Component
export default function AppDev() {
  return (
    <div className='Services_AppContainer'>
      <Helmet>
        <title>Falcon IT Consulting</title>
        <meta name='description' content='We are ready to handle your ambitious projects!' />
        <meta
          name='keywords'
          content='falcon, falconit, falcon consulting,blogs, projects, software, websites, application, developers, app developments, ios, android, blogs, articles, blog articles,collaborating,expertize,Trustful, about us, about,skilled, , ambitious, UI/UX, designers, project managers, quality testers,partnerships, contact, contact us, contact info, facebook, twitter, linkedin, calendly, social media,whatsapp,legal mentions, privacy policy,policies '
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
        ImgSrc={AppDevImg}
        ImgWidth='75%'
      />
      <KeyFeatureSection />
      <WorkProcessSection />
      <ServiceFrame src={AppDevFrame} />
      <LatestProjects />
      <Footer />
    </div>
  );
}
