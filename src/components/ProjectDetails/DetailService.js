// Init
import React from 'react';
import { Typography } from '@mui/material';
import PP_Process from '../../assets/images/detail_pp_process.png';
import Reserch from '../../assets/images/reserch_icon.svg';
import AppDesign from '../../assets/images/appdesign_icon.svg';
import WebDesign from '../../assets/images/webdesign_icon.svg';
import AppDev from '../../assets/images/appdev_icon.svg';
import WebDev from '../../assets/images/webdev_icon.svg';
import Testing from '../../assets/images/testingicon.svg';
import Maintain from '../../assets/images/maintainicon.svg';
import Divider from '@mui/material/Divider';
import { Avatar } from '@mui/material';
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
          <div className='DetailService_CircleContainer'>
            <div
              className='DetailService_UpperBorder'
              style={{
                borderColor: props.borderColor ? props.borderColor : '#11A283',
              }}
            >
              <div
                className='DetailService_CircleOdd'
                style={{
                  background: props.circleTheme ? props.circleTheme : '#FFA333',
                }}
              >
                <img
                  className='IconImage'
                  src={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/reserch_icon.svg`}
                  alt='Detail Services'
                />
              </div>
              <div className='DetailService_TypoDiv1'>
                <Typography
                  className='DetailService_Heading'
                  color={props.borderColor || '#11A283'}
                >
                  Reserch
                </Typography>
              </div>
            </div>
            <div
              className='DetailService_LowerBorder'
              style={{
                borderColor: props.borderColor ? props.borderColor : '#11A283',
              }}
            >
              <div
                className='DetailService_CircleEven'
                style={{
                  background: props.circleTheme ? props.circleTheme : '#FFA333',
                }}
              >
                <img
                  className='IconImage'
                  src={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/appdesign_icon.svg`}
                  alt='Detail Services'
                />
              </div>
              <div className='DetailService_TypoDiv2'>
                <Typography
                  color={props.borderColor || '#11A283'}
                  className='DetailService_Heading'
                >
                  Mobile App Design
                </Typography>
              </div>
            </div>
            <div
              className='DetailService_UpperBorder'
              style={{
                left: '-0.9%',
                borderColor: props.borderColor ? props.borderColor : '#11A283',
              }}
            >
              <div
                className='DetailService_CircleOdd'
                style={{
                  background: props.circleTheme ? props.circleTheme : '#FFA333',
                }}
              >
                <img
                  className='IconImage'
                  src={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/webdesign_icon.svg`}
                  alt='Detail Services'
                />
              </div>
              <div className='DetailService_TypoDiv1'>
                <Typography
                  color={props.borderColor || '#11A283'}
                  className='DetailService_Heading'
                >
                  Website Design
                </Typography>
              </div>
            </div>
            <div
              className='DetailService_LowerBorder'
              style={{
                left: '-1.5%',
                borderColor: props.borderColor ? props.borderColor : '#11A283',
              }}
            >
              <div
                className='DetailService_CircleEven'
                style={{
                  background: props.circleTheme ? props.circleTheme : '#FFA333',
                }}
              >
                <img
                  className='IconImage'
                  src={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/appdev_icon.svg`}
                  alt='Detail Services'
                />
              </div>
              <div className='DetailService_TypoDiv2'>
                <Typography
                  color={props.borderColor || '#11A283'}
                  className='DetailService_Heading'
                >
                  Mobile App Development
                </Typography>
              </div>
            </div>
            <div
              className='DetailService_UpperBorder'
              style={{
                left: '-2%',
                borderColor: props.borderColor ? props.borderColor : '#11A283',
              }}
            >
              <div
                className='DetailService_CircleOdd'
                style={{
                  background: props.circleTheme ? props.circleTheme : '#FFA333',
                }}
              >
                <img
                  className='IconImage'
                  src={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/webdev_icon.svg`}
                  alt='Detail Services'
                />
              </div>
              <div className='DetailService_TypoDiv1'>
                <Typography
                  color={props.borderColor || '#11A283'}
                  className='DetailService_Heading'
                >
                  Website Development
                </Typography>
              </div>
            </div>
            <div
              className='DetailService_LowerBorder'
              style={{
                left: '-2.5%',
                borderColor: props.borderColor ? props.borderColor : '#11A283',
              }}
            >
              <div
                className='DetailService_CircleEven'
                style={{
                  background: props.circleTheme ? props.circleTheme : '#FFA333',
                }}
              >
                <img
                  className='IconImage'
                  src={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/testingicon.svg`}
                  alt='Detail Services'
                />
              </div>
              <div className='DetailService_TypoDiv2'>
                <Typography
                  color={props.borderColor || '#11A283'}
                  className='DetailService_Heading'
                >
                  Testing
                </Typography>
              </div>
            </div>
            <div
              className='DetailService_UpperBorder'
              style={{
                left: '-3%',
                borderColor: props.borderColor ? props.borderColor : '#11A283',
              }}
            >
              <div
                className='DetailService_CircleOdd'
                style={{
                  background: props.circleTheme ? props.circleTheme : '#FFA333',
                }}
              >
                <img
                  className='IconImage'
                  src={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/maintainicon.svg`}
                  alt='Detail Services'
                />
              </div>
              <div className='DetailService_TypoDiv1'>
                <Typography
                  color={props.borderColor || '#11A283'}
                  className='DetailService_Heading'
                >
                  Maintenance
                </Typography>
              </div>
            </div>
          </div>
        )}
        {props.web && (
          <div className='DetailService_CircleContainer'>
            <div
              className='DetailService_UpperBorder'
              style={{
                borderColor: props.borderColor ? props.borderColor : '#11A283',
              }}
            >
              <div
                className='DetailService_CircleOdd'
                style={{
                  background: props.circleTheme ? props.circleTheme : '#FFA333',
                }}
              >
                <img
                  className='IconImage'
                  src={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/reserch_icon.svg`}
                  alt='Detail Services'
                />
              </div>
              <div className='DetailService_TypoDiv1'>
                <Typography
                  color={props.borderColor || '#11A283'}
                  className='DetailService_Heading'
                >
                  Reserch
                </Typography>
              </div>
            </div>
            <div
              className='DetailService_LowerBorder'
              style={{
                borderColor: props.borderColor ? props.borderColor : '#11A283',
              }}
            >
              <div
                className='DetailService_CircleEven'
                style={{
                  background: props.circleTheme ? props.circleTheme : '#FFA333',
                }}
              >
                <img
                  className='IconImage'
                  src={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/webdesign_icon.svg`}
                  alt='Detail Services'
                />
              </div>
              <div className='DetailService_TypoDiv2'>
                <Typography
                  color={props.borderColor || '#11A283'}
                  className='DetailService_Heading'
                >
                  Website Design
                </Typography>
              </div>
            </div>

            <div
              className='DetailService_UpperBorder'
              style={{
                left: '-0.9%',
                borderColor: props.borderColor ? props.borderColor : '#11A283',
              }}
            >
              <div
                className='DetailService_CircleOdd'
                style={{
                  background: props.circleTheme ? props.circleTheme : '#FFA333',
                }}
              >
                <img
                  className='IconImage'
                  src={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/webdev_icon.svg`}
                  alt='Detail Services'
                />
              </div>
              <div className='DetailService_TypoDiv1'>
                <Typography
                  color={props.borderColor || '#11A283'}
                  className='DetailService_Heading'
                >
                  Website Development
                </Typography>
              </div>
            </div>
            <div
              className='DetailService_LowerBorder'
              style={{
                left: '-1.5%',
                borderColor: props.borderColor ? props.borderColor : '#11A283',
              }}
            >
              <div
                className='DetailService_CircleEven'
                style={{
                  background: props.circleTheme ? props.circleTheme : '#FFA333',
                }}
              >
                <img
                  className='IconImage'
                  src={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/testingicon.svg`}
                  alt='Detail Services'
                />
              </div>
              <div className='DetailService_TypoDiv2'>
                <Typography
                  color={props.borderColor || '#11A283'}
                  className='DetailService_Heading'
                >
                  Testing
                </Typography>
              </div>
            </div>
            <div
              className='DetailService_UpperBorder'
              style={{
                left: '-2%',
                borderColor: props.borderColor ? props.borderColor : '#11A283',
              }}
            >
              <div
                className='DetailService_CircleOdd'
                style={{
                  background: props.circleTheme ? props.circleTheme : '#FFA333',
                }}
              >
                <img
                  className='IconImage'
                  src={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/maintainicon.svg`}
                  alt='Detail Services'
                />
              </div>
              <div className='DetailService_TypoDiv1'>
                <Typography
                  color={props.borderColor || '#11A283'}
                  className='DetailService_Heading'
                >
                  Maintenance
                </Typography>
              </div>
            </div>
          </div>
        )}
        {props.app && (
          <div className='DetailService_CircleContainer'>
            <div
              className='DetailService_UpperBorder'
              style={{
                borderColor: props.borderColor ? props.borderColor : '#11A283',
              }}
            >
              <div
                className='DetailService_CircleOdd'
                style={{
                  background: props.circleTheme ? props.circleTheme : '#FFA333',
                }}
              >
                <img
                  className='IconImage'
                  src={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/reserch_icon.svg`}
                  alt='Detail Services'
                />
              </div>
              <div className='DetailService_TypoDiv1'>
                <Typography
                  color={props.borderColor || '#11A283'}
                  className='DetailService_Heading'
                >
                  Reserch
                </Typography>
              </div>
            </div>
            <div
              className='DetailService_LowerBorder'
              style={{
                borderColor: props.borderColor ? props.borderColor : '#11A283',
              }}
            >
              <div
                className='DetailService_CircleEven'
                style={{
                  background: props.circleTheme ? props.circleTheme : '#FFA333',
                }}
              >
                <img
                  className='IconImage'
                  src={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/appdesign_icon.svg`}
                  alt='Detail Services'
                />
              </div>
              <div className='DetailService_TypoDiv2'>
                <Typography
                  color={props.borderColor || '#11A283'}
                  className='DetailService_Heading'
                >
                  Mobile App Design
                </Typography>
              </div>
            </div>
            <div
              className='DetailService_UpperBorder'
              style={{
                left: '-0.9%',
                borderColor: props.borderColor ? props.borderColor : '#11A283',
              }}
            >
              <div
                className='DetailService_CircleOdd'
                style={{
                  background: props.circleTheme ? props.circleTheme : '#FFA333',
                }}
              >
                <img
                  className='IconImage'
                  src={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/appdev_icon.svg`}
                  alt='Detail Services'
                />
              </div>
              <div className='DetailService_TypoDiv1'>
                <Typography
                  color={props.borderColor || '#11A283'}
                  className='DetailService_Heading'
                >
                  Mobile App Development
                </Typography>
              </div>
            </div>

            <div
              className='DetailService_LowerBorder'
              style={{
                left: '-1.5%',
                borderColor: props.borderColor ? props.borderColor : '#11A283',
              }}
            >
              <div
                className='DetailService_CircleEven'
                style={{
                  background: props.circleTheme ? props.circleTheme : '#FFA333',
                }}
              >
                <img
                  className='IconImage'
                  src={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/testingicon.svg`}
                  alt='Detail Services'
                />
              </div>
              <div className='DetailService_TypoDiv2'>
                <Typography
                  color={props.borderColor || '#11A283'}
                  className='DetailService_Heading'
                >
                  Testing
                </Typography>
              </div>
            </div>
            <div
              className='DetailService_UpperBorder'
              style={{
                left: '-2%',
                borderColor: props.borderColor ? props.borderColor : '#11A283',
              }}
            >
              <div
                className='DetailService_CircleOdd'
                style={{
                  background: props.circleTheme ? props.circleTheme : '#FFA333',
                }}
              >
                <img
                  className='IconImage'
                  src={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/maintainicon.svg`}
                  alt='Detail Services'
                />
              </div>
              <div className='DetailService_TypoDiv1'>
                <Typography
                  color={props.borderColor || '#11A283'}
                  className='DetailService_Heading'
                >
                  Maintenance
                </Typography>
              </div>
            </div>
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
