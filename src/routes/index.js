// Init
import React from "react";
import { Route, Switch } from "react-router-dom";

// Routes
import Home from "../containers/Home.js";
import About from "../containers/About.js";
import ContactUs from "../containers/ContactUs.js";
import Blog from "../containers/Blog";
import LegalMentions from "../containers/LegalMentions";
import OurProjects from "../containers/OurProjects";
import WebDev from "../containers/Services/WebDev.js";
import AppDev from "../containers/Services/AppDev.js";
import SoftwareDev from "../containers/Services/SoftwareDev.js";
import OnDemandDev from "../containers/Services/OnDemandDev.js";
import UiDev from "../containers/Services/UiDev.js";
import Permispop from "../containers/Project/Permispop";
import Quadrabase from "../containers/Project/Quadrabase";
import Kidcab from "../containers/Project/Kidcab";
import DesignConfection from "../containers/Project/DesignConfection";
import EZbox from "../containers/Project/EZbox";
import Telehealth from "../containers/Project/Telehealth";
import RealEstate from "../containers/Project/RealEstate";
import Orgaplan from "../containers/Project/Orgaplan";
import Tilt from "../containers/Project/Tilt";
import Excellence from "../containers/Project/Excellence";
import Table from "../containers/Project/Table";
import Sindoor from "../containers/Project/Sindoor";
import Zypzap from "../containers/Project/Zypzap";

import Yuwway from "../containers/Project/Yuwway";
import FacilityManagement from "../containers/Project/FacilityManagement";
import Firemen from "../containers/Project/Firemen";
import Wina from "../containers/Project/Wina";
import Orientator from "../containers/Project/Orientator";
import RegisterRH from "../containers/Project/RegisterRH";

const index = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/services/web-development" component={WebDev} />
      <Route exact path="/services/app-development" component={AppDev} />
      <Route
        exact
        path="/services/software-development"
        component={SoftwareDev}
      />
      <Route
        exact
        path="/services/ondemand-developers"
        component={OnDemandDev}
      />
      <Route exact path="/services/ui-development" component={UiDev} />
      <Route exact path="/contactus" component={ContactUs} />
      <Route exact path="/blog" component={Blog} />
      <Route exact path="/legalmentions" component={LegalMentions} />

      <Route exact path="/ourprojects" component={OurProjects} />
      <Route exact path="/ourprojects/permispop" component={Permispop} />
      <Route exact path="/ourprojects/quadrabase" component={Quadrabase} />
      <Route exact path="/ourprojects/kidcab" component={Kidcab} />
      <Route
        exact
        path="/ourprojects/designconfection"
        component={DesignConfection}
      />
      <Route exact path="/ourprojects/ezbox" component={EZbox} />
      <Route
        exact
        path="/ourprojects/telehealthplatform"
        component={Telehealth}
      />
      <Route exact path="/ourprojects/realestate" component={RealEstate} />
      <Route exact path="/ourprojects/orgaplan" component={Orgaplan} />
      <Route exact path="/ourprojects/tilt" component={Tilt} />
      <Route exact path="/ourprojects/excellence" component={Excellence} />
      <Route exact path="/ourprojects/table" component={Table} />
      <Route exact path="/ourprojects/sindoor" component={Sindoor} />
      <Route exact path="/ourprojects/zypzap" component={Zypzap} />

      <Route exact path="/ourprojects/yuwway" component={Yuwway} />
      <Route
        exact
        path="/ourprojects/facilitymanagement"
        component={FacilityManagement}
      />
      <Route exact path="/ourprojects/firemen" component={Firemen} />
      <Route exact path="/ourprojects/wina" component={Wina} />
      <Route exact path="/ourprojects/orientator" component={Orientator} />
      <Route exact path="/ourprojects/registerrh" component={RegisterRH} />
    </Switch>
  );
};

export default index;