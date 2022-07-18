// Init
import React from "react";

// Importing Components
import NavBar from "../../components/Common/NavBar";
import DetailHeader from "../../components/ProjectDetails/DetailHeader";
import EZbox_Header from "../../assets/images/ezbox_header.png";
import DetailOverview from "../../components/ProjectDetails/DetailOverview";
import OV_EZbox from "../../assets/images/ov_ezbox.png";
import DetailService from "../../components/ProjectDetails/DetailService";
import BG_Logo from "../../assets/images/ezbox_lite_logo.png";

import Kidcab_Avatar from "../../assets/images/kidcabAvatar.png";
import DetailDemo from "../../components/ProjectDetails/DetailDemo";
import EZbox_Demo from "../../assets/images/ezbox_demo_new.png";
import DetailDesign from "../../components/ProjectDetails/DetailDesign";
import EZbox_Design1 from "../../assets/images/ezbox_design1.png";
import EZbox_Design2 from "../../assets/images/ezbox_design2.png";
import EZbox_Design3 from "../../assets/images/ezbox_design3.png";

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
export default function EZbox() {
  return (
    <div className='Permispop_Container'>
      <NavBar ContactUs />
      <DetailHeader
        // DividerBG
        background='#454238'
        bottomBG='#3399FE'
        typoBG='#3399FE'
        HeaderImg={EZbox_Header}
        title='EZbox Media'
        subTitle='What is EZbox Media'
        description='EZBox media is a platform providing different services'
      />
      <DetailOverview
        // desp
        desp='EZBox media is a platform providing different services. Advertising by understanding how a user can react to the advertisement shown to them. Target ads based on non-personal criteria. EZBox media helps Product development for the next generation products with the wide variety of technologies available today. EZBoxmedia worked with leading consumer electronics manufacturers to design and provide turnkey solutions.'
        // location
        titleTheme='#454238'
        AvatarSrc={Kidcab_Avatar}
        nameColor='#3399FE'
        name='Eassa Awake'
        src={OV_EZbox}
      />
      <DetailService
        // both
        web
        // app
        titleTheme='#454238'
        borderColor='#454238'
        circleTheme='#3399FE'
        BGLogo
        liteLogo={BG_Logo}
      />

      <DetailDemo
        to='https://ezboxmedia.com/'
        // desp
        // btnText
        DetailDemo_SquareDiv
        // DetailDemo_RoundDiv
        titleColor='#454238'
        title='EZbox Media'
        btnTheme='#3399FE'
        theme='#3399FE'
        src={EZbox_Demo}
      />
      <DetailDesign
        titleTheme='#454238'
        title='UI DESIGN'
        // overlap
        // TopImg={EZbox_Design1}
        // MidImg={EZbox_Design2}
        // BottomImg={EZbox_Design3}
        grids
        src1={EZbox_Design2}
        src2={EZbox_Design1}
        src3={EZbox_Design2}
        src4={EZbox_Design1}
        src5={EZbox_Design3}
        src6={EZbox_Design1}
        // overlap
      />

      <DetailTheme
        // desp
        // centerImage
        // src
        Images
        src1={EZbox_Theme1}
        src2={EZbox_Theme2}
        src3={EZbox_Theme3}
        // fullscreen
        titleTheme='#454238'
        // desp
        Theme4='#454238'
        Theme1='#3399FE'
        Theme2='#FCFCFC'
        Theme3='linear-gradient(180deg, #FE9433 0%, rgba(210, 202, 248, 0.12) 100%)'
        // Theme5=""
        // Theme6=""
        // Theme7=""
        // Theme7={`${linear-gradient (180deg, #E9A454 39.58%, rgba(0, 0, 0, 0) 100%), #A0A0A0;}`}
        // src={KidCab_Theme}
      />
      <DetailLogo theme='#454238' src={EZbox_Logo} />
      <DetailAppDev
        title='WEB DESIGN'
        // desp
        halfImg={EZbox_WebDesign}
        titleTheme='#454238'
        // fullImg=(src Required)
      />
      <DetailFeedback
        // titleTheme
        // despTheme
        // desp
        // location
        ThemeBG='#3399FE'
        AvatarSrc={Kidcab_Avatar}
        name='Eassa Awake'
      />
      <Footer />
    </div>
  );
}
