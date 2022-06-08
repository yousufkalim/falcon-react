import React, { useState } from "react";
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
        <OurProjectCard
          Reverse
          src={Microsoft}
          title="Microsoft"
          description="A revolutionary approach to mobile giving, fundraising, and donation collection."
          // ModalHeading="Microsoft"
        />
        <OurProjectCard
          src={Canon}
          title="Canon"
          description="A revolutionary approach to mobile giving, fundraising, and donation collection."
        />
        <OurProjectCard
          Reverse
          src={Fnac}
          title="Fnac"
          description="MediaPipe offers cross-platform, customizable ML solutions for live and streaming media"
        />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <OurProjectCard
          Reverse
          LogoSrc={Orgaplan_Logo}
          DividerTheme="#DBB208"
          src={Orgaplan}
          title="OrgaPlan"
          description="Orgaplan is a complex and full platform allowing the logistic management of large construction sites, in very dense areas (such as Paris - La Défense, etc...). The platform is currently used in Vinci’s construction sites, in order to facilitate very challenging logistic activities."
          // Modal Data
          para1="Orgaplan is a complex and full platform allowing the logistic management of large construction sites, in very dense areas (such as Paris - La Défense, etc...). The platform is currently used in Vinci’s construction sites, in order to facilitate very challenging logistic activities."
          para2="Available in web and mobile version, with 5 types of users: Super admin / Admin / Company / Traffic agent / Buffer traffic agent. Each user has his own rights and functionalities, allowing an infinity of scenarios, as per the real situations on site. "
          para3="Possibility to create and draw the Site Installation Plan, as well as the buildings and storage areas. Possibility to create deliveries and monitor the general state of the site."
          para4="Falcon Consulting is specialized in digital construction projects, and we helped our partner to finalize its specification in order to get the best User experience. "
        />
        <OurProjectCard
          LogoSrc={PP_logo}
          DividerTheme="#11A283"
          src={PermispopImg}
          title="Permispop"
          description="Permispop is a web platform connecting students, independent driving teachers, and driving schools. Each type of user has a dedicated interface, allowing them to manage their activities efficiently. "
          // Modal Data
          para1="Permispop is a web platform connecting students, independent driving teachers, and driving schools. Each type of user has a dedicated interface, allowing them to manage their activities efficiently. "
          para2="The platform offers several features such as : "
          para3="- the possibility to search for an instructor with an interactive map, and book a session depending on his availability."
          para4="- The booking feature allows the driving schools and instructors to have an overview of all the activities and manage them efficiently;"
          para5="- At the end of each session, the student can rate the instructor and provide feedback to the platform; "
          para6="- An internal messaging system;"
          para7="- A digital driving booklet, allowing the instructors to have an overview of the level of each student, and add any progress made. "
        />

        <OurProjectCard
          Reverse
          src={Blsh}
          title="Blsh Delivery"
          description="A revolutionary approach to mobile giving, fundraising, and donation collection."
        />
        <OurProjectCard
          LogoSrc={Quadra_Logo}
          DividerTheme="#7A7A7A"
          src={Quadra}
          title="Quadrabase"
          description="Quadrabase is a web platform allowing engineering offices to automatically generate tender documents in the construction industry: Project Specification, Project Cost Estimate, Project bidding template. The platform has a well structured and multi-level database, allowing to include the most pertinent data for each specific project, based on the project details."
          // Modal Data
          para1="Quadrabase is a web platform allowing engineering offices to automatically generate tender documents in the construction industry: Project Specification, Project Cost Estimate, Project bidding template. The platform has a well structured and multi-level database, allowing to include the most pertinent data for each specific project, based on the project details."
          para2="Our client being a project manager with more than 30 years of experience in the field, we had to show a great capacity of adaptation to correctly apprehend the project, and understand all the technical aspects. "
          para3="This project is ambitious and aims to revolutionize the approach to design in the field of construction in France. "
        />
        {MoreProjects && (
          <>
            <OurProjectCard
              Reverse
              LogoSrc={Kidcab_Logo}
              DividerTheme="#0097A7"
              src={Kidcap}
              title="Kidcab"
              description="Kidcab is a mobile application aiming to help parents find drivers for their children’s activities, and safely monitor their location. For our partner, we developed two mobile application and a Ride Management web application. "
              // Modal Data
              para1="Kidcab is a mobile application aiming to help parents find drivers for their children’s activities, and safely monitor their location. For our partner, we developed two mobile application and a Ride Management web application. "
              para2="The Driver mobile application allow them to receive ride offers and see an overview of the upcoming and past activities. When being on a ride, the application is having similar features as Uber. "
              para3="The Parents mobile application shows the live location of the driver, and allows to monitor all the past and upcoming rides. "
              para4="Finally, the Ride Management website is intended for Kidcab administrator to create, manage and assign efficiently the activities of the company. An in-app quote and invoice management tool has also been created. "
              para5="This project required to work carefully on the code optimization, and especially all the API calls in order to minimize the operation costs. "
            />

            <OurProjectCard
              LogoSrc={Tilt_Logo}
              DividerTheme="red"
              title="Tilt"
              description="Web and mobile platform connecting restaurants, corporate customers and delivery drivers for bulked meal deliveries in Martinique. This smart concept allows each customer to save on the delivery fees, as they are shared among everyone passing an order. "
              src={Tilt}
              // Modal Data
              para1="Web and mobile platform connecting restaurants, corporate customers and delivery drivers for bulked meal deliveries in Martinique. This smart concept allows each customer to save on the delivery fees, as they are shared among everyone passing an order.  "
              para2="The customers can order food with a ingenious system allowing mixed dishes among several restaurants in the same area. Then they get notified of the status of the order, and they can rate the overall experience. "
              para3="On the restaurant side, it is possible to create and manage a customized menu, see all the incoming orders, and change their status."
              para4="On the delivery side, the application the dishes to be picked and delivered, with all the location information. The delivery driver automatically informs the users of the progress of the order, with push notifications. "
            />

            <OurProjectCard
              Reverse
              src={DesignConf}
              title="Design Confection Ethiques"
              description="A web app designed to help customers with customized stitching to receive your creation at your home. "
              // Modal Data
              para1="A web app designed to help customers with customized stitching to receive your creation at your home. "
              para2="User login to register and add information regarding customized dress like color combination, stuff design, etc."
              para3="After registration, consumers post ads containing ideas and 100+creative designers send you the estimated costs."
              para4="Choose your designer with 99% accuracy as design confection brings your ideas to life."
            />

            <OurProjectCard
              LogoSrc={EZBox_Logo}
              DividerTheme="blue"
              title="EZbox"
              description="EZBox media is a platform providing different services"
              src={EZbox}
              // Modal Data
              para1="EZBox media is a platform providing different services including"
              para2="Advertising: "
              para3="•	Advertising by understanding how a user can react to the advertisement shown to them."
              para4="•	Target ads based on non-personal criteria."
              para5="Product development: "
              para6="•	EZBox media helps Product development for the next generation products with the wide variety of technologies available today."
              para7="Chromium Browser:"
              para8="•	EZBoxmedia worked with leading consumer electronics manufacturers to design and provide turnkey solutions. "
            />
            <OurProjectCard
              Reverse
              LogoSrc={Tele_logo}
              DividerTheme="#0F52BA"
              src={Movement}
              title="Movement detection for health providers"
              description="Telehealth platform (project name is confidential) is a US web and mobile application which allows physiotherapists to analyze the movements of their patients remotely. "
              // Modal Data
              para1="Telehealth platform (project name is confidential) is a US web and mobile application which allows physiotherapists to analyze the movements of their patients remotely. "
              para2="The patient is filmed performing different types of exercises, and the tool detects and calculates the angles of the patient body (such as his legs, arms, foot, waist, etc…). The program then analyzes the data based on internal rules, and deduces whether the movements are abnormal or not."
              para3="The detection of the movements is done with the help of Mediapipe, and requires an advanced knowledge in terms of image processing in order to ensure a fluidity and accuracy of the final results."
            />

            <OurProjectCard
              title="ERP Excellence"
              description="A revolutionary approach to mobile giving, fundraising, and donation collection."
              src={ERP}
            />

            <OurProjectCard
              Reverse
              LogoSrc={Tajweed_logo}
              DividerTheme="#007536"
              src={Tajweed}
              title="Tajweed"
              description="Tajweed Made Easy is an application developed by Falcon IT.  Website and application based on Qura’an learning with proper Tajweed rules and Makharij."
              // Modal Data
              para1="Tajweed Made Easy is an application developed by Falcon IT.  Website and application based on Qura’an learning with proper Tajweed rules and Makharij."
              para2="•	User can signup and start learning Quran with Tajweed."
              para3="•	Practice lessons are available."
              para4="•	User can repeat the lesson at any time without an internet connection"
              para5="•	On the website, books are available in different languages which are the flagship publications of Tajweed Made Easy."
            />
          </>
        )}
        <Grid xs={12} className="BlogBtnGrid">
          <Button
            className="BlogBtn"
            variant="outlined"
            onClick={(e) => SetMoreProjects(!MoreProjects)}
          >
            {MoreProjects ? "Show less" : "See more"}
          </Button>
        </Grid>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <OurProjectCard
          Reverse
          src={Blsh}
          title="Blsh Delivery"
          description="A revolutionary approach to mobile giving, fundraising, and donation collection."
        />
        <OurProjectCard
          LogoSrc={PP_logo}
          // ModalHeading="Permispop"
          DividerTheme="#11A283"
          src={PermispopImg}
          title="Permispop"
          description="Permispop is a web platform connecting students, independent driving teachers, and driving schools. Each type of user has a dedicated interface, allowing them to manage their activities efficiently. "
          // Modal Data
          para1="Permispop is a web platform connecting students, independent driving teachers, and driving schools. Each type of user has a dedicated interface, allowing them to manage their activities efficiently. "
          para2="The platform offers several features such as : "
          para3="- the possibility to search for an instructor with an interactive map, and book a session depending on his availability."
          para4="- The booking feature allows the driving schools and instructors to have an overview of all the activities and manage them efficiently;"
          para5="- At the end of each session, the student can rate the instructor and provide feedback to the platform; "
          para6="- An internal messaging system;"
          para7="- A digital driving booklet, allowing the instructors to have an overview of the level of each student, and add any progress made. "
        />

        <OurProjectCard
          Reverse
          LogoSrc={RealEstate_Logo}
          // ModalHeading="Real Estate"
          DividerTheme="#837C6B"
          RealEstate_Logo
          src={RealEstate}
          title="Real Estate"
          description="A revolutionary approach to mobile giving, fundraising, and donation collection."
        />
        <OurProjectCard
          LogoSrc={Quadra_Logo}
          DividerTheme="#7A7A7A"
          src={Quadra}
          title="Quadrabase"
          description="Quadrabase is a web platform allowing engineering offices to automatically generate tender documents in the construction industry: Project Specification, Project Cost Estimate, Project bidding template. The platform has a well structured and multi-level database, allowing to include the most pertinent data for each specific project, based on the project details."
          // Modal Data
          para1="Quadrabase is a web platform allowing engineering offices to automatically generate tender documents in the construction industry: Project Specification, Project Cost Estimate, Project bidding template. The platform has a well structured and multi-level database, allowing to include the most pertinent data for each specific project, based on the project details."
          para2="Our client being a project manager with more than 30 years of experience in the field, we had to show a great capacity of adaptation to correctly apprehend the project, and understand all the technical aspects. "
          para3="This project is ambitious and aims to revolutionize the approach to design in the field of construction in France. "
        />
        {MoreProjects && (
          <>
            <OurProjectCard
              Reverse
              LogoSrc={Orgaplan_Logo}
              DividerTheme="#DBB208"
              src={Orgaplan}
              title="OrgaPlan"
              description="Orgaplan is a complex and full platform allowing the logistic management of large construction sites, in very dense areas (such as Paris - La Défense, etc...). The platform is currently used in Vinci’s construction sites, in order to facilitate very challenging logistic activities."
              // Modal Data
              para1="Orgaplan is a complex and full platform allowing the logistic management of large construction sites, in very dense areas (such as Paris - La Défense, etc...). The platform is currently used in Vinci’s construction sites, in order to facilitate very challenging logistic activities."
              para2="Available in web and mobile version, with 5 types of users: Super admin / Admin / Company / Traffic agent / Buffer traffic agent. Each user has his own rights and functionalities, allowing an infinity of scenarios, as per the real situations on site. "
              para3="Possibility to create and draw the Site Installation Plan, as well as the buildings and storage areas. Possibility to create deliveries and monitor the general state of the site."
              para4="Falcon Consulting is specialized in digital construction projects, and we helped our partner to finalize its specification in order to get the best User experience. "
            />
            <OurProjectCard
              LogoSrc={Tilt_Logo}
              DividerTheme="red"
              title="Tilt"
              description="Web and mobile platform connecting restaurants, corporate customers and delivery drivers for bulked meal deliveries in Martinique. This smart concept allows each customer to save on the delivery fees, as they are shared among everyone passing an order. "
              src={Tilt}
              // Modal Data
              para1="Web and mobile platform connecting restaurants, corporate customers and delivery drivers for bulked meal deliveries in Martinique. This smart concept allows each customer to save on the delivery fees, as they are shared among everyone passing an order.  "
              para2="The customers can order food with a ingenious system allowing mixed dishes among several restaurants in the same area. Then they get notified of the status of the order, and they can rate the overall experience. "
              para3="On the restaurant side, it is possible to create and manage a customized menu, see all the incoming orders, and change their status."
              para4="On the delivery side, the application the dishes to be picked and delivered, with all the location information. The delivery driver automatically informs the users of the progress of the order, with push notifications. "
            />

            <OurProjectCard
              Reverse
              src={Microsoft}
              title="Microsoft"
              description="A revolutionary approach to mobile giving, fundraising, and donation collection."
            />
            <OurProjectCard
              src={Canon}
              title="Canon"
              description="A revolutionary approach to mobile giving, fundraising, and donation collection."
            />
            <OurProjectCard
              Reverse
              src={Kidcap}
              LogoSrc={Kidcab_Logo}
              DividerTheme="#0097A7"
              title="Kidcab"
              description="Kidcab is a mobile application aiming to help parents find drivers for their children’s activities, and safely monitor their location. For our partner, we developed two mobile application and a Ride Management web application. "
              // Modal Data
              para1="Kidcab is a mobile application aiming to help parents find drivers for their children’s activities, and safely monitor their location. For our partner, we developed two mobile application and a Ride Management web application. "
              para2="The Driver mobile application allow them to receive ride offers and see an overview of the upcoming and past activities. When being on a ride, the application is having similar features as Uber. "
              para3="The Parents mobile application shows the live location of the driver, and allows to monitor all the past and upcoming rides. "
              para4="Finally, the Ride Management website is intended for Kidcab administrator to create, manage and assign efficiently the activities of the company. An in-app quote and invoice management tool has also been created. "
              para5="This project required to work carefully on the code optimization, and especially all the API calls in order to minimize the operation costs. "
            />
            <OurProjectCard
              src={Fnac}
              title="Fnac"
              description="MediaPipe offers cross-platform, customizable ML solutions for live and streaming media"
            />
            <OurProjectCard
              Reverse
              src={BeautySalon}
              title="Beauty Salon"
              description="MediaPipe offers cross-platform, customizable ML solutions for live and streaming media"
            />
            <OurProjectCard
              LogoSrc={EZBox_Logo}
              DividerTheme="blue"
              title="EZbox"
              description="EZBox media is a platform providing different services"
              src={EZbox}
              // Modal Data
              para1="EZBox media is a platform providing different services including"
              para2="Advertising: "
              para3="•	Advertising by understanding how a user can react to the advertisement shown to them."
              para4="•	Target ads based on non-personal criteria."
              para5="Product development: "
              para6="•	EZBox media helps Product development for the next generation products with the wide variety of technologies available today."
              para7="Chromium Browser: "
              para8="•	EZBoxmedia worked with leading consumer electronics manufacturers to design and provide turnkey solutions. "
            />
            <OurProjectCard
              Reverse
              LogoSrc={Desine_Logo}
              // ModalHeading="Design Confection Ethiques"
              DividerTheme="#CC8E9C"
              src={DesignConf}
              title="Design Confection Ethiques"
              description="A web app designed to help customers with customized stitching to receive your creation at your home. "
              // Modal Data
              para1="A web app designed to help customers with customized stitching to receive your creation at your home. "
              para2="User login to register and add information regarding customized dress like color combination, stuff design, etc."
              para3="After registration, consumers post ads containing ideas and 100+creative designers send you the estimated costs."
              para4="Choose your designer with 99% accuracy as design confection brings your ideas to life."
            />

            <OurProjectCard
              title="Barber Shop"
              description="A revolutionary approach to mobile giving, fundraising, and donation collection."
              src={BarberShop}
            />
            <OurProjectCard
              Reverse
              LogoSrc={Tele_logo}
              DividerTheme="#0F52BA"
              src={Movement}
              title="Movement detection for health providers"
              description="Telehealth platform (project name is confidential) is a US web and mobile application which allows physiotherapists to analyze the movements of their patients remotely. "
              // Modal Data
              para1="Telehealth platform (project name is confidential) is a US web and mobile application which allows physiotherapists to analyze the movements of their patients remotely. "
              para2="The patient is filmed performing different types of exercises, and the tool detects and calculates the angles of the patient body (such as his legs, arms, foot, waist, etc…). The program then analyzes the data based on internal rules, and deduces whether the movements are abnormal or not."
              para3="The detection of the movements is done with the help of Mediapipe, and requires an advanced knowledge in terms of image processing in order to ensure a fluidity and accuracy of the final results."
            />

            <OurProjectCard
              title="Accor Hotels"
              description="A revolutionary approach to mobile giving, fundraising, and donation collection."
              src={AccorHotel}
            />

            <OurProjectCard
              Reverse
              src={Toyota}
              title="Toyota"
              description="MediaPipe offers cross-platform, customizable ML solutions for live and streaming media"
            />
            <OurProjectCard
              title="ERP Excellence"
              description="A revolutionary approach to mobile giving, fundraising, and donation collection."
              src={ERP}
            />

            <OurProjectCard
              Reverse
              src={PizzaBoli}
              title="Table"
              description="MediaPipe offers cross-platform, customizable ML solutions for live and streaming media"
            />
            <OurProjectCard
              title="Sindoor"
              description="A revolutionary approach to mobile giving, fundraising, and donation collection."
              src={Sindoor}
            />
            <OurProjectCard
              Reverse
              LogoSrc={Tajweed_logo}
              DividerTheme="#007536"
              src={Tajweed}
              title="Tajweed"
              description="Tajweed Made Easy is an application developed by Falcon IT.  Website and application based on Qura’an learning with proper Tajweed rules and Makharij."
              // Modal Data
              para1="Tajweed Made Easy is an application developed by Falcon IT.  Website and application based on Qura’an learning with proper Tajweed rules and Makharij."
              para2="•	User can signup and start learning Quran with Tajweed."
              para3="•	Practice lessons are available."
              para4="•	User can repeat the lesson at any time without an internet connection"
              para5="•	On the website, books are available in different languages which are the flagship publications of Tajweed Made Easy."
            />
            <OurProjectCard
              title="Yuwway"
              description="A revolutionary approach to mobile giving, fundraising, and donation collection."
              src={Yuwway}
            />
            <OurProjectCard
              Reverse
              LogoSrc={Zypzap_Logo}
              DividerTheme="#522F6D"
              src={Zypzap}
              title="Zypzap"
              description="ZypZap is a gaming platform by Falcon IT."
              // Modal Data
              para1="ZypZap is a gaming platform by Falcon IT."
              para2="It works for both learners and creators. As readable content creates a mess for users or learners so this ZypZap will be helpful for the learners to learn in an easy and faster way."
              para3="•	For learners, ZypZap helps them to become Pro players."
              para4="•	Full gameplay courses are available on this site."
              para5="•	For creators, gamers teach, what they are good at"
              para6="•	Specifically, for the gamers who want to teach how to play and make familiar with the game content quickly."
            />
            <OurProjectCard
              LogoSrc={Wina_Logo}
              DividerTheme="#C39B7E"
              src={Wina}
              title="Wina"
              description="Winaa is a job board, in the shape of a mobile and web application,  for connecting companies and apprentices. "
              // Modal Data
              para1="Winaa is a job board, in the shape of a mobile and web application,  for connecting companies and apprentices. "
              para2="A matching algorithm, based on several criteria, automatically calculates a percentage of compatibility between a student and a job offer.  The matching process is similarly done as with the Tinder application. "
              para3="Once the matching is done, a calendar allows the student to book an interview session with the company. "
              para4="The platform automatically retrieves (scrapes) all offers from reference websites in France, and add them to Winaa’s database. "
              para5="Companies have a full dashboard allowing them to manage their offers, see the potential matches and accept the interview sessions. "
            />
            <OurProjectCard
              Reverse
              src={Ficility}
              title="Facility Management"
              description="A revolutionary approach to mobile giving, fundraising, and donation collection."
              // Modal Data
            />
            <OurProjectCard
              DividerTheme="blue"
              src={Fireman}
              title="Fireman"
              description="MediaPipe offers cross-platform, customizable ML solutions for live and streaming media"
              // Modal Data
            />
          </>
        )}
        <Grid xs={12} className="BlogBtnGrid">
          <Button
            className="BlogBtn"
            variant="outlined"
            onClick={(e) => SetMoreProjects(!MoreProjects)}
          >
            {MoreProjects ? "Show less" : "See more"}
          </Button>
        </Grid>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <OurProjectCard
          Reverse
          src={RealEstate}
          title="Real Estate"
          description="A revolutionary approach to mobile giving, fundraising, and donation collection."
        />
        <OurProjectCard
          LogoSrc={Orgaplan_Logo}
          DividerTheme="#DBB208"
          src={Orgaplan}
          title="OrgaPlan"
          description="Orgaplan is a complex and full platform allowing the logistic management of large construction sites, in very dense areas (such as Paris - La Défense, etc...). The platform is currently used in Vinci’s construction sites, in order to facilitate very challenging logistic activities."
          // Modal Data
          para1="Orgaplan is a complex and full platform allowing the logistic management of large construction sites, in very dense areas (such as Paris - La Défense, etc...). The platform is currently used in Vinci’s construction sites, in order to facilitate very challenging logistic activities."
          para2="Available in web and mobile version, with 5 types of users: Super admin / Admin / Company / Traffic agent / Buffer traffic agent. Each user has his own rights and functionalities, allowing an infinity of scenarios, as per the real situations on site. "
          para3="Possibility to create and draw the Site Installation Plan, as well as the buildings and storage areas. Possibility to create deliveries and monitor the general state of the site."
          para4="Falcon Consulting is specialized in digital construction projects, and we helped our partner to finalize its specification in order to get the best User experience. "
        />

        <OurProjectCard
          Reverse
          src={Blsh}
          title="Blsh Delivery"
          description="A revolutionary approach to mobile giving, fundraising, and donation collection."
        />

        {MoreProjects && (
          <>
            <OurProjectCard
              LogoSrc={PP_logo}
              src={PermispopImg}
              title="Permispop"
              description="Permispop is a web platform connecting students, independent driving teachers, and driving schools. Each type of user has a dedicated interface, allowing them to manage their activities efficiently. "
              // Modal Data
              para1="Permispop is a web platform connecting students, independent driving teachers, and driving schools. Each type of user has a dedicated interface, allowing them to manage their activities efficiently. "
              para2="The platform offers several features such as : "
              para3="- the possibility to search for an instructor with an interactive map, and book a session depending on his availability."
              para4="- The booking feature allows the driving schools and instructors to have an overview of all the activities and manage them efficiently;"
              para5="- At the end of each session, the student can rate the instructor and provide feedback to the platform; "
              para6="- An internal messaging system;"
              para7="- A digital driving booklet, allowing the instructors to have an overview of the level of each student, and add any progress made. "
            />
            <OurProjectCard
              Reverse
              LogoSrc={Tilt_Logo}
              DividerTheme="red"
              title="Tilt"
              description="Web and mobile platform connecting restaurants, corporate customers and delivery drivers for bulked meal deliveries in Martinique. This smart concept allows each customer to save on the delivery fees, as they are shared among everyone passing an order. "
              src={Tilt}
              // Modal Data
              para1="Web and mobile platform connecting restaurants, corporate customers and delivery drivers for bulked meal deliveries in Martinique. This smart concept allows each customer to save on the delivery fees, as they are shared among everyone passing an order.  "
              para2="The customers can order food with a ingenious system allowing mixed dishes among several restaurants in the same area. Then they get notified of the status of the order, and they can rate the overall experience. "
              para3="On the restaurant side, it is possible to create and manage a customized menu, see all the incoming orders, and change their status."
              para4="On the delivery side, the application the dishes to be picked and delivered, with all the location information. The delivery driver automatically informs the users of the progress of the order, with push notifications. "
            />

            <OurProjectCard
              LogoSrc={Kidcab_Logo}
              DividerTheme="#0097A7"
              src={Kidcap}
              title="Kidcab"
              description="Kidcab is a mobile application aiming to help parents find drivers for their children’s activities, and safely monitor their location. For our partner, we developed two mobile application and a Ride Management web application. "
              // Modal Data
              para1="Kidcab is a mobile application aiming to help parents find drivers for their children’s activities, and safely monitor their location. For our partner, we developed two mobile application and a Ride Management web application. "
              para2="The Driver mobile application allow them to receive ride offers and see an overview of the upcoming and past activities. When being on a ride, the application is having similar features as Uber. "
              para3="The Parents mobile application shows the live location of the driver, and allows to monitor all the past and upcoming rides. "
              para4="Finally, the Ride Management website is intended for Kidcab administrator to create, manage and assign efficiently the activities of the company. An in-app quote and invoice management tool has also been created. "
              para5="This project required to work carefully on the code optimization, and especially all the API calls in order to minimize the operation costs. "
            />
            <OurProjectCard
              Reverse
              title="Barber Shop"
              description="A revolutionary approach to mobile giving, fundraising, and donation collection."
              src={BarberShop}
            />

            <OurProjectCard
              src={BeautySalon}
              title="Beauty Salon"
              description="MediaPipe offers cross-platform, customizable ML solutions for live and streaming media"
            />
            <OurProjectCard
              Reverse
              LogoSrc={Tele_logo}
              DividerTheme="#0F52BA"
              src={Movement}
              title="Movement detection for health providers"
              description="Telehealth platform (project name is confidential) is a US web and mobile application which allows physiotherapists to analyze the movements of their patients remotely. "
              // Modal Data
              para1="Telehealth platform (project name is confidential) is a US web and mobile application which allows physiotherapists to analyze the movements of their patients remotely. "
              para2="The patient is filmed performing different types of exercises, and the tool detects and calculates the angles of the patient body (such as his legs, arms, foot, waist, etc…). The program then analyzes the data based on internal rules, and deduces whether the movements are abnormal or not."
              para3="The detection of the movements is done with the help of Mediapipe, and requires an advanced knowledge in terms of image processing in order to ensure a fluidity and accuracy of the final results."
            />

            <OurProjectCard
              src={PizzaBoli}
              title="Pizza Boli"
              description="MediaPipe offers cross-platform, customizable ML solutions for live and streaming media"
            />
            <OurProjectCard
              Reverse
              title="ERP Excellence"
              description="A revolutionary approach to mobile giving, fundraising, and donation collection."
              src={ERP}
            />

            <OurProjectCard
              LogoSrc={Tajweed_logo}
              DividerTheme="#007536"
              src={Tajweed}
              title="Tajweed"
              description="Tajweed Made Easy is an application developed by Falcon IT.  Website and application based on Qura’an learning with proper Tajweed rules and Makharij."
              // Modal Data
              para1="Tajweed Made Easy is an application developed by Falcon IT.  Website and application based on Qura’an learning with proper Tajweed rules and Makharij."
              para2="•	User can signup and start learning Quran with Tajweed."
              para3="•	Practice lessons are available."
              para4="•	User can repeat the lesson at any time without an internet connection"
              para5="•	On the website, books are available in different languages which are the flagship publications of Tajweed Made Easy."
            />
          </>
        )}
        <Grid xs={12} className="BlogBtnGrid">
          <Button
            className="BlogBtn"
            variant="outlined"
            onClick={(e) => SetMoreProjects(!MoreProjects)}
          >
            {MoreProjects ? "Show less" : "See more"}
          </Button>
        </Grid>
      </TabPanel>
      <TabPanel value={value} index={4}>
        <OurProjectCard
          Reverse
          src={Blsh}
          title="Blsh Delivery"
          description="A revolutionary approach to mobile giving, fundraising, and donation collection."
        />
        <OurProjectCard
          LogoSrc={PP_logo}
          src={PermispopImg}
          title="Permispop"
          description="Permispop is a web platform connecting students, independent driving teachers, and driving schools. Each type of user has a dedicated interface, allowing them to manage their activities efficiently. "
          // Modal Data
          para1="Permispop is a web platform connecting students, independent driving teachers, and driving schools. Each type of user has a dedicated interface, allowing them to manage their activities efficiently. "
          para2="The platform offers several features such as : "
          para3="- the possibility to search for an instructor with an interactive map, and book a session depending on his availability."
          para4="- The booking feature allows the driving schools and instructors to have an overview of all the activities and manage them efficiently;"
          para5="- At the end of each session, the student can rate the instructor and provide feedback to the platform; "
          para6="- An internal messaging system;"
          para7="- A digital driving booklet, allowing the instructors to have an overview of the level of each student, and add any progress made. "
        />
        <OurProjectCard
          Reverse
          src={BeautySalon}
          title="Beauty Salon"
          description="MediaPipe offers cross-platform, customizable ML solutions for live and streaming media"
        />

        <OurProjectCard
          LogoSrc={Quadra_Logo}
          DividerTheme="#7A7A7A"
          src={Quadra}
          title="Quadrabase"
          description="Quadrabase is a web platform allowing engineering offices to automatically generate tender documents in the construction industry: Project Specification, Project Cost Estimate, Project bidding template. The platform has a well structured and multi-level database, allowing to include the most pertinent data for each specific project, based on the project details."
          // Modal Data
          para1="Quadrabase is a web platform allowing engineering offices to automatically generate tender documents in the construction industry: Project Specification, Project Cost Estimate, Project bidding template. The platform has a well structured and multi-level database, allowing to include the most pertinent data for each specific project, based on the project details."
          para2="Our client being a project manager with more than 30 years of experience in the field, we had to show a great capacity of adaptation to correctly apprehend the project, and understand all the technical aspects. "
          para3="This project is ambitious and aims to revolutionize the approach to design in the field of construction in France. "
        />
        {MoreProjects && (
          <>
            <OurProjectCard
              Reverse
              LogoSrc={Kidcab_Logo}
              DividerTheme="#0097A7"
              src={Kidcap}
              title="Kidcab"
              description="Kidcab is a mobile application aiming to help parents find drivers for their children’s activities, and safely monitor their location. For our partner, we developed two mobile application and a Ride Management web application. "
              // Modal Data
              para1="Kidcab is a mobile application aiming to help parents find drivers for their children’s activities, and safely monitor their location. For our partner, we developed two mobile application and a Ride Management web application. "
              para2="The Driver mobile application allow them to receive ride offers and see an overview of the upcoming and past activities. When being on a ride, the application is having similar features as Uber. "
              para3="The Parents mobile application shows the live location of the driver, and allows to monitor all the past and upcoming rides. "
              para4="Finally, the Ride Management website is intended for Kidcab administrator to create, manage and assign efficiently the activities of the company. An in-app quote and invoice management tool has also been created. "
              para5="This project required to work carefully on the code optimization, and especially all the API calls in order to minimize the operation costs. "
            />
            <OurProjectCard
              LogoSrc={EZBox_Logo}
              DividerTheme="blue"
              title="EZbox"
              description="EZBox media is a platform providing different services "
              src={EZbox}
              // Modal Data
              para1="EZBox media is a platform providing different services including"
              para2="Advertising: "
              para3="•	Advertising by understanding how a user can react to the advertisement shown to them."
              para4="•	Target ads based on non-personal criteria."
              para5="Product development: "
              para6="•	EZBox media helps Product development for the next generation products with the wide variety of technologies available today."
              para7="Chromium Browser: "
              para8="•	EZBoxmedia worked with leading consumer electronics manufacturers to design and provide turnkey solutions. "
            />

            <OurProjectCard
              Reverse
              LogoSrc={Tele_logo}
              DividerTheme="#0F52BA"
              src={Movement}
              title="Movement detection for health providers"
              description="Telehealth platform (project name is confidential) is a US web and mobile application which allows physiotherapists to analyze the movements of their patients remotely. "
              // Modal Data
              para1="Telehealth platform (project name is confidential) is a US web and mobile application which allows physiotherapists to analyze the movements of their patients remotely. "
              para2="The patient is filmed performing different types of exercises, and the tool detects and calculates the angles of the patient body (such as his legs, arms, foot, waist, etc…). The program then analyzes the data based on internal rules, and deduces whether the movements are abnormal or not."
              para3="The detection of the movements is done with the help of Mediapipe, and requires an advanced knowledge in terms of image processing in order to ensure a fluidity and accuracy of the final results."
            />

            <OurProjectCard
              title="Barber Shop"
              description="A revolutionary approach to mobile giving, fundraising, and donation collection."
              src={BarberShop}
            />

            <OurProjectCard
              Reverse
              src={DesignConf}
              title="Design Confection Ethiques"
              description="A web app designed to help customers with customized stitching to receive your creation at your home. "
              // Modal Data
              para1="A web app designed to help customers with customized stitching to receive your creation at your home. "
              para2="User login to register and add information regarding customized dress like color combination, stuff design, etc."
              para3="After registration, consumers post ads containing ideas and 100+creative designers send you the estimated costs."
              para4="Choose your designer with 99% accuracy as design confection brings your ideas to life."
            />

            <OurProjectCard
              src={RealEstate}
              title="Real Estate"
              description="A revolutionary approach to mobile giving, fundraising, and donation collection."
            />
            <OurProjectCard
              Reverse
              LogoSrc={Tajweed_logo}
              DividerTheme="#007536"
              src={Tajweed}
              title="Tajweed"
              description="Tajweed Made Easy is an application developed by Falcon IT.  Website and application based on Qura’an learning with proper Tajweed rules and Makharij."
              // Modal Data
              para1="Tajweed Made Easy is an application developed by Falcon IT.  Website and application based on Qura’an learning with proper Tajweed rules and Makharij."
              para2="•	User can signup and start learning Quran with Tajweed."
              para3="•	Practice lessons are available."
              para4="•	User can repeat the lesson at any time without an internet connection"
              para5="•	On the website, books are available in different languages which are the flagship publications of Tajweed Made Easy."
            />
          </>
        )}
        <Grid xs={12} className="BlogBtnGrid">
          <Button
            className="BlogBtn"
            variant="outlined"
            onClick={(e) => SetMoreProjects(!MoreProjects)}
          >
            {MoreProjects ? "Show less" : "See more"}
          </Button>
        </Grid>
      </TabPanel>
      <TabPanel value={value} index={5}>
        <OurProjectCard
          Reverse
          src={Toyota}
          title="Toyota"
          description="MediaPipe offers cross-platform, customizable ML solutions for live and streaming media"
        />
        <OurProjectCard
          title="Accor Hotels"
          description="A revolutionary approach to mobile giving, fundraising, and donation collection."
          src={AccorHotel}
        />
      </TabPanel>
    </Box>
  );
}
