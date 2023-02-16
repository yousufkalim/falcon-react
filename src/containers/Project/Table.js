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
import TableService from '../../assets/images/table_detailservice.svg';
import TableService_fr from '../../assets/images/table_detailservice_fr.svg';
import Table_Overview from '../../assets/images/detail_table_overview.svg';
import DetailMoreProjects from '../../components/ProjectDetails/DetailMoreProjects';

// Home Component
export default function Table() {
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
      <NavBar ContactUs scrollBarBG="#D60000" />
      <DetailHeader
        // DividerBG
        background="#000000"
        bottomBG="#D60000"
        typoBG="#D60000"
        HeaderImg={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/table_header.png`}
        title="@Table"
        subTitle="@Table"
        description={t(
          'This project consists of two apps one is for the restaurant and other is for the end user.'
        )}
      />
      <DetailOverview
        // desp
        desp="This project consists of two apps one is for the restaurant and other is for the end user. A-Table: A-Table is a Mobile Application that allows restaurant to accept and manage orders placed by app users and clients in restaurant. Mobile app for customers to view the restaurant's dishes and place an online order and in the restaurant. A-Table user side: There are two ways to use the app: (1). Either the client is in a restaurant, and he seats down at a table. There will be QR codes available on the tables, and once the user does scan them, it opens automatically the app (if it is already installed), and the user has two options: he can go to the menu of the restaurant, see the dishes, and place the order through the app (in-app payment). He can also chat with his assigned waiter; and ask him anything needed : glass of water, clean the table, etc... (2). Either the client is looking for a restaurant. In this case, he can search for a specific dish in the Home page. The app will show the popular dishes around him (geolocation). He has the possibility to filter his search: specific type of food, specific restaurant, etc...The filter is working with tags, that can be added or removed."
        // location
        titleTheme="#D60000"
        AvatarSrc={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/kidcabAvatar.png`}
        nameColor="#D60000"
        name="Shane Jhon"
        // src={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/ov_table.png`}
        src={Table_Overview}
      />
      <DetailService
        // both
        src={lang === 'fr' ? TableService_fr : TableService}
        // web
        WebApp
        titleTheme="#D60000"
        borderColor="#18374E"
        circleTheme="#D60000"
        fitLogo
        liteLogo={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/table_lite_logo.png`}
      />

      <DetailDemo
        to="https://a-table.app/"
        desp="This project consists of two apps one is for the restaurant and other is for the end user. A-Table: A-Table is a Mobile Application that allows restaurant to accept and manage orders placed by app users and clients in restaurant. Mobile app for customers to view the restaurant's dishes and place an online order and in the restaurant. A-Table user side: There are two ways to use the app: (1). Either the client is in a restaurant, and he seats down at a table. There will be QR codes available on the tables, and once the user does scan them, it opens automatically the app (if it is already installed), and the user has two options: he can go to the menu of the restaurant, see the dishes, and place the order through the app (in-app payment). He can also chat with his assigned waiter; and ask him anything needed : glass of water, clean the table, etc... (2). Either the client is looking for a restaurant. In this case, he can search for a specific dish in the Home page. The app will show the popular dishes around him (geolocation). He has the possibility to filter his search: specific type of food, specific restaurant, etc...The filter is working with tags, that can be added or removed."
        // desp
        // btnText
        // DetailDemo_SquareDiv
        DetailDemo_RoundDiv
        titleColor="#D60000"
        title="@Table"
        btnTheme="#D60000"
        theme="#D60000"
        src={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/table_demo.png`}
      />
      <DetailDesign
        titleTheme="#D60000"
        title="APP UI DESIGN"
        desp="The UI/UX design has been implemented for this project, featuring visually appealing and consistent branding for the restaurant, as well as an intuitive and easy-to-navigate interface. The restaurant app's UI provides clear information about incoming orders and facilitates efficient order management, including easy order editing, order status updates, and quick access to customer information. Similarly, the customer app prioritizes ease of use with clear and attractive menu displays, easy-to-use filters, and seamless ordering and payment processes. The chat feature has been made easily accessible to enable clear communication between customers and restaurant staff. The app has been optimized for different screen sizes and orientations, ensuring a smooth user experience on all devices."
        // overlap
        // TopImg={RealEstate_Design1}
        // MidImg={RealEstate_Design2}
        // BottomImg={RealEstate_Design3}
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
        desp="These colors have been used to create a modern and stylish look for the apps. The red color has been used to draw attention to important elements such as buttons, alerts, and notifications. The yellow color has been used sparingly to add contrast and vibrancy to the UI, particularly in the logo and branding elements. The white color has been used as the primary background color, giving the UI a clean and minimalist feel. The black and grey colors have been used for text, icons, and other UI elements, creating a sophisticated and professional look. Overall, the color theme has been designed to create a visually appealing and user-friendly UI, while also conveying a sense of professionalism and quality associated with a restaurant."
        // centerImage
        // src
        // Images
        // src1={RealEstate_Theme1}
        // src2={EZbox_Theme2}
        // src3={EZbox_Theme3}
        // fullscreen
        title="COLOR THEME"
        titleTheme="#D60000"
        // desp
        Theme1="#D60000"
        Theme2="#FFD54D"
        Theme3="#FAFAFA"
        Theme4="#191A1F"
        Theme5="#575961"
        // Theme6=""
        // Theme7=""
        // Theme7={`${linear-gradient (180deg, #E9A454 39.58%, rgba(0, 0, 0, 0) 100%), #A0A0A0;}`}
        // src={KidCab_Theme}
      />
      <DetailLogo
        theme="rgba(255, 213, 77, 0.25)"
        src={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/detail_table_logo.png`}
      />
      <DetailAppDev
        application
        title="MOBILE APP DEVELOPMENT"
        desp=" The project began with planning, where the project management team collaborated with the client to understand their requirements and goals. They then created a plan that included timelines, milestones, and resource allocation. The front end team then worked on designing the user interface for both the restaurant and customer apps, taking into account the branding and visual appeal, which was approved by the client before moving forward. The back end team built the server-side logic and APIs, while the mobile development team developed the restaurant and customer apps, with regular code reviews and testing. The Quality Assurance team conducted thorough testing of the app on multiple devices to identify any bugs, issues or glitches. Once all issues were resolved, the app was submitted for final client review. The final version of the app was deployed to the relevant app stores for public use. Throughout the process, the teams collaborated and communicated effectively to ensure the project was completed according to the client's requirements and expectations."
        // fullImg={Table_AppDesign}
        titleTheme="#D60000"
        halfImg={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/table_appdesign.png`}
      />
      <DetailFeedback
        // titleTheme
        // despTheme
        desp1="Your team was professional, efficient, and dedicated throughout the development process, and I am extremely impressed with the quality of the final product."
        // location
        ThemeBG="#D60000"
        AvatarSrc={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/kidcabAvatar.png`}
        name="Shane Jhon"
      />
      <DetailMoreProjects />

      <Footer />
    </div>
  );
}
