// Init
import React from 'react';

// Importing Components
import NavBar from '../../components/Common/NavBar';
import DetailHeader from '../../components/ProjectDetails/DetailHeader';
import DesignConfectionHeader from '../../assets/images/detail_DC_header.png';
import DetailOverview from '../../components/ProjectDetails/DetailOverview';
import OV_DesignConfection from '../../assets/images/detail_dc_overview.png';
import DetailService from '../../components/ProjectDetails/DetailService';
import BG_Logo from '../../assets/images/dc_lite_logo.png';
import Kidcab_Avatar from '../../assets/images/kidcabAvatar.png';
import DetailDemo from '../../components/ProjectDetails/DetailDemo';
import DC_Demo from '../../assets/images/detail_dc_demo_new.png';
import DetailDesign from '../../components/ProjectDetails/DetailDesign';
import DC_Design1 from '../../assets/images/dc_design1.png';
import DC_Design2 from '../../assets/images/dc_design2.png';
import DC_Design3 from '../../assets/images/dc_design3.png';

import DetailTheme from '../../components/ProjectDetails/DetailTheme';
import DC_Theme1 from '../../assets/images/dc_theme1.png';
import DC_Theme2 from '../../assets/images/dc_theme2.png';
import DetailLogo from '../../components/ProjectDetails/DetailLogo';
import DC_Logo from '../../assets/images/dc_logo.png';
import DetailAppDev from '../../components/ProjectDetails/DetailAppDev';
import DC_WebDesign from '../../assets/images/detail_dc_webdesign.png';
import DetailFeedback from '../../components/ProjectDetails/DetailFeedback';
import Footer from '../../components/Common/Footer';

// Home Component
export default function DesignConfection() {
  return (
    <div className='Permispop_Container'>
      <NavBar ContactUs />
      <DetailHeader
        // DividerBG
        background='#CC8E9C'
        bottomBG='#CC8E9C'
        typoBG='#CC8E9C'
        HeaderImg={DesignConfectionHeader}
        title='Design Confection.'
        subTitle='Design Confection'
        description='A web app designed to help customers with customized stitching to receive your creation at your home. '
      />
      <DetailOverview
        // desp
        // location
        desp='A web app designed to help customers with customized stitching to receive your creation at your home. User login to register and add information regarding customized dress like color combination, stuff design, etc. After registration, consumers post ads containing ideas and 100+creative designers send you the estimated costs. Choose your designer with 99% accuracy as design confection brings your ideas to life. '
        titleTheme='#282828'
        AvatarSrc={Kidcab_Avatar}
        nameColor='#CC8E9C'
        name='Designer JK'
        src={OV_DesignConfection}
      />
      <DetailService
        // both
        web
        // app
        titleTheme='#282828'
        borderColor='#282828'
        circleTheme='#CC8E9C'
        fitLogo
        liteLogo={BG_Logo}
      />

      <DetailDemo
        to='https://design-confection.web.app/'
        desp='A web app designed to help customers with customized stitching to receive your creation at your home. User login to register and add information regarding customized dress like color combination, stuff design, etc. After registration, consumers post ads containing ideas and 100+creative designers send you the estimated costs, where you can choose your designer with 99% accuracy as design confection brings your ideas to life'
        // btnText
        DetailDemo_SquareDiv
        // DetailDemo_RoundDiv
        titleColor='#282828'
        title='Design Confection'
        btnTheme='#CC8E9C'
        theme='#CC8E9C'
        src={DC_Demo}
      />
      <DetailDesign
        titleTheme='#282828'
        title='UI DESIGN'
        // overlap
        // TopImg={DC_Design1}
        // MidImg={DC_Design2}
        // BottomImg={DC_Design3}
        grids
        src1={DC_Design2}
        src2={DC_Design1}
        src3={DC_Design2}
        src4={DC_Design3}
        src5={DC_Design1}
        src6={DC_Design2}
        // overlap
      />

      <DetailTheme
        // desp
        // centerImage
        // src
        // Images
        double
        src1={DC_Theme1}
        src2={DC_Theme2}
        // src3
        // fullscreen
        titleTheme='#282828'
        // desp
        Theme1='#000000'
        Theme2='#CC8E9C'
        Theme3='#F7C9D0'
        Theme4='#FFFFFF'
        Theme5='#A0A0A0'
        Theme6='#DBDBDB'
        Theme7='linear-gradient(180deg, #E9A454 32.81%, rgba(38, 50, 56, 0) 100%), #A0A0A0'
        // Theme7={`${linear-gradient (180deg, #E9A454 39.58%, rgba(0, 0, 0, 0) 100%), #A0A0A0;}`}
        // src={KidCab_Theme}
      />
      <DetailLogo theme='#282828' src={DC_Logo} />
      <DetailAppDev
        title='WEB DEVELOPMENT'
        // desp
        // halfImg (src Required)
        titleTheme='#282828'
        fullImg={DC_WebDesign}
      />
      <DetailFeedback
        // titleTheme
        // despTheme
        desp='I contacted Falcon IT with a basic feel I wanted in a website. They developed the best of Design Confection, the overall website visual layout, and the content too. Falcon’s services are a bargain when you weigh the cost versus the product you received. I will be using them again in future endeavors. Thanks again!'
        // location
        ThemeBG='#CC8E9C'
        AvatarSrc={Kidcab_Avatar}
        name='Designer JK'
      />
      <Footer />
    </div>
  );
}
