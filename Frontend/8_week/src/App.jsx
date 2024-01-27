import React,{ useState,useEffect } from 'react'
import axios from 'axios'
import './App.css'


//Hook custom vala
function useInterval(fn,n){
  useEffect(()=>{
    setInterval(fn,n*1000);
    return ()=>{
      clearInterval(fn);
    }
  },[]);
}

function useDebounce(value,n){
  const[dvalue,setdvalue]=useState(value);
  useEffect(()=>{
    const time=  setTimeout(()=>{
      setdvalue(value);
    },n)
    return ()=>{
      clearInterval(time)
    }
  },[value])
  return dvalue;
}

function usetodos(n){
  const [todos, setTodos] = useState([])
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    const value = setInterval(() => {
        axios.get("https://sum-server.100xdevs.com/todos")
        .then(res => {
          setTodos(res.data.todos);
          setLoading(false);
        })      
    }, n*1000);
    axios.get("https://sum-server.100xdevs.com/todos")
    .then(res => {
      setTodos(res.data.todos);
      setLoading(false);
    })     

    //Cleanup function
    return ()=>{
      clearInterval(value);
    }
  }, [n])
  return {todos,loading};
}

function App() {
  
  // const {todos,loading}=usetodos(5);
  // const [count,setCount]=useState(0);
  const[value,setvalue]=useState("");
  const debounced = useDebounce(value,500);
  // useInterval(()=>{
  //   setCount(c => c+1)
  // },2)
  return (
    <>
      {/* {loading?"Loading...":todos.map(todo => <Track todo={todo} />)} */}
      {/* {count} */}
      <input type="text" onChange={e => setvalue(e.target.value)} />
      <br />
      this is value {value}  and this is {debounced}
    </>
  )
}

function Track({ todo }) {
  return <div>
    {todo.title}
    <br />
    {todo.description}
  </div>
}
// function App() {
//   // const[count,setCount]=useState(0);
//   const[render,setRender]=useState(true);
//   useEffect(()=>{
//     setInterval(()=>{
//       setRender(r =>!r)
//     },10000)
//     return () => {
//       console.error("Unmounted from AppJSx");
//     };
//   },[])

//   return(
//     <>
//       {render ?<MyComponent/> : null}
//     </> 

//   )
// }


// function MyComponent() {
//   useEffect(() => {
//     // Perform setup or data fetching here
//     console.error("MOunted0");

//     return () => {
//       // Cleanup code (similar to componentWillUnmount)
//       console.error("UnMOunted0");
//     };
//   }, [])

//   // Render UI
//   return <div>Hello My component</div>
// }
// function MyComponent() {
//   const [count, setCount] = useState(0);

//   const incrementCount = () => {
//     setCount(count + 1);
//   };

//   return (
//     <div>
//       <p>{count}</p>
//       <button onClick={incrementCount}>Increment</button>
//     </div>
//   );
// }
// class MyComponent extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { count: 0 };
//   }

//   incrementCount = () => {
//     this.setState({ count: this.state.count + 1 });
//   }

//   render() {
//     return (
//       <div>
//         <p>{this.state.count}</p>
//         <button onClick={this.incrementCount}>Increment</button>
//       </div>
//     );
//   }
// }
export default App
