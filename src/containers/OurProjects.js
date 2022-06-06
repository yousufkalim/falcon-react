// Init
import React from "react";

// Importing Components
import NavBar from "../components/Common/NavBar";
import Header from "../components/Common/Header";
import HeaderImg from "../assets/images/ProjectHeaderImg.svg";
import LabTabs from "../components/Common/OurProjectTabs";
import Footer from "../components/Common/Footer";

// Home Component
export default function OurProjects() {
  return (
    <div className="ProjectsContainer">

      <NavBar />
      <Header
        ColorTitle="ALL PROJECTS "
        Title="START BY A SIMPLE IDEA LET US TAKE CARE OF THE REST!"
        Description="Falcon Consulting had the opportunity to work on  various type of projects for its clients. 
        We implemented an efficient process in order to deliver qualitative work on time. "
        ImgSrc={HeaderImg}
        HeaderParaClassName
      />
      <LabTabs />
      <Footer />
    </div>
  );
}
