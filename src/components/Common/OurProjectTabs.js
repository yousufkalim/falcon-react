import React, { useState } from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import OurProjectCard from "../Common/OurProjectCard";
import PermispopImg from "../../assets/images/permispop_update.png";
import PP_logo from "../../assets/images/permisLogo.png";
import DesignConf from "../../assets/images/designconf_update.png";
import Desine_Logo from "../../assets/images/desineLogo.png";
import RealEstate_Logo from "../../assets/images/realestateLogo.png";
import Movement from "../../assets/images/tele_update.png";
import Tele_logo from "../../assets/images/tele_logo.svg";
import Quadra from "../../assets/images/quadra_update.png";
import Quadra_Logo from "../../assets/images/qudra_logo.svg";
import BarberShop from "../../assets/images/barber_update.png";
import Blsh from "../../assets/images/blish_update.png";
import Kidcap from "../../assets/images/kidcab_update.png";
import Kidcab_Logo from "../../assets/images/kidcabLogo.png";
import Tajweed from "../../assets/images/tajweed_update.png";
import Tajweed_logo from "../../assets/images/tajweed_logo.svg";
import EZbox from "../../assets/images/ezbox_update.png";
import EZBox_Logo from "../../assets/images/ezbox_logo.svg";
import BeautySalon from "../../assets/images/salon_update.png";
import RealEstate from "../../assets/images/realestate_update.png";
import Orgaplan from "../../assets/images/orgaplan_update.png";
import Orgaplan_Logo from "../../assets/images/orgaplan_logo.svg";
import Tilt from "../../assets/images/tilt_update.png";
import Tilt_Logo from "../../assets/images/tilt_logo.svg";
import Microsoft from "../../assets/images/microsoft_update.png";
import Fnac from "../../assets/images/fnac_update.png";
import Canon from "../../assets/images/canon_update.png";
import AccorHotel from "../../assets/images/accor_update.png";
import Toyota from "../../assets/images/toyota_update.png";
import ERP from "../../assets/images/excellence_update.png";
import PizzaBoli from "../../assets/images/table_update.png";
import Sindoor from "../../assets/images/sindoor_update.png";
import Yuwway from "../../assets/images/yuwway_update.png";
import Zypzap from "../../assets/images/zypzap_update.png";
import Zypzap_Logo from "../../assets/images/zypzap_Logo.svg";
import Wina from "../../assets/images/wina_update.png";
import Wina_Logo from "../../assets/images/wina_logo.svg";
import Ficility from "../../assets/images/facility_update.png";
import Fireman from "../../assets/images/fireman_update.png";
import Orientator from "../../assets/images/orientator_update.png";
import Register_RH from "../../assets/images/register_update.png";
import { Grid } from "@mui/material";
import { Button } from "@mui/material";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useTranslation } from "react-i18next";
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
      role='tabpanel'
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
  const { i18n, t } = useTranslation();

  const [MoreProjects, SetMoreProjects] = React.useState(false);
  const [activeId, setactiveId] = useState(2);
  const [value, setValue] = React.useState(2);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box className='ProjectListMain' sx={{ width: "100%" }}>
      {" "}
      <></>
      <Box className='ProjectListTabsBox'>
        <Tabs
          allowScrollButtonsMobile
          selectionFollowsFocus={true}
          visibleScrollbar
          className='ProjectListTabs'
          value={value}
          onChange={handleChange}
          aria-label='basic tabs example'
        >
          {items.map((val, index) => (
            <Tab
              onClick={(event) => setactiveId(event.target.id)}
              className={`${
                `simple-tab-${val?.id}` == activeId || val?.id == activeId
                  ? "pjlabs"
                  : "ProjectListLabel "
              }`}
              label={t(val?.text)}
              {...a11yProps(index)}
            />
          ))}
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <OurProjectCard
          Reverse
          src={Microsoft}
          title='Microsoft'
          heading='Microsoft'
          description='Falcon Consulting has been asked by Microsoft for its expertise in .NET and reporting to implement product analysis tools for the media catalogs (music, video and ebooks) on the Windows Store using the latest Azure technologies.'
          para1='Falcon Consulting has been asked by Microsoft for its expertise in .NET and reporting to implement product analysis tools for the media catalogs (music, video and ebooks) on the Windows Store using the latest Azure technologies.'
          para2='OUR CONTRIBUTION'
          para3='• Implementation of project developments and production quality control'
          para4='• Development in U-SQL under Azure Data Lake Analytics of scripts for quality control of data from the ebook catalog with a library of classes containing the code behind the scripts in C# (generation of extracts, counters and data consistency checks, creation of stored procedures, archiving of data).'
          para5='• Migration of projects developed in Scope and SQL Server to Azure Data Lake Analytics and development in U-SQL under Azure of data quality control scripts from the video catalog with a library of classes containing the code behind the scripts in C# (generation of extracts, counters and data consistency checks, creation of stored procedures, archiving of data).'
        />
        <OurProjectCard
          src={Canon}
          title='Canon'
          heading='Canon'
          description='Falcon Consulting has been asked by Canon for its expertise in .NET and its ability to adapt to any business to set up several projects around EDM Therefore for their customers (several sectors of activity: banking, insurance, construction, aeronautics,...)'
          para1='Falcon Consulting has been asked by Canon for its expertise in .NET and its ability to adapt to any business to set up several projects around EDM Therefore for their customers (several sectors of activity: banking, insurance, construction, aeronautics,...)'
          para2='OUR CONTRIBUTION'
          para3='• Implementation of project developments and production quality control'
          para4='• Development in C# 4.6 of a component using the YouSign API for managing electronic signatures from workflows in Therefore'
          para5='• Development in C#, C# Core, ASP.NET, ASP.NET Core of several applications dedicated to Canon customers using Therefore API.'
          para6='• Creation and implementation of reports in PowerBI (visualization of extracts, formatting of counters and graphs for data consistency checking)'
          para7='• raining of various Canon customers in the use, management and administration of Therefore'
          para8='• Technical support around Therefore from different Canon customers'
        />
        <OurProjectCard
          Reverse
          src={Fnac}
          title='Fnac'
          heading='Fnac'
          description='Falcon Consulting has been asked by FNAC for its expertise in .NET and SQL to reinforce the project teams related to inventory, stocks, locations, label printing, customer orders.'
          para1='Falcon Consulting has been asked by FNAC for its expertise in .NET and SQL to reinforce the project teams related to inventory, stocks, locations, label printing, customer orders.'
          para2='OUR CONTRIBUTION'
          para3='• Collection and consolidation of business requests'
          para4='• Implementation of project developments and production quality control'
          para5='• Development in ASP.NET MVC 4 and Entity Framework 5 to develop a tool for managing store inventories (inventory management, location management, in-store label printing), unsold product returns, shipping and customer order remittances, use of EXT.NET modules with JavaScript / JQuery development to modernize this tool.'
          para6='• Development in C# Compact Framework 3.5 to upgrade the tool for managing store inventories, returns of unsold products, shipping and customer order remittances on PDAs used in the store by staff.'
          para7='• T-SQL development (generation of extracts, counters and data consistency checks, creation of stored procedures for the different projects, data archiving)'
          para8='• Development in ASP.NET 3.5 to upgrade a shipping management tool for live customer orders in Switzerland'
        />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <OurProjectCard
          to='/ourprojects/orgaplan'
          Reverse
          LogoSrc={Orgaplan_Logo}
          DividerTheme='#DBB208'
          src={Orgaplan}
          title='OrgaPlan'
          description='Orgaplan is a complex and full platform allowing the logistic management of large construction sites, in very dense areas (such as Paris - La Défense, etc...). The platform is currently used in Vinci’s construction sites, in order to facilitate very challenging logistic activities.'
          // Modal Data
          para1='Orgaplan is a complex and full platform allowing the logistic management of large construction sites, in very dense areas (such as Paris - La Défense, etc...). The platform is currently used in Vinci’s construction sites, in order to facilitate very challenging logistic activities.'
          para2='Available in web and mobile version, with 5 types of users: Super admin / Admin / Company / Traffic agent / Buffer traffic agent. Each user has his own rights and functionalities, allowing an infinity of scenarios, as per the real situations on site. '
          para3='Possibility to create and draw the Site Installation Plan, as well as the buildings and storage areas. Possibility to create deliveries and monitor the general state of the site.'
          para4='Falcon Consulting is specialized in digital construction projects, and we helped our partner to finalize its specification in order to get the best User experience. '
        />
        <OurProjectCard
          to='/ourprojects/telehealthplatform'
          LogoSrc={Tele_logo}
          DividerTheme='#0F52BA'
          src={Movement}
          title='Movement detection for health providers'
          description='Telehealth platform (project name is confidential) is a US web and mobile application which allows physiotherapists to analyze the movements of their patients remotely. '
          // Modal Data
          para1='Telehealth platform (project name is confidential) is a US web and mobile application which allows physiotherapists to analyze the movements of their patients remotely. '
          para2='The patient is filmed performing different types of exercises, and the tool detects and calculates the angles of the patient body (such as his legs, arms, foot, waist, etc…). The program then analyzes the data based on internal rules, and deduces whether the movements are abnormal or not.'
          para3='The detection of the movements is done with the help of Mediapipe, and requires an advanced knowledge in terms of image processing in order to ensure a fluidity and accuracy of the final results.'
        />
        <OurProjectCard
          Reverse
          LogoSrc={Quadra_Logo}
          DividerTheme='#7A7A7A'
          src={Quadra}
          to='/ourprojects/quadrabase'
          title='Quadrabase'
          description='Quadrabase is a web platform allowing engineering offices to automatically generate tender documents in the construction industry: Project Specification, Project Cost Estimate, Project bidding template. The platform has a well structured and multi-level database, allowing to include the most pertinent data for each specific project, based on the project details.'
          // Modal Data
          para1='Quadrabase is a web platform allowing engineering offices to automatically generate tender documents in the construction industry: Project Specification, Project Cost Estimate, Project bidding template. The platform has a well structured and multi-level database, allowing to include the most pertinent data for each specific project, based on the project details.'
          para2='Our client being a project manager with more than 30 years of experience in the field, we had to show a great capacity of adaptation to correctly apprehend the project, and understand all the technical aspects. '
          para3='This project is ambitious and aims to revolutionize the approach to design in the field of construction in France. '
        />
        <OurProjectCard
          LogoSrc={PP_logo}
          DividerTheme='#11A283'
          src={PermispopImg}
          title='Permispop'
          to='/ourprojects/permispop'
          description='Permispop is a web platform connecting students, independent driving teachers, and driving schools. Each type of user has a dedicated interface, allowing them to manage their activities efficiently. '
          // Modal Data
          para1='Permispop is a web platform connecting students, independent driving teachers, and driving schools. Each type of user has a dedicated interface, allowing them to manage their activities efficiently. '
          para2='The platform offers several features such as :'
          para3='- the possibility to search for an instructor with an interactive map, and book a session depending on his availability.'
          para4='- The booking feature allows the driving schools and instructors to have an overview of all the activities and manage them efficiently;'
          para5='- At the end of each session, the student can rate the instructor and provide feedback to the platform; '
          para6='- An internal messaging system;'
          para7='- A digital driving booklet, allowing the instructors to have an overview of the level of each student, and add any progress made. '
        />

        {/* {MoreProjects && (
          <> */}
        <OurProjectCard
          Reverse
          to='/ourprojects/designconfection'
          src={DesignConf}
          title='Design Confection Ethiques'
          description='A web app designed to help customers with customized stitching to receive your creation at your home. '
          // Modal Data
          para1='A web app designed to help customers with customized stitching to receive your creation at your home. '
          para2='User login to register and add information regarding customized dress like color combination, stuff design, etc.'
          para3='After registration, consumers post ads containing ideas and 100+creative designers send you the estimated costs.'
          para4='Choose your designer with 99% accuracy as design confection brings your ideas to life.'
        />
        <OurProjectCard
          LogoSrc={Kidcab_Logo}
          DividerTheme='#0097A7'
          src={Kidcap}
          to='/ourprojects/kidcab'
          title='Kidcab'
          description='Kidcab is a mobile application aiming to help parents find drivers for their children’s activities, and safely monitor their location. For our partner, we developed two mobile application and a Ride Management web application. '
          // Modal Data
          para1='Kidcab is a mobile application aiming to help parents find drivers for their children’s activities, and safely monitor their location. For our partner, we developed two mobile application and a Ride Management web application. '
          para2='The Driver mobile application allow them to receive ride offers and see an overview of the upcoming and past activities. When being on a ride, the application is having similar features as Uber. '
          para3='The Parents mobile application shows the live location of the driver, and allows to monitor all the past and upcoming rides. '
          para4='Finally, the Ride Management website is intended for Kidcab administrator to create, manage and assign efficiently the activities of the company. An in-app quote and invoice management tool has also been created. '
          para5='This project required to work carefully on the code optimization, and especially all the API calls in order to minimize the operation costs. '
        />

        <OurProjectCard
          Reverse
          LogoSrc={Tilt_Logo}
          DividerTheme='red'
          to='/ourprojects/tilt'
          title='Tilt'
          description='Web and mobile platform connecting restaurants, corporate customers and delivery drivers for bulked meal deliveries in Martinique. This smart concept allows each customer to save on the delivery fees, as they are shared among everyone passing an order. '
          src={Tilt}
          // Modal Data
          para1='Web and mobile platform connecting restaurants, corporate customers and delivery drivers for bulked meal deliveries in Martinique. This smart concept allows each customer to save on the delivery fees, as they are shared among everyone passing an order.  '
          para2='The customers can order food with a ingenious system allowing mixed dishes among several restaurants in the same area. Then they get notified of the status of the order, and they can rate the overall experience. '
          para3='On the restaurant side, it is possible to create and manage a customized menu, see all the incoming orders, and change their status.'
          para4='On the delivery side, the application the dishes to be picked and delivered, with all the location information. The delivery driver automatically informs the users of the progress of the order, with push notifications. '
        />

        <OurProjectCard
          LogoSrc={EZBox_Logo}
          DividerTheme='blue'
          to='/ourprojects/ezbox'
          title='EZbox'
          description='EZBox media is a platform providing different services'
          src={EZbox}
          // Modal Data
          para1='EZBox media is a platform providing different services including'
          para2='Advertising: '
          para3='•	Advertising by understanding how a user can react to the advertisement shown to them.'
          para4='•	Target ads based on non-personal criteria.'
          para5='Product development: '
          para6='•	EZBox media helps Product development for the next generation products with the wide variety of technologies available today.'
          para7='Chromium Browser:'
          para8='•	EZBoxmedia worked with leading consumer electronics manufacturers to design and provide turnkey solutions. '
        />
        <OurProjectCard
          Reverse
          to='/ourprojects/excellence'
          title='ERP Excellence'
          description='Excellence Mode is a chain of ready-to-wear stores in France, with several dozen locations throughout France. In order to develop its brand image and develop its online activity, the company wanted to have an e-commerce site.'
          src={ERP}
        />
        <OurProjectCard
          src={Blsh}
          title='Blsh Delivery'
          description='We are building a marketplace for delivery supplies on the customer and small business demand.'
          heading='Blsh Delivery'
          // Modal Data
          para1='We are building a marketplace for delivery supplies on the customer and small business demand.'
          para2='The app will match the Customer delivery request with the Courier.'
          para3='The Individual shopper can use delivery regularly (weekly, monthly, etc). Or only when there is a need for the delivery.'
          para4='The app will offer market-based pricing. When the Individual shopper requests, he will offer the price he is willing to pay for delivery. All drivers who match his request will see the price. They will be able to accept the request or negotiate the delivery price.'
          para5='The app will be free for Customers. The Courier will pay 20% of the delivery price.'
        />

        <OurProjectCard
          Reverse
          LogoSrc={Tajweed_logo}
          DividerTheme='#007536'
          src={Tajweed}
          heading='Tajweed'
          title='Tajweed'
          description='Tajweed Made Easy is an application developed by Falcon IT.  Website and application based on Qura’an learning with proper Tajweed rules and Makharij.'
          // Modal Data
          para1='Tajweed Made Easy is an application developed by Falcon IT.  Website and application based on Qura’an learning with proper Tajweed rules and Makharij.'
          para2='•	User can signup and start learning Quran with Tajweed.'
          para3='•	Practice lessons are available.'
          para4='•	User can repeat the lesson at any time without an internet connection'
          para5='•	On the website, books are available in different languages which are the flagship publications of Tajweed Made Easy.'
        />
        {/* </>
        )} */}
        {/* <Grid xs={12} className="BlogBtnGrid">
          <Button
            className="BlogBtn"
            variant="outlined"
            onClick={(e) => SetMoreProjects(!MoreProjects)}
          >
            {MoreProjects ? "Show less" : "See more"}
          </Button>
        </Grid> */}
      </TabPanel>
      <TabPanel value={value} index={2}>
        <OurProjectCard
          Reverse
          to='/ourprojects/tilt'
          LogoSrc={Tilt_Logo}
          DividerTheme='red'
          title='Tilt'
          description='Web and mobile platform connecting restaurants, corporate customers and delivery drivers for bulked meal deliveries in Martinique. This smart concept allows each customer to save on the delivery fees, as they are shared among everyone passing an order. '
          src={Tilt}
          // Modal Data
          para1='Web and mobile platform connecting restaurants, corporate customers and delivery drivers for bulked meal deliveries in Martinique. This smart concept allows each customer to save on the delivery fees, as they are shared among everyone passing an order.'
          para2='The customers can order food with a ingenious system allowing mixed dishes among several restaurants in the same area. Then they get notified of the status of the order, and they can rate the overall experience.'
          para3='On the restaurant side, it is possible to create and manage a customized menu, see all the incoming orders, and change their status.'
          para4='On the delivery side, the application the dishes to be picked and delivered, with all the location information. The delivery driver automatically informs the users of the progress of the order, with push notifications. '
        />
        <OurProjectCard
          to='/ourprojects/permispop'
          LogoSrc={PP_logo}
          // ModalHeading="Permispop"
          DividerTheme='#11A283'
          src={PermispopImg}
          title='Permispop'
          description={t(
            "Permispop is a web platform connecting students, independent driving teachers, and driving schools. Each type of user has a dedicated interface, allowing them to manage their activities efficiently."
          )}
          // Modal Data
          para1='Permispop is a web platform connecting students, independent driving teachers, and driving schools. Each type of user has a dedicated interface, allowing them to manage their activities efficiently.'
          para2='The platform offers several features such as :'
          para3='- the possibility to search for an instructor with an interactive map, and book a session depending on his availability.'
          para4='- The booking feature allows the driving schools and instructors to have an overview of all the activities and manage them efficiently;'
          para5='- At the end of each session, the student can rate the instructor and provide feedback to the platform; '
          para6='- An internal messaging system;'
          para7='- A digital driving booklet, allowing the instructors to have an overview of the level of each student, and add any progress made. '
        />

        <OurProjectCard
          Reverse
          LogoSrc={Quadra_Logo}
          to='/ourprojects/quadrabase'
          DividerTheme='#7A7A7A'
          src={Quadra}
          title='Quadrabase'
          description='Quadrabase is a web platform allowing engineering offices to automatically generate tender documents in the construction industry: Project Specification, Project Cost Estimate, Project bidding template. The platform has a well structured and multi-level database, allowing to include the most pertinent data for each specific project, based on the project details.'
          // Modal Data
          // para1="Quadrabase is a web platform allowing engineering offices to automatically generate tender documents in the construction industry: Project Specification, Project Cost Estimate, Project bidding template. The platform has a well structured and multi-level database, allowing to include the most pertinent data for each specific project, based on the project details."
          // para2="Our client being a project manager with more than 30 years of experience in the field, we had to show a great capacity of adaptation to correctly apprehend the project, and understand all the technical aspects. "
          // para3="This project is ambitious and aims to revolutionize the approach to design in the field of construction in France. "
        />
        <OurProjectCard
          src={Kidcap}
          LogoSrc={Kidcab_Logo}
          to='/ourprojects/kidcab'
          DividerTheme='#0097A7'
          title='Kidcab'
          description='Kidcab is a mobile application aiming to help parents find drivers for their children’s activities, and safely monitor their location. For our partner, we developed two mobile application and a Ride Management web application. '
          // Modal Data
          para1='Kidcab is a mobile application aiming to help parents find drivers for their children’s activities, and safely monitor their location. For our partner, we developed two mobile application and a Ride Management web application.'
          para2='The Driver mobile application allow them to receive ride offers and see an overview of the upcoming and past activities. When being on a ride, the application is having similar features as Uber. '
          para3='The Parents mobile application shows the live location of the driver, and allows to monitor all the past and upcoming rides.'
          para4='Finally, the Ride Management website is intended for Kidcab administrator to create, manage and assign efficiently the activities of the company. An in-app quote and invoice management tool has also been created.'
          para5='This project required to work carefully on the code optimization, and especially all the API calls in order to minimize the operation costs. '
        />

        {/* {MoreProjects && (
          <> */}
        <OurProjectCard
          Reverse
          to='/ourprojects/yuwway'
          title='Yuwway'
          description="Yuwway is a search engine that compares fares for all types of transport (Taxi/VTC/Moto-taxi, etc.) allowing, in a simple search, to access all the fares available and corresponding to the customer's needs."
          src={Yuwway}
        />

        <OurProjectCard
          to='/ourprojects/telehealthplatform'
          LogoSrc={Tele_logo}
          DividerTheme='#0F52BA'
          src={Movement}
          title='Movement detection for health providers'
          description='Telehealth platform (project name is confidential) is a US web and mobile application which allows physiotherapists to analyze the movements of their patients remotely. '
          // Modal Data
          para1='Telehealth platform (project name is confidential) is a US web and mobile application which allows physiotherapists to analyze the movements of their patients remotely. '
          para2='The patient is filmed performing different types of exercises, and the tool detects and calculates the angles of the patient body (such as his legs, arms, foot, waist, etc…). The program then analyzes the data based on internal rules, and deduces whether the movements are abnormal or not.'
          para3='The detection of the movements is done with the help of Mediapipe, and requires an advanced knowledge in terms of image processing in order to ensure a fluidity and accuracy of the final results.'
        />
        <OurProjectCard
          to='/ourprojects/orientator'
          Reverse
          src={Orientator}
          title='Orientator'
          description='Orientator is a web application that allows high school students to make their best career choice, after filling out an online and customized questionnaire.'
          // Modal Data
        />

        <OurProjectCard
          to='/ourprojects/registerrh'
          DividerTheme='blue'
          src={Register_RH}
          title='Register-RH'
          description='This system offers complete functionality to manage staff, documents related to them and their status. One can also manage the Risk assessment documents of the Company. This application is capable of managing multiple Companies, their branches and Employee along with the transfer of employee from one branch to another.'
          // Modal Data
        />

        <OurProjectCard
          to='/ourprojects/facilitymanagement'
          Reverse
          src={Ficility}
          title='Facility Management'
          description='This is the platform for management of office building. It is similar to Trello-like Dashboard, showing the tickets and their status.'
          // Modal Data
        />
        <OurProjectCard
          to='/ourprojects/orgaplan'
          LogoSrc={Orgaplan_Logo}
          DividerTheme='#DBB208'
          src={Orgaplan}
          title='OrgaPlan'
          description='Orgaplan is a complex and full platform allowing the logistic management of large construction sites, in very dense areas (such as Paris - La Défense, etc...). The platform is currently used in Vinci’s construction sites, in order to facilitate very challenging logistic activities.'
          // Modal Data
          para1='Orgaplan is a complex and full platform allowing the logistic management of large construction sites, in very dense areas (such as Paris - La Défense, etc...). The platform is currently used in Vinci’s construction sites, in order to facilitate very challenging logistic activities.'
          para2='Available in web and mobile version, with 5 types of users: Super admin / Admin / Company / Traffic agent / Buffer traffic agent. Each user has his own rights and functionalities, allowing an infinity of scenarios, as per the real situations on site. '
          para3='Possibility to create and draw the Site Installation Plan, as well as the buildings and storage areas. Possibility to create deliveries and monitor the general state of the site.'
          para4='Falcon Consulting is specialized in digital construction projects, and we helped our partner to finalize its specification in order to get the best User experience. '
        />

        <OurProjectCard
          to='/ourprojects/zypzap'
          Reverse
          LogoSrc={Zypzap_Logo}
          DividerTheme='#522F6D'
          src={Zypzap}
          title='Zypzap'
          description='ZypZap is a gaming platform by Falcon IT.'
          // Modal Data
          para1='ZypZap is a gaming platform by Falcon IT.'
          para2='It works for both learners and creators. As readable content creates a mess for users or learners so this ZypZap will be helpful for the learners to learn in an easy and faster way.'
          para3='•	For learners, ZypZap helps them to become Pro players.'
          para4='•	Full gameplay courses are available on this site.'
          para5='•	For creators, gamers teach, what they are good at'
          para6='•	Specifically, for the gamers who want to teach how to play and make familiar with the game content quickly.'
        />
        <OurProjectCard
          to='/ourprojects/ezbox'
          LogoSrc={EZBox_Logo}
          DividerTheme='blue'
          title='EZbox'
          description='EZBox media is a platform providing different services'
          src={EZbox}
          // Modal Data
          para1='EZBox media is a platform providing different services including'
          para2='Advertising: '
          para3='•	Advertising by understanding how a user can react to the advertisement shown to them.'
          para4='•	Target ads based on non-personal criteria.'
          para5='Product development: '
          para6='•	EZBox media helps Product development for the next generation products with the wide variety of technologies available today.'
          para7='Chromium Browser: '
          para8='•	EZBoxmedia worked with leading consumer electronics manufacturers to design and provide turnkey solutions. '
        />
        <OurProjectCard
          Reverse
          to='/ourprojects/sindoor'
          title='Sindoor'
          description='Marriage app connecting user and vendors Platform to connect  users with wedding vendors, The people who wanted to get married can easily find vendors for their wedding. The User and vendors can communicate through App. The user and vendor have send and receive quotes then validate quotes on App.'
          src={Sindoor}
        />

        <OurProjectCard
          to='/ourprojects/fireman'
          DividerTheme='blue'
          src={Fireman}
          title='Fireman'
          description='Fireman is the management and report generating system for fire fighters. The safety committees visit establishments open to the public and advise the mayor for business continuity. Each visit or study gives rise to a report. Fire fighters create/modify file according to visit or study category. Group director/Service director validate that file. Fireman including following modules:'
          // Modal Data
        />

        <OurProjectCard
          Reverse
          to='/ourprojects/excellence'
          title='ERP Excellence'
          description='Excellence Mode is a chain of ready-to-wear stores in France, with several dozen locations throughout France. In order to develop its brand image and develop its online activity, the company wanted to have an e-commerce site.'
          src={ERP}
        />

        <OurProjectCard
          to='/ourprojects/wina'
          LogoSrc={Wina_Logo}
          DividerTheme='#C39B7E'
          src={Wina}
          title='Wina'
          description='Winaa is a job board, in the shape of a mobile and web application,  for connecting companies and apprentices. '
          // Modal Data
          para1='Winaa is a job board, in the shape of a mobile and web application,  for connecting companies and apprentices. '
          para2='A matching algorithm, based on several criteria, automatically calculates a percentage of compatibility between a student and a job offer.  The matching process is similarly done as with the Tinder application. '
          para3='Once the matching is done, a calendar allows the student to book an interview session with the company. '
          para4='The platform automatically retrieves (scrapes) all offers from reference websites in France, and add them to Winaa’s database. '
          para5='Companies have a full dashboard allowing them to manage their offers, see the potential matches and accept the interview sessions. '
        />
        <OurProjectCard
          Reverse
          LogoSrc={Tajweed_logo}
          DividerTheme='#007536'
          src={Tajweed}
          title='Tajweed'
          heading='Tajweed'
          description='Tajweed Made Easy is an application developed by Falcon IT.  Website and application based on Qura’an learning with proper Tajweed rules and Makharij.'
          // Modal Data
          para1='Tajweed Made Easy is an application developed by Falcon IT.  Website and application based on Qura’an learning with proper Tajweed rules and Makharij.'
          para2='•	User can signup and start learning Quran with Tajweed.'
          para3='•	Practice lessons are available.'
          para4='•	User can repeat the lesson at any time without an internet connection'
          para5='•	On the website, books are available in different languages which are the flagship publications of Tajweed Made Easy.'
        />

        <OurProjectCard
          to='/ourprojects/table'
          src={PizzaBoli}
          title='Table'
          description='MediaPipe offers cross-platform, customizable ML solutions for live and streaming media'
        />
        <OurProjectCard
          Reverse
          src={Toyota}
          title='Toyota'
          description='MediaPipe offers cross-platform, customizable ML solutions for live and streaming media'
        />

        <OurProjectCard
          LogoSrc={Desine_Logo}
          to='/ourprojects/designconfection'
          // ModalHeading="Design Confection Ethiques"
          DividerTheme='#CC8E9C'
          src={DesignConf}
          title='Design Confection Ethiques'
          description='A web app designed to help customers with customized stitching to receive your creation at your home. '
          // Modal Data
          para1='A web app designed to help customers with customized stitching to receive your creation at your home. '
          para2='User login to register and add information regarding customized dress like color combination, stuff design, etc.'
          para3='After registration, consumers post ads containing ideas and 100+creative designers send you the estimated costs.'
          para4='Choose your designer with 99% accuracy as design confection brings your ideas to life.'
        />
        <OurProjectCard
          Reverse
          title='Barber Shop'
          description='BarberShop is designed for the specific barber store. This is the connecting platform where the client can book their appointment through his mobile and the barber get clients booking without personal intensions. Client can easily book their appointment on the availability of barber. On the other hand Barber can easily get all the booking schedules or appointment details through his mobile app.'
          src={BarberShop}
          heading='Barber Shop'
          // Modal Data
          para1='BarberShop is designed for the specific barber store. This is the connecting platform where the client can book their appointment through his mobile and the barber get clients booking without personal intensions. Client can easily book their appointment on the availability of barber. On the other hand Barber can easily get all the booking schedules or appointment details through his mobile app.'
        />
        <OurProjectCard
          to='/ourprojects/realestate'
          LogoSrc={RealEstate_Logo}
          // ModalHeading="Real Estate"
          DividerTheme='#837C6B'
          RealEstate_Logo
          src={RealEstate}
          title='Real Estate'
          description='The goal is to allow investors to have transparency on investments they would be doing in real estate in Pakistan. For this, there are two main interfaces : a mobile application for the investors, and an admin panel, for the responsible of the company.'
        />

        <OurProjectCard
          Reverse
          src={BeautySalon}
          title='Beauty Salon'
          description='Beauty Salon & Spa is just like another world of FoodPanda where all the beauty salons are in one place. So girls can easily make appointments against any Salon through her mobile application. On the other hand Salons can get appointments through her Beauty Salon Account. Through this app we can find our favorite beauticians also nearby salons and can make appointments.'
          heading='Beauty Salon'
          para1='Beauty Salon & Spa is just like another world of FoodPanda where all the beauty salons are in one place. So girls can easily make appointments against any Salon through her mobile application. On the other hand Salons can get appointments through her Beauty Salon Account. Through this app we can find our favorite beauticians also nearby salons and can make appointments.'
        />

        <OurProjectCard
          title='Accor Hotels'
          description='Falcon Consulting has been asked by Accor for its expertise in .NET and SQL to maintain the tools related to the training courses and trainings.'
          src={AccorHotel}
          heading='Accor Hotels'
          para1='Falcon Consulting has been asked by Accor for its expertise in .NET and SQL to maintain the tools related to the training courses and trainings.'
          para2='OUR CONTRIBUTION'
          para3='• Collection and consolidation of business requests'
          para4='• Implementation of project developments and production quality control'
          para5='• Development in ASP.NET 3.5, Spring.NET and nHibernate to develop a tool for managing the invoicing of courses and trainings.'
          para6='• T-SQL development (generation of extracts, counters and data consistency checks)'
          para7='• rDevelopment to evolve invoices to the new SSRS format'
          para8='• Kettle-based batch development for import / export and data transformation'
        />
        <OurProjectCard
          Reverse
          src={Fnac}
          title='Fnac'
          heading='Fnac'
          description='Falcon Consulting has been asked by FNAC for its expertise in .NET and SQL to reinforce the project teams related to inventory, stocks, locations, label printing, customer orders.'
          para1='Falcon Consulting has been asked by FNAC for its expertise in .NET and SQL to reinforce the project teams related to inventory, stocks, locations, label printing, customer orders.'
          para2='OUR CONTRIBUTION'
          para3='• Collection and consolidation of business requests'
          para4='• Implementation of project developments and production quality control'
          para5='• Development in ASP.NET MVC 4 and Entity Framework 5 to develop a tool for managing store inventories (inventory management, location management, in-store label printing), unsold product returns, shipping and customer order remittances, use of EXT.NET modules with JavaScript / JQuery development to modernize this tool.'
          para6='• Development in C# Compact Framework 3.5 to upgrade the tool for managing store inventories, returns of unsold products, shipping and customer order remittances on PDAs used in the store by staff.'
          para7='• T-SQL development (generation of extracts, counters and data consistency checks, creation of stored procedures for the different projects, data archiving)'
          para8='• Development in ASP.NET 3.5 to upgrade a shipping management tool for live customer orders in Switzerland'
        />
        <OurProjectCard
          src={Microsoft}
          title='Microsoft'
          heading='Microsoft'
          description='Falcon Consulting has been asked by Microsoft for its expertise in .NET and reporting to implement product analysis tools for the media catalogs (music, video and ebooks) on the Windows Store using the latest Azure technologies.'
          para1='Falcon Consulting has been asked by Microsoft for its expertise in .NET and reporting to implement product analysis tools for the media catalogs (music, video and ebooks) on the Windows Store using the latest Azure technologies.'
          para2='OUR CONTRIBUTION'
          para3='• Implementation of project developments and production quality control'
          para4='• Development in U-SQL under Azure Data Lake Analytics of scripts for quality control of data from the ebook catalog with a library of classes containing the code behind the scripts in C# (generation of extracts, counters and data consistency checks, creation of stored procedures, archiving of data).'
          para5='• Migration of projects developed in Scope and SQL Server to Azure Data Lake Analytics and development in U-SQL under Azure of data quality control scripts from the video catalog with a library of classes containing the code behind the scripts in C# (generation of extracts, counters and data consistency checks, creation of stored procedures, archiving of data).'
        />

        <OurProjectCard
          Reverse
          src={Blsh}
          title='Blsh Delivery'
          description='We are building a marketplace for delivery supplies on the customer and small business demand.'
          heading='Blsh Delivery'
          // Modal Data
          para1='We are building a marketplace for delivery supplies on the customer and small business demand.'
          para2='The app will match the Customer delivery request with the Courier.'
          para3='The Individual shopper can use delivery regularly (weekly, monthly, etc). Or only when there is a need for the delivery.'
          para4='The app will offer market-based pricing. When the Individual shopper requests, he will offer the price he is willing to pay for delivery. All drivers who match his request will see the price. They will be able to accept the request or negotiate the delivery price.'
          para5='The app will be free for Customers. The Courier will pay 20% of the delivery price.'
        />
        <OurProjectCard
          src={Canon}
          title='Canon'
          heading='Canon'
          description='Falcon Consulting has been asked by Canon for its expertise in .NET and its ability to adapt to any business to set up several projects around EDM Therefore for their customers (several sectors of activity: banking, insurance, construction, aeronautics,...)'
          para1='Falcon Consulting has been asked by Canon for its expertise in .NET and its ability to adapt to any business to set up several projects around EDM Therefore for their customers (several sectors of activity: banking, insurance, construction, aeronautics,...)'
          para2='OUR CONTRIBUTION'
          para3='• Implementation of project developments and production quality control'
          para4='• Development in C# 4.6 of a component using the YouSign API for managing electronic signatures from workflows in Therefore'
          para5='• Development in C#, C# Core, ASP.NET, ASP.NET Core of several applications dedicated to Canon customers using Therefore API.'
          para6='• Creation and implementation of reports in PowerBI (visualization of extracts, formatting of counters and graphs for data consistency checking)'
          para7='• raining of various Canon customers in the use, management and administration of Therefore'
          para8='• Technical support around Therefore from different Canon customers'
        />

        {/* </>
        )}
        <Grid xs={12} className="BlogBtnGrid">
          <Button
            className="BlogBtn"
            variant="outlined"
            onClick={(e) => SetMoreProjects(!MoreProjects)}
          >
            {MoreProjects ? "Show less" : "See more"}
          </Button>
        </Grid> */}
      </TabPanel>
      <TabPanel value={value} index={3}>
        <OurProjectCard
          to='/ourprojects/orgaplan'
          Reverse
          LogoSrc={Orgaplan_Logo}
          DividerTheme='#DBB208'
          src={Orgaplan}
          title='OrgaPlan'
          description='Orgaplan is a complex and full platform allowing the logistic management of large construction sites, in very dense areas (such as Paris - La Défense, etc...). The platform is currently used in Vinci’s construction sites, in order to facilitate very challenging logistic activities.'
          // Modal Data
          para1='Orgaplan is a complex and full platform allowing the logistic management of large construction sites, in very dense areas (such as Paris - La Défense, etc...). The platform is currently used in Vinci’s construction sites, in order to facilitate very challenging logistic activities.'
          para2='Available in web and mobile version, with 5 types of users: Super admin / Admin / Company / Traffic agent / Buffer traffic agent. Each user has his own rights and functionalities, allowing an infinity of scenarios, as per the real situations on site. '
          para3='Possibility to create and draw the Site Installation Plan, as well as the buildings and storage areas. Possibility to create deliveries and monitor the general state of the site.'
          para4='Falcon Consulting is specialized in digital construction projects, and we helped our partner to finalize its specification in order to get the best User experience. '
        />
        <OurProjectCard
          LogoSrc={PP_logo}
          src={PermispopImg}
          title='Permispop'
          to='/ourprojects/permispop'
          description='Permispop is a web platform connecting students, independent driving teachers, and driving schools. Each type of user has a dedicated interface, allowing them to manage their activities efficiently. '
          // Modal Data
          para1='Permispop is a web platform connecting students, independent driving teachers, and driving schools. Each type of user has a dedicated interface, allowing them to manage their activities efficiently. '
          para2='The platform offers several features such as : '
          para3='- the possibility to search for an instructor with an interactive map, and book a session depending on his availability.'
          para4='- The booking feature allows the driving schools and instructors to have an overview of all the activities and manage them efficiently;'
          para5='- At the end of each session, the student can rate the instructor and provide feedback to the platform; '
          para6='- An internal messaging system;'
          para7='- A digital driving booklet, allowing the instructors to have an overview of the level of each student, and add any progress made. '
        />

        <OurProjectCard
          Reverse
          to='/ourprojects/excellence'
          title='ERP Excellence'
          description='Excellence Mode is a chain of ready-to-wear stores in France, with several dozen locations throughout France. In order to develop its brand image and develop its online activity, the company wanted to have an e-commerce site.'
          src={ERP}
        />

        {/* {MoreProjects && (
          <> */}
        <OurProjectCard
          to='/ourprojects/telehealthplatform'
          LogoSrc={Tele_logo}
          DividerTheme='#0F52BA'
          src={Movement}
          title='Movement detection for health providers'
          description='Telehealth platform (project name is confidential) is a US web and mobile application which allows physiotherapists to analyze the movements of their patients remotely. '
          // Modal Data
          para1='Telehealth platform (project name is confidential) is a US web and mobile application which allows physiotherapists to analyze the movements of their patients remotely. '
          para2='The patient is filmed performing different types of exercises, and the tool detects and calculates the angles of the patient body (such as his legs, arms, foot, waist, etc…). The program then analyzes the data based on internal rules, and deduces whether the movements are abnormal or not.'
          para3='The detection of the movements is done with the help of Mediapipe, and requires an advanced knowledge in terms of image processing in order to ensure a fluidity and accuracy of the final results.'
        />

        <OurProjectCard
          Reverse
          to='/ourprojects/tilt'
          LogoSrc={Tilt_Logo}
          DividerTheme='red'
          title='Tilt'
          description='Web and mobile platform connecting restaurants, corporate customers and delivery drivers for bulked meal deliveries in Martinique. This smart concept allows each customer to save on the delivery fees, as they are shared among everyone passing an order. '
          src={Tilt}
          // Modal Data
          para1='Web and mobile platform connecting restaurants, corporate customers and delivery drivers for bulked meal deliveries in Martinique. This smart concept allows each customer to save on the delivery fees, as they are shared among everyone passing an order.  '
          para2='The customers can order food with a ingenious system allowing mixed dishes among several restaurants in the same area. Then they get notified of the status of the order, and they can rate the overall experience. '
          para3='On the restaurant side, it is possible to create and manage a customized menu, see all the incoming orders, and change their status.'
          para4='On the delivery side, the application the dishes to be picked and delivered, with all the location information. The delivery driver automatically informs the users of the progress of the order, with push notifications. '
        />

        <OurProjectCard
          LogoSrc={Kidcab_Logo}
          DividerTheme='#0097A7'
          src={Kidcap}
          to='/ourprojects/kidcab'
          title='Kidcab'
          description='Kidcab is a mobile application aiming to help parents find drivers for their children’s activities, and safely monitor their location. For our partner, we developed two mobile application and a Ride Management web application. '
          // Modal Data
          para1='Kidcab is a mobile application aiming to help parents find drivers for their children’s activities, and safely monitor their location. For our partner, we developed two mobile application and a Ride Management web application. '
          para2='The Driver mobile application allow them to receive ride offers and see an overview of the upcoming and past activities. When being on a ride, the application is having similar features as Uber. '
          para3='The Parents mobile application shows the live location of the driver, and allows to monitor all the past and upcoming rides. '
          para4='Finally, the Ride Management website is intended for Kidcab administrator to create, manage and assign efficiently the activities of the company. An in-app quote and invoice management tool has also been created. '
          para5='This project required to work carefully on the code optimization, and especially all the API calls in order to minimize the operation costs. '
        />
        <OurProjectCard
          Reverse
          LogoSrc={Tajweed_logo}
          DividerTheme='#007536'
          heading='Tajweed'
          src={Tajweed}
          title='Tajweed'
          description='Tajweed Made Easy is an application developed by Falcon IT.  Website and application based on Qura’an learning with proper Tajweed rules and Makharij.'
          // Modal Data
          para1='Tajweed Made Easy is an application developed by Falcon IT.  Website and application based on Qura’an learning with proper Tajweed rules and Makharij.'
          para2='•	User can signup and start learning Quran with Tajweed.'
          para3='•	Practice lessons are available.'
          para4='•	User can repeat the lesson at any time without an internet connection'
          para5='•	On the website, books are available in different languages which are the flagship publications of Tajweed Made Easy.'
        />
        <OurProjectCard
          src={RealEstate}
          to='/ourprojects/realestate'
          title='Real Estate'
          description='The goal is to allow investors to have transparency on investments they would be doing in real estate in Pakistan. For this, there are two main interfaces : a mobile application for the investors, and an admin panel, for the responsible of the company.'
        />

        <OurProjectCard
          Reverse
          src={BeautySalon}
          title='Beauty Salon'
          description='Beauty Salon & Spa is just like another world of FoodPanda where all the beauty salons are in one place. So girls can easily make appointments against any Salon through her mobile application. On the other hand Salons can get appointments through her Beauty Salon Account. Through this app we can find our favorite beauticians also nearby salons and can make appointments.'
          heading='Beauty Salon'
          para1='Beauty Salon & Spa is just like another world of FoodPanda where all the beauty salons are in one place. So girls can easily make appointments against any Salon through her mobile application. On the other hand Salons can get appointments through her Beauty Salon Account. Through this app we can find our favorite beauticians also nearby salons and can make appointments.'
        />

        <OurProjectCard
          src={PizzaBoli}
          title='Pizza Boli'
          description='MediaPipe offers cross-platform, customizable ML solutions for live and streaming media'
        />

        <OurProjectCard
          Reverse
          title='Barber Shop'
          description='BarberShop is designed for the specific barber store. This is the connecting platform where the client can book their appointment through his mobile and the barber get clients booking without personal intensions. Client can easily book their appointment on the availability of barber. On the other hand Barber can easily get all the booking schedules or appointment details through his mobile app.'
          src={BarberShop}
        />
        <OurProjectCard
          src={Blsh}
          title='Blsh Delivery'
          description='We are building a marketplace for delivery supplies on the customer and small business demand.'
          heading='Blsh Delivery'
          // Modal Data
          para1='We are building a marketplace for delivery supplies on the customer and small business demand.'
          para2='The app will match the Customer delivery request with the Courier.'
          para3='The Individual shopper can use delivery regularly (weekly, monthly, etc). Or only when there is a need for the delivery.'
          para4='The app will offer market-based pricing. When the Individual shopper requests, he will offer the price he is willing to pay for delivery. All drivers who match his request will see the price. They will be able to accept the request or negotiate the delivery price.'
          para5='The app will be free for Customers. The Courier will pay 20% of the delivery price.'
        />

        {/* </>
        )}
        <Grid xs={12} className="BlogBtnGrid">
          <Button
            className="BlogBtn"
            variant="outlined"
            onClick={(e) => SetMoreProjects(!MoreProjects)}
          >
            {MoreProjects ? "Show less" : "See more"}
          </Button>
        </Grid> */}
      </TabPanel>
      <TabPanel value={value} index={4}>
        <OurProjectCard
          Reverse
          to='/ourprojects/telehealthplatform'
          LogoSrc={Tele_logo}
          DividerTheme='#0F52BA'
          src={Movement}
          title='Movement detection for health providers'
          description='Telehealth platform (project name is confidential) is a US web and mobile application which allows physiotherapists to analyze the movements of their patients remotely. '
          // Modal Data
          para1='Telehealth platform (project name is confidential) is a US web and mobile application which allows physiotherapists to analyze the movements of their patients remotely. '
          para2='The patient is filmed performing different types of exercises, and the tool detects and calculates the angles of the patient body (such as his legs, arms, foot, waist, etc…). The program then analyzes the data based on internal rules, and deduces whether the movements are abnormal or not.'
          para3='The detection of the movements is done with the help of Mediapipe, and requires an advanced knowledge in terms of image processing in order to ensure a fluidity and accuracy of the final results.'
        />
        <OurProjectCard
          LogoSrc={PP_logo}
          src={PermispopImg}
          to='/ourprojects/permispop'
          title='Permispop'
          description='Permispop is a web platform connecting students, independent driving teachers, and driving schools. Each type of user has a dedicated interface, allowing them to manage their activities efficiently. '
          // Modal Data
          para1='Permispop is a web platform connecting students, independent driving teachers, and driving schools. Each type of user has a dedicated interface, allowing them to manage their activities efficiently. '
          para2='The platform offers several features such as : '
          para3='- the possibility to search for an instructor with an interactive map, and book a session depending on his availability.'
          para4='- The booking feature allows the driving schools and instructors to have an overview of all the activities and manage them efficiently;'
          para5='- At the end of each session, the student can rate the instructor and provide feedback to the platform; '
          para6='- An internal messaging system;'
          para7='- A digital driving booklet, allowing the instructors to have an overview of the level of each student, and add any progress made. '
        />

        <OurProjectCard
          Reverse
          to='/ourprojects/ezbox'
          LogoSrc={EZBox_Logo}
          DividerTheme='blue'
          title='EZbox'
          description='EZBox media is a platform providing different services '
          src={EZbox}
          // Modal Data
          para1='EZBox media is a platform providing different services including'
          para2='Advertising: '
          para3='•	Advertising by understanding how a user can react to the advertisement shown to them.'
          para4='•	Target ads based on non-personal criteria.'
          para5='Product development: '
          para6='•	EZBox media helps Product development for the next generation products with the wide variety of technologies available today.'
          para7='Chromium Browser: '
          para8='•	EZBoxmedia worked with leading consumer electronics manufacturers to design and provide turnkey solutions. '
        />

        <OurProjectCard
          LogoSrc={Quadra_Logo}
          DividerTheme='#7A7A7A'
          src={Quadra}
          to='/ourprojects/quadrabase'
          title='Quadrabase'
          description='Quadrabase is a web platform allowing engineering offices to automatically generate tender documents in the construction industry: Project Specification, Project Cost Estimate, Project bidding template. The platform has a well structured and multi-level database, allowing to include the most pertinent data for each specific project, based on the project details.'
          // Modal Data
          para1='Quadrabase is a web platform allowing engineering offices to automatically generate tender documents in the construction industry: Project Specification, Project Cost Estimate, Project bidding template. The platform has a well structured and multi-level database, allowing to include the most pertinent data for each specific project, based on the project details.'
          para2='Our client being a project manager with more than 30 years of experience in the field, we had to show a great capacity of adaptation to correctly apprehend the project, and understand all the technical aspects. '
          para3='This project is ambitious and aims to revolutionize the approach to design in the field of construction in France. '
        />
        {/* {MoreProjects && (
          <> */}
        <OurProjectCard
          Reverse
          src={BeautySalon}
          title='Beauty Salon'
          description='Beauty Salon & Spa is just like another world of FoodPanda where all the beauty salons are in one place. So girls can easily make appointments against any Salon through her mobile application. On the other hand Salons can get appointments through her Beauty Salon Account. Through this app we can find our favorite beauticians also nearby salons and can make appointments.'
          heading='Beauty Salon'
          para1='Beauty Salon & Spa is just like another world of FoodPanda where all the beauty salons are in one place. So girls can easily make appointments against any Salon through her mobile application. On the other hand Salons can get appointments through her Beauty Salon Account. Through this app we can find our favorite beauticians also nearby salons and can make appointments.'
        />

        <OurProjectCard
          LogoSrc={Kidcab_Logo}
          DividerTheme='#0097A7'
          src={Kidcap}
          to='/ourprojects/kidcab'
          title='Kidcab'
          description='Kidcab is a mobile application aiming to help parents find drivers for their children’s activities, and safely monitor their location. For our partner, we developed two mobile application and a Ride Management web application. '
          // Modal Data
          para1='Kidcab is a mobile application aiming to help parents find drivers for their children’s activities, and safely monitor their location. For our partner, we developed two mobile application and a Ride Management web application. '
          para2='The Driver mobile application allow them to receive ride offers and see an overview of the upcoming and past activities. When being on a ride, the application is having similar features as Uber. '
          para3='The Parents mobile application shows the live location of the driver, and allows to monitor all the past and upcoming rides. '
          para4='Finally, the Ride Management website is intended for Kidcab administrator to create, manage and assign efficiently the activities of the company. An in-app quote and invoice management tool has also been created. '
          para5='This project required to work carefully on the code optimization, and especially all the API calls in order to minimize the operation costs. '
        />
        <OurProjectCard
          Reverse
          title='Barber Shop'
          description='BarberShop is designed for the specific barber store. This is the connecting platform where the client can book their appointment through his mobile and the barber get clients booking without personal intensions. Client can easily book their appointment on the availability of barber. On the other hand Barber can easily get all the booking schedules or appointment details through his mobile app.'
          src={BarberShop}
        />
        <OurProjectCard
          src={RealEstate}
          to='/ourprojects/realestate'
          title='Real Estate'
          description='The goal is to allow investors to have transparency on investments they would be doing in real estate in Pakistan. For this, there are two main interfaces : a mobile application for the investors, and an admin panel, for the responsible of the company.'
        />
        <OurProjectCard
          Reverse
          src={Blsh}
          title='Blsh Delivery'
          description='We are building a marketplace for delivery supplies on the customer and small business demand.'
          heading='Blsh Delivery'
          // Modal Data
          para1='We are building a marketplace for delivery supplies on the customer and small business demand.'
          para2='The app will match the Customer delivery request with the Courier.'
          para3='The Individual shopper can use delivery regularly (weekly, monthly, etc). Or only when there is a need for the delivery.'
          para4='The app will offer market-based pricing. When the Individual shopper requests, he will offer the price he is willing to pay for delivery. All drivers who match his request will see the price. They will be able to accept the request or negotiate the delivery price.'
          para5='The app will be free for Customers. The Courier will pay 20% of the delivery price.'
        />

        <OurProjectCard
          to='/ourprojects/designconfection'
          src={DesignConf}
          title='Design Confection Ethiques'
          description='A web app designed to help customers with customized stitching to receive your creation at your home. '
          // Modal Data
          para1='A web app designed to help customers with customized stitching to receive your creation at your home. '
          para2='User login to register and add information regarding customized dress like color combination, stuff design, etc.'
          para3='After registration, consumers post ads containing ideas and 100+creative designers send you the estimated costs.'
          para4='Choose your designer with 99% accuracy as design confection brings your ideas to life.'
        />

        <OurProjectCard
          Reverse
          LogoSrc={Tajweed_logo}
          DividerTheme='#007536'
          src={Tajweed}
          heading='Tajweed'
          title='Tajweed'
          description='Tajweed Made Easy is an application developed by Falcon IT.  Website and application based on Qura’an learning with proper Tajweed rules and Makharij.'
          // Modal Data
          para1='Tajweed Made Easy is an application developed by Falcon IT.  Website and application based on Qura’an learning with proper Tajweed rules and Makharij.'
          para2='•	User can signup and start learning Quran with Tajweed.'
          para3='•	Practice lessons are available.'
          para4='•	User can repeat the lesson at any time without an internet connection'
          para5='•	On the website, books are available in different languages which are the flagship publications of Tajweed Made Easy.'
        />
        {/* </>
        )}
        <Grid xs={12} className="BlogBtnGrid">
          <Button
            className="BlogBtn"
            variant="outlined"
            onClick={(e) => SetMoreProjects(!MoreProjects)}
          >
            {MoreProjects ? "Show less" : "See more"}
          </Button>
        </Grid> */}
      </TabPanel>
      <TabPanel value={value} index={5}>
        <OurProjectCard
          Reverse
          src={Toyota}
          title='Toyota'
          description='MediaPipe offers cross-platform, customizable ML solutions for live and streaming media'
        />
        <OurProjectCard
          title='Accor Hotels'
          description='Falcon Consulting has been asked by Accor for its expertise in .NET and SQL to maintain the tools related to the training courses and trainings.'
          src={AccorHotel}
          heading='Accor Hotels'
          para1='Falcon Consulting has been asked by Accor for its expertise in .NET and SQL to maintain the tools related to the training courses and trainings.'
          para2='OUR CONTRIBUTION'
          para3='• Collection and consolidation of business requests'
          para4='• Implementation of project developments and production quality control'
          para5='• Development in ASP.NET 3.5, Spring.NET and nHibernate to develop a tool for managing the invoicing of courses and trainings.'
          para6='• T-SQL development (generation of extracts, counters and data consistency checks)'
          para7='• rDevelopment to evolve invoices to the new SSRS format'
          para8='• Kettle-based batch development for import / export and data transformation'
        />
      </TabPanel>
    </Box>
  );
}
