// Init
import React from 'react';

// Importing Components
import NavBar from '../../components/Common/NavBar';
import DetailHeader from '../../components/ProjectDetails/DetailHeader';
import Orientator_Header from '../../assets/images/orientator_header.png';
import DetailOverview from '../../components/ProjectDetails/DetailOverview';
import OV_Orientator from '../../assets/images/ov_orientator.png';
import DetailService from '../../components/ProjectDetails/DetailService';

import QB_Avatar from '../../assets/images/overview_quadraAvatar.png';
import DetailDemo from '../../components/ProjectDetails/DetailDemo';
import Firemen_Demo from '../../assets/images/firemen_demo.png';
import DetailDesign from '../../components/ProjectDetails/DetailDesign';
import Facility_Design1 from '../../assets/images/facility_design1.png';
import Facility_Design2 from '../../assets/images/facility_design2.png';
import Facility_Design3 from '../../assets/images/facility_design3.png';

import DetailTheme from '../../components/ProjectDetails/DetailTheme';
import Orientator_Theme from '../../assets/images/orientator_theme.png';
import Orientator_WebHalf from '../../assets/images/orientator_webhalf.png';
import Orientator_WebFull from '../../assets/images/orientator_webfull.png';
import DetailLogo from '../../components/ProjectDetails/DetailLogo';
import Yuwway_Logo from '../../assets/images/detail_yuwway_logo.png';
import DetailAppDev from '../../components/ProjectDetails/DetailAppDev';
import Yuwway_AppDesign from '../../assets/images/yuwway_appdesign.png';
import DetailFeedback from '../../components/ProjectDetails/DetailFeedback';
import Facility_Theme from '../../assets/images/facility_theme.png';

import Footer from '../../components/Common/Footer';

// Home Component
export default function Orientator() {
  return (
    <div className='Permispop_Container'>
      <NavBar ContactUs />
      <DetailHeader
        background='#282828'
        bottomBG=' linear-gradient(269.14deg, #BE9400 0%, #CB4B03 48.96%, #8B0054 100%)'
        typoBG=' linear-gradient(269.14deg, #BE9400 0%, #CB4B03 48.96%, #8B0054 100%)'
        HeaderImg={Orientator_Header}
        title='Orientator'
        subTitle='Orientator'
        // iconTheme="#9D3C64"
        description='Orientator is a web application that allows high school students to make their best career choice, after filling out an online and customized questionnaire.'
      />
      <DetailOverview
        titleTheme='#FF29AA'
        desp='Orientator is a web application that allows high school students to make their best career choice, after filling out an online and customized questionnaire.'
        // desp=""
        AvatarSrc={QB_Avatar}
        nameColor='FF29AA'
        name='Ukhano'
        // location="France"
        src={OV_Orientator}
      />
      <DetailService
        // app
        web
        // both
        titleTheme='#FF29AA'
        borderColor='#FF29AA'
        circleTheme=' linear-gradient(223deg, #FECE24 6.67%, #FF6D1A 50.27%, #FF29AA 87.16%)'
      />

      <DetailDemo
        // desp
        // btnText
        DetailDemo_SquareDiv
        // DetailDemo_RoundDiv
        titleColor='#FF29AA'
        title='ORIENTATOR'
        btnTheme='linear-gradient(267.62deg, #FF3A87 1.18%, #FF6924 47.48%, #FFA220 100%)'
        theme='linear-gradient(229.11deg, #FECE24 1.54%, #FF6D1A 100%)'
        src={Firemen_Demo}
      />
      <DetailDesign
        titleTheme='#FF29AA'
        title='UI DESIGN'
        // overlap
        // TopImg={Facility_Design1}
        // MidImg={Facility_Design2}
        // BottomImg={Facility_Design3}
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
        title='COLOR THEME AND DESIGN'
        titleTheme='#FF29AA'
        // desp
        Theme1='#FF29AA'
        Theme2='#FF6D1A'
        Theme3='#FFFFFF'
        Theme4='#191A1F'
        Theme5='#575961'
        // Theme6=""
        // Theme7=""
        // Theme7={`${linear-gradient (180deg, #E9A454 39.58%, rgba(0, 0, 0, 0) 100%), #A0A0A0;}`}
        // src={Orientator_Theme}
      />
      {/* <DetailLogo theme="#0073BB" src={Yuwway_Logo} /> */}
      <DetailAppDev
        title='WEB DEVELOPMENT'
        // desp
        fullImg={Orientator_WebFull}
        titleTheme='#FF29AA'
        halfImg={Orientator_WebHalf}
      />
      <DetailFeedback
        // titleTheme="#FF29AA"
        // despTheme="#282828"
        // desp
        // location
        ThemeBG='linear-gradient(269.14deg, #BE9400 0%, #CB4B03 48.96%, #8B0054 100%)'
        // AvatarSrc={Kidcab_Avatar}
        name='Ukhano'
      />
      <Footer />
    </div>
  );
}
