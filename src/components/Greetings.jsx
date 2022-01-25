import React from 'react';

function Greetings(props) {

   let trad = ""
   if(props.lang === "fr") trad = "Bonjour"
   if(props.lang === "de") trad = "Hallo"

  return (
    
  <div>
      <span>{trad} </span>
      <span>{props.children}</span>

  </div>
  );


}

export default Greetings;
