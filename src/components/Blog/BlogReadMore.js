import { Grid, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import BlogCard from '../Common/BlogCard';
import { useTranslation } from 'react-i18next';
import Agile from '../../assets/images/aglie.png';

export default function BlogReadMore(props) {
  const { t } = useTranslation();
  return (
    <>
      <div className='BlogReadMore_Container'>
        <div className='BlogReadMore_HeaderDiv'>
          <img className='BlogReadMore_HeaderImg' src={props.src} />
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
                    src={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/blogarticle2.svg`}
                    date='June 13th 2022'
                    title='Why having a business website is necessary ?'
                  />
                </Link>
              </div>
              <div className='BlogReadMore_CardsDiv'>
                <Link to='/remoteteam'>
                  <BlogCard
                    src={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/blogarticle1.svg`}
                    date='June 13th 2022'
                    title='Managing a Remote Team'
                  />
                </Link>
              </div>
              <div className='BlogReadMore_CardsDiv'>
                <Link to='/agilemethodology'>
                  <BlogCard src={Agile} date='August 3rd 2022' title='Agile Methodology' />
                </Link>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    </>
  );
}
