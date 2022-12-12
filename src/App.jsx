import React, { useEffect, useState } from 'react';
import ListCards from './layouts/list-card/list-card-layout';
import './app.scss'

export default function App() {
  const urlByName = 'https://restcountries.com/v3.1/name/';
  const urlByCode = 'https://restcountries.com/v3.1/alpha?codes=col,pe,arg';

  const [queryCountry, setQueryCountry] = useState('');
  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (queryCountry.length >= 3) {
      setIsLoading(true)
      return async () => {
        const response = await fetch(`${urlByName}/${queryCountry}`);
        const data = await response.json();

        setTimeout(() => {
          console.log(data);
          setCountries(data);
          setIsLoading(false);
          setQueryCountry('')
        },1500)

      };
    }
  }, [queryCountry]);

  const handleQueryCountrie = (e) => {
    setQueryCountry(e.target.value);
  };

  const dataCountrie = countries[0];

  const country = {
    name: dataCountrie?.name.common,
    capital: dataCountrie?.capital,
    region: dataCountrie?.region,
    population: dataCountrie?.population,
    flag: dataCountrie?.flags.svg,
    borders: dataCountrie?.borders,
  };

  return (
    <>
      <h1>Descubriendo el mundo</h1>
      <section>
        <input
          type="search"
          name="searchCountry"
          placeholder="España"
          onChange={handleQueryCountrie}
          value={queryCountry}
        />
      </section>
      <ListCards></ListCards>
      {/* <section>
        {
          isLoading ? (<p>Cargando ... </p>) : null 
        }
        {dataCountrie ? (
          <>
            <p>{country.name}</p>
            <p>{country.capital}</p>
            <p>{country.region}</p>
            <p>{country.population}</p>
            <img src={country.flag} alt="flag country" />
            <p>{country.borders.join(', ')}</p>
          </>
        ) : null}
      </section> */}
    </>
  );
}
