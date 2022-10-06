// Init
import React from 'react';

// Importing Components
import NavBar from '../components/Common/NavBar';
import Header from '../components/Common/ProjectHeader';
import LabTabs from '../components/Common/Projects';
import Footer from '../components/Common/Footer';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';

// OurProjects Component
export default function OurProjects() {
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
      <NavBar default />
      <Header
        ScrollTop
        // ColorTitle="ALL PROJECTS "
        Title='ALL PROJECTS START BY A SIMPLE IDEA, LET US TAKE CARE OF THE REST!'
        Description='Falcon Consulting had the opportunity to work on  various type of projects for its clients. We implemented an efficient process in order to deliver qualitative work on time. '
        ImgSrc={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/ProjectHeaderImg.svg`}
        HeaderParaClassName
      />
      <LabTabs />
      <Footer />
    </div>
  );
}
