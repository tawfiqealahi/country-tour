import  './Country.css';

const Country = ({country}) => {
    const {name,cca3}=country
    return (
        <div>
            <h2>Country Name: </h2> <p> {name.common}</p>
            <h>Country Code: </h> <p> {cca3}</p>

        </div>
    );
};

export default Country;