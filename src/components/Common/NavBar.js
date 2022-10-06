import * as React from 'react';
import { useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import NavBarMenu from './NewNavMenu';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useScrollPosition } from '../../utils/ScrollPosition';
import { AnimatePresence, motion, useScroll } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import WhiteLogo from '../../assets/images/falconwhitelogo.svg';
import Tooltip from '@mui/material/Tooltip';
import USA from '../../assets/images/usa_flag.svg';
import French from '../../assets/images/french_flag.svg';
export default function NavBar(props) {
  const [Menu, SetMenu] = React.useState(false);
  const [Active, SetActive] = React.useState(false);
  const [Flag, SetFlag] = React.useState(false);
  // const [isOpen, setOpen] = useState(false);
  let position = useScrollPosition();
  const { scrollYProgress } = useScroll();
  const { i18n, t } = useTranslation();
  const myFunction = () => {
    SetActive(!Active);
  };
  const { language } = i18n;
  let { pathname } = useLocation();
  useEffect(() => {
    document.body.style.overflow = 'visible';
  }, [pathname]);

  return (
    <>
      {props.ContactUs && (
        <>
          {!Menu && (
            <motion.div
              className='progress-bar'
              style={{
                scaleX: scrollYProgress,
                background: props.scrollBarBG ? props.scrollBarBG : 'transparent',
              }}
            />
          )}
          <div className='logoNew'>
            <Link className='NavLogo_Link' to={`/`}>
              <img
                className='Falcon_logo'
                style={{ margin: '1% 0', cursor: 'pointer' }}
                alt='logo'
                src={
                  Active
                    ? WhiteLogo
                    : position <= 970
                    ? WhiteLogo
                    : `${process.env.REACT_APP_MEDIA_URL}/uploads/images/logo.svg`
                }
              />
            </Link>
          </div>
          <Tooltip
            title={
              language === 'fr' ? 'Change the Language to English' : 'Changer de langue en Français'
            }
          >
            <div
              id='CursorZoom'
              className={
                Active
                  ? 'NavbarLanguageMenuDiv'
                  : position <= 970
                  ? 'NavbarLanguageMenuDiv'
                  : 'NavbarLanguageDiv'
              }
              style={{
                background: Active ? '#003b7e' : position <= 970 ? 'transparent' : '#f8f8f8',
                boxShadow: Active
                  ? '0px 15px 30px rgba(0, 0, 0, 0.1)'
                  : position <= 970
                  ? '0px 15px 30px rgba(0, 0, 0, 0.1)'
                  : 'none',
              }}
              onClick={() => {
                if (language === 'fr') {
                  i18n.changeLanguage('en');
                } else {
                  i18n.changeLanguage('fr');
                }
              }}
            >
              <img className='NavbarLanguageFlag' src={language === 'fr' ? USA : French} />
              <h2
                className='NavbarLanguageName'
                style={{
                  color: Active ? '#f8f8f8' : position <= 970 ? '#f8f8f8' : '#003b7e',
                }}
              >
                {t('FR')}
              </h2>
            </div>
          </Tooltip>
          <div
            className={Active ? 'changes' : 'containers'}
            onClick={() => {
              myFunction();
              SetMenu(!Menu);
              if (!Menu) {
                document.body.style.overflow = 'hidden';
              } else {
                document.body.style.overflow = 'visible';
              }
            }}
          >
            <div
              className='bars1'
              style={{
                background: Active ? '' : position <= 970 ? '#fff' : '#003b7e',
              }}
            ></div>
            <div
              className='bars2'
              style={{
                background: Active ? '' : position <= 970 ? '#fff' : '#003b7e',
              }}
            ></div>
            <div className='bars3'>
              <div
                className='abcd'
                style={{
                  background: Active ? '' : position <= 970 ? '#fff' : '#003b7e',
                }}
              ></div>
            </div>
          </div>
        </>
      )}
      {props.default && (
        <>
          <div className='logoNew'>
            <Link className='NavLogo_Link' to={`/`}>
              <img
                className='Falcon_logo'
                alt='logo'
                src={
                  Active ? WhiteLogo : `${process.env.REACT_APP_MEDIA_URL}/uploads/images/logo.svg`
                }
                style={{ width: '100%', cursor: 'pointer', marginBottom: '1% 0' }}
              />
            </Link>
          </div>
          <Tooltip
            title={
              language === 'fr' ? 'Change the Language to English' : 'Changer de langue en Français'
            }
          >
            <div
              id='CursorZoom'
              className={Active ? 'NavbarLanguageMenuDiv' : 'NavbarLanguageDiv'}
              style={{
                background: Active ? '#003b7e' : '#f8f8f8',
                boxShadow: Active ? '0px 15px 30px rgba(0, 0, 0, 0.1)' : 'none',
              }}
              onClick={() => {
                if (language === 'fr') {
                  i18n.changeLanguage('en');
                } else {
                  i18n.changeLanguage('fr');
                }
              }}
            >
              <img className='NavbarLanguageFlag' src={language === 'fr' ? USA : French} />
              <h2
                className='NavbarLanguageName'
                style={{
                  color: Active ? '#f8f8f8' : '#003b7e',
                }}
              >
                {t('FR')}
              </h2>
            </div>
          </Tooltip>

          <div
            id='CursorZoom'
            className={Active ? 'change' : 'container'}
            // style={{ width: '50px', height: '30px', background: 'red' }}
            onClick={() => {
              myFunction();
              SetMenu(!Menu);
              if (!Menu) {
                document.body.style.overflow = 'hidden';
              } else {
                document.body.style.overflow = 'visible';
              }
            }}
          >
            <div className='bar1'></div>
            <div className='bar2'></div>
            <div className='bar3'>
              <div className='abc'></div>
            </div>
          </div>
        </>
      )}
      {props.transparent && (
        <>
          {/* {!Menu && (
            <motion.div
              className='progress-bar'
              style={{
                scaleX: scrollYProgress,
                background: props.scrollBarBG ? props.scrollBarBG : 'transparent',
              }}
            />
          )} */}
          <div className={!Menu ? '*' : 'root'}>
            <div className='logoNew'>
              <Link className='NavLogo_Link' to={`/`}>
                <img
                  className='Falcon_logo'
                  alt='logo'
                  // src={
                  //   Active
                  //     ? WhiteLogo
                  //     : `${process.env.REACT_APP_MEDIA_URL}/uploads/images/logo.svg`
                  // }
                  src={WhiteLogo}
                  style={{ width: '100%', margin: '1% 0', cursor: 'pointer' }}
                />
              </Link>
            </div>
            <Tooltip
              title={
                language === 'fr'
                  ? 'Change the Language to English'
                  : 'Changer de langue en Français'
              }
            >
              <div
                id='CursorZoom'
                className='NavbarLanguageMenuDiv'
                style={{
                  background: '#003b7e',
                  boxShadow: '0px 15px 30px rgba(0, 0, 0, 0.1)',
                }}
                onClick={() => {
                  if (language === 'fr') {
                    i18n.changeLanguage('en');
                  } else {
                    i18n.changeLanguage('fr');
                  }
                }}
              >
                <img className='NavbarLanguageFlag' src={language === 'fr' ? USA : French} />
                <h2
                  className='NavbarLanguageName'
                  style={{
                    color: '#f8f8f8',
                  }}
                >
                  {t('FR')}
                </h2>
              </div>
            </Tooltip>
            <div
              className={Active ? 'changes' : 'containers'}
              onClick={() => {
                myFunction();
                SetMenu(!Menu);
                if (!Menu) {
                  document.body.style.overflow = 'hidden';
                } else {
                  document.body.style.overflow = 'visible';
                }
              }}
            >
              <div
                className='bars1'
                style={{
                  background: '#fff',
                }}
              ></div>
              <div
                className='bars2'
                style={{
                  background: '#fff',
                }}
              ></div>
              <div className='bars3'>
                <div
                  className='abcd'
                  style={{
                    background: '#fff',
                  }}
                ></div>
              </div>
            </div>
          </div>
        </>
      )}

      {props.ContactUs && (
        <Box className='NavBarBox' sx={{ flexGrow: 1 }}>
          <AppBar
            className='AppBarBox'
            position='fixed'
            sx={{
              transition: '.5s',
              backgroundColor: position <= 970 ? 'transparent' : 'white',
              color: 'blue',
              padding: '0px 20px',
              // boxShadow: position <= 3 && 'none',
              boxShadow: position <= 3 ? 'none' : '0px 4px 13px rgba(0, 0, 0, 0.1)',
            }}
          >
            {Menu && (
              <AnimatePresence>
                <NavBarMenu Menu={Menu} SetMenu={SetMenu} />
              </AnimatePresence>
            )}

            <Toolbar className='NavToolbar '></Toolbar>
          </AppBar>
        </Box>
      )}
      {props.default && (
        <Box className='NavBarBox' sx={{ flexGrow: 1 }}>
          <AppBar
            className='AppBarBox'
            position='fixed'
            sx={{
              backgroundColor: 'white',
              padding: '0px 20px',
              // boxShadow: position <= 3 && 'none',
              boxShadow: position <= 3 ? 'none' : '0px 4px 13px rgba(0, 0, 0, 0.1)',
              height: '60px',
            }}
          >
            {Menu && (
              <AnimatePresence>
                <NavBarMenu Menu={Menu} SetMenu={SetMenu} />
              </AnimatePresence>
            )}
            <Toolbar className='NavToolbar '></Toolbar>
          </AppBar>
        </Box>
      )}
      {props.transparent && (
        <Box className='NavBarBox' sx={{ flexGrow: 1 }}>
          <AppBar
            className='AppBarBox'
            position='fixed'
            sx={{
              backgroundColor: position <= 3 ? 'transparent' : '#003B7E',
              padding: '0px 20px',
              // boxShadow: position <= 3 && 'none',
              boxShadow: position <= 3 ? 'none' : '0px 4px 13px rgba(0, 0, 0, 0.1)',
            }}
          >
            {Menu && (
              <AnimatePresence>
                <NavBarMenu Menu={Menu} SetMenu={SetMenu} />
              </AnimatePresence>
            )}
            <Toolbar className='NavToolbar '></Toolbar>
          </AppBar>
        </Box>
      )}
    </>
  );
}
