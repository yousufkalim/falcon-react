import { Divider, Typography } from '@mui/material';
import React from 'react';
import Logo from '../../assets/images/logo.svg';
import FB from '../../assets/images/FooterFB.svg';
import LinkedIn from '../../assets/images/FooterLinkedIn.svg';
import WhatsApp from '../../assets/images/FooterWhatsApp.svg';
import TopBtn from '../../assets/images/top_btn.svg';
import DividerPoint from '../../assets/images/divider_point.svg';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function Footer(props) {
  const { i18n, t } = useTranslation();
  const { language } = i18n;

  var rootElement = document.documentElement;
  function scrollToTop() {
    // Scroll to top logic
    rootElement.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }

  return (
    <>
      <div className='Footer_WebView'>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className='FooterMain'
        >
          <img id='scrollToTopBtn' onClick={scrollToTop} src={TopBtn} alt='top' />
          <div className='FooterDiv'>
            <div className='FooterLeft'>
              <Link to={`/`}>
                <img className='FooterLogo' src={Logo} alt='logo' />
              </Link>
              <h4
                className='FooterTypo'
                style={{ color: '#282828', opacity: '50%', marginBottom: '3%', fontWeight: '500' }}
              >
                {t(
                  'The services are provided at a flat rate, or according to a determined daily rate, based on your preference. In both cases, we guarantee you a quality service at a very competitive price.'
                )}
              </h4>
            </div>
            <div className='FooterRight'>
              <div className='FooterList'>
                <h4
                  className='FooterListHeading'
                  style={{ fontWeight: '700', opacity: '40%', marginBottom: '15%' }}
                >
                  {t('Overview')}
                </h4>
                <ul>
                  <li>
                    <Link className='Footer_li' to='/about'>
                      {t('About')}
                    </Link>
                  </li>
                  <li>
                    <Link className='Footer_li' to='/ourprojects'>
                      {t('Our projects')}
                    </Link>
                  </li>
                  <li>
                    <Link className='Footer_li' to='/contactus'>
                      {t('Contact')}
                    </Link>
                  </li>
                </ul>
              </div>
              <div className='FooterList'>
                <h4
                  className='FooterListHeading'
                  style={{ fontWeight: '700', opacity: '40%', marginBottom: '15%' }}
                >
                  {t('Solutions')}
                </h4>
                <ul>
                  <li>
                    <Link className='Footer_li' to='/services/web-development'>
                      {t('Web Development')}
                    </Link>
                  </li>
                  <li>
                    <Link className='Footer_li' to='/services/app-development'>
                      {t('App Development')}
                    </Link>
                  </li>
                  <li>
                    <Link className='Footer_li' to='/services/software-development'>
                      {t('Software Development')}
                    </Link>
                  </li>
                  {/* <li>
                  <Link
                    className="Footer_li"
                    to="/services/ondemand-developers"
                  >
                    On Demand Developers
                  </Link>
                </li> */}
                  <li>
                    <Link className='Footer_li' to='/services/ui-development'>
                      {t('UI/UX Developmemt')}
                    </Link>
                  </li>
                </ul>
              </div>
              {/* <div className="FooterList">
              <Typography
                className="FooterListHeading"
                sx={{ fontWeight: "700", opacity: "40%", marginBottom: "28%" }}
              >
                Privacy
              </Typography>
              <ul>
                <li className="Footer_li">Terms of Service</li>
                <li className="Footer_li">Cookies</li>
              </ul>
            </div> */}
            </div>
          </div>
          <div
            style={{
              width: '90%',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <div className='IconsDiv'>
              <a href='https://www.facebook.com/FalconConsulting.fr'>
                <img className='FooterIcons' src={FB} alt='facebook' />
              </a>
              <a href='https://pk.linkedin.com/company/falconconsultinggroup?trk=ppro_cprof&original_referer=https%3A%2F%2Fwww.google.com%2F'>
                <img className='FooterIcons' src={LinkedIn} alt='linkedin' />
              </a>
              <a href='https://wa.me/+923135098197'>
                <img className='FooterIcons' src={WhatsApp} alt='whatsapp' />
              </a>
            </div>
            <div className='LegalMentionDiv'>
              <Typography>
                <a className='LegalMention_H' href='/policy'>
                  {t('Privacy Policy')}
                </a>{' '}
                {/* <div style={{ padding: '0 1%' }}> */}
                <img style={{ padding: '0 2% 0 1%' }} src={DividerPoint} alt='divider' />
                {/* </div> */}
                <a className='LegalMention_H' href='/legalmentions'>
                  {t('Legal Mentions')}
                </a>{' '}
              </Typography>
            </div>
          </div>
        </motion.div>

        <Divider />
        <div className='CopyRightDiv'>
          <h5 ClassName='CopyRightTypo' style={{ fontSize: '70%', fontWeight: '700' }}>
            © 2015-{new Date().getFullYear()}
            <span style={{ color: '#003B7E' }}> Falcon Consulting</span>, {t('All Rights Reserved')}
            .
          </h5>

          <h4
            className='Footer_ChangeLanguage'
            onClick={() => {
              if (language === 'fr') {
                i18n.changeLanguage('en');
              } else {
                i18n.changeLanguage('fr');
              }
            }}
          >
            <span style={{ color: '#000', opacity: '.6' }}> {t('Changer de langue en')} </span>
            {t('Français')}
          </h4>
        </div>
      </div>
      <div className='Footer_MobView'>
        <div className='Footer_MobView_LogoDiv'>
          <Link className='Footer_MobView_LogoLink' to={`/`}>
            <img className='FooterLogoMob' src={Logo} alt='logo' />
          </Link>
        </div>
        <div className='Footer_MobView_ListContainer'>
          <div className='Footer_MobView_ListDiv'>
            <h4 className='Footer_MobView_Title'>{t('Overview')}</h4>
            <ul className='Footer_MobView_List'>
              <li>
                <Link className='FooterMob_Link' to='/about'>
                  {t('About')}
                </Link>
              </li>
              <li>
                <Link className='FooterMob_Link' to='/ourprojects'>
                  {t('Our projects')}
                </Link>
              </li>
              <li>
                <Link className='FooterMob_Link' to='/contactus'>
                  {t('Contact Us')}
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className='Footer_MobView_ListContainer'>
          <div className='Footer_MobView_ListDiv'>
            <h4 className='Footer_MobView_Title'>{t('Solutions')}</h4>
            <ul className='Footer_MobView_List'>
              <li>
                <Link className='FooterMob_Link' to='/services/ui-development'>
                  {t('UI/UX Developmemt')}
                </Link>
              </li>
              <li>
                <Link className='FooterMob_Link' to='/services/app-development'>
                  {t('App Development')}
                </Link>
              </li>
              <li>
                <Link className='FooterMob_Link' to='/services/web-development'>
                  {t('Web Development')}
                </Link>
              </li>
              <li>
                <Link className='FooterMob_Link' to='/services/software-development'>
                  {t('Software Development')}
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className='Footer_MobView_LegalMentionDiv'>
          <Link className='Footer_MobView_LegalMentionLink' to='/policy'>
            {t('Privacy Policy')}
          </Link>
          <Link className='Footer_MobView_LegalMentionLink' to='/legalmentions'>
            {t('Legal Mentions')}
          </Link>
        </div>
        <div className='Footer_MobView_IconDiv'>
          <a href='https://www.facebook.com/FalconConsulting.fr'>
            <img className='FooterIcons' src={FB} alt='facebook' />
          </a>
          <a href='https://pk.linkedin.com/company/falconconsultinggroup?trk=ppro_cprof&original_referer=https%3A%2F%2Fwww.google.com%2F'>
            <img className='FooterIcons' src={LinkedIn} alt='libkedin' />
          </a>
          <a href='https://wa.me/+923135098197'>
            <img className='FooterIcons' src={WhatsApp} alt='whatsapp' />
          </a>
        </div>
        <div>
          <h5
            className='Footer_MobView_changeLang'
            // className='Footer_ChangeLanguage'
            onClick={() => {
              if (language === 'fr') {
                i18n.changeLanguage('en');
              } else {
                i18n.changeLanguage('fr');
              }
            }}
          >
            <span style={{ color: '#000', opacity: '.5', cursor: 'default' }}>
              {' '}
              {t('Changer de langue en')}{' '}
            </span>
            {t('Français')}
          </h5>
        </div>
        <Divider
          sx={{
            width: '100%',
            height: '1px',
            backgroundColor: '#282828',
            borderRadius: '5px',
            margin: '2% 0',
          }}
        />
        <div>
          <h6 ClassName='CopyRightTypo' style={{ fontSize: '70%', fontWeight: '700' }}>
            © 2015-{new Date().getFullYear()}
            <span style={{ color: '#003B7E' }}> Falcon Consulting</span>, {t('All Rights Reserved')}
            .
          </h6>
        </div>
      </div>
    </>
  );
}
