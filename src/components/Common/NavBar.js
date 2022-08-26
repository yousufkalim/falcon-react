import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import NavBarMenu from './NewNavMenu';
import { Link } from 'react-router-dom';
import { useScrollPosition } from '../../utils/ScrollPosition';
import { AnimatePresence, motion, useScroll } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import WhiteLogo from '../../assets/images/falconwhitelogo.svg';
export default function NavBar(props) {
  const [Menu, SetMenu] = React.useState(false);
  const [Active, SetActive] = React.useState(false);
  // const [isOpen, setOpen] = useState(false);
  let position = useScrollPosition();
  const { scrollYProgress } = useScroll();
  const { i18n, t } = useTranslation();
  const myFunction = () => {
    SetActive(!Active);
  };
  const { language } = i18n;
  return (
    <>
      {props.ContactUs ? (
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
          <div
            className={Active ? 'changes' : 'containers'}
            onClick={() => {
              myFunction();
              SetMenu(!Menu);
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
      ) : (
        <>
          <div className='logoNew'>
            <Link className='NavLogo_Link' to={`/`}>
              <img
                className='Falcon_logo'
                alt='logo'
                src={
                  Active ? WhiteLogo : `${process.env.REACT_APP_MEDIA_URL}/uploads/images/logo.svg`
                }
                style={{ width: '100%', margin: '1% 0', cursor: 'pointer' }}
              />
            </Link>
          </div>

          <div
            className={Active ? 'change' : 'container'}
            // style={{ width: '50px', height: '30px', background: 'red' }}
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
          </div>
        </>
      )}

      {props.ContactUs ? (
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
      ) : (
        <Box className='NavBarBox' sx={{ flexGrow: 1 }}>
          <AppBar
            className='AppBarBox'
            position='fixed'
            sx={{
              backgroundColor: position <= 3 ? 'white' : 'white',
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
