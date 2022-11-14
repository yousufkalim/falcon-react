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
import ZypzapService from '../../assets/images/zypzap_detailservice.svg';
import ZypzapService_fr from '../../assets/images/zypzap_detailservice_fr.svg';
import Zypzap_Overview from '../../assets/images/detail_zypzap_overview.svg';
import DetailMoreProjects from '../../components/ProjectDetails/DetailMoreProjects';

// Home Component
export default function Zypzap() {
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
          content="software house, best software house,falcon, falconit, falcon consulting,blogs, projects, software, websites, application, developers, app developments, ios, android, blogs, articles, blog articles,collaborating,expertize,Trustful, about us, about,skilled, , ambitious, UI/UX, designers, project managers, quality testers,partnerships, contact, contact us, contact info, facebook, twitter, linkedin, calendly, social media,whatsapp,legal mentions, privacy policy,policies "
        />
      </Helmet>
      <NavBar
        ContactUs
        scrollBarBG="linear-gradient(269.14deg, #20BF55 0%, #25B058 0.01%, #522F6D 82.32%)"
      />
      <DetailHeader
        background="#282828"
        bottomBG="linear-gradient(269.14deg, #20BF55 0%, #25B058 0.01%, #522F6D 82.32%)"
        typoBG="linear-gradient(269.14deg, #20BF55 0%, #25B058 0.01%, #522F6D 82.32%)"
        HeaderImg={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/zypzap_header.png`}
        title="Zypzap"
        subTitle="Zypzap"
        // iconTheme="#9D3C64"
        description="ZypZap is a gaming website developed by Falcon IT."
      />
      <DetailOverview
        titleTheme="#282828"
        desp="A French-based gaming platform, developed with the front end on React and the backend on Node JS, and the whole project was completed in 5 months, due to frequent changes in the design to meet the gaming world’s expectation."
        // desp=""
        AvatarSrc={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/overview_quadraAvatar.png`}
        nameColor="linear-gradient(269.14deg, #20BF55 0%, #25B058 0.01%, #522F6D 82.32%)"
        name="Valentin L."
        // location="France"
        // src={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/ov_zypzap.png`}
        src={Zypzap_Overview}
      />
      <DetailService
        src={lang === 'fr' ? ZypzapService_fr : ZypzapService}
        // app
        WebApp
        // both
        titleTheme="#282828"
        borderColor="#282828"
        circleTheme="linear-gradient(269.14deg, #20BF55 0%, #25B058 0.01%, #522F6D 82.32%)"
      />

      <DetailDemo
        to="https://zypzap.com"
        desp="ZypZap is a gaming website developed by Falcon IT. It is an e-learning platform connecting the e-sport professionals and the gamers willing to acquire more skills. The application has several features, among which is a video editing tool. As the gaming world is especially demanding regarding the quality of the realization, our client wanted to get a great team of designers / developers / project managers to complete this project."
        // desp
        // btnText
        DetailDemo_SquareDiv
        // DetailDemo_RoundDiv
        titleColor="#16172D"
        title="Zypzap"
        btnTheme="#16172D"
        theme="linear-gradient(227.79deg, #20BF55 -1.61%, #522F6D 74.91%)"
        src={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/zypzap_demo.png`}
      />
      <DetailDesign
        titleTheme="#282828"
        title="UI DESIGN"
        desp="The client had a general idea about the project, and Falcon, acting also as a role of CTO for this project, worked on the feasibility of the features and priorities based on the effort required for each tasks. The design team realized several versions of the mockups on Figma, for getting feedbacks from the gaming community and improving it continuously. The goal was to create a website with a “wow” effect, as this is quite a challenge to attract this target audience."
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
        title="COLOR THEME"
        titleTheme="#000000"
        desp="The goal was to use mostly dark colors to get to a specific gaming world."
        Theme1="#522F6D"
        Theme2="#20BF55"
        Theme3="#F5F5F5"
        Theme4="#000000"
        Theme5="#575961"
        // Theme6=""
        // Theme7=""
        // Theme7={`${linear-gradient (180deg, #E9A454 39.58%, rgba(0, 0, 0, 0) 100%), #A0A0A0;}`}
        // src={Firemen_Theme}
      />
      {/* <DetailLogo theme="#0073BB" src={Yuwway_Logo} /> */}
      <DetailAppDev
        website
        title="WEB DESIGN"
        desp="The main difficulty of the project was to adapt to the several changes requested by the client due to feedbacks received from the target audience. Ideally, one should have the mockups fully completed before starting the development phase, but this was not the case in this project, mainly due to time schedule requirement. The project team was composed of a designer, two developers, one project manager and a lead developer. They had 2 meetings per week with the client to speed-up the feedbacks and make sure we would be going to the right direction. The video editing feature was something new developed at Falcon Consulting, but thanks to the diversity of the talents in the team, it was successfully realized. Falcon also optimized the flux of data exchanges in order to optimize the operating costs, which can be significant for such projects."
        fullImg={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/zypzap_webdesign.png`}
        titleTheme="#000000"
        // halfImg={Zypzap_WebDesign}
      />
      <DetailFeedback
        // titleTheme="#3675B7"
        // despTheme="#282828"
        desp="Quick response to ideas and changes. Falcon always answers the right ways and ideas"
        // location
        ThemeBG="linear-gradient(261.67deg, #20BF55 -0.52%, #522F6D 65.51%)"
        AvatarSrc={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/detail_overviewAvatar.png`}
        // AvatarSrc={Kidcab_Avatar}
        name="Valentin L."
      />
      <DetailMoreProjects />

      <Footer />
    </div>
  );
}
