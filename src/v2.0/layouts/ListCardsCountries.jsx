import React from 'react';
import getCountryModel from '../../shared/utils/country.js';
import { Card } from '../components/card/Card';

export function ListCardsCountries(props) {
  return (
    <main className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-y-5 p-2  place-items-center">
      {props.countries.map((country) => {
        const countryModel = getCountryModel(country);
        const { name, population, region, capital, flag } = countryModel;
        return (
          <Card
            key={name}
            name={name}
            population={population}
            flag={flag}
            capital={capital}
            region={region} />
        );
      })}
    </main>
  );
}
