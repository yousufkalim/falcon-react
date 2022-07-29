import React from 'react';
import WebFrame from '../../assets/images/webframe.svg';

export default function ServiceFrame(props) {
  return (
    <>
      <div className='ServiceFrame'>
        <img src={props.src} width={props.width || '70%'} alt='Service Frame' />
      </div>
    </>
  );
}
