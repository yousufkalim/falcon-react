// Init
import React, { useState, useEffect } from 'react';
import { Typography } from '@mui/material';
import { ReactComponent as DownArrow } from '../../assets/images/DownArrow.svg';
import Divider from '@mui/material/Divider';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import BackToTop from '../../assets/images/btp.svg';
import BackTopEnglish from '../../assets/images/btp.svg';
import BackTopFrench from '../../assets/images/scrolltop_french.svg';
import { useScrollPosition } from '../../utils/ScrollPosition';
// import { IoIosArrowDown } from "react-icons";

// Component
export default function DetailHeader(props) {
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
  const [desp, setDesp] = useState();
  var rootElement = document.documentElement;
  function scrollDown() {
    // Scroll to top logic
    rootElement.scrollTo({
      top: 980,
      behavior: 'smooth'
    });
  }

  useEffect(() => {
    setDesp(t(props?.description));
  }, [props?.description]);

  return (
    <>
      {/* {props.ScrollTop && ( */}
      {/* <div
        className='scrollToTopDiv'
        style={{
          display: position <= 700 ? 'none' : 'flex',
        }}
      >
        <img className='scrollToTopText' src={BackToTop} alt='top'/>
        <div className='scrollToTopDivider'></div>
        <img
          className='scrollToTopIcon'
          onClick={scrollToTop}
          src={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/top_btn.svg`}
          alt='top'
        />
      </div> */}
      {/* // )} */}
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
      <div
        className="DetailHeader_Container"
        style={{
          background: props.background ? props.background : '#2FAD93'
        }}>
        <div className="DetailHeader_MainDiv" style={{ marginBottom: '-4px' }}>
          <img className="DetailHeader_Img" src={props.HeaderImg} alt="Design Header Image" />
          <div className="DetailHeader_Typo">
            <div className="DetailHeaderTitleDiv">
              <h1 className="DetailHeader_Title">{props.title}</h1>
              <Divider color={props.DividerBG || '#f8f8f8'} className="DetailHeader_Divider" />
            </div>
            <div
              className="DetailHeader_DespDiv"
              style={{
                background: props.typoBG ? props.typoBG : '#FF9A20EB'
              }}>
              <Divider color={props.DividerBG || '#f8f8f8'} className="DetailHeader_Divider" />
              <Typography className="DetailHeader_SubTitle">
                {t('What is ')} {props.subTitle}
              </Typography>

              <Typography className="DetailHeader_Desp">
                {/* {props.desp} */}
                {t(desp?.length > 550 ? desp.slice(0, 550) + '...' : desp)}
              </Typography>
            </div>
          </div>
        </div>
      </div>
      <div
        className="DetailHeader_DespMob"
        style={{
          background: props.typoBG ? props.typoBG : '#FF9A20EB'
        }}>
        <Divider color={props.DividerBG || '#f8f8f8'} className="DetailHeader_Divider" />
        <Typography className="DetailHeader_SubTitle">{props.subTitle}</Typography>

        <Typography className="DetailHeader_Desp">
          {t(desp?.length > 550 ? desp.slice(0, 550) + '...' : desp)}
        </Typography>
      </div>
      <div
        className="DetailHeader_BottomDiv"
        style={{
          background: props.bottomBG ? props.bottomBG : '#2FAD93'
        }}>
        {/* <img src={DownArrow} alt='Down Arrow' /> */}
        <motion.div
          animate={{
            y: [-10, 0, -10]
          }}
          transition={{
            delay: 0.05,
            repeat: Infinity
          }}
          // transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: false }}>
          <DownArrow
            onClick={scrollDown}
            style={{
              color: props.iconTheme ? props.iconTheme : 'white',
              cursor: 'pointer'
            }}
          />
        </motion.div>
        {/* <IoIosArrowDown /> */}
      </div>
    </>
  );
}
// props
// background
// HeaderImg
// title
// DividerBG
// typoBG
// subTitle
// desp
// bottomBG
