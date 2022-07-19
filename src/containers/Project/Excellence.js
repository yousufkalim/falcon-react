// Init
import React from "react";

// Importing Components
import NavBar from "../../components/Common/NavBar";
import DetailHeader from "../../components/ProjectDetails/DetailHeader";
import Excellence_Header from "../../assets/images/excellence_header.png";
import DetailOverview from "../../components/ProjectDetails/DetailOverview";
import OV_Excellence from "../../assets/images/ov_excellence.png";
import DetailService from "../../components/ProjectDetails/DetailService";

import Kidcab_Avatar from "../../assets/images/kidcabAvatar.png";
import DetailDemo from "../../components/ProjectDetails/DetailDemo";
import Excellence_Demo from "../../assets/images/excellence_demo.png";
import DetailDesign from "../../components/ProjectDetails/DetailDesign";
import OrgaPlan_Design1 from "../../assets/images/orgaplan_design1.png";
import OrgaPlan_Design2 from "../../assets/images/orgaplan_design2.png";
import OrgaPlan_Design3 from "../../assets/images/orgaplan_design3.png";

import DetailTheme from "../../components/ProjectDetails/DetailTheme";
import Excellence_Theme from "../../assets/images/excellence_theme.png";
import DetailLogo from "../../components/ProjectDetails/DetailLogo";
import RealEstate_Logo from "../../assets/images/detail_realestate_logo.png";
import DetailAppDev from "../../components/ProjectDetails/DetailAppDev";
import OrgaPlan_WebDesign from "../../assets/images/orgaplan_webdesign.png";
import DetailFeedback from "../../components/ProjectDetails/DetailFeedback";
import Footer from "../../components/Common/Footer";

// Home Component
export default function Excellence() {
  return (
    <div className="Permispop_Container">
      <NavBar ContactUs />
      <DetailHeader
        // DividerBG
        background="#282828"
        bottomBG="#0086EF"
        typoBG="#0086EF"
        HeaderImg={Excellence_Header}
        title="Excellence ERP"
        subTitle="Excellence ERP"
        description="Excellence Mode is a chain of ready-to-wear stores in France, with several dozen locations throughout France. In order to develop its brand image and develop its online activity, the company wanted to have an e-commerce site."
      />
      <DetailOverview
        // desp
        // location
        desp="Excellence Mode is a chain of ready-to-wear stores in France, with several dozen locations throughout France. In order to develop its brand image and develop its online activity, the company wanted to have an e-commerce site."
        titleTheme="#282828"
        AvatarSrc={Kidcab_Avatar}
        nameColor="#0086EF"
        name="Ukhano"
        src={OV_Excellence}
      />
      <DetailService
        // both
        web
        // app
        titleTheme="#282828"
        borderColor="#282828"
        circleTheme="#0086EF"
      />

      <DetailDemo
        // desp
        // btnText
        DetailDemo_SquareDiv
        // DetailDemo_RoundDiv
        titleColor="#282828"
        title="Excellence ERP"
        btnTheme="#0086EF"
        theme="#0086EF"
        src={Excellence_Demo}
      />
      <DetailDesign
        titleTheme="#282828"
        title="UI DESIGN"
        // overlap
        // TopImg={OrgaPlan_Design1}
        // MidImg={OrgaPlan_Design2}
        // BottomImg={OrgaPlan_Design3}
        grids
        src1={OrgaPlan_Design2}
        src2={OrgaPlan_Design1}
        src3={OrgaPlan_Design1}
        src4={OrgaPlan_Design2}
        src5={OrgaPlan_Design3}
        src6={OrgaPlan_Design1}
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
        title="COLOR THEME AND DESIGN"
        titleTheme="#282828"
        // desp
        Theme1="#0086EF"
        Theme2="#FAFAFA"
        Theme3="#191A1F"
        Theme4="#575961"
        // Theme5="#00000040"
        // Theme6=""
        // Theme7=""
        // Theme7={`${linear-gradient (180deg, #E9A454 39.58%, rgba(0, 0, 0, 0) 100%), #A0A0A0;}`}
        src={Excellence_Theme}
      />
      {/* <DetailLogo theme="#EDCF99" src={RealEstate_Logo} /> */}
      {/* <DetailAppDev
        title="Web Design"
        // desp
        fullImg={OrgaPlan_WebDesign}
        titleTheme="#282828"
        // halfImg=(src Required)
      /> */}
      <DetailFeedback
        titleTheme="#0086EF"
        despTheme="#282828"
        // desp
        // location
        ThemeBG="#ffffff"
        AvatarSrc={Kidcab_Avatar}
        name="Ukhano"
      />
      <Footer />
    </div>
  );
}
