// Init
import React from 'react';

// Importing Components
import NavBar from '../components/Common/NavBar';
import LegalHeader from '../components/LegalMentions/LegalHeader';
import LegalList from '../components/LegalMentions/LegalList';
import LocationSection from '../components/Common/LocationSection';
import Footer from '../components/Common/Footer';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';

// Home Component
export default function LegalMentions() {
  const { t } = useTranslation();

  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  };
  return (
    <div className='HomeContainer'>
      <Helmet>
        <title>{t('Falcon IT : Expert Software Engineers')}</title>
        <meta name='description' content='Our Team Member will get back to you within 24 hours.' />
        <meta
          name='keywords'
          content='falcon, falconit, falcon consulting, website, our offices, '
        />
      </Helmet>
      <NavBar />
      <LegalHeader />
      <LegalList />
      <LocationSection />
      <Footer />
    </div>
  );
}
