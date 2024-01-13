import './App.css'
import React, { useState } from 'react'
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom'
// import Dashboard from '../Components/dashboard'
const Dashboard1 = React.lazy(()=>import ('../Components/Dashboard1'))
import Landing from '../Components/Landing'

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
    </div>

  )
}
function AppBar() {
  const navigate = useNavigate();  //Always use this hook inside the BrowserRouter Component of RRD router dom
  return <div>
    <div style={{ background: "black", color: "white" }}>
      <button onClick={() => { navigate("/") }}>Landing Page</button>
      <button onClick={() => { navigate("/dashboard") }}> Dashboard</button>
    </div>
  </div>
}

export default App
