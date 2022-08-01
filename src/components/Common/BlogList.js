// Init
import { Grid } from '@mui/material';
import React from 'react';
import BlogCard from './BlogCard';
import { motion } from 'framer-motion';
// Importing Components

// Home Component
export default function BlogList() {
  // const [MoreBlogs, SetMoreBlogs] = React.useState(false);

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className='BlogListMain'
      >
        <Grid container spacing={1} className='BlogListContainer'>
          <Grid md={5} className='BlogListGrid'>
            <BlogCard
              // src={BlogList1}
              date='November 25, 2022'
              title='A Holiday Tradition: Tax Extenders Slated to Expire at End of 2021'
            />
          </Grid>
          <Grid md={5} className='BlogListGrid'>
            <BlogCard
              // src={BlogList2}
              date='November 16, 2022'
              title='What Do Global Minimum Tax Rules Mean for Corporate Tax Policies?'
            />
          </Grid>
          <Grid md={5} className='BlogListGrid'>
            <BlogCard
              // src={BlogList3}
              date='November 25, 2022'
              title='A Holiday Tradition: Tax Extenders Slated to Expire at End of 2021'
            />
          </Grid>
          <Grid md={5} className='BlogListGrid'>
            <BlogCard
              // src={BlogList4}
              date='November 16, 2022'
              title='What Do Global Minimum Tax Rules Mean for Corporate Tax Policies?'
            />
          </Grid>
          {/* {MoreBlogs && (
            <> */}
          <Grid md={5} className='BlogListGrid'>
            <BlogCard
              // src={BlogList1}
              date='November 25, 2022'
              title='A Holiday Tradition: Tax Extenders Slated to Expire at End of 2021'
            />
          </Grid>
          <Grid md={5} className='BlogListGrid'>
            <BlogCard
              // src={BlogList2}
              date='November 16, 2022'
              title='What Do Global Minimum Tax Rules Mean for Corporate Tax Policies?'
            />
          </Grid>
          <Grid md={5} className='BlogListGrid'>
            <BlogCard
              // src={BlogList3}
              date='November 25, 2022'
              title='A Holiday Tradition: Tax Extenders Slated to Expire at End of 2021'
            />
          </Grid>
          <Grid md={5} className='BlogListGrid'>
            <BlogCard
              // src={BlogList4}
              date='November 16, 2022'
              title='What Do Global Minimum Tax Rules Mean for Corporate Tax Policies?'
            />
          </Grid>
          {/* </>
          )} */}
          {/* <Grid xs={12} className="BlogBtnGrid">
            <Button
              className="BlogBtn"
              variant="outlined"
              onClick={(e) => SetMoreBlogs(!MoreBlogs)}
            >
              {MoreBlogs ? "Show less" : "See more"}
            </Button>
          </Grid> */}
        </Grid>
      </motion.div>
    </>
  );
}
