import React from 'react';
import SectionHeader from './SectionHeader';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { motion } from 'framer-motion';
import LatestProjectsCard from './LatestProjectCard';
import { ReactComponent as Timer } from '../../assets/images/timer.svg';
import { ReactComponent as MedKit } from '../../assets/images/medkit.svg';
import { ReactComponent as Award } from '../../assets/images/award.svg';
import { useTranslation } from 'react-i18next';
import Fab from '@mui/material/Fab';
import { ReactComponent as LeftArrow } from '../../assets/images/left_arrow_btn.svg';
import { ReactComponent as RightArrow } from '../../assets/images/right_arrow_btn.svg';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
    slidesToSlide: 5, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1.5,
    slidesToSlide: 1, // optional, default to 1.
  },
};

export default function LatestProjects(props) {
  const { t } = useTranslation();

  const ButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
    const {
      carouselState: { currentSlide },
    } = rest;
    return (
      <div className='carousel-button-group'>
        <Fab
          className='CarouselLeftArrow'
          onClick={() => {
            goToSlide(currentSlide - 1);
          }}
        >
          <LeftArrow />
        </Fab>
        <Fab
          className='CarouselRightArrow'
          onClick={() => {
            if (window.innerWidth > 1024) {
              goToSlide(currentSlide + 3);
            } else if (window.innerWidth > 464) {
              goToSlide(currentSlide + 2);
            } else {
              goToSlide(currentSlide + 1);
            }
          }}
        >
          <RightArrow />
        </Fab>
      </div>
    );
  };

  return (
    <>
      <div className='LatestProjectDiv'>
        <SectionHeader
          width='30%'
          h1='EACH PROJECT IS A NEW CHALLENGE'
          h2='Latest Projects'
          // decription="This sounds simple, but it is beneficial to your business success."
        />

        <motion.div
          initial={{ x: 300, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: true }}
          className='LatestProjectsSlider'
        >
          <Carousel
            className='SliderDiv'
            autoPlay={true}
            responsive={responsive}
            transitionDuration={10}
            slidesToSlide={1}
            renderArrowNext={true}
            infinite={true}
            arrows={false}
            customButtonGroup={<ButtonGroup />}
          >
            <LatestProjectsCard
              hoverDesp={t(
                'Orgaplan is a complex and full platform allowing the logistic management of large construction sites, in very dense areas (such as Paris - La Défense, etc...). The platform is currently used in Vinci’s construction sites, in order to facilitate very challenging logistic activities.'
              )}
              src={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/orgaplan_lp.png`}
              LogoSrc={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/orgaplan_logo.svg`}
              to='/ourprojects/orgaplan'
              DividerTheme='#3399FE'
              // btnBackground="#3399FE"
              heading='Orgaplan'
            />
            <LatestProjectsCard
              hoverDesp={t(
                'Orientator is a web application that allows high school students to make their best career choice, after filling out an online and customized questionnaire.'
              )}
              src={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/orientator_lp.png`}
              LogoSrc={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/orientator_logo_lp.png`}
              to='/ourprojects/orientator'
              DividerTheme='#3399FE'
              // btnBackground="#3399FE"
              Heading='Orientator'
            />
            <LatestProjectsCard
              hoverDesp={t(
                'This system offers complete functionality to manage staff, documents related to them and their status. One can also manage the Risk assessment documents of the Company. This application is capable of managing multiple Companies, their branches and Employee along with the transfer of employee from one branch to another.'
              )}
              src={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/register_lp.png`}
              LogoSrc={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/rr_logo_lp.svg`}
              to='/ourprojects/registerrh'
              DividerTheme='#3399FE'
              // btnBackground="#3399FE"
              Heading='Registre RH'
            />
            <LatestProjectsCard
              hoverDesp={t(
                'Telehealth platform (project name is confidential) is a US web and mobile application which allows physiotherapists to analyze the movements of their patients remotely.'
              )}
              src={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/tele_lp.png`}
              LogoSrc={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/tele_logo.svg`}
              to='/ourprojects/telehealthplatform'
              DividerTheme='#3399FE'
              // btnBackground="#3399FE"
              Heading='Tele Health'
            />
            <LatestProjectsCard
              hoverDesp={t('ZypZap is a gaming platform by Falcon IT.')}
              src={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/zypzap_lp.png`}
              LogoSrc={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/zypzap_Logo.svg`}
              to='/ourprojects/zypzap'
              DividerTheme='#3399FE'
              // btnBackground="#3399FE"
              heading='Zypzap'
            />
            <LatestProjectsCard
              hoverDesp={t(
                'Permispop is a web platform connecting students, independent driving teachers, and driving schools. Each type of user has a dedicated interface, allowing them to manage their activities efficiently.'
              )}
              src={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/permispop.png`}
              LogoSrc={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/pp_logo_lp.svg`}
              DividerTheme='#11A283'
              // btnBackground="#11A283"
              Heading='Permispop'
              to='/ourprojects/permispop'
            />
            <LatestProjectsCard
              hoverDesp={t(
                'Quadrabase is a web platform allowing engineering offices to automatically generate tender documents in the construction industry: Project Specification, Project Cost Estimate, Project bidding template. The platform has a well structured and multi-level database, allowing to include the most pertinent data for each specific project, based on the project details.'
              )}
              src={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/quadrabase.svg`}
              LogoSrc={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/qb_lp_logo.svg`}
              to='/ourprojects/quadrabase'
              DividerTheme='#FF8616'
              // btnBackground="#FF8616"
              Heading='Quadrabase'
            />

            <LatestProjectsCard
              hoverDesp={t(
                "Yuwway is a search engine that compares fares for all types of transport (Taxi/VTC/Moto-taxi, etc.) allowing, in a simple search, to access all the fares available and corresponding to the customer's needs."
              )}
              src={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/yuwway_lp.png`}
              LogoSrc={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/yuwway_logo_lp.png`}
              to='/ourprojects/yuwway'
              DividerTheme='#3399FE'
              // btnBackground="#3399FE"
              heading='Yuwway'
            />
            <LatestProjectsCard
              hoverDesp={t(
                'Marriage app connecting user and vendors Platform to connect  users with wedding vendors, The people who wanted to get married can easily find vendors for their wedding. The User and vendors can communicate through App. The user and vendor have send and receive quotes then validate quotes on App.'
              )}
              src={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/sindoor_lp.png`}
              LogoSrc={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/sindoor_logo_lp.png`}
              to='/ourprojects/sindoor'
              DividerTheme='#3399FE'
              // btnBackground="#3399FE"
              heading='Sindoor'
            />
            <LatestProjectsCard
              hoverDesp={t(
                'A web app designed to help customers with customized stitching to receive your creation at your home.'
              )}
              src={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/desine.png`}
              LogoSrc={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/desineLogo.png`}
              to='/ourprojects/designconfection'
              DividerTheme='#CC8E9C'
              // btnBackground="#CC8E9C"
              Heading='Design Confection'
            />
            <LatestProjectsCard
              hoverDesp={t(
                'The goal is to allow investors to have transparency on investments they would be doing in real estate in Pakistan. For this, there are two main interfaces : a mobile application for the investors, and an admin panel, for the responsible of the company.'
              )}
              src={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/realEstate.png`}
              LogoSrc={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/realestateLogo.png`}
              to='/ourprojects/realestate'
              DividerTheme='#837C6B'
              // btnBackground="#837C6B"
              Heading='Real Estate'
            />
            <LatestProjectsCard
              // HoverDetailLite
              hoverDesp={t(
                'Kidcab is a mobile application aiming to help parents find drivers for their children’s activities, and safely monitor their location. For our partner, we developed two mobile application and a Ride Management web application.'
              )}
              src={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/kidcab.svg`}
              LogoSrc={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/kidcabLogo.png`}
              // btnBackground="#47B9B4"
              to='/ourprojects/kidcab'
            />

            <LatestProjectsCard
              hoverDesp={t('EZBox media is a platform providing different services')}
              src={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/ezBox.png`}
              LogoSrc={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/ezBoxLogo.png`}
              to='/ourprojects/ezbox'
              DividerTheme='#3399FE'
              // btnBackground="#3399FE"
              Heading='Box Media'
            />
            <LatestProjectsCard
              hoverDesp={t(
                'This is the platform for management of office building. It is similar to Trello-like Dashboard, showing the tickets and their status.'
              )}
              src={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/facility_lp.png`}
              LogoSrc={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/facility_logo_lp.svg`}
              to='/ourprojects/facilitymanagement'
              DividerTheme='#3399FE'
              // btnBackground="#3399FE"
              heading='Facility Management'
            />

            <LatestProjectsCard
              hoverDesp={t(
                'Excellence Mode is a chain of ready-to-wear stores in France, with several dozen locations throughout France. In order to develop its brand image and develop its online activity, the company wanted to have an e-commerce site.'
              )}
              src={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/excellence_lp.png`}
              LogoSrc={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/excellence_logo_lp.svg`}
              to='/ourprojects/excellence'
              DividerTheme='#3399FE'
              // btnBackground="#3399FE"
              Heading='Excellence'
            />
            <LatestProjectsCard
              src={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/fnac_lp.png`}
              LogoSrc={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/fnaclogo.png`}
              // to='/ourprojects/ezbox'
              DividerTheme='#3399FE'
              // btnBackground="#3399FE"
              heading='Fnac'
              hoverDesp={t(
                'Falcon Consulting has been asked by FNAC for its expertise in .NET and SQL to reinforce the project teams related to inventory, stocks, locations, label printing, customer orders.'
              )}
              para1='Falcon Consulting has been asked by FNAC for its expertise in .NET and SQL to reinforce the project teams related to inventory, stocks, locations, label printing, customer orders.'
              para2='OUR CONTRIBUTION'
              para3='• Collection and consolidation of business requests'
              para4='• Implementation of project developments and production quality control'
              para5='• Development in ASP.NET MVC 4 and Entity Framework 5 to develop a tool for managing store inventories (inventory management, location management, in-store label printing), unsold product returns, shipping and customer order remittances, use of EXT.NET modules with JavaScript / JQuery development to modernize this tool.'
              para6='• Development in C# Compact Framework 3.5 to upgrade the tool for managing store inventories, returns of unsold products, shipping and customer order remittances on PDAs used in the store by staff.'
              para7='• T-SQL development (generation of extracts, counters and data consistency checks, creation of stored procedures for the different projects, data archiving)'
            />
            <LatestProjectsCard
              hoverDesp={t(
                'Fireman is the management and report generating system for fire fighters. The safety committees visit establishments open to the public and advise the mayor for business continuity. Each visit or study gives rise to a report. Fire fighters create/modify file according to visit or study category. Group director/Service director validate that file. Fireman including following modules:'
              )}
              src={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/fireman_lp.png`}
              LogoSrc={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/fireman_logo_lp.png`}
              to='/ourprojects/fireman'
              DividerTheme='#3399FE'
              // btnBackground="#3399FE"
              Heading='Fireman'
            />
            {/* <LatestProjectsCard
              hoverDesp='Toyota'
              src={Toyota}
              // to='/ourprojects/ezbox'
              DividerTheme='#3399FE'
              // btnBackground="#3399FE"
              Heading='Yuwway'
              LogoSrc={Toyota_Logo}
            /> */}
            <LatestProjectsCard
              src={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/canon_lp.png`}
              LogoSrc={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/canonlogo.png`}
              // to='/ourprojects/ezbox'
              DividerTheme='#3399FE'
              // btnBackground="#3399FE"
              heading='Canon'
              hoverDesp={t(
                'Falcon Consulting has been asked by Canon for its expertise in .NET and its ability to adapt to any business to set up several projects around EDM Therefore for their customers (several sectors of activity: banking, insurance, construction, aeronautics,...)'
              )}
              para1='Falcon Consulting has been asked by Canon for its expertise in .NET and its ability to adapt to any business to set up several projects around EDM Therefore for their customers (several sectors of activity: banking, insurance, construction, aeronautics,...)'
              para2='OUR CONTRIBUTION'
              para3='• Implementation of project developments and production quality control'
              para4='• Development in C# 4.6 of a component using the YouSign API for managing electronic signatures from workflows in Therefore'
              para5='• Development in C#, C# Core, ASP.NET, ASP.NET Core of several applications dedicated to Canon customers using Therefore API.'
              para6='• Creation and implementation of reports in PowerBI (visualization of extracts, formatting of counters and graphs for data consistency checking)'
              para7='• raining of various Canon customers in the use, management and administration of Therefore'
              para8='• Technical support around Therefore from different Canon customers'
            />

            <LatestProjectsCard
              src={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/accor_lp.png`}
              LogoSrc={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/accorlogo.png`}
              // to='/ourprojects/ezbox'
              DividerTheme='#3399FE'
              // btnBackground="#3399FE"
              hoverDesp={t(
                'Falcon Consulting has been asked by Accor for its expertise in .NET and SQL to maintain the tools related to the training courses and trainings.'
              )}
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
            <LatestProjectsCard
              hoverDesp={t(
                'Winaa is a job board, in the shape of a mobile and web application,  for connecting companies and apprentices. '
              )}
              src={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/wina_lp.png`}
              LogoSrc={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/wina_logo_lp.svg`}
              to='/ourprojects/wina'
              DividerTheme='#3399FE'
              // btnBackground="#3399FE"
              heading='Winaa'
            />

            <LatestProjectsCard
              hoverDesp={t(
                'Web and mobile platform connecting restaurants, corporate customers and delivery drivers for bulked meal deliveries in Martinique. This smart concept allows each customer to save on the delivery fees, as they are shared among everyone passing an order.'
              )}
              src={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/tilt_lp.png`}
              LogoSrc={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/tilt_logo.png`}
              to='/ourprojects/tilt'
              DividerTheme='#3399FE'
              // btnBackground="#3399FE"
              Heading='Tilt'
            />
            {/* <LatestProjectsCard
              src={Blsh}
              // to='/ourprojects/ezbox'
              DividerTheme='#3399FE'
              // btnBackground="#3399FE"
              LogoSrc={BlshLogo}
              hoverDesp={t(
                'We are building a marketplace for delivery supplies on the customer and small business demand.'
              )}
              heading='Blsh Delivery'
              // Modal Data
              para1='We are building a marketplace for delivery supplies on the customer and small business demand.'
              para2='The app will match the Customer delivery request with the Courier.'
              para3='The Individual shopper can use delivery regularly (weekly, monthly, etc). Or only when there is a need for the delivery.'
              para4='The app will offer market-based pricing. When the Individual shopper requests, he will offer the price he is willing to pay for delivery. All drivers who match his request will see the price. They will be able to accept the request or negotiate the delivery price.'
              para5='The app will be free for Customers. The Courier will pay 20% of the delivery price.'
            /> */}

            <LatestProjectsCard
              // hoverDesp='Tajweed'
              src={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/tajweed_lp.png`}
              LogoSrc={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/tajweed_logo_lp.svg`}
              ModalLogo={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/tajweed_logo.svg`}
              // to='/ourprojects/ezbox'
              DividerTheme='#3399FE'
              // btnBackground="#3399FE"
              // DividerTheme='#007536'
              heading='Tajweed'
              title='Tajweed'
              hoverDesp={t(
                'Tajweed Made Easy is an application developed by Falcon IT.  Website and application based on Qura’an learning with proper Tajweed rules and Makharij.'
              )}
              // Modal Data
              para1='Tajweed Made Easy is an application developed by Falcon IT.  Website and application based on Qura’an learning with proper Tajweed rules and Makharij.'
              para2='•	User can signup and start learning Quran with Tajweed.'
              para3='•	Practice lessons are available.'
              para4='•	User can repeat the lesson at any time without an internet connection'
              para5='•	On the website, books are available in different languages which are the flagship publications of Tajweed Made Easy.'
            />
            {/* <LatestProjectsCard
              src={Beauty}
              // to='/ourprojects/ezbox'
              DividerTheme='#3399FE'
              // btnBackground="#3399FE"
              LogoSrc={BeautyLogo}
              hoverDesp={t(
                'Beauty Salon & Spa is just like another world of FoodPanda where all the beauty salons are in one place. So girls can easily make appointments against any Salon through her mobile application. On the other hand Salons can get appointments through her Beauty Salon Account. Through this app we can find our favorite beauticians also nearby salons and can make appointments.'
              )}
              heading='Beauty Salon'
              para1='Beauty Salon & Spa is just like another world of FoodPanda where all the beauty salons are in one place. So girls can easily make appointments against any Salon through her mobile application. On the other hand Salons can get appointments through her Beauty Salon Account. Through this app we can find our favorite beauticians also nearby salons and can make appointments.'
            /> */}
            <LatestProjectsCard
              src={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/microsoft_lp.png`}
              LogoSrc={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/microsoft_logo_lp.png`}
              // to='/ourprojects/ezbox'
              DividerTheme='#3399FE'
              // btnBackground="#3399FE"
              heading='Microsoft'
              hoverDesp={t(
                'Falcon Consulting has been asked by Microsoft for its expertise in .NET and reporting to implement product analysis tools for the media catalogs (music, video and ebooks) on the Windows Store using the latest Azure technologies.'
              )}
              para1='Falcon Consulting has been asked by Microsoft for its expertise in .NET and reporting to implement product analysis tools for the media catalogs (music, video and ebooks) on the Windows Store using the latest Azure technologies.'
              para2='OUR CONTRIBUTION'
              para3='• Implementation of project developments and production quality control'
              para4='• Development in U-SQL under Azure Data Lake Analytics of scripts for quality control of data from the ebook catalog with a library of classes containing the code behind the scripts in C# (generation of extracts, counters and data consistency checks, creation of stored procedures, archiving of data).'
              para5='• Migration of projects developed in Scope and SQL Server to Azure Data Lake Analytics and development in U-SQL under Azure of data quality control scripts from the video catalog with a library of classes containing the code behind the scripts in C# (generation of extracts, counters and data consistency checks, creation of stored procedures, archiving of data).'
            />

            <LatestProjectsCard
              hoverDesp={t(
                'This project consists of two apps one is for the restaurant and other is for the end user.'
              )}
              src={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/table_lp.png`}
              LogoSrc={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/table_logo_lp.png`}
              to='/ourprojects/table'
              DividerTheme='#3399FE'
              // btnBackground="#3399FE"
              Heading='Table'
            />
            {/* <LatestProjectsCard
              hoverDesp={t(
                'BarberShop is designed for the specific barber store. This is the connecting platform where the client can book their appointment through his mobile and the barber get clients booking without personal intensions. Client can easily book their appointment on the availability of barber. On the other hand Barber can easily get all the booking schedules or appointment details through his mobile app.'
              )}
              para1='BarberShop is designed for the specific barber store. This is the connecting platform where the client can book their appointment through his mobile and the barber get clients booking without personal intensions. Client can easily book their appointment on the availability of barber. On the other hand Barber can easily get all the booking schedules or appointment details through his mobile app.'
              src={Barber}
              // to='/ourprojects/table'
              DividerTheme='#3399FE'
              // btnBackground="#3399FE"
              Heading='Barber Shop'
              LogoSrc={BarberLogo}
            /> */}
          </Carousel>
        </motion.div>
        {props.ProjectsSummary && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className='ProjectsCompletedDiv'
          >
            <div className='About_InfoLeft' style={{ position: 'relative' }}>
              <Timer className='ProjectsCompleted_Timer' />
              <h2 className='ProjectsCompleted_Num' sx={{ fontWeight: '700' }}>
                8+
              </h2>
              <h2 className='ProjectsCompleted_H'>{t('Years of Excellence')}</h2>
            </div>
            <div className='About_InfoCenter' style={{ position: 'relative' }}>
              <MedKit className='ProjectsCompleted_MedKit' />
              <h2 className='ProjectsCompleted_Num' sx={{ fontWeight: '700' }}>
                85+
              </h2>
              <h2 className='ProjectsCompleted_H'>{t('Project Completed')}</h2>
            </div>
            <div className='About_InfoRight' style={{ position: 'relative' }}>
              <Award className='ProjectsCompleted_Award' />
              <h2 className='ProjectsCompleted_Num' sx={{ fontWeight: '700' }}>
                60+
              </h2>
              <h2 className='ProjectsCompleted_H'>{t('Clients Satisfied')}</h2>
            </div>
          </motion.div>
        )}
      </div>
    </>
  );
}
