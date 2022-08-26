// Init
import React from 'react';
import { Grid } from '@mui/material';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Twitter from '../../assets/images/twitter.svg';
import Instagram from '../../assets/images/instagram.svg';
import Youtube from '../../assets/images/youtube.svg';
import { useTranslation } from 'react-i18next';
// Component
export default function Header(props) {
  const { t } = useTranslation();

  return (
    <>
      <Grid className={props.DetailHeader ? 'DetailHeader' : 'HeaderMain'} container spacing={1}>
        <Grid xs={12} sm={12} md={5}>
          <div
            className='HeaderTypo'
            // initial={{ opacity: 0 }}
            // whileInView={{ opacity: 1 }}
            // transition={{ duration: 1 }}
            // viewport={{ once: true }}
          >
            <header className='HeaderTitle'>
              <h1
                className={props.HeaderTitleClassName ? 'HeaderTitleClassName' : 'HeaderHeading'}
                style={props.TitleStyle}
                color={props.Titlecolor || '#003B7E'}
              >
                {/* <span style={{ color: "#003B7E" }}>{props.ColorTitle}</span> */}
                {t(props.Title)}
              </h1>
              <Divider
                width={props.Dividerwidth || '17%'}
                color={props.DividerBG || '#003B7E'}
                sx={{
                  height: '5px',
                  borderRadius: '4px',
                  margin: '4% 0',
                }}
              />
              <p
                className={props.HeaderParaClassName ? 'HeaderPara_Style' : 'HeaderPara'}
                color={props.DespColor || '#003B7E'}
                style={props.ParaStyle}
              >
                {t(props.Description)}
              </p>
              {props.btn && (
                <Link className='BtnLink' to={`/contactus`}>
                  <Button className={props.btnClassName ? 'btnClassName' : 'HeaderBtn'}>
                    {t(props.btnText)}
                  </Button>
                </Link>
              )}
              {props.social && (
                <div className='IconsDiv' style={{ width: '60%' }}>
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
                  {localStorage.getItem('i18nextLng') === 'fr' ? (
                    <a href='https://wa.me/+33658883107' target='_blank'>
                      <img
                        className='FooterIcons'
                        src={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/FooterWhatsApp.svg`}
                        alt='whatsapp'
                      />
                    </a>
                  ) : (
                    <a href='https://wa.me/+33664317359' target='_blank'>
                      <img
                        className='FooterIcons'
                        src={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/FooterWhatsApp.svg`}
                        alt='whatsapp'
                      />
                    </a>
                  )}
                  <a href='https://twitter.com/FalconITConsul2' target='_blank'>
                    <img
                      className='FooterIcons'
                      // src={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/FooterWhatsApp.svg`}
                      src={Twitter}
                      alt='twitter'
                    />
                  </a>
                  <a
                    href='https://instagram.com/falconitconsultant?igshid=YmMyMTA2M2Y='
                    target='_blank'
                  >
                    <img
                      className='FooterIcons'
                      // src={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/FooterWhatsApp.svg`}
                      src={Instagram}
                      alt='instagram'
                    />
                  </a>
                  <a
                    href='https://www.youtube.com/channel/UC44pvxAGtKji2GB8inEKxaw'
                    target='_blank'
                  >
                    <img
                      className='FooterIcons'
                      // src={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/FooterWhatsApp.svg`}
                      src={Youtube}
                      alt='youtube'
                    />
                  </a>
                </div>
              )}
            </header>
          </div>
        </Grid>
        <Grid
          className={props.DetailHeaderImg ? 'DetailHeaderImg' : 'HeaderImg'}
          xs={12}
          sm={12}
          md={7}
        >
          <img
            // initial={{ x: 300 }}
            // whileInView={{ x: 0 }}
            // transition={{ duration: 0.5 }}
            // viewport={{ once: true }}
            alt={props.ImgAlt || 'Header'}
            src={props.ImgSrc}
            style={props.ImgStyle}
            width={props.ImgWidth || '95%'}
          />
          {props.chatIcons ? (
            <div className='ChatIconsDiv'>
              {localStorage.getItem('i18nextLng') === 'fr' ? (
                <>
                  <a href={t('https://wa.me/+33658883107')}>
                    <img
                      className='ChatIconImg'
                      alt='whatsapp'
                      src={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/ChatIcon.svg`}
                    />
                  </a>
                  <a href={`https://calendly.com/falconconsulting`}>
                    <img
                      className='ChatIconImg'
                      alt='Calendly'
                      src={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/calendly.svg`}
                    />
                  </a>
                </>
              ) : (
                <>
                  <a href={t('https://wa.me/+33664317359')}>
                    <img
                      className='ChatIconImg'
                      alt='whatsapp'
                      src={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/ChatIcon.svg`}
                    />
                  </a>
                  <a href={`http://calendly.com/falconit`}>
                    <img
                      className='ChatIconImg'
                      alt='Calendly'
                      src={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/calendly.svg`}
                    />
                  </a>
                </>
              )}

              <Link to={`/contactus`}>
                <img
                  className='ChatIconImg'
                  alt='chat'
                  src={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/whatsappIcon.svg`}
                />
              </Link>
            </div>
          ) : null}
        </Grid>
      </Grid>
    </>
  );
}
