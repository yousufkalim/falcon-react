// Init
import React from "react";
import { Grid, Typography } from "@mui/material";
import ChatIcon from "../../assets/images/whatsappIcon.svg";
import WhatsappIcon from "../../assets/images/ChatIcon.svg";
import Calendly from "../../assets/images/calendly.svg";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import { motion } from "framer-motion";

// Component
export default function Header(props) {
  return (
    <Grid
      className={props.DetailHeader ? "DetailHeader" : "HeaderMain"}
      container
      spacing={1}
    >
      <Grid xs={12} sm={12} md={5}>
        <motion.div
          className="HeaderTypo"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <Typography
            className={
              props.HeaderTitleClassName
                ? "HeaderTitleClassName"
                : "HeaderHeading"
            }
            style={props.TitleStyle}
            color={props.Titlecolor || "#282828"}
          >
            <span style={{ color: "#003B7E" }}>{props.ColorTitle}</span>
            {props.Title}
          </Typography>
          <Divider
            width={props.Dividerwidth || "17%"}
            color={props.DividerBG || "#003B7E"}
            sx={{
              height: "5px",
              borderRadius: "4px",
              margin: "4% 0",
            }}
          />
          <Typography
            className={
              props.HeaderParaClassName ? "HeaderPara_Style" : "HeaderPara"
            }
            style={props.ParaStyle}
          >
            {props.Description}
          </Typography>
          {props.btn && (
            <Button
              // color="red"
              variant={props.btnVariant || "outlined"}
              className={props.btnClassName ? "btnClassName" : "HeaderBtn"}
            >
              {props.btnText}
            </Button>
          )}
        </motion.div>
      </Grid>
      <Grid
        className={props.DetailHeaderImg ? "DetailHeaderImg" : "HeaderImg"}
        xs={12}
        sm={12}
        md={7}
      >
        <motion.img
          initial={{ x: 300 }}
          whileInView={{ x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          alt={props.ImgAlt || "Header"}
          src={props.ImgSrc}
          style={props.ImgStyle}
          width={props.ImgWidth || "95%"}
        />
        {props.chatIcons ? (
          <div className="ChatIconsDiv">
            <a href="https://wa.me/03135098197">
              <img className="ChatIconImg" alt="whatsapp" src={WhatsappIcon} />
            </a>
            <a href={`/contactus`}>
              <img className="ChatIconImg" alt="chat" src={ChatIcon} />
            </a>
            <a href={`/contactus`}>
              <img className="ChatIconImg" alt="Calendly" src={Calendly} />
            </a>
          </div>
        ) : null}
      </Grid>
    </Grid>
  );
}
