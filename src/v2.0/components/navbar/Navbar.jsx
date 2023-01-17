import React from 'react';

export function Navbar() {
  return (
    <section className="shadow-lg h-20 p-3 dark:shadow-md dark:shadow-gray-600">
      <div className="flex items-center justify-between dark:text-dark-text">
        <h1 className="font-extrabold text-title">Where in the world?</h1>
        <div className="font-semibold">
          <p>Dark Mode</p>
        </div>
      </div>
    </section>
  );
}
