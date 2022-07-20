// Init
import { Grid, Typography } from '@mui/material';
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
// Importing Components
import PP_logo from '../../assets/images/permisLogo.png';
import Button from '@mui/material/Button';
import { Divider } from '@mui/material';
import BasicModal from './BasicModal';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
// Home Component

export default function OurProjectCard(props) {
  const { i18n, t } = useTranslation();
  const [desp, setDesp] = useState();

  useEffect(() => {
    setDesp(t(props?.description));
  }, [props?.description]);

  return (
    <>
      {props.Reverse ? (
        <motion.div
          initial={{ x: -300 }}
          whileInView={{ x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className='ProjectCardMain'
        >
          <Grid container spacing={1} className='ProjectCardContainer2'>
            <Grid xs={12} sm={10} md={9}>
              <div className='projectCardWeb'>
                <img className='ProjectCardImg' width={props.width || '100%'} src={props.src} />
              </div>
              <div className='projectCardMob'>
                <marquee direction='right' behavior='scroll' loop='' scrolldelay='25' truespeed='25' hspace='0px'>
                  <img className='ProjectCardImg' width={props.width || '100%'} src={props.src} />
                </marquee>
              </div>
            </Grid>
            <Grid xs={12} sm={10} md={3}>
              <div className='ProjectCardTypo'>
                <Typography className='ProjectCardTitle'>
                  {props?.title?.length > 15 ? props?.title?.slice(0, 15) + '...' : props?.title || 'Permispop.'}
                  {/* {props.title || "Permispop."} */}
                </Typography>
                <Divider
                  className='ProjectCardDivider'
                  width={props.width || '20%'}
                  sx={{
                    height: '3px',
                    backgroundColor: '#0F52BA',
                    borderRadius: '4px',
                    margin: '.7% 0',
                  }}
                />

                <Typography className='ProjectCardDesp'>
                  {/* {props.description} */}
                  {t(desp?.length > 90 ? desp.slice(0, 90) + '...' : desp)}
                </Typography>
                <Link to={props.to}>
                  <Button className='ProjectCardBtn' variant='outlined'>
                    <BasicModal
                      ModalBtntextColor='#003B7E'
                      ModalBtnTheme={props.ModalBtnTheme || 'transparent'}
                      ModalBtnText={t('View')}
                      LogoSrc={props.LogoSrc}
                      Heading={props.heading}
                      Dividerwidth={props.Dividerwidth || '12%'}
                      DividerTheme={props.DividerTheme}
                      para1={props.para1}
                      para2={props.para2}
                      para3={props.para3}
                      para4={props.para4}
                      para5={props.para5}
                      para6={props.para6}
                      para7={props.para7}
                      para8={props.para8}
                    />
                  </Button>
                </Link>
              </div>
            </Grid>
          </Grid>
        </motion.div>
      ) : (
        <motion.div
          initial={{ x: -300 }}
          whileInView={{ x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className='ProjectCardMain'
        >
          <Grid container spacing={1} className='ProjectCardContainer1'>
            <Grid xs={12} sm={10} md={3}>
              <div className='ProjectCardTypo'>
                <Typography className='ProjectCardTitle'>
                  {props?.title?.length > 15 ? props?.title?.slice(0, 15) + '...' : props?.title || 'Permispop.'}
                  {/* {props.title || "Permispop."} */}
                </Typography>
                <Divider
                  className='ProjectCardDivider'
                  width={props.width || '20%'}
                  sx={{
                    height: '3px',
                    backgroundColor: '#0F52BA',
                    borderRadius: '4px',
                    margin: '.7% 0',
                  }}
                />

                <Typography className='ProjectCardDesp'>
                  {desp?.length > 90 ? desp.slice(0, 90) + '...' : desp}
                  {/* {t(props.description)} */}
                </Typography>
                <Link to={props.to}>
                  <Button className='ProjectCardBtn' variant='outlined'>
                    <BasicModal
                      ModalBtntextColor='#003B7E'
                      ModalBtnTheme={props.ModalBtnTheme || 'transparent'}
                      ModalBtnText={t('View')}
                      LogoSrc={props.LogoSrc}
                      Heading={props.heading}
                      Dividerwidth={props.Dividerwidth || '12%'}
                      DividerTheme={props.DividerTheme}
                      para1={props.para1}
                      para2={props.para2}
                      para3={props.para3}
                      para4={props.para4}
                      para5={props.para5}
                      para6={props.para6}
                      para7={props.para7}
                      para8={props.para8}
                    />
                  </Button>
                </Link>
              </div>
            </Grid>
            <Grid xs={12} sm={10} md={9}>
              <div className='projectCardWeb'>
                <img className='ProjectCardImg' width={props.width || '100%'} src={props.src} />
              </div>
              <div className='projectCardMob'>
                <marquee direction='right' behavior='smooth' loop='' scrolldelay='25' truespeed='25'>
                  <img className='ProjectCardImg' width={props.width || '100%'} src={props.src} />
                </marquee>
              </div>
            </Grid>
          </Grid>
        </motion.div>
      )}
    </>
  );
}
