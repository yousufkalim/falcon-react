// Init
import React from 'react';
import { Typography } from '@mui/material';
import Divider from '@mui/material/Divider';
import { motion } from 'framer-motion';
// Component
export default function DetailService(props) {
  return (
    <>
      <div className='DetailService_Container'>
        {props.BGLogo && (
          <div className='DetailService_BGLogo_Div'>
            <img className='DetailService_BGLogo_Img1' src={props.liteLogo} alt='Detail Services' />
            <img className='DetailService_BGLogo_Img2' src={props.liteLogo} alt='Detail Services' />
            <img className='DetailService_BGLogo_Img3' src={props.liteLogo} alt='Detail Services' />
          </div>
        )}
        {props.fitLogo && (
          <div className='DetailService_FitLogo_Div'>
            <img
              className='DetailService_FitLogo_Img1'
              src={props.liteLogo}
              alt='Detail Services'
            />
            <img
              className='DetailService_FitLogo_Img2'
              src={props.liteLogo}
              alt='Detail Services'
            />
            <img
              className='DetailService_FitLogo_Img3'
              src={props.liteLogo}
              alt='Detail Services'
            />
          </div>
        )}
        <div className='DetailService_TitleDiv'>
          <Divider className='DetailService_TitleDivider' color={props.titleTheme || '#11A283'} />
          <Typography className='DetailService_Title' color={props.titleTheme || '#11A283'}>
            Service
          </Typography>
        </div>
        {props.both && (
          <motion.div
            className='DetailService_ImageDiv'
            initial={{ y: 50, opacity: 0.7 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <img className='DetailService_BothImage' src={props.src} />
          </motion.div>
        )}
        {props.WebApp && (
          <motion.div
            className='DetailService_ImageDiv'
            initial={{ y: 50, opacity: 0.7 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: false }}
          >
            <img className='DetailService_WebAppImage' src={props.src} />
          </motion.div>
        )}
      </div>
    </>
  );
}
{
  /* <img style={{ width: "80%" }} className="IconImage" src={PP_Process} alt='Detail Services' /> */
}
// props
// titleTheme
// both
// web
// app
// borderColor
// circleTheme
