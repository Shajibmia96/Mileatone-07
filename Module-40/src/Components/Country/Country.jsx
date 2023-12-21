import { useState } from 'react';
import './country.css'
import CountriesDetails from '../Countries/CountriesDetails';
const Country = ({country , handlesVisited ,  handlesVisitedFlags}) => {

    // console.log(country)
    

      const {name , flags , area , capital, population , region} = country;
    //   console.log(country);

       const [visited , setVisited] = useState(false)

         const handlesClick =() =>{
             setVisited(!visited)
         };

        //  console.log(handlesVisited)



    return (
        <div className= {`country  ${visited ? "visited" : "None"}`}>
              <p style={{color : visited ? "purple" : "orange", fontSize: visited ? "40px" : "20px"}}>Name : {name?.common}</p>
              {/* <p>Alt : {flags?.alt}</p> */}
              <img src={flags?.png} alt="" />
              <p>Area :{area}</p> 
              <p>Capital :{capital}</p>
              <p> Population :{population}</p>
              <p>Region :{region}</p>
              <button onClick={()=>handlesVisited(country)}> Mark country visited</button> <br /><br />
              <button onClick={handlesClick}>{visited ? "Visited" : "I wanna going a day"}</button><br /> <br />
              <button onClick={() => handlesVisitedFlags(country)}>add visited Flags</button>
              {visited ? "This country was visited by me" : "This country did'n visited"}

              <hr />
              <CountriesDetails
                  country = {country}
                  handlesVisited ={handlesVisited}
                  handlesVisitedFlags ={ handlesVisitedFlags}
              ></CountriesDetails>
        </div>
    );
};

export default Country;