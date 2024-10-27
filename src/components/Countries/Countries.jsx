import { useState } from "react";
import "./Countries.css";
import { useEffect } from "react";
import Country from "../Country/Country";



const Countries = () => {
    const [countries,setCountries]=useState([]);
    const [visitedCountries,setVisitedCountries]=useState([]);


useEffect(()=>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res=>res.json())
    .then(data=>setCountries(data));
},[])

const HandleVisitedCountry =(country)=>{

}
    return (
        <div>
        <h3>Total Country: {countries.length}</h3>
        <div>
            <h5>Visited Country List : {} </h5>
            <ul>

            </ul>
        </div>
     <div className='country-container'
> {  
        countries.map(country=><Country HandleVisitedCountry={HandleVisitedCountry}  key={country.cca3}
        country={country} ></Country>)
       }
       </div>
        </div>
    );
};

export default Countries;