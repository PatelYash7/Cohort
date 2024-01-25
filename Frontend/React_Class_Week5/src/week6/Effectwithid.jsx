import React, { useEffect, useState } from 'react'

function Effectwithid() {
    const [selectedId, setSelectedId] = useState(1);

  return (
    <div>
    <button onClick={() => setSelectedId(1)}>1</button>
    
    <button onClick={function() {
      setSelectedId(2);
    }}>2</button>
    
    <button onClick={function() {
      setSelectedId(3);
    }}>3</button>
    
    <Todo id={selectedId} />
   </div>
  )
}
function Todo({id}){
    const[todo,setTodo]=useState({});

    useEffect(()=>{
        fetch("https://sum-server.100xdevs.com/todo?id=" + id)
        .then(async function (res){
            const json= await res.json();
            console.log(json)
            setTodo(json.todo);
        })
        return ()=>{
            console.log("This is a cleanup function")
        }
    },[id])

    return(
        <div>
            <h1>
                {todo.title}
            </h1>
            <p>{todo.description}</p>
        </div>
    )
}

export default Effectwithid