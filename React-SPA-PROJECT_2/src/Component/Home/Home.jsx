
import { useState } from "react";
import "./Home.css"
import { useEffect } from "react";
import Card from "../Card/Card";
const Home = () => {
    // for data load
    const [data ,setData] = useState([])
//   Handles Clicked
const [click ,setClick] = useState([])


// HandleClick function

 const handleClick =(card) =>{
    console.log(card.name)
 }
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
                     handleClick={handleClick}
                    ></Card>)
                 }
              </div>
              {/* Card */}
              <div className="card">
                <h1>This is card</h1>
              </div>
              </div>
        </div>
    );
};

export default Home;