// Init
import React from "react";
import { useState, useEffect } from "react";
import api from "../../api/index";
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
  const [services, setServices] = useState([]);
  useEffect(() => {
    getUI();
  }, []);

  const getUI = async () => {
    await api("post", "/services/getUI").then((res) => {
      setServices(res?.data?.services);
    });
  };
  return (
    <div className="Services_UiContainer">
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
      <KeyFeatureSection UxKey />
      <WorkProcessSection UxWorkProcess />
      <ServiceFrame
        src={process.env.REACT_APP_SERVER_MEDIA_URL + services.logo}
      />
      <LatestProjects />
      <Footer />
    </div>
  );
}
