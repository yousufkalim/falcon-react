// Init
import React from "react";
import { useState, useEffect } from "react";
import api from "../../api/index";
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
    <div className="Services_SoftwareContainer">
      <NavBar />
      <Header
        Title={services.title}
        Titlecolor="#003B7E"
        DespColor="#003B7E"
        Description={services.description}
        btn
        btnText="Get This Service"
        ImgSrc={process.env.REACT_APP_SERVER_MEDIA_URL + services.photo}
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
