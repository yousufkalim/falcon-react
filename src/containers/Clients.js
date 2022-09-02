// Init
import React from 'react';

// Importing Components
import NavBar from '../components/Common/NavBar';
import Header from '../components/Clients/ClientHeader';
import ClientsList from '../components/Clients/ClientsList';
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
      <NavBar transparent />
      <Header />
      <ClientsList />
      <Footer />
    </div>
  );
}
