// Init
import { Typography } from "@mui/material";
import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
// Importing Components

// Home Component
export default function BlogHeader() {
  const { i18n, t } = useTranslation();

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className='BlogHeaderMain'
      >
        <Typography
          className='BlogHeaderTypo'
          sx={{ color: "#263238", fontSize: "1.7rem", fontWeight: "800" }}
        >
          FALCON <span style={{ color: "#0F52BA" }}>BLOG</span>
        </Typography>
        <Typography
          className='BlogHeaderTypo'
          sx={{
            color: "#263238",
            fontSize: "1rem",
            fontWeight: "500",
            width: "35%",
            margin: ".5% 0%",
          }}
        >
          {t("Always looking into improving ourselves.")}
        </Typography>
        <Typography
          className='BlogHeaderTypo'
          sx={{
            color: "#263238",
            fontSize: ".9rem",
            fontWeight: "400",
            width: "30%",
          }}
        >
          {t(
            "The articles written below by our team reflect our values and expertize when it comes to collaborating in mid-size and big projects."
          )}
        </Typography>
        <div
          className='BlogHeaderInput'
          style={{
            width: "40%",
            border: "1px solid rgb(235, 233, 233)",
            boxShadow: "0px 4px 23px rgba(0, 0, 0, 0.1)",
            borderRadius: "35px",
            display: "flex",
            height: "12%",
            marginTop: "1%",
          }}
        >
          <input
            style={{
              width: "100%",
              //   height: "10%",
              border: "none",
              borderRadius: "35px",
              paddingLeft: "5%",
              fontSize: "1rem",
            }}
            placeholder={t("Your Email")}
          />
          <button className='BlogHeader_Btn'>{t("SUBSCRIBE")}</button>
        </div>
      </motion.div>
    </>
  );
}
