import { Typography } from '@mui/material';
import React from 'react';
import Legal_Icon from '../../assets/images/legal_icon.svg';

const PolicyHeader = () => {
  return (
    <>
      <div className="LegalMention_HeaderContainer">
        <div className="LegalMention_HeaderDiv">
          <div className="LegalMention_HeaderTitleDiv">
            <div>
              <img src={Legal_Icon} />
            </div>
            <Typography className="LegalMention_HeaderTitle">Privacy Policy</Typography>
          </div>
          {/* <div className="LegalMention_HeaderDespDiv"> */}
          {/* <Typography className="LegalMention_HeaderDesp_H">Privacy Policy</Typography> */}
          {/* <Typography className="LegalMention_HeaderDesp_P">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis laboriosam dolore
              voluptate excepturi, illum, molestiae recusandae consequuntur iusto doloremque
              cupiditate molestias magni minima tenetur voluptatibus inventore omnis natus sed.
              Debitis?
            </Typography> */}
          {/* </div> */}
        </div>
      </div>
    </>
  );
};

export default PolicyHeader;
