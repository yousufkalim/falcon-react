import React, { useEffect, useState } from 'react';
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
import Tooltip from '@mui/material/Tooltip';

export default function ServiceWeProvideCard(props) {
  const { t } = useTranslation();
  const [desp, setDesp] = useState();

  useEffect(() => {
    setDesp(t(props?.description));
  }, [props?.description]);

  return (
    <>
      <motion.div
        className='ServiceCard_MainDiv'
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
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
          <h2 className='ServiceCard_heading'>{t(props.heading)}</h2>
          <Tooltip title={props.description}>
            <p className='ServiceCard_desp'>
              {/* {t(props.description)} */}
              {t(desp?.length > 100 ? desp.slice(0, 100) + '...' : desp)}
            </p>
          </Tooltip>
        </Link>
      </motion.div>
    </>
  );
}
