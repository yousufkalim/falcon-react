import { Divider, Typography } from "@mui/material";
import React from "react";
import Logo from "../../assets/images/logo.svg";
import FB from "../../assets/images/FooterFB.svg";
import LinkedIn from "../../assets/images/FooterLinkedIn.svg";
import WhatsApp from "../../assets/images/FooterWhatsApp.svg";
import TopBtn from "../../assets/images/top_btn.svg";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
export default function Footer(props) {
  var scrollToTopBtn = document.getElementById("scrollToTopBtn");
  var rootElement = document.documentElement;
  function scrollToTop() {
    // Scroll to top logic
    rootElement.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="FooterMain"
      >
        <img id="scrollToTopBtn" onClick={scrollToTop} src={TopBtn} alt="top" />
        <div className="FooterDiv">
          <div className="FooterLeft">
            <Link to={`/`}>
              <img className="FooterLogo" src={Logo} alt="logo" />
            </Link>
            <Typography
              className="FooterTypo"
              sx={{ color: "#282828", opacity: "50%", marginBottom: "3%" }}
            >
              The services are provided at a flat rate, or according to a
              determined daily rate, based on your preference. In both cases, we
              guarantee you a quality service at a very competitive price.
            </Typography>
            <div className="IconsDiv">
              <a href="https://www.facebook.com/FalconConsulting.fr">
                <img className="FooterIcons" src={FB} />
              </a>
              <a href="https://pk.linkedin.com/company/falconconsultinggroup?trk=ppro_cprof&original_referer=https%3A%2F%2Fwww.google.com%2F">
                <img className="FooterIcons" src={LinkedIn} />
              </a>
              <a href="https://wa.me/03135098197">
                <img className="FooterIcons" src={WhatsApp} />
              </a>
            </div>
          </div>
          <div className="FooterRight">
            <div className="FooterList">
              <Typography
                className="FooterListHeading"
                sx={{ fontWeight: "700", opacity: "50%", marginBottom: "40%" }}
              >
                Pages
              </Typography>
              <ul>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/ourprojects">Our projects</Link>
                </li>
                <li>
                  <Link to="/contactus">Contact</Link>
                </li>
              </ul>
            </div>
            <div className="FooterList">
              <Typography
                className="FooterListHeading"
                sx={{ fontWeight: "700", opacity: "50%", marginBottom: "23%" }}
              >
                Services
              </Typography>
              <ul>
                <li>
                  <Link to="/services/web-development">Web Development</Link>
                </li>
                <li>
                  <Link to="/services/app-development">App Development</Link>
                </li>
                <li>
                  <Link to="/services/software-development">
                    Software Development
                  </Link>
                </li>
                <li>
                  <Link to="/services/ondemand-developers">
                    On Demand Developers
                  </Link>
                </li>
                <li>
                  <Link to="/services/ui-development">UI/UX Developmemt</Link>
                </li>
              </ul>
            </div>
            <div className="FooterList">
              <Typography
                className="FooterListHeading"
                sx={{ fontWeight: "700", opacity: "50%", marginBottom: "28%" }}
              >
                Privacy
              </Typography>
              <ul>
                <li>Terms of Service</li>
                <li>Cookies</li>
              </ul>
            </div>
          </div>
        </div>
      </motion.div>
      <Divider />
      <div className="CopyRightDiv">
        <Typography sx={{ fontSize: "80%", fontWeight: "700" }}>
          © 2015-{new Date().getFullYear()}
          <span style={{ color: "#003B7E" }}> Falcon Consulting</span>, All
          Rights Reserved.
        </Typography>
      </div>
    </>
  );
}
