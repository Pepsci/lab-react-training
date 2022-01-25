import React from 'react';

function Random(props) {

   const {min, max} = props
    let random = Math.floor(Math.random() * (max - min)) + min;


  return( 
  <div>
      <span>{random}</span>
  </div>
  );
}

export default Random;
