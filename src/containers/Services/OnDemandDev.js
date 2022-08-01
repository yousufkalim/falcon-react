// Init
import React from 'react';

// Importing Components
import NavBar from '../../components/Common/NavBar';
import Header from '../../components/Common/Header';
import Footer from '../../components/Common/Footer';
import ServiceFrame from '../../components/Common/ServiceFrame';
import LatestProjects from '../../components/Common/LatestProjects';
import OurDevelopers from '../../components/Common/OurDevelopers';
import DeveloperWorkProcess from '../../components/Common/DeveloperWorkProcess';
import { Helmet } from 'react-helmet';

// Home Component
export default function OnDemandDev() {
  return (
    <div className='Services_DemandContainer'>
      <Helmet>
        <title>Falcon IT Consulting</title>
        <meta
          name='description'
          content='Are you in need of developers for short of long term tasks ? Our all-inclusive approach will allow you to get the best match !'
        />
        <meta
          name='keywords'
          content='falcon, falconit, falcon consulting,blogs, projects, software, websites, application, developers, app developments, ios, android, blogs, articles, blog articles,collaborating,expertize,Trustful, about us, about,skilled, , ambitious, UI/UX, designers, project managers, quality testers,partnerships, contact, contact us, contact info, facebook, twitter, linkedin, calendly, social media,whatsapp,legal mentions, privacy policy,policies '
        />
      </Helmet>
      <NavBar />
      <Header
        Titlecolor='#003B7E'
        DespColor='#003B7E'
        Title='Skilled Developers for your Projects'
        Description='Are you in need of developers for short of long term tasks ? Our all-inclusive approach will allow you to get the best match !'
        btn
        btnText='More information'
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
