import React, { useState, useEffect } from "react";
import api from "../../api/index";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import SectionHeader from "../Common/SectionHeader";
import Agile from "../../assets/images/od_agile.png";
import Experienced from "../../assets/images/od_experienced.png";
import Trained from "../../assets/images/od_trained.png";
import Dedicated from "../../assets/images/od_dedicated.png";
import DeveloperSlider from "../Common/DeveloperSlider";

export default function OurDevelopers(props) {
  const [services, setServices] = useState([]);
  useEffect(() => {
    getSlider();
  }, []);

  const getSlider = async () => {
    await api("post", "/services/getSlider").then((res) => {
      setServices(res?.data?.services);
    });
  };
  return (
    <>
      <div className="OurDevelopersMain">
        <div className="OurDevelopersHeader">
          <SectionHeader
            colorH2="#0F52BA"
            h2="OUR DEVELOPERS ARE"
            decription="OUR DEVELOPERS FOR YOUR PROJECTS"
            colorDesp="#404040B2"
          />
        </div>
        <div className="DeveloperSliderDiv">
          <Carousel
            className="DeveloperCarouselDiv"
            autoPlay
            infiniteLoop
            showIndicators={false}
            showStatus={false}
            swipeable={false}
          >
            {services?.map((service) => {
              return (
                <DeveloperSlider
                  heading={service.title}
                  desp={service.description}
                  src={process.env.REACT_APP_SERVER_MEDIA_URL + service.photo}
                />
              );
            })}
          </Carousel>
        </div>
      </div>
    </>
  );
}
