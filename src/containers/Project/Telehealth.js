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
import DetailFeedback from '../../components/ProjectDetails/DetailFeedback';
import Footer from '../../components/Common/Footer';
import { Helmet } from 'react-helmet';

// Home Component
export default function Telehealth() {
  return (
    <div className='Permispop_Container'>
      <Helmet>
        <title>{t('Falcon IT : Expert Software Engineers')}</title>
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
        background='#136773'
        bottomBG='#136773'
        typoBG='#FBA622EB'
        HeaderImg={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/telehealth_header.png`}
        title='Telehealth Platform'
        subTitle='Telehealth Platform'
        description='Telehealth platform (project name is confidential) is a US web and mobile application which allows physiotherapists to analyze the movements of their patients remotely. '
      />
      <DetailOverview
        // desp
        desp='French based mobile application to analyze patient’s movement developed on ReactJS/NodeJS and Mediapipe technology. The MVP was successfully completed within 3 months.'
        // location
        titleTheme='#FBA622'
        // AvatarSrc={Kidcab_Avatar}
        nameColor='#FBA622'
        AvatarSrc={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/detail_overviewAvatar.png`}
        name='Confidential'
        src={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/ov_telehealth.png`}
      />
      <DetailService
        both
        // web
        // app
        titleTheme='#FBA622'
        borderColor='#FBA622'
        circleTheme='#136773'
        BGLogo
        liteLogo={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/tele_lite_logo.png`}
      />

      <DetailDemo
        // to='https://screnr-ui.web.app/'
        desp='Telehealth platform (project name is confidential) is a US web and mobile application which allows physiotherapists to analyze the movements of their patients remotely. The patient is filmed performing different types of exercises, and the tool detects and calculates the angles of the patient body (such as his legs, arms, foot, waist, etc...). The program then analyzes the data based on internal rules and deduces whether the movements are abnormal or not.The detection of the movements is done with the help of a Media pipe and requires advanced knowledge in terms of image processing to ensure fluidity and accuracy of the final results.'
        // btnText
        DetailDemo_SquareDiv
        // DetailDemo_RoundDiv
        titleColor='#FBA622'
        title='Tele Health Platform'
        btnTheme='#FBA622'
        theme='#136773'
        src={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/telehealth_demo.png`}
      />
      <DetailDesign
        titleTheme='#454238'
        title='UI DESIGN'
        // overlap
        // TopImg={Tele_Design1}
        // MidImg={Tele_Design2}
        // BottomImg={Tele_Design3}
        grids
        src1={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/telehealth_design2.png`}
        src2={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/telehealth_design3.png`}
        src3={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/detail_design_4.png`}
        src4={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/detail_design_1.png`}
        src5={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/telehealth_design1.png`}
        src6={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/telehealth_design2.png`}

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
        desp='This was a very challenging project, and to be honest, we were uncertain whether it was even technically possible. In the past, we reached out to another offshore company for a first version, which did cost us more than $100k, even though the final result was not user friendly. When we met with Falcon, they were confident to be able to do a better and more efficient project, as an MVP as a start. It was not an easy project, but they did show a lot of commitment and they finally made it successfully. Great job guys !'
        // location
        AvatarSrc={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/detail_overviewAvatar.png`}
        ThemeBG='#FBA622'
        // AvatarSrc={Kidcab_Avatar}
        name='Confidential'
      />
      <Footer />
    </div>
  );
}
