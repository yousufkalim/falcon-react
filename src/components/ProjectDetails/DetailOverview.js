// Init
import React from "react";
import { Typography } from "@mui/material";
import OverView from "../../assets/images/detail_overview.png";
import AvatarImg from "../../assets/images/detail_overviewAvatar.png";
import Divider from "@mui/material/Divider";
import { Avatar } from "@mui/material";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

// Component
export default function DetailOverview(props) {
  const { i18n, t } = useTranslation();

  return (
    <>
      <div className="DetailOverview_Container">
        <div className="DetailOverview_TypoDiv">
          <div className="DetailOverview_TitleDiv">
            <Divider className="DetailOverview_TitleDivider" color={props.titleTheme || "#11A283"} />
            <Typography className="DetailOverview_Title" color={props.titleTheme || "#11A283"}>
              Overview
            </Typography>
          </div>
          <div className="DetailOverview_DespDiv">
            <Typography className="DetailOverview_Desp">
              {t(
                props.desp ||
                  "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself actual teachings of the great explorer of the truth, the master-builder of human happiness."
              )}
            </Typography>
          </div>
          <div className="DetailOverview_ClientContainer">
            <div className="DetailOverview_ClientDiv">
              <div className="DetailOverview_ClientTitleDiv">
                <Divider className="DetailOverview_ClientTitleDivider" color="#7A7A7A" />
                <Typography className="DetailOverview_ClientTitle">Client Details</Typography>
              </div>
              <div className="DetailOverview_AvatarDiv">
                <Avatar className="DetailOverview_Avatar" sx={{ width: 70, height: 70 }} src={props.AvatarSrc || AvatarImg} />
                <div className="DetailOverview_NameDiv">
                  <Typography className="DetailOverview_Name" color={props.nameColor || "#2FAD93"}>
                    {props.name || "DDS Formation"}
                  </Typography>
                  <Typography className="DetailOverview_Location">{props.location || "France"}</Typography>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="DetailOverview_ImageDiv">
          <img className="DetailOverview_Image" src={props.src || OverView} />
        </div>
      </div>
    </>
  );
}
// props
// titleTheme
// desp
// AvatarSrc
// nameColor
// location
// src
