import React, { useState , memo, useCallback} from 'react'

function Callback() {
    const[count,setCount]=useState(0);

    const a=useCallback(()=>{    //It is used for referenciality constraint means when react know that a==b is true then it will rerender otherwi
    //                             //otherwise it will not
        console.log("From A");
    },[])  

    // var a=1 // here when a == strind is passed everytime a string is passed it references a same string so it will not re render 
    // when any variable or object references the same address then it will not rerender, 
    // when they not references the same memory then it will re render everytime. so we use useCallback for this . 


    //useCallback is used to eliminate the disadvantage of memo. because memo only rerenders when the props passed is changed in components
    // when refrenciality conflicts occurs, when same function is passed then react thinks that it is different function bcz of reference is different.
    // soo we useCallback to eliminate this rerenders of child components while passing function,obj etc etc as a props

  return (
    <div>
        <button onClick={function(){setCount(count+1)}}>{count}</button>
        <Call a={a()}/>
    </div>
  )
}
const Call= memo(function Call({a}){
    console.log("Render")
    return (
        <div>
            Hello {a}
        </div>
    )
})

export default Callback