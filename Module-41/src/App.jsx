
import { useState } from 'react';
import './App.css'
import Watch from './components/Watch/Watch'
import { useEffect } from 'react';

function App() {


  // const watches =[{id : 1 , name : "i watch" , price : "319"},
  //                   {id : 2 , name : "Sam watch" , price : "359"},
  //                   {id : 3 , name : "MI watch" , price : "329"},]
  
   const [watches , setWatches] = useState([])
   
     useEffect( () =>{ 
               fetch('watches.json')
               .then(res => res.json())
               .then( data => setWatches(data))
     } , [])

  console.log(watches);
  

  return (

    <> 
        {/* <Watch></Watch> */}
          <h3>Thsi is module 41</h3>
          <h1>Tanvir</h1>

          {
            watches.map(watch => <Watch key={watches.id} watch ={watch}></Watch>)
          }
     
    </>
  )
}

export default App
