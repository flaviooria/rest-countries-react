import React, { useState } from 'react';

export default function Navbar() {

  const [changeTheme, setChangeTheme] = useState(false);

  const handleChangeTheme = () => {
    setChangeTheme(!changeTheme);

    let root = document.querySelector('body');
    const classTheme = changeTheme ? 'light-theme' : 'dark-theme';
    root.className = '';
    root.classList.add(classTheme);
    console.log('change theme')
  }

  return (
    <section className="navbar">
      <div className="navbar-content">
        <h1 className="navbar-content-title">Where in the world?</h1>
        <div
          className="navbar-content-theme"
          onClick={handleChangeTheme}
        >
          <p>{changeTheme ? 'Light Mode': 'Dark Mode'}</p>
        </div>
      </div>
    </section>
  );
}
