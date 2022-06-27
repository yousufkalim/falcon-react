// Init
import React from "react";
import { Grid, Typography } from "@mui/material";
import Image1 from "../../assets/images/detail_design_1.png";
import Image2 from "../../assets/images/detail_design_2.png";
import Image3 from "../../assets/images/detail_design_3.png";
import Image4 from "../../assets/images/detail_kc_design1.png";
import Image5 from "../../assets/images/detail_kc_design2.png";
import Image6 from "../../assets/images/detail_kc_design3.png";

import Divider from "@mui/material/Divider";
import { Avatar } from "@mui/material";
import { motion } from "framer-motion";

// Component
export default function DetailDesign(props) {
  return (
    <>
      <div className="DetailDesign_Container">
        <div>
          <div className="DetailDesign_TitleDiv">
            <Divider
              className="DetailDesign_TitleDivider"
              color={props.titleTheme || "#11A283"}
            />
            <Typography
              className="DetailDesign_Title"
              color={props.titleTheme || "#11A283"}
            >
              {props.title || "APP UI DESIGN"}
            </Typography>
          </div>
          <div className="DetailDesign_DespDiv">
            <Typography className="DetailDesign_Desp">
              "But I must explain to you how all this mistaken idea of
              denouncing pleasure and praising pain was born and I will give you
              a complete account of the system, and expound the actual teachings
              of the great explorer of the truth "But I must explain to you how
              all this mistaken idea of denouncing pleasure and praising pain
              was born and I will give you a complete account of the system, and
              expound the actual teachings of the great explorer of the truth,
              the master-builder of human happiness. No one rejects, dislikes,
              or avoids pleasure itself, because it is pleasure, but becaus
            </Typography>
          </div>
        </div>
        {props.overlap && (
          <div className="DetailDesign_ImageContainer_Overlap">
            <div className="DetailDesign_ImgDiv_Top">
              <img
                style={{ width: "-webkit-fill-available" }}
                src={props.TopImg || Image6}
              />
            </div>
            <div className="DetailDesign_ImgDiv_Middle">
              <img
                style={{ margin: "0 3%", width: "70%" }}
                src={props.MidImg || Image5}
              />
            </div>
            <div className="DetailDesign_ImgDiv_Bottom">
              <img
                style={{ width: "-webkit-fill-available" }}
                src={props.BottomImg || Image4}
              />
            </div>
          </div>
        )}
        {props.grids && (
          <div className="DetailDesign_ImageContainer_Grids">
            <Grid container spacing={1}>
              <Grid
                xs={12}
                md={4}
                sx={{
                  padding: "1%",
                }}
              >
                <img
                  className="DetailDesign_Image"
                  src={props.src1 || Image1}
                />
              </Grid>
              <Grid
                xs={12}
                md={8}
                sx={{
                  padding: "1%",
                }}
              >
                <img
                  className="DetailDesign_Image"
                  src={props.src2 || Image2}
                />
              </Grid>
            </Grid>
            <div className="DetailDesign_Image_SubDiv">
              <Grid container spacing={1} xs={12} md={8}>
                <Grid
                  xs={12}
                  md={6}
                  sx={{
                    padding: "1%",
                  }}
                >
                  <img
                    className="DetailDesign_Image"
                    src={props.src3 || Image1}
                  />
                </Grid>
                <Grid
                  xs={12}
                  md={6}
                  sx={{
                    padding: "1%",
                  }}
                >
                  <img
                    className="DetailDesign_Image"
                    src={props.src4 || Image1}
                  />
                </Grid>
                <Grid
                  xs={12}
                  sx={{
                    padding: "1%",
                  }}
                >
                  <img
                    className="DetailDesign_Image"
                    src={props.src5 || Image2}
                  />
                </Grid>
              </Grid>
              <Grid container spacing={1} xs={12} md={4}>
                <Grid
                  xs={12}
                  sx={{
                    padding: "2%",
                  }}
                >
                  <img
                    className="DetailDesign_Image"
                    src={props.src6 || Image3}
                  />
                </Grid>
              </Grid>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
// props
// titleTheme
// title
// overlap
// TopImg
// MidImg
// BottomImg
// grids
// src1
// src2
// src3
// src4
// src5
// src6
