import React from 'react';

export function Card({ name, population, region, capital, flag }) {
  return (
    <article className="rounded-lg overflow-hidden bg-dark-background w-[300px] sm:w-[250px] md:w-[230px] lg:w-[250px] shadow-md shadow-gray-500 dark:text-white-background cursor-pointer text-md">
      <img className="rounded-t-lg w-full h-[150px] object-cover" src={flag} alt="flag" />
      <div className="p-6">
        <h2 className="font-semibold text-lg truncate text-ellipsis">{name}</h2>
        <p className="font-semibold text-sm my-3">
          Poblation: <span className="font-light">{population}</span>
        </p>
        <p className="font-semibold text-sm my-3">
          Region: <span className="font-light">{region}</span>
        </p>
        <p className="font-semibold text-sm my-3">
          Capital: <span className="font-light">{capital}</span>
        </p>
      </div>
    </article>
  );
}
