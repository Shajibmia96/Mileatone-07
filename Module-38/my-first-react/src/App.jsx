import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 

  return (
    <>
     
      <h1>Vite + React</h1>
      <h3>My name is Shajib sarkar</h3>
      <IntroMySelf></IntroMySelf>
      <IntroMySelf></IntroMySelf>
      <IntroMySelf></IntroMySelf>
      <IntroSayem ></IntroSayem>
      <InfoStudent></InfoStudent>
    </>
  )
  IntroMySelf
};


function IntroMySelf() {
    const Me = {
      name : "Shajib",
      age : 23,
      dream: "Became a web developer"
    }

    return  <h1>My name is {Me.name}. I am {Me.age} years old</h1>
};

function IntroSayem (){
      const sayem = {
        name: " Sayem",
        age : 22, 
        dream : "marry  to dream girl sumaiya "
      }

      return (
        <div>
            <h1>His name is {sayem.name} .  He was {sayem.age} years old . his dream is {sayem.dream}</h1>
        </div>
      )
};

function InfoStudent () {
      const student ={
        id: 123123,
        name :"Sajiya islam Dullon",
        age: 21,
        address:{district :"nayangonj" , policeStation : "Araihajar"}
      };

      return (
        <div>
            <h1>Student info below</h1>
            <p>Id : {student.id}</p>
             <p>name : {student.name}</p>
        </div>
      )
}


export default App
