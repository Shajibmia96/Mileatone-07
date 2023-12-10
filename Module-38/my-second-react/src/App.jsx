import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Todo from "./todo";
import Actors from "./Actors";
import Singers from "./SIngers";

function App() {

    const actors = ["Sakib" , "Raj" ,"Emon" , "Josim" , "Rubel"];
    const singers =[
      {id:12 , name:"Mahfuzur rahman" , age: 65},
      {id:13 , name:"Pritom " , age: 25},
      {id:14 , name:"Sabina " , age: 35},
      {id:15 , name:"mahatim sakib" , age: 25},
      {id:16 , name:"Nenxy" , age: 45}
    ]
  return (
    <>
      <h1>Vite + React</h1>

        {
          singers.map( singer => <Singers singer={singer}></Singers>)
        }
         
         {
           actors.map(actor =><Actors name={actor}></Actors>
           )
         }
        
      {/* <Student name = "Shajib"  age ="12"></Student>
      <Student name = "Tipu"  age ="26"></Student>
      <Student name = "Sayem"  age ="22"></Student>
      // <Student name = "Akash"  age ="20"></Student> */}
      
      {/* // <Todo task="Learn React" isDone ={true}></Todo>

      // <Todo task="Learn React in cor concept" isDone ={false}></Todo>
      // <Todo task="in cor concept" isDone ={false}></Todo>
      // <Todo task="JSX in cor concept " isDone ={true}></Todo> */}
      <Actors name = "Nohash Eshan"></Actors>

        
    </>
  );
}

function Student({ name = 0, age = 0 }) {
  return (
    <div>
      <h1>Students name</h1>
      <p>name : {name}</p>
      <p>age : {age}</p>
    </div>
  );
}

export default App;
