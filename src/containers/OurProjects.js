// Init
import React from 'react';

// Importing Components
import NavBar from '../components/Common/NavBar';
import Header from '../components/Common/Header';
import HeaderImg from '../assets/images/ProjectHeaderImg.svg';
import LabTabs from '../components/Common/OurProjectTabs';
import Footer from '../components/Common/Footer';
import { Helmet } from 'react-helmet';

// OurProjects Component
export default function OurProjects() {
  return (
    <div className='ProjectsContainer'>
      <Helmet>
        <title>Falcon IT Consulting</title>
        <meta
          name='description'
          content='Falcon Consulting had the opportunity to work on  various type of projects for its clients. We implemented an efficient process in order to deliver qualitative work on time.'
        />
        <meta
          name='keywords'
          content='falcon, falconit, falcon consulting,blogs, projects, software, websites, application, developers, app developments, ios, android, blogs, articles, blog articles,collaborating,expertize,Trustful, about us, about,skilled, , ambitious, UI/UX, designers, project managers, quality testers,partnerships, '
        />
      </Helmet>
      <NavBar />
      <Header
        // ColorTitle="ALL PROJECTS "
        Title='ALL PROJECTS START BY A SIMPLE IDEA, LET US TAKE CARE OF THE REST!'
        Description='Falcon Consulting had the opportunity to work on  various type of projects for its clients. We implemented an efficient process in order to deliver qualitative work on time. '
        ImgSrc={HeaderImg}
        HeaderParaClassName
      />
      <LabTabs />
      <Footer />
    </div>
  );
}
