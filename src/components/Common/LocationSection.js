import { Typography } from "@mui/material";
import { useState, useEffect } from "react";
import api from "../../api/index";
import React from "react";
import SectionHeader from "../Common/SectionHeader";
// import "react-responsive-carousel/lib/styles/carousel.min.css"
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
export default function LocationSection(props) {
  const [offices, setOffices] = useState([]);

  useEffect(() => {
    getOffices();
  }, []);

  const getOffices = async () => {
    await api("get", "/offices").then((res) => {
      setOffices(res?.data?.offices);
    });
  };
  return (
    <>
      <div className="LocationSectionMain">
        <div className="LocationSectionHeader">
          <SectionHeader
            colorH2="#0F52BA"
            h1={props.heading}
            h2={props.sub_heading}
            width="5%"
          />
        </div>
        <div className="LocationSliderDiv">
          <AwesomeSlider className="Awesome_Slider">
            {offices?.map((office) => {
              return (
                <div className="LocationDiv">
                  <div className="LocationDiv_Typo">
                    <img
                      src={process.env.REACT_APP_SERVER_MEDIA_URL + office.logo}
                    />

                    <Typography className="Location_Country">
                      {office.country}
                    </Typography>
                    <Typography className="Location_Address">
                      {office.address}
                    </Typography>
                  </div>
                  <div className="LocationDiv_Img">
                    <img
                      className="Location_Img"
                      src={
                        process.env.REACT_APP_SERVER_MEDIA_URL + office.photo
                      }
                    />
                  </div>
                </div>
              );
            })}
          </AwesomeSlider>
        </div>
      </div>
    </>
  );
}
