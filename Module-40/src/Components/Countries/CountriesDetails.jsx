import CountriesData from "./CountriesData";


const CountriesDetails = (props) => {
         const { country ,handlesVisited , handlesVisitedFlags} = props
    return (
        <div>
             <h3>Explore countries details :</h3>

             <hr />
              {/* <CountriesData 
                country ={country}
                handlesVisited ={handlesVisited}
                handlesVisitedFlags={ handlesVisitedFlags}
              ></CountriesData> */}

              <CountriesData
                  {...props}
              ></CountriesData>
        </div>
    );
};

export default CountriesDetails;