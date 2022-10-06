import React from 'react';
import { useTranslation } from 'react-i18next';
import Bulb from '../../assets/images/bulb.svg';
import Linkedin from '../../assets/images/linkedin_btn_pic.svg';
export default function SocialBanner(props) {
  const { t } = useTranslation();
  return (
    <>
      <div className='socialBannerContainer'>
        <div className='socialBannerDiv'>
          <div className='socialBannerLeftDiv'>
            <div className='socialBannerImageDiv'>
              <img src={Bulb} />
            </div>
            <div className='socialBannerTextDiv'>
              <div className='socialBannerDivider'></div>
              <p>Curious to learn more?</p>
              <h2>Check out our socials!</h2>
            </div>
          </div>
          <div className='socialBannerRightDiv'>
            <a
              href='https://pk.linkedin.com/company/falconconsultinggroup?trk=ppro_cprof&original_referer=https%3A%2F%2Fwww.google.com%2F'
              className='socialBannerBtnDiv'
              target='_blank'
            >
              <div className='socialBannerBtnImagediv'>
                <img src={Linkedin} />
              </div>
              <div className='socialBannerBtnTextDiv'>
                <p>Follow us on Linkedin</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
