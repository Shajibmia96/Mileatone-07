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

       const handlesVisited =country =>{
        console.log("We find out visited country")
            console.log(country)
       }

    return (

          
        <div>
              <h4>Countries : {countries.length}</h4>

                <div>
                    <h3>Visited countries</h3>
                    <ul>

                    </ul>
                </div>
              <div className="countries-container">
                 {
                countries.map( country =><Country 
                    key={country.cca3} 
                    handlesVisited={handlesVisited}
                    country={country}></Country>)
                }
              </div>
        </div>
    );
};

export default Countries;