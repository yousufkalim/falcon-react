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
import YuwayService from '../../assets/images/yuway_detailservice.svg';
import YuwayService_fr from '../../assets/images/yuway_detailservice_fr.svg';
import Yuway_Overview from '../../assets/images/detail_yuway_overview.svg';
import DetailMoreProjects from '../../components/ProjectDetails/DetailMoreProjects';

// Home Component
export default function Yuwway() {
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
      <NavBar ContactUs scrollBarBG="#0073BB" />
      <DetailHeader
        background="#282828"
        bottomBG="#0073BB"
        typoBG="#0073BB"
        HeaderImg={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/yuwway_header.png`}
        title="Yuwway"
        subTitle="Yuwway"
        // iconTheme="#9D3C64"
        description={t(
          "Yuwway is a search engine that compares fares for all types of transport (Taxi/VTC/Moto-taxi, etc.) allowing, in a simple search, to access all the fares available and corresponding to the customer's needs."
        )}
      />
      <DetailOverview
        titleTheme="#0073BB"
        desp="Yuwway is a search engine that compares fares for all types of transport (Taxi/VTC/Moto-taxi, etc.) allowing, in a simple search, to access all the fares available and corresponding to the customer's needs. Bringing together a large number of the most important carriers, Yuwway makes it possible to provide the keys to the market to the consumer who can choose, both qualitatively and in terms of price, the offer that best suits him."
        // desp=""
        AvatarSrc={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/overview_quadraAvatar.png`}
        nameColor="#0073BB"
        name="Jamel L."
        // location="France"
        // src={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/ov_yuwway.png`}
        src={Yuway_Overview}
      />
      <DetailService
        src={lang === 'fr' ? YuwayService_fr : YuwayService}
        WebApp
        // web
        // both
        titleTheme="#0073BB"
        borderColor="#282828"
        circleTheme="#0073BB"
      />

      <DetailDemo
        desp="Yuwway is a search engine that compares fares for all types of transport (Taxi/VTC/Moto-taxi, etc.) allowing, in a simple search, to access all the fares available and corresponding to the customer's needs. Bringing together a large number of the most important carriers, Yuwway makes it possible to provide the keys to the market to the consumer who can choose, both qualitatively and in terms of price, the offer that best suits him."
        // desp
        // btnText
        // DetailDemo_SquareDiv
        to="https://play.google.com/store/apps/details?id=com.yuwway.yuwway&referrer=utm_source%3Daarki%26utm_medium%3Dclic%26anid%3Daarki%26aclid%3D{click_id}%26cp1%3D{app_id}"
        DetailDemo_RoundDiv
        titleColor="#0073BB"
        title="Yuwway"
        btnTheme="#0073BB"
        theme="#0073BB"
        src={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/yuwway_demo.png`}
      />
      <DetailDesign
        titleTheme="#0073BB"
        title="APP UI DESIGN"
        // overlap
        // TopImg={Yuwway_Design1}
        // MidImg={Yuwway_Design2}
        // BottomImg={Yuwway_Design3}
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
        title="COLOR THEME"
        titleTheme="#0073BB"
        // desp
        Theme1="#0073BB"
        Theme2="#FAFAFA"
        Theme3="#191A1F"
        Theme4="#575961"
        // Theme5="#00000040"
        // Theme6=""
        // Theme7=""
        // Theme7={`${linear-gradient (180deg, #E9A454 39.58%, rgba(0, 0, 0, 0) 100%), #A0A0A0;}`}
        // src={OrgaPlan_Theme}
      />
      <DetailLogo
        theme="#0073BB"
        src={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/detail_yuwway_logo.png`}
      />
      <DetailAppDev
        application
        title="MOBILE APP DEVELOPMENT"
        // desp
        // fullImg={Yuwway_AppDesign}
        titleTheme="#0073BB"
        halfImg={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/yuwway_appdesign.png`}
      />
      <DetailFeedback
        // titleTheme="#9D936D"
        // despTheme="#282828"
        // desp
        // location
        ThemeBG="#0073BB"
        AvatarSrc={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/detail_overviewAvatar.png`}
        // AvatarSrc={Kidcab_Avatar}
        name="Jamel L."
      />
      <DetailMoreProjects />

      <Footer />
    </div>
  );
}
