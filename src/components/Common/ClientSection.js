//Importing core
import { useState, useEffect } from "react";
import api from "../../api/index";

import { Grid } from "@mui/material";
import React from "react";
import SectionHeader from "./SectionHeader";
export default function ClientSection({ heading, sub_heading }) {
  const [partners, setPartners] = useState([]);

  useEffect(() => {
    getPartners();
  }, []);

  const getPartners = async () => {
    await api("post", "/partners/getActive").then((res) => {
      setPartners(res?.data?.partners);
    });
  };
  return (
    <>
      <div className="ClientSectionMain">
        <SectionHeader
          width="15%"
          colorH2="#0F52BA"
          h1={heading}
          h2={sub_heading}
          // decription="This sounds simple, but it is beneficial to your business success."
        />
        <div className="ClientsDiv">
          <>
            <Grid container spacing={1} className="ClientsGrid">
              {partners?.map((partner) => {
                return (
                  <Grid className="ClientLogoGrid" xs={6} sm={3}>
                    <img
                      className="ClientLogo"
                      src={
                        process.env.REACT_APP_SERVER_MEDIA_URL + partner.photo
                      }
                      alt="client"
                    />
                  </Grid>
                );
              })}
            </Grid>
          </>
        </div>
      </div>
    </>
  );
}
