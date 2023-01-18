// Init
import { Typography } from '@mui/material';
import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { toast } from 'react-toastify';
import emailjs from 'emailjs-com';
import BackToTop from '../../assets/images/btp.svg';
import { useScrollPosition } from '../../utils/ScrollPosition';
import BackTopEnglish from '../../assets/images/btp.svg';
import BackTopFrench from '../../assets/images/scrolltop_french.svg';
// Importing Components

// Home Component
export default function BlogHeader(props) {
  const { i18n, t } = useTranslation();
  let position = useScrollPosition();
  var rootElement = document.documentElement;
  const { language } = i18n;

  function scrollToTop() {
    // Scroll to top logic
    rootElement.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
  const sendEmail = e => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    let regex = /[^\s@]+@[^\s@]+\.[^\s@]+/;
    const email = data.get('email');
    if (email === '') {
      toast.error(`${t("Email can't be blank")}`);
    } else if (regex.test(email) === false) {
      toast.error(`${t('Not a Valid Email')}`);
    } else {
      {
        localStorage.getItem('i18nextLng') === 'fr'
          ? emailjs
              .sendForm('service_9tq9fqk', 'template_yc206p5', e.target, 'tMMbs5Pn0amH90Aml')
              .then(
                result => {
                  return result;
                },
                error => {
                  return error;
                }
              )
          : emailjs
              .sendForm('service_9tq9fqk', 'template_lmpx1v8', e.target, 'tMMbs5Pn0amH90Aml')
              .then(
                result => {
                  return result;
                },
                error => {
                  return error;
                }
              );
      }
      e.target.reset();
      toast.success(t("You've Subscribed Successfully"));
    }
  };
  return (
    <div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="BlogHeaderMain">
        <h1 className="BlogHeaderHeading">
          FALCON <span>BLOG</span>
        </h1>
        <div className="BlogHeaderSubHeading">{t('Always looking into improving ourselves.')}</div>
        <div className="BlogHeaderDesp">
          {t(
            'The articles written below by our team reflect our values and expertize when it comes to collaborating in mid-size and big projects.'
          )}
        </div>
        <div className="BlogHeaderInput">
          <form
            autocomplete="off"
            style={{
              width: '100%',
              display: 'flex'
            }}
            onSubmit={sendEmail}>
            <input
              // autocomplete='false'
              name="email"
              style={{
                width: '100%',
                border: 'none',
                borderRadius: '35px',
                paddingLeft: '5%',
                fontSize: '1rem'
              }}
              placeholder={t('Your Email')}
            />
            <button type="submit" className="BlogHeader_Btn">
              {t('SUBSCRIBE')}
            </button>
          </form>
        </div>
      </motion.div>
      {/* {props.ScrollTop && (
        <div
          className="scrollToTopDiv"
          style={{
            display: position <= 700 ? 'none' : 'flex'
          }}>
          <img className="scrollToTopText" src={BackToTop} alt="text" />
          <div className="scrollToTopDivider"></div>
          <img
            className="scrollToTopIcon"
            onClick={scrollToTop}
            src={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/top_btn.svg`}
            alt="top"
          />
        </div>
      )} */}
      {props.ScrollTop && (
        <div
          className={language === 'fr' ? 'scrollToTopFr' : 'scrollToTopDiv'}
          style={{
            display: position <= 700 ? 'none' : 'flex'
          }}>
          <img
            className={language === 'fr' ? 'scrollToTopTextFr' : 'scrollToTopText'}
            src={language === 'fr' ? BackTopFrench : BackTopEnglish}
            alt="Change Language"
          />
          <div className="scrollToTopDivider"></div>
          <img
            className="scrollToTopIcon"
            onClick={scrollToTop}
            src={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/top_btn.svg`}
            alt="top"
          />
        </div>
      )}
    </div>
  );
}
