import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Logo from "../../assets/images/logo.png";
import LogoWhite from "../../assets/images/logo_white.png";
import NavMenu from "../../assets/images/NavMenu.png";
import WhiteMenuIcon from "../../assets/images/WhiteMenuIcon.svg";
import CloseIcon from "../../assets/images/close_White.png";
import MenuImg from "../../assets/images/MenuImg.svg";
import { Divider, Typography } from "@mui/material";
import { motion } from "framer-motion";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import NavBarMenu from "./NavBarMenu";
export default function NavBar(props) {
  const [Menu, SetMenu] = React.useState(false);
  
  return (
    <>
      {props.ContactUs ? (
        <Box className="NavBarBox" sx={{ flexGrow: 1 }}>
          <AppBar
            className="AppBarBox"
            position="fixed"
            sx={{
              backgroundColor: "#02356f",
              color: "blue",
              padding: "0px 20px",
              boxShadow: "0px 4px 13px rgba(0, 0, 0, 0.1)",
            }}
          >
            {Menu ? (
              <>
              <NavBarMenu Menu={Menu} SetMenu={SetMenu} />
              </>
            ) : (
              <Toolbar className="NavToolbar" >
                <a href={`/`}>
                  <img alt="logo" src={LogoWhite} style={{ width: "75%" ,marginTop:"5%" }} />
                </a>
                <img
                  className="MenuIconMob"
                  alt="menu"
                  src={WhiteMenuIcon}
                  style={{ width: "2.5%" }}
                  onClick={(e) => SetMenu(!Menu)}
                />
              </Toolbar>
            )}
          </AppBar>
        </Box>
      ) : (
        <Box className="NavBarBox" sx={{ flexGrow: 1 }}>
          <AppBar
            className="AppBarBox"
            position="fixed"
            sx={{
              backgroundColor: "white",
              color: "blue",
              padding: "0px 20px",
              boxShadow: "0px 4px 13px rgba(0, 0, 0, 0.1)",
            }}
          >
            {Menu ? (
              <>
              <NavBarMenu Menu={Menu} SetMenu={SetMenu}/>
              </>
            ) : (
              <Toolbar className="NavToolbar">
                <a href={`/`}>
                  <img alt="logo" src={Logo} style={{ width: "75%",marginTop:"5%" }} />
                </a>

                <img className="MenuIconMob" alt="menu" src={NavMenu} style={{ width: "2.5%" }} onClick={(e) => SetMenu(!Menu)} />
              </Toolbar>
            )}
          </AppBar>
        </Box>
      )}
    </>
  );
}
