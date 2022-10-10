import React from 'react';
import SectionHeader from '../Common/SectionHeader';
import AwesomeSlider from 'react-awesome-slider';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

import 'react-awesome-slider/dist/styles.css';
export default function LocationSection(props) {
  const { i18n, t } = useTranslation();
  const { language } = i18n;
  return (
    <>
      <div className='LocationSectionMain'>
        <div className='LocationSectionHeader'>
          <SectionHeader
            colorH2='#0F52BA'
            h1='WHERE YOU CAN MEET'
            h2='Our Offices'
            width='5%'
            SectionHeaderMargin
          />
        </div>
        {language === 'fr' ? (
          <div className='LocationSliderDiv'>
            <AwesomeSlider
              // organicArrows={false}
              className='Awesome_Slider'
            >
              <div className='LocationDiv'>
                <div className='LocationDiv_Typo'>
                  <img
                    src={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/paris_icon.svg`}
                    alt='Paris'
                  />

                  <h2 className='Location_Country'>France</h2>
                  <h3 className='Location_Address'>
                    53 Avenue Victor Hugo 94290 Villeneuve-Le-Roi
                  </h3>
                </div>
                <div className='LocationDiv_Img'>
                  <img
                    className='Location_Img'
                    src={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/location_london.svg`}
                    alt='London'
                  />
                </div>
              </div>
              <div className='LocationDiv'>
                <div className='LocationDiv_Typo'>
                  <img
                    src={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/UAE_Icon.svg`}
                    alt='UAE'
                  />

                  <h2 className='Location_Country'>UAE</h2>
                  <h3 className='Location_Address'>
                    Mazyad Mall, Tower 2 - 4th Floor, Office 425, Abu Dhabi, UAE
                  </h3>
                </div>
                <div className='LocationDiv_Img'>
                  <img
                    className='Location_Img'
                    src={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/UAE.svg`}
                    alt='UAE'
                  />
                </div>
              </div>
              <div className='LocationDiv'>
                <div className='LocationDiv_Typo'>
                  <img
                    src={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/us_icon.svg`}
                    alt='US'
                  />

                  <h2 className='Location_Country'>United States</h2>
                  <h3 className='Location_Address'>4201 31st St S, Arlington, VA 22206</h3>
                </div>
                <div className='LocationDiv_Img'>
                  <img
                    className='Location_Img'
                    src={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/location_us.svg`}
                    alt='US'
                  />
                </div>
              </div>
              <div className='LocationDiv'>
                <div className='LocationDiv_Typo'>
                  <img
                    src={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/pak_icon.svg`}
                    alt='Pakistan'
                  />

                  <h2 className='Location_Country'>Pakistan</h2>
                  <h3 className='Location_Address'>
                    8-A, Iqbal Avenue Cooperative Housing Society - Phase I Lahore, Punjab
                  </h3>
                </div>
                <div className='LocationDiv_Img'>
                  <img
                    className='Location_Img'
                    src={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/location_pak.svg`}
                    alt='pakistan'
                  />
                </div>
              </div>
            </AwesomeSlider>
          </div>
        ) : (
          <div className='LocationSliderDiv'>
            <AwesomeSlider
              // organicArrows={false}
              className='Awesome_Slider'
            >
              <div className='LocationDiv'>
                <div className='LocationDiv_Typo'>
                  <img
                    src={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/us_icon.svg`}
                    alt='US'
                  />

                  <h2 className='Location_Country'>United States</h2>
                  <h3 className='Location_Address'>4201 31st St S, Arlington, VA 22206</h3>
                </div>
                <div className='LocationDiv_Img'>
                  <img
                    className='Location_Img'
                    src={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/location_us.svg`}
                    alt='US'
                  />
                </div>
              </div>
              <div className='LocationDiv'>
                <div className='LocationDiv_Typo'>
                  <img
                    src={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/paris_icon.svg`}
                    alt='Paris'
                  />

                  <h2 className='Location_Country'>France</h2>
                  <h3 className='Location_Address'>
                    53 Avenue Victor Hugo 94290 Villeneuve-Le-Roi
                  </h3>
                </div>
                <div className='LocationDiv_Img'>
                  <img
                    className='Location_Img'
                    src={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/location_london.svg`}
                    alt='London'
                  />
                </div>
              </div>
              <div className='LocationDiv'>
                <div className='LocationDiv_Typo'>
                  <img
                    src={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/UAE_Icon.svg`}
                    alt='UAE'
                  />

                  <h2 className='Location_Country'>UAE</h2>
                  <h3 className='Location_Address'>
                    Mazyad Mall, Tower 2 - 4th Floor, Office 425, Abu Dhabi, UAE
                  </h3>
                </div>
                <div className='LocationDiv_Img'>
                  <img
                    className='Location_Img'
                    src={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/UAE.svg`}
                    alt='UAE'
                  />
                </div>
              </div>

              <div className='LocationDiv'>
                <div className='LocationDiv_Typo'>
                  <img
                    src={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/pak_icon.svg`}
                    alt='Pakistan'
                  />

                  <h2 className='Location_Country'>Pakistan</h2>
                  <h3 className='Location_Address'>
                    8-A, Iqbal Avenue Cooperative Housing Society - Phase I Lahore, Punjab
                  </h3>
                </div>
                <div className='LocationDiv_Img'>
                  <img
                    className='Location_Img'
                    src={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/location_pak.svg`}
                    alt='pakistan'
                  />
                </div>
              </div>
            </AwesomeSlider>
          </div>
        )}
      </div>
    </>
  );
}
