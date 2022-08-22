// Init
import React from 'react';
import { Typography } from '@mui/material';
import Divider from '@mui/material/Divider';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
// Component
export default function DetailTheme(props) {
  const { t } = useTranslation();
  return (
    <>
      <div className='DetailTheme_Container'>
        <motion.div
          initial={{ y: 50, opacity: 0.7 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className='DetailTheme_TitleDiv'>
            <Divider className='DetailTheme_TitleDivider' color={props.titleTheme || '#11A283'} />
            <Typography className='DetailTheme_Title' color={props.titleTheme || '#11A283'}>
              {t(props.title || 'COLOR THEME & ILLUSTRATION')}
            </Typography>
          </div>
          <div className='DetailTheme_DespDiv'>
            <Typography className='DetailTheme_Desp'>
              {t(
                props.desp ||
                  'Colors Schemes – Making UI feel more natural. This is why the usage of the right color palettes is essential to make the app more attractive. Some colors look better with another. This is why color schemes were created. They help designers to find the right hue for the remaining ones.'
              )}
            </Typography>
          </div>
        </motion.div>
        <div className='DetailTheme_BoxContainer'>
          <div className='DetailTheme_BoxDiv'>
            {props.Theme1 && (
              <div
                className='DetailTheme_Box'
                style={{
                  background: props.Theme1 ? props.Theme1 : '#FFA333',
                }}
              ></div>
            )}
            {props.Theme2 && (
              <div
                className='DetailTheme_Box'
                style={{
                  background: props.Theme1 ? props.Theme2 : '#11A283',
                }}
              ></div>
            )}
            {props.Theme3 && (
              <div
                className='DetailTheme_Box'
                style={{
                  background: props.Theme1 ? props.Theme3 : '#00654F',
                }}
              ></div>
            )}
            {props.Theme4 && (
              <div
                className='DetailTheme_Box'
                style={{
                  background: props.Theme1 ? props.Theme4 : '#454238',
                }}
              ></div>
            )}
            {props.Theme5 && (
              <div
                className='DetailTheme_Box'
                style={{
                  background: props.Theme1 ? props.Theme5 : '#F6FAFB',
                }}
              ></div>
            )}
            {props.Theme6 && (
              <div
                className='DetailTheme_Box'
                style={{
                  background: props.Theme1 ? props.Theme6 : '#C8CFD0',
                }}
              ></div>
            )}
            {props.Theme7 && (
              <div
                className='DetailTheme_Box'
                style={{
                  background: props.Theme1 ? props.Theme7 : '#C8CFD0',
                }}
              ></div>
            )}
          </div>
        </div>
        {props.centerImage && (
          <div>
            <img style={{ width: '100%' }} src={props.src} alt='Detail Theme' />
          </div>
        )}
        {props.Images && (
          <div
            style={{
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <img style={{ width: '30%', marginRight: '1%' }} src={props.src1} alt='Detail Theme' />
            <img style={{ width: '30%', marginRight: '1%' }} src={props.src2} alt='Detail Theme' />
            <img style={{ width: '30%', marginRight: '1%' }} src={props.src3} alt='Detail Theme' />
          </div>
        )}
      </div>
      {props.fullscreen && (
        <div>
          <img style={{ width: '100%' }} src={props.src} alt='Detail Theme' />
        </div>
      )}
      {props.overlap && (
        <div style={{ width: '100%', display: 'flex', justifyContent: 'flex-end' }}>
          <div style={{ width: '50%', margin: '0 5% -3% 0' }}>
            <img style={{ width: '100%' }} src={props.src} alt='Detail Theme' />
          </div>
        </div>
      )}
      {props.inline && (
        <div style={{ width: '100%', display: 'flex', justifyContent: 'flex-end' }}>
          <div style={{ width: '30%', margin: '-15% 5% 0 0' }}>
            <img style={{ width: '100%' }} src={props.src} alt='Detail Theme' />
          </div>
        </div>
      )}
      {props.double && (
        <div
          style={{
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <div
            style={{
              width: '80%',
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <div style={{ width: '40%' }}>
              <img style={{ width: '100%' }} src={props.src1} alt='Detail Theme' />
            </div>
            <div style={{ width: '40%' }}>
              <img style={{ width: '100%' }} src={props.src2} alt='Detail Theme' />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
// props
// title
// titleTheme
// desp
// Theme1
// Theme2
// Theme3
// Theme4
// Theme5
// Theme6
// Theme7
// centerImage
// fullscreen
// src
// Images
// src1
// src2
// src3
