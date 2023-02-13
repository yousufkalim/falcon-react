// Init
import React from 'react';
import { Typography } from '@mui/material';
import { Avatar } from '@mui/material';
import { Divider } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

// Component
export default function DetailFeedback(props) {
  const { t } = useTranslation();

  return (
    <>
      <div
        className="DetailFeedback_container"
        style={{ background: props.ThemeBG ? props.ThemeBG : '#00654F' }}>
        <motion.div
          className="DetailFeedback_Div"
          initial={{ y: 50, opacity: 0.7 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}>
          <div className="DetailFeedback_TypoDiv">
            <div className="DetailFeedback_TitleDiv">
              <Divider className="DetailFeedback_TitleDivider" color={props.titleTheme || '#fff'} />
              <Typography className="DetailFeedback_Title" color={props.titleTheme || '#fff'}>
                {t('CLIENT FEEDBACK')}
              </Typography>
            </div>
            <div className="DetailFeedback_DespDiv">
              <Typography className="DetailFeedback_Desp" color={props.despTheme || '#fff'}>
                {t(
                  props.desp1 ||
                    'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself actual teachings of the great explorer of the truth, the master-builder of human happiness.....'
                )}
              </Typography>
              <Typography className="DetailFeedback_Desp" color={props.despTheme || '#fff'}>
                {t(props.desp2)}
              </Typography>
            </div>
            <div className="DetailFeedback_ClientContainer">
              <div className="DetailFeedback_ClientDiv">
                <div className="DetailFeedback_AvatarDiv">
                  <Avatar className="DetailFeedback_Avatar" src={props.AvatarSrc} />
                  <div className="DetailFeedback_NameDiv">
                    <Typography className="DetailFeedback_Name" color={props.titleTheme || '#fff'}>
                      {props.name || 'DDS Formation'}
                    </Typography>
                    <Typography
                      className="DetailFeedback_Location"
                      color={props.despTheme || '#fff'}>
                      {props.location || 'Paris'}
                    </Typography>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
}

// props
// ThemeBG
// titleTheme
// despTheme
// desp
// AvatarSrc
// name
// location
// * nameColor
// * locationColor
