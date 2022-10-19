import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ReactComponent as MobileDev } from '../../assets/images/sp_mobiledev.svg';
import { ReactComponent as WebDev } from '../../assets/images/sp_webdev.svg';
import { ReactComponent as SoftwareDev } from '../../assets/images/sp_softwaredev.svg';
import { ReactComponent as UiDev } from '../../assets/images/sp_uidev.svg';
import { ReactComponent as OnDemandDev } from '../../assets/images/sp_ondemand_dev.svg';
import { ReactComponent as DataEng } from '../../assets/images/sp_data_eng.svg';
import { ReactComponent as Arrow } from '../../assets/images/right_arrow_lp.svg';
import { Divider } from '@mui/material';
import { motion } from 'framer-motion';
import Tooltip from '@mui/material/Tooltip';

export default function ServiceWeProvideCard(props) {
  const { t } = useTranslation();
  const [desp, setDesp] = useState();
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  useEffect(() => {
    setDesp(t(props?.description));
  }, [props?.description]);

  return (
    <>
      <motion.div
        className='ServiceCard_MainDiv'
        style={{
          background: isHovering ? props.btnColor : 'white',
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <Link className='ServiceCard_Link' to={props.to}>
          <div className='ServiceCard_ImageDiv'>
            {props.MobileDev && (
              <MobileDev style={{ color: props.btnIconColor }} className='ServiceCard_Image' />
            )}
            {props.WebDev && (
              <WebDev style={{ color: props.btnColor }} className='ServiceCard_Image' />
            )}
            {props.SoftwareDev && (
              <SoftwareDev style={{ color: props.btnColor }} className='ServiceCard_Image' />
            )}
            {props.UiDev && (
              <UiDev style={{ color: props.btnColor }} className='ServiceCard_Image' />
            )}
            {props.OnDemandDev && (
              <OnDemandDev style={{ color: props.btnColor }} className='ServiceCard_Image' />
            )}
            {props.DataEng && (
              <DataEng style={{ color: props.btnColor }} className='ServiceCard_Image' />
            )}
            {/* <img src={MobileDev} /> */}
          </div>
          {/* <Divider className='ServiceCard_Divider' /> */}
          <h2 className='ServiceCard_heading'>{t(props.heading)}</h2>
          <Tooltip title={props.description}>
            <p className='ServiceCard_desp'>
              {/* {t(props.description)} */}
              {t(desp?.length > 70 ? desp.slice(0, 70) + '...' : desp)}
            </p>
          </Tooltip>
          <div className='ServiceCard_BtnDiv'>
            <p className='ServiceCard_BtnText' style={{ color: props.btnColor }}>
              Get Details
            </p>
            <Arrow className='ServiceCard_BtnImg' style={{ color: props.btnColor }} />
          </div>
        </Link>
      </motion.div>
    </>
  );
}
