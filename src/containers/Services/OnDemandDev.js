// Init
import React from "react";
import { useState, useEffect } from "react";
import api from "../../api/index";
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
  const [services, setServices] = useState([]);
  useEffect(() => {
    getOnDemand();
  }, []);

  const getOnDemand = async () => {
    await api("post", "/services/getOnDemand").then((res) => {
      setServices(res?.data?.services);
    });
  };
  return (
    <div className="Services_DemandContainer">
      <NavBar />
      <Header
        Titlecolor="#003B7E"
        DespColor="#003B7E"
        Title={services.title}
        Description={services.description}
        btn
        btnText="More information"
        ImgSrc={process.env.REACT_APP_SERVER_MEDIA_URL + services.photo}
      />
      <OurDevelopers />
      <DeveloperWorkProcess />
      <ServiceFrame
        src={process.env.REACT_APP_SERVER_MEDIA_URL + services.logo}
      />
      <LatestProjects />
      <Footer />
    </div>
  );
}
