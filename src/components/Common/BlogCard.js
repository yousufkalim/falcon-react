import React from 'react';
import { useTranslation } from 'react-i18next';
export default function BlogCard(props) {
  const { t } = useTranslation();
  return (
    <>
      <div className='BlogCardMain'>
        <div className='BlogCardImgDiv'>
          <img className='BlogCardImg' src={props.src} alt='blog' />
        </div>

        
        <p className='blogDate'>{t(props.date)}</p>
        <p className='BlogCardTitle'>{t(props.title)}</p>
      </div>
    </>
  );
}
