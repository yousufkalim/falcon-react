// Init
import React from 'react';

// Importing Components
import NavBar from '../../components/Common/NavBar';
import DetailHeader from '../../components/ProjectDetails/DetailHeader';
import DetailOverview from '../../components/ProjectDetails/DetailOverview';
import DetailDemo from '../../components/ProjectDetails/DetailDemo';
import DetailService from '../../components/ProjectDetails/DetailService';
import DetailDesign from '../../components/ProjectDetails/DetailDesign';
import DetailTheme from '../../components/ProjectDetails/DetailTheme';
import DetailLogo from '../../components/ProjectDetails/DetailLogo';
import DetailAppDev from '../../components/ProjectDetails/DetailAppDev';
import DetailWebDev from '../../components/ProjectDetails/DetailWebDev';
import Footer from '../../components/Common/Footer';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';
import PermispopService from '../../assets/images/pp_detailservice.svg';

// Home Component
export default function Permispop() {
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
        background='#2FAD93'
        bottomBG='#2FAD93'
        typoBG='#FF9A20EB'
        HeaderImg={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/pp_header.png`}
        title='Permispop.'
        subTitle='Permispop'
        description='Permispop is a web platform connecting students, independent driving teachers, and driving schools. Each type of user has a dedicated interface, allowing them to manage their activities efficiently.'
      />

      <DetailOverview
        name='Salim S.'
        AvatarSrc={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/detail_overviewAvatar.png`}
        src={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/detail_overview.png`}
        desp='The idea was to develop a first version of the website, in order to test the market fit. This version was completed within a couple of months, using ReactJS for the frontend, and ASP.NET Core for the backend. We are still continuing the development, which is currently at the V4.'
      />

      <DetailService
        both
        src={PermispopService}
        BGLogo
        liteLogo={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/pp_lite_logo.png`}
      />
      <DetailDemo
        src={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/pp_demo_new.png`}
        to='https://permispop.fr/'
        desp='Permispop is a web platform and a mobile app connecting students, independent driving teachers, and driving schools. Each type of user has a dedicated interface, allowing them to manage their activities efficiently. The possibility to search for an instructor with an interactive map, and book a session depending on his availability. The booking feature allows the driving schools and instructors to have an overview of all the activities and manage them efficiently; At the end  of each session, the student can rate the instructor and provide feedback to the platform; An internal messaging system; A digital driving booklet, allowing the instructors to have an overview of the level of each student, and add any progress made.'
      />
      <DetailDesign
        grids
        src1={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/detail_design_1.png`}
        src2={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/detail_design_2.png`}
        src3={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/detail_design_4.png`}
        src4={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/detail_design_1.png`}
        src5={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/detail_design_2.png`}
        src6={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/detail_design_3.png`}
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
        src={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/theme_image.png`}
      />
      <DetailLogo src={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/detaillogo.png`} />
      <DetailAppDev
        application
        halfImg={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/detail_appdev_new.png`}
      />
      <DetailWebDev
        // titleTheme
        // AvatarSrc
        AvatarSrc={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/detail_overviewAvatar.png`}
        // nameColor
        name='Salim S.'
        // location
        feedback='We at Permispop are very impressed with all aspects of our website and mobile app, as it is user-friendly and work efficiently. We would highly recommend Falcon IT to anyone looking to build a website, web app or mobile application.'
      />
      {/* <DetailFeedback /> */}
      <Footer />
    </div>
  );
}
