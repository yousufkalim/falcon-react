// Init
import React from "react";

// Importing Components
import NavBar from "../../components/Common/NavBar";
import DetailHeader from "../../components/ProjectDetails/DetailHeader";
import RealEstate_Header from "../../assets/images/realestate_header.png";
import DetailOverview from "../../components/ProjectDetails/DetailOverview";
import OV_RealEstate from "../../assets/images/ov_realestate.png";
import DetailService from "../../components/ProjectDetails/DetailService";

import Kidcab_Avatar from "../../assets/images/kidcabAvatar.png";
import DetailDemo from "../../components/ProjectDetails/DetailDemo";
import RealEstate_Demo from "../../assets/images/realestate_demo_new.png";
import DetailDesign from "../../components/ProjectDetails/DetailDesign";
import RealEstate_Design1 from "../../assets/images/realestate_design1.png";
import RealEstate_Design2 from "../../assets/images/realestate_design2.png";
import RealEstate_Design3 from "../../assets/images/realestate_design3.png";

import DetailTheme from "../../components/ProjectDetails/DetailTheme";
import RealEstate_Theme1 from "../../assets/images/realestate_theme1.png";
import DetailLogo from "../../components/ProjectDetails/DetailLogo";
import RealEstate_Logo from "../../assets/images/detail_realestate_logo.png";
import DetailAppDev from "../../components/ProjectDetails/DetailAppDev";
import RealEstate_AppDesign from "../../assets/images/realestate_appdesign_new.png";
import DetailFeedback from "../../components/ProjectDetails/DetailFeedback";
import Footer from "../../components/Common/Footer";

// Home Component
export default function RealEstate() {
  return (
    <div className="Permispop_Container">
      <NavBar ContactUs />
      <DetailHeader
        // DividerBG
        background="#000000"
        bottomBG="#837C6B"
        typoBG="#837C6B"
        HeaderImg={RealEstate_Header}
        title="Real Estate"
        subTitle="What is Real Estate"
        desp="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
      />
      <DetailOverview
        // desp
        // location
        titleTheme="#837C6B"
        AvatarSrc={Kidcab_Avatar}
        nameColor="#837C6B"
        name="Steve jobs"
        src={OV_RealEstate}
      />
      <DetailService
        // both
        // web
        app
        titleTheme="#837C6B"
        borderColor="#18374E"
        circleTheme="#837C6B"
      />

      <DetailDemo
        // desp
        // btnText
        // DetailDemo_SquareDiv
        DetailDemo_RoundDiv
        titleColor="#837C6B"
        title="Real Estate"
        btnTheme="#837C6B"
        theme="#837C6B"
        src={RealEstate_Demo}
      />
      <DetailDesign
        titleTheme="#837C6B"
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
        inline
        // Images
        src={RealEstate_Theme1}
        // src2={EZbox_Theme2}
        // src3={EZbox_Theme3}
        // fullscreen
        titleTheme="#837C6B"
        // desp
        Theme1="#837C6B"
        Theme2="rgba(131, 124, 107, 0.5)"
        Theme3="#FAFAFA"
        Theme4="#191A1F"
        Theme5="#575961"
        // Theme6=""
        // Theme7=""
        // Theme7={`${linear-gradient (180deg, #E9A454 39.58%, rgba(0, 0, 0, 0) 100%), #A0A0A0;}`}
        // src={KidCab_Theme}
      />
      <DetailLogo theme="#191A1F" src={RealEstate_Logo} />
      <DetailAppDev
        title="MOBILE APP DEVELOPMENT"
        // desp
        // fullImg={RealEstate_AppDesign}
        titleTheme="#837C6B"
        halfImg={RealEstate_AppDesign}
      />
      <DetailFeedback
        // titleTheme
        // despTheme
        // desp
        // location
        ThemeBG="#837C6B"
        AvatarSrc={Kidcab_Avatar}
        name="Steve Jobs"
      />
      <Footer />
    </div>
  );
}
