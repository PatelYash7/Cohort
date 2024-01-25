import React from 'react'
import { useState } from 'react'

function State() {
  return (
    <>
        <HeaderWithButton/>
        <Header title={"Hello"}/>
    </>
  )
}

function HeaderWithButton(){
    const[title,setTitle]=useState("Yash")
    return(
        <div>
            <button onClick={function (){setTitle(Math.random()*1000)}}>Click here to change the title</button>
            <Header title={title}/>
        </div>
    )
}
function Header({title}){
    return(
        <div>
            {title}
        </div>
    )
}
export default State