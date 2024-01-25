import React from 'react'
import { useState } from 'react'

function Counter() {
const[number,setNumber]=useState(0);
  return (
    <div>
        <button onClick={()=>setNumber(number-1)}>
          decrement
        </button>
        <p>{number}</p>
        <button onClick={()=>setNumber(number+1)}>
          Increment
        </button>
      </div>
  )
}

export default Counter