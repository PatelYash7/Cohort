import { useState } from 'react'
import './App.css'

function App() {

  const[number,setNumber]=useState(0);
  return (
    <>
      <div>
        <button onClick={()=>setNumber(number-1)}>
          decrement
        </button>
        <p>{number}</p>
        <button onClick={()=>setNumber(number+1)}>
          Increment
        </button>
      </div>
    </>
  )
}

export default App
