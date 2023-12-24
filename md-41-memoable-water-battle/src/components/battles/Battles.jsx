// import React from 'react';

import { useEffect, useState } from "react";
import Battle from "./Battle";
import './battle.css'



const Battles = () => {

    const [battles , setBattles] = useState([])
    // console.log(battles)
    useEffect(()=> {
          fetch('battle.json')
          .then(res => res.json())
          .then( data => setBattles(data))
          
    } ,[])

            // console.log(battles)
    return (
        <div>
               <h3>Battle here We knows: {battles.length}</h3>
              <div className="bottle-container">
              {
                battles.map(bottle => <Battle 
                    key={bottle.id}
                   bottle={bottle}
                ></Battle>)
               }
              </div>
               
               
        </div>
    );
};

export default Battles;