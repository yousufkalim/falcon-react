// Init
import React from 'react';

// Importing Components
import NavBar from '../components/Common/NavBar';
import ContactUsSection from '../components/Common/ContactUsSection';
import LocationSection from '../components/Common/LocationSection';
import Footer from '../components/Common/Footer';
import { Helmet } from 'react-helmet';
// Home Component
export default function ContactUs() {
  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  };
  return (
    <div className='ContactContainer'>
      <Helmet>
        <title>Falcon IT Consulting</title>
        <meta name='description' content='Our Team Member will get back to you within 24 hours.' />
        <meta
          name='keywords'
          content='falcon, falconit, falcon consulting,blogs, projects, software, websites, application, developers, app developments, ios, android, blogs, articles, blog articles,collaborating,expertize,Trustful, about us, about,skilled, , ambitious, UI/UX, designers, project managers, quality testers,partnerships, contact, contact us, contact info, facebook, twitter, linkedin, calendly, social media,whatsapp '
        />
      </Helmet>
      <NavBar ContactUs />
      <ContactUsSection ContactUs />
      <LocationSection />
      <Footer />
    </div>
  );
}
