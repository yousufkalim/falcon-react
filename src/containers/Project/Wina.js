// Init
import React from 'react';

// Importing Components
import NavBar from '../../components/Common/NavBar';
import DetailHeader from '../../components/ProjectDetails/DetailHeader';
import Wina_Header from '../../assets/images/wina_header.png';
import DetailOverview from '../../components/ProjectDetails/DetailOverview';
import OV_Wina from '../../assets/images/ov_wina.png';
import DetailService from '../../components/ProjectDetails/DetailService';

import QB_Avatar from '../../assets/images/overview_quadraAvatar.png';
import DetailDemo from '../../components/ProjectDetails/DetailDemo';
import Wina_Demo from '../../assets/images/wina_demo.png';
import DetailDesign from '../../components/ProjectDetails/DetailDesign';
import Yuwway_Design1 from '../../assets/images/yuwway_design1.png';
import Yuwway_Design2 from '../../assets/images/yuwway_design2.png';
import Yuwway_Design3 from '../../assets/images/yuwway_design3.png';

import DetailTheme from '../../components/ProjectDetails/DetailTheme';
import Firemen_Theme from '../../assets/images/firemen_theme.png';
import DetailLogo from '../../components/ProjectDetails/DetailLogo';
import Wina_Logo from '../../assets/images/detail_wina_logo_new.png';
import DetailAppDev from '../../components/ProjectDetails/DetailAppDev';
import Wina_AppDesign from '../../assets/images/wina_appdesign.png';
import Wina_WebDesign from '../../assets/images/wina_webdesign.png';

import DetailFeedback from '../../components/ProjectDetails/DetailFeedback';
import Facility_Theme from '../../assets/images/facility_theme.png';

import Footer from '../../components/Common/Footer';
import { Helmet } from 'react-helmet';

// Home Component
export default function Wina() {
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
        bottomBG='#2A5AA6'
        typoBG='#2A5AA6'
        HeaderImg={Wina_Header}
        title='Wina'
        subTitle='Wina'
        // iconTheme="#9D3C64"
        description='Winaa is a job board, in the shape of a mobile and web application,  for connecting companies and apprentices. '
      />
      <DetailOverview
        titleTheme='#2A5AA6'
        desp='A French job platform connecting employers and employees for hiring apprenticeship with its website’s front end on React and backend on Node JS. This project was completed is still ongoing, in order to be the most adapted to the market'
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
        to='https://winaa.fr/'
        desp='Winaa is a job board, in the shape of a mobile and web application, for connecting companies and apprentices. A matching algorithm, based on several criteria, automatically calculates a percentage of compatibility between a student and a job offer. The matching process is similarly done as with the Tinder application.Once the matching is done, a calendar allows the student to book an interview session with the company. The platform automatically retrieves (scrapes) all offers from reference websites in France, and adds them to Winaa’s database.Companies have a full dashboard allowing them to manage their offers, see the potential matches and accept the interview sessions.'
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
        application
        title='MOBILE APP DEVELOPMENT'
        // desp
        fullImg={Wina_AppDesign}
        titleTheme='#2A5AA6'
        // halfImg={Wina_AppDesign}
      />
      <DetailAppDev
        website
        title='WEB DEVELOPMENT'
        // desp
        fullImg={Wina_WebDesign}
        titleTheme='#2A5AA6'
        // halfImg={Wina_AppDesign}
      />
      <DetailFeedback
        // titleTheme="#3675B7"
        // despTheme="#282828"
        desp='Falcon IT has done a great job and we are impressed with the overall services.'
        // location
        ThemeBG='#2A5AA6'
        // AvatarSrc={Kidcab_Avatar}
        name='Shane jhon'
      />
      <Footer />
    </div>
  );
}
