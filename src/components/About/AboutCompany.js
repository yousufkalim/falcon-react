// Init
import React from "react";
import { useState, useEffect } from "react";
import api from "../../api/index";
import { Grid, Typography } from "@mui/material";
import { Divider } from "@mui/material";
import AboutCompanyImg from "../../assets/images/aboutCompanyImg.svg";
export default function AboutCompany() {
  const [company, setCompany] = useState({});
  useEffect(() => {
    getCompany();
  }, []);

  const getCompany = async () => {
    await api("post", "/about/getCompany").then((res) => {
      setCompany(res?.data?.about);
    });
  };
  {
    console.log(company, "co");
  }
  return (
    <>
      <div className="AboutCompanySection">
        <Grid container spacing={1}>
          <Grid sm={12} md={6}>
            <div className="AboutCompanyImgDiv">
              <img
                src={process.env.REACT_APP_SERVER_MEDIA_URL + company.photo}
                className="AboutCompanyImg"
              />
            </div>
          </Grid>
          <Grid sm={12} md={6}>
            <div className="AboutCompanyTypo">
              <Typography className="AboutCompanyTypo_H1">
                BEST company
              </Typography>
              <Divider
                sx={{
                  width: "10%",
                  height: "5px",
                  backgroundColor: "#42C2FF",
                  borderRadius: "5px",
                  marginTop: "1% ",
                }}
              />
              <Typography className="AboutCompanyTypo_H2">
                {company.title}
              </Typography>
              <Typography className="AboutCompanyTypo_Desp">
                {company.description}
              </Typography>
            </div>
          </Grid>
        </Grid>
      </div>
    </>
  );
}
