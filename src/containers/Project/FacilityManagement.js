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
import FmService from '../../assets/images/fm_detailservice.svg';
import FmService_fr from '../../assets/images/fm_detailservice_fr.svg';
import Facility_Overview from '../../assets/images/detail_facility_overview.svg';
import DetailMoreProjects from '../../components/ProjectDetails/DetailMoreProjects';

// Home Component
export default function FacilityManagement() {
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
      <NavBar ContactUs scrollBarBG="#2F696D" />
      <DetailHeader
        background="#282828"
        bottomBG="#2F696D"
        typoBG="#2F696D"
        HeaderImg={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/facility_header.png`}
        title="Facility Management"
        subTitle="Facility Management"
        // iconTheme="#9D3C64"
        description={t('This is the platform for management of office building.')}
      />
      <DetailOverview
        titleTheme="#282828"
        desp="This is the platform for management of office building. It is similar to Trello-like Dashboard, showing the tickets and their status. here is one module in this project is Ticket management system which needs to be create and manage tickets. A Ticket management system is a module where there are two types of users : admin user / Employee user."
        // desp=""
        AvatarSrc={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/overview_quadraAvatar.png`}
        nameColor="#2F696D"
        name="Damien Dehoul"
        // location="France"
        // src={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/ov_facility.png`}
        src={Facility_Overview}
      />
      <DetailService
        src={lang === 'fr' ? FmService_fr : FmService}
        // app
        WebApp
        // both
        titleTheme="#282828"
        borderColor="#282828"
        circleTheme="#2F696D"
      />

      <DetailDemo
        to="https://facilitymanagement-demo.web.app/"
        // desp
        desp="This is the platform for management of office building. It is similar to Trello-like Dashboard, showing the tickets and their status. here is one module in this project is Ticket management system which needs to be create and manage tickets. A Ticket management system is a module where there are two types of users : admin user / Employee user."
        // btnText
        DetailDemo_SquareDiv
        // DetailDemo_RoundDiv
        titleColor="#282828"
        title="Facility Management"
        btnTheme="#2F696D"
        theme="#2F696D"
        src={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/facility_demo_new.png`}
      />
      <DetailDesign
        titleTheme="#2F696D"
        title="UI DESIGN"
        desp="UI/UX design of Facility Management is Trello-like and straightforward, with an easy-to-use dashboard for managing tickets. The platform features a ticket management system with two user types: admin and employee. The color scheme is professional, with a mix of neutral and bright colors and clear typography. The design is optimized for desktop and mobile devices and has a clear hierarchy of information for easy navigation. The ticket management system is user-friendly, with simple options for creating, tracking, and updating tickets. The platform facilitates efficient task management for both admin and employee users based on extensive user research."
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
        desp="The color scheme helps to convey the project's focus on efficient and organized management, while also communicating professionalism and balance. The sea-green provides a fresh and modern feel, while the black and grey add a sense of stability and reliability. The white color helps to balance the design and add a clean and polished look. Overall, the color theme creates a visually appealing and professional design that enhances the user experience and conveys the brand message."
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
        Theme1="#2F696D"
        Theme2="#FAFAFA"
        Theme3="#191A1F"
        Theme4="#575961"
        // Theme5="#00000040"
        // Theme6=""
        // Theme7=""
        // Theme7={`${linear-gradient (180deg, #E9A454 39.58%, rgba(0, 0, 0, 0) 100%), #A0A0A0;}`}
        // src={Facility_Theme}
      />
      {/* <DetailLogo theme="#0073BB" src={Yuwway_Logo} /> */}
      <DetailAppDev
        website
        title="WEB DEVELOPMENT"
        desp="Development process involved multiple client meetings to gather feedback and requirements. A thorough business analysis was carried out to align the platform with the client's goals. Testing, development, bug fixes, and reviews were done to ensure a high-quality end product that met the client's expectations. Client feedback was taken into consideration to ensure the final product was fit for their needs. Emphasis was placed on data accuracy and safety, with robust measures in place to protect against breaches or unauthorized access. The platform was thoroughly tested to provide the highest level of data accuracy and safety. The project aimed to deliver a secure and reliable platform designed to cater to the client's needs."
        fullImg={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/facility_theme.png`}
        titleTheme="#282828"
        // halfImg={Yuwway_AppDesign}
      />
      <DetailFeedback
        titleTheme="#2F696D"
        despTheme="#282828"
        desp1="Overall, the development team and all members involved in the project deserve praise for delivering an exceptional platform. End result product met our requirements and exceeds expectations at some components. Well done!"
        // location
        ThemeBG="#ffffff"
        // AvatarSrc={Kidcab_Avatar}
        AvatarSrc={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/detail_overviewAvatar.png`}
        name="Damien Dehoul"
      />
      <DetailMoreProjects />

      <Footer />
    </div>
  );
}
