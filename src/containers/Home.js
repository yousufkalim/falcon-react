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
  const [aboutData, setAboutData] = useState("");
  useEffect(() => {
    getAbout();
  }, []);

  const getAbout = async () => {
    await api("post", "/about/getActive").then((res) => {
      setAboutData(res?.data?.about);
    });
  };
  return (
    <div className="HomeContainer">
      <NavBar />
      <Header
        Title={aboutData?.title}
        Description={aboutData?.description}
        btn
        ImgSrc={process.env.REACT_APP_SERVER_MEDIA_URL + aboutData?.photo}
        btnText="GET A FREE QUOTE"
        chatIcons
      />
      <ServiceProvided />
      <LatestProjects ProjectsSummary />
      <AboutSection />
      <ClientSection />
      <ReviewSection />
      <BlogSection />
      <ContactUsSection />
      <LocationSection />
      <Footer />
    </div>
  );
}
