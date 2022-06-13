// Init
import React from "react";
import { useState, useEffect } from "react";
import api from "../../api/index";
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
  const [services, setServices] = useState([]);
  useEffect(() => {
    getSoftware();
  }, []);

  const getSoftware = async () => {
    await api("post", "/services/getApp").then((res) => {
      setServices(res?.data?.services);
    });
  };
  return (
    <div className="Services_AppContainer">
      <NavBar />
      <Header
        Title={services.title}
        Titlecolor="#003B7E"
        DespColor="#003B7E"
        Description={services.description}
        btn
        btnText="Get This Service"
        ImgSrc={process.env.REACT_APP_SERVER_MEDIA_URL + services.photo}
        ImgWidth="75%"
      />
      <KeyFeatureSection />
      <WorkProcessSection />
      <ServiceFrame
        src={process.env.REACT_APP_SERVER_MEDIA_URL + services.logo}
      />
      <LatestProjects />
      <Footer />
    </div>
  );
}
