import React from "react";
import { Typography } from "@mui/material";
import { Divider } from "@mui/material";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
export default function SectionHeader(props) {
  const { i18n, t } = useTranslation();

  return (
    <>
      {props.WorkProcess ? (
        <motion.div
          className={
            props.LeftSectionHeader ? "LeftSectionHeader" : "SectionHeaderTypo"
          }
        >
          <Typography
            className="SectionHeaderDesp"
            color={props.colorDesp || "#fff"}
          >
            {t(props.decription)}
          </Typography>
          <Divider
            className="SectionHeaderDivider"
            width={props.width || "10%"}
            sx={{
              height: "5px",
              backgroundColor: "#42C2FF",
              borderRadius: "4px",
              margin: ".7% 0",
            }}
          />
          <Typography
            className="SectionHeaderH1"
            color={props.colorH1 || "#fff"}
            sx={{ width: "30%", fontWeight: "600", fontSize: "1.5rem" }}
          >
            {t(props.h1)}
          </Typography>

          <Typography
            className="SectionHeaderH2"
            color={props.colorH2 || "#003B7E"}
          >
            {t(props.h2)}
          </Typography>
        </motion.div>
      ) : (
        <motion.div
          className={
            props.LeftSectionHeader ? "LeftSectionHeader" : "SectionHeaderTypo"
          }
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <Typography
            className="SectionHeaderH1"
            color={props.colorH1 || "#42C2FF"}
          >
            {t(props.h1)}
          </Typography>
          <Divider
            className="SectionHeaderDivider"
            width={props.width || "10%"}
          />
          <Typography
            className="SectionHeaderH2"
            color={props.colorH2 || "#003B7E"}
          >
            {t(props.h2)}
          </Typography>
          <Typography
            className="SectionHeaderDesp"
            color={props.colorDesp || "#404040B2"}
            width={props.despWidth}
          >
            {t(props.decription)}
          </Typography>
        </motion.div>
      )}
    </>
  );
}
