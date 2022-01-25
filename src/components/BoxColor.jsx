import React from 'react';

function BoxColor(props) {

    const {r, g, b} = props
    const background = {
        background: `rgb(${r},${g},${b})`,
        height: 50
    }
  return (

  <div style={background}> </div>
  );
}

export default BoxColor;
