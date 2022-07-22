// Init
import React from 'react';

// Importing Components
import NavBar from '../../components/Common/NavBar';
import DetailHeader from '../../components/ProjectDetails/DetailHeader';
import Tilt_Header from '../../assets/images/tilt_header.png';
import DetailOverview from '../../components/ProjectDetails/DetailOverview';
import OV_Tilt from '../../assets/images/ov_tilt.png';
import DetailService from '../../components/ProjectDetails/DetailService';
import BG_Logo from '../../assets/images/tilt_lite_logo.png';

import QB_Avatar from '../../assets/images/overview_quadraAvatar.png';
import DetailDemo from '../../components/ProjectDetails/DetailDemo';
import Tilt_Demo from '../../assets/images/tilt_demo_new.png';
import DetailDesign from '../../components/ProjectDetails/DetailDesign';
import Tilt_Design1 from '../../assets/images/tilt_design1.png';
import Tilt_Design2 from '../../assets/images/tilt_design2.png';
import Tilt_Design3 from '../../assets/images/tilt_design3.png';

import DetailTheme from '../../components/ProjectDetails/DetailTheme';
import QB_Theme from '../../assets/images/detail_qb_theme.png';
import DetailLogo from '../../components/ProjectDetails/DetailLogo';
import Tilt_Logo from '../../assets/images/detail_tilt_logo.png';
import DetailAppDev from '../../components/ProjectDetails/DetailAppDev';
import Tilt_AppDesign from '../../assets/images/tilt_appdesign.png';
import Tilt_WebDesign from '../../assets/images/tilt_webdesign.png';
import DetailFeedback from '../../components/ProjectDetails/DetailFeedback';
import Footer from '../../components/Common/Footer';

// Home Component
export default function Tilt() {
  return (
    <div className='Permispop_Container'>
      <NavBar ContactUs />
      <DetailHeader
        background='#282828'
        bottomBG='#D3014A'
        typoBG='#D3014A'
        HeaderImg={Tilt_Header}
        title='Tilt'
        subTitle='Tilt'
        // iconTheme="#9D3C64"
        description='Web and mobile platform connecting restaurants, corporate customers and delivery drivers for bulked meal deliveries in Martinique. This smart concept allows each customer to save on the delivery fees, as they are shared among everyone passing an order.'
      />
      <DetailOverview
        titleTheme='#282828'
        desp='Tilt is a French-based platform connecting restaurants with corporate customers. Its front end is developed on React and its back end is on Node JS and the project was completed in 5 months.'
        AvatarSrc={QB_Avatar}
        nameColor='#D3014A'
        name='Laurent Louis-Henry'
        // location="France"
        src={OV_Tilt}
      />
      <DetailService
        // web
        both
        titleTheme='#282828'
        borderColor='#282828'
        circleTheme='#D3014A'
        fitLogo
        liteLogo={BG_Logo}
      />

      <DetailDemo
        to='https://tilt-entreprise.com/'
        desp='Web and mobile platform connecting restaurants, corporate customers, and delivery drivers for bulked meal deliveries in Martinique. This smart concept allows each customer to save on the delivery fees, as they are shared among everyone passing an order. The customers can order food with an ingenious system allowing mixed dishes among several restaurants in the same area. Then they get notified of the status of the order, and they can rate the overall experience.On the restaurant side, it is possible to create and manage a customized menu,see all the incoming orders, and change their status.On the delivery side, the application of the dishes to be picked and delivered, with all the location information. The delivery driver automatically informs the users of the progress of the order, with push notifications.'
        // btnText
        // DetailDemo_SquareDiv
        DetailDemo_RoundDiv
        titleColor='#282828'
        title='Tilt'
        btnTheme='#D3014A'
        theme='#D3014A'
        src={Tilt_Demo}
      />
      <DetailDesign
        titleTheme='#282828'
        title='APP UI DESIGN'
        // overlap
        // TopImg={Tilt_Design1}
        // MidImg={Tilt_Design2}
        // BottomImg={Tilt_Design3}
        grids
        // src1
        // src2
        // src3
        // src4
        // src5
        // src6
        // overlap
      />

      <DetailTheme
        // desp
        centerImage
        // src
        // Images
        // src1={OrgaPlan_Theme}
        // src2={OrgaPlan_Theme}
        // src3={EZbox_Theme3}
        // fullscreen
        title='COLOR THEME'
        titleTheme='#282828'
        // desp
        Theme1='#D3014A'
        Theme2='#ffffff'
        Theme3='#282828'
        Theme4='#575961'
        // Theme5="#00000040"
        // Theme6=""
        // Theme7=""
        // Theme7={`${linear-gradient (180deg, #E9A454 39.58%, rgba(0, 0, 0, 0) 100%), #A0A0A0;}`}
        // src={OrgaPlan_Theme}
      />
      <DetailLogo theme='#D3014A' src={Tilt_Logo} />
      <DetailAppDev
        application
        title='MOBILE APP DEVELOPMENT'
        // desp
        fullImg={Tilt_AppDesign}
        titleTheme='#282828'
        // halfImg=(src Required)
      />
      <DetailAppDev
        website
        title='WEB DEVELOPMENT'
        // desp
        fullImg={Tilt_WebDesign}
        titleTheme='#282828'
        // halfImg=(src Required)
      />
      <DetailFeedback
        // titleTheme="#9D936D"
        // despTheme="#282828"
        desp='Falcon IT excels at turning your website dreams into reality. We are so proud of the work they have done for us that we have already recommended them to many of Our partners and we are very thankful to them.'
        // location
        ThemeBG='#D3014A'
        // AvatarSrc={Kidcab_Avatar}
        name='Laurent Louis-Henry'
      />
      <Footer />
    </div>
  );
}
