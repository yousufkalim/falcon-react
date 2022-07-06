import React, { useState, useEffect } from "react";
import { Typography } from "@mui/material";
import BasicModal from "./BasicModal";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function LatestProjectsCard(props) {
  const { i18n, t } = useTranslation();
  const [desp, setDesp] = useState();

  useEffect(() => {
    setDesp(t(props?.hoverDesp));
  }, [props?.hoverDesp]);

  return (
    <div className="SliderProject">
      <div
        className={props.HoverDetailLite ? "HoverDetailLite" : "HoverDetail"}
      >
        <img className="hoverDivLogo" src={props.LogoSrc} />

        <Typography className="HoverDivTypo">
          {/* {t(props.hoverDesp)} */}
          {t(desp?.length > 150 ? desp.slice(0, 150) + "..." : desp)}
        </Typography>
        <button
          className="HoverDivBtnDark"
          style={{
            background: props.btnBackground ? props.btnBackground : "#F8F8F8",
          }}
        >
          <Link className="HoverDivBtnLink" to={props.to}>
            {t("View More")}
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
