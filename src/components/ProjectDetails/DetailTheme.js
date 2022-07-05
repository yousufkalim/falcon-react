// Init
import React from "react";
import { Grid, Typography } from "@mui/material";
import ThemeImage from "../../assets/images/theme_image.png";
import Image2 from "../../assets/images/detail_design_2.png";
import Image3 from "../../assets/images/detail_design_3.png";
import theme1 from "../../assets/images/ezbox_theme1.png";
import theme2 from "../../assets/images/ezbox_theme2.png";
import theme3 from "../../assets/images/ezbox_theme3.png";
import Divider from "@mui/material/Divider";
import { Avatar } from "@mui/material";
import { motion } from "framer-motion";

// Component
export default function DetailTheme(props) {
  return (
    <>
      <div className="DetailTheme_Container">
        <div>
          <div className="DetailTheme_TitleDiv">
            <Divider
              className="DetailTheme_TitleDivider"
              color={props.titleTheme || "#11A283"}
            />
            <Typography
              className="DetailTheme_Title"
              color={props.titleTheme || "#11A283"}
            >
              {props.title || "COLOR THEME & ILLUSTRATION"}
            </Typography>
          </div>
          <div className="DetailTheme_DespDiv">
            <Typography className="DetailTheme_Desp">
              {props.desp ||
                "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but becaus"}
            </Typography>
          </div>
        </div>
        <div className="DetailTheme_BoxContainer">
          <div className="DetailTheme_BoxDiv">
            {props.Theme1 && (
              <div
                className="DetailTheme_Box"
                style={{
                  background: props.Theme1 ? props.Theme1 : "#FFA333",
                }}
              ></div>
            )}
            {props.Theme2 && (
              <div
                className="DetailTheme_Box"
                style={{
                  background: props.Theme1 ? props.Theme2 : "#11A283",
                }}
              ></div>
            )}
            {props.Theme3 && (
              <div
                className="DetailTheme_Box"
                style={{
                  background: props.Theme1 ? props.Theme3 : "#00654F",
                }}
              ></div>
            )}
            {props.Theme4 && (
              <div
                className="DetailTheme_Box"
                style={{
                  background: props.Theme1 ? props.Theme4 : "#454238",
                }}
              ></div>
            )}
            {props.Theme5 && (
              <div
                className="DetailTheme_Box"
                style={{
                  background: props.Theme1 ? props.Theme5 : "#F6FAFB",
                }}
              ></div>
            )}
            {props.Theme6 && (
              <div
                className="DetailTheme_Box"
                style={{
                  background: props.Theme1 ? props.Theme6 : "#C8CFD0",
                }}
              ></div>
            )}
            {props.Theme7 && (
              <div
                className="DetailTheme_Box"
                style={{
                  background: props.Theme1 ? props.Theme7 : "#C8CFD0",
                }}
              ></div>
            )}
          </div>
        </div>
        {props.centerImage && (
          <div>
            <img style={{ width: "100%" }} src={props.src} />
          </div>
        )}
        {props.Images && (
          <div
            style={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <img style={{ width: "30%", marginRight: "1%" }} src={props.src1} />
            <img style={{ width: "30%", marginRight: "1%" }} src={props.src2} />
            <img style={{ width: "30%", marginRight: "1%" }} src={props.src3} />
          </div>
        )}
      </div>
      {props.fullscreen && (
        <div>
          <img style={{ width: "100%" }} src={props.src} />
        </div>
      )}
      {props.overlap && (
        <div
          style={{ width: "100%", display: "flex", justifyContent: "flex-end" }}
        >
          <div style={{ width: "50%", margin: "0 5% -3% 0" }}>
            <img style={{ width: "100%" }} src={props.src} />
          </div>
        </div>
      )}
      {props.inline && (
        <div
          style={{ width: "100%", display: "flex", justifyContent: "flex-end" }}
        >
          <div style={{ width: "30%", margin: "-15% 5% 0 0" }}>
            <img style={{ width: "100%" }} src={props.src} />
          </div>
        </div>
      )}
      {props.double && (
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              width: "80%",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <div style={{ width: "40%" }}>
              <img style={{ width: "100%" }} src={props.src1} />
            </div>
            <div style={{ width: "40%" }}>
              <img style={{ width: "100%" }} src={props.src2} />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
// props
// title
// titleTheme
// desp
// Theme1
// Theme2
// Theme3
// Theme4
// Theme5
// Theme6
// Theme7
// centerImage
// fullscreen
// src
// Images
// src1
// src2
// src3
