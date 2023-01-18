// Init
import { Grid } from '@mui/material';
import React, { useState, useEffect } from 'react';
// Importing Components
import { Divider } from '@mui/material';
import { useTranslation } from 'react-i18next';
import MoreProjectCards from '../Common/MoreProjectCards';
import {
  EducationType,
  ConstructionType,
  HumanResourcesType,
  FoodType,
  TransportType,
  FashionType,
  BusinessType,
  GamingType
} from '../../utils/ProjectsData';
// Home Component

export default function DetailMoreProjects(props) {
  const { t } = useTranslation();
  const [desp, setDesp] = useState();
  const menuRoute = window.location.pathname;

  useEffect(() => {
    setDesp(t(props?.desp));
  }, [props?.desp]);

  return (
    <>
      <div style={{ margin: '10% 0' }}>
        <div className="DetailMoreProjects_SectionHeaderDiv">
          <h2 className="DetailMoreProjects_SectionHeader_H1">
            {t('EACH PROJECT IS A NEW OPPORTUNITY')}
          </h2>
          <Divider className="DetailMoreProjects_SectionHeader_Divider" />
          <h1 className="DetailMoreProjects_SectionHeader_H2">{t('More Projects')}</h1>
        </div>
        <div className="DetailMoreProjects_MainDiv">
          {menuRoute === '/ourprojects/fireman' ||
          menuRoute === '/ourprojects/realestate' ||
          menuRoute === '/ourprojects/quadrabase' ||
          menuRoute === '/ourprojects/orgaplan' ? (
            <Grid container spacing={1} className="DetailMoreProjects_ContainerGrid">
              {EducationType.map(item => {
                return (
                  <Grid sm={10} md={3.5} className="DetailMoreProjects_Grid">
                    <MoreProjectCards
                      to={item.to}
                      title={item.title}
                      image={item.image}
                      desp={t(item.desp)}
                    />
                  </Grid>
                );
              })}
            </Grid>
          ) : (
            ''
          )}
          {menuRoute === '/ourprojects/wina' ||
          menuRoute === '/ourprojects/orientator' ||
          menuRoute === '/ourprojects/permispop' ? (
            <Grid container spacing={1} className="DetailMoreProjects_ContainerGrid">
              {ConstructionType.map(item => {
                return (
                  <Grid sm={10} md={3.5} className="DetailMoreProjects_Grid">
                    <MoreProjectCards
                      to={item.to}
                      title={item.title}
                      image={item.image}
                      desp={t(item.desp)}
                    />
                  </Grid>
                );
              })}
            </Grid>
          ) : (
            ''
          )}
          {menuRoute === '/ourprojects/registerrh' ||
          menuRoute === '/ourprojects/facilitymanagement' ||
          menuRoute === '/ourprojects/excellence' ? (
            <Grid container spacing={1} className="DetailMoreProjects_ContainerGrid">
              {FoodType.map(item => {
                return (
                  <Grid sm={10} md={3.5} className="DetailMoreProjects_Grid">
                    <MoreProjectCards
                      to={item.to}
                      title={item.title}
                      image={item.image}
                      desp={t(item.desp)}
                    />
                  </Grid>
                );
              })}
            </Grid>
          ) : (
            ''
          )}
          {menuRoute === '/ourprojects/tilt' || menuRoute === '/ourprojects/table' ? (
            <Grid container spacing={1} className="DetailMoreProjects_ContainerGrid">
              {HumanResourcesType.map(item => {
                return (
                  <Grid sm={10} md={3.5} className="DetailMoreProjects_Grid">
                    <MoreProjectCards
                      to={item.to}
                      title={item.title}
                      image={item.image}
                      desp={t(item.desp)}
                    />
                  </Grid>
                );
              })}
            </Grid>
          ) : (
            ''
          )}
          {menuRoute === '/ourprojects/yuwway' || menuRoute === '/ourprojects/kidcab' ? (
            <Grid container spacing={1} className="DetailMoreProjects_ContainerGrid">
              {FashionType.map(item => {
                return (
                  <Grid sm={10} md={3.5} className="DetailMoreProjects_Grid">
                    <MoreProjectCards
                      to={item.to}
                      title={item.title}
                      image={item.image}
                      desp={t(item.desp)}
                    />
                  </Grid>
                );
              })}
            </Grid>
          ) : (
            ''
          )}
          {menuRoute === '/ourprojects/designconfection' ? (
            <Grid container spacing={1} className="DetailMoreProjects_ContainerGrid">
              {TransportType.map(item => {
                return (
                  <Grid sm={10} md={3.5} className="DetailMoreProjects_Grid">
                    <MoreProjectCards
                      to={item.to}
                      title={item.title}
                      image={item.image}
                      desp={t(item.desp)}
                    />
                  </Grid>
                );
              })}
            </Grid>
          ) : (
            ''
          )}
          {menuRoute === '/ourprojects/zypzap' || menuRoute === '/ourprojects/ezbox' ? (
            <Grid container spacing={1} className="DetailMoreProjects_ContainerGrid">
              {BusinessType.map(item => {
                return (
                  <Grid sm={10} md={3.5} className="DetailMoreProjects_Grid">
                    <MoreProjectCards
                      to={item.to}
                      title={item.title}
                      image={item.image}
                      desp={t(item.desp)}
                    />
                  </Grid>
                );
              })}
            </Grid>
          ) : (
            ''
          )}
          {menuRoute === '/ourprojects/telehealthplatform' ||
          menuRoute === '/ourprojects/sindoor' ? (
            <Grid container spacing={1} className="DetailMoreProjects_ContainerGrid">
              {GamingType.map(item => {
                return (
                  <Grid sm={10} md={3.5} className="DetailMoreProjects_Grid">
                    <MoreProjectCards
                      to={item.to}
                      title={item.title}
                      image={item.image}
                      desp={t(item.desp)}
                    />
                  </Grid>
                );
              })}
            </Grid>
          ) : (
            ''
          )}
        </div>
      </div>
    </>
  );
}

