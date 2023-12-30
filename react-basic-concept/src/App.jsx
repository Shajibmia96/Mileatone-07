import { useState } from "react";
import "./App.css";
import Cart from "./Component/Cart";
import Example from "./Component/Example";
import UseState from "./Component/UseState/UseState";

 


function App() {

  const students =[
    {
      "id": 1,
      "name": "John Doe",
      "age": 25,
      "city": "New York"
    },
    {
      "id": 2,
      "name": "Jane Smith",
      "age": 30,
      "city": "Los Angeles"
    },
    {
      "id": 3,
      "name": "Bob Johnson",
      "age": 22,
      "city": "Chicago"
    }
  ]

  const names = ["Shajib" , "Sarif" , "Sohan" , "Golap Hossain" ,"Mehedi hasan"]
 // Use State for add 

   const [add , setAdd] = useState("Shajib")

// 

  //  handle add 

   const handleAdd =() =>{
      console.log("add click")
     
      setAdd("Sabuj")
   }

   const handleRemoved =() =>{
     console.log("removed is clicked")
     setAdd("Shajib")
   }
  return (
    <div className="container mx-auto">
        <h1 className="text-3xl text-center">Wellcome to my web pase</h1>
           <div className="grid grid-cols-3 gap-5">
             
          {
            students.map(item => <Cart key={item.id} name={item.name} age={item.age}></Cart>)
          }
             
           </div>
           <Example>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, rem?</p>
           </Example>

           {
            names.map((item) =>( <h1>{item}</h1>))
           }

           <UseState handleAdd={handleAdd} add={add} handleRemoved={handleRemoved}></UseState>
    </div>
  );
}

export default App;
