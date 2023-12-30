// import React from 'react';

import { useState } from "react";

const UseState = ({add , handleAdd , handleRemoved}) => {

        const arrayOfObject =[
            { id: 1, name: 'John', age: 25 },
            { id: 2, name: 'Jane', age: 30 },
            { id: 3, name: 'Bob', age: 22 },
            { id: 4, name: 'Alice', age: 28 },
            { id: 5, name: 'Charlie', age: 35 },
            { id: 6, name: 'Eva', age: 29 },
            { id: 7, name: 'David', age: 33 },
            { id: 8, name: 'Sophie', age: 27 },
            { id: 9, name: 'Michael', age: 31 },
            { id: 10, name: 'Olivia', age: 26 }
          ]
  const [data ,setData] = useState(arrayOfObject)   
  
//   handleAll

const handleAll =() =>{
    setData([])
}

const handleDelete =(id) =>{
    console.log("Single delete done")
    const undeleteData = data.filter(item => item.id !==id)
    setData(undeleteData)
}
          
    return (
        <div className="text-4xl text-center my-20">
              <h1>Explore react hooks</h1>
              <p>Count {add}:</p>
              <button onClick={handleAdd} className="btn btn-secondary mr-5">Add</button>
              <button onClick={handleRemoved} className="btn btn-danger">Removed</button>
              {
                 add=="Shajib" &&<h1>Yes</h1>
                 
              }
              {
                add=="Sabuj" && <h1>No</h1>
              }

             {
               data && data?.map((item , idx) => (
                    <div key={idx} className="mt-20">
                        <h1>{item.name}</h1>
                        <button onClick={()=>handleDelete(item.id)} className="btn btn-error">Removed</button>
                    </div>
                    
                ))
                
             }
             {
                <button onClick={handleAll}  className="btn btn-info mt-20">Removed All</button>
             }
        </div>
    );
}; 

export default UseState;