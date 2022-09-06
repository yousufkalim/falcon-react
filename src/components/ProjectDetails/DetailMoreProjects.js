// Init
import { Grid, Typography } from '@mui/material';
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
// Importing Components
import Button from '@mui/material/Button';
import { Divider } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import Tooltip from '@mui/material/Tooltip';
import Image from '../../assets/images/dc_detailservice.svg';
import SectionHeader from '../Common/SectionHeader';
import MoreProjectCards from '../Common/MoreProjectCards';
// Home Component

export default function DetailMoreProjects(props) {
  const { i18n, t } = useTranslation();
  const [desp, setDesp] = useState();

  useEffect(() => {
    setDesp(t(props?.description));
  }, [props?.description]);

  return (
    <>
      <div>
        <div className='DetailMoreProjects_SectionHeaderDiv'>
          <h2 className='DetailMoreProjects_SectionHeader_H1'>a project offers a challenge</h2>

          <Divider className='DetailMoreProjects_SectionHeader_Divider' />
          <h1 className='DetailMoreProjects_SectionHeader_H2'>More Projects</h1>
        </div>
        <div className='DetailMoreProjects_MainDiv'>
          <Grid container spacing={1} className='DetailMoreProjects_ContainerGrid'>
            <Grid sm={10} md={3.5} className='DetailMoreProjects_Grid'>
              <MoreProjectCards
                to='/ourprojects/orientator'
                title='Orientator'
                image={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/orientator_update.png`}
                desp='A revolutionary approach to construction document generation for big companies'
              />
            </Grid>
            <Grid sm={10} md={3.5} className='DetailMoreProjects_Grid'>
              <MoreProjectCards
                to='/ourprojects/permispop'
                title='Permispop'
                image={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/permispop_update.png`}
                desp='A revolutionary approach to construction document generation for big companies'
              />
            </Grid>
            <Grid sm={10} md={3.5} className='DetailMoreProjects_Grid'>
              <MoreProjectCards
                to='/ourprojects/quadrabase'
                title='Quadrabase'
                image={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/quadra_update.png`}
                desp='A revolutionary approach to construction document generation for big companies'
              />
            </Grid>
          </Grid>
        </div>
      </div>
    </>
  );
}
