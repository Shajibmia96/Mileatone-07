import { useEffect, useState } from "react";

export default function Bonthu (){
       const [bondhus , setBonthus] = useState([]);
       useEffect(()=>{
             fetch("https://jsonplaceholder.typicode.com/users")
             .then(res => res.json())
             .then(data =>console.log(data))
       } , []);

       return (
         <div>
            <h3>Hello bonthu :</h3>
         </div>
       )
}