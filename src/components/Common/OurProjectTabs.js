import React, { useState, useEffect } from "react";
import api from "../../api/index";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import OurProjectCard from "../Common/OurProjectCard";
import PermispopImg from "../../assets/images/PermispopImg.svg";
import PP_logo from "../../assets/images/permisLogo.png";
import DesignConf from "../../assets/images/DesignImg.svg";
import Desine_Logo from "../../assets/images/desineLogo.png";
import RealEstate_Logo from "../../assets/images/realestateLogo.png";
import Movement from "../../assets/images/movement.svg";
import Tele_logo from "../../assets/images/tele_logo.svg";
import Quadra from "../../assets/images/QuadraImg.svg";
import Quadra_Logo from "../../assets/images/qudra_logo.svg";
import BarberShop from "../../assets/images/BarberShopImg.svg";
import Blsh from "../../assets/images/BlshImg.svg";
import Kidcap from "../../assets/images/KidcapImg.svg";
import Kidcab_Logo from "../../assets/images/kidcabLogo.png";
import Tajweed from "../../assets/images/TajweedImg.svg";
import Tajweed_logo from "../../assets/images/tajweed_logo.svg";
import EZbox from "../../assets/images/EZboxImg.svg";
import EZBox_Logo from "../../assets/images/ezbox_logo.svg";
import BeautySalon from "../../assets/images/BeautySalonImg.svg";
import RealEstate from "../../assets/images/RealEstate.svg";
import Orgaplan from "../../assets/images/Orgaplan.svg";
import Orgaplan_Logo from "../../assets/images/orgaplan_logo.svg";
import Tilt from "../../assets/images/Tilt.svg";
import Tilt_Logo from "../../assets/images/tilt_logo.svg";
import Microsoft from "../../assets/images/Microsoft.svg";
import Fnac from "../../assets/images/Fnac.svg";
import Canon from "../../assets/images/Canon.svg";
import AccorHotel from "../../assets/images/AccorHotels.svg";
import Toyota from "../../assets/images/Toyota.svg";
import ERP from "../../assets/images/ERP_Excellence.svg";
import PizzaBoli from "../../assets/images/Pizza_Boli.svg";
import Sindoor from "../../assets/images/Sindoor.svg";
import Yuwway from "../../assets/images/Yuwway.svg";
import Zypzap from "../../assets/images/Zypzap.svg";
import Zypzap_Logo from "../../assets/images/zypzap_Logo.svg";
import Wina from "../../assets/images/wina.svg";
import Wina_Logo from "../../assets/images/wina_logo.svg";
import Ficility from "../../assets/images/facility.svg";
import Fireman from "../../assets/images/Fireman.svg";
import { Grid } from "@mui/material";
import { Button } from "@mui/material";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
// import Website from "./WebsiteList";

