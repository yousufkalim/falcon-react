// Init
import React from "react";

// Importing Components
import NavBar from "../../components/Common/NavBar";
import DetailHeader from "../../components/ProjectDetails/DetailHeader";
import Facility_Header from "../../assets/images/facility_header.png";
import DetailOverview from "../../components/ProjectDetails/DetailOverview";
import OV_Facility from "../../assets/images/ov_facility.png";
import DetailService from "../../components/ProjectDetails/DetailService";

import QB_Avatar from "../../assets/images/overview_quadraAvatar.png";
import DetailDemo from "../../components/ProjectDetails/DetailDemo";
import Facility_Demo from "../../assets/images/facility_demo_new.png";
import DetailDesign from "../../components/ProjectDetails/DetailDesign";
import Facility_Design1 from "../../assets/images/facility_design1.png";
import Facility_Design2 from "../../assets/images/facility_design2.png";
import Facility_Design3 from "../../assets/images/facility_design3.png";

import DetailTheme from "../../components/ProjectDetails/DetailTheme";
import QB_Theme from "../../assets/images/detail_qb_theme.png";
import DetailLogo from "../../components/ProjectDetails/DetailLogo";
import Yuwway_Logo from "../../assets/images/detail_yuwway_logo.png";
import DetailAppDev from "../../components/ProjectDetails/DetailAppDev";
import Yuwway_AppDesign from "../../assets/images/yuwway_appdesign.png";
import DetailFeedback from "../../components/ProjectDetails/DetailFeedback";
import Facility_Theme from "../../assets/images/facility_theme.png";

import Footer from "../../components/Common/Footer";

// Home Component
export default function FacilityManagement() {
  return (
    <div className="Permispop_Container">
      <NavBar ContactUs />
      <DetailHeader
        background="#282828"
        bottomBG="#2F696D"
        typoBG="#2F696D"
        HeaderImg={Facility_Header}
        title="Facility Management"
        subTitle="What is Facility Management"
        // iconTheme="#9D3C64"
        desp="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
      />
      <DetailOverview
        titleTheme="#282828"
        // desp=""
        AvatarSrc={QB_Avatar}
        nameColor="#2F696D"
        name="Ukhano"
        // location="France"
        src={OV_Facility}
      />
      <DetailService
        // app
        web
        // both
        titleTheme="#282828"
        borderColor="#282828"
        circleTheme="#2F696D"
      />

      <DetailDemo
        // desp
        // btnText
        DetailDemo_SquareDiv
        // DetailDemo_RoundDiv
        titleColor="#282828"
        title="Facility Management"
        btnTheme="#2F696D"
        theme="#2F696D"
        src={Facility_Demo}
      />
      <DetailDesign
        titleTheme="#2F696D"
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
        title="COLOR THEME AND DESIGN"
        titleTheme="#282828"
        // desp
        Theme1="#2F696D"
        Theme2="#FAFAFA"
        Theme3="#191A1F"
        Theme4="#575961"
        // Theme5="#00000040"
        // Theme6=""
        // Theme7=""
        // Theme7={`${linear-gradient (180deg, #E9A454 39.58%, rgba(0, 0, 0, 0) 100%), #A0A0A0;}`}
        // src={Facility_Theme}
      />
      {/* <DetailLogo theme="#0073BB" src={Yuwway_Logo} /> */}
      <DetailAppDev
        title="WEB DEVELOPMENT"
        // desp
        fullImg={Facility_Theme}
        titleTheme="#282828"
        // halfImg={Yuwway_AppDesign}
      />
      <DetailFeedback
        titleTheme="#2F696D"
        despTheme="#282828"
        // desp
        // location
        ThemeBG="#ffffff"
        // AvatarSrc={Kidcab_Avatar}
        // name="Ukhano"
      />
      <Footer />
    </div>
  );
}
