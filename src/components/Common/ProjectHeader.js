// Init
import { Divider, Typography } from '@mui/material';
import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
// Importing Components

// Home Component
export default function ProjectHeader() {
  const { t } = useTranslation();

  return (
    <div className='ProjectHeader_MainDiv'>
      <div className='ProjectHeader_TextDiv'>
        <h2 className='ProjectHeader_Title'>
          ALL PROJECTS START BY A SIMPLE IDEA LET US TAKE CARE OF THE REST!
        </h2>
        <Divider className='ProjectHeader_TitleDivider' />
        <p className='ProjectHeader_desp'>
          Falcon Consulting had the opportunity to work on various type of projects for its clients.
          We implemented an efficient process in order to deliver qualitative work on time.{' '}
        </p>
      </div>
    </div>
  );
}
