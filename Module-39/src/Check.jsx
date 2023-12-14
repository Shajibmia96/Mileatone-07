import { useState } from "react"

 export default function Check(){

      const [count , setCount] = useState(0)
      console.log( count, setCount)

        const add =() =>{
            const newCount = count +1;
            setCount(newCount)
        };
        const reduce = () =>{
            const newCount = count -1;
            setCount(newCount)
        }
      return (
        <div style={{border :"2px solid yellow", padding :"20px", borderRadius : "20px", marginTop: "20px"}}>
              <h5>HI...</h5>
              <h1>Counter : {count}</h1>
              <button onClick={add}>Add</button>
              <button onClick={reduce}>Reduce</button>
        </div>
      )
 }