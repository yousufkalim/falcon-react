// Init
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { ToastContainer, Flip } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './utils/i18n';
import { useTranslation } from 'react-i18next';
import { Typography } from '@mui/material';
import Button from '@mui/material/Button';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
// Files
import Index from './routes/index';
import './css/index.css';
import { Helmet } from 'react-helmet';

// Component
function App() {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const { host } = window.location;
    if (host === 'falconconsulting.fr') {
      i18n.changeLanguage('fr');
    }
  }, []);

  useEffect(() => {
    let temp = localStorage.getItem('open');
    if (!temp) {
      localStorage.setItem('open', true);
    }
  }, []);
  let { pathname } = useLocation();
  useEffect(() => {
    // Scroll to top logic
    window.scrollTo({
      top: 0,
      behavior: 'auto',
    });
  }, [pathname]);

  const [open, setOpen] = React.useState(true);

  useEffect(() => {
    setOpen(localStorage.getItem('open'));
  }, [localStorage.getItem('open')]);
  const handleClose = () => {
    localStorage.setItem('open', false);
    setOpen(false);
  };
  return (
    <div>
      <Helmet>
        <title>{t('FalconIT : Expert Software Engineers')}</title>
        <meta
          name='description'
          content='In the past, it was easy to manage a team of employees who were not working thousands of miles away from you. Nowadays, businesses are adopting remote trends by employing skilled workers from around the globe. Naturally, the manager is responsible for not only managing the team of employees but also to instruct, foster, and support that team. This responsibility is not always that easy. Thus, here we will be discussing the possible challenges of managing a remote team and how to overcome such obstacles.'
        />
        <meta
          name='keywords'
          content='falcon, falconit, falcon consulting,blogs, projects, software, websites, application, developers, app developments, ios, android, blogs, articles, blog articles,collaborating,expertize,Trustful, about us, about,skilled, , ambitious, UI/UX, designers, project managers, quality testers,partnerships, contact, contact us, contact info, facebook, twitter, linkedin, calendly, social media,whatsapp,legal mentions, privacy policy,policies '
        />
      </Helmet>
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
                {t(
                  'We Use our own and third-party cookies to personalize content and to analyze web traffic.'
                )}
              </Typography>
              <Typography className='CookieBanner_Link'>
                <Link style={{ color: '#003B7E' }} to='/legalmentions'>
                  <h4>{t('Read more about cookies')}</h4>
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
        <div className='App'>
          {/* toastify Container for Notification */}
          <ToastContainer
            position='bottom-right'
            autoClose={3000}
            hideProgressBar={true}
            transition={Flip}
          />

          {/* Routes */}
          <Index />
        </div>
      </div>
    </div>
  );
}

// Export
export default App;
