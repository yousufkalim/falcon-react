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
import DetailLogo from '../../components/ProjectDetails/DetailLogo';
import DetailAppDev from '../../components/ProjectDetails/DetailAppDev';
import DetailFeedback from '../../components/ProjectDetails/DetailFeedback';
import Footer from '../../components/Common/Footer';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';
import KidcabService from '../../assets/images/kc_detailservice.svg';
import KidcabService_fr from '../../assets/images/kc_detailservice_fr.svg';
import KC_Overview from '../../assets/images/detail_kc_overview.svg';
import DetailMoreProjects from '../../components/ProjectDetails/DetailMoreProjects';

// Home Component
export default function Kidcab() {
  let lang = localStorage.getItem('i18nextLng');
  const { t } = useTranslation();
  return (
    <div className="Permispop_Container">
      <Helmet>
        <title>{t('FalconIT : Expert Software Engineers')}</title>
        <meta
          name="description"
          content="In the past, it was easy to manage a team of employees who were not working thousands of miles away from you. Nowadays, businesses are adopting remote trends by employing skilled workers from around the globe. Naturally, the manager is responsible for not only managing the team of employees but also to instruct, foster, and support that team. This responsibility is not always that easy. Thus, here we will be discussing the possible challenges of managing a remote team and how to overcome such obstacles."
        />
        <meta
          name="keywords"
          content="falcon, falconit, falcon consulting,blogs, projects, software, websites, application, developers, app developments, ios, android, blogs, articles, blog articles,collaborating,expertize,Trustful, about us, about,skilled, , ambitious, UI/UX, designers, project managers, quality testers,partnerships, contact, contact us, contact info, facebook, twitter, linkedin, calendly, social media,whatsapp,legal mentions, privacy policy,policies "
        />
      </Helmet>
      <NavBar ContactUs scrollBarBG="#18374E" />
      <DetailHeader
        // DividerBG
        background="#18374E"
        bottomBG="#18374E"
        typoBG="#18374E"
        HeaderImg={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/kidcabHeader.png`}
        title="KidCab."
        subTitle="KidCab"
        description="Kidcab is a mobile application aiming to help parents find drivers for their children’s activities, and safely monitor their location."
      />
      <DetailOverview
        // desp
        desp="Kidcab, a mobile app project was designed for the French market very efficiently as this project required work carefully on the code optimization, and especially all the API calls to minimize the operation costs. The mobile application is developed on React Native and the whole project took 3 months."
        // location
        titleTheme="#4CB9B4"
        AvatarSrc={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/kidcabAvatar.png`}
        nameColor="#4CB9B4"
        name="Maxime Chevallier"
        src={KC_Overview}
      />
      <DetailService
        src={lang === 'fr' ? KidcabService_fr : KidcabService}
        // both
        // web
        WebApp
        titleTheme="#4CB9B4"
        borderColor="#18374E"
        circleTheme="#4CB9B4"
        BGLogo
        liteLogo={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/kidcab_lite_logo.png`}
      />

      <DetailDemo
        // to='http://kidcab-demo.web.app/'
        to="https://kidcab.fr/"
        desp="Kidcab is a mobile application aiming to help parents find drivers for their children’s activities and safely monitor their location. For our partner, we developed two mobile applications and a Ride Management web application.The Driver mobile application allows them to receive ride offers and see an overview of the upcoming and past activities. When being on a ride, the application is having similar features to Uber.The Parent’s mobile application shows the live location of the driver and allows to monitor all the past and upcoming rides.Finally, the Ride Management website is intended for Kidcab administrators to create, manage and assign efficiently the activities of the company. An in-app quote and invoice management tool has also been created."
        // btnText
        // DetailDemo_SquareDiv
        // DetailDemo_RoundDiv
        titleColor="#4CB9B4"
        title="KidCab"
        btnTheme="#18374E"
        theme="#18374E"
        src={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/kidcab_demo_new.png`}
      />
      <DetailDesign
        // titleTheme
        // title
        // overlap
        // TopImg
        // MidImg
        // BottomImg
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
        // src1
        // src2
        // src3
        fullscreen
        titleTheme="#4CB9B4"
        // desp
        Theme1="#18374E"
        Theme2="#4CB9B4"
        Theme3="#4D525B"
        Theme4="#FDFFFE"
        Theme5="#CCCCCC"
        Theme6="#CCCCCC"
        // Theme7
        src={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/kidcab_theme.png`}
      />
      <DetailLogo
        theme="#ffffff"
        src={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/detail_kidcab_logo.png`}
      />
      <DetailAppDev
        application
        // title
        // desp
        halfImg={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/kidcab_appDesign_new.png`}
        titleTheme="#4CB9B4"
        // fullImg={KidCab_AppDesign}
      />
      <DetailAppDev
        website
        title="WEB DEVELOPMENT"
        // desp
        // halfImg={KidCab_AppDesign}
        titleTheme="#4CB9B4"
        fullImg={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/kidcab_webDesign_new.png`}
      />
      <DetailFeedback
        // titleTheme
        // despTheme
        desp="Expertise and systematic approach to fulfilling client needs. I love the energy and excitement the Falcon IT team exhibits towards the success of my APP."
        // location
        ThemeBG="#18374E"
        AvatarSrc={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/kidcabAvatar.png`}
        name="Maxime Chevallier"
      />
      <DetailMoreProjects />

      <Footer />
    </div>
  );
}
