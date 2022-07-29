import React from 'react';
import SectionHeader from './SectionHeader';
import BlogCard from './BlogCard';
import { Grid } from '@mui/material';
import BlogImg2 from '../../assets/images/blogarticle2.svg';
import BlogImg1 from '../../assets/images/blogarticle1.svg';

import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function BlogSection() {
  return (
    <>
      <div className='BlogSectionMain'>
        <SectionHeader width='40%' h1='With lots of unique blogs' h2='Read our blog' />
        <div className='BlogContainerGrid'>
          <Grid container spacing={1}>
            <Grid className='BlogGrid' md={5.5}>
              <Link to='/blog'>
                <motion.div
                  initial={{ x: -200 }}
                  whileInView={{ x: 0 }}
                  transition={{ duration: 1 }}
                  viewport={{ once: true }}
                >
                  <BlogCard
                    HomeBlogCArd
                    src={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/blogarticle1.svg`}
                    date='June 13th 2022'
                    title='Managing a Remote Team'
                  />
                </motion.div>
              </Link>
            </Grid>
            <Grid className='BlogGrid' md={5.5}>
              <Link to='/blog'>
                <motion.div
                  initial={{ x: 200 }}
                  whileInView={{ x: 0 }}
                  transition={{ duration: 1 }}
                  viewport={{ once: true }}
                >
                  <BlogCard
                    src={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/blogarticle2.svg`}
                    date='June 13th 2022'
                    title='Why having a business website is necessary ?'
                  />
                </motion.div>
              </Link>
            </Grid>
          </Grid>
        </div>
      </div>
    </>
  );
}
