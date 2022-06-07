import React from "react";
import SectionHeader from "../Common/SectionHeader";
import VisionImg from "../../assets/images/visionImg.svg";
import { Typography } from "@mui/material";
export default function VisionSection() {
  return (
    <>
      <div className="VisionDiv">
        <div className="VisionTypo">
          <SectionHeader
            LeftSectionHeader
            h1="We believe our vision"
            h2="Our Vision"
            decription="We strongly believe that talent and skills has no border. By providing a great working environment in our offices, we allow our partners to benefit from competitive pricing with a qualitative work. "
            colorDesp="black"
          />
          <div className="VisionList">
            <ul style={{ marginLeft: "5%" }}>
              <li>IN-HOUSE TEAM</li>
              <li>TECHNOLOGIES</li>
              <li>USER-FOCUSED PROCESS</li>
              <li>SMOOTH COMMUNICATION</li>
              <li>6 YEARS' EXPERIENCE</li>
              <li>FULL FLEXIBILITY</li>
              <li>HIGH QUALITY CODE</li>
              <li>TRANSPARENCY</li>
            </ul>
          </div>
        </div>
        <div className="VisionImgDiv">
          <img className="VisionImg" src={VisionImg} />
        </div>
      </div>
    </>
  );
}
