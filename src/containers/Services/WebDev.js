// Init
import React from "react";

// Importing Components
import NavBar from "../../components/Common/NavBar";
import Header from "../../components/Common/Header";
import Footer from "../../components/Common/Footer";
import ServiceFrame from "../../components/Common/ServiceFrame";
import LatestProjects from "../../components/Common/LatestProjects";
import WebDevImg from "../../assets/images/webdevImg.svg";
import WorkProcessSection from "../../components/Common/WorkProcessSection";
import KeyFeatureSection from "../../components/Common/KeyFeatureSection";
// Home Component
export default function WebDev() {
  return (
    <div className='Services_WebContainer'>
      <NavBar />
      <Header
        Title='WEB DEVELOPMENT'
        Titlecolor='#003B7E'
        Description='We are ready to handle your ambitious projects!'
        DespColor='#003B7E'
        btn
        btnText='More information'
        ImgSrc={WebDevImg}
      />
      <KeyFeatureSection />
      <WorkProcessSection />
      <ServiceFrame />
      <LatestProjects />

      <Footer />
    </div>
  );
}
