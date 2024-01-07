import React, { memo, useState } from 'react'

function Rerender() {
    const[name,setName]= useState("Yash");
  return (
    <div>
        <button onClick={()=>{setName( Math.random())}}>
             Click me
         </button>
         <Header title={name}/>
         <br />
        {/* <Headerwithbutton/> */}
        <Header title="name"/>
        <Header title="Name"/>
        <Header title="name"/>
    </div>
  )
}
//First way
// function Headerwithbutton(){
//     const[name,setName]= useState("Yash");
//     return(
//         <div>
//             <button onClick={()=>{setName( Math.random())}}>
//             Click me
//         </button>
//         <Header title={name}/>
//         </div>
//     )
// }

//Second way to stop rerender of Header component
 
// function Header({title}){
//     return(
//         <div>
//            my name is + {title}
//         </div>
//     )
// }

const Header = memo(function ({title}){
    return(
        <div>
           my name is + {title}
        </div>
    )
})

export default Rerender