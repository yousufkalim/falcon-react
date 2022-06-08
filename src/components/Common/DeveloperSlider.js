import React from "react";
import { Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export default function DeveloperSlider(props) {
  return (
    <>
      <div className="DeveloperDiv">
        <div className="DeveloperDiv_Img">
          <img className="Developer_Img" src={props.src} />
        </div>
        <div className="DeveloperDiv_Typo">
          <Typography className="DeveloperTypo_H">{props.heading}</Typography>
          <Typography className="DeveloperTypo_Desp">{props.desp}</Typography>
          <Button className="DeveloperTypo_Btn" variant="outlined">
            <Link to={`/contactus`}>{props.btnText || "Contact us"}</Link>
          </Button>
        </div>
      </div>
    </>
  );
}
