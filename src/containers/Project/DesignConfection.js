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

// Home Component
export default function DesignConfection() {
  return (
    <div className='Permispop_Container'>
      <Helmet>
        <title>{t('Falcon IT : Expert Software Engineers')}</title>
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
        // DividerBG
        background='#CC8E9C'
        bottomBG='#CC8E9C'
        typoBG='#CC8E9C'
        HeaderImg={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/detail_DC_header.png`}
        title='Design Confection.'
        subTitle='Design Confection'
        description='A web app designed to help customers with customized stitching to receive your creation at your home.'
      />
      <DetailOverview
        // desp
        // location
        desp='Design confection is a French-based project. It is a platform for tailors and clients for sewing services. The website is developed using MERN stacks, and it was completed in 4 months.'
        titleTheme='#282828'
        AvatarSrc={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/kidcabAvatar.png`}
        nameColor='#CC8E9C'
        name='Designer JK'
        src={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/detail_dc_overview.png`}
      />
      <DetailService
        // both
        web
        // app
        titleTheme='#282828'
        borderColor='#282828'
        circleTheme='#CC8E9C'
        fitLogo
        liteLogo={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/dc_lite_logo.png`}
      />

      <DetailDemo
        to='https://design-confection.web.app/'
        desp='A web app designed to help customers with customized stitching to receive your creation at your home. User login to register and add information regarding customized dress like color combination, stuff design, etc. After registration, consumers post ads containing ideas and 100+creative designers send you the estimated costs, where you can choose your designer with 99% accuracy as design confection brings your ideas to life'
        // btnText
        DetailDemo_SquareDiv
        // DetailDemo_RoundDiv
        titleColor='#282828'
        title='Design Confection'
        btnTheme='#CC8E9C'
        theme='#CC8E9C'
        src={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/detail_dc_demo_new.png`}
      />
      <DetailDesign
        titleTheme='#282828'
        title='UI DESIGN'
        // overlap
        // TopImg={DC_Design1}
        // MidImg={DC_Design2}
        // BottomImg={DC_Design3}
        grids
        src1={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/dc_design2.png`}
        src2={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/dc_design1.png`}
        src3={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/dc_design2.png`}
        src4={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/dc_design3.png`}
        src5={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/dc_design1.png`}
        src6={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/dc_design2.png`}

        // overlap
      />

      <DetailTheme
        // desp
        // centerImage
        // src
        // Images
        double
        src1={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/dc_theme1.png`}
        src2={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/dc_theme2.png`}
        // src3
        // fullscreen
        titleTheme='#282828'
        // desp
        Theme1='#000000'
        Theme2='#CC8E9C'
        Theme3='#F7C9D0'
        Theme4='#FFFFFF'
        Theme5='#A0A0A0'
        Theme6='#DBDBDB'
        Theme7='linear-gradient(180deg, #E9A454 32.81%, rgba(38, 50, 56, 0) 100%), #A0A0A0'
        // Theme7={`${linear-gradient (180deg, #E9A454 39.58%, rgba(0, 0, 0, 0) 100%), #A0A0A0;}`}
        // src={KidCab_Theme}
      />
      <DetailLogo
        theme='#282828'
        src={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/dc_logo.png`}
      />
      <DetailAppDev
        website
        title='WEB DEVELOPMENT'
        // desp
        // halfImg (src Required)
        titleTheme='#282828'
        fullImg={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/detail_dc_webdesign.png`}
      />
      <DetailFeedback
        // titleTheme
        // despTheme
        desp='I contacted Falcon IT with a basic feel I wanted in a website. They developed the best of Design Confection, the overall website visual layout, and the content too. Falcon’s services are a bargain when you weigh the cost versus the product you received. I will be using them again in future endeavors. Thanks again!'
        // location
        ThemeBG='#CC8E9C'
        AvatarSrc={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/kidcabAvatar.png`}
        name='Designer JK'
      />
      <Footer />
    </div>
  );
}
