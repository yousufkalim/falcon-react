import React, { useEffect, useState } from "react";
import SectionHeader from "./SectionHeader";
import { Carousel } from "@trendyol-js/react-carousel";
import KidCab from "../../assets/images/kidcab.svg";
import KC_logo from "../../assets/images/kidcabLogo.png";
import Permispop from "../../assets/images/permispop.svg";
import PP_logo from "../../assets/images/permisLogo.png";
import QB from "../../assets/images/quadrabase.svg";
import QB_logo from "../../assets/images/qudra_logo.svg";
import Desine from "../../assets/images/desine.png";
import Desine_Logo from "../../assets/images/desineLogo.png";
import Real_Estate from "../../assets/images/realEstate.png";
import RealEstate_Logo from "../../assets/images/realestateLogo.png";
import EzBox from "../../assets/images/ezBox.png";
import EzBox_Logo from "../../assets/images/ezBoxLogo.png";
import { Typography } from "@mui/material";
import { motion } from "framer-motion";
import LatestProjectsCard from "./LatestProjectCard";
import api from "../../api/index";
export default function LatestProjects(props) {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    getProjects();
  }, []);

  const getProjects = async () => {
    await api("get", "/projects").then((res) => {
      setProjects(res?.data?.projects);
    });
  };
  let [slideShow, setSlideShow] = useState(window.innerWidth <= 600 ? 2 : 4.5);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth <= 600) {
        setSlideShow(2);
      } else {
        setSlideShow(4.5);
      }
    }

    window.addEventListener("resize", handleResize);
  }, []);
  console.log(projects, "projects");
  return (
    <>
      <div className="LatestProjectDiv">
        <SectionHeader
          width="30%"
          h1="A Project offers a challenge"
          h2="Latest Projects"
          // decription="This sounds simple, but it is beneficial to your business success."
        />

        <motion.div
          initial={{ x: 300, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: true }}
          className="LatestProjectsSlider"
        >
          <>
            <Carousel
              className="SliderDiv"
              responsive
              show={slideShow}
              slide={1}
              swiping={true}
            >
              {projects.map((project) => {
                return (
                  <LatestProjectsCard
                    hoverDesp={project.name}
                    src={process.env.REACT_APP_SERVER_MEDIA_URL + project.photo}
                    DividerTheme="#3399FE"
                    ModalBtnTheme="#3399FE"
                    Heading="Box Media"
                    LogoSrc={
                      process.env.REACT_APP_SERVER_MEDIA_URL + project.photo
                    }
                  />
                );
              })}
            </Carousel>
          </>
        </motion.div>
        {props.ProjectsSummary && (
          <div className="ProjectsCompletedDiv">
            <div className="Left">
              <Typography
                sx={{
                  fontFamily: "Montserrat !important",
                  color: "white",
                  fontSize: "1.5rem",
                  fontWeight: "700",
                  textAlign: "center",
                }}
              >
                10+
              </Typography>
              <Typography
                sx={{
                  color: "white",
                  fontSize: "1rem",
                  fontWeight: "400",
                  textAlign: "center",
                }}
              >
                Years of Excellence
              </Typography>
            </div>
            <div className="center">
              <Typography
                sx={{
                  fontFamily: "Montserrat !important",
                  color: "white",
                  fontSize: "1.5rem",
                  fontWeight: "700",
                  textAlign: "center",
                }}
              >
                85+
              </Typography>
              <Typography
                sx={{
                  color: "white",
                  fontSize: "1rem",
                  fontWeight: "400",
                  textAlign: "center",
                }}
              >
                Project Completed
              </Typography>
            </div>
            <div className="Right">
              <Typography
                sx={{
                  fontFamily: "Montserrat !important",
                  color: "white",
                  fontSize: "1.5rem",
                  fontWeight: "700",
                  textAlign: "center",
                }}
              >
                100+
              </Typography>
              <Typography
                sx={{
                  color: "white",
                  fontSize: "1rem",
                  fontWeight: "400",
                  textAlign: "center",
                }}
              >
                Customer Satisfaction
              </Typography>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
