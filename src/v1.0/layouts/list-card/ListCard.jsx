import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../../components/card/Card';
import getCountryModel from '../../utils/country';

export default function ListCards({ countries }) {
  return (
    <div className="cards-content">
      {countries.map((country) => {
        const countryModel = getCountryModel(country);
        const { name, population, region, capital, flag} = countryModel;
        return (
          <Link
            key={name}
            to={`/country/${name}`}
            state={countryModel}
            className="link-country"
          >
            <Card
              name={name}
              capital={capital}
              population={population}
              region={region}
              flag={flag}
            ></Card>
          </Link>
        );
      })}
    </div>
  );
}
