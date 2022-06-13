import React, { useState, useEffect } from "react";
import api from "../../api/index";
import SectionHeader from "../Common/SectionHeader";
import DeveloperWorkCard from "../Common/DeveloperWorkCard";
import DC_1 from "../../assets/images/DC_1.png";
import DC_2 from "../../assets/images/DC_2.png";
import DC_3 from "../../assets/images/DC_3.png";
import DC_4 from "../../assets/images/DC_4.png";
import DC_5 from "../../assets/images/DC_5.png";

export default function DeveloperWorkProcess(props) {
  const [services, setServices] = useState([]);
  useEffect(() => {
    getOnDemand();
  }, []);

  const getOnDemand = async () => {
    await api("post", "/services/getSection").then((res) => {
      setServices(res?.data?.services);
    });
  };
  return (
    <>
      <div className="DeveloperWorkMain">
        <div className="DeveloperWorkHeader">
          <SectionHeader
            h1="We solve clients' projects in a simple & efficient way"
            colorH2="#003B7E"
            h2="We always follow the standard work process"
          />
        </div>
        <div className="DeveloperWorkDiv">
          {services?.map((service) => {
            return (
              <DeveloperWorkCard
                title={service.title}
                desp={service.description}
                src={process.env.REACT_APP_SERVER_MEDIA_URL + service.photo}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}
