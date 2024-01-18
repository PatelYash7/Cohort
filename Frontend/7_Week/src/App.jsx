import './App.css'
import React, { useState } from 'react'
import { BrowserRouter, Link, Route, Routes, useNavigate } from 'react-router-dom'
import Dashboard1 from '../Components/Dashboard1'
// const Dashboard1 = React.lazy(()=>import ('../Components/Dashboard1'))
import Landing from '../Components/Landing'
import Wrapper from './Wrapper'

function App() {
  // const [count, setCount] = useState(0)
  
  return (
    <div>

      <BrowserRouter>
        <AppBar />
        <Routes>
          <Route path='/dashboard' element={<Dashboard1 />}></Route>
          <Route path='/' element={<Landing />}></Route>
        </Routes>
      </BrowserRouter>
      {/* <Wrapper/> */}
    </div>

  )
}
function AppBar() {
  const navigate = useNavigate();  //Always use this hook inside the BrowserRouter Component of RRD router dom
  return <div>
    <div style={{ }}>
      <button onClick={() => { navigate("/") }}>Landing Page</button>
      <button onClick={() => { navigate("/dashboard") }}> Dashboard</button>
      <Link to="/dashboard" style={{color:"black", textDecoration:"none"}}>Dashboard</Link>
    </div>
  </div>
}

export default App
