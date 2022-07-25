// Init
import React from 'react';

// Importing Components
import NavBar from '../../components/Common/NavBar';
import DetailHeader from '../../components/ProjectDetails/DetailHeader';
import Yuwway_Header from '../../assets/images/yuwway_header.png';
import DetailOverview from '../../components/ProjectDetails/DetailOverview';
import OV_Yuwway from '../../assets/images/ov_yuwway.png';
import DetailService from '../../components/ProjectDetails/DetailService';

import QB_Avatar from '../../assets/images/overview_quadraAvatar.png';
import DetailDemo from '../../components/ProjectDetails/DetailDemo';
import Yuwway_Demo from '../../assets/images/yuwway_demo.png';
import DetailDesign from '../../components/ProjectDetails/DetailDesign';
import Yuwway_Design1 from '../../assets/images/yuwway_design1.png';
import Yuwway_Design2 from '../../assets/images/yuwway_design2.png';
import Yuwway_Design3 from '../../assets/images/yuwway_design3.png';

import DetailTheme from '../../components/ProjectDetails/DetailTheme';
import QB_Theme from '../../assets/images/detail_qb_theme.png';
import DetailLogo from '../../components/ProjectDetails/DetailLogo';
import Yuwway_Logo from '../../assets/images/detail_yuwway_logo.png';
import DetailAppDev from '../../components/ProjectDetails/DetailAppDev';
import Yuwway_AppDesign from '../../assets/images/yuwway_appdesign.png';
import DetailFeedback from '../../components/ProjectDetails/DetailFeedback';
import Footer from '../../components/Common/Footer';
import { Helmet } from 'react-helmet';

// Home Component
export default function Yuwway() {
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
        background='#282828'
        bottomBG='#0073BB'
        typoBG='#0073BB'
        HeaderImg={Yuwway_Header}
        title='Yuwway'
        subTitle='Yuwway'
        // iconTheme="#9D3C64"
        description="Yuwway is a search engine that compares fares for all types of transport (Taxi/VTC/Moto-taxi, etc.) allowing, in a simple search, to access all the fares available and corresponding to the customer's needs."
      />
      <DetailOverview
        titleTheme='#0073BB'
        desp="Yuwway is a search engine that compares fares for all types of transport (Taxi/VTC/Moto-taxi, etc.) allowing, in a simple search, to access all the fares available and corresponding to the customer's needs. Bringing together a large number of the most important carriers, Yuwway makes it possible to provide the keys to the market to the consumer who can choose, both qualitatively and in terms of price, the offer that best suits him."
        // desp=""
        AvatarSrc={QB_Avatar}
        nameColor='#0073BB'
        name='Jamel L.'
        // location="France"
        src={OV_Yuwway}
      />
      <DetailService
        app
        // web
        // both
        titleTheme='#0073BB'
        borderColor='#282828'
        circleTheme='#0073BB'
      />

      <DetailDemo
        // desp
        // btnText
        // DetailDemo_SquareDiv
        DetailDemo_RoundDiv
        titleColor='#0073BB'
        title='Yuwway'
        btnTheme='#0073BB'
        theme='#0073BB'
        src={Yuwway_Demo}
      />
      <DetailDesign
        titleTheme='#0073BB'
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
        centerImage
        // src
        // Images
        // src1={OrgaPlan_Theme}
        // src2={OrgaPlan_Theme}
        // src3={EZbox_Theme3}
        // fullscreen
        title='COLOR THEME'
        titleTheme='#0073BB'
        // desp
        Theme1='#0073BB'
        Theme2='#FAFAFA'
        Theme3='#191A1F'
        Theme4='#575961'
        // Theme5="#00000040"
        // Theme6=""
        // Theme7=""
        // Theme7={`${linear-gradient (180deg, #E9A454 39.58%, rgba(0, 0, 0, 0) 100%), #A0A0A0;}`}
        // src={OrgaPlan_Theme}
      />
      <DetailLogo theme='#0073BB' src={Yuwway_Logo} />
      <DetailAppDev
        application
        title='MOBILE APP DEVELOPMENT'
        // desp
        // fullImg={Yuwway_AppDesign}
        titleTheme='#0073BB'
        halfImg={Yuwway_AppDesign}
      />
      <DetailFeedback
        // titleTheme="#9D936D"
        // despTheme="#282828"
        // desp
        // location
        ThemeBG='#0073BB'
        // AvatarSrc={Kidcab_Avatar}
        name='Jamel L.'
      />
      <Footer />
    </div>
  );
}
