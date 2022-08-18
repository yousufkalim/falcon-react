import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import SectionHeader from '../Common/SectionHeader';
import DeveloperSlider from '../Common/DeveloperSlider';
import { useTranslation } from 'react-i18next';
export default function OurDevelopers(props) {
  const { i18n, t } = useTranslation();
  return (
    <>
      <div className='OurDevelopersMain'>
        <div className='OurDevelopersHeader'>
          <SectionHeader
            colorH2='#0F52BA'
            h2='OUR DEVELOPERS ARE'
            decription='OUR DEVELOPERS FOR YOUR PROJECTS'
            colorDesp='#404040B2'
          />
        </div>
        <div className='DeveloperSliderDiv'>
          <Carousel
            className='DeveloperCarouselDiv'
            autoPlay
            infiniteLoop
            showIndicators={true}
            showStatus={false}
            swipeable={true}
          >
            <DeveloperSlider
              src={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/od_agile.png`}
              heading='Agile'
              desp='We train them in agile management methods so that our partners can take full advantage of them'
            />
            <DeveloperSlider
              src={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/od_experienced.png`}
              heading='Experienced'
              desp='We are Flexible in the search for the ideal  profile and we can can offer you very experienced profiles'
            />
            <DeveloperSlider
              src={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/od_trained.png`}
              heading='Trained'
              desp='We train our developers ourselves by positioning them on internet internet project in order to ensure that we transmit to them the “soft skills” as well as the hard skills'
            />
            <DeveloperSlider
              src={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/od_dedicated.png`}
              heading='Dedicated to your projects'
              desp='Our developers work full-time on your projects and our collaborative tools guarantee Transparency regarding the progress of task'
            />
          </Carousel>
        </div>
      </div>
    </>
  );
}
