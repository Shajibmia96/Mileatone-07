import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './Counter'
import Check from './Check'
import Team from './Team'
import Users from './Users'
import Bonthu from './bonthu'
// import Friends from './Friends'



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

      <Users></Users>


      <Team></Team>
       
        <h3>Now we explore react cor concept</h3>
        <button onClick={handlesClick}>Click me</button>
        {/* Array function */}
        <button onClick={handlesClick2}>Click me2</button>
        {/* Anonymous function */}
        <button onClick={() =>{alert("handlesClick03")}}>Click me3</button>
        <button onClick={() =>addFive(10)}>Five</button>
         <Counter></Counter>
         <Check></Check>

         <Bonthu></Bonthu>

      

      
    </>
  )
}

export default App
