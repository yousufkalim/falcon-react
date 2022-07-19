// Init
import React from "react";
import { Grid, Typography } from "@mui/material";
import AppDev from "../../assets/images/detail_appdev.png";
import Image2 from "../../assets/images/detail_design_2.png";
import Image3 from "../../assets/images/detail_design_3.png";

import Divider from "@mui/material/Divider";
import { Avatar } from "@mui/material";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

// Component
export default function DetailAppDev(props) {
  const { i18n, t } = useTranslation();

  return (
    <>
      <div className="DetailAppDev_Container">
        <div>
          <div className="DetailAppDev_TitleDiv">
            <Divider className="DetailAppDev_TitleDivider" color={props.titleTheme || "#11A283"} />
            <Typography className="DetailAppDev_Title" color={props.titleTheme || "#11A283"}>
              {props.title || "MOBILE APP DEVELOPMENT"}
            </Typography>
          </div>
          <div className="DetailAppDev_DespDiv">
            <Typography className="DetailAppDev_Desp">
              {t(
                props.desp ||
                  "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself actual teachings of the great explorer of the truth, the master-builder of human happiness."
              )}
            </Typography>
          </div>
        </div>
        {props.halfImg && (
          <div className="DetailAppDev_ImgDiv HalfImg">
            <img className="DetailAppDev_Img" src={props.halfImg || AppDev} />
          </div>
        )}
      </div>
      {props.fullImg && (
        <div className="DetailAppDev_ImgDiv">
          <img className="DetailAppDev_Img" src={props.fullImg || AppDev} />
        </div>
      )}
    </>
  );
}
// props
// titleTheme
// title
// desp
// halfImg (src Required)
// fullImg (src Required)
