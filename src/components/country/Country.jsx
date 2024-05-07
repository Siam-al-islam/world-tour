import { useState } from 'react';
import './Country.css'

const Country = ({ country }) => {
    const { name, flags, capital, area, population, cca3 } = country;

    const [visited, setVisited] = useState(false);

    const handleVisited = () => {
        setVisited(!visited);
    }

    return (
        <div className='country'>
            <img className='image' src={flags.png} alt="" />
            <h2>Name: {name?.common}</h2>
            <p>Capital: {capital}</p>
            <p>Area: {area}</p>
            <p>Population: {population}</p>
            <p><small>Code: {cca3}</small></p>
            <button onClick={handleVisited}>Visited</button>
            {visited ? " I have visited this country." : " Not visited?"}
        </div>
    );
};

export default Country;