import React, { useEffect, useState } from "react";
import SectionHeader from "./SectionHeader";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import KidCab from "../../assets/images/kidcab.svg";
import KC_logo from "../../assets/images/kidcabLogo.png";
import Permispop from "../../assets/images/Permispop.svg";
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
import { ReactComponent as Timer } from "../../assets/images/timer.svg";
import { ReactComponent as MedKit } from "../../assets/images/medkit.svg";
import { ReactComponent as Award } from "../../assets/images/award.svg";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

export default function LatestProjects(props) {
  // let [slideShow, setSlideShow] = useState(window.innerWidth <= 600 ? 2 : 4.5);

  // useEffect(() => {
  //   function handleResize() {
  //     if (window.innerWidth <= 600) {
  //       setSlideShow(2);
  //     } else {
  //       setSlideShow(4.5);
  //     }
  //   }

  //   window.addEventListener("resize", handleResize);
  // }, []);

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
          <Carousel
            className="SliderDiv"
            autoPlay={true}
            responsive={responsive}
            transitionDuration={2000}
            slidesToSlide={1}
            renderArrowNext={true}
            infinite={true}
            arrows={false}
          >
            <LatestProjectsCard
              // HoverDetailLite
              hoverDesp="Kidcab is a mobile application aiming to help parents find drivers for their children’s activities, and safely monitor their location. For our partner, we developed two mobile application and a Ride Management web application."
              src={KidCab}
              LogoSrc={KC_logo}
              // btnBackground="#47B9B4"
              to="/ourprojects/kidcab"
            />
            <LatestProjectsCard
              hoverDesp="Permispop is a web platform connecting students, independent driving teachers, and driving schools. Each type of user has a dedicated interface, allowing them to manage their activities efficiently."
              src={Permispop}
              DividerTheme="#11A283"
              // btnBackground="#11A283"
              Heading="Permispop"
              LogoSrc={PP_logo}
              to="/ourprojects/permispop"
            />
            <LatestProjectsCard
              hoverDesp="Quadrabase is a web platform allowing engineering offices to automatically generate tender documents in the construction industry: Project Specification, Project Cost Estimate, Project bidding template. The platform has a well structured and multi-level database, allowing to include the most pertinent data for each specific project, based on the project details."
              src={QB}
              to="/ourprojects/quadrabase"
              DividerTheme="#FF8616"
              // btnBackground="#FF8616"
              Heading="Quadrabase"
              LogoSrc={QB_logo}
            />
            <LatestProjectsCard
              hoverDesp="A web app designed to help customers with customized stitching to receive your creation at your home."
              src={Desine}
              to="/ourprojects/designconfection"
              DividerTheme="#CC8E9C"
              // btnBackground="#CC8E9C"
              Heading="Design Confection"
              LogoSrc={Desine_Logo}
            />
            <LatestProjectsCard
              hoverDesp="This website offers an online tailoring experience with free pick-up and delivery in Karachi. We provide
            stitching services with customizable designs for salwar suits, blouses, kurtas, bottoms, western wear as per
            customers measurement at the doorstep. Coming Soon for other cities also."
              src={Real_Estate}
              to="/ourprojects/realestate"
              DividerTheme="#837C6B"
              // btnBackground="#837C6B"
              Heading="Real Estate"
              LogoSrc={RealEstate_Logo}
            />
            <LatestProjectsCard
              hoverDesp="TEZBox media is a platform providing different services including"
              src={EzBox}
              to="/ourprojects/ezbox"
              DividerTheme="#3399FE"
              // btnBackground="#3399FE"
              Heading="Box Media"
              LogoSrc={EzBox_Logo}
            />
          </Carousel>
        </motion.div>
        {props.ProjectsSummary && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="ProjectsCompletedDiv"
          >
            <div className="Left" style={{ position: "relative" }}>
              <Timer className="ProjectsCompleted_Timer" />
              <Typography
                className="ProjectsCompleted_Num"
                sx={{ fontWeight: "700" }}
              >
                8+
              </Typography>
              <Typography className="ProjectsCompleted_H">
                Years of Excellence
              </Typography>
            </div>
            <div className="center" style={{ position: "relative" }}>
              <MedKit className="ProjectsCompleted_MedKit" />
              <Typography
                className="ProjectsCompleted_Num"
                sx={{ fontWeight: "700" }}
              >
                85+
              </Typography>
              <Typography className="ProjectsCompleted_H">
                Project Completed
              </Typography>
            </div>
            <div className="Right" style={{ position: "relative" }}>
              <Award className="ProjectsCompleted_Award" />
              <Typography
                className="ProjectsCompleted_Num"
                sx={{ fontWeight: "700" }}
              >
                60+
              </Typography>
              <Typography className="ProjectsCompleted_H">
                Customer Satisfaction
              </Typography>
            </div>
          </motion.div>
        )}
      </div>
    </>
  );
}
