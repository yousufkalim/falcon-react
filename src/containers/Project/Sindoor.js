// Init
import React from "react";

// Importing Components
import NavBar from "../../components/Common/NavBar";
import DetailHeader from "../../components/ProjectDetails/DetailHeader";
import Sindoor_Header from "../../assets/images/sindoor_header.png";
import DetailOverview from "../../components/ProjectDetails/DetailOverview";
import OV_Sindoor from "../../assets/images/ov_sindoor.png";
import DetailService from "../../components/ProjectDetails/DetailService";

import Kidcab_Avatar from "../../assets/images/kidcabAvatar.png";
import DetailDemo from "../../components/ProjectDetails/DetailDemo";
import Sindoor_Demo from "../../assets/images/sindoor_demo.png";
import DetailDesign from "../../components/ProjectDetails/DetailDesign";
import Sindoor_Design1 from "../../assets/images/sindoor_design1.png";
import Sindoor_Design2 from "../../assets/images/sindoor_design2.png";
import Sindoor_Design3 from "../../assets/images/sindoor_design3.png";

import DetailTheme from "../../components/ProjectDetails/DetailTheme";
import RealEstate_Theme1 from "../../assets/images/realestate_theme1.png";
import DetailLogo from "../../components/ProjectDetails/DetailLogo";
import Table_Logo from "../../assets/images/detail_table_logo.png";
import DetailAppDev from "../../components/ProjectDetails/DetailAppDev";
import Sindoor_AppDesign from "../../assets/images/sindoor_appdesign.png";
import DetailFeedback from "../../components/ProjectDetails/DetailFeedback";
import Footer from "../../components/Common/Footer";

// Home Component
export default function Sindoor() {
  return (
    <div className="Permispop_Container">
      <NavBar ContactUs />
      <DetailHeader
        // DividerBG
        background="#000000"
        bottomBG="#E45A5A"
        typoBG="#E45A5A"
        HeaderImg={Sindoor_Header}
        title="Sindoor"
        subTitle="What is Sindoor"
        desp="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
      />
      <DetailOverview
        // desp
        // location
        titleTheme="#E45A5A"
        AvatarSrc={Kidcab_Avatar}
        nameColor="#E45A5A"
        name="Rahul Karan"
        src={OV_Sindoor}
      />
      <DetailService
        // both
        // web
        app
        titleTheme="#E45A5A"
        borderColor="#18374E"
        circleTheme="#E45A5A"
      />

      <DetailDemo
        // desp
        // btnText
        // DetailDemo_SquareDiv
        DetailDemo_RoundDiv
        titleColor="#E45A5A"
        title="Sindoor"
        btnTheme="#E45A5A"
        theme="#E45A5A"
        src={Sindoor_Demo}
      />
      <DetailDesign
        titleTheme="#E45A5A"
        title="APP UI DESIGN"
        // overlap
        TopImg={Sindoor_Design1}
        MidImg={Sindoor_Design2}
        BottomImg={Sindoor_Design3}
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
        // Images
        // src1={RealEstate_Theme1}
        // src2={EZbox_Theme2}
        // src3={EZbox_Theme3}
        // fullscreen
        title="COLOR THEME"
        titleTheme="#E45A5A"
        // desp
        Theme1="#E45A5A"
        Theme2="#FAFAFA"
        Theme3="#191A1F"
        Theme4="#575961"
        // Theme5=""
        // Theme6=""
        // Theme7=""
        // Theme7={`${linear-gradient (180deg, #E9A454 39.58%, rgba(0, 0, 0, 0) 100%), #A0A0A0;}`}
        // src={KidCab_Theme}
      />
      {/* <DetailLogo theme="rgba(255, 213, 77, 0.25)" src={Table_Logo} /> */}
      <DetailAppDev
        title="MOBILE APP DEVELOPMENT"
        // desp
        // fullImg={Table_AppDesign}
        titleTheme="#E45A5A"
        halfImg={Sindoor_AppDesign}
      />
      <DetailFeedback
        // titleTheme
        // despTheme
        // desp
        // location
        ThemeBG="#E45A5A"
        AvatarSrc={Kidcab_Avatar}
        name="Rahul Karan"
      />
      <Footer />
    </div>
  );
}
