

const CountriesData = ( {country}) => {
    console.log(country)
    return (
        <div>
            <h3>Countries Data found : {country?.name?.common}</h3>
        </div>
    );
};

export default CountriesData;