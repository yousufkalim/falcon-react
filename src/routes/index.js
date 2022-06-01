// Init
import React from "react";
import { Route, Switch } from "react-router-dom";

// Routes
import Home from "../containers/Home.js";
import About from "../containers/About.js";
import ContactUs from "../containers/ContactUs.js";
import Blog from "../containers/Blog";
import OurProjects from "../containers/OurProjects";
import WebDev from "../containers/Services/WebDev.js";
import AppDev from "../containers/Services/AppDev.js";
import SoftwareDev from "../containers/Services/SoftwareDev.js";
import OnDemandDev from "../containers/Services/OnDemandDev.js";
import UiDev from "../containers/Services/UiDev.js";

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
      <Route exact path="/ourprojects" component={OurProjects} />
    </Switch>
  );
};

export default index;
