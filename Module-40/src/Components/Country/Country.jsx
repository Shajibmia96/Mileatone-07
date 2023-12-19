import { useState } from 'react';
import './country.css'
const Country = ({country}) => {
    console.log(country)
      const {name , flags , area , capital, population , region} = country;
      console.log(country);
       const [visited , setVisited] = useState(false)
         const handlesClick =() =>{
             setVisited(!visited)
         }
    return (
        <div className="country">
              <p>Name : {name?.common}</p>
              <p>Alt : {flags?.alt}</p>
              <img src={flags?.png} alt="" />
              <p>Area :{area}</p>
              <p>Capital :{capital}</p>
              <p> Population :{population}</p>
              <p>Region :{region}</p>
              <button onClick={handlesClick}>{visited ? "Visited" : "I wanna going a day"}</button><br />
              {visited ? "This country was visited by me" : "This country did'n visited"}
        </div>
    );
};

export default Country;