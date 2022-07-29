import * as React from 'react';
import Toolbar from '@mui/material/Toolbar';
import { ReactComponent as LogoWhite } from '../../assets/images/logo_white.svg';
import CloseIcon from '../../assets/images/close_White.png';
import FalconIcon from '../../assets/images/falcon_Icon.svg';
import { Divider, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
export default function NavBarMenu({ Menu, SetMenu }) {
  const { i18n, t } = useTranslation();
  const { language } = i18n;

  const [ServiceDropDown, SetServiceDropDown] = React.useState(true);
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <>
      <motion.div
        className='MenuDiv'
        animate={{ opacity: [0, 1] }}
        transition={{ ease: 'easeOut', duration: 0.5 }}
      >
        <Toolbar
          className='NavToolbar '
          sx={{
            margin: '0 5%',
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <Link className='NavLogo_Link' to={`/`}>
            <LogoWhite
              style={{
                width: '100%',
                color: 'white',
                height: 35,
              }}
            />
          </Link>
          <img
            className='MenuIconMob'
            alt='NavMenu'
            src={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/close_White.png`}
            style={{
              color: 'white',
              cursor: 'pointer',
            }}
            onClick={(e) => SetMenu(!Menu)}
          />
        </Toolbar>
        <div className='MenuSectionMain'>
          <div className='MenuSection'>
            <div className='MenuImgDiv'>
              <img
                className='MenuImg'
                style={{ opacity: '.5' }}
                src={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/falcon_Icon.svg`}
                alt='Falcon'
              />
            </div>
            <div className='MenuTypoDiv'>
              <div className='ServiceOptionDiv'>
                {ServiceDropDown && (
                  <>
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 1 }}
                      className='ServicesDropDown'
                    >
                      <ul className='ServicesFields'>
                        <li>
                          <Link to={`/services/web-development`}>{t('WEB DEVELOPMENT')}</Link>
                        </li>
                        <li>
                          <Link to={`/services/app-development`}>{t('APP DEVELOPMENT')}</Link>
                        </li>
                        <li>
                          <Link to={`/services/software-development`}>
                            {t('SOFTWARE DEVELOPMENT')}
                          </Link>
                        </li>
                        <li>
                          <Link to={`/services/ondemand-developers`}>
                            {t('ON DEMAND DEVELOPERS')}
                          </Link>
                        </li>
                        <li>
                          <Link to={`/services/ui-development`}>{t('UI/UX DEVELOPMENT')}</Link>
                        </li>
                      </ul>
                    </motion.div>
                    <Divider
                      orientation='vertical'
                      sx={{
                        width: '.5%',
                        height: '35%',
                        backgroundColor: '#fff',
                        borderRadius: '4px',
                        marginLeft: '5%',
                      }}
                    />
                  </>
                )}
              </div>
              {ServiceDropDown ? (
                <>
                  <div className='class-name'></div>
                </>
              ) : null}

              <div className='MainMenu'>
                <div className='text-dot-container'>
                  <span class='dot'></span>
                  {/* <a style={{color:"white"}} href={`/about`}>About</a> */}
                  <Link to='/about'>{t('About')}</Link>
                </div>
                <div className='text-dot-container'>
                  <span class='dot'></span>
                  <span
                    className='services'
                    // onClick={(e) => SetServiceDropDown(!ServiceDropDown)}
                  >
                    {t('Services')}
                  </span>
                </div>
                <div className='text-dot-container'>
                  <span class='dot'></span>
                  <Link to='/blog'>{t('Blog')}</Link>
                </div>
                <div className='text-dot-container'>
                  <span class='dot'></span>
                  <Link to='/ourprojects'>{t('Our Projects')}</Link>
                </div>
                <div className='text-dot-container'>
                  <span class='dot'></span>
                  <Link to='/contactus'>{t('Contact Us')}</Link>
                </div>
                <ul className='MainMenuList'>
                  {/* <li onClick={(e) => SetServiceDropDown(!ServiceDropDown)}>
                            Services
                              </li> */}

                  {/* mobileview */}
                  <div className='Service_Mobile'>
                    <div className='Service_MobileDiv'>
                      <List
                        sx={{
                          width: '100%',
                          maxWidth: 360,
                          bgcolor: 'background.paper',
                        }}
                        component='nav'
                        className='NavMenu_box'
                        // aria-labelledby="nested-list-subheader"
                      >
                        <ListItemButton id='Mob_nav'>
                          <Link className='Nav_links' to={`/about`}>
                            <ListItemText id='Mob_items' primary={t('About')} />
                          </Link>
                        </ListItemButton>
                        <ListItemButton id='Mob_nav' onClick={handleClick}>
                          <ListItemText
                            id='Mob_items'
                            className='dropDown_list'
                            primary={t('Services')}
                          />
                          {open ? <ExpandLess /> : <ExpandMore />}
                        </ListItemButton>
                        <Collapse className='Service_list' in={open} timeout='auto' unmountOnExit>
                          <List component='div' disablePadding>
                            {/* primaryTypographyProps={{fontSize: "1.4rem",color:"white",fontWeight:"500",lineHeight:1 }}  */}
                            <ListItemButton
                              id='Mob_nav'
                              sx={{
                                pl: 6,
                              }}
                            >
                              <Link style={{ width: '100%' }} to={`/services/web-development`}>
                                <ListItemText>
                                  <div className='Servive_DropDown'> {t('WEB DEVELOPMENT')}</div>
                                </ListItemText>
                              </Link>
                            </ListItemButton>
                            <ListItemButton id='Mob_nav' sx={{ pl: 6 }}>
                              <Link style={{ width: '100%' }} to={`/services/app-development`}>
                                <ListItemText>
                                  <div className='Servive_DropDown'> {t('APP DEVELOPMENT')}</div>
                                </ListItemText>
                              </Link>
                            </ListItemButton>
                            <ListItemButton id='Mob_nav' sx={{ pl: 6 }}>
                              <Link style={{ width: '100%' }} to={`/services/software-development`}>
                                <ListItemText>
                                  <div className='Servive_DropDown'>
                                    {' '}
                                    {t('SOFTWARE DEVELOPMENT')}
                                  </div>
                                </ListItemText>
                              </Link>
                            </ListItemButton>
                            <ListItemButton id='Mob_nav' sx={{ pl: 6 }}>
                              <Link style={{ width: '100%' }} to={`/services/ondemand-developers`}>
                                <ListItemText>
                                  <div className='Servive_DropDown'>
                                    {' '}
                                    {t('ON DEMAND DEVELOPERS')}
                                  </div>
                                </ListItemText>
                              </Link>
                            </ListItemButton>
                            <ListItemButton id='Mob_nav' sx={{ pl: 6 }}>
                              <Link style={{ width: '100%' }} to={`/services/ui-development`}>
                                <ListItemText>
                                  <div className='Servive_DropDown'> {t('UI/UX DEVELOPMENT')}</div>
                                </ListItemText>
                              </Link>
                            </ListItemButton>
                          </List>
                        </Collapse>
                        <ListItemButton id='Mob_nav'>
                          <Link className='Nav_links' to={`/blog`}>
                            <ListItemText primary={t('Blog')} />
                          </Link>
                        </ListItemButton>
                        <ListItemButton id='Mob_nav'>
                          <Link className='Nav_links' to={`/ourprojects`}>
                            <ListItemText primary={t('Our Projects')} />
                          </Link>
                        </ListItemButton>
                        <ListItemButton id='Mob_nav'>
                          <Link className='Nav_links' to={`/contactus`}>
                            <ListItemText primary={t('Contact Us')} />
                          </Link>
                        </ListItemButton>
                      </List>
                      <div className='Menu_languageMobMain'>
                        <div className='Menu_languageMobDiv'>
                          <Typography
                            className='Menu_languageTypo'
                            sx={{ color: '#f8f8f8', fontWeight: '600' }}
                            onClick={() => {
                              if (language === 'fr') {
                                i18n.changeLanguage('en');
                              } else {
                                i18n.changeLanguage('fr');
                              }
                            }}
                          >
                            <span style={{ color: '#fff', opacity: '.6' }}>
                              {' '}
                              {t('Changer de langue en')}{' '}
                            </span>
                            {t('Français')}
                          </Typography>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* mobileview */}

                  {/* <li className="Service_Pc">
                            <a href={`/blog`}>Blog</a>
                          </li>
                          <li className="Service_Pc">
                            <a href={`/ourprojects`}>Our Projects</a>
                          </li>
                          <li className="Service_Pc">
                            <a href={`/contactus`}>Contact Us</a>
                          </li> */}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className='Menu_languageContainer'>
          <div className='Menu_languageDiv'>
            <Typography className='Menu_languageTypo' sx={{ color: '#f8f8f8', fontWeight: '600' }}>
              <span style={{ color: '#fff', opacity: '.6' }}> {t('Changer de langue en')} </span>
              <span
                style={{ cursor: 'pointer' }}
                onClick={() => {
                  if (language === 'fr') {
                    i18n.changeLanguage('en');
                  } else {
                    i18n.changeLanguage('fr');
                  }
                }}
              >
                {t('Français')}{' '}
              </span>
            </Typography>
          </div>
        </div>
      </motion.div>
    </>
  );
}
