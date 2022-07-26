import { Typography } from '@mui/material';
import React from 'react';
// import Blog1 from '../../assets/images/Blog1.svg';
import { useTranslation } from 'react-i18next';
export default function BlogCard(props) {
  const { t } = useTranslation();
  return (
    <>
      <div className='BlogCardMain'>
        <div>
          <img
            style={{ objectFit: 'cover', height: '100%', width: '100%' }}
            src={props.src}
            alt='blogImg'
          />
        </div>

        <Typography
          sx={{
            color: '#52525B',
            fontWeight: '400',
            margin: '2% 0%',
          }}
        >
          {t(props.date)}
        </Typography>
        <Typography className='BlogCardTitle'>{t(props.title)}</Typography>
      </div>
    </>
  );
}
