import { useEffect, useState } from "react"
import './friends.css'
import NameWit from "./NameWit";
export default function Wit(){
        
    const [name , setName] = useState([]);

         useEffect(() =>{
           fetch("https://jsonplaceholder.typicode.com/users")
           .then(res => res.json())
           .then(data => setName(data))

         } , [])

    return (
        <div className="box">
            <h1>Hi..{name.length}</h1>
            {
                name.map(info => <NameWit info ={info}></NameWit> )
            }
        </div>
    )
}