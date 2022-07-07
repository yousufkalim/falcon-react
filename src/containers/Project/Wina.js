// Init
import React from "react";

// Importing Components
import NavBar from "../../components/Common/NavBar";
import DetailHeader from "../../components/ProjectDetails/DetailHeader";
import Wina_Header from "../../assets/images/wina_header.png";
import DetailOverview from "../../components/ProjectDetails/DetailOverview";
import OV_Wina from "../../assets/images/ov_wina.png";
import DetailService from "../../components/ProjectDetails/DetailService";

import QB_Avatar from "../../assets/images/overview_quadraAvatar.png";
import DetailDemo from "../../components/ProjectDetails/DetailDemo";
import Wina_Demo from "../../assets/images/wina_demo.png";
import DetailDesign from "../../components/ProjectDetails/DetailDesign";
import Yuwway_Design1 from "../../assets/images/yuwway_design1.png";
import Yuwway_Design2 from "../../assets/images/yuwway_design2.png";
import Yuwway_Design3 from "../../assets/images/yuwway_design3.png";

import DetailTheme from "../../components/ProjectDetails/DetailTheme";
import Firemen_Theme from "../../assets/images/firemen_theme.png";
import DetailLogo from "../../components/ProjectDetails/DetailLogo";
import Wina_Logo from "../../assets/images/detail_wina_logo_new.png";
import DetailAppDev from "../../components/ProjectDetails/DetailAppDev";
import Wina_AppDesign from "../../assets/images/wina_appdesign.png";
import Wina_WebDesign from "../../assets/images/wina_webdesign.png";

import DetailFeedback from "../../components/ProjectDetails/DetailFeedback";
import Facility_Theme from "../../assets/images/facility_theme.png";

import Footer from "../../components/Common/Footer";

// Home Component
export default function Wina() {
  return (
    <div className='Permispop_Container'>
      <NavBar ContactUs />
      <DetailHeader
        background='#282828'
        bottomBG='#2A5AA6'
        typoBG='#2A5AA6'
        HeaderImg={Wina_Header}
        title='Wina'
        subTitle='What is Wina'
        // iconTheme="#9D3C64"
        desp="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
      />
      <DetailOverview
        titleTheme='#2A5AA6'
        // desp=""
        AvatarSrc={QB_Avatar}
        nameColor='#2A5AA6'
        name='Shane Jhon'
        // location="France"
        src={OV_Wina}
      />
      <DetailService
        // app
        // web
        both
        titleTheme='#2A5AA6'
        borderColor='#282828'
        circleTheme='#2A5AA6'
      />

      <DetailDemo
        // desp
        // btnText
        // DetailDemo_SquareDiv
        DetailDemo_RoundDiv
        titleColor='#2A5AA6'
        title='Wina'
        btnTheme='#2A5AA6'
        theme='#2A5AA6'
        src={Wina_Demo}
      />
      <DetailDesign
        titleTheme='#2A5AA6'
        title='APP UI DESIGN'
        // overlap
        // TopImg={Yuwway_Design1}
        // MidImg={Yuwway_Design2}
        // BottomImg={Yuwway_Design3}
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
        // src1={OrgaPlan_Theme}
        // src2={OrgaPlan_Theme}
        // src3={EZbox_Theme3}
        // fullscreen
        title='COLOR THEME'
        titleTheme='#2A5AA6'
        // desp
        Theme1='#2A5AA6'
        Theme2='#FAFAFA'
        Theme3='#D1A38D'
        Theme4='#191A1F'
        // Theme5="#00000040"
        // Theme6=""
        // Theme7=""
        // Theme7={`${linear-gradient (180deg, #E9A454 39.58%, rgba(0, 0, 0, 0) 100%), #A0A0A0;}`}
        // src={Firemen_Theme}
      />
      <DetailLogo theme='#2A5AA6' src={Wina_Logo} />
      <DetailAppDev
        title='MOBILE APP DEVELOPMENT'
        // desp
        fullImg={Wina_AppDesign}
        titleTheme='#2A5AA6'
        // halfImg={Wina_AppDesign}
      />
      <DetailAppDev
        title='WEB DEVELOPMENT'
        // desp
        fullImg={Wina_WebDesign}
        titleTheme='#2A5AA6'
        // halfImg={Wina_AppDesign}
      />
      <DetailFeedback
        // titleTheme="#3675B7"
        // despTheme="#282828"
        // desp
        // location
        ThemeBG='#2A5AA6'
        // AvatarSrc={Kidcab_Avatar}
        name='Shane jhon'
      />
      <Footer />
    </div>
  );
}
