import React from 'react';
import {useState} from 'react'

const colors = ['purple','blue','green','yellow','orange','red']
let currentColor = ""

function LikeButton() {

const [add, setAdd] = useState(0)
const [like, setLike] = useState('like')

const handleClick = (action) =>{
    return ()=>{
        if( action === 'like') setAdd(add +1)
        currentColor = colors[Math.floor(Math.random() * colors.length)]
        if(add > -1) setLike('likes')
        // setAdd((prevCount)=> prevCount + 1)
    }
}

  return (
  <div>
    <button onClick={handleClick('like')} style={
        {backgroundColor: currentColor}}>{add} {like}</button>
  </div>
  );
}

export default LikeButton;


// ['purple','blue','green','yellow','orange','red']