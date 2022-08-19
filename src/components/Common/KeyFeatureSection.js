// Init
import { Grid } from '@mui/material';
import React from 'react';
import SectionHeader from './SectionHeader';
import KeyFeatures from './KeyFeatures';
import { motion } from 'framer-motion';
// Importing Components

// Home Component
export default function KeyFeatureSection(props) {
  return (
    <motion.div
      initial={{ y: 100, opacity: 0.5 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      viewport={{ once: true }}
      style={{
        display: 'flex',
        flexDirection: 'column',
        // alignItems: "center",
        justifyContent: 'center',
        backgroundColor: '#F8F8F8',
      }}
    >
      <SectionHeader
        h2='Key features'
        decription='This sounds simple, but it is beneficial to your business success.'
        colorDesp
      />
      <motion.div
        initial={{ y: 100, opacity: 0.5 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
        style={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '4% 0%',
        }}
      >
        <Grid container spacing={1} sx={{ width: '85%' }}>
          <Grid xs={12} sm={6} md={4}>
            <KeyFeatures
              src={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/keyIcon5.svg`}
              title='SMOOTH COMMUNICATION'
              desp='Many of these business ideas are home-based. While they may not make you a billionaire.'
            />
          </Grid>
          <Grid xs={12} sm={6} md={4}>
            <KeyFeatures
              src={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/keyIcon1.svg`}
              title='TECHNOLOGIES'
              desp='Many of these business ideas are home-based. While they may not make you a billionaire.'
            />
          </Grid>
          <Grid xs={12} sm={6} md={4}>
            <KeyFeatures
              src={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/keyIcon2.svg`}
              title='IN-HOUSE TEAM'
              desp='Many of these business ideas are home-based. While they may not make you a billionaire.'
            />
          </Grid>
          <Grid xs={12} sm={6} md={4}>
            {props.UxKey ? (
              <KeyFeatures
                src={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/keyIcon3.svg`}
                title='UX RESEARCH'
                desp='Many of these business ideas are home-based. While they may not make you a billionaire.'
              />
            ) : (
              <KeyFeatures
                src={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/keyIcon3.svg`}
                title='PRODUCT DEVELOPMENT'
                desp='Many of these business ideas are home-based. While they may not make you a billionaire.'
              />
            )}
          </Grid>
          <Grid xs={12} sm={6} md={4}>
            <KeyFeatures
              src={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/keyIcon4.svg`}
              title='FULL FLEXIBILITY'
              desp='Many of these business ideas are home-based. While they may not make you a billionaire.'
            />
          </Grid>
          <Grid xs={12} sm={6} md={4}>
            <KeyFeatures
              src={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/keyIcon6.svg`}
              title='USER-FOCUSED PROCESS'
              desp='Many of these business ideas are home-based. While they may not make you a billionaire.'
            />
          </Grid>
        </Grid>
      </motion.div>
    </motion.div>
  );
}
