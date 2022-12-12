import React, { useEffect, useState } from 'react';
import ListCards from './layouts/list-card/ListCard';
import './app.scss';
import Navbar from './components/navbar/Navbar';

export default function App() {
  const urlByName = 'https://restcountries.com/v3.1/name/';
  // const urlByCode = 'https://restcountries.com/v3.1/alpha?codes=col,pe,arg';

  const [queryCountry, setQueryCountry] = useState('');
  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (queryCountry.length >= 3) {
      setIsLoading(true);
      const setCountrySearched = async () => {
        const response = await fetch(`${urlByName}/${queryCountry}`);
        const data = await response.json();

        setTimeout(() => {
          console.log(data);
          setCountries([...data]);
          setIsLoading(false);
        }, 1500);
      };

      setCountrySearched();
    }
  }, [queryCountry]);

  const handleQueryCountrie = (e) => {
    setQueryCountry(e.target.value);
  };

  return (
    <>
      <Navbar
        handle={handleQueryCountrie}
        query={queryCountry}
        setCountries={setCountries}
        setLoading={setIsLoading}
      ></Navbar>
      {isLoading ? (
        <div className="spinner-container">
          <div className="lds-dual-ring"></div>
        </div>
      ) : (
        <ListCards countries={countries}></ListCards>
      )}
    </>
  );
}
