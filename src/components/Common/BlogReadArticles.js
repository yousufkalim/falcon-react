// Init
import { Grid, Typography } from "@mui/material";
import React from "react";
import { motion } from "framer-motion";
// Importing Components
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

// Home Component
export default function BlogReadArticles(props) {
  const { i18n, t } = useTranslation();
  return (
    <>
      {props.Reverse ? (
        <motion.div
          initial={{ x: 300 }}
          whileInView={{ x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className='BlogArticleMain'
        >
          <Grid container spacing={1} className='BlogArticleContainer2'>
            <Grid xs={12} sm={10} md={6}>
              <img className='BlogReadImg' width={props.width} src={props.src} />
            </Grid>
            <Grid xs={12} sm={10} md={6}>
              <div className='BlogTypo'>
                <Typography className='BlogReadTitle'>
                  {t(props.title || "Manager une équipe en télétravail")}
                </Typography>
                <Typography className='BlogReadDate'>
                  {t("Published on")} {t(props.PublishDate || "Wed Oct 06 2021")}
                </Typography>
                <Typography className='BlogReadPara'>
                  {/* {t(props.text)} */}
                  {t(
                    "We live in a digital world where everyone has cell-phones with the internet. Most consumers will be using their electronic devices to search for online information that will help them in making a smarter purchase decision. Actually, according to a survey, 88% of the consumers will search online information about a product before they finally buy it. Hence if your business doesn’t have a website, you are probably losing a lot of customers and opportunities. Nowadays business website serves as the backbone of the business as it lures new customers and can be used to employ different marketing strategies to expand your business. Below we’ll discuss the role of an online website in boosting your sales and growing your business."
                  )}
                </Typography>
                <Button className='BlogReadBtn' variant='text'>
                  <Link to={props.to} style={{ color: "#42C2FF", fontWeight: "600" }}>
                    {t(props.BtnTexr || "READ MORE")}
                  </Link>
                </Button>
              </div>
            </Grid>
          </Grid>
        </motion.div>
      ) : (
        <motion.div
          initial={{ x: -300 }}
          whileInView={{ x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className='BlogArticleMain'
        >
          <Grid container spacing={1} className='BlogArticleContainer1'>
            <Grid xs={12} sm={10} md={6}>
              <div className='BlogTypo'>
                <Typography className='BlogReadTitle'>
                  {t(props.title || "Manager une équipe en télétravail")}
                </Typography>
                <Typography className='BlogReadDate'>
                  {t("Published on")} {t(props.PublishDate || "Wed Oct 06 2021")}
                </Typography>
                <Typography className='BlogReadPara'>
                  {t(
                    "In the past, it was easy to manage a team of employees who were not working thousands of miles away from you. Nowadays, businesses are adopting remote trends by employing skilled workers from around the globe. Naturally, the manager is responsible for not only managing the team of employees but also to instruct, foster, and support that team. This responsibility is not always that easy. Thus, here we will be discussing the possible challenges of managing a remote team and how to overcome such obstacles."
                  )}
                </Typography>
                <Button className='BlogReadBtn' variant='text'>
                  <Link to={props.to} style={{ color: "#42C2FF", fontWeight: "600" }}>
                    {t(props.BtnTexr || "READ MORE")}
                  </Link>
                </Button>
              </div>
            </Grid>
            <Grid xs={12} sm={10} md={6}>
              <img className='BlogReadImg' width={props.width} src={props.src} />
            </Grid>
          </Grid>
        </motion.div>
      )}
    </>
  );
}
