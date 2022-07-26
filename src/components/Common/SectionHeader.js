import React from 'react';
import { Divider } from '@mui/material';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
export default function SectionHeader(props) {
  const { i18n, t } = useTranslation();

  return (
    <>
      {props.WorkProcess ? (
        <motion.div className={props.LeftSectionHeader ? 'LeftSectionHeader' : 'SectionHeaderTypo'}>
          <h4
            className='SectionHeaderDesp'
            style={{ color: props.colorDesp ? props.colorDesp : '#fff' }}
          >
            {t(props.decription)}
          </h4>
          <Divider
            className='SectionHeaderDivider'
            width={props.width || '10%'}
            sx={{
              height: '5px',
              backgroundColor: '#42C2FF',
              borderRadius: '4px',
              margin: '.7% 0',
            }}
          />
          <h1
            className='SectionHeaderH1'
            style={{ color: props.colorH1 ? props.colorH1 : '#fff' }}
            sx={{ width: '30%', fontWeight: '600', fontSize: '1.5rem' }}
          >
            {t(props.h1)}
          </h1>

          <h1
            className='SectionHeaderH2'
            style={{ color: props.colorH2 ? props.colorH2 : '#003B7E' }}
          >
            {t(props.h2)}
          </h1>
        </motion.div>
      ) : (
        <motion.div
          className={props.LeftSectionHeader ? 'LeftSectionHeader' : 'SectionHeaderTypo'}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h2 className='SectionHeaderH1' color={props.colorH1 || '#42C2FF'}>
            {t(props.h1)}
          </h2>
          <Divider className='SectionHeaderDivider' width={props.width || '10%'} />
          <h1
            className='SectionHeaderH2'
            style={{ color: props.colorH2 ? props.colorH2 : '#003B7E' }}
          >
            {t(props.h2)}
          </h1>
          <h3
            className='SectionHeaderDesp'
            style={{ color: props.colorDesp ? props.colorDesp : '#404040B2' }}
            // color={props.colorDesp || '#404040B2'}
            width={props.despWidth}
          >
            {t(props.decription)}
          </h3>
        </motion.div>
      )}
    </>
  );
}
