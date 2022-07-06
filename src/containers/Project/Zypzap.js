// Init
import React from "react";

// Importing Components
import NavBar from "../../components/Common/NavBar";
import DetailHeader from "../../components/ProjectDetails/DetailHeader";
import Zypzap_Header from "../../assets/images/zypzap_header.png";
import DetailOverview from "../../components/ProjectDetails/DetailOverview";
import OV_Zypzap from "../../assets/images/ov_zypzap.png";
import DetailService from "../../components/ProjectDetails/DetailService";

import QB_Avatar from "../../assets/images/overview_quadraAvatar.png";
import DetailDemo from "../../components/ProjectDetails/DetailDemo";
import Zypzap_Demo from "../../assets/images/zypzap_demo.png";
import DetailDesign from "../../components/ProjectDetails/DetailDesign";
import Facility_Design1 from "../../assets/images/facility_design1.png";
import Facility_Design2 from "../../assets/images/facility_design2.png";
import Facility_Design3 from "../../assets/images/facility_design3.png";

import DetailTheme from "../../components/ProjectDetails/DetailTheme";
import Firemen_Theme from "../../assets/images/firemen_theme.png";
import DetailLogo from "../../components/ProjectDetails/DetailLogo";
import Yuwway_Logo from "../../assets/images/detail_yuwway_logo.png";
import DetailAppDev from "../../components/ProjectDetails/DetailAppDev";
import Zypzap_WebDesign from "../../assets/images/zypzap_webdesign.png";
import DetailFeedback from "../../components/ProjectDetails/DetailFeedback";
import Facility_Theme from "../../assets/images/facility_theme.png";

import Footer from "../../components/Common/Footer";

// Home Component
export default function Zypzap() {
  return (
    <div className="Permispop_Container">
      <NavBar ContactUs />
      <DetailHeader
        background="#282828"
        bottomBG="linear-gradient(269.14deg, #20BF55 0%, #25B058 0.01%, #522F6D 82.32%)"
        typoBG="linear-gradient(269.14deg, #20BF55 0%, #25B058 0.01%, #522F6D 82.32%)"
        HeaderImg={Zypzap_Header}
        title="Zypzap"
        subTitle="What is Zypzap"
        // iconTheme="#9D3C64"
        desp="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
      />
      <DetailOverview
        titleTheme="#282828"
        // desp=""
        AvatarSrc={QB_Avatar}
        nameColor="linear-gradient(269.14deg, #20BF55 0%, #25B058 0.01%, #522F6D 82.32%)"
        name="Ukhano"
        // location="France"
        src={OV_Zypzap}
      />
      <DetailService
        // app
        web
        // both
        titleTheme="#282828"
        borderColor="#282828"
        circleTheme="linear-gradient(269.14deg, #20BF55 0%, #25B058 0.01%, #522F6D 82.32%)"
      />

      <DetailDemo
        // desp
        // btnText
        DetailDemo_SquareDiv
        // DetailDemo_RoundDiv
        titleColor="#16172D"
        title="Zypzap"
        btnTheme="#16172D"
        theme="linear-gradient(227.79deg, #20BF55 -1.61%, #522F6D 74.91%)"
        src={Zypzap_Demo}
      />
      <DetailDesign
        titleTheme="#282828"
        title="UI DESIGN"
        // overlap
        TopImg={Facility_Design1}
        MidImg={Facility_Design2}
        BottomImg={Facility_Design3}
        // grids
        // src1
        // src2
        // src3
        // src4
        // src5
        // src6
        overlap
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
        title="COLOR THEME"
        titleTheme="#000000"
        // desp
        Theme1="#522F6D"
        Theme2="#20BF55"
        Theme3="#F5F5F5"
        Theme4="#000000"
        Theme5="#575961"
        // Theme6=""
        // Theme7=""
        // Theme7={`${linear-gradient (180deg, #E9A454 39.58%, rgba(0, 0, 0, 0) 100%), #A0A0A0;}`}
        // src={Firemen_Theme}
      />
      {/* <DetailLogo theme="#0073BB" src={Yuwway_Logo} /> */}
      <DetailAppDev
        title="WEB DESIGN"
        // desp
        fullImg={Zypzap_WebDesign}
        titleTheme="#000000"
        // halfImg={Zypzap_WebDesign}
      />
      <DetailFeedback
        // titleTheme="#3675B7"
        // despTheme="#282828"
        // desp
        // location
        ThemeBG="linear-gradient(261.67deg, #20BF55 -0.52%, #522F6D 65.51%)"
        // AvatarSrc={Kidcab_Avatar}
        name="Ukhano"
      />
      <Footer />
    </div>
  );
}
