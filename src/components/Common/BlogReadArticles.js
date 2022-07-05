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
          className="BlogArticleMain"
        >
          <Grid container spacing={1} className="BlogArticleContainer2">
            <Grid xs={12} sm={10} md={6}>
              <img
                className="BlogReadImg"
                width={props.width}
                src={props.src}
              />
            </Grid>
            <Grid xs={12} sm={10} md={6}>
              <div className="BlogTypo">
                <Typography className="BlogReadTitle">
                  {t(props.title || "Manager une équipe en télétravail")}
                </Typography>
                <Typography className="BlogReadDate">
                  {t(props.PublishDate || "Published on Wed Oct 06 2021")}
                </Typography>
                <Typography className="BlogReadPara">
                  {t(
                    "Dans le passé, il était facile de gérer une équipe d'employés qui ne travaillaient pas à des milliers de kilomètres de chez soi. Aujourd'hui, les entreprises adoptent la tendance à l'éloignement en employant des travailleurs qualifiés aux quatre coins du monde. Naturellement, le manager est responsable non seulement de la gestion de l'équipe d'employés, mais aussi de la formation, de l'encouragement et du soutien de cette équipe. Cette responsabilité n'est pas toujours aussi simple. C'est pourquoi nous allons discuter ici des défis potentiels de la gestion d'une équipe à distance et de la manière de surmonter ces obstaclesseulement de la gestion de l'équipe d'employés, mais aussi de la formation, de l'encouragement et du soutien de cette équipe. Cette responsabilité n'est pas toujours aussi simple. C'est pourquoi nous allons discuter ici des défis potentiels de la gestion d'une équipe à distance et de la manière de surmonter ces obstacles"
                  )}
                </Typography>
                <Button className="BlogReadBtn" variant="text">
                  <Link
                    style={{ color: "#42C2FF", fontWeight: "600" }}
                    to="/blogdetail"
                  >
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
          className="BlogArticleMain"
        >
          <Grid container spacing={1} className="BlogArticleContainer1">
            <Grid xs={12} sm={10} md={6}>
              <div className="BlogTypo">
                <Typography className="BlogReadTitle">
                  {t(props.title || "Manager une équipe en télétravail")}
                </Typography>
                <Typography className="BlogReadDate">
                  {t(props.PublishDate || "Published on Wed Oct 06 2021")}
                </Typography>
                <Typography className="BlogReadPara">
                  {t(
                    "Dans le passé, il était facile de gérer une équipe d'employés qui ne travaillaient pas à des milliers de kilomètres de chez soi. Aujourd'hui, les entreprises adoptent la tendance à l'éloignement en employant des travailleurs qualifiés aux quatre coins du monde. Naturellement, le manager est responsable non seulement de la gestion de l'équipe d'employés, mais aussi de la formation, de l'encouragement et du soutien de cette équipe. Cette responsabilité n'est pas toujours aussi simple. C'est pourquoi nous allons discuter ici des défis potentiels de la gestion d'une équipe à distance et de la manière de surmonter ces obstaclesseulement de la gestion de l'équipe d'employés, mais aussi de la formation, de l'encouragement et du soutien de cette équipe. Cette responsabilité n'est pas toujours aussi simple. C'est pourquoi nous allons discuter ici des défis potentiels de la gestion d'une équipe à distance et de la manière de surmonter ces obstacles"
                  )}
                </Typography>
                <Button className="BlogReadBtn" variant="text">
                  <Link
                    style={{ color: "#42C2FF", fontWeight: "600" }}
                    to="/blogdetail"
                  >
                    {t(props.BtnTexr || "READ MORE")}
                  </Link>
                </Button>
              </div>
            </Grid>
            <Grid xs={12} sm={10} md={6}>
              <img
                className="BlogReadImg"
                width={props.width}
                src={props.src}
              />
            </Grid>
          </Grid>
        </motion.div>
      )}
    </>
  );
}
