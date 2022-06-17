// Init
import { Grid, Typography } from "@mui/material";
import React from "react";
import { useState, useEffect } from "react";
import api from "../../api/index";
import SectionHeader from "./SectionHeader";
import KeyFeatures from "./KeyFeatures";
import keyIcon5 from "../../assets/images/keyIcon5.svg";
import keyIcon1 from "../../assets/images/keyIcon1.svg";
import keyIcon2 from "../../assets/images/keyIcon2.svg";
import keyIcon3 from "../../assets/images/keyIcon3.svg";
import keyIcon4 from "../../assets/images/keyIcon4.svg";
import keyIcon6 from "../../assets/images/keyIcon6.svg";
import { motion } from "framer-motion";
// Importing Components

// Home Component
export default function KeyFeatureSection(props) {
  const [feature, setFeature] = useState({});
  useEffect(() => {
    getFeature();
  }, []);
  const getFeature = async () => {
    await api("get", "/features").then((res) => {
      setFeature(res?.data?.feature);
    });
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        // alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#F8F8F8",
      }}
    >
      <SectionHeader
        h2={feature.heading}
        decription={feature.sub_heading}
        colorDesp
      />
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          margin: "4% 0%",
        }}
      >
        <Grid container spacing={1} sx={{ width: "85%" }}>
          <Grid xs={12} sm={6} md={4}>
            <KeyFeatures
              src={process.env.REACT_APP_SERVER_MEDIA_URL + feature?.icon1}
              title={feature.icon1_title}
              desp={feature.icon1_description}
            />
          </Grid>
          <Grid xs={12} sm={6} md={4}>
            <KeyFeatures
              src={process.env.REACT_APP_SERVER_MEDIA_URL + feature?.icon2}
              title={feature.icon2_title}
              desp={feature.icon2_description}
            />
          </Grid>
          <Grid xs={12} sm={6} md={4}>
            <KeyFeatures
              src={process.env.REACT_APP_SERVER_MEDIA_URL + feature?.icon3}
              title={feature.icon3_title}
              desp={feature.icon3_description}
            />
          </Grid>
          <Grid xs={12} sm={6} md={4}>
            <KeyFeatures
              src={process.env.REACT_APP_SERVER_MEDIA_URL + feature?.icon4}
              title={feature.icon4_title}
              desp={feature.icon4_description}
            />
          </Grid>
          <Grid xs={12} sm={6} md={4}>
            <KeyFeatures
              src={process.env.REACT_APP_SERVER_MEDIA_URL + feature?.icon5}
              title={feature.icon5_title}
              desp={feature.icon5_description}
            />
          </Grid>
          <Grid xs={12} sm={6} md={4}>
            <KeyFeatures
              src={process.env.REACT_APP_SERVER_MEDIA_URL + feature?.icon6}
              title={feature.icon6_title}
              desp={feature.icon6_description}
            />
          </Grid>
        </Grid>
      </motion.div>
    </div>
  );
}
