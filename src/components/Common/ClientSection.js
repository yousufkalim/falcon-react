import React from 'react';
import SectionHeader from './SectionHeader';
import bgImage from '../../assets/images/client_logos.png';

export default function ClientSection() {
  return (
    <>
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
        <div className='ClientsDiv'>
          <img className='ClientsGradientImg' src={bgImage} />
          {/* <marquee
            direction='up'
            height='100%'
            behavior='scroll'
            truespeed='25'
            loop=''
            scrolldelay='50'
            hspace='0px'
            scrollamount='4'
          >
            <img style={{ width: '100%' }} src={bgImage} />
          </marquee> */}
        </div>
      </div>
    </>
  );
}
