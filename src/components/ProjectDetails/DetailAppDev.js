// Init
import React from 'react';
import { Grid, Typography } from '@mui/material';
import Divider from '@mui/material/Divider';
import { Avatar } from '@mui/material';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

// Component
export default function DetailAppDev(props) {
  const { i18n, t } = useTranslation();

  return (
    <>
      <div className='DetailAppDev_Container'>
        <motion.div
          initial={{ y: 50, opacity: 0.7 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className='DetailAppDev_TitleDiv'>
            <Divider className='DetailAppDev_TitleDivider' color={props.titleTheme || '#11A283'} />
            <Typography className='DetailAppDev_Title' color={props.titleTheme || '#11A283'}>
              {t(props.title || 'MOBILE APP DEVELOPMENT')}
            </Typography>
          </div>
          <div className='DetailAppDev_DespDiv'>
            {props.website && (
              <Typography className='DetailAppDev_Desp'>
                {t(
                  props.desp ||
                    'There are countless variations when it comes to different websites that can be incorporated into the design of a website. In general, the Falcon IT workflow define below. Web designers at Falcon IT often work with design software like Figma or AdobeXD etc. to create visually appealing user experiences. The team makes wireframes, mockups, design systems, color palettes, templates, and more to help developers build the product, and after UI /UX finalizing, the back-end developers focus on the infrastructure of a site or web application (hosting, security, etc), and our front-end developers focus on the functionality of the site/app. While the team of full-stack developers is working on both the front-end and back-end. The SQA team monitors all activities side by side to deliver the best to our clients.'
                )}
              </Typography>
            )}
            {props.application && (
              <Typography className='DetailAppDev_Desp'>
                {t(
                  props.desp ||
                    'Falcon’s app development process is divided into different servers to assure the quality of the App. After UI/ UX phase, different servers collaborate to complete the process. Development Server will be used by developers only for development purposes. QA Server Only used by the SQA team. Nothing will be updated on the QA server without QA approval. All the testing will be performed on this server. The Staging Server is also known as the Client’s server. So, this server will be accessible to the client. The client will perform User Acceptance Testing on this server. Nothing will be updated on the Staging server without QA/CEO approval. When your project passed the QA server then the project will deploy on the staging server. Finally, the project is going live. Nothing should be uploaded on a live server without QA/Client/CEO approval. The project which is going live must be on the staging server previously.'
                )}
              </Typography>
            )}
          </div>
        </motion.div>
        {props.halfImg && (
          <div className='DetailAppDev_ImgDiv HalfImg'>
            <img className='DetailAppDev_Img' src={props.halfImg} alt='Detail Development' />
          </div>
        )}
      </div>
      {props.fullImg && (
        <div className='DetailAppDev_ImgDiv'>
          <img className='DetailAppDev_Img' src={props.fullImg} alt='Detail Development' />
        </div>
      )}
    </>
  );
}
// props
// titleTheme
// title
// desp
// halfImg (src Required)
// fullImg (src Required)
