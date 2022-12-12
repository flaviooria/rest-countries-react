import React from 'react';
import { SearchBar } from './SearchBar';
import { SelectRegion } from './SelectRegion';

export default function Navbar({ query, handle }) {
  return (
    <section className="navbar">
      <div className="navbar-content">
        <h1 className="navbar-content-title">Where in the world?</h1>
        <div className="navbar-content-theme" onClick={() => console.log('change theme')}>
          <p> Dark Mode</p>
        </div>
      </div>
      <div className="navbar-inputs">
        <SearchBar
          queryCountry={query}
          handleQueryCountrie={handle}
        ></SearchBar>
        <SelectRegion></SelectRegion>
      </div>
    </section>
  );
}
