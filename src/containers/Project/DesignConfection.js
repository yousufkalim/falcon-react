// Init
import React from "react";

// Importing Components
import NavBar from "../../components/Common/NavBar";
import DetailHeader from "../../components/ProjectDetails/DetailHeader";
import DesignConfectionHeader from "../../assets/images/detail_DC_header.png";
import DetailOverview from "../../components/ProjectDetails/DetailOverview";
import OV_DesignConfection from "../../assets/images/detail_dc_overview.png";
import DetailService from "../../components/ProjectDetails/DetailService";

import Kidcab_Avatar from "../../assets/images/kidcabAvatar.png";
import DetailDemo from "../../components/ProjectDetails/DetailDemo";
import DC_Demo from "../../assets/images/detail_dc_demo.png";
import DetailDesign from "../../components/ProjectDetails/DetailDesign";
import DC_Design1 from "../../assets/images/dc_design1.png";
import DC_Design2 from "../../assets/images/dc_design2.png";
import DC_Design3 from "../../assets/images/dc_design3.png";

import DetailTheme from "../../components/ProjectDetails/DetailTheme";
import DC_Theme1 from "../../assets/images/dc_theme1.png";
import DC_Theme2 from "../../assets/images/dc_theme2.png";
import DetailLogo from "../../components/ProjectDetails/DetailLogo";
import DC_Logo from "../../assets/images/dc_logo.png";
import DetailAppDev from "../../components/ProjectDetails/DetailAppDev";
import DC_WebDesign from "../../assets/images/detail_dc_webdesign.png";
import DetailFeedback from "../../components/ProjectDetails/DetailFeedback";
import Footer from "../../components/Common/Footer";

// Home Component
export default function DesignConfection() {
  return (
    <div className="Permispop_Container">
      <NavBar ContactUs />
      <DetailHeader
        // DividerBG
        background="#CC8E9C"
        bottomBG="#CC8E9C"
        typoBG="#CC8E9C"
        HeaderImg={DesignConfectionHeader}
        title="Design Confection."
        subTitle="What is Design Confection"
        desp="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
      />
      <DetailOverview
        // desp
        // location
        titleTheme="#282828"
        AvatarSrc={Kidcab_Avatar}
        nameColor="#CC8E9C"
        name="Designer JK"
        src={OV_DesignConfection}
      />
      <DetailService
        // both
        web
        // app
        titleTheme="#282828"
        borderColor="#282828"
        circleTheme="#CC8E9C"
      />

      <DetailDemo
        // desp
        // btnText
        DetailDemo_SquareDiv
        // DetailDemo_RoundDiv
        titleColor="#282828"
        title="Design Confection"
        btnTheme="#CC8E9C"
        theme="#CC8E9C"
        src={DC_Demo}
      />
      <DetailDesign
        titleTheme="#282828"
        title="UI DESIGN"
        // overlap
        TopImg={DC_Design1}
        MidImg={DC_Design2}
        BottomImg={DC_Design3}
        // grids
        // src1
        // src2
        // src3
        // src4
        // src5
        // src6
        overlap
      />

      <DetailTheme
        // desp
        // centerImage
        // src
        Images
        src1={DC_Theme1}
        src2={DC_Theme2}
        // src3
        // fullscreen
        titleTheme="#282828"
        // desp
        Theme1="#000000"
        Theme2="#CC8E9C"
        Theme3="#F7C9D0"
        Theme4="#FFFFFF"
        Theme5="#A0A0A0"
        Theme6="#DBDBDB"
        Theme7="#E9A454"
        // Theme7={`${linear-gradient (180deg, #E9A454 39.58%, rgba(0, 0, 0, 0) 100%), #A0A0A0;}`}
        // src={KidCab_Theme}
      />
      <DetailLogo theme="#282828" src={DC_Logo} />
      <DetailAppDev
        title="WEB DESIGN"
        // desp
        // halfImg (src Required)
        titleTheme="#282828"
        fullImg={DC_WebDesign}
      />
      <DetailFeedback
        // titleTheme
        // despTheme
        // desp
        // location
        ThemeBG="#CC8E9C"
        AvatarSrc={Kidcab_Avatar}
        name="Designer JK"
      />
      <Footer />
    </div>
  );
}
