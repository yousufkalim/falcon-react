// Init
import React from "react";
import { useState, useEffect } from "react";
import api from "../../api/index";
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
  const [services, setServices] = useState([]);
  useEffect(() => {
    getWebDev();
  }, []);

  const getWebDev = async () => {
    await api("post", "/services/getWebDev").then((res) => {
      setServices(res?.data?.services);
    });
  };
  return (
    <div className="Services_WebContainer">
      <NavBar />
      <Header
        Title={services?.title}
        Titlecolor="#003B7E"
        Description={services.description}
        DespColor="#003B7E"
        btn
        btnText="More information"
        ImgSrc={process.env.REACT_APP_SERVER_MEDIA_URL + services.photo}
      />
      <KeyFeatureSection />
      <WorkProcessSection />
      <ServiceFrame />
      <LatestProjects />
      <Footer />
    </div>
  );
}
