// Init
import React from "react";
import { useState, useEffect } from "react";
import api from "../api/index";
// Importing Components
import Header from "../components/Common/Header";
import NavBar from "../components/Common/NavBar";
import Footer from "../components/Common/Footer";
import AboutCompany from "../components/About/AboutCompany";
import VisionSection from "../components/About/VisionSection";
import ModernAgencySection from "../components/About/ModernAgencySection";
import Header_Img from "../assets/images/AboutUs_Header_Img.png";
// Home Component
export default function About() {
  const [other, setOther] = useState({});
  useEffect(() => {
    getBlog();
  }, []);

  const getBlog = async () => {
    await api("post", "/about/getOther").then((res) => {
      setOther(res?.data?.about);
    });
  };
  {
    console.log(other, "o");
  }
  return (
    <div className="AboutContainer">
      <NavBar />
      <Header
        Title={other.title}
        Description={other.description}
        ImgSrc={process.env.REACT_APP_SERVER_MEDIA_URL + other.photo}
      />
      <AboutCompany />
      <ModernAgencySection />
      <VisionSection />
      <Footer />
    </div>
  );
}
