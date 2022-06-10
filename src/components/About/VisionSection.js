import React from "react";
import { useState, useEffect } from "react";
import api from "../../api/index";
import SectionHeader from "../Common/SectionHeader";
import VisionImg from "../../assets/images/visionImg.svg";
import { Typography } from "@mui/material";
export default function VisionSection() {
  const [company, setCompany] = useState({});
  const [list, setList] = useState([]);
  useEffect(() => {
    getCompany();
  }, []);

  const getCompany = async () => {
    await api("post", "/about/getVision").then((res) => {
      setCompany(res?.data?.about);
      const li = res?.data?.about.description.split(".");
      setList(li);
      console.log(li, "li");
    });
  };
  {
    console.log(company, "co");
  }
  return (
    <>
      <div className="VisionDiv">
        <div className="VisionTypo">
          <SectionHeader
            LeftSectionHeader
            h1="We believe our vision"
            h2="Our Vision"
            decription={company?.title}
            colorDesp="black"
          />
          <div className="VisionList">
            <ul style={{ marginLeft: "5%" }}>
              {list.map((li) => {
                return <li>{li}</li>;
              })}
            </ul>
          </div>
        </div>
        <div className="VisionImgDiv">
          <img
            className="VisionImg"
            src={process.env.REACT_APP_SERVER_MEDIA_URL + company.photo}
          />
        </div>
      </div>
    </>
  );
}
