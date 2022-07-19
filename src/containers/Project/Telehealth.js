// Init
import React from 'react';

// Importing Components
import NavBar from '../../components/Common/NavBar';
import DetailHeader from '../../components/ProjectDetails/DetailHeader';
import Telehealth_Header from '../../assets/images/telehealth_header.png';
import DetailOverview from '../../components/ProjectDetails/DetailOverview';
import OV_Telehealth from '../../assets/images/ov_telehealth.png';
import DetailService from '../../components/ProjectDetails/DetailService';
import BG_Logo from '../../assets/images/tele_lite_logo.png';

import Kidcab_Avatar from '../../assets/images/kidcabAvatar.png';
import DetailDemo from '../../components/ProjectDetails/DetailDemo';
import Tele_Demo from '../../assets/images/telehealth_demo.png';
import DetailDesign from '../../components/ProjectDetails/DetailDesign';
import Tele_Design1 from '../../assets/images/telehealth_design1.png';
import Tele_Design2 from '../../assets/images/telehealth_design2.png';
import Tele_Design3 from '../../assets/images/telehealth_design3.png';

import DetailTheme from '../../components/ProjectDetails/DetailTheme';
import EZbox_Theme1 from '../../assets/images/ezbox_theme1.png';
import EZbox_Theme2 from '../../assets/images/ezbox_theme2.png';
import EZbox_Theme3 from '../../assets/images/ezbox_theme3.png';
import DetailLogo from '../../components/ProjectDetails/DetailLogo';
import EZbox_Logo from '../../assets/images/detail_ezbox_logo.png';
import DetailAppDev from '../../components/ProjectDetails/DetailAppDev';
import EZbox_WebDesign from '../../assets/images/ezbox_webdesign.png';
import DetailFeedback from '../../components/ProjectDetails/DetailFeedback';
import Footer from '../../components/Common/Footer';

// Home Component
export default function Telehealth() {
  return (
    <div className='Permispop_Container'>
      <NavBar ContactUs />
      <DetailHeader
        // DividerBG
        background='#136773'
        bottomBG='#136773'
        typoBG='#FBA622EB'
        HeaderImg={Telehealth_Header}
        title='Telehealth Platform'
        subTitle='Telehealth Platform'
        description='Telehealth platform (project name is confidential) is a US web and mobile application which allows physiotherapists to analyze the movements of their patients remotely. '
      />
      <DetailOverview
        // desp
        desp='Telehealth platform (project name is confidential) is a US web and mobile application which allows physiotherapists to analyze the movements of their patients remotely. Telehealth platform (project name is confidential) is a US web and mobile application which allows physiotherapists to analyze the movements of their patients remotely. The patient is filmed performing different types of exercises, and the tool detects and calculates the angles of the patient body (such as his legs, arms, foot, waist, etc…). The program then analyzes the data based on internal rules, and deduces whether the movements are abnormal or not. The detection of the movements is done with the help of Mediapipe, and requires an advanced knowledge in terms of image processing in order to ensure a fluidity and accuracy of the final results. '
        // location
        titleTheme='#FBA622'
        // AvatarSrc={Kidcab_Avatar}
        nameColor='#FBA622'
        name='Confidential'
        src={OV_Telehealth}
      />
      <DetailService
        both
        // web
        // app
        titleTheme='#FBA622'
        borderColor='#FBA622'
        circleTheme='#136773'
        BGLogo
        liteLogo={BG_Logo}
      />

      <DetailDemo
        to='https://screnr-ui.web.app/'
        // desp
        // btnText
        DetailDemo_SquareDiv
        // DetailDemo_RoundDiv
        titleColor='#FBA622'
        title='Tele Health Platform'
        btnTheme='#FBA622'
        theme='#136773'
        src={Tele_Demo}
      />
      <DetailDesign
        titleTheme='#454238'
        title='UI DESIGN'
        // overlap
        // TopImg={Tele_Design1}
        // MidImg={Tele_Design2}
        // BottomImg={Tele_Design3}
        grids
        src1={Tele_Design2}
        src2={Tele_Design3}
        // src3={Tele_Design2}
        // src4
        src5={Tele_Design1}
        src6={Tele_Design2}
        // overlap
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
        titleTheme='#454238'
        // desp
        Theme1='#136773'
        Theme2='#FBA622'
        Theme3='#FCFCFC'
        Theme4='#454238'
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
        ThemeBG='#FBA622'
        // AvatarSrc={Kidcab_Avatar}
        name='Confidential'
      />
      <Footer />
    </div>
  );
}
