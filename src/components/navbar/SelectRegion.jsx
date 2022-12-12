import React from 'react';

export function SelectRegion() {
    return (
        <select className='select-region' name="filterRegion" id="filterRegion">
            <option defaultValue={'Filter by Region'}>Filter by Region</option>
            <option value="1">Europe</option>
            <option value="2">America</option>
            <option value="3">Asia</option>
            <option value="4">Africa</option>
            <option value="5">Oceania</option>
        </select>
    );
}
