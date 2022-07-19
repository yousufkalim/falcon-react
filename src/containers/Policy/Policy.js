import React from 'react';
import NavBar from '../../components/Common/NavBar';
import PolicyHeader from '../../components/Policy/PolicyHeader';
import PolicyList from '../../components/Policy/PolicyList';
import LocationSection from '../../components/Common/LocationSection';
import Footer from '../../components/Common/Footer';

const Policy = () => {
  return (
    <div>
      <NavBar />
      <PolicyHeader />
      <PolicyList />
      <LocationSection />
      <Footer />
    </div>
  );
};

export default Policy;
