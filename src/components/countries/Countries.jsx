import { useEffect } from "react";
import { useState } from "react";
import Country from "../country/Country";
import './countries.css'

const Countries = () => {
    const [countries, setCountries] = useState([]);
    const [visitedCountries, setVisitedCountries] = useState([]);
    const [visitedFlags, setVisitedFlags] = useState([]);

    useEffect(() => {
        fetch("https://restcountries.com/v3.1/all")
            .then(res => res.json())
            .then(data => setCountries(data))
    }, [])

    const handleVisitedCountry = (country) => {
        const newVisitedCountries = [...visitedCountries, country];
        setVisitedCountries(newVisitedCountries);
    }

    const handleVisitedFlags = (flag) => {
        const newVisitedFlags = [...visitedFlags, flag];
        setVisitedFlags(newVisitedFlags);
    }

    return (
        <>
            <h3>Total Countries: {countries.length}</h3>
            <div>
                <h4>Visited Countries: {visitedCountries.length}</h4>
                <div className="visited-country-wrapper">
                    <div>
                        <ul>
                            {
                                visitedCountries.map(country => <li key={country.cca3}>{country.name.common}</li>)
                            }
                        </ul>
                    </div>
                    <div className="flag-wrapper">
                        {
                            visitedFlags.map((flag, idx) => <img key={idx} className="image" src={flag}></img>)
                        }
                    </div>
                </div>
            </div>
            <div className="country-wrapper">
                {
                    countries.map(country => <Country
                        key={country.cca3}
                        handleVisitedCountry={handleVisitedCountry}
                        handleVisitedFlags={handleVisitedFlags}
                        country={country} />)
                }
            </div>
        </>
    );
};

export default Countries;