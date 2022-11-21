// Init
import { Divider, Typography } from '@mui/material';
import React from 'react';
import BackToTop from '../../assets/images/btp.svg';
import { useTranslation } from 'react-i18next';
import { useScrollPosition } from '../../utils/ScrollPosition';
import BackTopEnglish from '../../assets/images/btp.svg';
import BackTopFrench from '../../assets/images/scrolltop_french.svg';
// Importing Components

// Home Component
export default function ProjectHeader(props) {
  const { i18n, t } = useTranslation();
  const { language } = i18n;

  let position = useScrollPosition();
  var rootElement = document.documentElement;
  function scrollToTop() {
    // Scroll to top logic
    rootElement.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  return (
    <div className="ProjectHeader_MainDiv">
      <div className="ProjectHeader_TextDiv">
        <h2 className="ProjectHeader_Title">
          {t('ALL PROJECTS START BY A SIMPLE IDEA LET US TAKE CARE OF THE REST!')}
        </h2>
        <Divider className="ProjectHeader_TitleDivider" />
        <p className="ProjectHeader_desp">
          {t(
            'Falcon Consulting had the opportunity to work on various type of projects for its clients. We implemented an efficient process in order to deliver qualitative work on time.'
          )}
        </p>
      </div>
      {/* {props.ScrollTop && (
        <div
          className="scrollToTopDiv"
          style={{
            display: position <= 700 ? 'none' : 'flex'
          }}>
          <img className="scrollToTopText" src={BackToTop} />
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
