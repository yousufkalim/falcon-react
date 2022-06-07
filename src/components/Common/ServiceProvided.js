import { Grid, Typography } from "@mui/material";
import React from "react";
import ServiceProvidedCard from "../Common/ServiceProvidedCard";
import SectionHeader from "../Common/SectionHeader";
import UiDev from "../../assets/images/UiDev.svg";
import WebDev from "../../assets/images/WebDev.svg";
import SoftDev from "../../assets/images/SoftDev.svg";
import OnDemand from "../../assets/images/OnDemand.svg";

export default function ServiceProvided() {
  return (
    <>
      <div className="ServiceProvidedDiv">
        <SectionHeader
          h1="our aim provide better service"
          h2="Services We Provide"
          width="8%"
          // decription="This sounds simple, but it is beneficial to your business success."
        />
        <div className="ServiceProvidedBoxes">
        <Grid container spacing={1} className="CardGridMain">
          <Grid
            container
            xs={12}
            sm={12}
            md={9}
            className="CardGridLeftMain"
          >
            <Grid xs={12} sm={5.7}  sx={{ margin: "1%" }}>
              <ServiceProvidedCard
                href={`/services/app-development`}
                CardTitle="Mobile Application Development"
                // CardImgSrc={UiDev}
              />
            </Grid>

            <Grid xs={12} sm={5.7}  sx={{ margin: "1%" }}>
              <ServiceProvidedCard
                href={`/services/web-development`}
                CardTitle="Website Development"
                CardImgSrc={WebDev}
                // width="80%"
              />
            </Grid>
            <Grid xs={12} sm={5.7} sx={{ margin: "1%" }}>
              <ServiceProvidedCard
                href={`/services/software-development`}
                CardTitle="Software Development"
                CardImgSrc={SoftDev}
              />
            </Grid>
            <Grid xs={12} sm={5.7} sx={{ margin: "1%" }}>
              <ServiceProvidedCard
                href={`/services/ondemand-developers`}
                CardTitle="On Demand Developers"
                CardImgSrc={OnDemand}
              />
            </Grid>
          </Grid>
          <Grid container md={3} className="VerticleCard_ContainerGrid">
          <Grid xs={12} sm={5} md={10} sx={{ margin: "1%" }} className="VerticleCard">
            <ServiceProvidedCard
              verticleCard
              CardImgSrc={UiDev}
              href={`/services/ui-development`}
              CardTitle="UI/UX Development"
            />
          </Grid>
          </Grid>
        </Grid>
        </div>
        {/* <ServiceProvidedCard CardTitle="Mobile Application Development" /> */}
      </div>
    </>
  );
}
