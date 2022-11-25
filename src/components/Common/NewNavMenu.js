import * as React from 'react';
import Toolbar from '@mui/material/Toolbar';
import { Typography } from '@mui/material';
import { AnimatePresence, motion } from 'framer-motion';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
export default function NewNavBarMenu({ Menu, SetMenu }) {
  const { i18n, t } = useTranslation();
  const { language } = i18n;
  const [open, setOpen] = React.useState(false);
  const handleClick = () => {
    setOpen(!open);
  };
  const [Active, setActive] = React.useState(false);
  const menuRoute = window.location.pathname;
  return (
    <>
      <AnimatePresence>
        <motion.div
          style={{
            background: '#003b7e70',
            margin: '0',
            padding: '0',
            width: '100%',
            height: '100vh',
            position: 'absolute',
            left: '0',
            zIndex: '9999999'
          }}
          animate={{
            y: [-1000, 0]
          }}
          transition={{
            ease: 'easeOut',
            delay: 0.05
          }}>
          <motion.div
            style={{
              background: '#003b7e',
              margin: '0',
              padding: '0',
              width: '100%',
              height: '100vh',
              position: 'absolute',
              left: '0'
            }}
            animate={{ y: [-1000, 0] }}
            transition={{
              ease: 'easeOut',
              delay: 0.15
            }}>
            <Toolbar
              className="NavToolbar "
              sx={{
                margin: '0 5%',
                display: 'flex',
                justifyContent: 'space-between'
              }}>
              {/* <Link className='NavLogo_Link' to={`/`}>
              <LogoWhite
                style={{
                  width: '100%',
                  color: 'white',
                  height: 35,
                }}
              />
            </Link> */}
              {/* <motion.div animate={{ opacity: [0, 1] }} transition={{ ease: 'easeOut', delay: 1.5 }}>
              <div
                className={Active ? 'change' : 'container'}
                className='change'
                onClick={() => {
                  myFunction();
                  SetMenu(!Menu);
                }}
              >
                <div className='bar1'></div>
                <div className='bar2'></div>
                <div className='bar3'>
                  <div className='abc'></div>
                </div>
              </div> */}
              {/* <img
                className='MenuIconMob'
                alt='NavMenu'
                src={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/close_White.png`}
                style={{
                  color: 'white',
                  cursor: 'pointer',
                }}
                onClick={(e) => SetMenu(!Menu)}
              /> */}
              {/* </motion.div> */}
            </Toolbar>
            <div
              className="destopView"
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              }}>
              <div className="newMenuDiv" style={{ height: '100vh' }}>
                <motion.div
                  // animate={{ opacity: Menu ? [0, 1] : [1, 0] }}
                  animate={{ opacity: [0, 1] }}
                  transition={{ ease: 'easeOut', delay: 1 }}
                  style={{
                    display: 'flex',
                    height: '70vh',
                    justifyContent: 'space-between',
                    textDecoration: 'none',
                    alignItems: 'center'
                  }}>
                  <motion.div
                    // animate={{ y: [50, 0], opacity: [0, 1] }}
                    animate={{ y: Menu ? [50, 0] : [0, 50], opacity: Menu ? [0, 1] : [1, 0] }}
                    transition={{ ease: 'easeOut', delay: 0.6 }}
                    // style={{ width: '30%' }}
                    style={{ overflow: 'visible', whiteSpace: 'nowrap' }}>
                    <div
                      className="MenuHoverDiv"
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center'
                      }}>
                      <div className="MenuExpandDiv"></div>

                      <div>
                        <Link id={menuRoute === '/about' ? 'disableId' : 'menuId'} to="/about">
                          {t('About')}
                        </Link>
                        <div id={menuRoute === '/about' ? 'b_disable' : 'b'}></div>
                      </div>
                      <div className="MenuExpandDiv"></div>
                    </div>
                  </motion.div>
                  <motion.div
                    // animate={{ y: [50, 0], opacity: [0, 1] }}
                    animate={{ y: Menu ? [50, 0] : [0, 50], opacity: Menu ? [0, 1] : [1, 0] }}
                    transition={{ ease: 'easeOut', delay: 0.7 }}>
                    <div
                      className="dropdown_new"
                      style={{
                        margin: '1% 2%'
                      }}
                      // onClick={(e) => SetServiceDropDown(!ServiceDropDown)}
                    >
                      <div
                        style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center'
                        }}>
                        <div>
                          <div
                            // id='menuId'
                            id={
                              menuRoute === '/services/web-development' ||
                              menuRoute === '/services/app-development' ||
                              menuRoute === '/services/software-development' ||
                              menuRoute === '/services/ui-development' ||
                              menuRoute === '/services/ondemand-developers'
                                ? 'disableId'
                                : 'menuId'
                            }
                            style={{ marginLeft: '10px' }}>
                            {t('Services')}
                          </div>
                          <div
                            id={
                              menuRoute === '/services/web-development' ||
                              menuRoute === '/services/app-development' ||
                              menuRoute === '/services/software-development' ||
                              menuRoute === '/services/ui-development' ||
                              menuRoute === '/services/ondemand-developers'
                                ? 'b_disable'
                                : 'b'
                            }
                            style={{ marginLeft: '10px' }}></div>
                          <div id="c">
                            <div id="r"></div>
                            <ul style={{ listStyle: 'none', width: '100%' }}>
                              <li className="MenuDropdownList" style={{ padding: '5px 0' }}>
                                <Link
                                  className={
                                    menuRoute === '/services/web-development'
                                      ? 'MenuDropdownLinksDisable'
                                      : 'MenuDropdownLinks'
                                  }
                                  to={`/services/web-development`}>
                                  {t('Website')}
                                </Link>
                              </li>
                              <li className="MenuDropdownList" style={{ padding: '5px 0' }}>
                                <Link
                                  className={
                                    menuRoute === '/services/app-development'
                                      ? 'MenuDropdownLinksDisable'
                                      : 'MenuDropdownLinks'
                                  }
                                  to={`/services/app-development`}>
                                  {t('Mobile Application')}
                                </Link>
                              </li>
                              <li className="MenuDropdownList" style={{ padding: '5px 0' }}>
                                <Link
                                  className={
                                    menuRoute === '/services/software-development'
                                      ? 'MenuDropdownLinksDisable'
                                      : 'MenuDropdownLinks'
                                  }
                                  to={`/services/software-development`}>
                                  {t('Software')}
                                </Link>
                              </li>
                              <li className="MenuDropdownList" style={{ padding: '5px 0' }}>
                                <Link
                                  className={
                                    menuRoute === '/services/ui-development'
                                      ? 'MenuDropdownLinksDisable'
                                      : 'MenuDropdownLinks'
                                  }
                                  to={`/services/ui-development`}>
                                  {t('UI/UX Design')}
                                </Link>
                              </li>
                              <li className="MenuDropdownList" style={{ padding: '5px 0' }}>
                                <Link
                                  className={
                                    menuRoute === '/services/ondemand-developers'
                                      ? 'MenuDropdownLinksDisable'
                                      : 'MenuDropdownLinks'
                                  }
                                  to={`/services/ondemand-developers`}>
                                  {t('On Demand')}
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="spaceDiv"></div>
                      </div>
                      {/* {ServiceDropDown && ( */}
                      {/* <motion.div
                       animate={{ y: [100, 20], opacity: [0, 1] }}
                       transition={{ ease: 'easeOut', duration: 1 }}
                      > */}
                      {/* <div id='c'>
                        <ul style={{ listStyle: 'none', width: '100%' }}>
                          <li className='MenuDropdownList' style={{ padding: '5px 0' }}>
                            <Link
                              className={
                                menuRoute === '/services/web-development'
                                  ? 'MenuDropdownLinksDisable'
                                  : 'MenuDropdownLinks'
                              }
                              to={`/services/web-development`}
                            >
                              {t('Website')}
                            </Link>
                          </li>
                          <li className='MenuDropdownList' style={{ padding: '5px 0' }}>
                            <Link
                              className={
                                menuRoute === '/services/app-development'
                                  ? 'MenuDropdownLinksDisable'
                                  : 'MenuDropdownLinks'
                              }
                              to={`/services/app-development`}
                            >
                              {t('Mobile Application')}
                            </Link>
                          </li>
                          <li className='MenuDropdownList' style={{ padding: '5px 0' }}>
                            <Link
                              className={
                                menuRoute === '/services/software-development'
                                  ? 'MenuDropdownLinksDisable'
                                  : 'MenuDropdownLinks'
                              }
                              to={`/services/software-development`}
                            >
                              {t('Software')}
                            </Link>
                          </li>
                          <li className='MenuDropdownList' style={{ padding: '5px 0' }}>
                            <Link
                              className={
                                menuRoute === '/services/ui-development'
                                  ? 'MenuDropdownLinksDisable'
                                  : 'MenuDropdownLinks'
                              }
                              to={`/services/ui-development`}
                            >
                              {t('UI/UX Design')}
                            </Link>
                          </li>
                          <li className='MenuDropdownList' style={{ padding: '5px 0' }}>
                            <Link
                              className={
                                menuRoute === '/services/ondemand-developers'
                                  ? 'MenuDropdownLinksDisable'
                                  : 'MenuDropdownLinks'
                              }
                              to={`/services/ondemand-developers`}
                            >
                              {t('On Demand')}
                            </Link>
                          </li>
                        </ul>
                      </div> */}
                      {/* </motion.div> */}
                      {/* // )} */}
                    </div>
                  </motion.div>
                  {/* {ServiceDropDown && ( */}
                  {/* <motion.div
                    animate={{ y: [50, 0], opacity: [0, 1] }}
                    transition={{ ease: 'easeOut', delay: 1 }}
                    // animate={{ x: [-100, 20, 10], opacity: [0, 1] }}
                    // transition={{ ease: 'easeOut', duration: 1.5 }}
                    className='spaceDiv'
                  ></motion.div> */}
                  {/* )} */}
                  {/* <motion.div
                    // animate={{ y: [50, 0], opacity: [0, 1] }}
                    animate={{ y: Menu ? [50, 0] : [0, 50], opacity: Menu ? [0, 1] : [1, 0] }}
                    transition={{ ease: 'easeOut', delay: 0.7 }}
                  >
                    <div
                      className='dropdown_new'
                      style={{
                        margin: '1% 2%',
                      }}
                      // onClick={(e) => SetServiceDropDown(!ServiceDropDown)}
                    >
                      <div
                        style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                        }}
                      >
                        <div>
                          <Link id='menuId' to='/ourprojects' style={{ marginLeft: '10px' }}>
                            {t('Projects')}
                          </Link>
                          <div id='b' style={{ marginLeft: '10px' }}></div>
                        </div>
                        <div className='spaceDiv'></div>
                      </div>
                      <motion.div
                        animate={{ y: [100, 20], opacity: [0, 1] }}
                        transition={{ ease: 'easeOut', duration: 1 }}
                        id='c'
                        // className='ServicesDropDown'
                      >
                        <ul style={{ listStyle: 'none', width: '100%' }}>
                          <li className='MenuDropdownList' style={{ padding: '5px 0' }}>
                            <div className='MenuDropdownLinks'>{t('WEBSITE')}</div>
                          </li>
                          <li className='MenuDropdownList' style={{ padding: '5px 0' }}>
                            <div className='MenuDropdownLinks'>{t('MOBILE APPLICATION')}</div>
                          </li>
                          <li className='MenuDropdownList' style={{ padding: '5px 0' }}>
                            <div className='MenuDropdownLinks'>{t('SOFTWARE')}</div>
                          </li>
                          <li className='MenuDropdownList' style={{ padding: '5px 0' }}>
                            <div className='MenuDropdownLinks'>{t('UI/UX DESIGN')}</div>
                          </li>
                          <li className='MenuDropdownList' style={{ padding: '5px 0' }}>
                            <div className='MenuDropdownLinks'>{t('DATA & CLOUD')}</div>
                          </li>
                        </ul>
                      </motion.div>
                    </div>
                  </motion.div> */}
                  <motion.div
                    animate={{ y: [50, 0], opacity: [0, 1] }}
                    // animate={{ y: Menu ? [50, 0] : [0, 50], opacity: Menu ? [0, 1] : [1, 0] }}
                    transition={{ ease: 'easeOut', delay: 0.8 }}
                    style={{
                      margin: '1% 2%'
                    }}>
                    <div
                      className="MenuHoverDiv"
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center'
                      }}>
                      <div className="MenuExpandDiv"></div>

                      <div>
                        <Link
                          id={menuRoute === '/ourprojects' ? 'disableId' : 'menuId'}
                          to="/ourprojects">
                          {t('Projects')}
                        </Link>
                        <div id={menuRoute === '/ourprojects' ? 'b_disable' : 'b'}></div>
                      </div>
                      <div className="MenuExpandDiv"></div>
                    </div>
                  </motion.div>
                  <motion.div
                    animate={{ y: [50, 0], opacity: [0, 1] }}
                    // animate={{ y: Menu ? [50, 0] : [0, 50], opacity: Menu ? [0, 1] : [1, 0] }}
                    transition={{ ease: 'easeOut', delay: 0.8 }}
                    style={{
                      margin: '1% 2%'
                    }}>
                    <div
                      className="MenuHoverDiv"
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center'
                      }}>
                      <div className="MenuExpandDiv"></div>

                      <div>
                        <Link id={menuRoute === '/clients' ? 'disableId' : 'menuId'} to="/clients">
                          {t('Clients')}
                        </Link>
                        <div id={menuRoute === '/clients' ? 'b_disable' : 'b'}></div>
                      </div>
                      <div className="MenuExpandDiv"></div>
                    </div>
                  </motion.div>
                  <motion.div
                    animate={{ y: [50, 0], opacity: [0, 1] }}
                    // animate={{ y: Menu ? [50, 0] : [0, 50], opacity: Menu ? [0, 1] : [1, 0] }}
                    transition={{ ease: 'easeOut', delay: 0.9 }}
                    style={{
                      margin: '1% 2%'
                    }}>
                    <div
                      className="MenuHoverDiv"
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center'
                      }}>
                      <div className="MenuExpandDiv"></div>

                      <div>
                        <Link id={menuRoute === '/blog' ? 'disableId' : 'menuId'} to="/blog">
                          {t('Blog')}
                        </Link>
                        <div id={menuRoute === '/blog' ? 'b_disable' : 'b'}></div>
                      </div>
                      <div className="MenuExpandDiv"></div>
                    </div>
                  </motion.div>
                  <motion.div
                    animate={{ y: [50, 0], opacity: [0, 1] }}
                    // animate={{ y: Menu ? [50, 0] : [0, 50], opacity: Menu ? [0, 1] : [1, 0] }}
                    transition={{ ease: 'easeOut', delay: 1 }}
                    style={{
                      margin: '1% 2%'
                    }}>
                    <div
                      className="MenuHoverDiv"
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center'
                      }}>
                      <div className="MenuExpandDiv"></div>

                      <div>
                        <Link
                          id={menuRoute === '/contactus' ? 'disableId' : 'menuId'}
                          to="/contactus">
                          {t('Contact')}
                        </Link>
                        <div id={menuRoute === '/contactus' ? 'b_disable' : 'b'}></div>
                      </div>
                      <div className="MenuExpandDiv"></div>
                    </div>
                  </motion.div>
                </motion.div>
                <div
                  style={{
                    display: 'flex',
                    height: '20vh',
                    justifyContent: 'space-between',
                    textDecoration: 'none',
                    alignItems: 'center'
                  }}>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      textAlign: 'center',
                      width: '100%'
                    }}>
                    <motion.div
                      animate={{ y: [50, 0], opacity: [0, 1] }}
                      transition={{ ease: 'easeOut', delay: 1.2 }}
                      style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        textAlign: 'center'
                      }}>
                      <Typography
                        className="Menu_languageTypo"
                        sx={{ color: '#f8f8f8', fontWeight: '600', fontSize: '1.5rem' }}>
                        <span style={{ color: '#fff', opacity: '.6' }}>
                          {' '}
                          {t('Changer de langue en')}{' '}
                        </span>
                        <span
                          style={{ cursor: 'pointer' }}
                          onClick={() => {
                            if (language === 'fr') {
                              i18n.changeLanguage('en');
                            } else {
                              i18n.changeLanguage('fr');
                            }
                          }}>
                          {t('Français')}{' '}
                        </span>
                      </Typography>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
            <div className="Service_Mobile">
              <div className="Service_MobileDiv">
                <List
                  sx={{
                    width: '100%',
                    maxWidth: 360,
                    bgcolor: 'background.paper'
                  }}
                  component="nav"
                  className="NavMenu_box"
                  // aria-labelledby="nested-list-subheader"
                >
                  <ListItemButton id="Mob_nav">
                    <Link className="Nav_links" to={`/about`}>
                      <ListItemText id="Mob_items" primary={t('About')} />
                    </Link>
                  </ListItemButton>
                  <ListItemButton id="Mob_nav" onClick={handleClick}>
                    <ListItemText
                      id="Mob_items"
                      className="dropDown_list"
                      primary={t('Services')}
                    />
                    {open ? <ExpandLess /> : <ExpandMore />}
                  </ListItemButton>
                  <Collapse className="Service_list" in={open} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                      {/* primaryTypographyProps={{fontSize: "1.4rem",color:"white",fontWeight:"500",lineHeight:1 }}  */}
                      <ListItemButton
                        id="Mob_nav"
                        sx={{
                          pl: 6
                        }}>
                        <Link style={{ width: '100%' }} to={`/services/web-development`}>
                          <ListItemText>
                            <div className="Servive_DropDown"> {t('WEB DEVELOPMENT')}</div>
                          </ListItemText>
                        </Link>
                      </ListItemButton>
                      <ListItemButton id="Mob_nav" sx={{ pl: 6 }}>
                        <Link style={{ width: '100%' }} to={`/services/app-development`}>
                          <ListItemText>
                            <div className="Servive_DropDown"> {t('APP DEVELOPMENT')}</div>
                          </ListItemText>
                        </Link>
                      </ListItemButton>
                      <ListItemButton id="Mob_nav" sx={{ pl: 6 }}>
                        <Link style={{ width: '100%' }} to={`/services/software-development`}>
                          <ListItemText>
                            <div className="Servive_DropDown"> {t('SOFTWARE DEVELOPMENT')}</div>
                          </ListItemText>
                        </Link>
                      </ListItemButton>
                      <ListItemButton id="Mob_nav" sx={{ pl: 6 }}>
                        <Link style={{ width: '100%' }} to={`/services/ondemand-developers`}>
                          <ListItemText>
                            <div className="Servive_DropDown"> {t('ON DEMAND DEVELOPERS')}</div>
                          </ListItemText>
                        </Link>
                      </ListItemButton>
                      <ListItemButton id="Mob_nav" sx={{ pl: 6 }}>
                        <Link style={{ width: '100%' }} to={`/services/ui-development`}>
                          <ListItemText>
                            <div className="Servive_DropDown"> {t('UI/UX DEVELOPMENT')}</div>
                          </ListItemText>
                        </Link>
                      </ListItemButton>
                    </List>
                  </Collapse>
                  <ListItemButton id="Mob_nav">
                    <Link className="Nav_links" to={`/blog`}>
                      <ListItemText primary={t('Blog')} />
                    </Link>
                  </ListItemButton>
                  <ListItemButton id="Mob_nav">
                    <Link className="Nav_links" to={`/ourprojects`}>
                      <ListItemText primary={t('Our Projects')} />
                    </Link>
                  </ListItemButton>
                  <ListItemButton id="Mob_nav">
                    <Link className="Nav_links" to={`/clients`}>
                      <ListItemText primary={t('Clients')} />
                    </Link>
                  </ListItemButton>
                  <ListItemButton id="Mob_nav">
                    <Link className="Nav_links" to={`/contactus`}>
                      <ListItemText primary={t('Contact Us')} />
                    </Link>
                  </ListItemButton>
                </List>
                <div className="Menu_languageMobMain">
                  <div className="Menu_languageMobDiv">
                    <Typography
                      className="Menu_languageTypo"
                      sx={{ color: '#f8f8f8', fontWeight: '600' }}
                      onClick={() => {
                        if (language === 'fr') {
                          i18n.changeLanguage('en');
                        } else {
                          i18n.changeLanguage('fr');
                        }
                      }}>
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
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </>
  );
}
