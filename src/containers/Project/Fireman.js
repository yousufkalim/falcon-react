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
import FiremenService from '../../assets/images/firemen_detailservice.svg';
import FiremenService_fr from '../../assets/images/firemen_detailservice_fr.svg';
import Fireman_Overview from '../../assets/images/detail_fireman_overview.svg';
import DetailMoreProjects from '../../components/ProjectDetails/DetailMoreProjects';

// Home Component
export default function Fireman() {
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
      <NavBar ContactUs scrollBarBG="#3675B7" />
      <DetailHeader
        background="#3675B7"
        bottomBG="#3675B7"
        typoBG="#3675B7"
        HeaderImg={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/firemen_header.png`}
        title="Firemen"
        subTitle="Fireman"
        // iconTheme="#9D3C64"
        description={t('Fireman is the management and report generating system for fire fighters.')}
      />
      <DetailOverview
        titleTheme="#282828"
        desp="Fireman is the management and report generating system for fire fighters. The safety committees visit establishments open to the public and advise the mayor for business continuity. Each visit or study gives rise to a report. Fire fighters create/modify file according to visit or study category. Group director/Service director validate that file."
        // desp=""
        AvatarSrc={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/overview_quadraAvatar.png`}
        nameColor="#3675B7"
        name="Ludovic Crepy"
        // location="France"
        // src={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/ov_firemen.png`}
        src={Fireman_Overview}
      />
      <DetailService
        src={lang === 'fr' ? FiremenService_fr : FiremenService}
        // app
        WebApp
        // both
        titleTheme="#282828"
        borderColor="#282828"
        circleTheme="#3675B7"
      />

      <DetailDemo
        to="https://fireman-dev3.web.app/login"
        // desp
        desp="Fireman is the management and report generating system for fire fighters. The safety committees visit establishments open to the public and advise the mayor for business continuity. Each visit or study gives rise to a report. Fire fighters create/modify file according to visit or study category. Group director/Service director validate that file."
        // btnText
        DetailDemo_SquareDiv
        // DetailDemo_RoundDiv
        titleColor="#282828"
        title="Fireman"
        btnTheme="#3675B7"
        theme="#3675B7"
        src={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/firemen_demo.png`}
      />
      <DetailDesign
        titleTheme="#282828"
        title="UI DESIGN"
        desp="Fireman, the management and report generating system for fire fighters, boasts a meticulously crafted UI/UX design for a seamless and intuitive user experience. The platform features a visually striking, modern, and sleek interface that is easy to navigate. The system's functionality is thoughtfully designed, emphasizing usability and efficiency. Firefighters can create or modify files by category, and the group and service directors can validate them with ease. The features are logically organized, with all necessary information easily accessible. The design is user-centered, with a focus on simplicity, usability, and functionality, making it easy for all users to navigate the platform efficiently. Overall, the UI/UX design for Fireman is impressive and will not only meet but exceed the client's expectations."
        // overlap
        // TopImg={Facility_Design1}
        // MidImg={Facility_Design2}
        // BottomImg={Facility_Design3}
        grids
        src1={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/facility_design2.png`}
        src2={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/facility_design1.png`}
        src3={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/facility_design2.png`}
        src4={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/facility_design1.png`}
        src5={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/facility_design3.png`}
        src6={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/facility_design1.png`}

        // overlap
      />

      <DetailTheme
        desp="The color theme of blue, white, black, and grey creates a professional and authoritative look for the Fireman management and report generating system. The use of blue symbolizes trust, reliability, and stability, while the white represents cleanliness and organization. The black and grey tones add a sense of formality and seriousness to the project. Together, the color scheme conveys a sense of confidence and competence in the fire department's ability to manage and report on fire safety."
        // centerImage
        // src
        // Images
        // src1={OrgaPlan_Theme}
        // src2={OrgaPlan_Theme}
        // src3={EZbox_Theme3}
        // fullscreen
        title="COLOR THEME AND DESIGN"
        titleTheme="#282828"
        // desp
        Theme1="#3675B7"
        Theme2="#FAFAFA"
        Theme3="#191A1F"
        Theme4="#575961"
        // Theme5="#00000040"
        // Theme6=""
        // Theme7=""
        // Theme7={`${linear-gradient (180deg, #E9A454 39.58%, rgba(0, 0, 0, 0) 100%), #A0A0A0;}`}
        // src={Firemen_Theme}
      />
      {/* <DetailLogo theme="#0073BB" src={Yuwway_Logo} /> */}
      <DetailAppDev
        website
        title="WEB DEVELOPMENT"
        desp="The web development process for the Fireman management and report generating system started with requirements gathering, where the development team gathered information on the system's functional requirements and technical specifications. Based on that information, the team created a project plan, including project scope, timeline, and deliverables, followed by the design phase, where wireframes, mockups, and layouts were created in the blue, white, black, and grey color theme. The web development team then began coding the system, implementing features and functionality to meet the requirements while the client provided continuous input and feedback on the project's progress. Rigorous testing was conducted to identify and fix bugs and errors, followed by validation and verification by the business idea report to ensure that the system met the required standards and specifications. Once approved, the system was deployed to the live server and maintained by the web development team to ensure that it remained functional and up-to-date. This process prioritized continuous input and feedback from the client and rigorous testing to ensure that the system met the needs of the client."
        fullImg={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/firemen_theme.png`}
        titleTheme="#282828"
        // halfImg={Yuwway_AppDesign}
      />
      <DetailFeedback
        titleTheme="#3675B7"
        despTheme="#282828"
        desp1="I am thoroughly impressed with the level of professionalism, expertise, and creativity they brought to the table. Throughout the entire project, the team at Falcon Consulting, consistently provided excellent communication and kept me informed on the progress of Fireman project."
        // location
        ThemeBG="#ffffff"
        AvatarSrc={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/detail_overviewAvatar.png`}
        // AvatarSrc={Kidcab_Avatar}

        name="Ludovic Crepy"
      />
      <DetailMoreProjects />

      <Footer />
    </div>
  );
}
