import { Typography } from "@mui/material";
import React from "react";
import Tick1 from "../../assets/images/MA1.svg";
import Tick2 from "../../assets/images/MA2.svg";
import Tick3 from "../../assets/images/MA3.svg";
import AgencyArrow from "../../assets/images/AgencyArrow.svg";

export default function ModernAgencySection() {
  return (
    <>
      <div className="ModernAgencyDiv">
        <div className="AgencyTypo">
          <Typography
            sx={{ fontSize: "1.5rem", fontWeight: "800", color: "#FFF" }}
          >
            We Are Modern IT Agency
          </Typography>
          <Typography
            sx={{
              fontSize: ".8rem",
              fontWeight: "500",
              color: "#F8F8F8",
              opacity: "80%",
            }}
          >
            Accessible price, with no compromise on the Quality!
          </Typography>
        </div>
        <div className="HistorySumary">
          <div className="HistoryMain">
            <div className="HistoryDiv">
              <div className="HistoryImgDiv">
                <img className="HistoryImg" src={Tick1} />
              </div>
              <div className="ArrowMain">
                <img className="ArrowImg" src={AgencyArrow} />
              </div>
            </div>
            <div className="HistoryTypoDiv">
              <Typography className="HistoryTypoH">8</Typography>
              <Typography className="HistoryTypoP">
                Years of Excellence
              </Typography>
            </div>
          </div>
          <div className="HistoryMain">
            <div className="HistoryDiv">
              <div className="HistoryImgDiv">
                <img className="HistoryImg" src={Tick2} />
              </div>
              <div className="ArrowMain">
                <img className="ArrowImg" src={AgencyArrow} />
              </div>
            </div>
            <div className="HistoryTypoDiv">
              <Typography className="HistoryTypoH">85</Typography>
              <Typography className="HistoryTypoP">
                Successfull Projects
              </Typography>
            </div>
          </div>
          <div className="HistoryMain">
            <div className="HistoryDiv">
              <div className="HistoryImgDiv">
                <img className="HistoryImg" src={Tick3} />
              </div>
              <div className="ArrowMain">
                <img className="ArrowImg" src={AgencyArrow} />
              </div>
            </div>
            <div className="HistoryTypoDiv">
              <Typography className="HistoryTypoH">100%</Typography>
              <Typography className="HistoryTypoP">
                Client satisfication
              </Typography>
            </div>
          </div>
          <div className="HistoryMain_Last">
            <div className="HistoryDiv">
              <div className="HistoryImgDiv Last_icon">
                <img className="HistoryImg " src={Tick2} />
              </div>
            </div>
            <div className="HistoryTypoDiv_Last">
              <Typography className="HistoryTypoH">4</Typography>
              <Typography className="HistoryTypoP">
                Office Loocations
              </Typography>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
