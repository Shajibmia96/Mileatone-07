// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import './Home.css'
import Cart from '../Cart/Cart';


const Home = () => {
    // UseState
     const [Actors , setActors] =useState([])
    // useEffect and fetch data 
       useEffect(()=>{
            fetch('/public/data.json')
            .then(res => res.json())
            .then(data => setActors(data))
       } ,[])
       
    //    console.log(Actors)
    return (
        <div> 
             <div className="Home-container">
                <div className="card-container">
                 {
                    Actors.map(actor =><Cart key={actor.id} actor={actor}></Cart>)
                 }
                </div>
                <div className="cart-container">
                    <h3>This is cart sections</h3>
                </div>
             </div>
        </div>
    );
};

export default Home;