import { Typography } from "@mui/material";
import React from "react";
export default function LocationSlides(props) {
  return (
    <div className="LocationDiv">
      <div className="LocationDiv_Typo">
        <img src={props.iconSrc} />
        <Typography className="Location_Country">{props.country}</Typography>
        <Typography className="Location_Address">{props.address}</Typography>
      </div>
      <div className="LocationDiv_Img">
        <img className="Location_Img" src={props.src} />
      </div>
    </div>
  );
}
