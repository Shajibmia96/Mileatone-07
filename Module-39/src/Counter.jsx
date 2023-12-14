import { useState } from "react"

export default function Counter(){

//     const useState =(num) =>{
//         const useValue = () =>{
//              num = value
//         }

//         return  [num , useValue]
//    }
//    const [num1 , num2] = useState(4)

        const [count , setCount] = useState(0)
        //  console.log(count)

         const add =() =>{
             const newCount = count +1
             setCount(newCount)
         };
         const reduce =() =>{
            const newCount = count -1;
            setCount(newCount)
         }

      return(
        <div style={{border : "2px solid red", padding: "20px" }}>
            <h4>Counter : {count} </h4>
            <button onClick={add}>Add</button>
            <button onClick={reduce}>Reduce</button>
        </div>
      )

      
}