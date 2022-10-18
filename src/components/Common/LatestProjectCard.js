import React, { useState, useEffect } from 'react';
import BasicModal from './BasicModal';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Button } from '@mui/material';
import { ReactComponent as Arrow } from '../../assets/images/right_arrow_lp.svg';
export default function LatestProjectsCard(props) {
  const { t } = useTranslation();
  const [desp, setDesp] = useState();

  useEffect(() => {
    setDesp(t(props?.hoverDesp));
  }, [props?.hoverDesp]);
  const handleRedirect = () => {
    window.location = [props?.href];
  };
  return (
    <div className='SliderProject'>
      <div className={props.HoverDetailLite ? 'HoverDetailLite' : 'HoverDetail'}>
        <div className='HoverDetailSubDiv'>
          <div className='hoverDivLogoDiv'>
            {/* <img className='hoverDivLogo' src={props.LogoSrc} alt='hover Img' /> */}
            <h2>{props.heading}</h2>
          </div>

          <h2 className='HoverDivTypo'>
            {/* {t(props.hoverDesp)} */}
            {t(desp?.length > 70 ? desp.slice(0, 70) + '...' : desp)}
          </h2>
          <button
            className='HoverDivBtnDark'
            style={{
              background: props.btnBackground ? props.btnBackground : 'transparent',
            }}
          >
            <Link to={props.to}>
              {props.to ? (
                <div className='HoverDivBtnSubdiv' onClick={props.to ? '' : handleRedirect}>
                  <Button className='HoverDivBtnLink'>{t('Case Study')}</Button>
                  {/* <img src={Arrow} /> */}
                  <Arrow className='HoverDivBtnArrow' />
                </div>
              ) : (
                <div className='HoverDivBtnSubdiv' onClick={props.to ? '' : handleRedirect}>
                  <Button className='HoverDivBtnLink'>{t('Case Study')}</Button>
                  {/* <img className='HoverDivBtnArrow' src={Arrow} /> */}
                  <Arrow className='HoverDivBtnArrow' />
                </div>
                // <div style={{ display: 'flex', alignItems: 'center' }}>
                //   <BasicModal
                //     ModalBtntextColor='#ffffff'
                //     ModalBtnTheme={props.ModalBtnTheme || 'transparent'}
                //     ModalBtnText={t('Case Study')}
                //     LogoSrc={props.ModalLogo ? props.ModalLogo : props.LogoSrc}
                //     Heading={props.heading}
                //     Dividerwidth={props.Dividerwidth || '12%'}
                //     DividerTheme={props.DividerTheme}
                //     para1={props.para1}
                //     para2={props.para2}
                //     para3={props.para3}
                //     para4={props.para4}
                //     para5={props.para5}
                //     para6={props.para6}
                //     para7={props.para7}
                //     para8={props.para8}
                //   />
                //   <img src={Arrow} />
                // </div>
              )}
            </Link>
          </button>
        </div>
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
