// Init
import React from 'react';
import Divider from '@mui/material/Divider';
import BackToTop from '../../assets/images/btp.svg';
import { useTranslation } from 'react-i18next';
import { useScrollPosition } from '../../utils/ScrollPosition';
import BackTopEnglish from '../../assets/images/btp.svg';
import BackTopFrench from '../../assets/images/scrolltop_french.svg';

// Component
export default function ClientHeader(props) {
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
  return (
    <>
      <div className="ClientHeader_MainDiv">
        <h2 className="ClientHeader_Heading">{t('Our Clients')}</h2>
        <Divider className="ClientHeader_Divider" />
        <p className="ClientHeader_Desp">
          {t(
            'Falcon Consulting had the opportunity to work on various type of projects for its clients. We implemented an efficient process in order to deliver qualitative work on time.'
          )}
        </p>
        {/* {props.ScrollTop && (
          <div
            className='scrollToTopDiv'
            style={{
              display: position <= 700 ? 'none' : 'flex',
            }}
          >
            <img className='scrollToTopText' src={BackToTop} alt='text' />
            <div className='scrollToTopDivider'></div>
            <img
              className='scrollToTopIcon'
              onClick={scrollToTop}
              src={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/top_btn.svg`}
              alt='top'
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
    </>
  );
}
