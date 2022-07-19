import React from 'react';
import SectionHeader from '../Common/SectionHeader';
import VisionImg from '../../assets/images/visionImg.svg';
import { Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
export default function VisionSection() {
  const { i18n, t } = useTranslation();

  return (
    <>
      <div className='VisionDiv'>
        <div className='VisionTypo'>
          <SectionHeader
            LeftSectionHeader
            // h1='We believe our vision'
            h1='HEALTHY RELATIONSHIPS​'
            h2='Our Vision'
            // decription="We strongly believe that talent and skills has no border. By providing a great working environment in our offices, we allow our partners to benefit from competitive pricing with a qualitative work. "
            colorDesp='black'
          />
          <div className='VisionList'>
            <Typography sx={{ margin: '2%', opacity: '.7' }}>
              {t(
                'We strongly believe that talent and skills has no border. By providing a great working environment in our offices, we allow our partners to benefit from competitive pricing with a qualitative work.'
              )}
            </Typography>

            <ul style={{ marginLeft: '5%' }}>
              <li>{t('IN-HOUSE TEAM')}</li>
              <li>{t('TECHNOLOGIES')}</li>
              <li>{t('USER-FOCUSED PROCESS')}</li>
              <li>{t('SMOOTH COMMUNICATION')}</li>
              <li>{t("8 YEARS' EXPERIENCE")}</li>
              <li>{t('FULL FLEXIBILITY')}</li>
              <li>{t('HIGH QUALITY CODE')}</li>
              <li>{t('TRANSPARENCY')}</li>
            </ul>
          </div>
        </div>
        <div className='VisionImgDiv'>
          <img className='VisionImg' src={VisionImg} />
        </div>
      </div>
    </>
  );
}
