import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function ServiceProvidedCard(props) {
  const { i18n, t } = useTranslation();

  return (
    <>
      {props.verticleCard ? (
        <div className='ServiceProvided_VerticleCard'>
          <div className='ServiceProvided_VerticleCardTypo'>
            <Link
              style={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                padding: '3% 0% 3% 5%',
              }}
              to={props.to}
            >
              <div className='ServiceProvided_SubCardTypo'>
                <h2 className='ServiceProvided_CardTitle'>{t(props.CardTitle)}</h2>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    cursor: 'pointer',
                  }}
                >
                  <button className='ServiceProvided_CardBtn'>
                    {t(props.BtnText ? props.BtnText : 'Get Details')}
                  </button>
                  <img
                    style={{
                      marginLeft: '2%',
                    }}
                    src={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/arrowForward.svg`}
                    alt='forward Button'
                  />
                </div>
              </div>
            </Link>
          </div>
          <div className='ServiceProvided_VerticleCardImgDiv'>
            <Link to={props.to}>
              <img
                className='ServiceProvided_VerticleCardImg'
                src={props.CardImgSrc}
                alt='categories'
              />
            </Link>
          </div>
        </div>
      ) : (
        <div className='ServiceProvided_Card'>
          <div className='ServiceProvided_CardTypo'>
            <Link
              style={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                padding: '3% 0% 3% 8%',
              }}
              to={props.to}
            >
              <div className='ServiceProvided_SubCardTypo'>
                <h2 className='ServiceProvided_CardTitle'>{t(props.CardTitle)}</h2>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  <button className='ServiceProvided_CardBtn'>
                    {t(props.BtnText ? props.BtnText : 'Get Details')}
                  </button>
                  <img
                    style={{
                      marginLeft: '2%',
                    }}
                    src={`${process.env.REACT_APP_MEDIA_URL}/uploads/images/arrowForward.svg`}
                    alt='forward Arrow'
                  />
                </div>
              </div>
            </Link>
          </div>
          <div className='ServiceProvided_CardImgDiv'>
            <Link to={props.to}>
              <img className='ServiceProvided_CardImg' src={props.CardImgSrc} alt='Categories' />
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
