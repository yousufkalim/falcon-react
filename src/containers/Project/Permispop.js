// Init
import React from 'react';

// Importing Components
import NavBar from '../../components/Common/NavBar';
import DetailHeader from '../../components/ProjectDetails/DetailHeader';
import PermispopHeader from '../../assets/images/pp_header.png';
import DetailOverview from '../../components/ProjectDetails/DetailOverview';
import BG_Logo from '../../assets/images/pp_lite_logo.png';
import DetailDemo from '../../components/ProjectDetails/DetailDemo';
import PP_Demo from '../../assets/images/pp_demo_new.png';
import DetailService from '../../components/ProjectDetails/DetailService';
import DetailDesign from '../../components/ProjectDetails/DetailDesign';
import DetailTheme from '../../components/ProjectDetails/DetailTheme';
import DetailLogo from '../../components/ProjectDetails/DetailLogo';
import DetailAppDev from '../../components/ProjectDetails/DetailAppDev';
import AppDev from '../../assets/images/detail_appdev_new.png';
import ThemeImage from '../../assets/images/theme_image.png';

import DetailWebDev from '../../components/ProjectDetails/DetailWebDev';
import DetailFeedback from '../../components/ProjectDetails/DetailFeedback';

import Footer from '../../components/Common/Footer';

// Home Component
export default function Permispop() {
  return (
    <div className='Permispop_Container'>
      <NavBar ContactUs />
      <DetailHeader
        background='#2FAD93'
        bottomBG='#2FAD93'
        typoBG='#FF9A20EB'
        HeaderImg={PermispopHeader}
        title='Permispop.'
        subTitle='Permispop'
        description='Permispop is a web platform connecting students, independent driving teachers, and driving schools. Each type of user has a dedicated interface, allowing them to manage their activities efficiently.'
      />
      <DetailOverview
        name='Salim S.'
        desp='Permispop is a web platform connecting students, independent driving teachers, and driving schools. Each type of user has a dedicated interface, allowing them to manage their activities efficiently. The possibility to search for an instructor with an interactive map, and book a session depending on his availability. The booking feature allows the driving schools and instructors to have an overview of all the activities and manage them efficiently; At the end of each session, the student can rate the instructor and provide feedback to the platform; An internal messaging system; A digital driving booklet, allowing the instructors to have an overview of the level of each student, and add any progress made.'
      />
      <DetailService both BGLogo liteLogo={BG_Logo} />
      <DetailDemo 
      src={PP_Demo} 
      to='https://permispop.fr/' 
        desp='Permispop is a web platform and a mobile app connecting students, independent driving teachers, and driving schools. Each type of user has a dedicated interface, allowing them to manage their activities efficiently. The possibility to search for an instructor with an interactive map, and book a session depending on his availability. The booking feature allows the driving schools and instructors to have an overview of all the activities and manage them efficiently; At the end  of each session, the student can rate the instructor and provide feedback to the platform; An internal messaging system; A digital driving booklet, allowing the instructors to have an overview of the level of each student, and add any progress made.'
      />
      <DetailDesign
        grids
        // overlap
      />
      <DetailTheme
        centerImage
        // fullscreen
        Theme1='#FFA333'
        Theme2='#11A283'
        Theme3='#00654F'
        Theme4='#454238'
        Theme5='#F6FAFB'
        Theme6='#C8CFD0'
        src={ThemeImage}
      />
      <DetailLogo />
      <DetailAppDev halfImg={AppDev} />
      <DetailWebDev
        // titleTheme
        // AvatarSrc
        // nameColor
        name='Salim S.'
        // location
        feedback='We at Permispop are very impressed with all aspects of our website and mobile app, as it is user-friendly and work efficiently. We would highly recommend Falcon IT to anyone looking to build a website, web app, or mobile application.'
      />
      {/* <DetailFeedback /> */}
      <Footer />
    </div>
  );
}
