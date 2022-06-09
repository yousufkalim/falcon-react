import * as React from "react";
//Importing core
import { useState, useEffect } from "react";
import api from "../../api/index";
import Toolbar from "@mui/material/Toolbar";
import LogoWhite from "../../assets/images/logo_white.png";
import CloseIcon from "../../assets/images/close_White.png";
import MenuImg from "../../assets/images/MenuImg.svg";
import { Divider } from "@mui/material";
import { motion } from "framer-motion";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { Link } from "react-router-dom";

export default function NavBarMenu({ Menu, SetMenu }) {
  const [ServiceDropDown, SetServiceDropDown] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };
  const [services, setServices] = useState([]);
  useEffect(() => {
    getServices();
  }, []);
  const getServices = async () => {
    await api("get", "/services").then((res) => {
      setServices(res?.data?.services);
    });
  };
  {
    console.log(services, "services");
  }
  return (
    <>
      <motion.div
        className="MenuDiv"
        animate={{ opacity: [0, 1] }}
        transition={{ ease: "easeOut", duration: 0.5 }}
      >
        <Toolbar
          className="NavToolbar"
          sx={{ display: "flex", justifyContent: "space-between" }}
        >
          <a href={"/"}>
            <img alt="logo" src={LogoWhite} style={{ width: "70%" }} />
          </a>
          <img
            className="MenuIconMob"
            alt="NavMenu"
            src={CloseIcon}
            style={{ width: "2.5%", color: "white", cursor: "pointer" }}
            onClick={(e) => SetMenu(!Menu)}
          />
        </Toolbar>
        <div className="MenuSectionMain">
          <div className="MenuSection">
            <div className="MenuImgDiv">
              <img className="MenuImg" src={MenuImg} />
            </div>
            <div className="MenuTypoDiv">
              <div className="ServiceOptionDiv">
                {ServiceDropDown && (
                  <>
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 1 }}
                      className="ServicesDropDown"
                    >
                      <ul className="ServicesFields">
                        <li>
                          <a href={`/services/web-development`}>
                            WEB DEVELOPMENT
                          </a>
                        </li>
                        <li>
                          <a href={`/services/app-development`}>
                            APP DEVELOPMENT
                          </a>
                        </li>
                        <li>
                          <a href={`/services/software-development`}>
                            SOFTWARE DEVELOPMENT
                          </a>
                        </li>
                        <li>
                          <a href={`/services/ondemand-developers`}>
                            ON DEMAND DEVELOPERS
                          </a>
                        </li>
                        <li>
                          <a href={`/services/ui-development`}>
                            UI/UX DEVELOPMENT
                          </a>
                        </li>
                      </ul>
                    </motion.div>
                    <Divider
                      orientation="vertical"
                      sx={{
                        width: ".5%",
                        height: "35%",
                        backgroundColor: "#fff",
                        borderRadius: "4px",
                        marginLeft: "5%",
                      }}
                    />
                  </>
                )}
              </div>
              {ServiceDropDown ? (
                <>
                  <div className="class-name"></div>
                </>
              ) : null}

              <div className="MainMenu">
                <div className="text-dot-container">
                  <span class="dot"></span>
                  <Link to="/about">About</Link>
                </div>
                <div className="text-dot-container">
                  <span class="dot"></span>
                  <span
                    className="services"
                    onClick={() => {
                      SetServiceDropDown((prevCheck) => !prevCheck);
                    }}
                  >
                    Services
                  </span>
                </div>
                <div className="text-dot-container">
                  <span class="dot"></span>
                  <Link to="/blog">Blog</Link>
                  {/* <a style={{color:"white"}} href={`/blog`}>Blog</a> */}
                </div>
                <div className="text-dot-container">
                  <span class="dot"></span>
                  {/* <a style={{color:"white"}} href={`/ourprojects`}>Our Projects</a> */}
                  <Link to="/ourprojects">Our Projects</Link>
                </div>
                <div className="text-dot-container">
                  <span class="dot"></span>
                  <Link to="/contactus">Contact Us</Link>
                </div>
                <ul className="MainMenuList">
                  <div className="Service_Mobile">
                    <List
                      sx={{
                        width: "100%",
                        maxWidth: 360,
                        bgcolor: "background.paper",
                      }}
                      component="nav"
                      // aria-labelledby="nested-list-subheader"
                    >
                      <ListItemButton id="Mob_nav">
                        <a className="Nav_links" href={`/about`}>
                          <ListItemText id="Mob_items" primary="About" />
                        </a>
                      </ListItemButton>
                      <ListItemButton id="Mob_nav" onClick={handleClick}>
                        <ListItemText
                          id="Mob_items"
                          className="dropDown_list"
                          primary="Services"
                        />
                        {open ? <ExpandLess /> : <ExpandMore />}
                      </ListItemButton>
                      <Collapse
                        className="Service_list"
                        in={open}
                        timeout="auto"
                        unmountOnExit
                      >
                        <List component="div" disablePadding>
                         <ListItemButton id="Mob_nav" sx={{ pl: 6 }}>
                            <a
                              style={{ width: "100%" }}
                              href={`/services/web-development`}
                            >
                              <ListItemText>
                                <span className="Servive_DropDown">
                                  {" "}
                                  WEB DEVELOPMENT
                                </span>
                              </ListItemText>
                            </a>
                          </ListItemButton>
                        </List>
                      </Collapse>
                    </List>
                  </div>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}
