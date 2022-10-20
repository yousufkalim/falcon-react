// Init
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

export default function MoreProjectCards(props) {
  const { t } = useTranslation();
  const [desp, setDesp] = useState();

  useEffect(() => {
    setDesp(t(props?.desp));
  }, [props?.desp]);
  return (
    <>
      <Link to={props.to}>
        <div className="MoreProjectCards_MainDiv">
          <div className="MoreProjectCards_HoverDiv">
            <div className="MoreProjectCards_TextDiv">
              <h2 className="MoreProjectCards_Title">{props.title}</h2>
              <p className="MoreProjectCards_Description">
                {/* {t(props.desp)} */}
                {t(desp?.length > 70 ? desp.slice(0, 70) + '...' : desp)}
              </p>
            </div>
          </div>
          <img className="MoreProjectCards_Image" src={props.image} alt="ProjectCards" />
        </div>
      </Link>
    </>
  );
}
