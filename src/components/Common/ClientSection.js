import React from 'react';
import SectionHeader from './SectionHeader';
import bgImage from '../../assets/images/client_logo.png';

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
          <img className='ClientsMovingImg' src={bgImage} />
        </div>
      </div>
    </>
  );
}
