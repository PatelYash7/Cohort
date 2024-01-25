import React, { useState } from 'react'

function Todo() {
 
    const [todos, setTodos] = useState([{
        id:1,
        title: "Go to gym",
        description: "Need to hit the gym from 7-9PM"
      }, {
        id:2,
        title: "Go to Clas",
        description: "Need to go to the class from 4-7 PM"
      }, {
        id:3,
        title: "Eat foor",
        description: "Need to eat food from 2-4 PM"
      }])
      return (
        <div>
          {todos.map((todo) => <Task key={todo.id} title={todo.title} description={todo.description} />)}
        </div>
      )
    
}
function Task({title,description}){
    return (
        <div>
            <h1>{title}</h1>
            <p>{description}</p>
        </div>
      )
}

export default Todo