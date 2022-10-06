import React from 'react';
import { useTranslation } from 'react-i18next';
import Bulb from '../../assets/images/bulb.svg';
import Linkedin from '../../assets/images/linkedin_btn_pic.svg';
import { motion } from 'framer-motion';
export default function SocialBanner(props) {
  const { t } = useTranslation();
  return (
    <>
      <div className='socialBannerContainer'>
        <div className='socialBannerDiv'>
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className='socialBannerLeftDiv'
          >
            <div className='socialBannerImageDiv'>
              <img src={Bulb} />
            </div>
            <div className='socialBannerTextDiv'>
              <div className='socialBannerDivider'></div>
              <p>{t('Curious to learn more?')}</p>
              <h2>{t('Check out our socials!')}</h2>
            </div>
          </motion.div>
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className='socialBannerRightDiv'
          >
            <a
              href='https://pk.linkedin.com/company/falconconsultinggroup?trk=ppro_cprof&original_referer=https%3A%2F%2Fwww.google.com%2F'
              className='socialBannerBtnDiv'
              target='_blank'
            >
              <div className='socialBannerBtnImagediv'>
                <img src={Linkedin} />
              </div>
              <div className='socialBannerBtnTextDiv'>
                <p>{t('Follow us on Linkedin')}</p>
              </div>
            </a>
          </motion.div>
        </div>
      </div>
    </>
  );
}
