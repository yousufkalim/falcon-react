// Init
//Importing core
import { useState, useEffect } from "react";
import api from "../../api/index";
import { Grid, Typography } from "@mui/material";
import React from "react";
import { motion } from "framer-motion";
// Importing Components
import Button from "@mui/material/Button";

// Home Component
export default function BlogReadArticles(props) {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    getBlog();
  }, []);

  const getBlog = async () => {
    await api("post", "/blogs/getLatestBlogs").then((res) => {
      setBlogs(res?.data?.blogs);
    });
  };
  {
    console.log(blogs, "b");
  }
  return (
    <>
      {blogs?.map((blog, index) => {
        return (
          <motion.div
            initial={{ x: 300 }}
            whileInView={{ x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="BlogArticleMain"
          >
            {index == 0 ? (
              <Grid container spacing={1} className="BlogArticleContainer1">
                <Grid xs={12} sm={10} md={6}>
                  <img
                    className="BlogReadImg"
                    width={props.width}
                    src={process.env.REACT_APP_SERVER_MEDIA_URL + blog.photo}
                  />
                </Grid>
                <Grid xs={12} sm={10} md={6}>
                  <div className="BlogTypo">
                    <Typography className="BlogReadTitle">
                      {blog?.title}
                    </Typography>
                    <Typography className="BlogReadDate">
                      {new Date(blog.createdAt).toDateString()}
                    </Typography>
                    <Typography className="BlogReadPara">
                      {blog?.description}
                    </Typography>
                    <Button className="BlogReadBtn" variant="text">
                      {props.BtnTexr || "READ MORE"}
                    </Button>
                  </div>
                </Grid>
              </Grid>
            ) : (
              <Grid container spacing={1} className="BlogArticleContainer2">
                <Grid xs={12} sm={10} md={6}>
                  <img
                    className="BlogReadImg"
                    width={props.width}
                    src={process.env.REACT_APP_SERVER_MEDIA_URL + blog.photo}
                  />
                </Grid>
                <Grid xs={12} sm={10} md={6}>
                  <div className="BlogTypo">
                    <Typography className="BlogReadTitle">
                      {blog?.title}
                    </Typography>
                    <Typography className="BlogReadDate">
                      {new Date(blog.createdAt).toDateString()}
                    </Typography>
                    <Typography className="BlogReadPara">
                      {blog?.description}
                    </Typography>
                    <Button className="BlogReadBtn" variant="text">
                      {props.BtnTexr || "READ MORE"}
                    </Button>
                  </div>
                </Grid>
              </Grid>
            )}
          </motion.div>
        );
      })}
    </>
  );
}

// <motion.div
//   initial={{ x: 300 }}
//   whileInView={{ x: 0 }}
//   transition={{ duration: 0.5 }}
//   viewport={{ once: true }}
//   className="BlogArticleMain"
// >
//   <Grid container spacing={1} className="BlogArticleContainer2">
//     <Grid xs={12} sm={10} md={6}>
//       <img className="BlogReadImg" width={props.width} src={props.src} />
//     </Grid>
//     <Grid xs={12} sm={10} md={6}>
//       <div className="BlogTypo">
//         <Typography className="BlogReadTitle">
//           {props.title || "Manager une équipe en télétravail"}
//         </Typography>
//         <Typography className="BlogReadDate">
//           {props.PublishDate || "Published on Wed Oct 06 2021"}
//         </Typography>
//         <Typography className="BlogReadPara">
//           Dans le passé, il était facile de gérer une équipe d'employés
//           qui ne travaillaient pas à des milliers de kilomètres de chez
//           soi. Aujourd'hui, les entreprises adoptent la tendance à
//           l'éloignement en employant des travailleurs qualifiés aux quatre
//           coins du monde. Naturellement, le manager est responsable non
//           seulement de la gestion de l'équipe d'employés, mais aussi de la
//           formation, de l'encouragement et du soutien de cette équipe.
//           Cette responsabilité n'est pas toujours aussi simple. C'est
//           pourquoi nous allons discuter ici des défis potentiels de la
//           gestion d'une équipe à distance et de la manière de surmonter
//           ces obstaclesseulement de la gestion de l'équipe d'employés,
//           mais aussi de la formation, de l'encouragement et du soutien de
//           cette équipe. Cette responsabilité n'est pas toujours aussi
//           simple. C'est pourquoi nous allons discuter ici des défis
//           potentiels de la gestion d'une équipe à distance et de la
//           manière de surmonter ces obstacles
//         </Typography>
//         <Button className="BlogReadBtn" variant="text">
//           {props.BtnTexr || "READ MORE"}
//         </Button>
//       </div>
//     </Grid>
//   </Grid>
// </motion.div>

{
  /* ) : (
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
                  {props.title || "Manager une équipe en télétravail"}
                </Typography>
                <Typography className="BlogReadDate">
                  {props.PublishDate || "Published on Wed Oct 06 2021"}
                </Typography>
                <Typography className="BlogReadPara">
                  Dans le passé, il était facile de gérer une équipe d'employés
                  qui ne travaillaient pas à des milliers de kilomètres de chez
                  soi. Aujourd'hui, les entreprises adoptent la tendance à
                  l'éloignement en employant des travailleurs qualifiés aux
                  quatre coins du monde. Naturellement, le manager est
                  responsable non seulement de la gestion de l'équipe
                  d'employés, mais aussi de la formation, de l'encouragement et
                  du soutien de cette équipe. Cette responsabilité n'est pas
                  toujours aussi simple. C'est pourquoi nous allons discuter ici
                  des défis potentiels de la gestion d'une équipe à distance et
                  de la manière de surmonter ces obstaclesseulement de la
                  gestion de l'équipe d'employés, mais aussi de la formation, de
                  l'encouragement et du soutien de cette équipe. Cette
                  responsabilité n'est pas toujours aussi simple. C'est pourquoi
                  nous allons discuter ici des défis potentiels de la gestion
                  d'une équipe à distance et de la manière de surmonter ces
                  obstacles
                </Typography>
                <Button className="BlogReadBtn" variant="text">
                  {props.BtnTexr || "READ MORE"}
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
        </motion.div> */
}
{
  /* )} */
}
