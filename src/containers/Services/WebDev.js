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
    <div>
      <NavBar />
      <Header
        Title="WEB DEVELOPMENT "
        Description="We are ready to handle your ambitious projects!"
        btn
        btnText="Get This Service"
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
