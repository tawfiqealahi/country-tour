import { useState } from "react";
import "./Countries.css";
import { useEffect } from "react";
import Country from "../Country/Country";



const Countries = () => {
    const [countries,setCountries]=useState([]);
    const [visitedCountries,setVisitedCountries]=useState([]);
    const [visitedCountryFlags,setVisitedCountryFlags]=useState([]);


useEffect(()=>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res=>res.json())
    .then(data=>setCountries(data));
},[])

const handleVisitedCountry =country=>{
        const newVisitedCountries =[...visitedCountries,country];
        setVisitedCountries(newVisitedCountries);             
}
const handleVisitedCountryFlags =flag=>{
    const newVisitedFlags=[...visitedCountryFlags,flag]
    setVisitedCountryFlags(newVisitedFlags)
} 

    return (
        <div>
        <h3>Total Country: {countries.length}</h3>
        <div>
        <h5>Total Visited Country  : {visitedCountries.length} </h5>
            <h5>Visited Country List : <ol>
            {
                visitedCountries.map(country=><li key={country.cca3}>{country.name.common}</li>  ) 
                }
            </ol> </h5>
        </div>
        <div className="flag-container">{
            visitedCountryFlags.map(flag=><img src={flag} />)
        }</div>
     <div className='country-container'
> {  
        countries.map(country=><Country
        handleVisitedCountryFlags={handleVisitedCountryFlags}
         handleVisitedCountry={handleVisitedCountry}  key={country.cca3}
        country={country} ></Country>)
       }
       </div>
        </div>
    );
};

export default Countries;