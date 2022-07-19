// Init
import React, { useEffect } from 'react';

// Importing Components
import NavBar from '../components/Common/NavBar';
import Header from '../components/Common/Header';
import ServiceProvided from '../components/Common/ServiceProvided';
import LatestProjects from '../components/Common/LatestProjects';
import AboutSection from '../components/Common/AboutSection';
import ClientSection from '../components/Common/ClientSection';
import ReviewSection from '../components/Common/ReviewsSection';
import BlogSection from '../components/Common/BlogSection';
import ContactUsSection from '../components/Common/ContactUsSection';
import LocationSection from '../components/Common/LocationSection';
import Footer from '../components/Common/Footer';
import { Typography } from '@mui/material';
import Button from '@mui/material/Button';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

// import
// Home Component
export default function Home() {
  const { i18n, t } = useTranslation();

  const [open, setOpen] = React.useState(true);

  useEffect(() => {
    setOpen(localStorage.getItem('open'));
  }, [localStorage.getItem('open')]);
  const handleClose = () => {
    localStorage.setItem('open', false);
    setOpen(false);
  };
  return (
    <>
      {open === 'true' && (
        <motion.div
          initial={{ y: 100 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className='CookieBanner_Container'
        >
          <div className='CookieBanner_Div'>
            <div className='CookieBanner_TypoDiv'>
              <Typography sx={{ fontWeight: '500' }} className='CookieBanner_desp'>
                {t('We Use our own and third-party cookies to personalize content and to analyze web traffic.')}
              </Typography>
              <Typography className='CookieBanner_Link'>
                <Link style={{ color: '#003B7E' }} to='/legalmentions'>
                  {t('Read more about cookies')}
                </Link>
              </Typography>
            </div>
            <div className='CookieBanner_BtnDiv'>
              <Button onClick={handleClose} className='CookieBanner_AgreeBtn' variant='contained'>
                {t('Agree')}
              </Button>
              <Button onClick={handleClose} className='CookieBanner_DeclineBtn' variant='outlined'>
                {t('Decline')}
              </Button>
            </div>
          </div>
        </motion.div>
      )}

      <div className={open === 'true' && 'CookieBanner_DullScreen'}>
        <div className='HomeContainer'>
          <NavBar />
          <Header
            Title='WE PROVIDE GREAT SERVICES AT THE BEST PRICE.'
            Description='Software house with a team of experienced developers and project managers. We pride ourselves in delivering high-quality work for our partners. '
            btn
            btnText='GET A FREE QUOTE'
            chatIcons
          />
          <ServiceProvided />
          <LatestProjects ProjectsSummary />
          <AboutSection />
          <ClientSection />
          <ReviewSection />
          <BlogSection />
          <ContactUsSection />
          <LocationSection />
          <Footer />
        </div>
      </div>
    </>
  );
}
