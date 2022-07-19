import React, { useState } from 'react';
import SectionHeader from './SectionHeader';
import ReviewCard from './ReviewCard';
import Client_1 from '../../assets/images/client_1.svg';
import Client_2 from '../../assets/images/client_2.svg';
import Client_3 from '../../assets/images/client_3.jpg';
import Client_4 from '../../assets/images/client_4.jpg';
import Client_5 from '../../assets/images/client_5.jpg';
import Client_6 from '../../assets/images/client_6.jpg';
import Client_7 from '../../assets/images/client_7.jpeg';
import Client_8 from '../../assets/images/client_8.jpg';
import Client_9 from '../../assets/images/client_9.jpg';
import { StackedCarousel, ResponsiveContainer } from 'react-stacked-center-carousel';
import Fab from '@mui/material/Fab';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
// import AcUnitIcon from '@mui/icons-material/AcUnit';

export default function ReviewSection() {
  const ref = React.useRef();
  const [data, setData] = useState([
    {
      avatar: Client_1,
      name: 'Fahad S',
      country: 'Pakistan',
      review:
        'Falcon Consulting was a delight to work with. There Mobile App development team has a very firm grasp on React and React Native, ensured timely delivery and dedication. Will consider them for future for sure',
      work: 'Mobile application for EdTech',
    },
    {
      avatar: Client_2,
      name: 'Ryan Hutchinson',
      country: 'United States',
      review:
        'We were looking for a team who could take on our project and finish the job, Falcon IT Consulting Completed all work as asked. Gladly I found them',
      work: 'Amazon API Gateway Migration',
    },
    {
      avatar: Client_3,
      name: 'CB',
      country: ' United States',

      review:
        'They have a very good development team. Responsive and dependable. We are working with them on other projects. Highly recommended!',
      work: 'Mobile application for Parental Control',
    },
    {
      avatar: Client_4,
      name: 'Jacob B.',
      country: 'United States',
      review:
        'We had a problem with our AWS configuration and suddenly all our apps and websites shut down. We were in a panic and Falcon IT Consulting came to our rescue. They did a terrific job and quickly got our apps and websites up and running again. Their team is clear in communications and very responsive. We really enjoyed working with them',
      work: 'Amazon Web Services Server Configurations',
    },
    {
      avatar: Client_5,
      name: 'Sonya L.',
      country: 'United States',

      review:
        'Falcon Consulting did a great job. I am happy to work with them. They have great skills in MERN stack. Being not so tech savvy I had my own challenges but their Business team helped me on each step along the journey. Hope we will work very soon near future. Thank you',
      work: 'Web application Development for Travel Agency',
    },
    // {
    //   avatar: Client_6,
    //   name: "Maham Zahid",
    //   review:
    //     " It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    // },
    // {
    //   avatar: Client_7,
    //   name: "Abdullah Adil",
    //   review:
    //     " It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    // },
    // {
    //   avatar: Client_8,
    //   name: "Ameer Hamza",
    //   review:
    //     " It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    // },
    // {
    //   avatar: Client_9,
    //   name: "Amanda Nunes",
    //   review:
    //     " It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    // },
  ]);

  return (
    <>
      <div className='ReviewSectionMain'>
        <SectionHeader colorH2='#0F52BA' h1='your feedback matters' h2='Client Reviews' width='30%' />
        <div className='ReviewCardSlider'>
          <div className='ReviewSliderContainer'>
            <div className='fade-left'></div>
            {/* <button style={{ border: "none", background: "none", fontSize: "40px", color: "#0F52BA", fontWeight: "600" }}>
              {"<"}
            </button> */}
            <ResponsiveContainer
              className='ReviewSection_Carousel'
              carouselRef={ref}
              render={(parentWidth, carouselRef) => {
                let currentVisibleSlide = 5;
                if (parentWidth <= 1440) currentVisibleSlide = 3;
                if (parentWidth <= 720) currentVisibleSlide = 1;
                return (
                  <StackedCarousel
                    autoRotate={true}
                    ref={carouselRef}
                    rotationInterval={2000}
                    data={data}
                    carouselWidth={parentWidth}
                    slideWidth={
                      currentVisibleSlide === 5
                        ? parentWidth / 5.2
                        : currentVisibleSlide === 3
                        ? parentWidth / 4
                        : parentWidth / 2
                    }
                    slideComponent={ReviewCard}
                    maxVisibleSlide={5}
                    currentVisibleSlide={currentVisibleSlide}
                    useGrabCursor={true}
                  />
                );
              }}
            />
            <>
              <Fab
                style={{ position: 'absolute', top: '40%', left: 10, zIndex: 10 }}
                size='small'
                color='primary'
                onClick={() => {
                  ref.current?.goBack();
                }}
              >
                <ArrowBackIcon />
              </Fab>
              <Fab
                style={{ position: 'absolute', top: '40%', right: 10, zIndex: 10 }}
                size='small'
                color='primary'
                onClick={() => {
                  ref.current?.goNext(6);
                }}
              >
                <ArrowForwardIcon />
              </Fab>
            </>
            {/* <button style={{ border: "none", background: "none", fontSize: "40px", color: "#0F52BA", fontWeight: "600" }}>
              {">"}
            </button> */}

            <div className='fade-right'></div>
          </div>
        </div>
      </div>
    </>
  );
}
