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

// Component
function App() {
  const { t, i18n } = useTranslation();
  let { pathname } = useLocation();

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

  useEffect(() => {
    // Scroll to top logic
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }, 800);
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
        <div className='App'>
          {/* toastify Container for Notification */}
          <ToastContainer position='bottom-right' autoClose={3000} hideProgressBar={true} transition={Flip} />

          {/* Routes */}
          <Index />
        </div>
      </div>
    </div>
  );
}

// Export
export default App;
