// Init
import React from 'react';
import { Typography } from '@mui/material';
import Divider from '@mui/material/Divider';
import { Avatar } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
// Component
export default function DetailWebDev(props) {
  const { t } = useTranslation();

  return (
    <>
      <div className="DetailWebDev_Container">
        <motion.div
          className="DetailWebDev_LeftContainer"
          initial={{ y: 50, opacity: 0.7 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}>
          <div className="DetailWebDev_TitleDiv">
            <Divider className="DetailWebDev_TitleDivider" color={props.titleTheme || '#11A283'} />
            <Typography className="DetailWebDev_Title" color={props.titleTheme || '#11A283'}>
              WEB DEVELOPMENT
            </Typography>
          </div>
          <div className="DetailWebDev_DespDiv">
            <Typography className="DetailWebDev_Desp">
              {t(
                'The web version of the project was the first one to be developed. At first, little attention was made on the overall design, and the goal was to get the functionalities working. A challenging aspect of the project was that it was taken over from another agency, who did not follow the best coding practices. The client wanted us to make it work without having to start from scratch. Even though it required more time than expected (as it can sometimes be challenging to work on another’s agencies code), we completed to project without additional budget'
              )}
            </Typography>
          </div>
          <div className="DetailWebDev_Left_ImgDiv">
            <img
              style={{ width: '100%' }}
              src={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/detail_webdev1.png`}
              alt="Detail Development"
            />
          </div>
        </motion.div>
        <div className="DetailWebDev_RightContainer">
          <div className="DetailWebDev_Right_ImgDiv">
            <img
              style={{ width: '100%' }}
              src={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/detail_webdev2.png`}
              alt="Detail Development"
            />
          </div>
          <div className="DetailWebDev_TypoDiv">
            <div className="DetailWebDev_TitleDiv">
              <Divider
                className="DetailWebDev_TitleDivider"
                color={props.titleTheme || '#11A283'}
              />
              <Typography className="DetailWebDev_Title" color={props.titleTheme || '#11A283'}>
                CLIENT FEEDBACK
              </Typography>
            </div>
            <div className="DetailWebDev_DespDiv">
              <Typography className="DetailWebDev_Desp">
                {t(
                  props.feedback ||
                    'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself actual teachings of the great explorer of the truth, the master-builder of human happiness.....'
                )}
              </Typography>
            </div>
            <div className="DetailWebDev_ClientContainer">
              <div style={{ width: '40%' }}>
                <div className="DetailWebDev_AvatarDiv">
                  <Avatar
                    className="DetailWebDev_Avatar"
                    sx={{ width: 70, height: 70 }}
                    src={props.AvatarSrc}
                  />
                  <div className="DetailWebDev_NameDiv">
                    <Typography className="DetailWebDev_Name" color={props.nameColor || '#2FAD93'}>
                      {props.name || 'DDS Formation'}
                    </Typography>
                    <Typography className="DetailWebDev_Location">
                      {props.location || 'France'}
                    </Typography>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
// props
// titleTheme
// desp
// AvatarSrc
// nameColor
// name
// location
