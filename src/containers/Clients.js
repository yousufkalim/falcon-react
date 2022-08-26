// Init
import React from 'react';

// Importing Components
import NavBar from '../components/Common/NavBar';
import Header from '../components/Common/Header';
import ClientsList from '../components/Common/ClientsList';
import Footer from '../components/Common/Footer';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';

// OurProjects Component
export default function Clients() {
  const { t } = useTranslation();

  return (
    <div className='ProjectsContainer'>
      <Helmet>
        {/* <title>{t('FalconIT : Expert Software Engineers')}</title> */}
        <title>{t('Project details - Falcon IT Consulting')}</title>
        <link rel='canonical' href='https://falconitconsultant.com/ourprojects' />

        <meta
          name='description'
          content='Falcon IT worked on many projects including web development, apps development, UI/UX development, and many others.'
        />
        <meta
          name='keywords'
          content='projects, development projects, software development projects, application development, UI/UX development'
        />
      </Helmet>
      <NavBar />
      <Header
        // ColorTitle="ALL PROJECTS "
        Title='Our Clients'
        Description='Falcon Consulting had the opportunity to work on  various type of projects for its clients. We implemented an efficient process in order to deliver qualitative work on time. '
        ImgSrc={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/ProjectHeaderImg.svg`}
        HeaderParaClassName
      />
      <ClientsList />
      <Footer />
    </div>
  );
}
