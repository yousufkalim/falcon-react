// Init
import React from 'react';

// Importing Components
import NavBar from '../../components/Common/NavBar';
import DetailHeader from '../../components/ProjectDetails/DetailHeader';
import Register_Header from '../../assets/images/register_header.png';
import DetailOverview from '../../components/ProjectDetails/DetailOverview';
import OV_Register from '../../assets/images/ov_register.png';
import DetailService from '../../components/ProjectDetails/DetailService';

import QB_Avatar from '../../assets/images/overview_quadraAvatar.png';
import DetailDemo from '../../components/ProjectDetails/DetailDemo';
import Register_Demo from '../../assets/images/register_demo.png';
import DetailDesign from '../../components/ProjectDetails/DetailDesign';
import Register_Design1 from '../../assets/images/register_design1.png';
import Register_Design2 from '../../assets/images/register_design2.png';
import Register_Design3 from '../../assets/images/register_design3.png';

import DetailTheme from '../../components/ProjectDetails/DetailTheme';
import Register_WebDev from '../../assets/images/register_webdev.png';
import DetailLogo from '../../components/ProjectDetails/DetailLogo';
import Yuwway_Logo from '../../assets/images/detail_yuwway_logo.png';
import DetailAppDev from '../../components/ProjectDetails/DetailAppDev';
import Yuwway_AppDesign from '../../assets/images/yuwway_appdesign.png';
import DetailFeedback from '../../components/ProjectDetails/DetailFeedback';
import Facility_Theme from '../../assets/images/facility_theme.png';

import Footer from '../../components/Common/Footer';

// Home Component
export default function RegisterRH() {
  return (
    <div className='Permispop_Container'>
      <NavBar ContactUs />
      <DetailHeader
        background='#000000B8'
        bottomBG='#142E68'
        typoBG='#142E68'
        HeaderImg={Register_Header}
        title='Register-RH'
        subTitle='Register-RH'
        // iconTheme="#9D3C64"
        description='This system offers complete functionality to manage staff, documents related to them and their status. One can also manage the Risk assessment documents of the Company. This application is capable of managing multiple Companies, their branches and Employee along with the transfer of employee from one branch to another.'
      />
      <DetailOverview
        desp='A complete HR Register application offering 3 mandatory social registers for companies:
        Staff Register
        Risk Assessment Documents
        Security check logs
        This system offers complete functionality to manage staff, documents related to them and their status. One can also manage the Risk assessment documents of the Company. This application is capable of managing multiple Companies, their branches and Employee along with the transfer of employee from one branch to another.
        Risk Management records all the documents related to the risks that a company faces. Making it easier to manage. It helps keep check and balance over all the risks and provides information about the person in charge and who to talk with regarding that risk'
        titleTheme='#142E68'
        // desp=""
        AvatarSrc={QB_Avatar}
        nameColor='#142E68'
        name='Ukhano'
        // location="France"
        src={OV_Register}
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
        // desp
        // btnText
        DetailDemo_SquareDiv
        // DetailDemo_RoundDiv
        titleColor='#142E68'
        title='Register-RH'
        btnTheme='#142E68'
        theme='#142E68'
        src={Register_Demo}
      />
      <DetailDesign
        titleTheme='#142E68'
        title='UI DESIGN'
        // overlap
        // TopImg={Register_Design1}
        // MidImg={Register_Design2}
        // BottomImg={Register_Design3}
        grids
        src1={Register_Design2}
        src2={Register_Design1}
        // src3
        // src4
        src5={Register_Design3}
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
        fullscreen
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
        title='WEB DEVELOPMENT'
        // desp
        fullImg={Register_WebDev}
        titleTheme='#142E68'
        // halfImg={Yuwway_AppDesign}
      />
      <DetailFeedback
        titleTheme='#0086EF'
        despTheme='#282828'
        // desp
        // location
        ThemeBG='#fffff'
        // AvatarSrc={Kidcab_Avatar}
        name='Ukhano'
      />
      <Footer />
    </div>
  );
}
