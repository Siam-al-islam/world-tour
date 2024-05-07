import { useState } from 'react';
import './Country.css'

const Country = ({ country, handleVisitedCountry, handleVisitedFlags }) => {
    const { name, flags, capital, area, population, cca3 } = country;

    const [visited, setVisited] = useState(false);

    const handleVisited = () => {
        setVisited(!visited);
    }

    return (
        <div className={`country ${visited && "visited"}`}>
            <img className='image' src={flags.png} alt="" />
            <h2>Name: {name?.common}</h2>
            <p>Capital: {capital}</p>
            <p>Area: {area}</p>
            <p>Population: {population}</p>
            <p><small>Code: {cca3}</small></p>
            <div className='button-wrapper'>
                <button onClick={() => { handleVisitedCountry(country); handleVisitedFlags(country.flags.png); }}>Mark as Visited</button>
                <button onClick={handleVisited}>{visited ? "Not visited?" : "Visited"}</button>
            </div>
        </div >
    );
};

export default Country;