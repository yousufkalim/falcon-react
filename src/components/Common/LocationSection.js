import { Typography } from "@mui/material";
import React from "react";
import SectionHeader from "../Common/SectionHeader";
import Pak from "../../assets/images/location_pak.png";
import Pak_Icon from "../../assets/images/pak_icon.svg";
import London from "../../assets/images/location_london.png";
import Paris_Icon from "../../assets/images/paris_icon.svg";
import US from "../../assets/images/location_us.png";
import US_Icon from "../../assets/images/us_icon.svg";
import UAE from "../../assets/images/UAE.png";
import UAE_Icon from "../../assets/images/UAE_Icon.svg";
import AwesomeSlider from 'react-awesome-slider';
export default function LocationSection(props) {
  return (
    <>
      <div className="LocationSectionMain">
        <div className="LocationSectionHeader">
          <SectionHeader
            colorH2="#0F52BA"
            h1="WHERE YOU CAN MEET"
            h2="Our Offices"
          />
        </div>
        <div className="LocationSliderDiv">

  <AwesomeSlider
  className="Awesome_Slider"
    play={true}
    cancelOnInteraction={false}
    interval={6000}
  >
    <div className="LocationDiv">
              <div className="LocationDiv_Typo">
                <img src={Pak_Icon} />

                <Typography className="Location_Country">Pakistan</Typography>
                <Typography className="Location_Address">
                  8-A, Iqbal Avenue Cooperative Housing Society - Phase I
                  Lahore, Punjab
                </Typography>
              </div>
              <div className="LocationDiv_Img">
                <img className="Location_Img" src={Pak} />
              </div>
            </div>
            <div className="LocationDiv">
              <div className="LocationDiv_Typo">
                <img src={Paris_Icon} />

                <Typography className="Location_Country">France</Typography>
                <Typography className="Location_Address">
                  53 Avenue Victor Hugo 94290 Villeneuve-Le-Roi
                </Typography>
              </div>
              <div className="LocationDiv_Img">
                <img className="Location_Img" src={London} />
              </div>
            </div>
            <div className="LocationDiv">
              <div className="LocationDiv_Typo">
                <img src={US_Icon} />

                <Typography className="Location_Country">
                  United States
                </Typography>
                <Typography className="Location_Address">
                  4201 31st St S, Arlington, VA 22206
                </Typography>
              </div>
              <div className="LocationDiv_Img">
                <img className="Location_Img" src={US} />
              </div>
            </div>
            <div className="LocationDiv">
              <div className="LocationDiv_Typo">
                <img src={UAE_Icon} />

                <Typography className="Location_Country">UAE</Typography>
                <Typography className="Location_Address">
                  Mazyad Mall, Tower 2 - 4th Floor, Office 425, Abu Dhabi, UAE
                </Typography>
              </div>
              <div className="LocationDiv_Img">
                <img className="Location_Img" src={UAE} />
              </div>
            </div>
  </AwesomeSlider>
        </div>
      </div>
    </>
  );
}
