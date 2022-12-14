import React from 'react';

export default function Navbar() {
  return (
    <section className="navbar">
      <div className="navbar-content">
        <h1 className="navbar-content-title">Where in the world?</h1>
        <div
          className="navbar-content-theme"
          onClick={() => console.log('change theme')}
        >
          <p> Dark Mode</p>
        </div>
      </div>
    </section>
  );
}
