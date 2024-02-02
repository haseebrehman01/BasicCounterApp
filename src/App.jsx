import { useState } from 'react'

import './App.css'

function App() {
  // const [count, setCount] = useState(0)
// js counter logic
let [count,setCount] = useState(0)
const  AddValue = ()=>{


if(count < 10){
  setCount(count + 1)
  console.log("AddValue if :" + count)
}
else{
  setCount(10)
  console.log( "AddValue else : " + count)
}







}
const removeValue = ()=>{

if(count > 0){
  setCount(count - 1)
  console.log("Remove value if :" +count)
}
else{
  setCount(0)
  console.log(" Remove value else :" + count)
}

    }
  return (
    <>
    <h1>Counter</h1>

    {/* { <h2>counter Value :  {counter}</h2> }   */}     {/* esa bhand marega . esa sahi karna ka lya hooks istemal hota */}  

    <h2>counter Value : {count}  </h2>
    <button className='btnss' onClick={AddValue} >Add counter {count} </button>
    <br/>
    <button className='btnss btnss2' onClick={removeValue}   >Remove Counter { count } </button>
    </>
  )
  }

export default App
// I have completed the Counter App.