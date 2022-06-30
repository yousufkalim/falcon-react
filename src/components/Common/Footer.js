import { Divider, Typography } from "@mui/material";
import React from "react";
import Logo from "../../assets/images/logo.svg";
import FB from "../../assets/images/FooterFB.svg";
import LinkedIn from "../../assets/images/FooterLinkedIn.svg";
import WhatsApp from "../../assets/images/FooterWhatsApp.svg";
import TopBtn from "../../assets/images/top_btn.svg";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Footer(props) {
  const { i18n, t } = useTranslation();
  const { language } = i18n;

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
          </div>
          <div className="FooterRight">
            <div className="FooterList">
              <Typography
                className="FooterListHeading"
                sx={{ fontWeight: "700", opacity: "40%", marginBottom: "40%" }}
              >
                Overview
              </Typography>
              <ul>
                <li>
                  <Link className="Footer_li" to="/about">
                    About
                  </Link>
                </li>
                <li>
                  <Link className="Footer_li" to="/ourprojects">
                    Our projects
                  </Link>
                </li>
                <li>
                  <Link className="Footer_li" to="/contactus">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div className="FooterList">
              <Typography
                className="FooterListHeading"
                sx={{ fontWeight: "700", opacity: "40%", marginBottom: "23%" }}
              >
                Solutions
              </Typography>
              <ul>
                <li>
                  <Link className="Footer_li" to="/services/web-development">
                    Web Development
                  </Link>
                </li>
                <li>
                  <Link className="Footer_li" to="/services/app-development">
                    App Development
                  </Link>
                </li>
                <li>
                  <Link
                    className="Footer_li"
                    to="/services/software-development"
                  >
                    Software Development
                  </Link>
                </li>
                {/* <li>
                  <Link
                    className="Footer_li"
                    to="/services/ondemand-developers"
                  >
                    On Demand Developers
                  </Link>
                </li> */}
                <li>
                  <Link className="Footer_li" to="/services/ui-development">
                    UI/UX Developmemt
                  </Link>
                </li>
              </ul>
            </div>
            {/* <div className="FooterList">
              <Typography
                className="FooterListHeading"
                sx={{ fontWeight: "700", opacity: "40%", marginBottom: "28%" }}
              >
                Privacy
              </Typography>
              <ul>
                <li className="Footer_li">Terms of Service</li>
                <li className="Footer_li">Cookies</li>
              </ul>
            </div> */}
          </div>
        </div>
        <div
          style={{
            width: "90%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
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
          <div className="LegalMentionDiv">
            <Typography>
              <a className="LegalMention_H" href="/legalmentions">
                Legal Mentions
              </a>{" "}
            </Typography>
          </div>
        </div>
      </motion.div>

      <Divider />
      <div className="CopyRightDiv">
        <Typography
          ClassName="CopyRightTypo"
          sx={{ fontSize: "70%", fontWeight: "700" }}
        >
          © 2015-{new Date().getFullYear()}
          <span style={{ color: "#003B7E" }}> Falcon Consulting</span>, All
          Rights Reserved.
        </Typography>

        <Typography
          className="Footer_ChangeLanguage"
          onClick={() => {
            if (language === "fr") {
              i18n.changeLanguage("en");
            } else {
              i18n.changeLanguage("fr");
            }
          }}
        >
          <span style={{ color: "#000", opacity: ".6" }}>
            {" "}
            {t("Changer de langue en")}{" "}
          </span>
          {t("Français")}
        </Typography>
      </div>
    </>
  );
}
