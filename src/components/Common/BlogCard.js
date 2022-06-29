import { Typography } from "@mui/material";
import React from "react";
import Blog1 from "../../assets/images/Blog1.svg";
export default function BlogCard(props) {
  return (
    <>
      <div className="BlogCardMain">
        <div>
          <img
            style={{ objectFit: "cover", height: "100%", width: "100%" }}
            src={props.src || Blog1}
          />
        </div>

        <Typography
          sx={{
            fontSize: "70%",
            color: "#52525B",
            fontWeight: "400",
            margin: "2% 0%",
          }}
        >
          {props.date}
        </Typography>
        <Typography className="BlogCardTitle">{props.title}</Typography>
      </div>
    </>
  );
}
