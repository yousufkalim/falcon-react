import React from 'react';

export default function ServiceFrame(props) {
  return (
    <>
      <div className='ServiceFrame'>
        <img src={props.src} width={props.width || '70%'} alt='Service Frame' />
      </div>
    </>
  );
}
