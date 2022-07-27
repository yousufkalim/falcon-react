// Init
import React from 'react';

// Importing Components
import NavBar from '../../components/Common/NavBar';
import DetailHeader from '../../components/ProjectDetails/DetailHeader';
import Sindoor_Header from '../../assets/images/sindoor_header.png';
import DetailOverview from '../../components/ProjectDetails/DetailOverview';
import OV_Sindoor from '../../assets/images/ov_sindoor.png';
import DetailService from '../../components/ProjectDetails/DetailService';

import Kidcab_Avatar from '../../assets/images/kidcabAvatar.png';
import DetailDemo from '../../components/ProjectDetails/DetailDemo';
import Sindoor_Demo from '../../assets/images/sindoor_demo.png';
import DetailDesign from '../../components/ProjectDetails/DetailDesign';

import DetailTheme from '../../components/ProjectDetails/DetailTheme';
import DetailAppDev from '../../components/ProjectDetails/DetailAppDev';
import Sindoor_AppDesign from '../../assets/images/sindoor_appdesign.png';
import DetailFeedback from '../../components/ProjectDetails/DetailFeedback';
import Footer from '../../components/Common/Footer';
import { Helmet } from 'react-helmet';

// Home Component
export default function Sindoor() {
  return (
    <div className='Permispop_Container'>
      <Helmet>
        <title>Falcon IT Consulting</title>
        <meta
          name='description'
          content='In the past, it was easy to manage a team of employees who were not working thousands of miles away from you. Nowadays, businesses are adopting remote trends by employing skilled workers from around the globe. Naturally, the manager is responsible for not only managing the team of employees but also to instruct, foster, and support that team. This responsibility is not always that easy. Thus, here we will be discussing the possible challenges of managing a remote team and how to overcome such obstacles.'
        />
        <meta
          name='keywords'
          content='falcon, falconit, falcon consulting,blogs, projects, software, websites, application, developers, app developments, ios, android, blogs, articles, blog articles,collaborating,expertize,Trustful, about us, about,skilled, , ambitious, UI/UX, designers, project managers, quality testers,partnerships, contact, contact us, contact info, facebook, twitter, linkedin, calendly, social media,whatsapp,legal mentions, privacy policy,policies '
        />
      </Helmet>
      <NavBar ContactUs />
      <DetailHeader
        // DividerBG
        background='#000000'
        bottomBG='#E45A5A'
        typoBG='#E45A5A'
        HeaderImg={Sindoor_Header}
        title='Sindoor'
        subTitle='Sindoor'
        description='Marriage app connecting user and vendors Platform to connect  users with wedding vendors, The people who wanted to get married can easily find vendors for their wedding. The User and vendors can communicate through App. The user and vendor have send and receive quotes then validate quotes on App.'
      />
      <DetailOverview
        // desp
        desp='Marriage app connecting user and vendors Platform to connect  users with wedding vendors, The people who wanted to get married can easily find vendors for their wedding. The User and vendors can communicate through App. The user and vendor have send and receive quotes then validate quotes on App.'
        // location
        titleTheme='#E45A5A'
        AvatarSrc={Kidcab_Avatar}
        nameColor='#E45A5A'
        name='Muzammal Chaudhry'
        src={OV_Sindoor}
      />
      <DetailService
        // both
        // web
        app
        titleTheme='#E45A5A'
        borderColor='#18374E'
        circleTheme='#E45A5A'
      />

      <DetailDemo
        to='https://sindoor-demo.web.app/'
        // desp
        // btnText
        // DetailDemo_SquareDiv
        DetailDemo_RoundDiv
        titleColor='#E45A5A'
        title='Sindoor'
        btnTheme='#E45A5A'
        theme='#E45A5A'
        src={Sindoor_Demo}
      />
      <DetailDesign
        titleTheme='#E45A5A'
        title='APP UI DESIGN'
        // // overlap
        // TopImg={Sindoor_Design1}
        // MidImg={Sindoor_Design2}
        // BottomImg={Sindoor_Design3}
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
        // src1={RealEstate_Theme1}
        // src2={EZbox_Theme2}
        // src3={EZbox_Theme3}
        // fullscreen
        title='COLOR THEME'
        titleTheme='#E45A5A'
        // desp
        Theme1='#E45A5A'
        Theme2='#FAFAFA'
        Theme3='#191A1F'
        Theme4='#575961'
        // Theme5=""
        // Theme6=""
        // Theme7=""
        // Theme7={`${linear-gradient (180deg, #E9A454 39.58%, rgba(0, 0, 0, 0) 100%), #A0A0A0;}`}
        // src={KidCab_Theme}
      />
      {/* <DetailLogo theme="rgba(255, 213, 77, 0.25)" src={Table_Logo} /> */}
      <DetailAppDev
        application
        title='MOBILE APP DEVELOPMENT'
        // desp
        // fullImg={Table_AppDesign}
        titleTheme='#E45A5A'
        halfImg={Sindoor_AppDesign}
      />
      <DetailFeedback
        // titleTheme
        // despTheme
        // desp
        // location
        ThemeBG='#E45A5A'
        AvatarSrc={Kidcab_Avatar}
        name='Muzammal Chaudhry'
      />
      <Footer />
    </div>
  );
}
