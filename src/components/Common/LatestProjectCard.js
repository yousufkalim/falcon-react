import React from "react";
import { Typography } from "@mui/material";
import BasicModal from "./BasicModal";
import { Link } from "react-router-dom";

export default function LatestProjectsCard(props) {
  return (
    <div className="SliderProject">
      <div
        className={props.HoverDetailLite ? "HoverDetailLite" : "HoverDetail"}
      >
        <img className="hoverDivLogo" src={props.LogoSrc} />

        <Typography className="HoverDivTypo">
          {/* {props.hoverDesp} */}
          {props?.hoverDesp?.length > 150
            ? props?.hoverDesp.slice(0, 150) + "..."
            : props?.hoverDesp}
        </Typography>
        <button
          className="HoverDivBtnDark"
          style={{
            background: props.btnBackground ? props.btnBackground : "#F8F8F8",
          }}
        >
          <Link className="HoverDivBtnLink" to={props.to}>
            View More
          </Link>
        </button>
      </div>
      <img className="SliderImgs" src={props.src} alt="1" />
    </div>
  );
}
// LogoSrc = {props.LogoSrc}
// Heading = {props.Heading}
// Dividerwidth = {props.Dividerwidth}
// ModalBtnTheme ={props.ModalBtnTheme}
// DividerTheme = {props.DividerTheme}
// para1 = {props.para1}
// para2 = {props.para2}
// para3 = {props.para3}
// para4 = {props.para4}
// para5 = {props.para5}
// para6 = {props.para6}
// para7 = {props.para7}
// para8 = {props.para8}
