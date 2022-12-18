import React from "react";
import { Link } from "react-router-dom";

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
    <div className="country-card">
      <Link to={"/"} className="country-button">
        <span>Back</span>
      </Link>
      <div className="country-detail">
        <div className="country-detail-image">
          <img src={flag} alt="flag country" />
        </div>
        <div className="country-detail-content">
          <h2>{name}</h2>
          <div className="country-detail-content__props">
            <div>
              <p className="props">
                Native Name: <span>{nativeName ?? "Not available"}</span>
              </p>
              <p className="props">
                Population: <span>{population ?? "Not available"}</span>
              </p>
              <p className="props">
                Region: <span>{region ?? "Not available"}</span>
              </p>
              <p className="props">
                Sub Region: <span>{subregion ?? "Not available"}</span>
              </p>
              <p className="props">
                Capital: <span>{capital ?? "Not available"}</span>
              </p>
            </div>
            <div>
              <p className="props">
                Top Level Domain: <span>{tld ?? "Not available"}</span>
              </p>
              <p className="props">
                Currencie: <span>{currency ?? "Not available"}</span>
              </p>
              <p className="props">
                Languages: <span>{languages ?? "Not available"}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
