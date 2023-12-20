import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";
import './Countries.css'



const Countries = () => {

    const [countries , setCountries] = useState([])

        useEffect( () => {
             fetch("https://restcountries.com/v3.1/all")
             .then ( res => res.json())
             .then( data => setCountries(data))
        } , []);

       const [visitedCountry , setVisitedCountry] = useState([])

       const [visitedFlags,setVisitedFlags] = useState([])

       const handlesVisited =country =>{
        console.log("We find out visited country")
            console.log(country)
            // visitedCountry.push(country)

            const newVisitedCountries = [...visitedCountry , country];
            setVisitedCountry(newVisitedCountries)
       };


       const handlesVisitedFlags = flag =>{
          console.log("We find out flag")
         const  newVisitedFlag = [...visitedFlags , flag]
         setVisitedFlags(newVisitedFlag)
       }

       

    return (

          
        <div>
              <h4>Countries : {countries.length}</h4>

                <div>
                    <h3>Visited countries : {visitedCountry.length}</h3>

                    <ul>
                        {
                            visitedCountry.map(country => <li key={country.cca3}>{country.name.common}</li>)
                        }
                    </ul>

                    <h3>Visited Flags : {visitedFlags.length} </h3>
                      
                    

                </div>

                <div className="flags-container">
                     {
                        visitedFlags.map(flag => <img key={flag.cca3}  src={flag.flags.png}></img>)
                      }
                     </div>


              <div className="countries-container">
                 {
                countries.map( country =><Country 
                    key={country.cca3} 
                    handlesVisited={handlesVisited}
                    handlesVisitedFlags = { handlesVisitedFlags}
                    country={country}></Country>)
                }
              </div>
        </div>
    );
};

export default Countries;