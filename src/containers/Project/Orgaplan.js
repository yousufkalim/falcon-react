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
import OrgaService from '../../assets/images/orga_detailservice.svg';
import OrgaService_fr from '../../assets/images/orga_detailservice_fr.svg';
import OP_Overview from '../../assets/images/detail_op_overview.svg';
import DetailMoreProjects from '../../components/ProjectDetails/DetailMoreProjects';

// Home Component
export default function Orgaplan() {
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
      <NavBar ContactUs scrollBarBG="#9D936D" />
      <DetailHeader
        // DividerBG
        background="#282828"
        bottomBG="#9D936D"
        typoBG="#9D936D"
        HeaderImg={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/orgaplan_header.png`}
        title="OrgaPlan"
        subTitle="OrgaPlan"
        description={t(
          'Orgaplan is a complex and full platform allowing the logistic management of large construction sites, in very dense areas (such as Paris - La Défense, etc...).'
        )}
      />
      <DetailOverview
        desp="Orgaplan is a Logistics management web and mobile application developed for the French Construction market. Its technology stacks are React for the front end and Node JS for the backend. This project was delivered in just 6 months, which was possible by scaling the team from 2 to up to 8 developers."
        // desp
        // location
        titleTheme="#282828"
        AvatarSrc={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/kidcabAvatar.png`}
        nameColor="#9D936D"
        name="Zaara Aziz"
        // src={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/ov_orgaplan.png`}
        src={OP_Overview}
      />
      <DetailService
        src={lang === 'fr' ? OrgaService_fr : OrgaService}
        // both
        WebApp
        // app
        titleTheme="#282828"
        borderColor="#282828"
        circleTheme="#9D936D"
        fitLogo
        liteLogo={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/orgaplan_lite_logo.png`}
      />

      <DetailDemo
        to="http://orgaplansa.com"
        desp="Orgaplan is a complex and full platform allowing the logistic management of large construction sites, in very dense areas (such as Paris - La Défense, etc...). The platform is currently used in Vinci’s construction sites, to facilitate very challenging logistic activities. Available in web and mobile versions, with 5 types of users: Super admin / Admin / Company / Traffic agent / Buffer traffic agent. Each user has his rights and functionalities, allowing an infinity of scenarios, as per the real situations on site. Possibility to create and draw the Site Installation Plan, as well as the buildings and storage areas. Possibility to create deliveries and monitor the general state of the site. Falcon Consulting is specialized in digital construction projects, and we helped our partner to finalize its specification to get the best User experience"
        // btnText
        DetailDemo_SquareDiv
        // DetailDemo_RoundDiv
        titleColor="#282828"
        title="OrgaPlan"
        btnTheme="#9D936D"
        theme="#9D936D"
        src={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/orgaplan_demo_new.png`}
      />
      <DetailDesign
        titleTheme="#282828"
        title="UI DESIGN"
        desp="A big construction company tried, few years ago, to realize exactly this project internally, and they worked on designing and developing the platform. Unfortunately, it was a failure due to the fact that the platform was not intuitive enough, and taking in consideration all the situation of a construction site. Thus, the project had to be re-started. Falon has an internal expertise regarding construction project, as one of the lead managers has 10+ years of experience in managing very big construction projects. Thanks to this double expertise (Construction / IT), it was possible to create mockups which were simple enough, intuitive, and generic to consider all the thousands of possible scenarios while using the platform."
        // overlap
        TopImg={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/orgaplan_design1.png`}
        MidImg={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/orgaplan_design2.png`}
        BottomImg={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/orgaplan_design3.png`}
        grids
        src1={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/orgaplan_design2.png`}
        src2={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/orgaplan_design3.png`}
        src3={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/orgaplan_design1.png`}
        src4={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/orgaplan_design2.png`}
        src5={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/orgaplan_design1.png`}
        src6={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/orgaplan_design2.png`}

        // overlap
      />

      <DetailTheme
        desp="The color theme was imposed by the client, due to its already existing digital identity. Based on this requirement, Falcon developed the mockups."
        // centerImage
        overlap
        // src
        // Images
        // src1={OrgaPlan_Theme}
        // src2={OrgaPlan_Theme}
        // src3={EZbox_Theme3}
        // fullscreen
        titleTheme="#282828"
        // desp
        Theme1="#9D936D"
        Theme2="#EDCF99"
        Theme3="#AA912B"
        Theme4="#FFFFFF"
        Theme5="#282828"
        // Theme6=""
        // Theme7=""
        // Theme7={`${linear-gradient (180deg, #E9A454 39.58%, rgba(0, 0, 0, 0) 100%), #A0A0A0;}`}
        src={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/orgaplan_theme.png`}
      />
      <DetailLogo
        theme="#EDCF99"
        src={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/detail_orgaplan_logo.png`}
      />
      <DetailAppDev
        website
        title="WEB DEVELOPMENT"
        desp="Ideally, the client would have liked the whole project to be developed within 4 months. As the Design and Development processes were going, the team figured out that the initial specs were incomplete and were not covering the whole need of the platform. Thus, it was decided that the project would be done under 6 months. This was still a challenged timeline for such a project (+140 screens in total, 6 user interfaces, web and mobile application, …), so Falcon did scale the team from 3 to 6 developers. The development was realized in module, and starting with the Super admin interface. At the end of each module, a meeting was planned with the client to review and adjust the requirement, as needed. One of the features was to allow the users to delineate areas in a construction layout, by drawing a colored shape. This was possible by using the Canvas API, and this created a nice user experience (the alternate solution would have been to upload the construction layout with pre-existing delineation done). The real challenge was to code the platform generically, so that it could adapt to all thousands of potential scenarios, and provide the right response. This was possible as the database infrastructure was realized by one of the Falcon Lead developers. The project was finally completed within 6 months, and launched in big construction sites. Falcon realized the last mile for the project, completing a lot of contractually unclear features, without any additional cost."
        fullImg={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/orgaplan_webdesign.png`}
        titleTheme="#282828"
        // halfImg=(src Required)
      />
      <DetailFeedback
        titleTheme="#9D936D"
        despTheme="#282828"
        desp="Falcon’s website design team far exceeded my expectations on every front as I had very high expectations of them. The end product is a responsive website that embodies who we are as a company."
        // location
        ThemeBG="#ffffff"
        AvatarSrc={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/kidcabAvatar.png`}
        name="Zaara Aziz"
      />
      <DetailMoreProjects />

      <Footer />
    </div>
  );
}
