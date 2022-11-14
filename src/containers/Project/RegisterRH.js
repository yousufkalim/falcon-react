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
import RegistreService from '../../assets/images/registre_detailservice.svg';
import RegistreService_fr from '../../assets/images/registre_detailservice_fr.svg';
import Registre_Overview from '../../assets/images/detail_registre_overview.svg';
import DetailMoreProjects from '../../components/ProjectDetails/DetailMoreProjects';

// Home Component
export default function RegisterRH() {
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
      <NavBar ContactUs scrollBarBG="#142E68" />
      <DetailHeader
        background="#000000B8"
        bottomBG="#142E68"
        typoBG="#142E68"
        HeaderImg={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/register_header.png`}
        title="Registre-RH"
        subTitle="Registre-RH"
        // iconTheme="#9D3C64"
        description={t(
          'This web application offers a complete panel of features to manage all the employees and consultants of a business entity, as well as their documents and status.'
        )}
      />
      <DetailOverview
        desp="This system offers complete functionality to manage staff, documents related to them and their status. One can also manage the Risk assessment documents of the Company. This application is capable of managing multiple Companies, their branches and Employee along with the transfer of employee from one branch to another."
        titleTheme="#142E68"
        // desp=""
        AvatarSrc={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/overview_quadraAvatar.png`}
        nameColor="#142E68"
        name="Romain S."
        // location="France"
        // src={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/ov_register.png`}
        src={Registre_Overview}
      />
      <DetailService
        // app
        src={lang === 'fr' ? RegistreService_fr : RegistreService}
        WebApp
        // both
        titleTheme="#142E68"
        borderColor="#42C2FF"
        circleTheme="#142E68"
      />

      <DetailDemo
        to="https://registre-rh.fr/"
        desp="This web application offers a complete panel of features to manage all the employees and consultants of a business entity, as well as their documents and status. Registre-RH also allows to manage the Risk assessment documents of the Company, in order to make sure the entity is complying with the regulation. This application is capable of managing multiple Companies, their branches and Employee along with the transfer of employee from one branch to another. This application is deployed in big Construction groups in France, and it is used on a day-to-day basis by their HR Department."
        // btnText
        DetailDemo_SquareDiv
        // DetailDemo_RoundDiv
        titleColor="#142E68"
        title="Registre-RH"
        btnTheme="#142E68"
        theme="#142E68"
        src={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/register_demo.png`}
      />
      <DetailDesign
        titleTheme="#142E68"
        title="UI DESIGN"
        desp="Our client is an expert in the HR industry, and he has worked for top companies in strategic position such as HR Director. He had to make sure to comply with all the regulation requirement, which could be a real challenge when not having the appropriate tool. This is why he came up with the idea of filling this need and having Falcon creating a complete platform, especially targeting big companies with several branches. The specification had to be redacted by Falcon based on several meetings planned with the client. After getting the completed mockups, the client was able to present them with his targeted audience and make sure of the product market fit."
        // overlap
        // TopImg={Register_Design1}
        // MidImg={Register_Design2}
        // BottomImg={Register_Design3}
        grids
        src1={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/register_design2.png`}
        src2={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/register_design1.png`}
        src3={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/detail_design_4.png`}
        src4={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/detail_design_1.png`}
        src5={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/register_design3.png`}
        src6={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/detail_design_3.png`}

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
        title="COLOR THEME AND DESIGN"
        titleTheme="#142E68"
        desp="The color theme was proposed by Falcon, in order to stay in corporate standard and professional colors."
        Theme1="#142E68"
        Theme2="#42C2FF"
        Theme3="#FFFFFF"
        Theme4="#191A1F"
        Theme5="linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), #7A7A7A"
        // Theme6=""
        // Theme7=""
        // Theme7={`${linear-gradient (180deg, #E9A454 39.58%, rgba(0, 0, 0, 0) 100%), #A0A0A0;}`}
        // src={Register_Theme}
      />
      {/* <DetailLogo theme="#0073BB" src={Yuwway_Logo} /> */}
      <DetailAppDev
        website
        title="WEB DEVELOPMENT"
        desp="The project has been developed in modules, based on priorities provided by the client, and in order to be able to launch it as soon as possible. the project team was composed of a project manager, two developers (one back-end and one front-end), and a UI/UX designer. There were bi-weekly meetings with the client to provide frequent updates and get all the required clarification. The project was also tested internally. As the platform is storing sensitive information related to HR, the platform went through several security tests, and Falcon made sure to be 100% compliant with all the security requirement of the big companies. As the project is for the French market, GDPR compliance was also strictly met, and an specialized attorney was overviewing this aspect."
        fullImg={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/register_webdev.png`}
        titleTheme="#142E68"
        // halfImg={Yuwway_AppDesign}
      />
      <DetailFeedback
        titleTheme="#0086EF"
        despTheme="#282828"
        // desp
        // location
        ThemeBG="#fffff"
        AvatarSrc={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/detail_overviewAvatar.png`}
        // AvatarSrc={Kidcab_Avatar}
        name="Romain S."
      />
      <DetailMoreProjects />

      <Footer />
    </div>
  );
}
