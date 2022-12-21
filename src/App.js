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
import AnimatedCursor from 'react-animated-cursor';
// Component
function App() {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const { host } = window.location;
    if (host === 'falconconsulting.fr') {
      i18n.changeLanguage('fr');
    } else {
      i18n.changeLanguage('en');
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
      behavior: 'auto'
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
      <div style={{ zIndex: '99999999', position: 'absolute' }}>
        <AnimatedCursor
          innerSize={10}
          outerSize={60}
          color="66, 195, 255"
          outerAlpha={0.2}
          innerScale={1.2}
          outerScale={1.5}
          clickables={[
            'a',
            'input[type="text"]',
            'input[type="email"]',
            'input[type="number"]',
            'input[type="submit"]',
            'input[type="image"]',
            'label[for]',
            'select',
            'textarea',
            'button',
            '.link',
            'span',
            '#CursorZoom'
          ]}
        />
      </div>
      <Helmet>
        <title>{t('Falcon IT Consulting - Software House')}</title>

        <meta
          name="description"
          content="Falcon IT is a software development and IT company with the best software management system."
        />
        <meta
          name="keywords"
          content="software house, IT company, software development, software management system"
        />
      </Helmet>
      {open === 'true' && (
        <motion.div
          initial={{ y: 100 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="CookieBanner_Container">
          <div className="CookieBanner_Div">
            <div className="CookieBanner_TypoDiv">
              <Typography sx={{ fontWeight: '500' }} className="CookieBanner_desp">
                {t(
                  'We Use our own and third-party cookies to personalize content and to analyze web traffic.'
                )}
              </Typography>
              <Typography className="CookieBanner_Link">
                <Link style={{ color: '#003B7E' }} to="/legalmentions">
                  <h4>{t('Read more about cookies')}</h4>
                </Link>
              </Typography>
            </div>
            <div className="CookieBanner_BtnDiv">
              <Button onClick={handleClose} className="CookieBanner_AgreeBtn" variant="contained">
                {t('Agree')}
              </Button>
              <Button onClick={handleClose} className="CookieBanner_DeclineBtn" variant="outlined">
                {t('Decline')}
              </Button>
            </div>
          </div>
        </motion.div>
      )}
      <div className={open === 'true' && 'CookieBanner_DullScreen'}>
        <div className="App">
          {/* toastify Container for Notification */}
          <ToastContainer
            position="bottom-right"
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
