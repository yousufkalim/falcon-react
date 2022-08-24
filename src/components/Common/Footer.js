import { Divider, Typography } from '@mui/material';
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Twitter from '../../assets/images/twitter.svg';
import Instagram from '../../assets/images/instagram.svg';
import Youtube from '../../assets/images/youtube.svg';
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
          <img
            id='scrollToTopBtn'
            onClick={scrollToTop}
            src={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/top_btn.svg`}
            alt='top'
          />
          <div className='FooterDiv'>
            <div className='FooterLeft'>
              <Link to={`/`}>
                <img
                  className='FooterLogo'
                  src={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/logo.svg`}
                  alt='logo'
                />
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
                  style={{ fontWeight: '700', opacity: '40%', marginBottom: '10%' }}
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
                  style={{ fontWeight: '700', opacity: '40%', marginBottom: '10%' }}
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
              <a href='https://www.facebook.com/FalconConsulting.fr' target='_blank'>
                <img
                  className='FooterIcons'
                  src={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/FooterFB.svg`}
                  alt='facebook'
                />
              </a>
              <a
                href='https://pk.linkedin.com/company/falconconsultinggroup?trk=ppro_cprof&original_referer=https%3A%2F%2Fwww.google.com%2F'
                target='_blank'
              >
                <img
                  className='FooterIcons'
                  src={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/FooterLinkedIn.svg`}
                  alt='linkedin'
                />
              </a>
              <a href='https://wa.me/+923135098197' target='_blank'>
                <img
                  className='FooterIcons'
                  src={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/FooterWhatsApp.svg`}
                  alt='whatsapp'
                />
              </a>
            </div>
            <div className='LegalMentionDiv'>
              <Typography>
                <a className='LegalMention_H' href='/policy'>
                  {t('Privacy Policy')}
                </a>{' '}
                {/* <div style={{ padding: '0 1%' }}> */}
                <img
                  style={{ padding: '0 2% 0 1%' }}
                  src={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/divider_point.svg`}
                  alt='divider'
                />
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
            <img
              className='FooterLogoMob'
              src={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/logo.svg`}
              alt='logo'
            />
          </Link>
        </div>
        <div className='Footer_MobView_ListContainer'>
          <div className='Footer_MobView_ListDiv'>
            <h4 className='Footer_MobView_Title'>{t('Overview')}</h4>
            <ul className='Footer_MobView_List'>
              <Link className='FooterMob_Link' to='/about'>
                <li className='FooterMob_Li'>{t('About')}</li>
              </Link>
              <Link className='FooterMob_Link' to='/ourprojects'>
                <li className='FooterMob_Li'>{t('Our projects')}</li>
              </Link>
              <Link className='FooterMob_Link' to='/contactus'>
                <li className='FooterMob_Li'>{t('Contact Us')}</li>
              </Link>
            </ul>
          </div>
        </div>
        <div className='Footer_MobView_ListContainer'>
          <div className='Footer_MobView_ListDiv'>
            <h4 className='Footer_MobView_Title'>{t('Solutions')}</h4>
            <ul className='Footer_MobView_List'>
              <Link className='FooterMob_Link' to='/services/ui-development'>
                <li className='FooterMob_Li'>{t('UI/UX Developmemt')}</li>
              </Link>
              <Link className='FooterMob_Link' to='/services/app-development'>
                <li className='FooterMob_Li'>{t('App Development')}</li>
              </Link>
              <Link className='FooterMob_Link' to='/services/web-development'>
                <li className='FooterMob_Li'>{t('Web Development')}</li>
              </Link>
              <Link className='FooterMob_Link' to='/services/software-development'>
                <li className='FooterMob_Li'>{t('Software Development')}</li>
              </Link>
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
          <a href='https://www.facebook.com/FalconConsulting.fr' target='_blank'>
            <img
              className='FooterIcons'
              src={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/FooterFB.svg`}
              alt='facebook'
            />
          </a>
          <a
            href='https://pk.linkedin.com/company/falconconsultinggroup?trk=ppro_cprof&original_referer=https%3A%2F%2Fwww.google.com%2F'
            target='_blank'
          >
            <img
              className='FooterIcons'
              src={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/FooterLinkedIn.svg`}
              alt='libkedin'
            />
          </a>
          <a href='https://wa.me/+923135098197' target='_blank'>
            <img
              className='FooterIcons'
              src={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/FooterWhatsApp.svg`}
              alt='whatsapp'
            />
          </a>
          <a href='https://twitter.com/FalconITConsul2' target='_blank'>
            <img
              className='FooterIcons'
              // src={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/FooterWhatsApp.svg`}
              src={Twitter}
              alt='twitter'
            />
          </a>
          <a href='https://instagram.com/falconitconsultant?igshid=YmMyMTA2M2Y=' target='_blank'>
            <img
              className='FooterIcons'
              // src={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/FooterWhatsApp.svg`}
              src={Instagram}
              alt='instagram'
            />
          </a>
          <a href='https://www.youtube.com/channel/UC44pvxAGtKji2GB8inEKxaw' target='_blank'>
            <img
              className='FooterIcons'
              // src={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/FooterWhatsApp.svg`}
              src={Youtube}
              alt='youtube'
            />
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
