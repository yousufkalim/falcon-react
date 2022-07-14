// Init
import React from "react";

// Importing Components
import NavBar from "../../components/Common/NavBar";
import DetailHeader from "../../components/ProjectDetails/DetailHeader";
import Firemen_Header from "../../assets/images/firemen_header.png";
import DetailOverview from "../../components/ProjectDetails/DetailOverview";
import OV_Firemen from "../../assets/images/ov_firemen.png";
import DetailService from "../../components/ProjectDetails/DetailService";

import QB_Avatar from "../../assets/images/overview_quadraAvatar.png";
import DetailDemo from "../../components/ProjectDetails/DetailDemo";
import Firemen_Demo from "../../assets/images/firemen_demo.png";
import DetailDesign from "../../components/ProjectDetails/DetailDesign";
import Facility_Design1 from "../../assets/images/facility_design1.png";
import Facility_Design2 from "../../assets/images/facility_design2.png";
import Facility_Design3 from "../../assets/images/facility_design3.png";

import DetailTheme from "../../components/ProjectDetails/DetailTheme";
import Firemen_Theme from "../../assets/images/firemen_theme.png";
import DetailLogo from "../../components/ProjectDetails/DetailLogo";
import Yuwway_Logo from "../../assets/images/detail_yuwway_logo.png";
import DetailAppDev from "../../components/ProjectDetails/DetailAppDev";
import Yuwway_AppDesign from "../../assets/images/yuwway_appdesign.png";
import DetailFeedback from "../../components/ProjectDetails/DetailFeedback";
import Facility_Theme from "../../assets/images/facility_theme.png";

import Footer from "../../components/Common/Footer";

// Home Component
export default function Fireman() {
  return (
    <div className='Permispop_Container'>
      <NavBar ContactUs />
      <DetailHeader
        background='#3675B7'
        bottomBG='#3675B7'
        typoBG='#3675B7'
        HeaderImg={Firemen_Header}
        title='Firemen'
        subTitle='What is Fireman'
        // iconTheme="#9D3C64"
        description='Fireman is the management and report generating system for fire fighters. The safety committees visit establishments open to the public and advise the mayor for business continuity. Each visit or study gives rise to a report. Fire fighters create/modify file according to visit or study category. Group director/Service director validate that file. Fireman including following modules:'
      />
      <DetailOverview
        titleTheme='#282828'
        desp='Fireman is the management and report generating system for fire fighters. The safety committees visit establishments open to the public and advise the mayor for business continuity. Each visit or study gives rise to a report. Fire fighters create/modify file according to visit or study category. Group director/Service director validate that file. Fireman including following modules:'
        // desp=""
        AvatarSrc={QB_Avatar}
        nameColor='#3675B7'
        name='Ukhano'
        // location="France"
        src={OV_Firemen}
      />
      <DetailService
        // app
        web
        // both
        titleTheme='#282828'
        borderColor='#282828'
        circleTheme='#3675B7'
      />

      <DetailDemo
        // desp
        // btnText
        DetailDemo_SquareDiv
        // DetailDemo_RoundDiv
        titleColor='#282828'
        title='Fireman'
        btnTheme='#3675B7'
        theme='#3675B7'
        src={Firemen_Demo}
      />
      <DetailDesign
        titleTheme='#282828'
        title='UI DESIGN'
        // overlap
        // TopImg={Facility_Design1}
        // MidImg={Facility_Design2}
        // BottomImg={Facility_Design3}
        grids
        src1={Facility_Design2}
        src2={Facility_Design1}
        src3={Facility_Design2}
        src4={Facility_Design1}
        src5={Facility_Design3}
        src6={Facility_Design1}
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
        titleTheme='#282828'
        // desp
        Theme1='#3675B7'
        Theme2='#FAFAFA'
        Theme3='#191A1F'
        Theme4='#575961'
        // Theme5="#00000040"
        // Theme6=""
        // Theme7=""
        // Theme7={`${linear-gradient (180deg, #E9A454 39.58%, rgba(0, 0, 0, 0) 100%), #A0A0A0;}`}
        // src={Firemen_Theme}
      />
      {/* <DetailLogo theme="#0073BB" src={Yuwway_Logo} /> */}
      <DetailAppDev
        title='WEB DEVELOPMENT'
        // desp
        fullImg={Firemen_Theme}
        titleTheme='#282828'
        // halfImg={Yuwway_AppDesign}
      />
      <DetailFeedback
        titleTheme='#3675B7'
        despTheme='#282828'
        // desp
        // location
        ThemeBG='#ffffff'
        // AvatarSrc={Kidcab_Avatar}
        name='Ukhano'
      />
      <Footer />
    </div>
  );
}
