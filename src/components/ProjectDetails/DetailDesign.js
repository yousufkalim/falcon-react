// Init
import React from 'react';
import { Grid, Typography } from '@mui/material';
import Image1 from '../../assets/images/detail_design_1.png';
import Image2 from '../../assets/images/detail_design_2.png';
import Image3 from '../../assets/images/detail_design_3.png';
import Image7 from '../../assets/images/detail_design_4.png';
import Image4 from '../../assets/images/detail_kc_design1.png';
import Image5 from '../../assets/images/detail_kc_design2.png';
import Image6 from '../../assets/images/detail_kc_design3.png';
import { useTranslation } from 'react-i18next';

import Divider from '@mui/material/Divider';
import { Avatar } from '@mui/material';
import { motion } from 'framer-motion';

// Component
export default function DetailDesign(props) {
  const { i18n, t } = useTranslation();
  return (
    <>
      <div className='DetailDesign_Container'>
        <div>
          <div className='DetailDesign_TitleDiv'>
            <Divider className='DetailDesign_TitleDivider' color={props.titleTheme || '#11A283'} />
            <Typography className='DetailDesign_Title' color={props.titleTheme || '#11A283'}>
              {t(props.title || 'APP UI DESIGN')}
            </Typography>
          </div>
          <div className='DetailDesign_DespDiv'>
            <Typography className='DetailDesign_Desp'>
              {t(
                'App design is an ongoing process comprising user experience (UX) and user interface (UI) elements. Designers ideate, define solutions, create the app’s flow and structure, and make stylistic choices from colors to fonts. Designers base choices on user research and feedback. The end result is an app that looks nice and is easy to use. So, the best app design process comprises Research, Ideation, Problem Identification, Design, Feedback, Problem Evaluation. Designers handle all parts of the process in a continuous and simultaneous flow. And that’s both for UX and UI through the lifetime of the app.'
              )}
            </Typography>
          </div>
        </div>
        {props.overlap && (
          <div className='DetailDesign_ImageContainer_Overlap'>
            <div className='DetailDesign_ImgDiv_Top'>
              <img
                style={{ width: '-webkit-fill-available' }}
                src={props.TopImg || Image6}
                alt='Design Images'
              />
            </div>
            <div className='DetailDesign_ImgDiv_Middle'>
              <img
                style={{ margin: '0 3%', width: '70%' }}
                src={props.MidImg || Image5}
                alt='Design Images'
              />
            </div>
            <div className='DetailDesign_ImgDiv_Bottom'>
              <img
                style={{ width: '-webkit-fill-available' }}
                src={props.BottomImg || Image4}
                alt='Design Images'
              />
            </div>
          </div>
        )}
        {props.grids && (
          <div className='DetailDesign_ImageContainer_Grids'>
            <Grid container spacing={1}>
              <Grid
                xs={12}
                md={4}
                sx={{
                  padding: '0.5%',
                }}
              >
                <img className='DetailDesign_Image' src={props.src1} alt='Design Images' />
              </Grid>
              <Grid
                xs={12}
                md={8}
                sx={{
                  padding: '0.5%',
                }}
              >
                <img className='DetailDesign_Image' src={props.src2} alt='Design Images' />
              </Grid>
            </Grid>
            <div className='DetailDesign_Image_SubDiv'>
              <Grid container spacing={1} xs={12} md={8}>
                <Grid
                  xs={12}
                  md={6}
                  sx={{
                    padding: '0.8%',
                  }}
                >
                  <img className='DetailDesign_Image' src={props.src3} alt='Design Images' />
                </Grid>
                <Grid
                  xs={12}
                  md={6}
                  sx={{
                    padding: '0.8%',
                  }}
                >
                  <img className='DetailDesign_Image' src={props.src4} alt='Design Images' />
                </Grid>
                <Grid
                  xs={12}
                  sx={{
                    padding: '.8%',
                  }}
                >
                  <img className='DetailDesign_Image' src={props.src5} alt='Design Images' />
                </Grid>
              </Grid>
              <Grid container spacing={1} xs={12} md={4}>
                <Grid
                  xs={12}
                  sx={{
                    padding: '1.5%',
                  }}
                >
                  <img className='DetailDesign_Image' src={props.src6} alt='Design Images' />
                </Grid>
              </Grid>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
// props
// titleTheme
// title
// overlap
// TopImg
// MidImg
// BottomImg
// grids
// src1
// src2
// src3
// src4
// src5
// src6
