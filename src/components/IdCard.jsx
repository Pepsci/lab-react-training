import React from 'react';

const IdCard = (props) => {
  return( 
  <div className='idCard'>
      <div className="picture">
        <img src={props.picture} alt={props.firstname} />
      </div>
      <div className="identity">
        <span><b>First name</b>{props.lastName}</span>
        <span><b>Last Name</b>{props.firstName}</span>
        <span><b>Gender</b>{props.gender}</span>
        <span><b>Height</b>{props.height}</span>
        <span><b>Birth</b>{props.birth.toDateString()}</span>
      </div>
  </div>);
};

export default IdCard;
