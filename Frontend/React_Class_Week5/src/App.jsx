import { useState } from 'react'
import './App.css'
import First from './week6/First';
import Counter from './week5/Counter';
import Rerender from './week6/Rerender';
import Todo from './week6/Todo';
import Hooks from './week6/Hooks';
import Effectwithid from './week6/Effectwithid';


function App() {

  // const[number,setNumber]=useState(0);
  return (
    <>
      {/* <Counter/>
      <First/> */}
      {/* <Rerender/> */}
      {/* <Todo/> */}
      {/* <Hooks/>4 */}
      <Effectwithid/>
    </>
  )
}

export default App
