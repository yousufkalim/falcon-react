import { Typography } from '@mui/material';
import React from 'react';
import { ReactComponent as AboutInfo4 } from '../../assets/images/aboutSec_4.svg';
import { useTranslation } from 'react-i18next';
export default function ModernAgencySection() {
  const { i18n, t } = useTranslation();

  return (
    <>
      <div className='ModernAgencyDiv'>
        <div className='AgencyTypo'>
          <Typography sx={{ fontSize: '1.5rem', fontWeight: '800', color: '#FFF' }}>
            {t('We Are A Modern IT Agency')}
          </Typography>
          <Typography
            sx={{
              fontSize: '1rem',
              fontWeight: '500',
              color: '#F8F8F8',
              opacity: '80%',
            }}
          >
            {t('Accessible price, with no compromise on the Quality!')}
          </Typography>
        </div>
        <div className='HistorySumary'>
          <div className='HistoryMain'>
            <div className='HistoryDiv'>
              <div className='HistoryImgDiv'>
                <img
                  className='HistoryImg'
                  src={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/MA1.svg`}
                  alt='Years of excellence'
                />
              </div>
              <div className='ArrowMain'>
                <img
                  className='ArrowImg'
                  src={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/AgencyArrow.svg`}
                  alt='Arrow'
                />
              </div>
            </div>
            <div className='HistoryTypoDiv'>
              <Typography className='HistoryTypoH'>8</Typography>
              <Typography className='HistoryTypoP'>{t('Years of Excellence')}</Typography>
            </div>
          </div>
          <div className='HistoryMain'>
            <div className='HistoryDiv'>
              <div className='HistoryImgDiv'>
                <img
                  className='HistoryImg'
                  src={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/MA2.svg`}
                  alt='Sucessful Projects'
                />
              </div>
              <div className='ArrowMain'>
                <img
                  className='ArrowImg'
                  src={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/AgencyArrow.svg`}
                  alt='Arrow'
                />
              </div>
            </div>
            <div className='HistoryTypoDiv'>
              <Typography className='HistoryTypoH'>85</Typography>
              <Typography className='HistoryTypoP'>{t('Successfull Projects')}</Typography>
            </div>
          </div>
          <div className='HistoryMain'>
            <div className='HistoryDiv'>
              <div className='HistoryImgDiv'>
                <img
                  className='HistoryImg'
                  src={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/MA3.svg`}
                  alt='Client Satifaction'
                />
              </div>
              <div className='ArrowMain'>
                <img
                  className='ArrowImg'
                  src={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/AgencyArrow.svg`}
                  alt='Arrow'
                />
              </div>
            </div>
            <div className='HistoryTypoDiv'>
              <Typography className='HistoryTypoH'>100%</Typography>
              <Typography className='HistoryTypoP'>{t('Client satisfication')}</Typography>
            </div>
          </div>
          <div className='HistoryMain_Last'>
            <div className='HistoryDiv'>
              <div className='HistoryImgDiv Last_icon'>
                <AboutInfo4 color='#f8f8f8' opacity='.8' />
                {/* <img className='HistoryImg ' src={AboutInfo4} alt='modern Agency'/> */}
              </div>
            </div>
            <div className='HistoryTypoDiv_Last'>
              <Typography className='HistoryTypoH'>4</Typography>
              <Typography className='HistoryTypoP'>{t('Office Locations')}</Typography>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
