import React from 'react';
import { useTranslation } from 'react-i18next';
export default function BlogCard(props) {
  const { t } = useTranslation();
  return (
    <>
      <div className='BlogCardMain'>
        <div>
          <img
            style={{ objectFit: 'cover', height: '100%', width: '100%', borderRadius: '15px' }}
            src={props.src}
            alt='blogImg'
          />
        </div>

        <h3
          style={{
            color: '#52525B',
            fontWeight: '400',
            margin: '2% 0%',
          }}
        >
          {t(props.date)}
        </h3>
        <h2 className='BlogCardTitle'>{t(props.title)}</h2>
      </div>
    </>
  );
}
