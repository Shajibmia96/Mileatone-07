// import React from 'react';

import { useEffect, useState } from "react";
import Battle from "./Battle";
import './battle.css'
import { getLSData, savedLSData } from "../../LocalStorage/LS";
import Cart from "../cart/Cart";



const Battles = () => {

    const [battles , setBattles] = useState([])

    const [cart, setCart] = useState([])

    // console.log(battles)
    useEffect(()=> {
          fetch('battle.json')
          .then(res => res.json())
          .then( data => setBattles(data))
          
    } ,[])

    // load data from local storages

    useEffect( () =>{
        console.log(battles.length)
      if(battles.length > 0){
        const loadData = getLSData()
        console.log(loadData)
         const savedCart = []
         for(const id of loadData){
            console.log(id)
             const bottle = battles.find( bottle => bottle.id === id)
             if(bottle){
               savedCart.push(bottle)
             }
         }
         console.log(savedCart)
         setCart(savedCart)
      }
    } ,[battles])


    // EventHandler 

    const handleBottle =(bottle) =>{
         console.log(bottle)
         const newCart = [...cart , bottle]
         setCart(newCart)
         savedLSData(bottle.id)
    }

            // console.log(battles)
    return (
        <div>
               <h3>Battle here We knows: {battles.length}</h3>
               <Cart cart={cart}></Cart>
              <div className="bottle-container">
              {
                battles.map(bottle => <Battle 
                    key={bottle.id}
                   bottle={bottle}
                   handleBottle={handleBottle}
                ></Battle>)
               }
              </div>
               
               
        </div>
    );
};

export default Battles;