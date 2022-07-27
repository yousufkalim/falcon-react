// Init
import React from 'react';
import { Grid, Typography } from '@mui/material';
import AppDev from '../../assets/images/detail_appdev.png';
import WebDev_1 from '../../assets/images/detail_webdev1.png';
import WebDev_2 from '../../assets/images/detail_webdev2.png';
import AvatarImg from '../../assets/images/detail_overviewAvatar.png';

import Divider from '@mui/material/Divider';
import { Avatar } from '@mui/material';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

// Component
export default function DetailWebDev(props) {
  const { i18n, t } = useTranslation();

  return (
    <>
      <div className='DetailWebDev_Container'>
        <div className='DetailWebDev_LeftContainer'>
          <div className='DetailWebDev_TitleDiv'>
            <Divider className='DetailWebDev_TitleDivider' color={props.titleTheme || '#11A283'} />
            <Typography className='DetailWebDev_Title' color={props.titleTheme || '#11A283'}>
              WEB DEVELOPMENT
            </Typography>
          </div>
          <div className='DetailWebDev_DespDiv'>
            <Typography className='DetailWebDev_Desp'>
              {t(
                'There are countless variations when it comes to different websites that can be incorporated into the design of a website. In general, the Falcon IT workflow define below. Web designers at Falcon IT often work with design software like Figma or AdobeXD etc. to create visually appealing user experiences. The team makes wireframes, mockups, design systems, color palettes, templates, and more to help developers build the product, and after UI /UX finalizing, the back-end developers focus on the infrastructure of a site or web application (hosting, security, etc), and our front-end developers focus on the functionality of the site/app. While the team of full-stack developers is working on both the front-end and back-end. The SQA team monitors all activities side by side to deliver the best to our clients.'
              )}
            </Typography>
          </div>
          <div className='DetailWebDev_Left_ImgDiv'>
            <img style={{ width: '100%' }} src={WebDev_1} alt='Detail Development' />
          </div>
        </div>
        <div className='DetailWebDev_RightContainer'>
          <div className='DetailWebDev_Right_ImgDiv'>
            <img style={{ width: '100%' }} src={WebDev_2} alt='Detail Development' />
          </div>
          <div className='DetailWebDev_TypoDiv'>
            <div className='DetailWebDev_TitleDiv'>
              <Divider
                className='DetailWebDev_TitleDivider'
                color={props.titleTheme || '#11A283'}
              />
              <Typography className='DetailWebDev_Title' color={props.titleTheme || '#11A283'}>
                CLIENT FEEDBACK
              </Typography>
            </div>
            <div className='DetailWebDev_DespDiv'>
              <Typography className='DetailWebDev_Desp'>
                {t(
                  props.feedback ||
                    'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself actual teachings of the great explorer of the truth, the master-builder of human happiness.'
                )}
              </Typography>
            </div>
            <div className='DetailWebDev_ClientContainer'>
              <div style={{ width: '40%' }}>
                <div className='DetailWebDev_AvatarDiv'>
                  <Avatar
                    className='DetailWebDev_Avatar'
                    sx={{ width: 70, height: 70 }}
                    src={props.AvatarSrc || AvatarImg}
                  />
                  <div className='DetailWebDev_NameDiv'>
                    <Typography className='DetailWebDev_Name' color={props.nameColor || '#2FAD93'}>
                      {props.name || 'DDS Formation'}
                    </Typography>
                    <Typography className='DetailWebDev_Location'>
                      {props.location || 'France'}
                    </Typography>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
// props
// titleTheme
// desp
// AvatarSrc
// nameColor
// name
// location
