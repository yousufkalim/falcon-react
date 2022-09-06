// Init
import React from 'react';
import Divider from '@mui/material/Divider';
import { useTranslation } from 'react-i18next';
// Component
export default function ClientHeader(props) {
  const { t } = useTranslation();
  return (
    <>
      <div className='ClientHeader_MainDiv'>
        <h2 className='ClientHeader_Heading'>{t('Our Clients')}</h2>
        <Divider className='ClientHeader_Divider' />
        <p className='ClientHeader_Desp'>
          Falcon Consulting had the opportunity to work on various type of projects for its clients.
          We implemented an efficient process in order to deliver qualitative work on time.
        </p>
      </div>
    </>
  );
}
