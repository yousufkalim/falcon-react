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
        description="Excellence Mode is a chain of ready-to-wear stores in France, with several dozen locations throughout France."
      />
      <DetailOverview
        // desp
        // location
        desp="In order to develop A French-based ready-to-wear store chain, its brand image, and its online activity, the company wanted to have an e-commerce site. The website was developed on .NET and was complete in 4 months from April 2022 to July 2022"
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
        // desp
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
        // desp
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
        // desp
        fullImg={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/excellence_theme.png`}
        titleTheme="#282828"
        // halfImg=(src Required)
      />
      <DetailFeedback
        titleTheme="#0086EF"
        despTheme="#282828"
        desp="It is a distinct pleasure for me to recommend falcon IT to all interested parties.They have been professional, comprehensive, and competent throughout the process of working together. We have established a relationship with them for years to come."
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
