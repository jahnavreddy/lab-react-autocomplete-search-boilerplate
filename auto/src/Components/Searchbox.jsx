import React, { useState } from 'react';
import countries from "../../resources/countryData.json"

const Searchbox = () => {
    const [searchValue, setSearchValue] = useState('');
    const [filteredCountries, setFilteredCountries] = useState([]);

    const handleInputChange = (e) => {
        const inputValue = e.target.value.toUpperCase();
        setSearchValue(inputValue);
        const filteredData = countries.filter((country) =>
            country.name.toUpperCase().startsWith(inputValue)
        );
        setFilteredCountries(filteredData);
    };

    const clearSearch = () => {
        setSearchValue('');
        setFilteredCountries([]);
    };

    return (
        <div>
            <h1>Search for a Country</h1>
            <div className='searchbox'>
                <input
                    type="text"
                    value={searchValue}
                    onChange={handleInputChange}
                    placeholder="Enter a country name"
                />
                <button onClick={clearSearch}>Clear</button>
            </div>
            {searchValue && (
                <div>
                    {filteredCountries.length > 0 ? (
                        <ul>
                            {filteredCountries.map((country) => (
                                <li key={country.code}>{country.name}</li>
                            ))}
                        </ul>
                    ) : (
                        <p>No countries found</p>
                    )}
                </div>
            )}
        </div>
    );
};

export default Searchbox;
