// Init
import React from "react";
import { Button, Typography } from "@mui/material";
import OverView from "../../assets/images/detail_overview.png";
import PP_Demo from "../../assets/images/pp_demo.png";
import Divider from "@mui/material/Divider";
import { Avatar } from "@mui/material";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

// Component
export default function DetailServiceDetailDemo(props) {
  return (
    <>
      <div className='DetailDemo_Container'>
        <div className='DetailDemo_MainDiv'>
          <div className='DetailDemo_Typo'>
            <div className='DetailDemo_TitleDiv'>
              <Typography className='DetailDemo_Title' color={props.titleColor || "#2FAD93"}>
                {props.title || "Permispop."}
              </Typography>
              <Divider className='DetailDemo_Divider' color={props.titleColor || "#2FAD93"} />
            </div>
            <div className='DetailDemo_DespDiv'>
              <Typography className='DetailDemo_Desp'>
                {props.desp ||
                  "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth"}
              </Typography>
            </div>
            <div className='DetailDemo_BtnDiv'>
              <a href={props.to}>
                <button
                  className='DetailDemo_Btn'
                  style={{
                    background: props.btnTheme ? props.btnTheme : "#FFA333",
                  }}
                >
                  {props.btnText || "REQUEST A FREE DEMO NOW"}
                </button>
              </a>
            </div>
          </div>
          <div className='DetailDemo_ImgContainer'>
            <div
              className={
                props.DetailDemo_SquareDiv ? "DetailDemo_SquareDiv" : "DetailDemo_RoundDiv"
              }
              style={{
                background: props.theme ? props.theme : "#FFA333",
              }}
            >
              <img className='DetailDemo_Img' src={props.src || PP_Demo} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
// props
// titleColor
// title
// desp
// btnTheme
// btnText
// DetailDemo_SquareDiv
// DetailDemo_RoundDiv
// theme
// src
