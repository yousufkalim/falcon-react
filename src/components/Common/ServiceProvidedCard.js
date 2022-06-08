import { Typography } from "@mui/material";
import React from "react";
import MobileApp from "../../assets/images/MobileApp.svg";
import ArrowForward from "../../assets/images/arrowForward.svg";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function ServiceProvidedCard(props) {
  return (
    <>
      {props.verticleCard ? (
        <motion.div
          className="ServiceProvided_VerticleCard"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <div className="ServiceProvided_VerticleCardTypo">
            <div className="ServiceProvided_SubCardTypo">
              <Typography className="ServiceProvided_CardTitle">
                {props.CardTitle}
              </Typography>
              <Link to={props.to}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    cursor: "pointer",
                  }}
                >
                  <button className="ServiceProvided_CardBtn">
                    {props.BtnText ? props.BtnText : "Get Details"}
                  </button>
                  <img
                    style={{
                      marginLeft: "2%",
                    }}
                    src={ArrowForward}
                  />
                </div>
              </Link>
            </div>
          </div>
          <div className="ServiceProvided_VerticleCardImgDiv">
            <img
              className="ServiceProvided_VerticleCardImg"
              src={props.CardImgSrc || MobileApp}
            />
          </div>
        </motion.div>
      ) : (
        <motion.div
          className="ServiceProvided_Card"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <div className="ServiceProvided_CardTypo">
            <div className="ServiceProvided_SubCardTypo">
              <Typography className="ServiceProvided_CardTitle">
                {props.CardTitle}
              </Typography>
              <Link to={props.to}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <button className="ServiceProvided_CardBtn">
                    {props.BtnText ? props.BtnText : "Get Details"}
                  </button>
                  <img
                    style={{
                      marginLeft: "2%",
                    }}
                    src={ArrowForward}
                  />
                </div>
              </Link>
            </div>
          </div>
          <div className="ServiceProvided_CardImgDiv">
            <img
              className="ServiceProvided_CardImg"
              src={props.CardImgSrc || MobileApp}
            />
          </div>
        </motion.div>
      )}
    </>
  );
}
