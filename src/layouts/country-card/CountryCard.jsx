import React from 'react';
import { Link } from 'react-router-dom';

export default function CountryCard({ country }) {
  const { name, population, region, capital, flag, languages, subregion } = country;
  return (
    <div className="country-card">
      <div className="country-button">
        <Link to={'/'}>Back</Link>
      </div>
      <div className="country-detail">
        <div className="country-detail-image">
          <img src={flag} alt="flag country" />
        </div>
        <div className="country-detail-content">
          <h2>{name}</h2>
          <div className="country-detail-content__props">
            <div>
              <p className="props">
                Native Name: <span></span>
              </p>
              <p className="props">
                Population: <span>{population}</span>
              </p>
              <p className="props">
                Region: <span>{region}</span>
              </p>
              <p className="props">
                Sub Region: <span>{subregion ?? 'No disponible'}</span>
              </p>
              <p className="props">
                Capital: <span>{capital}</span>
              </p>
            </div>
            <div>
              <p className="props">
                Top Level Domain: <span></span>
              </p>
              <p className="props">
                Currencie: <span></span>
              </p>
              <p className="props">
                Languages: <span>{languages && Object.values(languages).join(', ')}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
