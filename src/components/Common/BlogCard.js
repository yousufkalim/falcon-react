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

        <h3>{t(props.date)}</h3>
        <h2 className='BlogCardTitle'>{t(props.title)}</h2>
      </div>
    </>
  );
}
