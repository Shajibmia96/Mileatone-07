import './country.css'
const Country = ({country}) => {
      const {name , flags} = country;
      console.log(country)
    return (
        <div className="country">
              <p>Name : {name?.common}</p>
              <p>Alt : {flags.alt}</p>
              <img src={flags.png} alt="" />
        </div>
    );
};

export default Country;