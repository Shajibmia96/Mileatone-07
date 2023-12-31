
import { useState } from "react";
import "./Home.css"
import { useEffect } from "react";
import Card from "../Card/Card";

import ShowCard from "../ShowCard";

const Home = () => {
    // for data load
    const [data ,setData] = useState([])
//   Handles Clicked
const [select ,setSelect] = useState([])
// console.log(select)

// HandleSelect function

 const handleSelect =(card) =>{
   //  setSelect(card)
   // console.log(card)
    const  newSelected = [...select , card]
   //  console.log(newSelected)
      setSelect(newSelected)
      
 }

//  console.log(select.name)
//  useEffect
    useEffect(() =>{
           const fetchData = async() =>{
             const res = await fetch("data.json")
             const data =await res.json()
              setData(data)
           }
           fetchData()
    } , [])
    // console.log(data)
    return (
        <div className="Container">
              <div className="Home-Container">
              <div className="display-Card">
                 {
                    data.map((card ) => <Card
                     card={card}
                     key={card.id}
                     handleSelect={handleSelect}
                    ></Card>)
                 }
              </div>
              {/* Card */}
              <div className="card">
                {
                  select.map(selected => <ShowCard
                  selected={selected}
                  key={selected.id}
                  ></ShowCard>)
                }
              </div>
              </div>
        </div>
    );
};

export default Home;