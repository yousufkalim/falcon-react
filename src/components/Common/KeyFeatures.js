import React from "react";
import { Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
export default function KeyFeatures(props) {
  const { i18n, t } = useTranslation();
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          marginBottom: "10%",
        }}
      >
        <img style={{ width: "15%", margin: "3% 0%" }} src={props.src} />
        <Typography
          sx={{ fontWeight: "800", margin: "5% 0%", fontSize: ".9rem" }}
        >
          {t(props.title)}
        </Typography>
        <Typography
          sx={{
            fontWeight: "400",
            fontSize: ".7rem",
            width: "50%",
            opacity: "80%",
          }}
        >
          {t(props.desp)}
        </Typography>
      </div>
    </>
  );
}
