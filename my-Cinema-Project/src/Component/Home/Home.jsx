// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import './Home.css'




const Home = () => {
    // UseState
     const [Actors , setActors] =useState([])
     const [likeActors , setLikeActor] = useState([])
     const [totalSalary , seTotalSalary] = useState(0)
     const [totalCost , setTotalCost] = useState(0)
     const [remaining , setRemaining] = useState(0)
     console.log(totalSalary)
    // useEffect and fetch data 
       useEffect(()=>{
            fetch('/public/data.json')
            .then(res => res.json())
            .then(data => setActors(data))
       } ,[])

    //    Select State
    
    
       
    //    Selected actor function 
    const selectActor =(actor) =>{

        let count =actor.salary
        console.log(count)
        // console.log(actor)
      const isExist =  likeActors.find((item) => item.id == actor.id)
      if(isExist){
         return alert("It's already books")

      }else{
        setLikeActor([...likeActors , actor])
        seTotalSalary(totalSalary + actor.salary)
        likeActors.forEach(item=> {
           count = count +item.salary
           
        })
        setTotalCost(count)
         const TotalRemaining = 20000-count
         setRemaining(TotalRemaining)
      }
        
        
    }
    
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
                       <p>Salary : ${actor.salary}</p>
                       <p>{actor.role}</p>
                    </div>
                    <button className='cart-btn' onClick={()=>selectActor(actor)}>Selected</button>
                 </div>)   
                 } 
                </div>
                <div className="cart-container">
   
                  <h3>total Actor : {likeActors.length}</h3>
                    <h3>Total Remaining budget : {remaining}</h3>
                   <h3>Total cost : {totalCost}</h3>
                   <h3>Total salary :{totalSalary}</h3>
                  {
                    likeActors.map(actor =>(
                        <li key={actor.id}>{actor.name}</li>
                    ))
                  }
                </div>
             </div>
        </div>
    );
};

export default Home;