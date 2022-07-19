// Init
import React from "react";

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
  return (
    <div className='AboutContainer'>
      <NavBar />
      <Header
        Title='Our Goal Is To Exceed Your Expectations '
        // Description='Healthy, skilled and ambitious team'
        Description='Trustful, skilled and ambitious team of developers, UI/UX designers, project managers and quality testers. Our aim is to build healthy partnerships with our clients, in which respect is the central value. Our main difference with other software houses is that we are committed to delivering the last mile, without any compromise.'
        ImgSrc={Header_Img}
      />
      <AboutCompany />
      <ModernAgencySection />
      <VisionSection />
      <Footer />
    </div>
  );
}
