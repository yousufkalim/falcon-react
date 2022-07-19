import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Logo from "../../assets/images/logo.svg";
import { ReactComponent as LogoWhite } from "../../assets/images/logo_white.svg";
import NavMenu from "../../assets/images/NavMenu.png";
import { ReactComponent as WhiteMenuIcon } from "../../assets/images/WhiteMenuIcon.svg";
import NavBarMenu from "./NavBarMenu";
import { Link } from "react-router-dom";
import { useScrollPosition } from "../../utils/ScrollPosition";

export default function NavBar(props) {
  const [Menu, SetMenu] = React.useState(false);

  let position = useScrollPosition();
  return (
    <>
      {props.ContactUs ? (
        <Box className='NavBarBox' sx={{ flexGrow: 1 }}>
          <AppBar
            className='AppBarBox'
            position='fixed'
            sx={{
              transition: ".5s",
              backgroundColor: position <= 970 ? "#0000000D" : "white",
              color: "blue",
              padding: "0px 20px",
              boxShadow: position <= 3 && "none",
            }}
          >
            {Menu ? (
              <NavBarMenu Menu={Menu} SetMenu={SetMenu} />
            ) : (
              <Toolbar className='NavToolbar '>
                <Link className='NavLogo_Link' to={`/`}>
                  <LogoWhite
                    // className="Falcon_logo"
                    style={{
                      width: "100%",
                      transition: ".5s",
                      color: position <= 970 ? "white" : "#003B7E",
                      height: 40,
                    }}
                  />
                  {/* <img
                    className="Falcon_logo"
                    alt="logo"
                    src={LogoWhite}
                    style={{ width: "10%", margin: "1% 0", cursor: "pointer" }}
                  /> */}
                </Link>
                <WhiteMenuIcon
                  className='MenuIconMob'
                  onClick={(e) => SetMenu(!Menu)}
                  style={{
                    color: position <= 970 ? "white" : "#003B7E",
                    transition: ".5s",
                    cursor: "pointer",
                  }}
                />
              </Toolbar>
            )}
          </AppBar>
        </Box>
      ) : (
        <Box className='NavBarBox' sx={{ flexGrow: 1 }}>
          <AppBar
            className='AppBarBox'
            position='fixed'
            sx={{
              backgroundColor: position <= 3 ? "transparent" : "white",
              padding: "0px 20px",
              boxShadow: position <= 3 && "none",
            }}
          >
            {Menu ? (
              <NavBarMenu Menu={Menu} SetMenu={SetMenu} />
            ) : (
              <Toolbar className='NavToolbar'>
                <Link className='NavLogo_Link' to={`/`}>
                  <img
                    className='Falcon_logo'
                    alt='logo'
                    src={Logo}
                    style={{ width: "100%", margin: "1% 0", cursor: "pointer" }}
                  />
                </Link>
                <img
                  className='MenuIconMob'
                  alt='menu'
                  src={NavMenu}
                  style={{ cursor: "pointer" }}
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
