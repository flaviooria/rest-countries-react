import React from 'react';
import Card from '../../components/card/Card';
import getCountryModel from '../../utils/country';

export default function ListCards({ countries }) {
  return (
    <div className="cards-content">
      {countries.map((country) => {
        const { name, population, region, capital, flag } = getCountryModel(country);
        return (
          <Card
            name={name}
            capital={capital}
            population={population}
            region={region}
            flag={flag}
            key={name}
          ></Card>
        );
      })}
    </div>
  );
}
