// Init
import React from 'react';

// Importing Components
import NavBar from '../components/Common/NavBar';
import LegalHeader from '../components/LegalMentions/LegalHeader';
import LegalList from '../components/LegalMentions/LegalList';
import LocationSection from '../components/Common/LocationSection';
import Footer from '../components/Common/Footer';
import { Helmet } from 'react-helmet';
// Home Component
export default function LegalMentions() {
  return (
    <div className='HomeContainer'>
      <Helmet>
        <title>Falcon IT Consulting</title>
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
