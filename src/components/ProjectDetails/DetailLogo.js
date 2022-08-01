// Init
import React from 'react';

// Component
export default function DetailLogo(props) {
  return (
    <>
      <div
        className='DetailLogo_Container'
        style={{
          backgroundColor: props.theme ? props.theme : '#00654F',
        }}
      >
        <div className='DetailLogo_Div'>
          <img className='DetailLogo_Img' src={props.src} alt='Detail Logo' />
        </div>
      </div>
    </>
  );
}
// props
// theme
// src
