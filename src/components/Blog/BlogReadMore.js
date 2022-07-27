import { Grid, Typography } from '@mui/material';
import React from 'react';
// import Blog1 from "../../assets/images/Blog1.svg";
import BlogImg2 from '../../assets/images/blogarticle2.svg';
import { Link } from 'react-router-dom';
import BlogImg1 from '../../assets/images/blogarticle1.svg';
// import BlogRead from "../../assets/images/blogread.png";
import BlogCard from '../Common/BlogCard';
import { useTranslation } from 'react-i18next';
export default function BlogReadMore(props) {
  const { t } = useTranslation();
  return (
    <>
      <div className='BlogReadMore_Container'>
        <div className='BlogReadMore_HeaderDiv'>
          <img className='BlogReadMore_HeaderImg' src={props.src || BlogImg1} />
        </div>
        <Grid container spacing={1} className='BlogReadMore_ContentContainer'>
          <Grid xs={12} md={7}>
            <div className='BlogReadMore_TitleDiv'>
              <Typography className='BlogReadMore_Title'>
                {t(props.title || 'Managing a Remote Team')}
              </Typography>
              <Typography className='BlogReadMore_Date'>
                {t('Published on')} {t(props.PublishDate || 'June 13th 2022')}
              </Typography>
            </div>
            <div className='BlogReadMore_DespDiv'>
              <Typography className='BlogReadMore_Desp'>{props.content} </Typography>
            </div>
          </Grid>
          <Grid xs={12} md={5} className='BlogReadMore_RightGrid'>
            <div className='BlogReadMore_CardsContainer'>
              <div className='BlogReadMore_CardsDiv'>
                <Link to='/businesswebsite'>
                  <BlogCard
                    src={props.sideBlog1 || BlogImg2}
                    date='June 13th 2022'
                    title='Why having a business website is necessary ?'
                  />
                </Link>
              </div>
              <div className='BlogReadMore_CardsDiv'>
                <Link to='/remoteteam'>
                  <BlogCard
                    src={props.sideBlog2 || BlogImg1}
                    date='June 13th 2022'
                    title='Managing a Remote Team'
                  />
                </Link>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    </>
  );
}
