import { Typography } from '@mui/material';
import React from 'react';
import MobileApp from '../../assets/images/MobileApp.svg';
import ArrowForward from '../../assets/images/arrowForward.svg';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function ServiceProvidedCard(props) {
  const { i18n, t } = useTranslation();

  return (
    <>
      {props.verticleCard ? (
        <motion.div
          className='ServiceProvided_VerticleCard'
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <div className='ServiceProvided_VerticleCardTypo'>
            <Link
              style={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                padding: '3% 0% 3% 5%',
              }}
              to={props.to}
            >
              <div className='ServiceProvided_SubCardTypo'>
                <Typography className='ServiceProvided_CardTitle'>{t(props.CardTitle)}</Typography>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    cursor: 'pointer',
                  }}
                >
                  <button className='ServiceProvided_CardBtn'>
                    {t(props.BtnText ? props.BtnText : 'Get Details')}
                  </button>
                  <img
                    style={{
                      marginLeft: '2%',
                    }}
                    src={ArrowForward}
                    alt='forward Button'
                  />
                </div>
              </div>
            </Link>
          </div>
          <div className='ServiceProvided_VerticleCardImgDiv'>
            <Link to={props.to}>
              <img
                className='ServiceProvided_VerticleCardImg'
                src={props.CardImgSrc || MobileApp}
                alt='categories'
              />
            </Link>
          </div>
        </motion.div>
      ) : (
        <motion.div
          className='ServiceProvided_Card'
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <div className='ServiceProvided_CardTypo'>
            <Link
              style={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                padding: '3% 0% 3% 8%',
              }}
              to={props.to}
            >
              <div className='ServiceProvided_SubCardTypo'>
                <Typography className='ServiceProvided_CardTitle'>{t(props.CardTitle)}</Typography>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  <button className='ServiceProvided_CardBtn'>
                    {t(props.BtnText ? props.BtnText : 'Get Details')}
                  </button>
                  <img
                    style={{
                      marginLeft: '2%',
                    }}
                    src={ArrowForward}
                    alt='forward Arrow'
                  />
                </div>
              </div>
            </Link>
          </div>
          <div className='ServiceProvided_CardImgDiv'>
            <Link to={props.to}>
              <img
                className='ServiceProvided_CardImg'
                src={props.CardImgSrc || MobileApp}
                alt='Categories'
              />
            </Link>
          </div>
        </motion.div>
      )}
    </>
  );
}
