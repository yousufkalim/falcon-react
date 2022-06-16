import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Logo from "../../assets/images/logo.svg";
import LogoWhite from "../../assets/images/logo_white.svg";
import NavMenu from "../../assets/images/NavMenu.png";
import WhiteMenuIcon from "../../assets/images/WhiteMenuIcon.svg";
import NavBarMenu from "./NavBarMenu";
import { Link } from "react-router-dom";
import { useScrollPosition } from "../../utils/ScrollPosition";

export default function NavBar(props) {
  const [Menu, SetMenu] = React.useState(false);

  let position = useScrollPosition();
  console.log(position, "position");
  return (
    <>
      {props.ContactUs ? (
        <Box className="NavBarBox" sx={{ flexGrow: 1 }}>
          <AppBar
            className="AppBarBox"
            position="fixed"
            sx={{
              backgroundColor: "#0000000D",
              color: "blue",
              padding: "0px 20px",
              boxShadow: position <= 3 && "none",
            }}
          >
            {Menu ? (
              <NavBarMenu Menu={Menu} SetMenu={SetMenu} />
            ) : (
              <Toolbar className="NavToolbar" sx={{ width: "95%" }}>
                <Link to={`/`}>
                  <img
                    className="Falcon_logo"
                    alt="logo"
                    src={LogoWhite}
                    style={{ width: "10%", margin: "1% 0", cursor: "pointer" }}
                  />
                </Link>
                <img
                  className="MenuIconMob"
                  alt="menu"
                  src={WhiteMenuIcon}
                  style={{ width: "2.5%", cursor: "pointer" }}
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
              boxShadow: position <= 3 && "none",
            }}
          >
            {Menu ? (
              <NavBarMenu Menu={Menu} SetMenu={SetMenu} />
            ) : (
              <Toolbar className="NavToolbar">
                <Link to={`/`}>
                  <img
                    className="Falcon_logo"
                    alt="logo"
                    src={Logo}
                    style={{ width: "10%", margin: "1% 0", cursor: "pointer" }}
                  />
                </Link>

                <img
                  className="MenuIconMob"
                  alt="menu"
                  src={NavMenu}
                  style={{ width: "2.5%", cursor: "pointer" }}
                  onClick={(e) => SetMenu(!Menu)}
                />
              </Toolbar>
            )}
          </AppBar>
        </Box>
      )}
    </>
  );
}
