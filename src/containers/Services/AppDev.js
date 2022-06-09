// Init
import React from "react";

// Importing Components
import NavBar from "../../components/Common/NavBar";
import Header from "../../components/Common/Header";
import Footer from "../../components/Common/Footer";
import AppDevImg from "../../assets/images/appdevImg.svg";
import AppDevFrame from "../../assets/images/appdevframe.svg";
import ServiceFrame from "../../components/Common/ServiceFrame";
import LatestProjects from "../../components/Common/LatestProjects";
import WorkProcessSection from "../../components/Common/WorkProcessSection";
import KeyFeatureSection from "../../components/Common/KeyFeatureSection";

// Home Component
export default function AppDev() {
  return (
    <div className="Services_AppContainer">
      <NavBar />
      <Header
        Title="APP DEVELOPMENT "
        Titlecolor="#003B7E"
        DespColor="#003B7E"
        Description="We are ready to handle your ambitious projects!"
        btn
        btnText="Get This Service"
        ImgSrc={AppDevImg}
        ImgWidth="75%"
      />
      <KeyFeatureSection />
      <WorkProcessSection />
      <ServiceFrame src={AppDevFrame} />
      <LatestProjects />
      <Footer />
    </div>
  );
}
