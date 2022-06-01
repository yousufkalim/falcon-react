// Init
import React from "react";

// Importing Components
import NavBar from "../../components/Common/NavBar";
import Header from "../../components/Common/Header";
import Footer from "../../components/Common/Footer";
import SoftwareDevImg from "../../assets/images/softwaredevImg.svg";
import SoftDevFrame from "../../assets/images/softdevframe.svg";
import ServiceFrame from "../../components/Common/ServiceFrame";
import LatestProjects from "../../components/Common/LatestProjects";
import WorkProcessSection from "../../components/Common/WorkProcessSection";
import KeyFeatureSection from "../../components/Common/KeyFeatureSection";

// Home Component
export default function SoftwareDev() {
  return (
    <div>
      <NavBar />
      <Header
        Title="SoftWare DEVELOPMENT "
        Description="We are ready to handle your ambitious projects!"
        btn
        btnText="Get This Service"
        ImgSrc={SoftwareDevImg}
      />
      <KeyFeatureSection />
      <WorkProcessSection />
      <ServiceFrame src={SoftDevFrame} />
      <LatestProjects />
      <Footer />
    </div>
  );
}
