// Init
import React from "react";

// Importing Components
import NavBar from "../../components/Common/NavBar";
import Header from "../../components/Common/Header";
import Footer from "../../components/Common/Footer";
import DemandDevImg from "../../assets/images/demanddevImg.svg";
import DemandDevFrame from "../../assets/images/demanddevframe.svg";
import ServiceFrame from "../../components/Common/ServiceFrame";
import LatestProjects from "../../components/Common/LatestProjects";
import OurDevelopers from "../../components/Common/OurDevelopers";
import DeveloperWorkProcess from "../../components/Common/DeveloperWorkProcess";

// Home Component
export default function OnDemandDev() {
  return (
    <div className='Services_DemandContainer'>
      <NavBar />
      <Header
        Titlecolor='#003B7E'
        DespColor='#003B7E'
        Title='Skilled Developers for your Projects'
        Description='Are you in need of developers for short of long term tasks ? Our all-inclusive approach will allow you to get the best match !'
        btn
        btnText='More information'
        ImgSrc={DemandDevImg}
      />
      <OurDevelopers />
      <DeveloperWorkProcess />
      <ServiceFrame src={DemandDevFrame} />
      <LatestProjects />
      <Footer />
    </div>
  );
}
