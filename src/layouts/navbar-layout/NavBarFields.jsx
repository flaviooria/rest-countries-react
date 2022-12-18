import React from "react";
import { SelectRegion } from "../../components/dropdown_bar/SelectRegion";
import { SearchBar } from "../../components/search_bar/SearchBar";

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
