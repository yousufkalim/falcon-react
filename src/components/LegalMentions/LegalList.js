import React from 'react';
import { legalMentions } from '../../utils/Data';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
export default function LegalList(props) {
  const { t } = useTranslation();
  const [open, setOpen] = React.useState('');

  const handleClick = (item) => {
    setOpen(item);
  };
  return (
    <>
      <div className='LegalMention_ListContainer'>
        {legalMentions.map((item) => {
          return (
            <>
              <div className='LegalMention_ListDiv'>
                <div
                  className='LegalMention_ListBar'
                  onClick={() => {
                    if (open !== item.title) {
                      handleClick(item.title);
                    } else {
                      handleClick('');
                    }
                  }}
                >
                  <div className='LegalMention_ListBar_Left'>
                    <div className='LegalMention_ListBar_IndexDiv'>
                      <div className='LegalMention_ListBar_Index'>{item.index}</div>
                    </div>

                    <div className='LegalMention_ListBar_TitleDiv'>
                      <Typography className='LegalMention_ListBar_Title'>
                        {t(item.title)}
                      </Typography>
                    </div>
                  </div>
                  <div className='LegalMention_Collapse_Btn'>
                    {open === item.title ? (
                      <ExpandLess fontSize='large' />
                    ) : (
                      <ExpandMore fontSize='large' />
                    )}
                  </div>
                </div>

                <Collapse
                  className='Service_list'
                  in={open === item.title}
                  timeout='auto'
                  unmountOnExit
                >
                  <div className='LegalMention_Collapse_Body'>
                    <Typography>{item.body}</Typography>
                  </div>
                </Collapse>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}
