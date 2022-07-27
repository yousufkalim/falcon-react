// Init
import React, { useEffect } from 'react';

// Importing Components
import NavBar from '../components/Common/NavBar';
import Header from '../components/Common/Header';
import ServiceProvided from '../components/Common/ServiceProvided';
import LatestProjects from '../components/Common/LatestProjects';
import AboutSection from '../components/Common/AboutSection';
import ClientSection from '../components/Common/ClientSection';
import ReviewSection from '../components/Common/ReviewsSection';
import BlogSection from '../components/Common/BlogSection';
import ContactUsSection from '../components/Common/ContactUsSection';
import LocationSection from '../components/Common/LocationSection';
import Footer from '../components/Common/Footer';

import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet';

// import
// Home Component
export default function Home() {
  const { i18n, t } = useTranslation();

  return (
    <>
      <div>
        <Helmet>
          <title>Falcon IT Consulting</title>
          <meta
            name='description'
            content='Software house with a team of experienced developers and project managers. We pride ourselves in delivering high-quality work for our partners.'
          />
          <meta
            name='keywords'
            content='falcon, falconit, falcon consulting, blogs, projects, Software house, EXCEED YOUR EXPECTATION, Excellence '
          />
        </Helmet>
        <div className='HomeContainer'>
          <NavBar />
          <Header
            Title='WE PROVIDE GREAT SERVICES AT THE BEST PRICE.'
            Description='Software house with a team of experienced developers and project managers. We pride ourselves in delivering high-quality work for our partners. '
            btn
            btnText='GET A FREE QUOTE'
            chatIcons
          />
          <ServiceProvided />
          <LatestProjects ProjectsSummary />
          <AboutSection />
          <ClientSection />
          <ReviewSection />
          <BlogSection />
          <ContactUsSection />
          <LocationSection />
          <Footer />
        </div>
      </div>
    </>
  );
}
