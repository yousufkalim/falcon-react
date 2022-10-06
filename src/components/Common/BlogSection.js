import React from 'react';
import SectionHeader from './SectionHeader';
import BlogCard from './BlogCard';
import { Grid } from '@mui/material';

import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function BlogSection() {
  return (
    <>
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
        className='BlogSectionMain'
      >
        <SectionHeader width='40%' h1='With lots of unique blogs' h2='Read our blog' />
        <div className='BlogContainerGrid'>
          <Grid container spacing={1}>
            <Grid className='BlogGrid' md={5.5}>
              <Link to='/blog'>
                <div>
                  <BlogCard
                    HomeBlogCArd
                    src={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/blogarticle1.svg`}
                    date='June 13th 2022'
                    title='Managing a Remote Team'
                  />
                </div>
              </Link>
            </Grid>
            <Grid className='BlogGrid' md={5.5}>
              <Link to='/blog'>
                <div>
                  <BlogCard
                    src={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/blogarticle2.svg`}
                    date='June 13th 2022'
                    title='Why having a business website is necessary ?'
                  />
                </div>
              </Link>
            </Grid>
          </Grid>
        </div>
      </motion.div>
    </>
  );
}
