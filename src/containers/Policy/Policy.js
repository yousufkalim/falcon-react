import React from 'react';
import NavBar from '../../components/Common/NavBar';
import PolicyHeader from '../../components/Policy/PolicyHeader';
import PolicyList from '../../components/Policy/PolicyList';
import LocationSection from '../../components/Common/LocationSection';
import Footer from '../../components/Common/Footer';
import { Helmet } from 'react-helmet';

const Policy = () => {
  return (
    <div>
      <Helmet>
        <title>Falcon IT Consulting</title>
        <meta name='description' content='Our Team Member will get back to you within 24 hours.' />
        <meta
          name='keywords'
          content='falcon, falconit, falcon consulting, privacy policy, policies, terms and conditions,  '
        />
      </Helmet>
      <NavBar />
      <PolicyHeader />
      <PolicyList />
      <LocationSection />
      <Footer />
    </div>
  );
};

export default Policy;
