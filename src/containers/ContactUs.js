// Init
import React from 'react';

// Importing Components
import NavBar from '../components/Common/NavBar';
import ContactUsSection from '../components/Common/ContactUsSection';
import LocationSection from '../components/Common/LocationSection';
import Footer from '../components/Common/Footer';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';

// Home Component
export default function ContactUs() {
  const { t } = useTranslation();

  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  };

  return (
    <div className='ContactContainer'>
      <Helmet>
        {/* <title>{t('FalconIT : Expert Software Engineers')}</title> */}
        <title>{t('Contact US - Falcon IT Consulting')}</title>
        <link rel='canonical' href='https://falconitconsultant.com/contactus' />

        <meta name='description' content='To contact Falcon IT Consulting, fill out the form.' />
        <meta name='keywords' content='contact us, Fill the form' />
      </Helmet>
      <NavBar ContactUs />
      <ContactUsSection ContactUs />
      <LocationSection />
      <Footer />
    </div>
  );
}
