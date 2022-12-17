import React from 'react';
import { SearchBar } from '../../components/search_bar/SearchBar';
import { SelectRegion } from '../../components/dropdown_bar/SelectRegion';

export default function NavBarFields({
  query,
  handle,
  setCountries,
  setLoading,
}) {
  return (
    <div className="navbar-inputs">
      <SearchBar queryCountry={query} handleQueryCountrie={handle}></SearchBar>
      <SelectRegion
        handleCountries={setCountries}
        setLoading={setLoading}
      ></SelectRegion>
    </div>
  );
}
