import { Grid } from '@mui/material';
import React from 'react';
import SectionHeader from './SectionHeader';
import bgImage from '../../assets/images/client_logos.png';
import { MouseParallaxContainer, MouseParallaxChild } from 'react-parallax-mouse';

export default function ClientSection() {
  return (
    <>
      <MouseParallaxContainer>
        <div className='ClientSectionMain'>
          <div className='ClientSectionTitleDiv'>
            <SectionHeader
              LeftSectionHeader
              width='15%'
              colorH2='#0F52BA'
              h1='SINCERELY YOURS'
              h2='Some Amazing Partners We Work With'
              // decription="This sounds simple, but it is beneficial to your business success."
            />
          </div>

          <div className='ClientsGradientDiv' />
          <MouseParallaxChild factorX='{0.03}' factorY='{0.05}'>
            <div className='ClientsDiv'>
              <img className='ClientsGradientImg' src={bgImage} />
            </div>
          </MouseParallaxChild>
        </div>
      </MouseParallaxContainer>
    </>
  );
}
