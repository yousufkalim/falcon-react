import { Grid } from '@mui/material';
import React from 'react';
import ServiceProvidedCard from '../Common/ServiceProvidedCard';
import { motion } from 'framer-motion';
import SectionHeader from '../Common/SectionHeader';
import { Link } from 'react-router-dom';

export default function ServiceProvided() {
  return (
    <>
      <div className="ServiceProvidedDiv">
        <SectionHeader
          h1="EXCEED YOUR EXPECTATION"
          h2="Services We Provide"
          width="8%"
          SectionHeaderMargin
          // decription="This sounds simple, but it is beneficial to your business success."
        />
        <motion.div
          initial={{ y: 100, opacity: 0.5 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="ServiceProvidedBoxes">
          <Grid container spacing={1} className="CardGridMain">
            <Grid container xs={12} sm={12} md={9} className="CardGridLeftMain">
              <Grid xs={12} sm={5.7} sx={{ margin: '1%' }}>
                <ServiceProvidedCard
                  to={`/services/app-development`}
                  CardTitle="Mobile Application Development"
                  CardImgSrc={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/appdev_new.svg`}
                />
              </Grid>

              <Grid xs={12} sm={5.7} sx={{ margin: '1%' }}>
                <ServiceProvidedCard
                  to={`/services/web-development`}
                  CardTitle="Website Development"
                  CardImgSrc={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/webdev_new.svg`}
                  // width="80%"
                />
              </Grid>
              <Grid xs={12} sm={5.7} sx={{ margin: '1%' }}>
                <ServiceProvidedCard
                  to={`/services/software-development`}
                  CardTitle="Software Development"
                  CardImgSrc={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/softdev_new.svg`}
                />
              </Grid>
              <Grid xs={12} sm={5.7} sx={{ margin: '1%' }}>
                <ServiceProvidedCard
                  to={`/services/ondemand-developers`}
                  CardTitle="On Demand Developers"
                  CardImgSrc={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/ondemand_new.svg`}
                />
              </Grid>
              <div className="CardGridMain_MobViewDiv">
                <Grid className="CardGridMain_MobView" xs={12} sm={5.7} sx={{ margin: '1%' }}>
                  <ServiceProvidedCard
                    to={`/services/ui/ux-development`}
                    CardTitle="UI/UX Development"
                    CardImgSrc={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/ui.svg`}
                  />
                </Grid>
              </div>
            </Grid>
            <Grid container md={3} className="VerticleCard_ContainerGrid">
              <Grid xs={12} sm={5} md={10} sx={{ margin: '1%' }} className="VerticleCard">
                <ServiceProvidedCard
                  verticleCard
                  CardImgSrc={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/UiDev.svg`}
                  to={`/services/ui/ux-development`}
                  CardTitle="UI/UX Development"
                />
              </Grid>
            </Grid>
          </Grid>
        </motion.div>
        {/* <ServiceProvidedCard CardTitle="Mobile Application Development" /> */}
      </div>
    </>
  );
}
