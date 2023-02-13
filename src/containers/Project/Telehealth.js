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
import TeleService from '../../assets/images/tele_detailservice.svg';
import TeleService_fr from '../../assets/images/tele_detailservice_fr.svg';
import Tele_Overview from '../../assets/images/detail_tele_overview.svg';
import DetailMoreProjects from '../../components/ProjectDetails/DetailMoreProjects';

// Home Component
export default function Telehealth() {
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
      <NavBar ContactUs scrollBarBG="#136773" />
      <DetailHeader
        // DividerBG
        background="#136773"
        bottomBG="#136773"
        typoBG="#FBA622EB"
        HeaderImg={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/telehealth_header.png`}
        title="Telehealth Platform"
        subTitle="Telehealth Platform"
        description={t(
          'Telehealth platform (project name is confidential) is a US web and mobile application which allows physiotherapists to analyze the movements of their patients remotely.'
        )}
      />
      <DetailOverview
        // desp
        desp="The health startup, based in Chicago and specialized in remote consultation, worked with several agencies in order to realize their project. Not satisfied by the previous results, they reached out to Falcon, who realized a project MVP to prove the technical feasibility of this cutting-edge project, and allowing the client to raise money for the development of the complete platform. The platform is developed in Web and mobile application."
        location="Chicago"
        titleTheme="#FBA622"
        // AvatarSrc={Kidcab_Avatar}
        nameColor="#FBA622"
        AvatarSrc={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/detail_overviewAvatar.png`}
        name="Confidential"
        // src={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/ov_telehealth.png`}
        src={Tele_Overview}
      />
      <DetailService
        both
        src={lang === 'fr' ? TeleService_fr : TeleService}
        titleTheme="#FBA622"
        borderColor="#FBA622"
        circleTheme="#136773"
        BGLogo
        liteLogo={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/tele_lite_logo.png`}
      />

      <DetailDemo
        // to='https://screnr-ui.web.app/'
        desp="Telehealth platform (project name is confidential) is a US web and mobile application which allows physiotherapists to analyze the movements of their patients remotely. The patient is recorded through his own phone, performing different types of exercises, and the tool detects and calculates the angles of the patient body (such as his legs, arms, foot, waist, etc...). The program then analyzes the data based on internal rules and indicates whether the movements are abnormal or not. The detection of the movements is done with the help of a Media pipe, ARKit and ARCore, and requires advanced knowledge in terms of image processing to ensure fluidity and accuracy of the final results. The health experts can also create custom-made motion exercises by using the exercise generator feature of the platform. This is a complex and cutting-edge technology which allows to define automatically the internal rules of the exercises generated (allowing to know when a patient is correctly realizing the movements or not)."
        // btnText
        DetailDemo_SquareDiv
        // DetailDemo_RoundDiv
        titleColor="#FBA622"
        title="Tele Health Platform"
        btnTheme="#FBA622"
        theme="#136773"
        src={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/telehealth_demo.png`}
      />
      <DetailDesign
        titleTheme="#454238"
        title="UI DESIGN"
        desp="Based on client requirement, Falcon did a simple and modern UI/UX mockups, which got validated and realized in the first half of 2022. After the confirmation of the product-market fit, the client asked Falcon to create the complete platform, based on its requirement. Falcon’s UI/UX team worked on defining project workflow and mockups, with the use of Figma. After several weekly meetings allowing to confirm all the assumptions, the mockups got validated within 5 weeks."
        // overlap
        // TopImg={Tele_Design1}
        // MidImg={Tele_Design2}
        // BottomImg={Tele_Design3}
        grids
        src1={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/telehealth_design2.png`}
        src2={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/telehealth_design3.png`}
        src3={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/detail_design_4.png`}
        src4={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/detail_design_1.png`}
        src5={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/telehealth_design1.png`}
        src6={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/telehealth_design2.png`}

        // overlap
      />

      <DetailTheme
        desp="The primary hue was requested by the client, and Falcon supplemented it with secondary shades to form a pleasing overall effect."
        // centerImage
        // src
        // Images
        // src1={EZbox_Theme1}
        // src2={EZbox_Theme2}
        // src3={EZbox_Theme3}
        // fullscreen
        titleTheme="#454238"
        // desp
        Theme1="#136773"
        Theme2="#FBA622"
        Theme3="#FCFCFC"
        Theme4="#454238"
        // Theme5=""
        // Theme6=""
        // Theme7=""
        // Theme7={`${linear-gradient (180deg, #E9A454 39.58%, rgba(0, 0, 0, 0) 100%), #A0A0A0;}`}
        // src={KidCab_Theme}
      />
      {/* <DetailLogo theme="#454238" src={EZbox_Logo} /> */}
      <DetailAppDev
        website
        title="WEB DEVELOPMENT"
        desp="The global platform has 5 levels of users, in addition to the super admin. It is available in both web and mobile application, using mainly MERN stacks (React / Node / MongoDB), but also Flutter for mobile apps, for its compatibility with some external features. As this project involves some movement detection aspect, Falcon is working with Mediapipe, ARCore and ARKit technologies, making sure the platform is operational on all types of devices. It is a challenging and cutting-edge project, requiring a lot of R&D which is realized by Falcon’s Lead Developer. The startup has its internal CTO, who is overviewing the overall development of the platform, exclusively done by Falcon developers.The project team is composed of a Lead Developer, a back-end developer, a web front-end developer, and a mobile developer. They are working together with a Project Manager, and a Quality tester as required, and reporting to the CTO from the startup. During the development, a lot of angle calculation were necessary, considering several scenarios, in order to provide the right feedback to health provider. The team also had to be skilled in Video processing, needing to consider the capabilities of both Android and iOS devices, to get a smooth process, without lags, while getting enough data to provide the right feedback This is an ongoing project, where Falcon is developing additional features."
        // halfImg={EZbox_WebDesign}
        titleTheme="#454238"
        // fullImg=(src Required)
      />
      <DetailFeedback
        // titleTheme
        // despTheme

        desp="This was a very challenging project, and to be honest, we were uncertain whether it was even technically possible. In the past, we reached out to another offshore company for a first version, which did cost us more than $100k, even though the final result was not user friendly. When we met with Falcon, they were confident to be able to do a better and more efficient project, as an MVP as a start. It was not an easy project, but they did show a lot of commitment and they finally made it successfully. Great job guys !"
        location="Chicago"
        AvatarSrc={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/detail_overviewAvatar.png`}
        ThemeBG="#FBA622"
        // AvatarSrc={Kidcab_Avatar}
        name="Confidential"
      />
      <DetailMoreProjects />

      <Footer />
    </div>
  );
}
