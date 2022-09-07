import React, { useState, useEffect } from 'react';
import BasicModal from './BasicModal';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Button } from '@mui/material';

export default function LatestProjectsCard(props) {
  const { t } = useTranslation();
  const [desp, setDesp] = useState();

  useEffect(() => {
    setDesp(t(props?.hoverDesp));
  }, [props?.hoverDesp]);

  return (
    <div className='SliderProject'>
      <div className={props.HoverDetailLite ? 'HoverDetailLite' : 'HoverDetail'}>
        <div style={{ height: '25%' }}>
          <img className='hoverDivLogo' src={props.LogoSrc} alt='hover Img' />
        </div>

        <h2 className='HoverDivTypo'>
          {/* {t(props.hoverDesp)} */}
          {t(desp?.length > 150 ? desp.slice(0, 150) + '...' : desp)}
        </h2>
        <button
          className='HoverDivBtnDark'
          style={{
            background: props.btnBackground ? props.btnBackground : '#F8F8F8',
          }}
        >
          {/* <Link className="HoverDivBtnLink" to={props.to}>
            {t("View More")}
          </Link> */}
          <Link to={props.to}>
            {props.to ? (
              <Button className='HoverDivBtnLink'>View More</Button>
            ) : (
              <BasicModal
                ModalBtntextColor='#003B7E'
                ModalBtnTheme={props.ModalBtnTheme || 'transparent'}
                ModalBtnText={t('View More')}
                LogoSrc={props.ModalLogo ? props.ModalLogo : props.LogoSrc}
                Heading={props.heading}
                Dividerwidth={props.Dividerwidth || '12%'}
                DividerTheme={props.DividerTheme}
                para1={props.para1}
                para2={props.para2}
                para3={props.para3}
                para4={props.para4}
                para5={props.para5}
                para6={props.para6}
                para7={props.para7}
                para8={props.para8}
              />
            )}
          </Link>
        </button>
      </div>
      <img className='SliderImgs' src={props.src} alt='1' />
    </div>
  );
}
// LogoSrc = {props.LogoSrc}
// Heading = {props.Heading}
// Dividerwidth = {props.Dividerwidth}
// ModalBtnTheme ={props.ModalBtnTheme}
// DividerTheme = {props.DividerTheme}
// para1 = {props.para1}
// para2 = {props.para2}
// para3 = {props.para3}
// para4 = {props.para4}
// para5 = {props.para5}
// para6 = {props.para6}
// para7 = {props.para7}
// para8 = {props.para8}
