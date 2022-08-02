// Init
import React from 'react';

// Importing Components
import NavBar from '../../components/Common/NavBar';
import DetailHeader from '../../components/ProjectDetails/DetailHeader';
import DetailOverview from '../../components/ProjectDetails/DetailOverview';
import DetailService from '../../components/ProjectDetails/DetailService';
import DetailDemo from '../../components/ProjectDetails/DetailDemo';
import DetailDesign from '../../components/ProjectDetails/DetailDesign';
import DetailTheme from '../../components/ProjectDetails/DetailTheme';
import DetailAppDev from '../../components/ProjectDetails/DetailAppDev';
import DetailFeedback from '../../components/ProjectDetails/DetailFeedback';

import Footer from '../../components/Common/Footer';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';
// Home Component
export default function Orientator() {
  const { t } = useTranslation();
  return (
    <div className='Permispop_Container'>
      <Helmet>
        <title>{t('FalconIT : Expert Software Engineers')}</title>
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
        bottomBG=' linear-gradient(269.14deg, #BE9400 0%, #CB4B03 48.96%, #8B0054 100%)'
        typoBG=' linear-gradient(269.14deg, #BE9400 0%, #CB4B03 48.96%, #8B0054 100%)'
        HeaderImg={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/orientator_header.png`}
        title='Orientator'
        subTitle='Orientator'
        // iconTheme="#9D3C64"
        description='Orientator is a web application that allows high school students to make their best career choice, after filling out an online and customized questionnaire.'
      />
      <DetailOverview
        titleTheme='#FF29AA'
        desp='Orientator is a French-based platform for students to decide on their university.This site is developed with the front end on React and the backend on Node JS and the whole project was completed in 5 months'
        // desp=""
        AvatarSrc={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/overview_quadraAvatar.png`}
        nameColor='FF29AA'
        name='Bilel S.'
        // location="France"
        src={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/ov_orientator.png`}
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
        // to='https://orientator-demo.web.app/'
        to='https://orientator.com/'
        desp="Orientator is a web application that allows high school students to make their best career choice, after filling out an online and customized questionnaire.The questionnaire is presented as a decision tree, with discriminating and non-discriminating questions, helping to understand the user profile. At the end of the questionnaire, a complex algorithm generates a list of post-baccalaureate programs and schools that best match the student's profile. This algorithm calculates a score according to several criteria, such as distance, selectivity, or the duration of the course, and a percentage of compatibility based on the student’s answers."
        // btnText
        DetailDemo_SquareDiv
        // DetailDemo_RoundDiv
        titleColor='#FF29AA'
        title='ORIENTATOR'
        btnTheme='linear-gradient(267.62deg, #FF3A87 1.18%, #FF6924 47.48%, #FFA220 100%)'
        theme='linear-gradient(229.11deg, #FECE24 1.54%, #FF6D1A 100%)'
        src={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/orientator_demo.png`}
      />
      <DetailDesign
        titleTheme='#FF29AA'
        title='UI DESIGN'
        // overlap
        // TopImg={Facility_Design1}
        // MidImg={Facility_Design2}
        // BottomImg={Facility_Design3}
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
        website
        title='WEB DEVELOPMENT'
        // desp
        fullImg={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/orientator_ss.png`}
        titleTheme='#FF29AA'
        halfImg={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/orientator_webhalf.png`}
      />
      <DetailFeedback
        // titleTheme="#FF29AA"
        // despTheme="#282828"
        desp='Falcon IT has done a great job of creating exactly what I wanted. Easy to work with and very responsive. They met all of my expectations. Thank you!'
        // location
        ThemeBG='linear-gradient(269.14deg, #BE9400 0%, #CB4B03 48.96%, #8B0054 100%)'
        // AvatarSrc={Kidcab_Avatar}
        AvatarSrc={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/detail_overviewAvatar.png`}
        name='Bilel S.'
      />
      <Footer />
    </div>
  );
}
