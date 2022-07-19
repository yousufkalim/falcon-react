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

// Home Component
export default function Quadrabase() {
  const { i18n, t } = useTranslation();

  return (
    <div className='Permispop_Container'>
      <NavBar ContactUs />
      <DetailHeader
        background='#000000'
        bottomBG='#FFF0E2'
        typoBG='#9D3C64EB'
        HeaderImg={QuadraHeader}
        title='Quadrabase.'
        subTitle='Quadrabase'
        iconTheme='#9D3C64'
        description={t(
          'Quadrabase is a web platform allowing engineering offices to automatically generate tender documents in the construction industry: Project Specification, Project Cost Estimate, Project bidding template. The platform has a well structured and multi-level database, allowing to include the most pertinent data for each specific project, based on the project details.'
        )}
      />
      <DetailOverview
        titleTheme='#FF8616'
        desp='Project is ambitious and aims to revolutionize the approach to design in the field of construction in France. The project is developed on MERN and the timeline was November 2021 to July 2022'
        // desp=""
        AvatarSrc={QB_Avatar}
        nameColor='#9D3C64'
        name='Dylan Field'
        // location="France"
        src={OV_Quadra}
      />
      <DetailService web titleTheme='#FF8616' borderColor='#FF8616' circleTheme='#9D3C64' />

      <DetailDemo
        titleColor='#FF8616'
        title='Quadrabase'
        // desp=""
        btnTheme='#9D3C64'
        theme='#9D3C64'
        DetailDemo_SquareDiv
        src={QB_Demo}
      />
      <DetailDesign
        title='UI DESIGN'
        titleTheme='#FFA450'
        grids
        src1={QB_Design1}
        src2={QB_Design2}
        src3={QB_Design1}
        src4={QB_Design1}
        src5={QB_Design2}
        src6={QB_Design3}
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
        src={QB_Theme}
      />
      <DetailLogo theme='#9D3C64' src={QB_Logo} />
      <DetailAppDev title='WEB DESIGN' titleTheme='#FF8616' fullImg={QB_Design} />
      <DetailFeedback
        ThemeBG='#9D3C64'
        // titleTheme=""
        // despTheme=""
        desp='There is no comparison between the first developers and Falcon IT. Professional, Creative, Attentive to detail, and excellent communication with the team. If I had contracted with Falcon IT for the first time I would not have had to do it twice.'
        AvatarSrc={QB_Avatar}
        name='Dylan Field'
        // location=""
      />
      <Footer />
    </div>
  );
}
