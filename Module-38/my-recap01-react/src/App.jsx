import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  const numbers = [45,75,75,75,85,43,5]
  numbers.map( number => < GetNumber number={number}></GetNumber>)

  return (
    <>
    
        
       
    </>
  )
}

function GetNumber(number){
    <h1>Math : {number}</h1>
}

export default App
