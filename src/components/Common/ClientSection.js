import { Grid } from "@mui/material";
import React from "react";
import SectionHeader from "./SectionHeader";
import Client3 from "../../assets/images/4.svg";
import Client4 from "../../assets/images/5.svg";
import Client1 from "../../assets/images/6.svg";
import Client2 from "../../assets/images/7.svg";
export default function ClientSection() {
  return (
    <>
      <div className="ClientSectionMain">
        <SectionHeader
          width="15%"
          h1="SINCERELY YOURS"
          h2="Some Amazing Partners We Worked With"
          // decription="This sounds simple, but it is beneficial to your business success."
        />
        <div className="ClientsDiv">
          <Grid container spacing={1} className="ClientsGrid">
            <Grid className="ClientLogoGrid" xs={6} sm={3}>
              <img className="ClientLogo" src={Client1} alt="client" />
            </Grid>
            <Grid className="ClientLogoGrid" xs={6} sm={3}>
              <img className="ClientLogo" src={Client2} alt="client" />
            </Grid>
            <Grid className="ClientLogoGrid" xs={6} sm={3}>
              <img className="ClientLogo" src={Client3} alt="client" />
            </Grid>
            <Grid className="ClientLogoGrid" xs={6} sm={3}>
              <img className="ClientLogo" src={Client4} alt="client" />
            </Grid>
         
          </Grid>
        </div>
      </div>
    </>
  );
}
