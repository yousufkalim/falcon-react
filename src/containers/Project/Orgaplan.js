// Init
import React from 'react';

// Importing Components
import NavBar from '../../components/Common/NavBar';
import DetailHeader from '../../components/ProjectDetails/DetailHeader';
import OrgaPlan_Header from '../../assets/images/orgaplan_header.png';
import DetailOverview from '../../components/ProjectDetails/DetailOverview';
import OV_OrgaPlan from '../../assets/images/ov_orgaplan.png';
import DetailService from '../../components/ProjectDetails/DetailService';
import BG_Logo from '../../assets/images/orgaplan_lite_logo.png';

import Kidcab_Avatar from '../../assets/images/kidcabAvatar.png';
import DetailDemo from '../../components/ProjectDetails/DetailDemo';
import OrgaPlan_Demo from '../../assets/images/orgaplan_demo_new.png';
import DetailDesign from '../../components/ProjectDetails/DetailDesign';
import OrgaPlan_Design1 from '../../assets/images/orgaplan_design1.png';
import OrgaPlan_Design2 from '../../assets/images/orgaplan_design2.png';
import OrgaPlan_Design3 from '../../assets/images/orgaplan_design3.png';

import DetailTheme from '../../components/ProjectDetails/DetailTheme';
import OrgaPlan_Theme from '../../assets/images/orgaplan_theme.png';
import DetailLogo from '../../components/ProjectDetails/DetailLogo';
import OrgaPlan_Logo from '../../assets/images/detail_orgaplan_logo.png';
import DetailAppDev from '../../components/ProjectDetails/DetailAppDev';
import OrgaPlan_WebDesign from '../../assets/images/orgaplan_webdesign.png';
import DetailFeedback from '../../components/ProjectDetails/DetailFeedback';
import Footer from '../../components/Common/Footer';

// Home Component
export default function Orgaplan() {
  return (
    <div className='Permispop_Container'>
      <NavBar ContactUs />
      <DetailHeader
        // DividerBG
        background='#282828'
        bottomBG='#9D936D'
        typoBG='#9D936D'
        HeaderImg={OrgaPlan_Header}
        title='OrgaPlan'
        subTitle='What is OrgaPlan'
        description='Orgaplan is a complex and full platform allowing the logistic management of large construction sites, in very dense areas (such as Paris - La Défense, etc...). The platform is currently used in Vinci’s construction sites, in order to facilitate very challenging logistic activities.'
      />
      <DetailOverview
        desp='Orgaplan is a complex and full platform allowing the logistic management of large construction sites, in very dense areas (such as Paris - La Défense, etc...). The platform is currently used in Vinci’s construction sites, in order to facilitate very challenging logistic activities. Available in web and mobile version, with 5 types of users: Super admin / Admin / Company / Traffic agent / Buffer traffic agent. Each user has his own rights and functionalities, allowing an infinity of scenarios, as per the real situations on site. Possibility to create and draw the Site Installation Plan, as well as the buildings and storage areas. Possibility to create deliveries and monitor the general state of the site. Falcon Consulting is specialized in digital construction projects, and we helped our partner to finalize its specification in order to get the best User experience.'
        // desp
        // location
        titleTheme='#282828'
        AvatarSrc={Kidcab_Avatar}
        nameColor='#9D936D'
        name='Zaara Aziz'
        src={OV_OrgaPlan}
      />
      <DetailService
        // both
        web
        // app
        titleTheme='#282828'
        borderColor='#282828'
        circleTheme='#9D936D'
        fitLogo
        liteLogo={BG_Logo}
      />

      <DetailDemo
        to='http://orgaplansa.com'
        // desp
        // btnText
        DetailDemo_SquareDiv
        // DetailDemo_RoundDiv
        titleColor='#282828'
        title='OrgaPlan'
        btnTheme='#9D936D'
        theme='#9D936D'
        src={OrgaPlan_Demo}
      />
      <DetailDesign
        titleTheme='#282828'
        title='UI DESIGN'
        // overlap
        TopImg={OrgaPlan_Design1}
        MidImg={OrgaPlan_Design2}
        BottomImg={OrgaPlan_Design3}
        grids
        src1={OrgaPlan_Design2}
        src2={OrgaPlan_Design3}
        src3={OrgaPlan_Design1}
        src4={OrgaPlan_Design2}
        src5={OrgaPlan_Design1}
        src6={OrgaPlan_Design2}
        // overlap
      />

      <DetailTheme
        // desp
        // centerImage
        overlap
        // src
        // Images
        // src1={OrgaPlan_Theme}
        // src2={OrgaPlan_Theme}
        // src3={EZbox_Theme3}
        // fullscreen
        titleTheme='#282828'
        // desp
        Theme1='#9D936D'
        Theme2='#EDCF99'
        Theme3='#AA912B'
        Theme4='#FFFFFF'
        Theme5='#282828'
        // Theme6=""
        // Theme7=""
        // Theme7={`${linear-gradient (180deg, #E9A454 39.58%, rgba(0, 0, 0, 0) 100%), #A0A0A0;}`}
        src={OrgaPlan_Theme}
      />
      <DetailLogo theme='#EDCF99' src={OrgaPlan_Logo} />
      <DetailAppDev
        title='WEB DEVELOPMENT'
        // desp
        fullImg={OrgaPlan_WebDesign}
        titleTheme='#282828'
        // halfImg=(src Required)
      />
      <DetailFeedback
        titleTheme='#9D936D'
        despTheme='#282828'
        // desp
        // location
        ThemeBG='#ffffff'
        AvatarSrc={Kidcab_Avatar}
        name='Zaara Aziz'
      />
      <Footer />
    </div>
  );
}
