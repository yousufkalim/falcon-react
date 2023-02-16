// Init
import React from 'react';

// Importing Components
import NavBar from '../../components/Common/NavBar';
import DetailHeader from '../../components/ProjectDetails/DetailHeader';
import DetailOverview from '../../components/ProjectDetails/DetailOverview';
import DetailService from '../../components/ProjectDetails/DetailService';
import DetailDemo from '../../components/ProjectDetails/DetailDemo';
import DetailDesign from '../../components/ProjectDetails/DetailDesign';
import DetailAppDev from '../../components/ProjectDetails/DetailAppDev';
import DetailTheme from '../../components/ProjectDetails/DetailTheme';
import DetailFeedback from '../../components/ProjectDetails/DetailFeedback';
import Footer from '../../components/Common/Footer';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';
import ExcellenceService from '../../assets/images/excellence_detailservice.svg';
import ExcellenceService_fr from '../../assets/images/excellence_detailservice_fr.svg';
import Excellence_Overview from '../../assets/images/detail_erp_overview.svg';
import DetailMoreProjects from '../../components/ProjectDetails/DetailMoreProjects';

// Home Component
export default function Excellence() {
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
      <NavBar ContactUs scrollBarBG="#0086EF" />
      <DetailHeader
        // DividerBG
        background="#282828"
        bottomBG="#0086EF"
        typoBG="#0086EF"
        HeaderImg={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/excellence_header.png`}
        title="Excellence ERP"
        subTitle="Excellence ERP"
        description={t(
          'Excellence Mode is a chain of ready-to-wear stores in France, with several dozen locations throughout France.'
        )}
      />
      <DetailOverview
        desp="Excellence ERP is designed to assist both the brand owner (Excellence) and franchisees in effectively managing their stores and business operations. Excellence owns the brand and has franchisees who operate stores. These stores are leased from landlords, and franchisees are responsible for paying rent to the landlords as well as fees to Excellence."
        // location
        titleTheme="#282828"
        AvatarSrc={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/kidcabAvatar.png`}
        nameColor="#0086EF"
        name="Ukhano"
        // src={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/ov_excellence.png`}
        src={Excellence_Overview}
      />
      <DetailService
        // both
        WebApp
        src={lang === 'fr' ? ExcellenceService_fr : ExcellenceService}
        // app
        titleTheme="#282828"
        borderColor="#282828"
        circleTheme="#0086EF"
      />

      <DetailDemo
        // to='http://160.153.249.64:4455/'
        desp="Excellence ERP is designed to assist both the brand owner (Excellence) and franchisees in effectively managing their stores and business operations. Excellence owns the brand and has franchisees who operate stores. These stores are leased from landlords, and franchisees are responsible for paying rent to the landlords as well as fees to Excellence."
        // btnText
        DetailDemo_SquareDiv
        // DetailDemo_RoundDiv
        titleColor="#282828"
        title="Excellence ERP"
        btnTheme="#0086EF"
        theme="#0086EF"
        src={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/excellence_demo.png`}
      />
      <DetailDesign
        titleTheme="#282828"
        title="UI DESIGN"
        desp="The UI/UX design of Excellence ERP prioritizes simplicity and ease of use for all stakeholders managing their franchise operations. The application is divided into three modules: Rent Management, Franchise Management, and Store Management. Rent Management has clear interfaces to monitor payments and generate reports, while Franchise Management gives brand owners control over their franchisees and performance tracking. Store Management is the system's centerpiece, with Monthly Cost Monitoring, Contract Term Information, Facility Management, and Payment Device Management features. The design is user-friendly and modern, with an easy-to-navigate interface for monthly expenses, lease agreements, store maintenance, and secure payment processing. The Excellence ERP system streamlines franchise operations, ensuring efficient and effective management."
        // overlap
        // TopImg={OrgaPlan_Design1}
        // MidImg={OrgaPlan_Design2}
        // BottomImg={OrgaPlan_Design3}
        grids
        src1={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/orgaplan_design2.png`}
        src2={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/orgaplan_design1.png`}
        src3={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/orgaplan_design1.png`}
        src4={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/orgaplan_design2.png`}
        src5={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/orgaplan_design3.png`}
        src6={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/orgaplan_design1.png`}

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
        title="COLOR THEME AND DESIGN"
        titleTheme="#282828"
        desp="The Excellence ERP color theme features light blue, white, black, and grey. Light blue is the primary color, representing trust, reliability, and stability, essential characteristics for a business management app. The white color denotes simplicity, purity, and cleanliness, highlighting the system's ease of use. Black symbolizes power, sophistication, and elegance, giving a sense of professionalism and confidence. Grey, used as an accent color, represents neutrality, calmness, and balance, adding a sense of tranquility and harmony to the theme. The color scheme is designed to create a clean, modern, and professional look reflecting the ERP's purpose while keeping the UI visually appealing and user-friendly."
        Theme1="#0086EF"
        Theme2="#FAFAFA"
        Theme3="#191A1F"
        Theme4="#575961"
        // Theme5="#00000040"
        // Theme6=""
        // Theme7=""
        // Theme7={`${linear-gradient (180deg, #E9A454 39.58%, rgba(0, 0, 0, 0) 100%), #A0A0A0;}`}
        // src={Excellence_Theme}
      />
      {/* <DetailLogo theme="#EDCF99" src={RealEstate_Logo} /> */}
      <DetailAppDev
        website
        title="WEB DEVELOPMENT"
        desp="The Excellence ERP development process was a collaborative effort between the project team and the client, which was divided into three stages: planning, design, and implementation. In the planning stage, the team created a detailed list of requirements and features with the client. In the design stage, the UI/UX design was created with simplicity and ease of use in mind. During implementation, the team built the application, starting with core modules, and added critical features such as Monthly Cost Monitoring, Contract Term Information, Facility Management, and Payment Device Management.The team rigorously tested the system to ensure quality and promptly fixed any issues or glitches. The team maintained an open line of communication with the client, providing regular updates and seeking feedback throughout the development process. The result was a highly collaborative and iterative process, producing a robust and user-friendly application that streamlines franchise operations and enhances efficiency for all stakeholders involved."
        fullImg={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/excellence_theme.png`}
        titleTheme="#282828"
        // halfImg=(src Required)
      />
      <DetailFeedback
        titleTheme="#0086EF"
        despTheme="#282828"
        desp1="I highly commend the development team for their meticulous planning, which proved crucial in defining the project's objectives and establishing clear milestones. Moreover, the team's delivery of an impressive UI/UX design perfectly aligned with our business objectives and is truly laudable, with its visually appealing and user-friendly interface."
        // desp="It is a distinct pleasure for me to recommend falcon IT to all interested parties.They have been professional, comprehensive, and competent throughout the process of working together. We have established a relationship with them for years to come."
        // location
        ThemeBG="#ffffff"
        AvatarSrc={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/kidcabAvatar.png`}
        name="Ukhano"
      />
      <DetailMoreProjects />

      <Footer />
    </div>
  );
}
