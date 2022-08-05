// Init
import React from 'react';
import { Typography } from '@mui/material';
import Divider from '@mui/material/Divider';
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
          <div className='DetailService_ImageDiv'>
            <img className='DetailService_BothImage' src={props.src} />
          </div>
        )}
        {props.WebApp && (
          <div className='DetailService_ImageDiv'>
            <img className='DetailService_WebAppImage' src={props.src} />
          </div>
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
