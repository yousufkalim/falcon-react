import React from 'react';
import SectionHeader from '../Common/SectionHeader';
import DeveloperWorkCard from '../Common/DeveloperWorkCard';

export default function DeveloperWorkProcess(props) {
  return (
    <>
      <div className='DeveloperWorkMain'>
        <div className='DeveloperWorkHeader'>
          <SectionHeader
            h1="We solve clients' projects in a simple & efficient way"
            colorH2='#003B7E'
            h2='We always follow the standard work process'
          />
        </div>
        <div className='DeveloperWorkDiv'>
          <DeveloperWorkCard
            title='You need developer'
            desp="We organize a meeting in order to better understand your needs, as
              well as the ideal profile sought for your project. If your needs
              change during this process, don't panic: we take into account any
              last minute changes!"
            src={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/DC_1.png`}
          />
          <DeveloperWorkCard
            reverse
            title='Targeting the ideal profile'
            desp="For this step, it's up to us! Our HR team searches among a rich and talented pool of developers for the best profiles to offer. We organize HR and technical interviews with these developers, in order to pre-select the best candidates."
            src={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/DC_2.png`}
          />
          <DeveloperWorkCard
            title='Proposal from developers'
            desp='We send you the profile of the pre-selected developers. You can then decide to carry out interviews with them, in order to confirm your choice. When you decide to do an interview with a developer, there is no commitment that binds you: keep your mind free!'
            src={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/DC_3.png`}
          />
          <DeveloperWorkCard
            reverse
            title='Recruitment'
            desp='Have you found your ideal profile? Congratulation ! We conclude the contract, which is without long-term commitment, so that you retain all your flexibility. The developer works directly on your projects, without going through us.'
            src={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/DC_4.png`}
          />
          <DeveloperWorkCard
            title='Continuous improvement'
            desp='We organize at a determined frequency points on our collaboration. The principle is to ensure that the collaboration is optimal, and to target the best potential points of improvement. Once identified, we offer, at our expense, adequate training for our developers in order to constantly increase the quality of the collaboration.'
            src={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/DC_5.png`}
          />
        </div>
      </div>
    </>
  );
}
