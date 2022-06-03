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
import { useEffect,useState } from "react";

//api import
import api from '../api/index'
// Home Component
export default function About() {
const [aboutData, setAboutData] = useState()
const [image, setImage] = useState(null);
  useEffect(() => {
    getAboutData()
  }, [])
  
  const getAboutData = async () => {
    let response;
    try {
      response = await api("get", "/about");
      const aboutdata = response?.data?.about.filter((activeuser)=>(activeuser?.active))
      let object = Object.assign({}, ...aboutdata);
      setAboutData(object)
      console.log();
      setImage(process.env.REACT_APP_SERVER_MEDIA_URL + object?.photo)
    } catch (e) {
      console.trace(e);
    }
    return;
  };

console.log(aboutData,"<>");

  return (
    <div className="AboutContainer">

      <NavBar />
      <Header
        Title={aboutData?.title}
        Description={aboutData?.description}
        ImgSrc={image}
      />
      <AboutCompany />
      <ModernAgencySection />
      <VisionSection />
      <Footer />
    </div>
  );
}
