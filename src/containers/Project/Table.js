// Init
import React from "react";

// Importing Components
import NavBar from "../../components/Common/NavBar";
import DetailHeader from "../../components/ProjectDetails/DetailHeader";
import Table_Header from "../../assets/images/table_header.png";
import DetailOverview from "../../components/ProjectDetails/DetailOverview";
import OV_Table from "../../assets/images/ov_table.png";
import DetailService from "../../components/ProjectDetails/DetailService";

import Kidcab_Avatar from "../../assets/images/kidcabAvatar.png";
import DetailDemo from "../../components/ProjectDetails/DetailDemo";
import Table_Demo from "../../assets/images/table_demo.png";
import DetailDesign from "../../components/ProjectDetails/DetailDesign";
import RealEstate_Design1 from "../../assets/images/realestate_design1.png";
import RealEstate_Design2 from "../../assets/images/realestate_design2.png";
import RealEstate_Design3 from "../../assets/images/realestate_design3.png";

import DetailTheme from "../../components/ProjectDetails/DetailTheme";
import RealEstate_Theme1 from "../../assets/images/realestate_theme1.png";
import DetailLogo from "../../components/ProjectDetails/DetailLogo";
import Table_Logo from "../../assets/images/detail_table_logo.png";
import DetailAppDev from "../../components/ProjectDetails/DetailAppDev";
import Table_AppDesign from "../../assets/images/table_appdesign.png";
import DetailFeedback from "../../components/ProjectDetails/DetailFeedback";
import Footer from "../../components/Common/Footer";

// Home Component
export default function Table() {
  return (
    <div className="Permispop_Container">
      <NavBar ContactUs />
      <DetailHeader
        // DividerBG
        background="#000000"
        bottomBG="#D60000"
        typoBG="#D60000"
        HeaderImg={Table_Header}
        title="@Table"
        subTitle="What is @Table"
        desp="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
      />
      <DetailOverview
        // desp
        // location
        titleTheme="#D60000"
        AvatarSrc={Kidcab_Avatar}
        nameColor="#D60000"
        name="Shane Jhon"
        src={OV_Table}
      />
      <DetailService
        // both
        // web
        app
        titleTheme="#D60000"
        borderColor="#18374E"
        circleTheme="#D60000"
      />

      <DetailDemo
        // desp
        // btnText
        // DetailDemo_SquareDiv
        DetailDemo_RoundDiv
        titleColor="#D60000"
        title="@Table"
        btnTheme="#D60000"
        theme="#D60000"
        src={Table_Demo}
      />
      <DetailDesign
        titleTheme="#D60000"
        title="APP UI DESIGN"
        // overlap
        TopImg={RealEstate_Design1}
        MidImg={RealEstate_Design2}
        BottomImg={RealEstate_Design3}
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
        // src1={RealEstate_Theme1}
        // src2={EZbox_Theme2}
        // src3={EZbox_Theme3}
        // fullscreen
        title="COLOR THEME"
        titleTheme="#D60000"
        // desp
        Theme1="#D60000"
        Theme2="#FFD54D"
        Theme3="#FAFAFA"
        Theme4="#191A1F"
        // Theme5=""
        // Theme6=""
        // Theme7=""
        // Theme7={`${linear-gradient (180deg, #E9A454 39.58%, rgba(0, 0, 0, 0) 100%), #A0A0A0;}`}
        // src={KidCab_Theme}
      />
      <DetailLogo theme="rgba(255, 213, 77, 0.25)" src={Table_Logo} />
      <DetailAppDev
        title="MOBILE APP DEVELOPMENT"
        // desp
        // fullImg={Table_AppDesign}
        titleTheme="#D60000"
        halfImg={Table_AppDesign}
      />
      <DetailFeedback
        // titleTheme
        // despTheme
        // desp
        // location
        ThemeBG="#D60000"
        AvatarSrc={Kidcab_Avatar}
        name="Shane Jhon"
      />
      <Footer />
    </div>
  );
}
