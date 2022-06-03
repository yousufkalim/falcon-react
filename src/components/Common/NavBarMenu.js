import * as React from "react";
import Toolbar from "@mui/material/Toolbar";
import LogoWhite from "../../assets/images/logo_white.png";
import CloseIcon from "../../assets/images/close_White.png";
import MenuImg from "../../assets/images/MenuImg.svg";
import { Divider} from "@mui/material";
import { motion } from "framer-motion";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";

export default function NavBarMenu({Menu, SetMenu}) {
  const [ServiceDropDown, SetServiceDropDown] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <>
              <motion.div className="MenuDiv" animate={{ opacity: [0, 1] }} transition={{ ease: "easeOut", duration: .5 }}>
                <Toolbar className="NavToolbar" sx={{ display: "flex", justifyContent: "space-between" }}>
                  <a href={"/"}>
                    <img alt="logo" src={LogoWhite} style={{ width: "70%" }} />
                  </a>
                  <img
                    className="MenuIconMob"
                    alt="NavMenu"
                    src={CloseIcon}
                    style={{ width: "2.5%", color: "white" }}
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
                                  <a href={`/services/web-development`}>WEB DEVELOPMENT</a>
                                </li>
                                <li>
                                  <a href={`/services/app-development`}>APP DEVELOPMENT</a>
                                </li>
                                <li>
                                  <a href={`/services/software-development`}>SOFTWARE DEVELOPMENT</a>
                                </li>
                                <li>
                                  <a href={`/services/ondemand-developers`}>ON DEMAND DEVELOPERS</a>
                                </li>
                                <li>
                                  <a href={`/services/ui-development`}>UI/UX DEVELOPMENT</a>
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
                      {
                        ServiceDropDown?(
                        <>
                        <div className="class-name"> 
                      </div> 
                        </>
                        ):null
                      }
                     
                      <div className="MainMenu">
                         <div className="text-dot-container"> 
                         <span class="dot"></span>
                         <a style={{color:"white"}} href={`/about`}>About</a>
                         </div>
                         <div className="text-dot-container">
                         
                         <span class="dot"></span>
                        <span className="services" onClick={(e) => SetServiceDropDown(!ServiceDropDown)} >Services</span>  
                         </div>
                         <div className="text-dot-container"> 
                         <span class="dot"></span>
                         <a style={{color:"white"}} href={`/blog`}>Blog</a>
                         </div>
                         <div className="text-dot-container"> 
                         <span class="dot"></span>
                         <a style={{color:"white"}} href={`/ourprojects`}>Our Projects</a>
                         </div>
                         <div className="text-dot-container"> 
                         <span class="dot"></span>
                         <a style={{color:"white"}} href={`/contactus`}>Contact Us</a>
                         </div>
                        <ul className="MainMenuList">
                            {/* <li onClick={(e) => SetServiceDropDown(!ServiceDropDown)}>
                            Services
                              </li> */}
                          
                          {/* mobileview */}
                          <div className="Service_Mobile">
                            <List
                              sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
                              component="nav"
                              // aria-labelledby="nested-list-subheader"
                            >
                              <ListItemButton id="Mob_nav">
                                <a className="Nav_links" href={`/about`}>
                                  <ListItemText id="Mob_items" primary="About" />
                                </a>
                              </ListItemButton>
                              <ListItemButton  id="Mob_nav" onClick={handleClick}>
                                <ListItemText id="Mob_items" className="dropDown_list" primary="Services" />
                                {open ? <ExpandLess/> : <ExpandMore/>}
                              </ListItemButton>
                              <Collapse className="Service_list" in={open} timeout="auto" unmountOnExit>
                                <List component="div" disablePadding>
                                {/* primaryTypographyProps={{fontSize: "1.4rem",color:"white",fontWeight:"500",lineHeight:1 }}  */}
                                  <ListItemButton id="Mob_nav" sx={{ pl: 6}}>
                                    <a  href={`/services/web-development`}>
                                      <ListItemText primary="WEB DEVELOPMENT" />
                                    </a>
                                  </ListItemButton>
                                  <ListItemButton id="Mob_nav" sx={{ pl: 6 }}>
                                    <a  href={`/services/app-development`}>
                                      <ListItemText primary="APP DEVELOPMENT" />
                                    </a>
                                  </ListItemButton>
                                  <ListItemButton id="Mob_nav" sx={{ pl: 6 }}>
                                    <a  href={`/services/software-development`}>
                                      <ListItemText primary="SOFTWARE DEVELOPMENT" />
                                    </a>
                                  </ListItemButton>
                                  <ListItemButton id="Mob_nav" sx={{ pl: 6 }}>
                                    <a  href={`/services/ondemand-developers`}>
                                      <ListItemText primary="ON DEMAND DEVELOPERS" />
                                    </a>
                                  </ListItemButton>
                                  <ListItemButton id="Mob_nav" sx={{ pl: 6 }}>
                                    <a  href={`/services/ui-development`}>
                                      <ListItemText primary="UI/UX DEVELOPMENT" />
                                    </a>
                                  </ListItemButton>
                                </List>
                              </Collapse>
                              <ListItemButton  id="Mob_nav"> 
                                <a className="Nav_links" href={`/blog`}>
                                  <ListItemText primary="Blog" />
                                </a>
                              </ListItemButton>
                              <ListItemButton id="Mob_nav">
                                <a className="Nav_links" href={`/ourprojects`}>
                                  <ListItemText primary="Our Projects" />
                                </a>
                              </ListItemButton>
                              <ListItemButton id="Mob_nav">
                                <a className="Nav_links" href={`/contactus`}>
                                  <ListItemText primary="Contact Us" />
                                </a>
                              </ListItemButton>
                            </List>
                          </div>
                            {/* mobileview */}

                          {/* <li className="Service_Pc">
                            <a href={`/blog`}>Blog</a>
                          </li>
                          <li className="Service_Pc">
                            <a href={`/ourprojects`}>Our Projects</a>
                          </li>
                          <li className="Service_Pc">
                            <a href={`/contactus`}>Contact Us</a>
                          </li> */}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
          
      
    </>
  );
}
