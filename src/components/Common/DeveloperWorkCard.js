import { Typography } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
export default function DeveloperWorkCard(props) {
  const { i18n, t } = useTranslation();
  return (
    <>
      {props.reverse ? (
        <div className='DeveloperCardMain_R'>
          <div className='DeveloperCardImg_Div'>
            <img className='DeveloperCard_Img' src={props.src} alt='developer' />
          </div>
          <motion.div
            className='DeveloperCard_Typo'
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div style={{ width: '80%' }}>
              <Typography
                sx={{
                  color: '#0F52BA',
                  fontWeight: '800',
                  fontSize: '1.5rem',
                  marginBottom: '2%',
                }}
              >
                {t(props.title)}
              </Typography>
              <Typography
                sx={{
                  color: '#282828',
                  fontWeight: '400',
                  fontSize: '1rem',
                  width: '90%',
                }}
              >
                {t(props.desp)}
              </Typography>
            </div>
          </motion.div>
        </div>
      ) : (
        <div className='DeveloperCardMain'>
          <motion.div
            className='DeveloperCard_Typo'
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div style={{ width: '80%' }}>
              <Typography
                sx={{
                  color: '#0F52BA',
                  fontWeight: '800',
                  fontSize: '1.5rem',
                  marginBottom: '2%',
                }}
              >
                {t(props.title)}
              </Typography>
              <Typography
                sx={{
                  color: '#282828',
                  fontWeight: '400',
                  fontSize: '1rem',
                  width: '100%',
                }}
              >
                {t(props.desp)}
              </Typography>
            </div>
          </motion.div>
          <div className='DeveloperCardImg_Div'>
            <img className='DeveloperCard_Img' src={props.src} alt='developer' />
          </div>
        </div>
      )}
    </>
  );
}
