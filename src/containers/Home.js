// Init
import React from "react";
//Importing core
import { useState, useEffect } from "react";
import api from "../api/index";
// Importing Components
import NavBar from "../components/Common/NavBar";
import Header from "../components/Common/Header";
import ServiceProvided from "../components/Common/ServiceProvided";
import LatestProjects from "../components/Common/LatestProjects";
import AboutSection from "../components/Common/AboutSection";
import ClientSection from "../components/Common/ClientSection";
import ReviewSection from "../components/Common/ReviewsSection";
import BlogSection from "../components/Common/BlogSection";
import ContactUsSection from "../components/Common/ContactUsSection";
import LocationSection from "../components/Common/LocationSection";
import HeaderImg from "../assets/images/HeaderImg.svg";
import Footer from "../components/Common/Footer";
// Home Component
export default function Home() {
  const [aboutData, setAboutData] = useState({});
  useEffect(() => {
    getHome();
  }, []);

  const getHome = async () => {
    await api("get", "/homes").then((res) => {
      setAboutData(res?.data?.home);
    });
  };
  return (
    <div className="HomeContainer">
      <NavBar />
      <Header
        Title={aboutData?.header_heading}
        Description={aboutData?.header_subheading}
        btn
        ImgSrc={process.env.REACT_APP_SERVER_MEDIA_URL + aboutData?.header_img}
        btnText="GET A FREE QUOTE"
        chatIcons
      />
      {/* {aboutData?.map.} */}
      <ServiceProvided
        heading={aboutData?.service_heading}
        sub_heading={aboutData?.service_subheading}
      />
      <LatestProjects
        ProjectsSummary
        heading={aboutData?.project_heading}
        sub_heading={aboutData?.project_subheading}
        total_years={aboutData?.total_years}
        total_customers={aboutData?.total_customers}
        total_projects={aboutData?.total_projects}
      />
      <AboutSection
        heading={aboutData?.about_heading}
        sub_heading={aboutData?.about_subheading}
        title={aboutData?.about_title}
        description={aboutData?.about_description}
        total_years={aboutData?.total_years}
        total_customers={aboutData?.total_customers}
        total_projects={aboutData?.total_projects}
        total_offices={aboutData?.total_offices}
        about_img={aboutData?.about_img}
      />
      <ClientSection
        heading={aboutData?.partner_heading}
        sub_heading={aboutData?.partner_subheading}
      />
      <ReviewSection
        heading={aboutData?.client_heading}
        sub_heading={aboutData?.client_subheading}
      />
      <BlogSection
        heading={aboutData?.article_heading}
        sub_heading={aboutData?.article_heading}
      />
      <ContactUsSection
        heading={aboutData?.contact_heading}
        sub_heading={aboutData?.contact_subheading}
        description={aboutData?.about_description}
        meeting_link={aboutData?.meeting_link}
        contact_email={aboutData?.contact_email}
      />
      <LocationSection
        heading={aboutData?.office_heading}
        sub_heading={aboutData?.office_subheading}
      />
      <Footer />
    </div>
  );
}
