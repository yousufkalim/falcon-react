// Init
import React from 'react';
import { motion } from 'framer-motion';
import ClientCard from './ClientCard';
import { clientData } from '../../utils/ProjectsData';
import { useScroll, useSpring, useTransform, MotionValue } from 'framer-motion';
import { useScrollPosition } from '../../utils/ScrollPosition';

// Importing Components

// Home Component
export default function ClientsList() {
  const { scrollYProgress } = useScroll();
  let position = useScrollPosition();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  return (
    <>
      <div className='ClientsList_MainDiv' style={{ background: '#003b7e', paddingTop: '3%' }}>
        <motion.div
          className='ClientsList_ProgressBar'
          style={{
            position: 'fixed',
            left: '0',
            right: '0',
            height: '5px',
            background: '#fff',
            zIndex: '999',
            scaleX,
            display: position <= 400 ? 'none' : 'block',
          }}
        />
        {clientData.map((item) => {
          return (
            <div className='ClientsList_MapDiv'>
              <ClientCard
                id={item.id}
                image={item.image}
                title={item.title}
                desp={item.desp}
                subtitle={item.subtitle}
              />
            </div>
          );
        })}
      </div>
    </>
  );
}
