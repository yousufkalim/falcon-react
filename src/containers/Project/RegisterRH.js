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

// Home Component
export default function RegisterRH() {
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
        background='#000000B8'
        bottomBG='#142E68'
        typoBG='#142E68'
        HeaderImg={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/register_header.png`}
        title='Registre-RH'
        subTitle='Registre-RH'
        // iconTheme="#9D3C64"
        description='This system offers complete functionality to manage staff, documents related to them and their status. One can also manage the Risk assessment documents of the Company. This application is capable of managing multiple Companies, their branches and Employee along with the transfer of employee from one branch to another.'
      />
      <DetailOverview
        desp='This system offers complete functionality to manage staff, documents related to them and their status. One can also manage the Risk assessment documents of the Company. This application is capable of managing multiple Companies, their branches and Employee along with the transfer of employee from one branch to another.'
        titleTheme='#142E68'
        // desp=""
        AvatarSrc={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/overview_quadraAvatar.png`}
        nameColor='#142E68'
        name='Romain S.'
        // location="France"
        src={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/ov_register.png`}
      />
      <DetailService
        // app
        web
        // both
        titleTheme='#142E68'
        borderColor='#42C2FF'
        circleTheme='#142E68'
      />

      <DetailDemo
        to='https://registre-rh.fr/'
        // desp
        // btnText
        DetailDemo_SquareDiv
        // DetailDemo_RoundDiv
        titleColor='#142E68'
        title='Registre-RH'
        btnTheme='#142E68'
        theme='#142E68'
        src={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/register_demo.png`}
      />
      <DetailDesign
        titleTheme='#142E68'
        title='UI DESIGN'
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
        title='COLOR THEME AND DESIGN'
        titleTheme='#142E68'
        // desp
        Theme1='#142E68'
        Theme2='#42C2FF'
        Theme3='#FFFFFF'
        Theme4='#191A1F'
        Theme5='linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), #7A7A7A'
        // Theme6=""
        // Theme7=""
        // Theme7={`${linear-gradient (180deg, #E9A454 39.58%, rgba(0, 0, 0, 0) 100%), #A0A0A0;}`}
        // src={Register_Theme}
      />
      {/* <DetailLogo theme="#0073BB" src={Yuwway_Logo} /> */}
      <DetailAppDev
        website
        title='WEB DEVELOPMENT'
        // desp
        fullImg={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/register_webdev.png`}
        titleTheme='#142E68'
        // halfImg={Yuwway_AppDesign}
      />
      <DetailFeedback
        titleTheme='#0086EF'
        despTheme='#282828'
        // desp
        // location
        ThemeBG='#fffff'
        AvatarSrc={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/detail_overviewAvatar.png`}
        // AvatarSrc={Kidcab_Avatar}
        name='Romain S.'
      />
      <Footer />
    </div>
  );
}
