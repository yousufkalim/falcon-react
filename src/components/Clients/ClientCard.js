// Init
import Tooltip from '@mui/material/Tooltip';
import { motion, useScroll, useTransform, useSpring, MotionValue } from 'framer-motion';
import React, { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import MicroSoft from '../../assets/images/client_microsoft.png';

// Home Component
function useParallax(value, distance) {
  return useTransform(value, [0, 1], [-distance, distance]);
}
export default function ClientCard(props) {
  const { t } = useTranslation();

  return (
    <>
      <div className='ClientCard_MainDiv'>
        {/* <img
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
          src={props.bg}
        /> */}
        <motion.div
          className='ClientCard_SubDiv'
          initial={{ y: 150, opacity: 0.5 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3 }}
          viewport={{ once: true }}
        >
          <div className='ClientCard_ImageDiv'>
            <img className='ClientCard_Image' src={props.image || MicroSoft} alt='ClientCard'/>
          </div>
          <motion.div
            className='ClientCard_TextDiv'
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className='ClientCard_Index'>{props.id || '#01'}</h2>
            <h2 className='ClientCard_Title'>{props.title || 'Microsoft'}</h2>
            <h2 style={{ fontSize: '1.2rem', color: '#fff', margin: '-5px 0 5px 0' }}>
              {props.subtitle}
            </h2>
            {/* <p className='ClientCard_Desp'>
              {t(
                props.desp ||
                  'Application Web conçue pour aider les clients souhaitant des coutures personnalisées àrec...'
              )}
            </p> */}
          </motion.div>
        </motion.div>
      </div>
    </>
  );
}
