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
// import DetailFeedback from '../../components/ProjectDetails/DetailFeedback';
import Footer from '../../components/Common/Footer';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet';
import ServiceImg from '../../assets/images/qb_detailservice.svg';
import ServiceImg_fr from '../../assets/images/qb_detailservice_fr.svg';
import QB_Overview from '../../assets/images/detail_qb_overview.svg';
import DetailMoreProjects from '../../components/ProjectDetails/DetailMoreProjects';

// Home Component
export default function Quadrabase() {
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
      <NavBar ContactUs scrollBarBG="#9D3C64EB" />
      <DetailHeader
        background="#000000"
        bottomBG="#FFF0E2"
        typoBG="#9D3C64EB"
        HeaderImg={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/qudra_header.png`}
        title="Quadrabase."
        subTitle="Quadrabase"
        iconTheme="#9D3C64"
        description={t(
          'Our client being a project manager with more than 30 years of experience in the field, we had to show a great capacity of adaptation to correctly apprehend the project, and understand all the technical aspects.'
        )}
      />
      <DetailOverview
        titleTheme="#FF8616"
        desp="Quadrabase is a project from a client who has worked in the Construction industry in France for more than 20 years. He has built over the time a very detailed and rich database for the construction projects, and his goal is to revolutionize the construction industry by providing a unique platform, allowing each stakeholder to generate detailed and accurate tender documents very quickly !"
        // desp=""
        AvatarSrc={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/overview_quadraAvatar.png`}
        nameColor="#9D3C64"
        // name='Jean-Claude Imbert'
        // location="France"
        src={QB_Overview}
      />
      <DetailService
        src={lang === 'fr' ? ServiceImg_fr : ServiceImg}
        WebApp
        titleTheme="#FF8616"
        borderColor="#FF8616"
        circleTheme="#9D3C64"
      />

      <DetailDemo
        to="https://quadrabase-demo.web.app/auth/home"
        // to='https://www.quadrabase.fr'
        titleColor="#FF8616"
        title="Quadrabase"
        desp="Our client being a project manager with more than 30 years of experience in the field, we had to show a great capacity of adaptation to correctly apprehend the project, and understand all the technical aspects. This project is ambitious and aims to revolutionize the approach to design in the field of construction in France."
        btnTheme="#9D3C64"
        theme="#9D3C64"
        DetailDemo_SquareDiv
        src={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/qb_demo_new.png`}
      />
      <DetailDesign
        title="UI DESIGN"
        titleTheme="#FFA450"
        desp="Quadrabase already used a specific UI and UX for the Prescriber interface, which was satisfying the clients needs. As the goal was not to reinvent screens which are already approved, Falcon focus on the other ones to make sure the overall project looks modern : landing pages, subscription process, manufacturer interface. We also implemented a dashboard for the prescriber, to enhance the overall User experience."
        grids
        src1={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/detail_qb_design1.png`}
        src2={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/detail_qb_design2.png`}
        src3={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/detail_qb_design1.png`}
        src4={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/detail_qb_design1.png`}
        src5={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/detail_qb_design2.png`}
        src6={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/detail_qb_design3.png`}
      />
      <DetailTheme
        fullscreen
        // centerImage
        titleTheme="#FF8616"
        desp="The main color was provided by the client, and the secondary colors were provided by Falcon in order to match and create a nice impression overall."
        Theme1="#FF8616"
        Theme2="#202020"
        Theme3="#D7D7D7"
        Theme4="#575557"
        Theme5="#8C1244"
        Theme6="#F5F5F5"
        // Theme7
        src={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/detail_qb_theme.png`}
      />
      <DetailLogo
        theme="#9D3C64"
        src={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/detail_qb_logo.png`}
      />
      <DetailAppDev
        title="WEB DESIGN"
        titleTheme="#FF8616"
        website
        fullImg={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/detail_qb_design.png`}
        desp="Quadrabase was a project initially developed by another development agency. As the client Is very meticulous and wants its platform to be perfect for its users, the development agency was not willing to complete the project. And as the initial platform was using an old technology, it was decided to start again from scratch, and propose a modern platform, which would meet the client’s expectation. Even though not 100% complete, the project specification provided by the client were satisfying to have a very good idea of the big picture, and Falcon was able to start the development very quickly. A team of two developers were working on the project for 4 months, with a Project Manager and a Lead Developer as a support. One of the developers was realizing the modules, starting by the admin panel, prescribers and manufacturers interface, while the other developer was focusing on the document generation module, which was requiring quite some work. The main challenge of the project was all the details that were important for the client, but not appearing in the document. Falcon has a policy of completing the last mile of its projects without discussion (as long as there is no new feature), and it was the case here."
      />
      {/* <DetailFeedback
        ThemeBG='#9D3C64'
        // titleTheme=""
        // despTheme=""
        desp='The first development team did not complete 100% the website, which was frustrating. Falcon Consulting took over and redeveloped the website from A to Z. They went the extra mile to make sure all the details were taken into consideration. Professional, Creative, and excellent communication with the team. If I had contracted with Falcon IT for the first time I would not have had to do it twice.'
        AvatarSrc={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/overview_quadraAvatar.png`}
        name='Jean-Claude Imbert'

        // location=""
      /> */}
      <DetailMoreProjects />

      <Footer />
    </div>
  );
}
