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
          >
            <LatestProjectsCard
              HoverDetailLite
              hoverDesp="Kidcab is a mobile application aiming to help parents find drivers for their children’s activities, and safely monitor their location. For our partner, we developed two mobile application and a Ride Management web application."
              src={KidCab}
              LogoSrc={KC_logo}
              para1="Kidcab is a mobile application aiming to help parents find drivers for their children’s activities, and safely monitor their location. For our partner, we developed two mobile application and a Ride Management web application. "
              para2="The Driver mobile application allow them to receive ride offers and see an overview of the upcoming and past activities. When being on a ride, the application is having similar features as Uber. "
              para3="The Parents mobile application shows the live location of the driver, and allows to monitor all the past and upcoming rides. "
              para4="Finally, the Ride Management website is intended for Kidcab administrator to create, manage and assign efficiently the activities of the company. An in-app quote and invoice management tool has also been created. "
              para5="This project required to work carefully on the code optimization, and especially all the API calls in order to minimize the operation costs. "
            />
            <LatestProjectsCard
              hoverDesp="Permispop is a web platform connecting students, independent driving teachers, and driving schools. Each type of user has a dedicated interface, allowing them to manage their activities efficiently."
              src={Permispop}
              DividerTheme="#11A283"
              ModalBtnTheme="#11A283"
              Heading="Permispop"
              LogoSrc={PP_logo}
              para1="Permispop is a web platform connecting students, independent driving teachers, and driving schools. Each type of user has a dedicated interface, allowing them to manage their activities efficiently. "
              para2="The platform offers several features such as : "
              para3="- the possibility to search for an instructor with an interactive map, and book a session depending on his availability."
              para4="- The booking feature allows the driving schools and instructors to have an overview of all the activities and manage them efficiently;"
              para5="- At the end of each session, the student can rate the instructor and provide feedback to the platform; "
              para6="- An internal messaging system;"
              para7="- A digital driving booklet, allowing the instructors to have an overview of the level of each student, and add any progress made. "
            />
            <LatestProjectsCard
              hoverDesp="Quadrabase is a web platform allowing engineering offices to automatically generate tender documents in the construction industry: Project Specification, Project Cost Estimate, Project bidding template. The platform has a well structured and multi-level database, allowing to include the most pertinent data for each specific project, based on the project details."
              src={QB}
              DividerTheme="#FF8616"
              ModalBtnTheme="#FF8616"
              Heading="Quadrabase"
              LogoSrc={QB_logo}
              para1="Quadrabase is a web platform allowing engineering offices to automatically generate tender documents in the construction industry: Project Specification, Project Cost Estimate, Project bidding template. The platform has a well structured and multi-level database, allowing to include the most pertinent data for each specific project, based on the project details."
              para2="Our client being a project manager with more than 30 years of experience in the field, we had to show a great capacity of adaptation to correctly apprehend the project, and understand all the technical aspects. "
              para3="This project is ambitious and aims to revolutionize the approach to design in the field of construction in France. "
            />
            <LatestProjectsCard
              hoverDesp="A web app designed to help customers with customized stitching to receive your creation at your home."
              src={Desine}
              DividerTheme="#CC8E9C"
              ModalBtnTheme="#CC8E9C"
              Heading="Design Confection"
              LogoSrc={Desine_Logo}
              para1="A web app designed to help customers with customized stitching to receive your creation at your home. "
              para2="User login to register and add information regarding customized dress like color combination, stuff design, etc."
              para3="After registration, consumers post ads containing ideas and 100+creative designers send you the estimated costs."
              para4="Choose your designer with 99% accuracy as design confection brings your ideas to life."
            />
            <LatestProjectsCard
              hoverDesp="This website offers an online tailoring experience with free pick-up and delivery in Karachi. We provide
            stitching services with customizable designs for salwar suits, blouses, kurtas, bottoms, western wear as per
            customers measurement at the doorstep. Coming Soon for other cities also."
              src={Real_Estate}
              DividerTheme="#837C6B"
              ModalBtnTheme="#837C6B"
              Heading="Real Estate"
              LogoSrc={RealEstate_Logo}
            />
            <LatestProjectsCard
              hoverDesp="TEZBox media is a platform providing different services including"
              src={EzBox}
              DividerTheme="#3399FE"
              ModalBtnTheme="#3399FE"
              Heading="Box Media"
              LogoSrc={EzBox_Logo}
              para1="EZBox media is a platform providing different services including..."
              para2="Advertising: "
              para3="•	Advertising by understanding how a user can react to the advertisement shown to them."
              para4="•	Target ads based on non-personal criteria."
              para5="Product development: "
              para6="•	EZBox media helps Product development for the next generation products with the wide variety of technologies available today."
              para7="Chromium Browser:"
              para8="•	EZBoxmedia worked with leading consumer electronics manufacturers to design and provide turnkey solutions. "
            />
          </Carousel>
        </motion.div>
        {props.ProjectsSummary && (
          <div className="ProjectsCompletedDiv">
            <div className="Left">
              <Typography className="ProjectsCompleted_Num">8</Typography>
              <Typography className="ProjectsCompleted_H">
                Years of Excellence
              </Typography>
            </div>
            <div className="center">
              <Typography className="ProjectsCompleted_Num">85+</Typography>
              <Typography className="ProjectsCompleted_H">
                Project Completed
              </Typography>
            </div>
            <div className="Right">
              <Typography className="ProjectsCompleted_Num">60+</Typography>
              <Typography className="ProjectsCompleted_H">
                Customer Satisfaction
              </Typography>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
