// Init
import React from "react";
import { Typography } from "@mui/material";
import PermispopHeader from "../../assets/images/pp_header.png";
import { ReactComponent as DownArrow } from "../../assets/images/DownArrow.svg";
import Divider from "@mui/material/Divider";
// import { IoIosArrowDown } from "react-icons";
import { motion } from "framer-motion";

// Component
export default function DetailHeader(props) {
  return (
    <>
      <div
        className="DetailHeader_Container"
        style={{
          background: props.background ? props.background : "#2FAD93",
        }}
      >
        <div style={{ marginBottom: "-4px" }}>
          <img
            className="DetailHeader_Img"
            src={props.HeaderImg || PermispopHeader}
          />
          <div className="DetailHeader_Typo">
            <div className="DetailHeaderTitleDiv">
              <h1 className="DetailHeader_Title">{props.title}</h1>
              <Divider
                color={props.DividerBG || "#f8f8f8"}
                className="DetailHeader_Divider"
              />
            </div>
            <div
              className="DetailHeader_DespDiv"
              style={{
                background: props.typoBG ? props.typoBG : "#FF9A20EB",
              }}
            >
              <Divider
                color={props.DividerBG || "#f8f8f8"}
                className="DetailHeader_Divider"
              />
              <Typography className="DetailHeader_SubTitle">
                {props.subTitle}
              </Typography>

              <Typography className="DetailHeader_Desp">
                {props.desp}
              </Typography>
            </div>
          </div>
        </div>
      </div>
      <div
        className="DetailHeader_DespMob"
        style={{
          background: props.typoBG ? props.typoBG : "#FF9A20EB",
        }}
      >
        <Divider
          color={props.DividerBG || "#f8f8f8"}
          className="DetailHeader_Divider"
        />
        <Typography className="DetailHeader_SubTitle">
          {props.subTitle}
        </Typography>

        <Typography className="DetailHeader_Desp">{props.desp}</Typography>
      </div>
      <div
        className="DetailHeader_BottomDiv"
        style={{
          background: props.bottomBG ? props.bottomBG : "#2FAD93",
        }}
      >
        {/* <img src={DownArrow} /> */}
        <DownArrow
          style={{
            color: props.iconTheme ? props.iconTheme : "white",
          }}
        />
        {/* <IoIosArrowDown /> */}
      </div>
    </>
  );
}
// props
// background
// HeaderImg
// title
// DividerBG
// typoBG
// subTitle
// desp
// bottomBG
