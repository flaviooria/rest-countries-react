import React, { useState, useEffect } from 'react';
import ListCards from '../layouts/list-card/ListCard';
import { useNavigate } from 'react-router-dom';
import NavBarFields from '../layouts/navbar-layout/NavBarFields';

export default function Home() {
  const urlByName = 'https://restcountries.com/v3.1/name/';

  const [queryCountry, setQueryCountry] = useState('');
  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (queryCountry.length >= 3) {
      setIsLoading(true);
      const setCountrySearched = async () => {
        const response = await fetch(`${urlByName}/${queryCountry}?fields=name,borders,capital,region,subregion,population,flags,nativeName,tld,languages,currencies`);
        const data = await response.json();
        setTimeout(() => {
          setCountries([...data]);
          setIsLoading(false);
          setQueryCountry('');
        }, 1500);
      };

      setCountrySearched();
      navigate('/');
    }
  }, [queryCountry]);

  const handleQueryCountrie = (e) => {
    setQueryCountry(e.target.value);
  };



  return (
    <>
      <NavBarFields
        handle={handleQueryCountrie}
        setCountries={setCountries}
        query={queryCountry}
        setLoading={setIsLoading}
      ></NavBarFields>
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
