import React, { useState } from 'react';
import SectionHeader from './SectionHeader';
import ReviewCard from './ReviewCard';
import { StackedCarousel, ResponsiveContainer } from 'react-stacked-center-carousel';
import Fab from '@mui/material/Fab';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { ReactComponent as LeftArrow } from '../../assets/images/left_arrow_btn.svg';
import { ReactComponent as RightArrow } from '../../assets/images/right_arrow_btn.svg';

// import AcUnitIcon from '@mui/icons-material/AcUnit';

export default function ReviewSection() {
  const ref = React.useRef();
  const [data, setData] = useState([
    {
      // avatar: Client_1,
      name: 'Fahad S',
      country: 'Pakistan',
      review:
        'Falcon Consulting was a delight to work with. There Mobile App development team has a very firm grasp on React and React Native, ensured timely delivery and dedication. Will consider them for future for sure',
      work: 'ONX-Mobile application for EdTech',
    },
    {
      // avatar: Client_2,
      name: 'Ryan Hutchinson',
      country: 'United States',
      review:
        'We were looking for a team who could take on our project and finish the job, Falcon IT Consulting Completed all work as asked. Gladly I found them',
      work: 'Amazon API Gateway Migration',
    },
    {
      // avatar: Client_3,
      name: 'CB',
      country: ' United States',

      review:
        'They have a very good development team. Responsive and dependable. We are working with them on other projects. Highly recommended!',
      work: 'Kidgystic-Mobile application for Parental Control',
    },
    {
      // avatar: Client_4,
      name: 'Jacob B.',
      country: 'United States',
      review:
        'We had a problem with our AWS configuration and suddenly all our apps and websites shut down. We were in a panic and Falcon IT Consulting came to our rescue. They did a terrific job and quickly got our apps and websites up and running again. Their team is clear in communications and very responsive. We really enjoyed working with them',
      work: 'Deloitte-Amazon Web Services Server Configurations',
    },
    {
      // avatar: Client_5,
      name: 'Sonya L.',
      country: 'United States',

      review:
        'Falcon Consulting did a great job. I am happy to work with them. They have great skills in MERN stack. Being not so tech savvy I had my own challenges but their Business team helped me on each step along the journey. Hope we will work very soon near future. Thank you',
      work: 'SybilSoft-Web application Development for Travel Agency',
    },
    {
      // avatar: Client_5,
      name: 'Laurent Louis-Henry',
      country: 'France',

      review:
        'Falcon Consulting a permis à mon application de prendre forme ! En partant d’une simple idée, ils ont su faire preuve d’initiative et me conseiller sur les décisions à prendre.',
      work: 'Tilt Entreprise',
    },
    {
      // avatar: Client_5,
      name: 'RD',
      country: 'France',

      review: 'Equipe très motivée, et allant au bout des choses ! Ce n’est pas le cas de tous !',
      work: 'Registre-RH',
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
        <SectionHeader
          colorH2='#0F52BA'
          h1='your feedback matters'
          h2='Client Reviews'
          width='30%'
        />
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
                className='CarouselLeftArrow'
                onClick={() => {
                  ref.current?.goBack();
                }}
              >
                <LeftArrow />
              </Fab>
              <Fab
                className='CarouselRightArrow'
                onClick={() => {
                  ref.current?.goNext(6);
                }}
              >
                <RightArrow />
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
