import React from 'react';



export function SearchBar({ queryCountry, handleQueryCountrie }) {
  return (
    <input
      type="text"
      className="rounded-md p-2 w-1/2 h-10
         font-semibold outline-none  text- dark:shadow-md dark:shadow-gray-600"
      placeholder="Search for a country"
      value={queryCountry}
      onChange={handleQueryCountrie} />
  );
}
