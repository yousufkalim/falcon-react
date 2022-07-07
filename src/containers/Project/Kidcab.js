// Init
import React from "react";

// Importing Components
import NavBar from "../../components/Common/NavBar";
import DetailHeader from "../../components/ProjectDetails/DetailHeader";
import KidcabHeader from "../../assets/images/kidcabHeader.png";
import DetailOverview from "../../components/ProjectDetails/DetailOverview";
import OV_Kidcab from "../../assets/images/kidcab_overview.png";
import DetailService from "../../components/ProjectDetails/DetailService";
import BG_Logo from "../../assets/images/kidcab_lite_logo.png";

import Kidcab_Avatar from "../../assets/images/kidcabAvatar.png";
import DetailDemo from "../../components/ProjectDetails/DetailDemo";
import KidCab_Demo from "../../assets/images/kidcab_demo_new.png";
import DetailDesign from "../../components/ProjectDetails/DetailDesign";
import DetailTheme from "../../components/ProjectDetails/DetailTheme";
import KidCab_Theme from "../../assets/images/kidcab_theme.png";
import DetailLogo from "../../components/ProjectDetails/DetailLogo";
import Kidcab_Logo from "../../assets/images/detail_kidcab_logo.png";
import DetailAppDev from "../../components/ProjectDetails/DetailAppDev";
import KidCab_AppDesign from "../../assets/images/kidcab_appDesign_new.png";
import KidCab_WebDesign from "../../assets/images/kidcab_webDesign_new.png";
import DetailFeedback from "../../components/ProjectDetails/DetailFeedback";
import Footer from "../../components/Common/Footer";

// Home Component
export default function Kidcab() {
  return (
    <div className='Permispop_Container'>
      <NavBar ContactUs />
      <DetailHeader
        // DividerBG
        background='#18374E'
        bottomBG='#18374E'
        typoBG='#18374E'
        HeaderImg={KidcabHeader}
        title='KidCab.'
        subTitle='What is KidCab'
        desp="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
      />
      <DetailOverview
        // desp
        // location
        titleTheme='#4CB9B4'
        AvatarSrc={Kidcab_Avatar}
        nameColor='#4CB9B4'
        name='Steve Jobs'
        src={OV_Kidcab}
      />
      <DetailService
        // both
        // web
        app
        titleTheme='#4CB9B4'
        borderColor='#18374E'
        circleTheme='#4CB9B4'
        BGLogo
        liteLogo={BG_Logo}
      />

      <DetailDemo
        // desp
        // btnText
        // DetailDemo_SquareDiv
        // DetailDemo_RoundDiv
        titleColor='#4CB9B4'
        title='KidCab'
        btnTheme='#18374E'
        theme='#18374E'
        src={KidCab_Demo}
      />
      <DetailDesign
        // titleTheme
        // title
        // overlap
        // TopImg
        // MidImg
        // BottomImg
        grids
        // src1
        // src2
        // src3
        // src4
        // src5
        // src6
        // overlap
      />

      <DetailTheme
        // desp
        // centerImage
        // src
        // Images
        // src1
        // src2
        // src3
        fullscreen
        titleTheme='#4CB9B4'
        // desp
        Theme1='#18374E'
        Theme2='#4CB9B4'
        Theme3='#4D525B'
        Theme4='#FDFFFE'
        Theme5='#CCCCCC'
        Theme6='#CCCCCC'
        // Theme7
        src={KidCab_Theme}
      />
      <DetailLogo theme='#ffffff' src={Kidcab_Logo} />
      <DetailAppDev
        // title
        // desp
        halfImg={KidCab_AppDesign}
        titleTheme='#4CB9B4'
        // fullImg={KidCab_AppDesign}
      />
      <DetailAppDev
        title='WEB DEVELOPMENT'
        // desp
        // halfImg={KidCab_AppDesign}
        titleTheme='#4CB9B4'
        fullImg={KidCab_WebDesign}
      />
      <DetailFeedback
        // titleTheme
        // despTheme
        // desp
        // location
        ThemeBG='#18374E'
        AvatarSrc={Kidcab_Avatar}
        name='Steve Jobs'
      />
      <Footer />
    </div>
  );
}
