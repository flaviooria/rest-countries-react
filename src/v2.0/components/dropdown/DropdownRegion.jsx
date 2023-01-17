import React, { useState, useEffect } from 'react';



export function DropdownRegion({ handleCountries, setLoading }) {
  const urlByRegion = 'https://restcountries.com/v3.1/region';

  const [region, setRegion] = useState('Europe');

  useEffect(() => {
    if (region === '') {
      return;
    }

    const setCountriesByRegion = async () => {
      setLoading(true);
      const response = await fetch(
        `${urlByRegion}/${region}?fields=name,borders,capital,region,subregion,population,flags,nativeName,tld,languages,currencies`
      );
      const data = await response.json();
      setTimeout(() => {
        setLoading(false);
        handleCountries([...data]);
      }, 1000);
    };

    setCountriesByRegion();
  }, [region]);

  const handleSetRegionSelect = (e) => {
    const regionSelected = e.target.value;
    setRegion(regionSelected);
  };

  return (
    <select
      className="rounded-md h-10 font-semibold outline-none cursor-pointer"
      name="filterRegion"
      id="filterRegion"
      onChange={handleSetRegionSelect}
    >
      <option defaultValue={region} value={region}>
        Filter by Region
      </option>
      <option value="Europe">Europe</option>
      <option value="America">America</option>
      <option value="Asia">Asia</option>
      <option value="Africa">Africa</option>
      <option value="Oceania">Oceania</option>
    </select>
  );
}
