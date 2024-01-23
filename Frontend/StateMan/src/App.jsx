import { useContext } from 'react'
import {CountContext} from "./Context"
import './App.css'
import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'
import { countAtom, evenSelector, } from '../store/atoms/count'

function App() {
  
  return (
    <>
      <RecoilRoot>
        <Count />
      </RecoilRoot>
    </>
  )
}
function Count(){
  console.log("Rerenderes")
  return(
    <div>
      <CountRenderer/>
      <Buttons />
    </div>
  )
}
function CountRenderer(){
  const count=useRecoilValue(countAtom);
  const isEven= useRecoilValue(evenSelector);
  return (
      <div>
          {count}
          {isEven ? " Even" :null}
      </div>
  )
}
function Buttons(){
//  const[count,setCount]=useRecoilState(countAtom);
 const setCount = useSetRecoilState(countAtom) 
 return(
  <div>
    <button onClick={()=>{setCount(count=>count+1)}}>Increase</button>
    <button onClick={()=>{setCount(count=>count+1)}}>decrease</button>
  
  </div>
 ) 
}
export default App
