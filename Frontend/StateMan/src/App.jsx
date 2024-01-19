import { useState,useContext } from 'react'
import {CountContext} from "./Context"
import './App.css'

function App() {
  const[count,setCount]=useState(0);
  return (
    <>
      <CountContext.Provider value={count}>
        <Count setCount={setCount} />
      </CountContext.Provider>
    </>
  )
}
function Count({setCount}){
  console.log("Rerenderes")
  return(
    <div>
      <CountRenderer/>
      <Buttons setCount={setCount}/>
    </div>
  )
}
function CountRenderer(){
  const count=useContext(CountContext);
  return (
      <div>
          {count}
      </div>
  )
}
function Buttons({setCount}){
 const count=useContext(CountContext);
 return(
  <div>
    <button onClick={()=>{setCount(count+1)}}>Increase</button>
    <button onClick={()=>{setCount(count-1)}}>decrease</button>
  </div>
 ) 
}
export default App
