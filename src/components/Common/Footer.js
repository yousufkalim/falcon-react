import { Divider, Typography } from "@mui/material";
import React from "react";
import Logo from "../../assets/images/logo.png";
import FB from "../../assets/images/FooterFB.svg";
import LinkedIn from "../../assets/images/FooterLinkedIn.svg";
import WhatsApp from "../../assets/images/FooterWhatsApp.svg";
import { motion } from "framer-motion";
export default function Footer(props) {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="FooterMain"
      >
        <div className="FooterDiv">
          <div className="FooterLeft">
            <img className="FooterLogo" src={Logo} alt="logo" />
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
                  <a href="/about">About</a>
                </li>
                <li>
                  <a href="/ourprojects">Our projects</a>
                </li>
                <li>
                  <a href="/contactus">Contact</a>
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
                  <a href="/services/web-development">Web Development</a>
                </li>
                <li>
                  <a href="/services/app-development">App Development</a>
                </li>
                <li>
                  <a href="/services/software-development">
                    Software Development
                  </a>
                </li>
                <li>
                  <a href="/services/ondemand-developers">
                    On Demand Developers
                  </a>
                </li>
                <li>
                  <a href="/services/ui-development">UI/UX Developmemt</a>
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
