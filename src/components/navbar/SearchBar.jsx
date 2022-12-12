import React from 'react';

export function SearchBar({queryCountry, handleQueryCountrie}) {
    return (
        <input
            type="text"
            className='search'
            name="searchCountry"
            placeholder="Search for a country"
            onChange={handleQueryCountrie}
            value={queryCountry} />
    );
}
