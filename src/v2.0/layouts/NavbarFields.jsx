import React from 'react';
import { DropdownRegion } from "../components/dropdown/DropdownRegion";
import { SearchBar } from "../components/search/SearchBar";

export function NavbarFields({ query, handleQuery, setCountries, setLoading }) {
  return (
    <nav className="flex justify-around p-1 py-3 mt-8 mb-4">
      <SearchBar
        queryCountry={query}
        handleQueryCountrie={handleQuery}
      ></SearchBar>
      <DropdownRegion
        handleCountries={setCountries}
        setLoading={setLoading}
      ></DropdownRegion>
    </nav>
  );
}
