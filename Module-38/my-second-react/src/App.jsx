import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  

  return (
    <>
      
      <h1>Vite + React</h1>
      <Student name = "Shajib"  age ="12"></Student>
      <Student name = "Tipu"  age ="26"></Student>
      <Student name = "Sayem"  age ="22"></Student>
      <Student name = "Akash"  age ="20"></Student>
    
    </>
  )
}

function Student ({name = 0 , age =0}) {
     
  return (
    <div>
         <h1>Students name</h1>
         <p>name : {name}</p>
         <p>age : {age}</p>
    </div>
  )
}

export default App
