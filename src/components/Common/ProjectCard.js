// Init
import Tooltip from '@mui/material/Tooltip';
import { motion, useScroll, useTransform } from 'framer-motion';
import React, { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import Arrow from '../../assets/images/project_card_arrow.svg';
import BasicModal from '../Common/BasicModal';
// Home Component

function useParallax(value, distance) {
  return useTransform(value, [0, 1], [-distance, distance]);
}
export default function ProjectCard(props) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 300);
  const { i18n, t } = useTranslation();
  const [desp, setDesp] = useState();

  useEffect(() => {
    setDesp(t(props?.description));
  }, [props?.description]);
  const handleRedirect = () => {
    window.location = [props?.href];
  };

  return (
    // <section>
    <div ref={ref} className='ProjectCard_Container'>
      <img
        className='ProjectCard_BgImage'
        src={props.src || `${process.env.REACT_APP_MEDIA_URL}/uploads/images/orgaplan_update.png`}
      />
      <motion.div
        className='ProjectCard_MainDiv'
        initial={{ y: 150, opacity: 0.5 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3 }}
        viewport={{ once: true }}
      >
        <Link to={props.to}>
          <div className='ProjectCard_ImageDiv' onClick={props.to ? '' : handleRedirect}>
            <img
              className='ProjectCard_Image'
              src={
                props.src || `${process.env.REACT_APP_MEDIA_URL}/uploads/images/orgaplan_update.png`
              }
              alt='Project Card'
            />
            <div className='ProjectCard_GradientDiv'></div>
          </div>
          <motion.div
            initial={{ y: 250, opacity: 0 }}
            whileInView={{ y: 200, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false }}
            onClick={props.to ? '' : handleRedirect}
          >
            <div className='ProjectCard_TextDiv'>
              <Tooltip title={props.title}>
                <h2 className='ProjectCard_Heading'>
                  {/* {props?.title?.length > 15
                  ? props?.title?.slice(0, 15) + '...'
                  : props?.title || 'Permispop.'} */}
                  {props.title || 'Permispop.'}
                </h2>
              </Tooltip>

              <p className='ProjectCard_Desp'>
                {/* {props.description} */}
                {t(desp?.length > 150 ? desp.slice(0, 150) + '...' : desp)}
              </p>
              <div style={{ display: 'flex', alignItems: 'center', width: '100%' }}>
                <button className='ProjectCard_Btn'>
                  {props.BtnText || 'Case Study'}
                  {/* <BasicModal
                    ModalBtntextColor='#003B7E'
                    ModalBtnTheme={props.ModalBtnTheme || 'transparent'}
                    ModalBtnText={t(props.ModalBtnText || 'Case Study')}
                    LogoSrc={props.LogoSrc}
                    Heading={props.heading}
                    Dividerwidth={props.Dividerwidth || '12%'}
                    DividerTheme={props.DividerTheme}
                    para1={props.para1}
                    para2={props.para2}
                    para3={props.para3}
                    para4={props.para4}
                    para5={props.para5}
                    para6={props.para6}
                    para7={props.para7}
                    para8={props.para8}
                  /> */}
                </button>

                <motion.div
                  animate={{
                    x: [-5, 0, -5],
                  }}
                  transition={{
                    delay: 0.05,
                    repeat: Infinity,
                  }}
                  viewport={{ once: false }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    marginLeft: '5%',
                  }}
                >
                  <img src={Arrow} />
                </motion.div>
              </div>

              <div className='ProjectCard_TagsDiv'>
                <p className='ProjectCard_Tags'>{props.tag1}</p>
                <p className='ProjectCard_Tags'>{props.tag2}</p>
                <p className='ProjectCard_Tags'>{props.tag3}</p>
                <p className='ProjectCard_Tags'>{props.tag4}</p>
                <p className='ProjectCard_Tags'>{props.tag5}</p>
                <p className='ProjectCard_Tags'>{props.tag6}</p>
                <p className='ProjectCard_Tags'>{props.tag7}</p>
                <p className='ProjectCard_Tags'>{props.tag8}</p>
              </div>
            </div>
          </motion.div>
        </Link>
      </motion.div>
    </div>
    // </section>
  );
}
