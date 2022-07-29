// Init
import React from 'react';

// Importing Components
import NavBar from '../../components/Common/NavBar';
import DetailHeader from '../../components/ProjectDetails/DetailHeader';
import RealEstate_Header from '../../assets/images/realestate_header.png';
import DetailOverview from '../../components/ProjectDetails/DetailOverview';
import OV_RealEstate from '../../assets/images/ov_realestate.png';
import DetailService from '../../components/ProjectDetails/DetailService';

import Kidcab_Avatar from '../../assets/images/kidcabAvatar.png';
import DetailDemo from '../../components/ProjectDetails/DetailDemo';
import RealEstate_Demo from '../../assets/images/realestate_demo_new.png';
import DetailDesign from '../../components/ProjectDetails/DetailDesign';

import DetailTheme from '../../components/ProjectDetails/DetailTheme';
import RealEstate_Theme1 from '../../assets/images/realestate_theme1.png';
import DetailLogo from '../../components/ProjectDetails/DetailLogo';
import RealEstate_Logo from '../../assets/images/detail_realestate_logo.png';
import DetailAppDev from '../../components/ProjectDetails/DetailAppDev';
import RealEstate_AppDesign from '../../assets/images/realestate_appdesign_new.png';
import DetailFeedback from '../../components/ProjectDetails/DetailFeedback';
import Footer from '../../components/Common/Footer';
import { Helmet } from 'react-helmet';

// Home Component
export default function RealEstate() {
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
        bottomBG='#837C6B'
        typoBG='#837C6B'
        HeaderImg={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/realestate_header.png`}
        title='Real Estate'
        subTitle='Real Estate'
        description='The goal is to allow investors to have transparency on investments they would be doing in real estate in Pakistan. For this, there are two main interfaces : a mobile application for the investors, and an admin panel, for the responsible of the company.'
      />
      <DetailOverview
        // desp
        desp='The goal is to allow investors to have transparency on investments they would be doing in real estate in Pakistan. For this, there are two main interfaces: a mobile application for the investors, and an admin panel, for the responsible of the company. A Pakistan-based project developed on React Native, completed in 2 months.'
        // location
        titleTheme='#837C6B'
        AvatarSrc={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/kidcabAvatar.png`}
        nameColor='#837C6B'
        name='Steve jobs'
        src={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/ov_realestate.png`}
      />
      <DetailService
        // both
        // web
        app
        titleTheme='#837C6B'
        borderColor='#18374E'
        circleTheme='#837C6B'
      />

      <DetailDemo
        to='https://realestate-landing.web.app/'
        // desp
        // btnText
        // DetailDemo_SquareDiv
        DetailDemo_RoundDiv
        titleColor='#837C6B'
        title='Real Estate'
        btnTheme='#837C6B'
        theme='#837C6B'
        src={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/realestate_demo_new.png`}
      />
      <DetailDesign
        titleTheme='#837C6B'
        title='APP UI DESIGN'
        // overlap
        // TopImg={RealEstate_Design1}
        // MidImg={RealEstate_Design2}
        // BottomImg={RealEstate_Design3}
        grids
        src1={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/detail_design_1.png`}
        src2={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/detail_design_2.png`}
        src3={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/detail_design_4.png`}
        src4={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/detail_design_1.png`}
        src5={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/detail_design_2.png`}
        src6={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/detail_design_3.png`}
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
        inline
        // Images
        src={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/realestate_theme1.png`}
        // src2={EZbox_Theme2}
        // src3={EZbox_Theme3}
        // fullscreen
        titleTheme='#837C6B'
        // desp
        Theme1='#837C6B'
        Theme2='rgba(131, 124, 107, 0.5)'
        Theme3='#FAFAFA'
        Theme4='#191A1F'
        Theme5='#575961'
        // Theme6=""
        // Theme7=""
        // Theme7={`${linear-gradient (180deg, #E9A454 39.58%, rgba(0, 0, 0, 0) 100%), #A0A0A0;}`}
        // src={KidCab_Theme}
      />
      <DetailLogo
        theme='#191A1F'
        src={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/detail_realestate_logo.png`}
      />
      <DetailAppDev
        application
        title='MOBILE APP DEVELOPMENT'
        // desp
        // fullImg={RealEstate_AppDesign}
        titleTheme='#837C6B'
        halfImg={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/realestate_appdesign_new.png`}
      />
      <DetailFeedback
        // titleTheme
        // despTheme
        desp='We were pleased with Falcon IT and the overall development process of our website. Our website has transformed the image of our firm and is the key introductory point for new and potential clients. Thanks for a job well done!'
        // location
        ThemeBG='#837C6B'
        AvatarSrc={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/kidcabAvatar.png`}
        name='Steve Jobs'
      />
      <Footer />
    </div>
  );
}