// {menuRoute === '/ourprojects/fireman' ||
// menuRoute === '/ourprojects/realestate' ||
// menuRoute === '/ourprojects/quadrabase' ||
// menuRoute === '/ourprojects/orgaplan' ? (
//   <Grid container spacing={1} className="DetailMoreProjects_ContainerGrid">
//     {menuRoute !== '/ourprojects/fireman' && (
//       <Grid sm={10} md={3.5} className="DetailMoreProjects_Grid">
//         <MoreProjectCards
//           to="/ourprojects/fireman"
//           title="Fireman"
//           image={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/orientator_update.png`}
//           desp={t(
//             'Orientator is a web application that allows high school students to make their best career choice, after filling out an online and customized questionnaire.'
//           )}
//         />
//       </Grid>
//     )}
//     {menuRoute !== '/ourprojects/permispop' && (
//       <Grid sm={10} md={3.5} className="DetailMoreProjects_Grid">
//         <MoreProjectCards
//           to="/ourprojects/permispop"
//           title="Permispop"
//           image={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/permispop_update.png`}
//           desp={t(
//             'Permispop is a web platform connecting students, independent driving teachers, and driving schools. Each type of user has a dedicated interface, allowing them to manage their activities efficiently.'
//           )}
//         />
//       </Grid>
//     )}
//     {menuRoute !== '/ourprojects/quadrabase' && (
//       <Grid sm={10} md={3.5} className="DetailMoreProjects_Grid">
//         <MoreProjectCards
//           to="/ourprojects/quadrabase"
//           title="Quadrabase"
//           image={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/quadra_update.png`}
//           desp={t(
//             'Quadrabase is a web platform allowing engineering offices to automatically generate tender documents in the construction industry: Project Specification, Project Cost Estimate, Project bidding template. The platform has a well structured and multi-level database, allowing to include the most pertinent data for each specific project, based on the project details.'
//           )}
//         />
//       </Grid>
//     )}
//     {menuRoute !== '/ourprojects/orgaplan' && (
//       <Grid sm={10} md={3.5} className="DetailMoreProjects_Grid">
//         <MoreProjectCards
//           to="/ourprojects/orgaplan"
//           title="Orgaplan"
//           image={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/orgaplan_update.png`}
//           desp={t(
//             'Orgaplan is a complex and full platform allowing the logistic management of large construction sites, in very dense areas (such as Paris - La Défense, etc...). The platform is currently used in Vinci’s construction sites, in order to facilitate very challenging logistic activities.'
//           )}
//         />
//       </Grid>
//     )}
//   </Grid>
// ) : (
//   <Grid container spacing={1} className="DetailMoreProjects_ContainerGrid">
//     <Grid sm={10} md={3.5} className="DetailMoreProjects_Grid">
//       <MoreProjectCards
//         to="/ourprojects/orientator"
//         title="Orientator"
//         image={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/orientator_update.png`}
//         desp={t(
//           'Permispop is a web platform connecting students, independent driving teachers, and driving schools. Each type of user has a dedicated interface, allowing them to manage their activities efficiently.'
//         )}
//       />
//     </Grid>
//     <Grid sm={10} md={3.5} className="DetailMoreProjects_Grid">
//       <MoreProjectCards
//         to="/ourprojects/permispop"
//         title="Permispop"
//         image={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/permispop_update.png`}
//         desp={t(
//           'Permispop is a web platform connecting students, independent driving teachers, and driving schools. Each type of user has a dedicated interface, allowing them to manage their activities efficiently.'
//         )}
//       />
//     </Grid>

//     <Grid sm={10} md={3.5} className="DetailMoreProjects_Grid">
//       <MoreProjectCards
//         to="/ourprojects/quadrabase"
//         title="Quadrabase"
//         image={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/quadra_update.png`}
//         desp={t(
//           'Quadrabase is a web platform allowing engineering offices to automatically generate tender documents in the construction industry: Project Specification, Project Cost Estimate, Project bidding template. The platform has a well structured and multi-level database, allowing to include the most pertinent data for each specific project, based on the project details.'
//         )}
//       />
//     </Grid>
//   </Grid>
// )}
