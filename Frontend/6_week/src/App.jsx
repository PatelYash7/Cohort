import { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'
import Memo from './Memo';

function App() {
  const[count ,setCount]=useState(0)
  const [todos,setTodos]=useState([]);
  useEffect(()=>{
  axios.get("https://sum-server.100xdevs.com/todos").then((obj)=>{
    console.log(obj.data.todos)
    setTodos(obj.data.todos)
  })
    
  },[count])

  const increament =()=>{
    setCount(count+1)
  }

  return (
    <>
    <div>
      {/* <div>
        <button onClick={increament}>Call</button>
        <div>{count}</div>
      </div> */}
      {/* { todos.map((todo)=><Card key={todo.id} title={todo.title} description={todo.description}/>)  } */}
    </div>
    <Memo/>
    </>
  )
}
function Card({title,description}){
  return(
    <>
      <div>{title}</div>
      <p>{description}</p>
      <br></br>
    </>
  )
}

export default App
