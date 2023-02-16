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
import TiltService from '../../assets/images/tilt_detailservice.svg';
import TiltService_fr from '../../assets/images/tilt_detailservice_fr.svg';
import Tilt_Overview from '../../assets/images/detail_tilt_overview.svg';
import DetailMoreProjects from '../../components/ProjectDetails/DetailMoreProjects';

// Home Component
export default function Tilt() {
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
      <NavBar ContactUs scrollBarBG="#D3014A" />
      <DetailHeader
        background="#282828"
        bottomBG="#D3014A"
        typoBG="#D3014A"
        HeaderImg={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/tilt_header.png`}
        title="Tilt"
        subTitle="Tilt"
        // iconTheme="#9D3C64"
        description={t(
          'Web and mobile platform connecting restaurants, corporate customers and delivery drivers for bulked meal deliveries in Martinique.'
        )}
      />
      <DetailOverview
        titleTheme="#282828"
        desp="Tilt is a French-based platform connecting restaurants with corporate customers. Its front end is developed on React and its back end is on Node JS and the project was completed in 5 months."
        AvatarSrc={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/overview_quadraAvatar.png`}
        nameColor="#D3014A"
        name="Laurent Louis-Henry"
        // location="France"
        // src={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/ov_tilt.png`}
        src={Tilt_Overview}
      />
      <DetailService
        src={lang === 'fr' ? TiltService_fr : TiltService}
        // web
        both
        titleTheme="#282828"
        borderColor="#282828"
        circleTheme="#D3014A"
        fitLogo
        liteLogo={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/tilt_lite_logo.png`}
      />

      <DetailDemo
        to="https://tilt-entreprise.com/"
        desp="Web and mobile platform connecting restaurants, corporate customers, and delivery drivers for bulked meal deliveries in Martinique. This smart concept allows each customer to save on the delivery fees, as they are shared among everyone passing an order. The customers can order food with an ingenious system allowing mixed dishes among several restaurants in the same area. Then they get notified of the status of the order, and they can rate the overall experience.On the restaurant side, it is possible to create and manage a customized menu,see all the incoming orders, and change their status.On the delivery side, the application of the dishes to be picked and delivered, with all the location information. The delivery driver automatically informs the users of the progress of the order, with push notifications."
        // btnText
        // DetailDemo_SquareDiv
        DetailDemo_RoundDiv
        titleColor="#282828"
        title="Tilt"
        btnTheme="#D3014A"
        theme="#D3014A"
        src={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/tilt_demo_new.png`}
      />
      <DetailDesign
        titleTheme="#282828"
        title="APP UI DESIGN"
        desp="Our design has an intuitive, user-friendly interface for restaurant, corporate, and delivery users, allowing customers to quickly order, mix dishes, and save on delivery fees. Users will receive real-time notifications and rate their experience. Restaurant-side will manage menus, incoming orders, and order status, while delivery drivers will inform users with push notifications. Using a consistent design system and user research, we conducted usability testing to optimize the experience. Expect increased user satisfaction, boosted usage, and overall platform success."
        // overlap
        // TopImg={Tilt_Design1}
        // MidImg={Tilt_Design2}
        // BottomImg={Tilt_Design3}
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
        desp="Pink added liveliness, white brought cleanliness and sophistication. Black and grey complemented, creating a cohesive, modern aesthetic and trustworthiness. High contrast and accessibility were prioritized for a visually appealing, user-friendly color scheme that enhanced the experience."
        // centerImage
        // src
        // Images
        // src1={OrgaPlan_Theme}
        // src2={OrgaPlan_Theme}
        // src3={EZbox_Theme3}
        // fullscreen
        title="COLOR THEME"
        titleTheme="#282828"
        // desp
        Theme1="#D3014A"
        Theme2="#ffffff"
        Theme3="#282828"
        Theme4="#575961"
        // Theme5="#00000040"
        // Theme6=""
        // Theme7=""
        // Theme7={`${linear-gradient (180deg, #E9A454 39.58%, rgba(0, 0, 0, 0) 100%), #A0A0A0;}`}
        // src={OrgaPlan_Theme}
      />
      <DetailLogo
        theme="#D3014A"
        src={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/detail_tilt_logo.png`}
      />
      <DetailAppDev
        application
        title="MOBILE APP DEVELOPMENT"
        desp="The front-end team worked on developing a user-friendly interface that enabled customers to easily place orders, while the back-end team focused on creating a robust system that handled orders from multiple restaurants and delivery drivers. The mobile development team worked on the development of the mobile platform, ensuring a consistent user experience across all devices.The quality assurance team conducted rigorous testing to ensure the platform was stable, secure, and free from bugs. The platform was launched successfully, meeting all the client's requirements and providing an easy-to-use solution for customers, restaurants, and delivery drivers."
        fullImg={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/tilt_appdesign.png`}
        titleTheme="#282828"
        // halfImg=(src Required)
      />
      <DetailAppDev
        website
        title="WEB DEVELOPMENT"
        desp="Regular client meetings were held throughout the project to ensure that the product was meeting their expectations. The client provided valuable feedback that was taken into account during the development process, resulting in a final product that met their needs and requirements. Proper integration with the mobile application was performed under highly experience developers to ensure the smoothness of work and to avoid any conflicts and errors, . The platform was launched successfully, meeting all the client's requirements and providing an easy-to-use solution for customers, restaurants, and delivery drivers. Overall, the project was a success, meeting the client's expectations and providing a valuable service to the end-users. and finally regression testing and final product's overall testing was performed at the end too."
        fullImg={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/tilt_webdesign.png`}
        titleTheme="#282828"
        // halfImg=(src Required)
      />
      <DetailFeedback
        // titleTheme="#9D936D"
        // despTheme="#282828"
        desp1="We started to work together since 2019, and since then, it is just ongoing ! I really appreciate when the Project Manager challenges my ideas and tells me how to achieve the expectations with a minimum effort."
        location="Martinique, Fr"
        AvatarSrc={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/detail_overviewAvatar.png`}
        ThemeBG="#D3014A"
        // AvatarSrc={Kidcab_Avatar}
        name="Laurent Louis"
      />
      <DetailMoreProjects />

      <Footer />
    </div>
  );
}
