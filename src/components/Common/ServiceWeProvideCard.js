import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ReactComponent as MobileDev } from '../../assets/images/sp_mobiledev.svg';
import { ReactComponent as WebDev } from '../../assets/images/sp_webdev.svg';
import { ReactComponent as SoftwareDev } from '../../assets/images/sp_softwaredev.svg';
import { ReactComponent as UiDev } from '../../assets/images/sp_uidev.svg';
import { ReactComponent as OnDemandDev } from '../../assets/images/sp_ondemand_dev.svg';
import { ReactComponent as DataEng } from '../../assets/images/sp_data_eng.svg';
import { Divider } from '@mui/material';
import { motion } from 'framer-motion';

export default function ServiceWeProvideCard(props) {
  const { i18n, t } = useTranslation();

  return (
    <>
      <motion.div
        className='ServiceCard_MainDiv'
        initial={{ y: 50, opacity: 0.7 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        viewport={{ once: false }}
      >
        <Link className='ServiceCard_Link' to={props.to}>
          <div className='ServiceCard_ImageDiv'>
            {props.MobileDev && <MobileDev className='ServiceCard_Image' />}
            {props.WebDev && <WebDev className='ServiceCard_Image' />}
            {props.SoftwareDev && <SoftwareDev className='ServiceCard_Image' />}
            {props.UiDev && <UiDev className='ServiceCard_Image' />}
            {props.OnDemandDev && <OnDemandDev className='ServiceCard_Image' />}
            {props.DataEng && <DataEng className='ServiceCard_Image' />}
            {/* <img src={MobileDev} /> */}
          </div>
          <Divider className='ServiceCard_Divider' />
          <h2 className='ServiceCard_heading'>{props.heading}</h2>
          <p className='ServiceCard_desp'>{props.desp}</p>
        </Link>
      </motion.div>
    </>
  );
}
