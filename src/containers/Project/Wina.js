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
import WinaService from '../../assets/images/wina_detailservice.svg';
import WinaService_fr from '../../assets/images/wina_detailservice_fr.svg';
import Wina_Overview from '../../assets/images/detail_wina_overview.svg';
import DetailMoreProjects from '../../components/ProjectDetails/DetailMoreProjects';

// Project Detail (Wina)
export default function Wina() {
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
      <NavBar ContactUs scrollBarBG="#2A5AA6" />
      <DetailHeader
        background="#282828"
        bottomBG="#2A5AA6"
        typoBG="#2A5AA6"
        HeaderImg={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/wina_header.png`}
        title="Winaa"
        subTitle="Winaa"
        // iconTheme="#9D3C64"
        description={t(
          'Winaa is a job board, in the shape of a mobile and web application, for connecting companies and apprentices.'
        )}
      />
      <DetailOverview
        titleTheme="#2A5AA6"
        desp="A French job platform connecting employers and employees for hiring apprenticeship with its website’s front end on React and backend on Node JS. This project was completed is still ongoing, in order to be the most adapted to the market"
        // desp=""
        AvatarSrc={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/overview_quadraAvatar.png`}
        nameColor="#2A5AA6"
        name="Shane Jhon"
        // location="France"
        // src={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/ov_wina.png`}
        src={Wina_Overview}
      />
      <DetailService
        src={lang === 'fr' ? WinaService_fr : WinaService}
        // app
        // web
        both
        titleTheme="#2A5AA6"
        borderColor="#282828"
        circleTheme="#2A5AA6"
      />

      <DetailDemo
        to="https://winaa.fr/"
        desp="Winaa is a job board, in the shape of a mobile and web application, for connecting companies and apprentices. A matching algorithm, based on several criteria, automatically calculates a percentage of compatibility between a student and a job offer. The matching process is similarly done as with the Tinder application.Once the matching is done, a calendar allows the student to book an interview session with the company. The platform automatically retrieves (scrapes) all offers from reference websites in France, and adds them to Winaa’s database.Companies have a full dashboard allowing them to manage their offers, see the potential matches and accept the interview sessions."
        // btnText
        // DetailDemo_SquareDiv
        DetailDemo_RoundDiv
        titleColor="#2A5AA6"
        title="Winaa"
        btnTheme="#2A5AA6"
        theme="#2A5AA6"
        src={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/wina_demo.png`}
      />
      <DetailDesign
        titleTheme="#2A5AA6"
        title="APP UI DESIGN"
        desp="The platform automatically scrapes all offers from reference websites in France and adds them to Winaa's database. Companies have access to a full dashboard, where they can manage their offers, view potential matches and accept interview sessions. With its matching algorithm based on several criteria, Winaa calculates a percentage of compatibility between a student and a job offer, a calendar is provided to allow students to book an interview session with the company. Winaa offers a user-friendly interface with an intuitive design to ensure a seamless and efficient job search experience for both students and companies."
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
        desp="Winaa's job board application features a color theme that combines a cool tone, a neutral tone, a warm tone, and a subdued tone. This creates a professional, modern, and sophisticated aesthetic that also feels approachable and trustworthy. The color scheme is designed to convey a sense of reliability, strength, simplicity, and warmth, which is suitable for both companies and students using the platform."
        // centerImage
        // src
        // Images
        // src1={OrgaPlan_Theme}
        // src2={OrgaPlan_Theme}
        // src3={EZbox_Theme3}
        // fullscreen
        title="COLOR THEME"
        titleTheme="#2A5AA6"
        // desp
        Theme1="#2A5AA6"
        Theme2="#FAFAFA"
        Theme3="#D1A38D"
        Theme4="#191A1F"
        // Theme5="#00000040"
        // Theme6=""
        // Theme7=""
        // Theme7={`${linear-gradient (180deg, #E9A454 39.58%, rgba(0, 0, 0, 0) 100%), #A0A0A0;}`}
        // src={Firemen_Theme}
      />
      <DetailLogo
        theme="#2A5AA6"
        src={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/detail_wina_logo_new.png`}
      />
      <DetailAppDev
        application
        title="MOBILE APP DEVELOPMENT"
        desp="During the app development process of Winaa's job board project, the project team faced challenges due to client feedback and time constraints. The matching algorithm, based on several criteria, had to be integrated into the mobile application, and a calendar feature was developed to enable students to book interview sessions with companies. The team also integrated a feature that automatically retrieved job offers from reference websites in France and added them to Winaa's database.The project team included a designer, two developers, one project manager, and a lead developer, who had regular meetings with the client to ensure they were meeting expectations. Despite changes and additions to the project, the client's satisfaction was maintained. Winaa's job board project was designed to cater to mobile users and featured an automated system that made it easier for job seekers to connect with companies and explore job opportunities efficiently. This system reduced the workload for both companies and apprentices, making the job search process more accessible and efficient for all parties involved."
        fullImg={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/wina_appdesign.png`}
        titleTheme="#2A5AA6"
        // halfImg={Wina_AppDesign}
      />
      <DetailAppDev
        website
        title="WEB DEVELOPMENT"
        desp="The web development process for the Winaa job board project encountered significant challenges due to client feedback and time constraints. Initially, the project team had planned to complete the mockups before initiating the development phase. However, due to a tight schedule, this was not viable, and the team had to adapt to changes requested by the client in real-time. The team comprised a designer, two developers, one project manager, and a lead developer who had regular meetings with the client to ensure they were on track. Despite the changes and additions made to the project, the client's satisfaction was not compromised throughout the process.During the web development process, Falcon optimized the data exchange flow to minimize operating expenses, which can be significant for such projects. The Winaa job board project aimed to serve web users, with features that enabled job seekers to connect with companies and explore job opportunities efficiently. The platform's automated system reduces the workload for both companies and apprentices, streamlining the job search process and making it more accessible and efficient for all parties involved."
        fullImg={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/wina_webdesign.png`}
        titleTheme="#2A5AA6"
        // halfImg={Wina_AppDesign}
      />
      <DetailFeedback
        // titleTheme="#3675B7"
        // despTheme="#282828"
        desp1="I really appreciate when the Falcon’s team gives me new ideas and also elaborates them to meet the expectations with a minimum effort, mature and professional behavior overall. Thanks for co-operations."
        // location
        ThemeBG="#2A5AA6"
        AvatarSrc={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/detail_overviewAvatar.png`}
        // AvatarSrc={Kidcab_Avatar}
        name="Jean-Philippe O"
      />
      <DetailMoreProjects />

      <Footer />
    </div>
  );
}
