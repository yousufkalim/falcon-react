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
// import DetailFeedback from '../../components/ProjectDetails/DetailFeedback';
import Footer from '../../components/Common/Footer';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';
import EzBoxService from '../../assets/images/ez_detailservice.svg';
import EzBoxService_fr from '../../assets/images/ez_detailservice_fr.svg';
import EZ_Overview from '../../assets/images/detail_ez_overview.svg';
import DetailMoreProjects from '../../components/ProjectDetails/DetailMoreProjects';

// Home Component
export default function EZbox() {
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
      <NavBar ContactUs scrollBarBG="#3399FE" />
      <DetailHeader
        // DividerBG
        background="#454238"
        bottomBG="#3399FE"
        typoBG="#3399FE"
        HeaderImg={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/ezbox_header.png`}
        title="EZbox Media"
        subTitle="EZbox Media"
        description={t(
          'EZBox media is a platform providing different services including Advertising Advertising by understanding how a user can react to the advertisement shown to them.'
        )}
      />
      <DetailOverview
        // desp
        desp="A French-based, service-providing website developed on MERN. This effective model took 3 months from January 2022 to March 2022 including all features."
        // location
        titleTheme="#454238"
        AvatarSrc={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/kidcabAvatar.png`}
        nameColor="#3399FE"
        name="Eassa Awake"
        src={EZ_Overview}
      />
      <DetailService
        src={lang === 'fr' ? EzBoxService_fr : EzBoxService}
        // both
        WebApp
        // app
        titleTheme="#454238"
        borderColor="#454238"
        circleTheme="#3399FE"
        BGLogo
        liteLogo={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/ezbox_lite_logo.png`}
      />

      <DetailDemo
        to="https://ezboxmedia.com/"
        desp="EZBox media is a platform providing different services including Advertising Advertising by understanding how a user can react to the advertisement shown to them.Target ads based on non-personal criteria.EZBox media helps Product development for the next generation products with the wide variety of technologies available today.EZBoxmedia worked with leading consumer electronics manufacturers to design and provide turnkey solutions."
        // btnText
        DetailDemo_SquareDiv
        // DetailDemo_RoundDiv
        titleColor="#454238"
        title="EZbox Media"
        btnTheme="#3399FE"
        theme="#3399FE"
        src={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/ezbox_demo_new.png`}
      />
      <DetailDesign
        titleTheme="#454238"
        title="UI DESIGN"
        // overlap
        // TopImg={EZbox_Design1}
        // MidImg={EZbox_Design2}
        // BottomImg={EZbox_Design3}
        grids
        src1={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/ezbox_design2.png`}
        src2={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/ezbox_design1.png`}
        src3={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/ezbox_design2.png`}
        src4={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/ezbox_design1.png`}
        src5={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/ezbox_design3.png`}
        src6={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/ezbox_design1.png`}

        // overlap
      />

      <DetailTheme
        // desp
        // centerImage
        // src
        Images
        src1={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/ezbox_theme1.png`}
        src2={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/ezbox_theme2.png`}
        src3={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/ezbox_theme3.png`}
        // fullscreen
        titleTheme="#454238"
        // desp
        Theme4="#454238"
        Theme1="#3399FE"
        Theme2="#FCFCFC"
        Theme3="linear-gradient(180deg, #FE9433 0%, rgba(210, 202, 248, 0.12) 100%)"
        // Theme5=""
        // Theme6=""
        // Theme7=""
        // Theme7={`${linear-gradient (180deg, #E9A454 39.58%, rgba(0, 0, 0, 0) 100%), #A0A0A0;}`}
        // src={KidCab_Theme}
      />
      <DetailLogo
        theme="#454238"
        src={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/detail_ezbox_logo.png`}
      />
      <DetailAppDev
        website
        title="WEB DESIGN"
        // desp
        halfImg={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/ezbox_webdesign.png`}
        titleTheme="#454238"
        // fullImg=(src Required)
      />
      {/* <DetailFeedback
        // titleTheme
        // despTheme
        desp="Falcon IT is a great company to work with as they are always responsive and willing to do what it takes to get the job done right and in a timely manner. They are very reliable and it was very clear during working that they are the right choice. Thank you, Falcon IT!"
        // location
        ThemeBG="#3399FE"
        AvatarSrc={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/kidcabAvatar.png`}
        name="Eassa Awake"
      /> */}
      <DetailMoreProjects />

      <Footer />
    </div>
  );
}
