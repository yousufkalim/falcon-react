// Init
import React from "react";

// Importing Components
import NavBar from "../../components/Common/NavBar";
import DetailHeader from "../../components/ProjectDetails/DetailHeader";
import PermispopHeader from "../../assets/images/pp_header.png";
import DetailOverview from "../../components/ProjectDetails/DetailOverview";
import BG_Logo from "../../assets/images/pp_lite_logo.png";
import DetailDemo from "../../components/ProjectDetails/DetailDemo";
import PP_Demo from "../../assets/images/pp_demo_new.png";
import DetailService from "../../components/ProjectDetails/DetailService";
import DetailDesign from "../../components/ProjectDetails/DetailDesign";
import DetailTheme from "../../components/ProjectDetails/DetailTheme";
import DetailLogo from "../../components/ProjectDetails/DetailLogo";
import DetailAppDev from "../../components/ProjectDetails/DetailAppDev";
import AppDev from "../../assets/images/detail_appdev_new.png";
import ThemeImage from "../../assets/images/theme_image.png";

import DetailWebDev from "../../components/ProjectDetails/DetailWebDev";
import DetailFeedback from "../../components/ProjectDetails/DetailFeedback";

import Footer from "../../components/Common/Footer";

// Home Component
export default function Permispop() {
  return (
    <div className="Permispop_Container">
      <NavBar ContactUs />
      <DetailHeader
        background="#2FAD93"
        bottomBG="#2FAD93"
        typoBG="#FF9A20EB"
        HeaderImg={PermispopHeader}
        title="Permispop."
        subTitle="What is Permispop"
        desp="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
      />
      <DetailOverview />
      <DetailService both BGLogo liteLogo={BG_Logo} />
      <DetailDemo src={PP_Demo} />
      <DetailDesign
        grids
        // overlap
      />
      <DetailTheme
        centerImage
        // fullscreen
        Theme1="#FFA333"
        Theme2="#11A283"
        Theme3="#00654F"
        Theme4="#454238"
        Theme5="#F6FAFB"
        Theme6="#C8CFD0"
        src={ThemeImage}
      />
      <DetailLogo />
      <DetailAppDev halfImg={AppDev} />
      <DetailWebDev
      // titleTheme
      // desp
      // AvatarSrc
      // nameColor
      // name
      // location
      />
      {/* <DetailFeedback /> */}
      <Footer />
    </div>
  );
}
