import React, { useState } from 'react'

function Memo() {
    const[num,setNum]=useState(0)
    const[text,setText]=useState(1)
    let count =0 ;
    for (let index = 1; index <= text ;index++) {
        count=count+index
    }
  return (
    <div>
        <button onClick={function(){setNum(num+1)}}>{num}</button>
        <br />
        <input type="text" onChange={function(e){setText(e.target.value)}}/>
        <br />
        <div>
        sum from 1 to {text} is {count}
        </div>


    </div>
  ) 
}

export default Memo