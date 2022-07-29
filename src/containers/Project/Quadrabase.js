// Init
import React from 'react';

// Importing Components
import NavBar from '../../components/Common/NavBar';
import DetailHeader from '../../components/ProjectDetails/DetailHeader';
import QuadraHeader from '../../assets/images/qudra_header.png';
import DetailOverview from '../../components/ProjectDetails/DetailOverview';
import OV_Quadra from '../../assets/images/quadra_overview.png';
import DetailService from '../../components/ProjectDetails/DetailService';

import QB_Avatar from '../../assets/images/overview_quadraAvatar.png';
import DetailDemo from '../../components/ProjectDetails/DetailDemo';
import QB_Demo from '../../assets/images/qb_demo_new.png';
import DetailDesign from '../../components/ProjectDetails/DetailDesign';
import QB_Design1 from '../../assets/images/detail_qb_design1.png';
import QB_Design2 from '../../assets/images/detail_qb_design2.png';
import QB_Design3 from '../../assets/images/detail_qb_design3.png';

import DetailTheme from '../../components/ProjectDetails/DetailTheme';
import QB_Theme from '../../assets/images/detail_qb_theme.png';
import DetailLogo from '../../components/ProjectDetails/DetailLogo';
import QB_Logo from '../../assets/images/detail_qb_logo.png';
import DetailAppDev from '../../components/ProjectDetails/DetailAppDev';
import QB_Design from '../../assets/images/detail_qb_design.png';
import DetailFeedback from '../../components/ProjectDetails/DetailFeedback';
import Footer from '../../components/Common/Footer';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet';

// Home Component
export default function Quadrabase() {
  const { i18n, t } = useTranslation();

  return (
    <div className='Permispop_Container'>
      <Helmet>
        <title>Falcon IT Consulting</title>
        <meta
          name='description'
          content='In the past, it was easy to manage a team of employees who were not working thousands of miles away from you. Nowadays, businesses are adopting remote trends by employing skilled workers from around the globe. Naturally, the manager is responsible for not only managing the team of employees but also to instruct, foster, and support that team. This responsibility is not always that easy. Thus, here we will be discussing the possible challenges of managing a remote team and how to overcome such obstacles.'
        />
        <meta
          name='keywords'
          content='falcon, falconit, falcon consulting,blogs, projects, software, websites, application, developers, app developments, ios, android, blogs, articles, blog articles,collaborating,expertize,Trustful, about us, about,skilled, , ambitious, UI/UX, designers, project managers, quality testers,partnerships, contact, contact us, contact info, facebook, twitter, linkedin, calendly, social media,whatsapp,legal mentions, privacy policy,policies '
        />
      </Helmet>
      <NavBar ContactUs />
      <DetailHeader
        background='#000000'
        bottomBG='#FFF0E2'
        typoBG='#9D3C64EB'
        HeaderImg={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/qudra_header.png`}
        title='Quadrabase.'
        subTitle='Quadrabase'
        iconTheme='#9D3C64'
        description={t(
          'Quadrabase is a web platform allowing engineering offices to automatically generate tender documents in the construction industry: Project Specification, Project Cost Estimate, Project bidding template. The platform has a well structured and multi-level database, allowing to include the most pertinent data for each specific project, based on the project details.'
        )}
      />
      <DetailOverview
        titleTheme='#FF8616'
        desp='The project was released in several modules, so that the client could see the progress on the go. We started by completing and validating the admin panel, then we worked on the Architect interface, and finally on the Manufacturer features. The project took overall 6 months, including all the edits in order to make it very functional.'
        // desp=""
        AvatarSrc={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/overview_quadraAvatar.png`}
        nameColor='#9D3C64'
        name='Jean-Claude Imbert'
        // location="France"
        src={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/quadra_overview.png`}
      />
      <DetailService web titleTheme='#FF8616' borderColor='#FF8616' circleTheme='#9D3C64' />

      <DetailDemo
        to='https://quadrabase-demo.web.app/auth/home'
        titleColor='#FF8616'
        title='Quadrabase'
        desp='Our client being a project manager with more than 30 years of experience in the field, we had to show a great capacity of adaptation to correctly apprehend the project, and understand all the technical aspects. This project is ambitious and aims to revolutionize the approach to design in the field of construction in France.'
        btnTheme='#9D3C64'
        theme='#9D3C64'
        DetailDemo_SquareDiv
        src={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/qb_demo_new.png`}
      />
      <DetailDesign
        title='UI DESIGN'
        titleTheme='#FFA450'
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
        titleTheme='#FF8616'
        // desp
        Theme1='#FF8616'
        Theme2='#202020'
        Theme3='#D7D7D7'
        Theme4='#575557'
        Theme5='#8C1244'
        Theme6='#F5F5F5'
        // Theme7
        src={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/detail_qb_theme.png`}
      />
      <DetailLogo
        theme='#9D3C64'
        src={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/detail_qb_logo.png`}
      />
      <DetailAppDev
        title='WEB DESIGN'
        titleTheme='#FF8616'
        website
        fullImg={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/detail_qb_design.png`}
      />
      <DetailFeedback
        ThemeBG='#9D3C64'
        // titleTheme=""
        // despTheme=""
        desp='The first development team did not complete 100% the website, which was frustrating. Falcon Consulting took over and redeveloped the website from A to Z. They went the extra mile to make sure all the details were taken into consideration. Professional, Creative, and excellent communication with the team. If I had contracted with Falcon IT for the first time I would not have had to do it twice.'
        AvatarSrc={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/overview_quadraAvatar.png`}
        name='Jean-Claude Imbert'

        // location=""
      />
      <Footer />
    </div>
  );
}
