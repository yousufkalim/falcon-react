// Init
import React from "react";

// Importing Components
import NavBar from "../../components/Common/NavBar";
import Header from "../../components/Common/Header";
import Footer from "../../components/Common/Footer";
import UiDevImg from "../../assets/images/uidevImg.svg";
import UiDevFrame from "../../assets/images/uidevframe.svg";
import ServiceFrame from "../../components/Common/ServiceFrame";
import LatestProjects from "../../components/Common/LatestProjects";
import WorkProcessSection from "../../components/Common/WorkProcessSection";
import KeyFeatureSection from "../../components/Common/KeyFeatureSection";

// Home Component
export default function UiDev() {
  return (
    <div>
      <NavBar />
      <Header
        Title="Ui/Ux DEVELOPMENT "
        Description="We are ready to handle your ambitious projects!"
        btn
        btnText="Get This Service"
        ImgSrc={UiDevImg}
      />
      <KeyFeatureSection UxKey />
      <WorkProcessSection UxWorkProcess />
      <ServiceFrame src={UiDevFrame} />
      <LatestProjects />
      <Footer />
    </div>
  );
}
