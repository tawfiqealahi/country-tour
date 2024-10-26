import { useState } from 'react';
import  './Country.css';

const Country = ({country}) => {
    const {name,cca3,flags,area,capital}=country;
    const[visited,setVisited]=useState(false);
    const handleVisited=()=>{
        setVisited(!visited);
    }

    return (
        <div className='country'>
           <div className='image'> <img src={flags.png} alt="flag"  /></div>
            <h3>Country Name:{name?.common} </h3> 
            <p>Country Code:  {cca3}</p> 
            <p>Area:{area}</p>
            <p>Capital: {capital}</p>
           <div className='button'>
            <button onClick={handleVisited} >{visited?'Visited':'Make a plan' }</button>
            {visited ?'I have visited this country.':'I want to visit this country'}
            </div>
            
        </div>
    );
};

export default Country;