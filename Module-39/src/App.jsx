import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './Counter'
import Check from './Check'

function App() {
  
   function handlesClick(){
      alert("button click")
   };

   const handlesClick2 =() =>{
       alert("button click2")
   };

   const addFive =(num) =>{
      alert (num +10)
   }

  return (
    <>

       
        <h3>Now we explore react cor concept</h3>
        <button onClick={handlesClick}>Click me</button>
        {/* Array function */}
        <button onClick={handlesClick2}>Click me2</button>
        {/* Anonymous function */}
        <button onClick={() =>{alert("handlesClick03")}}>Click me3</button>
        <button onClick={() =>addFive(10)}>Five</button>
         <Counter></Counter>
         <Check></Check>

      
    </>
  )
}

export default App
