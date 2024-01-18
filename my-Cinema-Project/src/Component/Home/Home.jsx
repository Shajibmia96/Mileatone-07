// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import './Home.css'



const Home = () => {
    // UseState
     const [Actors , setActors] =useState([])
    //  console.log(Actors)
    // useEffect and fetch data 
       useEffect(()=>{
            fetch('/public/data.json')
            .then(res => res.json())
            .then(data => setActors(data))
       } ,[])
       
       console.log(Actors)
    return (
        <div> 
             <div className="Home-container">
                <div className="card-container">
                 {
                    // eslint-disable-next-line react/jsx-key
                    Actors.map(actor =><div key={actor.id} className="card">
                        
                    <div >
                     <img className="photo" src={actor.image} alt="" />
                    </div>
                    <h3>Name :{actor.name}</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium, tenetur. Et, optio!</p>
                    <div className="info">
                       <p>Salary : {actor.salary}</p>
                       <p>{actor.role}</p>
                    </div>
                    <button className='cart-btn'>Selected</button>
                 </div>)   
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