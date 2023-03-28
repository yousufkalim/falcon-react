import { Grid } from '@mui/material';
import React from 'react';
import SectionHeader from './SectionHeader';
import InfoBox from './InfoBox';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

export default function AboutSection() {
  const { t } = useTranslation();
  return (
    <>
      <div className="AboutSectionDiv">
        <SectionHeader
          LeftSectionHeader={true}
          colorH2="#0F52BA"
          SectionHeaderMargin
          width="7%"
          h1="your work is our priority"
          h2="Why choose Falcon Consulting?"
          // decription="This sounds simple, but it is beneficial to your business success."
        />
        <div className="AboutSectionLower">
          <Grid container spacing={1}>
            <Grid xs={12}>
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="About_MobInfo">
                <div style={{ display: 'flex' }}>
                  <InfoBox
                    number="8"
                    title="Years of Excellence"
                    src={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/Info1.svg`}
                  />
                  <InfoBox
                    src={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/aboutSec_2.svg`}
                    number="65"
                    title="Number of Employees"
                  />
                </div>
                <div style={{ display: 'flex' }}>
                  <InfoBox
                    number="85"
                    title="Successfull Projects"
                    src={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/aboutSec_3.svg`}
                  />
                  <InfoBox
                    number="4"
                    title="Number of Offices"
                    src={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/officeicon.svg`}
                  />
                </div>
                <div style={{ display: 'flex' }}>
                  <InfoBox
                    number="20"
                    title="External Tools Built"
                    src={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/aboutSec_5.svg`}
                  />
                  <InfoBox
                    number="100%"
                    title="Improvement and Customer focused"
                    src={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/aboutSec_6.svg`}
                  />
                </div>
              </motion.div>
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="AboutTopGrid">
                <InfoBox
                  number="8"
                  title="Years of Excellence"
                  src={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/Info1.svg`}
                />
                <InfoBox
                  src={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/aboutSec_2.svg`}
                  number="65"
                  title="Number of Employees"
                />
                <InfoBox
                  number="85"
                  title="Successfull Projects"
                  src={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/aboutSec_3.svg`}
                />
              </motion.div>
            </Grid>
            <Grid container sm={12} className="AboutBottomMain">
              <Grid sm={6}>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 2 }}
                  viewport={{ once: true }}
                  className="AboutImg">
                  <img
                    alt="About Us"
                    src={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/about_section.svg`}
                  />
                </motion.div>
              </Grid>
              <Grid sm={6}>
                <motion.div
                  initial={{ y: 100, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 1 }}
                  viewport={{ once: true }}
                  className="AboutbottomGrid">
                  <InfoBox
                    number="4"
                    title="Number of Offices"
                    src={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/officeicon.svg`}>
                    {/* <AboutInfo4 opacity='.8' /> */}
                  </InfoBox>
                  <InfoBox
                    number="20"
                    title="External Tools Built"
                    src={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/aboutSec_5.svg`}
                  />
                  <InfoBox
                    number="100%"
                    title="Improvement and Customer focused"
                    src={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/aboutSec_6.svg`}
                  />
                </motion.div>
                <div className="AboutTypo">
                  <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}>
                    <h2
                      style={{
                        fontSize: '1.4rem',
                        fontWeight: '600',
                        color: '#003B7E'
                      }}>
                      {t('We believe that talent and skills do not have borders')}
                    </h2>
                    <p
                      style={{
                        fontSize: '1rem',
                        fontWeight: '400',
                        color: 'rgba(64, 64, 64, 0.7)',
                        marginTop: '2%'
                      }}>
                      {t(
                        'We are a human-oriented company, investing in training healthy atmosphere and cooperative management to make sure our employees reach their full potential, and personally develop through their work. Our team is sensitized every day about the importance of quality management, and we strive to put in place a continuous improvement process internally'
                      )}
                    </p>
                    <button className="AboutSectionBtn">
                      <Link style={{ color: '#42C2FF' }} to="/about">
                        {t('More About Our Company')}
                      </Link>
                    </button>
                  </motion.div>
                </div>
              </Grid>
            </Grid>
          </Grid>
        </div>
      </div>
    </>
  );
}
