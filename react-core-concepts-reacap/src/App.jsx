import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Posts from './Posts'

function App() {
  

  return (
    <>
        <h3> explore react cor concepts</h3>
        <ol>
          <li>Components</li>
          <li>JSX</li>
          <li>Prop</li>
          <li>Event handler</li>
          <li>State</li>
          <li>Data load</li>
        </ol>
         <hr />
        <Posts></Posts>
    </>
  )
}

export default App
