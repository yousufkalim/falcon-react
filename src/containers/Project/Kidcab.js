// Init
import React from 'react';

// Importing Components
import NavBar from '../../components/Common/NavBar';
import DetailHeader from '../../components/ProjectDetails/DetailHeader';
import KidcabHeader from '../../assets/images/kidcabHeader.png';
import DetailOverview from '../../components/ProjectDetails/DetailOverview';
import OV_Kidcab from '../../assets/images/kidcab_overview.png';
import DetailService from '../../components/ProjectDetails/DetailService';
import BG_Logo from '../../assets/images/kidcab_lite_logo.png';

import Kidcab_Avatar from '../../assets/images/kidcabAvatar.png';
import DetailDemo from '../../components/ProjectDetails/DetailDemo';
import KidCab_Demo from '../../assets/images/kidcab_demo_new.png';
import DetailDesign from '../../components/ProjectDetails/DetailDesign';
import DetailTheme from '../../components/ProjectDetails/DetailTheme';
import KidCab_Theme from '../../assets/images/kidcab_theme.png';
import DetailLogo from '../../components/ProjectDetails/DetailLogo';
import Kidcab_Logo from '../../assets/images/detail_kidcab_logo.png';
import DetailAppDev from '../../components/ProjectDetails/DetailAppDev';
import KidCab_AppDesign from '../../assets/images/kidcab_appDesign_new.png';
import KidCab_WebDesign from '../../assets/images/kidcab_webDesign_new.png';
import DetailFeedback from '../../components/ProjectDetails/DetailFeedback';
import Footer from '../../components/Common/Footer';

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
        subTitle='KidCab'
        description='Kidcab is a mobile application aiming to help parents find drivers for their children’s activities, and safely monitor their location. For our partner, we developed two mobile application and a Ride Management web application.'
      />
      <DetailOverview
        // desp
        desp='KidCab, a mobile app project was designed for the French client very efficiently as this project required work carefully on the code optimization, and especially all the API calls in order to minimize the operation costs. App is developed on React Native and the whole project took 7 months from November 2021 to May 2022.'
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
        desp='Kidcab is a mobile application aiming to help parents find drivers for their children’s activities and safely monitor their location. For our partner, we developed two mobile applications and a Ride Management web application.The Driver mobile application allows them to receive ride offers and see an overview of the upcoming and past activities. When being on a ride, the application is having similar features to Uber.The Parent’s mobile application shows the live location of the driver and allows to monitor all the past and upcoming rides.Finally, the Ride Management website is intended for Kidcab administrators to create, manage and assign efficiently the activities of the company. An in-app quote and invoice management tool has also been created.'
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
        desp='Expertise and systematic approach to fulfilling client needs. I love the energy and excitement the Falcon IT team exhibits towards the success of my APP.'
        // location
        ThemeBG='#18374E'
        AvatarSrc={Kidcab_Avatar}
        name='Steve Jobs'
      />
      <Footer />
    </div>
  );
}