const items = [
  {
    text: "SOFTWARE",
    id: "0",
  },
  {
    text: "WEBSITE",
    id: "1",
  },
  {
    text: "ALL",
    id: "2",
  },
  {
    text: "MOBILE APPLICATION",
    id: "3",
  },
  {
    text: "UI/UX",
    id: "4",
  },
  {
    text: "DATA & CLOUD",
    id: "5",
  },
];
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [MoreProjects, SetMoreProjects] = React.useState(false);
  const [activeId, setactiveId] = useState("");
  const [value, setValue] = React.useState(0);
  const [partners, setPartners] = useState([]);
  const [projects, setProjects] = useState([]);
  const [softwares, setSoftwares] = useState([]);
  const [websites, setWebsites] = useState([]);
  const [ui, setUI] = useState([]);
  const [cloud, setCloud] = useState([]);
  const [apps, setApps] = useState([]);
  useEffect(() => {
    getSoftware();
    getPartners();
    getProjects();
    getUI();
    getApp();
    getWebsites();
    getCloud();
  }, []);

  const getSoftware = async () => {
    await api("post", "/projects/getSoftware").then((res) => {
      console.log(res, "res");
      setSoftwares(res?.data?.project);
    });
  };
  const getProjects = async () => {
    await api("get", "/projects").then((res) => {
      setProjects(res?.data?.projects);
    });
  };
  const getUI = async () => {
    await api("post", "/projects/getUI").then((res) => {
      setUI(res?.data?.project);
    });
  };
  const getWebsites = async () => {
    await api("post", "/projects/getWebsite").then((res) => {
      setWebsites(res?.data?.project);
    });
  };
  const getApp = async () => {
    await api("post", "/projects/getApp").then((res) => {
      setApps(res?.data?.project);
    });
  };
  const getCloud = async () => {
    await api("post", "/projects/getCloud").then((res) => {
      setCloud(res?.data?.project);
    });
  };
  const getPartners = async () => {
    await api("post", "/partners/getActive").then((res) => {
      setPartners(res?.data?.partners);
    });
  };
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box className="ProjectListMain" sx={{ width: "100%" }}>
      {" "}
      <></>
      <Box className="ProjectListTabsBox">
        <Tabs
          allowScrollButtonsMobile
          selectionFollowsFocus={true}
          visibleScrollbar
          className="ProjectListTabs"
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          {items.map((val, index) => (
            <Tab
              onClick={(event) => setactiveId(event.target.id)}
              className={`${
                `simple-tab-${val?.id}` == activeId
                  ? "pjlabs"
                  : "ProjectListLabel "
              }`}
              label={val?.text}
              {...a11yProps(index)}
            />
          ))}
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        {partners?.map((partner) => {
          return (
            <OurProjectCard
              Reverse
              src={process.env.REACT_APP_SERVER_MEDIA_URL + partner.photo}
              title={partner.name}
              description={partner.description}
            />
          );
        })}
      </TabPanel>
      <TabPanel value={value} index={1}>
        {softwares?.map((software) => {
          return (
            <OurProjectCard
              Reverse
              src={process.env.REACT_APP_SERVER_MEDIA_URL + software.photo}
              LogoSrc={process.env.REACT_APP_SERVER_MEDIA_URL + software.logo}
              title={software.name}
              description={software.heading}
              para1={software.description}
            />
          );
        })}
      </TabPanel>
      <TabPanel value={value} index={2}>
        {projects?.map((project) => {
          return (
            <OurProjectCard
              Reverse
              src={process.env.REACT_APP_SERVER_MEDIA_URL + project.photo}
              LogoSrc={process.env.REACT_APP_SERVER_MEDIA_URL + project.logo}
              title={project.name}
              description={project.heading}
              para1={project.description}
            />
          );
        })}
      </TabPanel>
      <TabPanel value={value} index={3}>
        {apps?.map((app) => {
          return (
            <OurProjectCard
              Reverse
              src={process.env.REACT_APP_SERVER_MEDIA_URL + app.photo}
              LogoSrc={process.env.REACT_APP_SERVER_MEDIA_URL + app.logo}
              title={app.name}
              description={app.heading}
              para1={app.description}
            />
          );
        })}
      </TabPanel>
      <TabPanel value={value} index={4}>
        {ui?.map((ui) => {
          return (
            <OurProjectCard
              Reverse
              src={process.env.REACT_APP_SERVER_MEDIA_URL + ui.photo}
              LogoSrc={process.env.REACT_APP_SERVER_MEDIA_URL + ui.logo}
              title={ui.name}
              description={ui.heading}
              para1={ui.description}
            />
          );
        })}
      </TabPanel>
      <TabPanel value={value} index={5}>
        {cloud?.map((cloud) => {
          return (
            <OurProjectCard
              Reverse
              src={process.env.REACT_APP_SERVER_MEDIA_URL + cloud.photo}
              LogoSrc={process.env.REACT_APP_SERVER_MEDIA_URL + cloud.logo}
              title={cloud.name}
              description={cloud.heading}
              para1={cloud.description}
            />
          );
        })}
      </TabPanel>
    </Box>
  );
}
