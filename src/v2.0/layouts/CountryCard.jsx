import React from 'react';
import { Link } from 'react-router-dom';

export default function CountryCard({ country }) {
  const {
    name,
    nativeName,
    population,
    region,
    capital,
    flag,
    languages,
    subregion,
    tld,
    currency,
  } = country;
  return (
    <>
      <article className="p-10">
        <section>
          <Link
            className="dark:bg-white px-5 py-1 rounded-sm shadow-md shadow-gray-500 hover:shadow-gray-300 hover:drop-shadow-lg cursor-pointer"
            to={'/'}
          >
            <span>Back</span>
          </Link>
        </section>
        <section className="grid grid-cols-1 gap-8 mt-5 dark:text-white-background">
          <img
            src={flag}
            alt="flag"
            className="rounded-lg my-5 drop-shadow-xl object-cover sm:w-1/2 md:w-80"
          />
          <section>
            <h2 className="text-title font-bold">{name}</h2>
            <section className="grid grid-cols-1 sm:grid-cols-2 sm:gap-2 gap-y-6 mt-5">
              <div className="text-md">
                <p className="font-semibold mb-3">
                  Native Name:{' '}
                  <span className="font-light">
                    {nativeName ?? 'Not available'}
                  </span>
                </p>
                <p className="font-semibold my-3">
                  Population:{' '}
                  <span className="font-light">
                    {population ?? 'Not available'}
                  </span>
                </p>
                <p className="font-semibold my-3">
                  Region:{' '}
                  <span className="font-light">
                    {region ?? 'Not available'}
                  </span>
                </p>
                <p className="font-semibold my-3">
                  Sub Region:{' '}
                  <span className="font-light">
                    {subregion ?? 'Not available'}
                  </span>
                </p>
                <p className="font-semibold my-3">
                  Capital:{' '}
                  <span className="font-light">
                    {capital ?? 'Not available'}
                  </span>
                </p>
              </div>
              <div className="text-md">
                <p className="font-semibold my-3">
                  Top Level Domain:{' '}
                  <span className="font-light">{tld ?? 'Not available'}</span>
                </p>
                <p className="font-semibold my-3">
                  Currencie:{' '}
                  <span className="font-light">
                    {currency ?? 'Not available'}
                  </span>
                </p>
                <p className="font-semibold my-3">
                  Languages:{' '}
                  <span className="font-light">
                    {languages ?? 'Not available'}
                  </span>
                </p>
              </div>
            </section>
          </section>
        </section>
      </article>
    </>
  );
}
