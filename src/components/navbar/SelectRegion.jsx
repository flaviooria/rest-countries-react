import React, { useEffect, useState } from 'react';

export function SelectRegion({ handleCountries, setLoading }) {
  const urlByRegion = 'https://restcountries.com/v3.1/region';

  const [region, setRegion] = useState('Europe');

  useEffect(() => {
    if (region === '') {
      return;
    }

    const setCountriesByRegion = async () => {
      setLoading(true);
      const response = await fetch(`${urlByRegion}/${region}`);
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
      className="select-region"
      name="filterRegion"
      id="filterRegion"
      onChange={handleSetRegionSelect}
    >
      <option defaultValue={region} value="">
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
