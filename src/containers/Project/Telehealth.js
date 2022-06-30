// Init
import React from "react";

// Importing Components
import NavBar from "../../components/Common/NavBar";
import DetailHeader from "../../components/ProjectDetails/DetailHeader";
import Telehealth_Header from "../../assets/images/telehealth_header.png";
import DetailOverview from "../../components/ProjectDetails/DetailOverview";
import OV_Telehealth from "../../assets/images/ov_telehealth.png";
import DetailService from "../../components/ProjectDetails/DetailService";

import Kidcab_Avatar from "../../assets/images/kidcabAvatar.png";
import DetailDemo from "../../components/ProjectDetails/DetailDemo";
import Tele_Demo from "../../assets/images/telehealth_demo.png";
import DetailDesign from "../../components/ProjectDetails/DetailDesign";
import Tele_Design1 from "../../assets/images/telehealth_design1.png";
import Tele_Design2 from "../../assets/images/telehealth_design2.png";
import Tele_Design3 from "../../assets/images/telehealth_design3.png";

import DetailTheme from "../../components/ProjectDetails/DetailTheme";
import EZbox_Theme1 from "../../assets/images/ezbox_theme1.png";
import EZbox_Theme2 from "../../assets/images/ezbox_theme2.png";
import EZbox_Theme3 from "../../assets/images/ezbox_theme3.png";
import DetailLogo from "../../components/ProjectDetails/DetailLogo";
import EZbox_Logo from "../../assets/images/detail_ezbox_logo.png";
import DetailAppDev from "../../components/ProjectDetails/DetailAppDev";
import EZbox_WebDesign from "../../assets/images/ezbox_webdesign.png";
import DetailFeedback from "../../components/ProjectDetails/DetailFeedback";
import Footer from "../../components/Common/Footer";

// Home Component
export default function Telehealth() {
  return (
    <div className="Permispop_Container">
      <NavBar ContactUs />
      <DetailHeader
        // DividerBG
        background="#136773"
        bottomBG="#136773"
        typoBG="#FBA622EB"
        HeaderImg={Telehealth_Header}
        title="Telehealth Platform"
        subTitle="What is Telehealth Platform"
        desp="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
      />
      <DetailOverview
        // desp
        // location
        titleTheme="#FBA622"
        // AvatarSrc={Kidcab_Avatar}
        nameColor="#FBA622"
        // name="Eassa Awake"
        src={OV_Telehealth}
      />
      <DetailService
        both
        // web
        // app
        titleTheme="#FBA622"
        borderColor="#FBA622"
        circleTheme="#136773"
      />

      <DetailDemo
        // desp
        // btnText
        DetailDemo_SquareDiv
        // DetailDemo_RoundDiv
        titleColor="#FBA622"
        title="EZbox Media"
        btnTheme="#FBA622"
        theme="#136773"
        src={Tele_Demo}
      />
      <DetailDesign
        titleTheme="#454238"
        title="UI DESIGN"
        // overlap
        TopImg={Tele_Design1}
        MidImg={Tele_Design2}
        BottomImg={Tele_Design3}
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
        // src1={EZbox_Theme1}
        // src2={EZbox_Theme2}
        // src3={EZbox_Theme3}
        // fullscreen
        titleTheme="#454238"
        // desp
        Theme1="#136773"
        Theme2="#FBA622"
        Theme3="#FCFCFC"
        Theme4="#454238"
        // Theme5=""
        // Theme6=""
        // Theme7=""
        // Theme7={`${linear-gradient (180deg, #E9A454 39.58%, rgba(0, 0, 0, 0) 100%), #A0A0A0;}`}
        // src={KidCab_Theme}
      />
      {/* <DetailLogo theme="#454238" src={EZbox_Logo} /> */}
      {/* <DetailAppDev
        title="WEB DESIGN"
        // desp
        halfImg={EZbox_WebDesign}
        titleTheme="#454238"
        // fullImg=(src Required)
      /> */}
      <DetailFeedback
        // titleTheme
        // despTheme
        // desp
        // location
        ThemeBG="#FBA622"
        // AvatarSrc={Kidcab_Avatar}
        // name="Eassa Awake"
      />
      <Footer />
    </div>
  );
}
